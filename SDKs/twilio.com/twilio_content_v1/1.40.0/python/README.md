# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twilio.com/twilio_content_v1/1.40.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteContentRequest(
    sid="corrupti",
)
    
res = s.delete_content(req, operations.DeleteContentSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `delete_content` - Deletes a Content resource
* `fetch_approval_fetch` - Fetch a Content resource's approval status by its unique Content Sid
* `fetch_content` - Fetch a Content resource by its unique Content Sid
* `list_content` - Retrieve a list of Contents belonging to the account used to make the request
* `list_content_and_approvals` - Retrieve a list of Contents with approval statuses belonging to the account used to make the request
* `list_legacy_content` - Retrieve a list of Legacy Contents belonging to the account used to make the request
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
