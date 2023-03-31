<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.YoutubeAnalyticsGroupItemsDeleteRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    id="nulla",
    key="corrupti",
    oauth_token="illum",
    on_behalf_of_content_owner="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.group_items.youtube_analytics_group_items_delete(req, operations.YoutubeAnalyticsGroupItemsDeleteSecurity(
    option1=operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.empty_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->