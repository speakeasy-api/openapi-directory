# Taxes

### Available Operations

* [CreateTaxRates](#createtaxrates) - Create new tax rates
* [DeleteTaxRate](#deletetaxrate) - Delete a single tax rate
* [GetProductCountForAllTaxes](#getproductcountforalltaxes) - Get all tax rates and a count of products associated with each
* [GetTaxRate](#gettaxrate) - Get a single tax rate
* [GetTaxRates](#gettaxrates) - Get all available tax rates
* [GetTaxSettings](#gettaxsettings) - Get the organization tax settings 
* [SetTaxationMode](#settaxationmode) - Update the organization tax settings
* [UpdateTaxRate](#updatetaxrate) - Update a single tax rate

## CreateTaxRates

Create new tax rates

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Taxes.CreateTaxRates(ctx, shared.TaxRatesCreateRequest{
        TaxRates: []shared.TaxRate{
            shared.TaxRate{
                Default: sdk.Bool(false),
                Label: "impedit",
                Percentage: sdk.Float64(6329.39),
                UUID: "8ef51fcb-4c59-43ec-92cd-aad0ec7afedb",
            },
            shared.TaxRate{
                Default: sdk.Bool(false),
                Label: "at",
                Percentage: sdk.Float64(5611.21),
                UUID: "0df448a4-7f93-490c-9888-0983dabf9ef3",
            },
            shared.TaxRate{
                Default: sdk.Bool(false),
                Label: "sapiente",
                Percentage: sdk.Float64(9776.41),
                UUID: "dd9f7f07-9af4-4d35-b24c-db0f4d281187",
            },
            shared.TaxRate{
                Default: sdk.Bool(false),
                Label: "fugiat",
                Percentage: sdk.Float64(3136.95),
                UUID: "6844eded-85a9-4065-a628-bdfc2032b6c8",
            },
        },
    }, operations.CreateTaxRatesSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxRatesResponse != nil {
        // handle response
    }
}
```

## DeleteTaxRate

Delete a single tax rate

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
    res, err := s.Taxes.DeleteTaxRate(ctx, operations.DeleteTaxRateRequest{
        TaxRateUUID: "79923b7e-1358-44f7-ae12-c6891f82ce11",
    }, operations.DeleteTaxRateSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetProductCountForAllTaxes

Get all tax rates and a count of products associated with each

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
    res, err := s.Taxes.GetProductCountForAllTaxes(ctx, operations.GetProductCountForAllTaxesSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxRateProductCountResponse != nil {
        // handle response
    }
}
```

## GetTaxRate

Get a single tax rate

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
    res, err := s.Taxes.GetTaxRate(ctx, operations.GetTaxRateRequest{
        TaxRateUUID: "57172305-377d-4cfa-89df-975e35668609",
    }, operations.GetTaxRateSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxRate != nil {
        // handle response
    }
}
```

## GetTaxRates

Get all available tax rates

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
    res, err := s.Taxes.GetTaxRates(ctx, operations.GetTaxRatesSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxRatesResponses != nil {
        // handle response
    }
}
```

## GetTaxSettings

Get the organization tax settings 

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
    res, err := s.Taxes.GetTaxSettings(ctx, operations.GetTaxSettingsSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxSettingsResponse != nil {
        // handle response
    }
}
```

## SetTaxationMode

Update the organization tax settings

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Taxes.SetTaxationMode(ctx, shared.TaxSettingsUpdateRequest{
        TaxationMode: shared.TaxSettingsUpdateRequestTaxationModeEnumExclusive,
    }, operations.SetTaxationModeSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxSettingsResponse != nil {
        // handle response
    }
}
```

## UpdateTaxRate

Update a single tax rate

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Taxes.UpdateTaxRate(ctx, operations.UpdateTaxRateRequest{
        TaxRateUpdateRequest: shared.TaxRateUpdateRequest{
            Default: sdk.Bool(false),
            Label: sdk.String("itaque"),
            Percentage: sdk.Float64(6001.85),
        },
        TaxRateUUID: "c3ddc5f1-11de-4a10-a6d5-41a4d190feb2",
    }, operations.UpdateTaxRateSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxRate != nil {
        // handle response
    }
}
```
