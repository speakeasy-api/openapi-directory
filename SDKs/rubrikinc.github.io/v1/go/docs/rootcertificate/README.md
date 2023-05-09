# RootCertificate

## Overview

Certificates.

### Available Operations

* [DeleteCertificate](#deletecertificate) - Delete imported certificate object
* [ExportCertificate](#exportcertificate) - Get a certificate summary to export
* [ImportCertificate](#importcertificate) - Import a certificate
* [QueryCertificates](#querycertificates) - Get all certificates
* [UpdateCertificate](#updatecertificate) - Update a certificate entry

## DeleteCertificate

Deletes an imported certificate.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootCertificate.DeleteCertificate(ctx, operations.DeleteCertificateRequest{
        ID: "3c969e9a-3efa-477d-bb14-cd66ae395efb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ExportCertificate

Get a certificate summary.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootCertificate.ExportCertificate(ctx, operations.ExportCertificateRequest{
        ID: "9ba88f3a-6699-4707-8ba4-469b6e214195",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateSummary != nil {
        // handle response
    }
}
```

## ImportCertificate

Import a certificate.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootCertificate.ImportCertificate(ctx, shared.CertificateImportRequest{
        CsrID: sdk.String("provident"),
        Description: sdk.String("quos"),
        Name: "Kenneth O'Hara",
        PemFile: "ad",
        PrivateKey: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateSummary != nil {
        // handle response
    }
}
```

## QueryCertificates

Get all certificates.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootCertificate.QueryCertificates(ctx, operations.QueryCertificatesRequest{
        Description: sdk.String("dolor"),
        Expiration: sdk.String("necessitatibus"),
        HasKey: sdk.Bool(false),
        IncludeExpired: sdk.Bool(false),
        Name: sdk.String("Vivian Boyle"),
        SortBy: operations.QueryCertificatesSortByEnumExpiration.ToPointer(),
        SortOrder: operations.QueryCertificatesSortOrderEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateSummaryListResponse != nil {
        // handle response
    }
}
```

## UpdateCertificate

Provide updated information for a certificate object.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootCertificate.UpdateCertificate(ctx, operations.UpdateCertificateRequest{
        CertificatePatchRequest: shared.CertificatePatchRequest{
            Description: sdk.String("maxime"),
            Name: sdk.String("Mr. Andres King"),
            PemFile: sdk.String("ullam"),
        },
        ID: "b7fd2ed0-2892-41cd-9c69-2601fb576b0d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateSummary != nil {
        // handle response
    }
}
```
