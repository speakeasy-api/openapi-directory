<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FirebasestorageProjectsBucketsAddFirebaseRequest(
    security=operations.FirebasestorageProjectsBucketsAddFirebaseSecurity(
        option1=operations.FirebasestorageProjectsBucketsAddFirebaseSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.FirebasestorageProjectsBucketsAddFirebasePathParams(
        bucket="voluptas",
    ),
    query_params=operations.FirebasestorageProjectsBucketsAddFirebaseQueryParams(
        dollar_xgafv="2",
        access_token="animi",
        alt="media",
        callback="non",
        fields="eligendi",
        key="iure",
        oauth_token="est",
        pretty_print=True,
        quota_user="distinctio",
        upload_type="et",
        upload_protocol="dolor",
    ),
    request={
        "sed": "ipsa",
    },
)
    
res = s.projects.firebasestorage_projects_buckets_add_firebase(req)

if res.bucket is not None:
    # handle response
```
<!-- End SDK Example Usage -->