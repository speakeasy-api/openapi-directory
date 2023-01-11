<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudtasksAPIQueueUpdateRequest(
    security=operations.CloudtasksAPIQueueUpdateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.CloudtasksAPIQueueUpdateQueryParams(
        dollar_xgafv="2",
        access_token="enim",
        alt="json",
        app_id="quisquam",
        callback="sit",
        fields="qui",
        key="voluptates",
        oauth_token="voluptate",
        pretty_print=False,
        quota_user="error",
        upload_type="consequuntur",
        upload_protocol="illo",
    ),
    request=shared.HTTPBody(
        content_type="quia",
        data="sunt",
        extensions=[
            {
                "repellat": "explicabo",
            },
            {
                "animi": "omnis",
                "eum": "recusandae",
                "doloribus": "officia",
            },
        ],
    ),
)
    
res = s.api.cloudtasks_api_queue_update(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->