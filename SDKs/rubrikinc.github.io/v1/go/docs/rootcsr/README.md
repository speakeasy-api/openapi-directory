# RootCsr

## Overview

Certificate signing requests.

### Available Operations

* [DeleteCsr](#deletecsr) - Delete a certificate signing request
* [GenerateCsr](#generatecsr) - Generate a new private key and return a certificate signing request
* [GetAllCsrs](#getallcsrs) - Get all certificate signing requests

## DeleteCsr

Deletes a certificate signing request corresponding to the provided ID.

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
    res, err := s.RootCsr.DeleteCsr(ctx, operations.DeleteCsrRequest{
        ID: "eb809e28-1033-41f3-981d-4c700b607f3c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GenerateCsr

Generates a new private key and returns a base64 encoded PKCS#10 certificate signing request (CSR).

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
    res, err := s.RootCsr.GenerateCsr(ctx, shared.GenericCsrRequest{
        CsrRequest: shared.CsrRequest{
            City: sdk.String("Darienfort"),
            Country: sdk.String("Lebanon"),
            EmailAddress: sdk.String("consectetur"),
            Hostnames: []string{
                "natus",
                "temporibus",
                "officia",
            },
            Organization: sdk.String("amet"),
            OrganizationUnit: sdk.String("tenetur"),
            State: sdk.String("aspernatur"),
            Surname: sdk.String("quo"),
            UID: sdk.String("itaque"),
        },
        Name: "Cameron Kuhn",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CsrSummary != nil {
        // handle response
    }
}
```

## GetAllCsrs

Returns a list of summaries for every outstanding certificate signing request (CSR).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
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
    res, err := s.RootCsr.GetAllCsrs(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CsrSummaryListResponse != nil {
        // handle response
    }
}
```
