# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ote-godaddy.com/certificates/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CertificateActionRetrieveRequest{
        CertificateID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.V1.CertificateActionRetrieve(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ArrayOfCertificateAction != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### V1

* `CertificateActionRetrieve` - Retrieve all certificate actions
* `CertificateAlternateEmailAddress` - Add alternate email address
* `CertificateCallbackDelete` - Unregister system callback
* `CertificateCallbackGet` - Retrieve system stateful action callback url
* `CertificateCallbackReplace` - Register of certificate action callback
* `CertificateCancel` - Cancel a pending certificate
* `CertificateCreate` - Create a pending order for certificate
* `CertificateDownload` - Download certificate
* `CertificateDownloadEntitlement` - Download certificate by entitlement
* `CertificateEmailHistory` - Retrieve email history
* `CertificateGet` - Retrieve certificate details
* `CertificateGetEntitlement` - Search for certificate details by entitlement
* `CertificateReissue` - Reissue active certificate
* `CertificateRenew` - Renew active certificate
* `CertificateResendEmail` - Resend an email
* `CertificateResendEmailAddress` - Resend email to email address
* `CertificateRevoke` - Revoke active certificate
* `CertificateSitesealGet` - Get Site seal
* `CertificateValidate` - Validate a pending order for certificate
* `CertificateVerifydomaincontrol` - Check Domain Control

### V2

* `GetAcmeExternalAccountBinding` - Retrieves the external account binding for the specified customer
* `GetCertificateDetailByCertIdentifier` - Retrieve individual certificate details
* `GetCustomerCertificatesByCustomerID` - Retrieve customer's certificates
* `GetDomainDetailsByDomain` - Retrieve detailed information for supplied domain
* `GetDomainInformationByCertificateID` - Retrieve domain verification status
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
