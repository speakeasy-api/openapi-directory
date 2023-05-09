# PackageTypes

## Overview

custom package types


### Available Operations

* [CreatePackageType](#createpackagetype) - Create Custom Package Type
* [DeletePackageType](#deletepackagetype) - Delete A Custom Package By ID
* [GetPackageTypeByID](#getpackagetypebyid) - Get Custom Package Type By ID
* [ListPackageTypes](#listpackagetypes) - List Custom Package Types
* [UpdatePackageType](#updatepackagetype) - Update Custom Package Type By ID

## CreatePackageType

Create a custom package type to better assist in getting accurate rate estimates

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PackageTypes.CreatePackageType(ctx, shared.CreatePackageTypeRequestBody{
        Description: sdk.String("Packaging for laptops"),
        Dimensions: &shared.Dimensions{
            Height: 9527.49,
            Length: 6800.56,
            Unit: shared.DimensionsDimensionUnitEnumInch,
            Width: 4491.98,
        },
        Name: "laptop_box",
        PackageCode: "small_flat_rate_box",
        PackageID: sdk.String("se-28529731"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePackageTypeResponseBody != nil {
        // handle response
    }
}
```

## DeletePackageType

Delete a custom package using the ID

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PackageTypes.DeletePackageType(ctx, operations.DeletePackageTypeRequest{
        PackageID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```

## GetPackageTypeByID

Get Custom Package Type by ID

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PackageTypes.GetPackageTypeByID(ctx, operations.GetPackageTypeByIDRequest{
        PackageID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPackageTypeByIDResponseBody != nil {
        // handle response
    }
}
```

## ListPackageTypes

List the custom package types associated with the account

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PackageTypes.ListPackageTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPackageTypesResponseBody != nil {
        // handle response
    }
}
```

## UpdatePackageType

Update the custom package type object by ID

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PackageTypes.UpdatePackageType(ctx, operations.UpdatePackageTypeRequest{
        PackageID: "se-28529731",
        UpdatePackageTypeRequestBody: shared.UpdatePackageTypeRequestBody{
            Description: sdk.String("Packaging for laptops"),
            Dimensions: &shared.Dimensions{
                Height: 8464.09,
                Length: 9785.71,
                Unit: shared.DimensionsDimensionUnitEnumCentimeter,
                Width: 1162.02,
            },
            Name: "laptop_box",
            PackageCode: "small_flat_rate_box",
            PackageID: sdk.String("se-28529731"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```
