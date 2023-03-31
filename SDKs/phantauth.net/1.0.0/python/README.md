# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/phantauth.net/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetClientClientIDRequest(
    client_id="corrupti",
)
    
res = s.client.get_client_client_id_(req)

if res.get_client_client_id_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### client

* `get_client_client_id_` - Get a Client
* `get_client_client_id_token_kind_` - Get a Client Token
* `post_client` - Create a Client Selfie

### domain

* `get_domain_domainname_` - Get a Domain

### fleet

* `get_fleet_fleetname_` - Get a Fleet

### team

* `get_team_teamname_` - Get a Team

### tenant

* `get_tenant_tenantname_` - Get a Tenant

### user

* `get_user_username_` - Get a User
* `get_user_username_token_kind_` - Get a User Token
* `post_user` - Create a User Selfie
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
