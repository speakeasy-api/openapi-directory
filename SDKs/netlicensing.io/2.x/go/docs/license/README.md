# License

## Overview

License operations

License Services
<https://netlicensing.io/wiki/license-services>
### Available Operations

* [CreateLicense](#createlicense) - Create License
* [DeleteLicense](#deletelicense) - Delete License
* [GetLicense](#getlicense) - Get License
* [ListLicenses](#listlicenses) - List Licenses
* [UpdateLicense](#updatelicense) - Update License

## CreateLicense

Creates a new License

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.License.CreateLicense(ctx, operations.CreateLicenseRequestBody{
        Active: false,
        Currency: sdk.String("tempora"),
        Hidden: sdk.Bool(false),
        LicenseTemplateNumber: "suscipit",
        LicenseeNumber: "molestiae",
        Name: sdk.String("Irving Lehner"),
        Number: sdk.String("nisi"),
        Parentfeature: sdk.String("recusandae"),
        Price: sdk.Float64(8360.79),
        Quantity: sdk.String("ab"),
        StartDate: types.MustTimeFromString("2022-11-30T04:44:49.578Z"),
        TimeVolume: sdk.String("deserunt"),
        TimeVolumePeriod: sdk.String("perferendis"),
        UsedQuantity: sdk.String("ipsam"),
    }, operations.CreateLicenseSecurity{
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

## DeleteLicense

Delete License by a 'licenseNumber'

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
    res, err := s.License.DeleteLicense(ctx, operations.DeleteLicenseRequest{
        LicenseNumber: "repellendus",
    }, operations.DeleteLicenseSecurity{
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

## GetLicense

Get License by a 'licenseNumber'

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
    res, err := s.License.GetLicense(ctx, operations.GetLicenseRequest{
        LicenseNumber: "sapiente",
    }, operations.GetLicenseSecurity{
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

## ListLicenses

Return a list of all Licenses for the current Vendor

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
    res, err := s.License.ListLicenses(ctx, operations.ListLicensesSecurity{
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

## UpdateLicense

Update License by a 'licenseNumber'

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.License.UpdateLicense(ctx, operations.UpdateLicenseRequest{
        RequestBody: &operations.UpdateLicenseRequestBody{
            Active: sdk.Bool(false),
            Currency: sdk.String("quo"),
            Hidden: sdk.Bool(false),
            Name: sdk.String("Teri Strosin"),
            Number: sdk.String("quod"),
            Parentfeature: sdk.String("quod"),
            Price: sdk.Float64(4614.79),
            Quantity: sdk.String("totam"),
            StartDate: types.MustTimeFromString("2020-12-18T15:02:44.758Z"),
            TimeVolume: sdk.String("dicta"),
            TimeVolumePeriod: sdk.String("nam"),
            UsedQuantity: sdk.String("officia"),
        },
        LicenseNumber: "occaecati",
    }, operations.UpdateLicenseSecurity{
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
