# Warehouses

## Overview

warehouses


### Available Operations

* [CreateWarehouse](#createwarehouse) - Create Warehouse
* [DeleteWarehouse](#deletewarehouse) - Delete Warehouse By ID
* [GetWarehouseByID](#getwarehousebyid) - Get Warehouse By Id
* [ListWarehouses](#listwarehouses) - List Warehouses
* [UpdateWarehouse](#updatewarehouse) - Update Warehouse By Id
* [UpdateWarehouseSettings](#updatewarehousesettings) - Update Warehouse Settings

## CreateWarehouse

Create a warehouse location that you can use to create shipping items by simply passing in the generated warehouse id.
If the return address is not supplied in the request body then it is assumed that the origin address is the return address as well


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
    res, err := s.Warehouses.CreateWarehouse(ctx, shared.CreateWarehouseRequestBodyInput{
        IsDefault: sdk.Bool(false),
        Name: "Zero Cool HQ",
        OriginAddress: shared.Address{
            AddressLine1: "1999 Bishop Grandin Blvd.",
            AddressLine2: sdk.String("Unit 408"),
            AddressLine3: sdk.String("Building #7"),
            AddressResidentialIndicator: shared.AddressAddressResidentialIndicatorEnumNo,
            CityLocality: "Winnipeg",
            CompanyName: sdk.String("The Home Depot"),
            CountryCode: "CA",
            Email: sdk.String("example@example.com"),
            Name: "John Doe",
            Phone: "+1 204-253-9411 ext. 123",
            PostalCode: "78756-3717",
            StateProvince: "Manitoba",
        },
        ReturnAddress: &shared.Address{
            AddressLine1: "1999 Bishop Grandin Blvd.",
            AddressLine2: sdk.String("Unit 408"),
            AddressLine3: sdk.String("Building #7"),
            AddressResidentialIndicator: shared.AddressAddressResidentialIndicatorEnumNo,
            CityLocality: "Winnipeg",
            CompanyName: sdk.String("The Home Depot"),
            CountryCode: "CA",
            Email: sdk.String("example@example.com"),
            Name: "John Doe",
            Phone: "+1 204-253-9411 ext. 123",
            PostalCode: "78756-3717",
            StateProvince: "Manitoba",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWarehouseResponseBody != nil {
        // handle response
    }
}
```

## DeleteWarehouse

Delete a warehouse by ID

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
    res, err := s.Warehouses.DeleteWarehouse(ctx, operations.DeleteWarehouseRequest{
        WarehouseID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```

## GetWarehouseByID

Retrieve warehouse data based on the warehouse ID

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
    res, err := s.Warehouses.GetWarehouseByID(ctx, operations.GetWarehouseByIDRequest{
        WarehouseID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWarehouseByIDResponseBody != nil {
        // handle response
    }
}
```

## ListWarehouses

Retrieve a list of warehouses associated with this account.

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
    res, err := s.Warehouses.ListWarehouses(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWarehousesResponseBody != nil {
        // handle response
    }
}
```

## UpdateWarehouse

Update Warehouse object information

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
    res, err := s.Warehouses.UpdateWarehouse(ctx, operations.UpdateWarehouseRequest{
        UpdateWarehouseRequestBodyInput: shared.UpdateWarehouseRequestBodyInput{
            IsDefault: sdk.Bool(false),
            Name: "Zero Cool HQ",
            OriginAddress: shared.Address{
                AddressLine1: "1999 Bishop Grandin Blvd.",
                AddressLine2: sdk.String("Unit 408"),
                AddressLine3: sdk.String("Building #7"),
                AddressResidentialIndicator: shared.AddressAddressResidentialIndicatorEnumNo,
                CityLocality: "Winnipeg",
                CompanyName: sdk.String("The Home Depot"),
                CountryCode: "CA",
                Email: sdk.String("example@example.com"),
                Name: "John Doe",
                Phone: "+1 204-253-9411 ext. 123",
                PostalCode: "78756-3717",
                StateProvince: "Manitoba",
            },
            ReturnAddress: &shared.Address{
                AddressLine1: "1999 Bishop Grandin Blvd.",
                AddressLine2: sdk.String("Unit 408"),
                AddressLine3: sdk.String("Building #7"),
                AddressResidentialIndicator: shared.AddressAddressResidentialIndicatorEnumNo,
                CityLocality: "Winnipeg",
                CompanyName: sdk.String("The Home Depot"),
                CountryCode: "CA",
                Email: sdk.String("example@example.com"),
                Name: "John Doe",
                Phone: "+1 204-253-9411 ext. 123",
                PostalCode: "78756-3717",
                StateProvince: "Manitoba",
            },
        },
        WarehouseID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```

## UpdateWarehouseSettings

Update Warehouse settings object information

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
    res, err := s.Warehouses.UpdateWarehouseSettings(ctx, operations.UpdateWarehouseSettingsRequest{
        UpdateWarehouseSettingsRequestBody: shared.UpdateWarehouseSettingsRequestBody{
            IsDefault: sdk.Bool(true),
        },
        WarehouseID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```
