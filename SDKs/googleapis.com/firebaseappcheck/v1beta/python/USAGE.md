<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest(
    security=operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity(
        option1=operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetPathParams(
        parent="non",
    ),
    query_params=operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams(
        dollar_xgafv="2",
        access_token="omnis",
        alt="json",
        callback="sed",
        fields="accusantium",
        key="at",
        names=[
            "pariatur",
            "earum",
            "error",
        ],
        oauth_token="aut",
        pretty_print=False,
        quota_user="qui",
        upload_type="id",
        upload_protocol="enim",
    ),
)
    
res = s.projects.firebaseappcheck_projects_apps_app_attest_config_batch_get(req)

if res.google_firebase_appcheck_v1beta_batch_get_app_attest_configs_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->