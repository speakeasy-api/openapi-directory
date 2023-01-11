<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.YoutubeAnalyticsGroupItemsDeleteRequest(
    security=operations.YoutubeAnalyticsGroupItemsDeleteSecurity(
        option1=operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.YoutubeAnalyticsGroupItemsDeleteQueryParams(
        dollar_xgafv="2",
        access_token="consequatur",
        alt="proto",
        callback="et",
        fields="quis",
        id="unde",
        key="dolor",
        oauth_token="id",
        on_behalf_of_content_owner="mollitia",
        pretty_print=True,
        quota_user="dolores",
        upload_type="qui",
        upload_protocol="et",
    ),
)
    
res = s.group_items.youtube_analytics_group_items_delete(req)

if res.empty_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->