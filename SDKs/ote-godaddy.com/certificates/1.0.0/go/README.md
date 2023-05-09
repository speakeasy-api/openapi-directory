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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CertificateActionRetrieve(ctx, operations.CertificateActionRetrieveRequest{
        CertificateID: "corrupti",
    })
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


### [V1](docs/v1/README.md)

* [CertificateActionRetrieve](docs/v1/README.md#certificateactionretrieve) - Retrieve all certificate actions
* [CertificateAlternateEmailAddress](docs/v1/README.md#certificatealternateemailaddress) - Add alternate email address
* [CertificateCallbackDelete](docs/v1/README.md#certificatecallbackdelete) - Unregister system callback
* [CertificateCallbackGet](docs/v1/README.md#certificatecallbackget) - Retrieve system stateful action callback url
* [CertificateCallbackReplace](docs/v1/README.md#certificatecallbackreplace) - Register of certificate action callback
* [CertificateCancel](docs/v1/README.md#certificatecancel) - Cancel a pending certificate
* [CertificateCreate](docs/v1/README.md#certificatecreate) - Create a pending order for certificate
* [CertificateDownload](docs/v1/README.md#certificatedownload) - Download certificate
* [CertificateDownloadEntitlement](docs/v1/README.md#certificatedownloadentitlement) - Download certificate by entitlement
* [CertificateEmailHistory](docs/v1/README.md#certificateemailhistory) - Retrieve email history
* [CertificateGet](docs/v1/README.md#certificateget) - Retrieve certificate details
* [CertificateGetEntitlement](docs/v1/README.md#certificategetentitlement) - Search for certificate details by entitlement
* [CertificateReissue](docs/v1/README.md#certificatereissue) - Reissue active certificate
* [CertificateRenew](docs/v1/README.md#certificaterenew) - Renew active certificate
* [CertificateResendEmail](docs/v1/README.md#certificateresendemail) - Resend an email
* [CertificateResendEmailAddress](docs/v1/README.md#certificateresendemailaddress) - Resend email to email address
* [CertificateRevoke](docs/v1/README.md#certificaterevoke) - Revoke active certificate
* [CertificateSitesealGet](docs/v1/README.md#certificatesitesealget) - Get Site seal
* [CertificateValidate](docs/v1/README.md#certificatevalidate) - Validate a pending order for certificate
* [CertificateVerifydomaincontrol](docs/v1/README.md#certificateverifydomaincontrol) - Check Domain Control

### [V2](docs/v2/README.md)

* [GetAcmeExternalAccountBinding](docs/v2/README.md#getacmeexternalaccountbinding) - Retrieves the external account binding for the specified customer
* [GetCertificateDetailByCertIdentifier](docs/v2/README.md#getcertificatedetailbycertidentifier) - Retrieve individual certificate details
* [GetCustomerCertificatesByCustomerID](docs/v2/README.md#getcustomercertificatesbycustomerid) - Retrieve customer's certificates
* [GetDomainDetailsByDomain](docs/v2/README.md#getdomaindetailsbydomain) - Retrieve detailed information for supplied domain
* [GetDomainInformationByCertificateID](docs/v2/README.md#getdomaininformationbycertificateid) - Retrieve domain verification status
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
