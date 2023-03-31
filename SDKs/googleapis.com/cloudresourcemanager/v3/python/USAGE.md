<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudresourcemanagerEffectiveTagsListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    page_size=847252,
    page_token="vel",
    parent="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.effective_tags.cloudresourcemanager_effective_tags_list(req, operations.CloudresourcemanagerEffectiveTagsListSecurity(
    option1=operations.CloudresourcemanagerEffectiveTagsListSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.list_effective_tags_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->