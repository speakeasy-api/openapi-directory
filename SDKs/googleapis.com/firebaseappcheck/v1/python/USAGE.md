<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    names=[
        "illum",
        "vel",
        "error",
    ],
    oauth_token="deserunt",
    parent="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.projects.firebaseappcheck_projects_apps_app_attest_config_batch_get(req, operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity(
    option1=operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.google_firebase_appcheck_v1_batch_get_app_attest_configs_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->