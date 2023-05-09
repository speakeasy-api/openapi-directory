# AssetsPrices

### Available Operations

* [PostAssetsPricesAdjusted](#postassetspricesadjusted) - Adjusted Prices
* [PostAssetsPricesAdjustedForward](#postassetspricesadjustedforward) - Forward-Adjusted Prices

## PostAssetsPricesAdjusted

Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from:
* Unadjusted prices
* Capital distributions, like stock dividends
* Splits, like stock splits

The adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that:
* The price on the last date for which unadjusted prices are available is left unadjusted
* The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available

References
* [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)


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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssetsPrices.PostAssetsPricesAdjusted(ctx, operations.PostAssetsPricesAdjustedRequestBody{
        Assets: []PostAssetsPricesAdjustedRequestBodyAssets{
            operations.PostAssetsPricesAdjustedRequestBodyAssets{
                AssetDividends: []PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                        Amount: 6389.21,
                        Date: "dolor",
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                        Amount: 8915.55,
                        Date: "a",
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                        Amount: 6800.56,
                        Date: "in",
                    },
                },
                AssetPrices: []PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices{
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices{
                        Close: 8464.09,
                        Date: "maiores",
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices{
                        Close: 6994.79,
                        Date: "dicta",
                    },
                },
                AssetSplits: []PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits{
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits{
                        Date: "cumque",
                        Factor: 8137.98,
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits{
                        Date: "ea",
                        Factor: 3965.06,
                    },
                },
            },
            operations.PostAssetsPricesAdjustedRequestBodyAssets{
                AssetDividends: []PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                        Amount: 8811.04,
                        Date: "non",
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                        Amount: 5812.73,
                        Date: "enim",
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                        Amount: 8817.36,
                        Date: "delectus",
                    },
                },
                AssetPrices: []PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices{
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices{
                        Close: 5884.65,
                        Date: "nam",
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices{
                        Close: 6596.69,
                        Date: "blanditiis",
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices{
                        Close: 5332.06,
                        Date: "sapiente",
                    },
                },
                AssetSplits: []PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits{
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits{
                        Date: "deserunt",
                        Factor: 3948.69,
                    },
                },
            },
            operations.PostAssetsPricesAdjustedRequestBodyAssets{
                AssetDividends: []PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                        Amount: 6188.09,
                        Date: "omnis",
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                        Amount: 4748.67,
                        Date: "perferendis",
                    },
                },
                AssetPrices: []PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices{
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices{
                        Close: 3015.75,
                        Date: "distinctio",
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices{
                        Close: 6601.74,
                        Date: "labore",
                    },
                },
                AssetSplits: []PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits{
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits{
                        Date: "suscipit",
                        Factor: 6180.16,
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits{
                        Date: "nobis",
                        Factor: 4287.69,
                    },
                },
            },
            operations.PostAssetsPricesAdjustedRequestBodyAssets{
                AssetDividends: []PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                        Amount: 1354.74,
                        Date: "architecto",
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                        Amount: 2982.82,
                        Date: "et",
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                        Amount: 5699.65,
                        Date: "ullam",
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends{
                        Amount: 5908.73,
                        Date: "quos",
                    },
                },
                AssetPrices: []PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices{
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices{
                        Close: 336.25,
                        Date: "mollitia",
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices{
                        Close: 9689.62,
                        Date: "mollitia",
                    },
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices{
                        Close: 3209.97,
                        Date: "eum",
                    },
                },
                AssetSplits: []PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits{
                    operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits{
                        Date: "necessitatibus",
                        Factor: 1412.64,
                    },
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsPricesAdjusted200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsPricesAdjustedForward

Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from:
* Unadjusted prices
* Capital distributions, like stock dividends
* Splits, like stock splits

The adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that:
* The price on the first date for which unadjusted prices are available is left unadjusted
* The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available

References
* [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)


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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssetsPrices.PostAssetsPricesAdjustedForward(ctx, operations.PostAssetsPricesAdjustedForwardRequestBody{
        Assets: []PostAssetsPricesAdjustedForwardRequestBodyAssets{
            operations.PostAssetsPricesAdjustedForwardRequestBodyAssets{
                AssetDividends: []PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetDividends{
                    operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetDividends{
                        Amount: 4358.65,
                        Date: "doloribus",
                    },
                },
                AssetPrices: []PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices{
                    operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices{
                        Close: 2603.41,
                        Date: "maxime",
                    },
                    operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices{
                        Close: 5370.23,
                        Date: "facilis",
                    },
                    operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices{
                        Close: 4479.26,
                        Date: "architecto",
                    },
                    operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices{
                        Close: 995.69,
                        Date: "repudiandae",
                    },
                },
                AssetSplits: []PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits{
                    operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits{
                        Date: "expedita",
                        Factor: 4692.49,
                    },
                    operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits{
                        Date: "repellat",
                        Factor: 8411.4,
                    },
                },
            },
            operations.PostAssetsPricesAdjustedForwardRequestBodyAssets{
                AssetDividends: []PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetDividends{
                    operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetDividends{
                        Amount: 9046.48,
                        Date: "pariatur",
                    },
                },
                AssetPrices: []PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices{
                    operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices{
                        Close: 1624.93,
                        Date: "praesentium",
                    },
                },
                AssetSplits: []PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits{
                    operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits{
                        Date: "magni",
                        Factor: 1238.2,
                    },
                    operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits{
                        Date: "quo",
                        Factor: 8480.09,
                    },
                    operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits{
                        Date: "pariatur",
                        Factor: 8073.19,
                    },
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsPricesAdjustedForward200ApplicationJSONObject != nil {
        // handle response
    }
}
```
