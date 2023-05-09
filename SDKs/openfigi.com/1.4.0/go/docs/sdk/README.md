# SDK

## Overview

A free & open API for FIGI discovery.

### Available Operations

* [GetMappingValuesKey](#getmappingvalueskey) - Get values for enum-like fields.
* [PostMapping](#postmapping) - Allows mapping from third-party identifiers to FIGIs.

## GetMappingValuesKey

Get values for enum-like fields.

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
            APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetMappingValuesKey(ctx, operations.GetMappingValuesKeyRequest{
        Key: operations.GetMappingValuesKeyKeyEnumMarketSecDes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMappingValuesKey200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostMapping

Allows mapping from third-party identifiers to FIGIs.

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
            APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostMapping(ctx, []shared.MappingJob{
        shared.MappingJob{
            ContractSize: []float64{
                6027.63,
                8579.46,
                5448.83,
                8472.52,
            },
            Coupon: []float64{
                6235.64,
                6458.94,
            },
            Currency: sdk.String("suscipit"),
            ExchCode: sdk.String("iure"),
            Expiration: []types.Date{
                types.MustDateFromString("2022-10-30"),
                types.MustDateFromString("2022-03-08"),
            },
            IDType: shared.MappingJobIDTypeEnumIDFullExchangeSymbol,
            IDValue: shared.MappingJobIDValue{},
            IncludeUnlistedEquities: sdk.Bool(false),
            MarketSecDes: sdk.String("molestiae"),
            Maturity: []types.Date{
                types.MustDateFromString("2021-05-31"),
                types.MustDateFromString("2022-06-07"),
                types.MustDateFromString("2022-01-28"),
                types.MustDateFromString("2022-10-15"),
            },
            MicCode: sdk.String("quis"),
            OptionType: shared.MappingJobOptionTypeEnumPut.ToPointer(),
            SecurityType: sdk.String("deserunt"),
            SecurityType2: sdk.String("perferendis"),
            StateCode: shared.MappingJobStateCodeEnumJs.ToPointer(),
            Strike: []float64{
                9571.56,
                7781.57,
                1403.5,
                8700.13,
            },
        },
        shared.MappingJob{
            ContractSize: []float64{
                9786.19,
                4736.08,
                7991.59,
                8009.11,
            },
            Coupon: []float64{
                5204.78,
                7805.29,
            },
            Currency: sdk.String("dolorum"),
            ExchCode: sdk.String("dicta"),
            Expiration: []types.Date{
                types.MustDateFromString("2021-11-02"),
                types.MustDateFromString("2022-06-18"),
                types.MustDateFromString("2020-09-22"),
            },
            IDType: shared.MappingJobIDTypeEnumIDBbSecNumDes,
            IDValue: shared.MappingJobIDValue{},
            IncludeUnlistedEquities: sdk.Bool(false),
            MarketSecDes: sdk.String("beatae"),
            Maturity: []types.Date{
                types.MustDateFromString("2022-09-26"),
                types.MustDateFromString("2022-03-24"),
            },
            MicCode: sdk.String("cum"),
            OptionType: shared.MappingJobOptionTypeEnumPut.ToPointer(),
            SecurityType: sdk.String("ipsum"),
            SecurityType2: sdk.String("excepturi"),
            StateCode: shared.MappingJobStateCodeEnumDe.ToPointer(),
            Strike: []float64{
                3241.41,
            },
        },
        shared.MappingJob{
            ContractSize: []float64{
                1496.75,
                6120.96,
                2223.21,
            },
            Coupon: []float64{
                3864.89,
                9437.49,
                9025.99,
            },
            Currency: sdk.String("fuga"),
            ExchCode: sdk.String("in"),
            Expiration: []types.Date{
                types.MustDateFromString("2022-02-15"),
                types.MustDateFromString("2020-11-28"),
            },
            IDType: shared.MappingJobIDTypeEnumIDSedol,
            IDValue: shared.MappingJobIDValue{},
            IncludeUnlistedEquities: sdk.Bool(false),
            MarketSecDes: sdk.String("ipsa"),
            Maturity: []types.Date{
                types.MustDateFromString("2021-09-11"),
                types.MustDateFromString("2022-08-29"),
                types.MustDateFromString("2022-08-23"),
                types.MustDateFromString("2022-04-01"),
            },
            MicCode: sdk.String("enim"),
            OptionType: shared.MappingJobOptionTypeEnumCall.ToPointer(),
            SecurityType: sdk.String("nemo"),
            SecurityType2: sdk.String("minima"),
            StateCode: shared.MappingJobStateCodeEnumNh.ToPointer(),
            Strike: []float64{
                4386.01,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkMappingJobResult != nil {
        // handle response
    }
}
```
