# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/iap/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.IapProjectsBrandsCreateRequest(
    dollar_xgafv="2",
    brand_input=shared.BrandInput(
        application_title="provident",
        support_email="distinctio",
    ),
    access_token="quibusdam",
    alt="media",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    parent="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.projects.iap_projects_brands_create(req, operations.IapProjectsBrandsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.brand is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `iap_projects_brands_create` - Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.
* `iap_projects_brands_identity_aware_proxy_clients_create` - Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.
* `iap_projects_brands_identity_aware_proxy_clients_list` - Lists the existing clients for the brand.
* `iap_projects_brands_identity_aware_proxy_clients_reset_secret` - Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.
* `iap_projects_brands_list` - Lists the existing brands for the project.
* `iap_projects_iap_tunnel_locations_dest_groups_create` - Creates a new TunnelDestGroup.
* `iap_projects_iap_tunnel_locations_dest_groups_delete` - Deletes a TunnelDestGroup.
* `iap_projects_iap_tunnel_locations_dest_groups_get` - Retrieves an existing TunnelDestGroup.
* `iap_projects_iap_tunnel_locations_dest_groups_list` - Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`
* `iap_projects_iap_tunnel_locations_dest_groups_patch` - Updates a TunnelDestGroup.

### v1

* `iap_get_iam_policy` - Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* `iap_get_iap_settings` - Gets the IAP settings on a particular IAP protected resource.
* `iap_set_iam_policy` - Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* `iap_test_iam_permissions` - Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* `iap_update_iap_settings` - Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
