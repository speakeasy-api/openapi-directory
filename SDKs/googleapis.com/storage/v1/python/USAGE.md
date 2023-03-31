<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.StorageBucketAccessControlsDeleteRequest(
    alt="json",
    bucket="corrupti",
    entity="provident",
    fields_="distinctio",
    key="quibusdam",
    oauth_token="unde",
    pretty_print=False,
    quota_user="nulla",
    upload_type="corrupti",
    user_ip="illum",
    user_project="vel",
)
    
res = s.bucket_access_controls.storage_bucket_access_controls_delete(req, operations.StorageBucketAccessControlsDeleteSecurity(
    option1=operations.StorageBucketAccessControlsDeleteSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->