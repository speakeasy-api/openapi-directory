# Rates

## Overview

Make sure you ship as cost-effectively as possible by [quickly comparing rates](https://www.shipengine.com/docs/rates/) using the ShipEngine Rates API. As long as you have the carrier connected to your account, you'll be able to see and compare different rates and services.


This quick start guide shows you how to get shipping rates for multiple carriers so you can choose the fastest, cheapest, or most reliable option.

<https://www.shipengine.com/docs/rates/>
### Available Operations

* [CalculateRates](#calculaterates) - Get Shipping Rates
* [CompareBulkRates](#comparebulkrates) - Get Bulk Rates
* [EstimateRates](#estimaterates) - Estimate Rates
* [GetRateByID](#getratebyid) - Get Rate By ID

## CalculateRates

It's not uncommon that you want to give your customer the choice between whether they want to ship the fastest, cheapest, or the most trusted route. Most companies don't solely ship things using a single shipping option;
so we provide functionality to show you all your options!


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
    res, err := s.Rates.CalculateRates(ctx, shared.CalculateRatesRequestBody{
        RateOptions: &shared.RateRequestBody{
            CalculateTaxAmount: sdk.Bool(false),
            CarrierIds: []string{
                "se-28529731",
                "se-28529731",
            },
            IsReturn: sdk.Bool(false),
            PackageTypes: []string{
                "facere",
                "ea",
                "aliquid",
                "laborum",
            },
            PreferredCurrency: sdk.String("accusamus"),
            ServiceCodes: []string{
                "occaecati",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalculateRatesResponseBody != nil {
        // handle response
    }
}
```

## CompareBulkRates

Get Bulk Shipment Rates

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
    res, err := s.Rates.CompareBulkRates(ctx, shared.CompareBulkRatesRequestBody{
        RateOptions: shared.RateRequestBody{
            CalculateTaxAmount: sdk.Bool(false),
            CarrierIds: []string{
                "se-28529731",
                "se-28529731",
            },
            IsReturn: sdk.Bool(false),
            PackageTypes: []string{
                "delectus",
                "quidem",
                "provident",
                "nam",
            },
            PreferredCurrency: sdk.String("id"),
            ServiceCodes: []string{
                "deleniti",
                "sapiente",
                "amet",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompareBulkRatesResponseBody != nil {
        // handle response
    }
}
```

## EstimateRates

Get Rate Estimates

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Rates.EstimateRates(ctx, shared.EstimateRatesRequestBody{
        AddressResidentialIndicator: shared.AddressResidentialIndicatorEnumYes.ToPointer(),
        Confirmation: shared.DeliveryConfirmationEnumSignature.ToPointer(),
        Dimensions: &shared.Dimensions{
            Height: 4238.55,
            Length: 6188.09,
            Unit: shared.DimensionsDimensionUnitEnumCentimeter,
            Width: 4748.67,
        },
        FromCityLocality: "Austin",
        FromCountryCode: "CA",
        FromPostalCode: "78756-3717",
        FromStateProvince: "Austin",
        ShipDate: types.MustTimeFromString("2018-09-23T15:00:00.000Z"),
        ToCityLocality: "Austin",
        ToCountryCode: "CA",
        ToPostalCode: "78756-3717",
        ToStateProvince: "Houston",
        Weight: shared.Weight{
            Unit: shared.WeightUnitEnumPound,
            Value: 4701.32,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimateRatesResponseBody != nil {
        // handle response
    }
}
```

## GetRateByID

Retrieve a previously queried rate by its ID

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
    res, err := s.Rates.GetRateByID(ctx, operations.GetRateByIDRequest{
        RateID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRateByIDResponseBody != nil {
        // handle response
    }
}
```
