# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/cloudasset/v1p1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudassetIamPoliciesSearchAllRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    page_size=847252,
    page_token="vel",
    pretty_print=False,
    query="error",
    quota_user="deserunt",
    scope="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
)
    
res = s.iam_policies.cloudasset_iam_policies_search_all(req, operations.CloudassetIamPoliciesSearchAllSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.search_all_iam_policies_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### iam_policies

* `cloudasset_iam_policies_search_all` - Searches all the IAM policies within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the IAM policies within a scope, even if they don't have `.getIamPolicy` permission of all the IAM policies. Callers should have `cloud.assets.SearchAllIamPolicies` permission on the requested scope, otherwise the request will be rejected.

### resources

* `cloudasset_resources_search_all` - Searches all the resources within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the resources within a scope, even if they don't have `.get` permission of all the resources. Callers should have `cloud.assets.SearchAllResources` permission on the requested scope, otherwise the request will be rejected.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
