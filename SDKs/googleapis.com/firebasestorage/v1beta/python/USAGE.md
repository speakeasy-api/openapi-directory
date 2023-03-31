<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FirebasestorageProjectsBucketsAddFirebaseRequest(
    dollar_xgafv="2",
    request_body={
        "distinctio": "quibusdam",
        "unde": "nulla",
        "corrupti": "illum",
    },
    access_token="vel",
    alt="media",
    bucket="deserunt",
    callback="suscipit",
    fields_="iure",
    key="magnam",
    oauth_token="debitis",
    pretty_print=False,
    quota_user="ipsa",
    upload_type="delectus",
    upload_protocol="tempora",
)
    
res = s.projects.firebasestorage_projects_buckets_add_firebase(req, operations.FirebasestorageProjectsBucketsAddFirebaseSecurity(
    option1=operations.FirebasestorageProjectsBucketsAddFirebaseSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.bucket is not None:
    # handle response
```
<!-- End SDK Example Usage -->