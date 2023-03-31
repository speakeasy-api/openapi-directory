<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest(
    dollar_xgafv="2",
    generate_access_token_request=shared.GenerateAccessTokenRequest(
        delegates=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        lifetime="nulla",
        scope=[
            "illum",
            "vel",
            "error",
        ],
    ),
    access_token="deserunt",
    alt="media",
    callback="iure",
    fields_="magnam",
    key="debitis",
    name="ipsa",
    oauth_token="delectus",
    pretty_print=False,
    quota_user="tempora",
    upload_type="suscipit",
    upload_protocol="molestiae",
)
    
res = s.projects.iamcredentials_projects_service_accounts_generate_access_token(req, operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.generate_access_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->