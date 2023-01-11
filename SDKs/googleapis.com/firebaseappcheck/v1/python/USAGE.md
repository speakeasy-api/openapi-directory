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
        parent="nemo",
    ),
    query_params=operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams(
        dollar_xgafv="1",
        access_token="iure",
        alt="media",
        callback="molestias",
        fields="pariatur",
        key="omnis",
        names=[
            "officiis",
            "adipisci",
        ],
        oauth_token="omnis",
        pretty_print=True,
        quota_user="saepe",
        upload_type="ut",
        upload_protocol="eligendi",
    ),
)
    
res = s.projects.firebaseappcheck_projects_apps_app_attest_config_batch_get(req)

if res.google_firebase_appcheck_v1_batch_get_app_attest_configs_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->