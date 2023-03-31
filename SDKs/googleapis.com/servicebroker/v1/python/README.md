# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/servicebroker/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ServicebrokerGetIamPolicyRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    options_requested_policy_version=847252,
    pretty_print=False,
    quota_user="vel",
    resource="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.v1.servicebroker_get_iam_policy(req, operations.ServicebrokerGetIamPolicySecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v1

* `servicebroker_get_iam_policy` - Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.
* `servicebroker_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any
existing policy.

Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
* `servicebroker_test_iam_permissions` - Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
