# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/cloudasset/v1p4beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudassetAnalyzeIamPolicyRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    analysis_query_access_selector_permissions=[
        "unde",
        "nulla",
        "corrupti",
        "illum",
    ],
    analysis_query_access_selector_roles=[
        "error",
        "deserunt",
    ],
    analysis_query_identity_selector_identity="suscipit",
    analysis_query_resource_selector_full_resource_name="iure",
    callback="magnam",
    fields_="debitis",
    key="ipsa",
    oauth_token="delectus",
    options_analyze_service_account_impersonation=False,
    options_execution_timeout="tempora",
    options_expand_groups=False,
    options_expand_resources=False,
    options_expand_roles=False,
    options_output_group_edges=False,
    options_output_resource_edges=False,
    parent="suscipit",
    pretty_print=False,
    quota_user="molestiae",
    upload_type="minus",
    upload_protocol="placeat",
)
    
res = s.v1p4beta1.cloudasset_analyze_iam_policy(req, operations.CloudassetAnalyzeIamPolicySecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.analyze_iam_policy_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v1p4beta1

* `cloudasset_analyze_iam_policy` - Analyzes IAM policies to answer which identities have what accesses on which resources.
* `cloudasset_export_iam_policy_analysis` - Exports the answers of which identities have what accesses on which resources to a Google Cloud Storage destination. The output format is the JSON format that represents a AnalyzeIamPolicyResponse in the JSON format. This method implements the google.longrunning.Operation, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. The metadata contains the request to help callers to map responses to requests.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
