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