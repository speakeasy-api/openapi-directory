<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.StorageBucketAccessControlsDeleteRequest(
    security=operations.StorageBucketAccessControlsDeleteSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.StorageBucketAccessControlsDeletePathParams(
        bucket="reiciendis",
        entity="nemo",
    ),
    query_params=operations.StorageBucketAccessControlsDeleteQueryParams(
        alt="json",
        fields="ratione",
        key="veniam",
        oauth_token="reiciendis",
        pretty_print=False,
        quota_user="temporibus",
        user_ip="dolor",
    ),
)
    
res = s.bucket_access_controls.storage_bucket_access_controls_delete(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->