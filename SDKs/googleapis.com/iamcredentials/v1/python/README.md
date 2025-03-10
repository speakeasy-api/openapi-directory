# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/iamcredentials/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `iamcredentials_projects_service_accounts_generate_access_token` - Generates an OAuth 2.0 access token for a service account.
* `iamcredentials_projects_service_accounts_generate_id_token` - Generates an OpenID Connect ID token for a service account.
* `iamcredentials_projects_service_accounts_sign_blob` - Signs a blob using a service account's system-managed private key.
* `iamcredentials_projects_service_accounts_sign_jwt` - Signs a JWT using a service account's system-managed private key.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
