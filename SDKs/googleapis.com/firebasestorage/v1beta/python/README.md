# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/firebasestorage/v1beta/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `firebasestorage_projects_buckets_add_firebase` - Links a Google Cloud Storage bucket to a Firebase project.
* `firebasestorage_projects_buckets_get` - Gets a single linked storage bucket.
* `firebasestorage_projects_buckets_list` - Lists the linked storage buckets for a project.
* `firebasestorage_projects_buckets_remove_firebase` - Unlinks a linked Google Cloud Storage bucket from a Firebase project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
