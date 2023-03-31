# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/privateca/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest(
    dollar_xgafv="2",
    activate_certificate_authority_request=shared.ActivateCertificateAuthorityRequest(
        pem_ca_certificate="provident",
        request_id="distinctio",
        subordinate_config=shared.SubordinateConfig(
            certificate_authority="quibusdam",
            pem_issuer_chain=shared.SubordinateConfigChain(
                pem_certificates=[
                    "nulla",
                    "corrupti",
                    "illum",
                ],
            ),
        ),
    ),
    access_token="vel",
    alt="media",
    callback="deserunt",
    fields_="suscipit",
    key="iure",
    name="magnam",
    oauth_token="debitis",
    pretty_print=False,
    quota_user="ipsa",
    upload_type="delectus",
    upload_protocol="tempora",
)
    
res = s.projects.privateca_projects_locations_ca_pools_certificate_authorities_activate(req, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `privateca_projects_locations_ca_pools_certificate_authorities_activate` - Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
* `privateca_projects_locations_ca_pools_certificate_authorities_certificate_revocation_lists_list` - Lists CertificateRevocationLists.
* `privateca_projects_locations_ca_pools_certificate_authorities_create` - Create a new CertificateAuthority in a given Project and Location.
* `privateca_projects_locations_ca_pools_certificate_authorities_disable` - Disable a CertificateAuthority.
* `privateca_projects_locations_ca_pools_certificate_authorities_enable` - Enable a CertificateAuthority.
* `privateca_projects_locations_ca_pools_certificate_authorities_fetch` - Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
* `privateca_projects_locations_ca_pools_certificate_authorities_list` - Lists CertificateAuthorities.
* `privateca_projects_locations_ca_pools_certificate_authorities_undelete` - Undelete a CertificateAuthority that has been deleted.
* `privateca_projects_locations_ca_pools_certificates_create` - Create a new Certificate in a given Project, Location from a particular CaPool.
* `privateca_projects_locations_ca_pools_certificates_list` - Lists Certificates.
* `privateca_projects_locations_ca_pools_certificates_revoke` - Revoke a Certificate.
* `privateca_projects_locations_ca_pools_create` - Create a CaPool.
* `privateca_projects_locations_ca_pools_fetch_ca_certs` - FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all ACTIVE CertificateAuthority resources in the CaPool.
* `privateca_projects_locations_ca_pools_list` - Lists CaPools.
* `privateca_projects_locations_certificate_templates_create` - Create a new CertificateTemplate in a given Project and Location.
* `privateca_projects_locations_certificate_templates_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `privateca_projects_locations_certificate_templates_list` - Lists CertificateTemplates.
* `privateca_projects_locations_certificate_templates_patch` - Update a CertificateTemplate.
* `privateca_projects_locations_certificate_templates_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `privateca_projects_locations_certificate_templates_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `privateca_projects_locations_list` - Lists information about the supported locations for this service.
* `privateca_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `privateca_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `privateca_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `privateca_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
