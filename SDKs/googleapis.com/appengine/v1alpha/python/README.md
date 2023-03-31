# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/appengine/v1alpha/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AppengineAppsAuthorizedCertificatesCreateRequest(
    dollar_xgafv="2",
    authorized_certificate=shared.AuthorizedCertificate(
        certificate_raw_data=shared.CertificateRawData(
            private_key="provident",
            public_certificate="distinctio",
        ),
        display_name="quibusdam",
        domain_mappings_count=602763,
        domain_names=[
            "corrupti",
            "illum",
            "vel",
            "error",
        ],
        expire_time="deserunt",
        id="suscipit",
        managed_certificate=shared.ManagedCertificate(
            last_renewal_time="iure",
            status="PENDING",
        ),
        name="debitis",
        visible_domain_mappings=[
            "delectus",
        ],
    ),
    access_token="tempora",
    alt="media",
    apps_id="molestiae",
    callback="minus",
    fields_="placeat",
    key="voluptatum",
    oauth_token="iusto",
    pretty_print=False,
    quota_user="excepturi",
    upload_type="nisi",
    upload_protocol="recusandae",
)
    
res = s.apps.appengine_apps_authorized_certificates_create(req, operations.AppengineAppsAuthorizedCertificatesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.authorized_certificate is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### apps

* `appengine_apps_authorized_certificates_create` - Uploads the specified SSL certificate.
* `appengine_apps_authorized_certificates_delete` - Deletes the specified SSL certificate.
* `appengine_apps_authorized_certificates_get` - Gets the specified SSL certificate.
* `appengine_apps_authorized_certificates_list` - Lists all SSL certificates the user is authorized to administer.
* `appengine_apps_authorized_certificates_patch` - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* `appengine_apps_authorized_domains_list` - Lists all domains the user is authorized to administer.
* `appengine_apps_domain_mappings_create` - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* `appengine_apps_domain_mappings_delete` - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* `appengine_apps_domain_mappings_get` - Gets the specified domain mapping.
* `appengine_apps_domain_mappings_list` - Lists the domain mappings on an application.
* `appengine_apps_domain_mappings_patch` - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* `appengine_apps_locations_get` - Gets information about a location.
* `appengine_apps_locations_list` - Lists information about the supported locations for this service.
* `appengine_apps_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `appengine_apps_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### projects

* `appengine_projects_locations_get` - Gets information about a location.
* `appengine_projects_locations_list` - Lists information about the supported locations for this service.
* `appengine_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `appengine_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
