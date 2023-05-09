# V2

### Available Operations

* [GetAcmeExternalAccountBinding](#getacmeexternalaccountbinding) - Retrieves the external account binding for the specified customer
* [GetCertificateDetailByCertIdentifier](#getcertificatedetailbycertidentifier) - Retrieve individual certificate details
* [GetCustomerCertificatesByCustomerID](#getcustomercertificatesbycustomerid) - Retrieve customer's certificates
* [GetDomainDetailsByDomain](#getdomaindetailsbydomain) - Retrieve detailed information for supplied domain
* [GetDomainInformationByCertificateID](#getdomaininformationbycertificateid) - Retrieve domain verification status

## GetAcmeExternalAccountBinding

Use this endpoint to retrieve a key identifier and Hash-based Message Authentication Code (HMAC) key for Automated Certificate Management Environment (ACME) External Account Binding (EAB). These credentials can be used with an ACME client that supports EAB (ex. CertBot) to automate the issuance request and deployment of DV SSL certificates

### Example Usage

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
    res, err := s.V2.GetAcmeExternalAccountBinding(ctx, operations.GetAcmeExternalAccountBindingRequest{
        CustomerID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalAccountBinding != nil {
        // handle response
    }
}
```

## GetCertificateDetailByCertIdentifier

Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificate. <ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

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
    res, err := s.V2.GetCertificateDetailByCertIdentifier(ctx, operations.GetCertificateDetailByCertIdentifierRequest{
        CertificateID: "fugit",
        CustomerID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateDetailV2 != nil {
        // handle response
    }
}
```

## GetCustomerCertificatesByCustomerID

This method can be used to retrieve a list of certificates for a specified customer. <ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

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
    res, err := s.V2.GetCustomerCertificatesByCustomerID(ctx, operations.GetCustomerCertificatesByCustomerIDRequest{
        CustomerID: "excepturi",
        Limit: sdk.Int64(270008),
        Offset: sdk.Int64(703737),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateSummariesV2 != nil {
        // handle response
    }
}
```

## GetDomainDetailsByDomain

Retrieve detailed information for supplied domain, including domain verification details and Certificate Authority Authorization (CAA) verification details. <ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

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
    res, err := s.V2.GetDomainDetailsByDomain(ctx, operations.GetDomainDetailsByDomainRequest{
        CertificateID: "tempore",
        CustomerID: "labore",
        Domain: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DomainVerificationDetail != nil {
        // handle response
    }
}
```

## GetDomainInformationByCertificateID

This method can be used to retrieve the domain verification status for a certificate request.<ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>"

### Example Usage

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
    res, err := s.V2.GetDomainInformationByCertificateID(ctx, operations.GetDomainInformationByCertificateIDRequest{
        CertificateID: "eum",
        CustomerID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DomainVerificationSummaries != nil {
        // handle response
    }
}
```
