<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PolicytroubleshooterIamTroubleshootRequest(
    security=operations.PolicytroubleshooterIamTroubleshootSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.PolicytroubleshooterIamTroubleshootQueryParams(
        dollar_xgafv="1",
        access_token="fugiat",
        alt="proto",
        callback="ut",
        fields="dolore",
        key="vel",
        oauth_token="vel",
        pretty_print=True,
        quota_user="provident",
        upload_type="vel",
        upload_protocol="asperiores",
    ),
    request=shared.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest(
        access_tuple=shared.GoogleCloudPolicytroubleshooterV1betaAccessTuple(
            full_resource_name="sit",
            permission="dolorem",
            principal="delectus",
        ),
    ),
)
    
res = s.iam.policytroubleshooter_iam_troubleshoot(req)

if res.google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->