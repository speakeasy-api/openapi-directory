<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PolicytroubleshooterIamTroubleshootRequest(
    dollar_xgafv="2",
    google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_request=shared.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest(
        access_tuple=shared.GoogleCloudPolicytroubleshooterV1betaAccessTuple(
            full_resource_name="provident",
            permission="distinctio",
            principal="quibusdam",
        ),
    ),
    access_token="unde",
    alt="proto",
    callback="corrupti",
    fields_="illum",
    key="vel",
    oauth_token="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.iam.policytroubleshooter_iam_troubleshoot(req, operations.PolicytroubleshooterIamTroubleshootSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->