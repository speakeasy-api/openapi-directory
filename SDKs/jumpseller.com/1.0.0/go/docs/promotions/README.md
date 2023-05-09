# Promotions

### Available Operations

* [DeletePromotionsIDJSON](#deletepromotionsidjson) - Delete an existing Promotion.
* [GetPromotionsJSON](#getpromotionsjson) - Retrieve all Promotions.
* [GetPromotionsIDJSON](#getpromotionsidjson) - Retrieve a single Promotion.
* [PostPromotionsJSON](#postpromotionsjson) - Create a new Promotion.
* [PutPromotionsIDJSON](#putpromotionsidjson) - Update a Promotion.

## DeletePromotionsIDJSON

Delete an existing Promotion.

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
    res, err := s.Promotions.DeletePromotionsIDJSON(ctx, operations.DeletePromotionsIDJSONRequest{
        Authtoken: "necessitatibus",
        ID: 215529,
        Login: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePromotionsIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetPromotionsJSON

Retrieve all Promotions.

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
    res, err := s.Promotions.GetPromotionsJSON(ctx, operations.GetPromotionsJSONRequest{
        Authtoken: "occaecati",
        Limit: sdk.Int64(552078),
        Login: "voluptatibus",
        Page: sdk.Int64(271653),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Promotions != nil {
        // handle response
    }
}
```

## GetPromotionsIDJSON

Retrieve a single Promotion.

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
    res, err := s.Promotions.GetPromotionsIDJSON(ctx, operations.GetPromotionsIDJSONRequest{
        Authtoken: "tempora",
        ID: 455444,
        Login: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Promotion != nil {
        // handle response
    }
}
```

## PostPromotionsJSON

Create a new Promotion.

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
    res, err := s.Promotions.PostPromotionsJSON(ctx, operations.PostPromotionsJSONRequest{
        PromotionEdit: shared.PromotionEdit{
            Promotion: &shared.PromotionEditFields{
                BeginsAt: sdk.String("ex"),
                BuysAtLeast: sdk.String("sit"),
                Categories: []shared.ID{
                    shared.ID{
                        ID: sdk.Int(888044),
                    },
                },
                Code: sdk.String("praesentium"),
                ConditionPrice: sdk.Float32(7086.09),
                ConditionQty: sdk.Int(310381),
                Cumulative: sdk.Bool(false),
                CustomerCategories: []shared.ID{
                    shared.ID{
                        ID: sdk.Int(373035),
                    },
                    shared.ID{
                        ID: sdk.Int(894864),
                    },
                },
                Customers: sdk.String("rem"),
                DiscountAmountFix: sdk.Float32(265.22),
                DiscountAmountPercent: sdk.Float32(7505.95),
                DiscountTarget: sdk.String("error"),
                Enabled: sdk.Bool(false),
                ExpiresAt: sdk.String("veniam"),
                Lasts: sdk.String("minima"),
                MaxTimesUsed: sdk.Int(924159),
                Name: sdk.String("Dr. Jody Cummings"),
                Products: []shared.ID{
                    shared.ID{
                        ID: sdk.Int(446135),
                    },
                    shared.ID{
                        ID: sdk.Int(889234),
                    },
                },
                ProductsX: []shared.ID{
                    shared.ID{
                        ID: sdk.Int(512452),
                    },
                },
                QuantityX: sdk.Int(348476),
                Type: sdk.String("praesentium"),
            },
        },
        Authtoken: "cum",
        Login: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Promotion != nil {
        // handle response
    }
}
```

## PutPromotionsIDJSON

Update a Promotion.

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
    res, err := s.Promotions.PutPromotionsIDJSON(ctx, operations.PutPromotionsIDJSONRequest{
        PromotionEdit: shared.PromotionEdit{
            Promotion: &shared.PromotionEditFields{
                BeginsAt: sdk.String("dolorum"),
                BuysAtLeast: sdk.String("voluptatum"),
                Categories: []shared.ID{
                    shared.ID{
                        ID: sdk.Int(944708),
                    },
                    shared.ID{
                        ID: sdk.Int(710529),
                    },
                    shared.ID{
                        ID: sdk.Int(892863),
                    },
                },
                Code: sdk.String("neque"),
                ConditionPrice: sdk.Float32(6771.15),
                ConditionQty: sdk.Int(341698),
                Cumulative: sdk.Bool(false),
                CustomerCategories: []shared.ID{
                    shared.ID{
                        ID: sdk.Int(676243),
                    },
                    shared.ID{
                        ID: sdk.Int(548361),
                    },
                    shared.ID{
                        ID: sdk.Int(879235),
                    },
                },
                Customers: sdk.String("tempora"),
                DiscountAmountFix: sdk.Float32(5436.78),
                DiscountAmountPercent: sdk.Float32(1482.68),
                DiscountTarget: sdk.String("ut"),
                Enabled: sdk.Bool(false),
                ExpiresAt: sdk.String("fugiat"),
                Lasts: sdk.String("voluptatem"),
                MaxTimesUsed: sdk.Int(635057),
                Name: sdk.String("Miguel Adams"),
                Products: []shared.ID{
                    shared.ID{
                        ID: sdk.Int(530537),
                    },
                },
                ProductsX: []shared.ID{
                    shared.ID{
                        ID: sdk.Int(922112),
                    },
                    shared.ID{
                        ID: sdk.Int(361151),
                    },
                    shared.ID{
                        ID: sdk.Int(89494),
                    },
                },
                QuantityX: sdk.Int(502710),
                Type: sdk.String("ex"),
            },
        },
        Authtoken: "sed",
        ID: 24313,
        Login: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Promotion != nil {
        // handle response
    }
}
```
