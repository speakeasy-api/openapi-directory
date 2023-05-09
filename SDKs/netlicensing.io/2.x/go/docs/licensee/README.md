# Licensee

## Overview

Licensee operations

Licensee Services
<https://netlicensing.io/wiki/licensee-services>
### Available Operations

* [CreateLicensee](#createlicensee) - Create Licensee
* [DeleteLicensee](#deletelicensee) - Delete Licensee
* [GetLicensee](#getlicensee) - Get Licensee
* [ListLicensees](#listlicensees) - List Licensees
* [TransferLicenses](#transferlicenses) - Transfer Licenses
* [UpdateLicensee](#updatelicensee) - Update Licensee
* [ValidateLicensee](#validatelicensee) - Validate Licensee

## CreateLicensee

Creates a new Licensee

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
    res, err := s.Licensee.CreateLicensee(ctx, operations.CreateLicenseeRequestBody{
        Active: false,
        MarkedForTransfer: sdk.Bool(false),
        Name: sdk.String("Roger Beier"),
        Number: sdk.String("mollitia"),
        ProductNumber: "laborum",
    }, operations.CreateLicenseeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## DeleteLicensee

Delete a Licensee by 'number'

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
    res, err := s.Licensee.DeleteLicensee(ctx, operations.DeleteLicenseeRequest{
        ForceCascade: sdk.Bool(false),
        LicenseeNumber: "dolores",
    }, operations.DeleteLicenseeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## GetLicensee

Return a Licensee by 'licenseeNumber'

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
    res, err := s.Licensee.GetLicensee(ctx, operations.GetLicenseeRequest{
        LicenseeNumber: "dolorem",
    }, operations.GetLicenseeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## ListLicensees

Return a list of all Licensees for the current Vendor

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
    res, err := s.Licensee.ListLicensees(ctx, operations.ListLicenseesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensings != nil {
        // handle response
    }
}
```

## TransferLicenses

Licenses transfer between Licensees

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
    res, err := s.Licensee.TransferLicenses(ctx, operations.TransferLicensesRequest{
        RequestBody: operations.TransferLicensesRequestBody{
            SourceLicenseeNumber: "corporis",
        },
        LicenseeNumber: "explicabo",
    }, operations.TransferLicensesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## UpdateLicensee

Sets the provided properties to a Licensee. Return an updated Licensee

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
    res, err := s.Licensee.UpdateLicensee(ctx, operations.UpdateLicenseeRequest{
        RequestBody: &operations.UpdateLicenseeRequestBody{
            Active: sdk.Bool(false),
            MarkedForTransfer: sdk.Bool(false),
            Name: sdk.String("Ronnie Mohr"),
            Number: sdk.String("excepturi"),
        },
        LicenseeNumber: "accusantium",
    }, operations.UpdateLicenseeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## ValidateLicensee

Validates active Licenses of the Licensee

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
    res, err := s.Licensee.ValidateLicensee(ctx, operations.ValidateLicenseeRequest{
        RequestBody: &operations.ValidateLicenseeRequestBody{
            Action: operations.ValidateLicenseeRequestBodyActionEnumCheckOut.ToPointer(),
            LicenseeName: sdk.String("culpa"),
            NodeSecret: sdk.String("doloribus"),
            ProductModuleNumber: sdk.String("sapiente"),
            ProductNumber: sdk.String("architecto"),
            SessionID: sdk.String("mollitia"),
        },
        LicenseeNumber: "dolorem",
    }, operations.ValidateLicenseeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```
