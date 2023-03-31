# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/ote-godaddy.com/certificates/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CertificateActionRetrieveRequest(
    certificate_id="corrupti",
)
    
res = s.v1.certificate_action_retrieve(req)

if res.array_of_certificate_action is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v1

* `certificate_action_retrieve` - Retrieve all certificate actions
* `certificate_alternate_email_address` - Add alternate email address
* `certificate_callback_delete` - Unregister system callback
* `certificate_callback_get` - Retrieve system stateful action callback url
* `certificate_callback_replace` - Register of certificate action callback
* `certificate_cancel` - Cancel a pending certificate
* `certificate_create` - Create a pending order for certificate
* `certificate_download` - Download certificate
* `certificate_download_entitlement` - Download certificate by entitlement
* `certificate_email_history` - Retrieve email history
* `certificate_get` - Retrieve certificate details
* `certificate_get_entitlement` - Search for certificate details by entitlement
* `certificate_reissue` - Reissue active certificate
* `certificate_renew` - Renew active certificate
* `certificate_resend_email` - Resend an email
* `certificate_resend_email_address` - Resend email to email address
* `certificate_revoke` - Revoke active certificate
* `certificate_siteseal_get` - Get Site seal
* `certificate_validate` - Validate a pending order for certificate
* `certificate_verifydomaincontrol` - Check Domain Control

### v2

* `get_acme_external_account_binding` - Retrieves the external account binding for the specified customer
* `get_certificate_detail_by_cert_identifier` - Retrieve individual certificate details
* `get_customer_certificates_by_customer_id` - Retrieve customer's certificates
* `get_domain_details_by_domain` - Retrieve detailed information for supplied domain
* `get_domain_information_by_certificate_id` - Retrieve domain verification status
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
