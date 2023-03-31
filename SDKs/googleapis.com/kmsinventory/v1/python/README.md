# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/kmsinventory/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.KmsinventoryOrganizationsProtectedResourcesSearchRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    crypto_key="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    page_size=423655,
    page_token="error",
    pretty_print=False,
    quota_user="deserunt",
    scope="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
)
    
res = s.organizations.kmsinventory_organizations_protected_resources_search(req, operations.KmsinventoryOrganizationsProtectedResourcesSearchSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_kms_inventory_v1_search_protected_resources_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### organizations

* `kmsinventory_organizations_protected_resources_search` - Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.

### projects

* `kmsinventory_projects_crypto_keys_list` - Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.
* `kmsinventory_projects_locations_key_rings_crypto_keys_get_protected_resources_summary` - Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
