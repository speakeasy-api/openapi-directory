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
        dollar_xgafv="2",
        access_token="commodi",
        alt="proto",
        callback="aut",
        fields="culpa",
        key="doloribus",
        oauth_token="nulla",
        pretty_print=True,
        quota_user="accusantium",
        upload_type="alias",
        upload_protocol="dolor",
    ),
    request=shared.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest(
        access_tuple=shared.GoogleCloudPolicytroubleshooterV1AccessTuple(
            full_resource_name="voluptatem",
            permission="veritatis",
            principal="dolores",
        ),
    ),
)
    
res = s.iam.policytroubleshooter_iam_troubleshoot(req)

if res.google_cloud_policytroubleshooter_v1_troubleshoot_iam_policy_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->