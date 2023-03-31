# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/chromepolicy/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest(
    dollar_xgafv="2",
    google_chrome_policy_versions_v1_batch_delete_group_policies_request=shared.GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest(
        requests=[
            shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest(
                policy_schema="distinctio",
                policy_target_key=shared.GoogleChromePolicyVersionsV1PolicyTargetKey(
                    additional_target_keys={
                        "unde": "nulla",
                        "corrupti": "illum",
                        "vel": "error",
                        "deserunt": "suscipit",
                    },
                    target_resource="iure",
                ),
            ),
            shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest(
                policy_schema="magnam",
                policy_target_key=shared.GoogleChromePolicyVersionsV1PolicyTargetKey(
                    additional_target_keys={
                        "ipsa": "delectus",
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                    target_resource="iusto",
                ),
            ),
            shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest(
                policy_schema="excepturi",
                policy_target_key=shared.GoogleChromePolicyVersionsV1PolicyTargetKey(
                    additional_target_keys={
                        "recusandae": "temporibus",
                        "ab": "quis",
                    },
                    target_resource="veritatis",
                ),
            ),
        ],
    ),
    access_token="deserunt",
    alt="json",
    callback="ipsam",
    customer="repellendus",
    fields_="sapiente",
    key="quo",
    oauth_token="odit",
    pretty_print=False,
    quota_user="at",
    upload_type="at",
    upload_protocol="maiores",
)
    
res = s.customers.chromepolicy_customers_policies_groups_batch_delete(req, operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_protobuf_empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### customers

* `chromepolicy_customers_policies_groups_batch_delete` - Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicy_customers_policies_groups_batch_modify` - Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicy_customers_policies_groups_list_group_priority_ordering` - Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicy_customers_policies_groups_update_group_priority_ordering` - Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicy_customers_policies_networks_define_certificate` - Creates a certificate at a specified OU for a customer.
* `chromepolicy_customers_policies_networks_define_network` - Define a new network.
* `chromepolicy_customers_policies_networks_remove_certificate` - Remove an existing certificate by guid.
* `chromepolicy_customers_policies_networks_remove_network` - Remove an existing network by guid.
* `chromepolicy_customers_policies_orgunits_batch_inherit` - Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicy_customers_policies_orgunits_batch_modify` - Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicy_customers_policies_resolve` - Gets the resolved policy values for a list of policies that match a search query.
* `chromepolicy_customers_policy_schemas_get` - Get a specific policy schema for a customer by its resource name.
* `chromepolicy_customers_policy_schemas_list` - Gets a list of policy schemas that match a specified filter value for a given customer.

### media

* `chromepolicy_media_upload` - Creates an enterprise file from the content provided by user. Returns a public download url for end user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
