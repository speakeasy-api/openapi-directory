<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.StorageBucketAccessControlsDeleteRequest(
    security=operations.StorageBucketAccessControlsDeleteSecurity(
        option1=operations.StorageBucketAccessControlsDeleteSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.StorageBucketAccessControlsDeletePathParams(
        bucket="laboriosam",
        entity="quae",
    ),
    query_params=operations.StorageBucketAccessControlsDeleteQueryParams(
        alt="json",
        fields="enim",
        key="numquam",
        oauth_token="earum",
        pretty_print=False,
        quota_user="itaque",
        upload_type="eveniet",
        user_ip="odit",
        user_project="rerum",
    ),
)
    
res = s.bucket_access_controls.storage_bucket_access_controls_delete(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->