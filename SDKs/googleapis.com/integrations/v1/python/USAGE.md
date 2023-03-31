<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.IntegrationsCallbackGenerateTokenRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    code="unde",
    fields_="nulla",
    gcp_project_id="corrupti",
    key="illum",
    oauth_token="vel",
    pretty_print=False,
    product="APIGEE",
    quota_user="deserunt",
    redirect_uri="suscipit",
    state="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.callback.integrations_callback_generate_token(req, operations.IntegrationsCallbackGenerateTokenSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_integrations_v1alpha_generate_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->