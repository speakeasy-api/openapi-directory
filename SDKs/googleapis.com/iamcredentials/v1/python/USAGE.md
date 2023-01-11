<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest(
    security=operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams(
        name="esse",
    ),
    query_params=operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams(
        dollar_xgafv="1",
        access_token="rerum",
        alt="json",
        callback="voluptatem",
        fields="harum",
        key="qui",
        oauth_token="quos",
        pretty_print=True,
        quota_user="sunt",
        upload_type="maiores",
        upload_protocol="et",
    ),
    request=shared.GenerateAccessTokenRequest(
        delegates=[
            "eligendi",
            "tenetur",
            "et",
        ],
        lifetime="consectetur",
        scope=[
            "quas",
            "consequuntur",
        ],
    ),
)
    
res = s.projects.iamcredentials_projects_service_accounts_generate_access_token(req)

if res.generate_access_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->