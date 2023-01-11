<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.IndexingURLNotificationsGetMetadataRequest(
    security=operations.IndexingURLNotificationsGetMetadataSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.IndexingURLNotificationsGetMetadataQueryParams(
        dollar_xgafv="1",
        access_token="voluptate",
        alt="json",
        callback="corporis",
        fields="quod",
        key="et",
        oauth_token="nisi",
        pretty_print=True,
        quota_user="incidunt",
        upload_type="error",
        upload_protocol="incidunt",
        url="odit",
    ),
)
    
res = s.url_notifications.indexing_url_notifications_get_metadata(req)

if res.url_notification_metadata is not None:
    # handle response
```
<!-- End SDK Example Usage -->