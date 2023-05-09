# Estimate

### Available Operations

* [GetEstimate](#getestimate) - Get a specific estimate of project
* [GetEstimateList](#getestimatelist) - List the Estimates
* [PostEstimateJSON](#postestimatejson) - Create a Estimate
* [PostEstimateRaw](#postestimateraw) - Create a Estimate

## GetEstimate

Get a specific estimate of project

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
    res, err := s.Estimate.GetEstimate(ctx, operations.GetEstimateRequest{
        EstimateID: "corrupti",
        ProjectID: "illum",
        WorkgroupID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetEstimateList

List the Estimates

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
    res, err := s.Estimate.GetEstimateList(ctx, operations.GetEstimateListRequest{
        ProjectID: "error",
        WorkgroupID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostEstimateJSON

Create a Estimate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Estimate.PostEstimateJSON(ctx, operations.PostEstimateJSONRequest{
        EstimatePO: &shared.EstimatePO{
            Comments: sdk.String("sample comments"),
            Description: sdk.String("sample description"),
            EstimateItems: []shared.EstimateItemPO{
                shared.EstimateItemPO{
                    PaperItems: []shared.PaperItemPO{
                        shared.PaperItemPO{
                            MinUomQty: sdk.Int64(1),
                            PaperID: sdk.Int64(1),
                            Price1: sdk.String("magnam"),
                            Price2: sdk.String("debitis"),
                            Price3: sdk.String("ipsa"),
                            Price4: sdk.String("delectus"),
                            Price5: sdk.String("tempora"),
                            PricePerTonne: sdk.String("suscipit"),
                            QtyUom: sdk.String("sample qty_uom"),
                            Quantity1: sdk.Int64(1),
                            Quantity2: sdk.Int64(1),
                            Quantity3: sdk.Int64(1),
                            Quantity4: sdk.Int64(1),
                            Quantity5: sdk.Int64(1),
                            Size: sdk.String("sample size"),
                            Sku: sdk.String("sample sku"),
                            UnitPrice1: sdk.String("molestiae"),
                            UnitPrice2: sdk.String("minus"),
                            UnitPrice3: sdk.String("placeat"),
                            UnitPrice4: sdk.String("voluptatum"),
                            UnitPrice5: sdk.String("iusto"),
                        },
                        shared.PaperItemPO{
                            MinUomQty: sdk.Int64(1),
                            PaperID: sdk.Int64(1),
                            Price1: sdk.String("excepturi"),
                            Price2: sdk.String("nisi"),
                            Price3: sdk.String("recusandae"),
                            Price4: sdk.String("temporibus"),
                            Price5: sdk.String("ab"),
                            PricePerTonne: sdk.String("quis"),
                            QtyUom: sdk.String("sample qty_uom"),
                            Quantity1: sdk.Int64(1),
                            Quantity2: sdk.Int64(1),
                            Quantity3: sdk.Int64(1),
                            Quantity4: sdk.Int64(1),
                            Quantity5: sdk.Int64(1),
                            Size: sdk.String("sample size"),
                            Sku: sdk.String("sample sku"),
                            UnitPrice1: sdk.String("veritatis"),
                            UnitPrice2: sdk.String("deserunt"),
                            UnitPrice3: sdk.String("perferendis"),
                            UnitPrice4: sdk.String("ipsam"),
                            UnitPrice5: sdk.String("repellendus"),
                        },
                    },
                    Quantity1Price: sdk.String("sapiente"),
                    Quantity1Shipping: sdk.String("quo"),
                    Quantity1Tax: sdk.String("odit"),
                    Quantity2Price: sdk.String("at"),
                    Quantity2Shipping: sdk.String("at"),
                    Quantity2Tax: sdk.String("maiores"),
                    Quantity3Price: sdk.String("molestiae"),
                    Quantity3Shipping: sdk.String("quod"),
                    Quantity3Tax: sdk.String("quod"),
                    Quantity4Price: sdk.String("esse"),
                    Quantity4Shipping: sdk.String("totam"),
                    Quantity4Tax: sdk.String("porro"),
                    Quantity5Price: sdk.String("dolorum"),
                    Quantity5Shipping: sdk.String("dicta"),
                    Quantity5Tax: sdk.String("nam"),
                    RfeItemID: sdk.Int64(1),
                },
                shared.EstimateItemPO{
                    PaperItems: []shared.PaperItemPO{
                        shared.PaperItemPO{
                            MinUomQty: sdk.Int64(1),
                            PaperID: sdk.Int64(1),
                            Price1: sdk.String("occaecati"),
                            Price2: sdk.String("fugit"),
                            Price3: sdk.String("deleniti"),
                            Price4: sdk.String("hic"),
                            Price5: sdk.String("optio"),
                            PricePerTonne: sdk.String("totam"),
                            QtyUom: sdk.String("sample qty_uom"),
                            Quantity1: sdk.Int64(1),
                            Quantity2: sdk.Int64(1),
                            Quantity3: sdk.Int64(1),
                            Quantity4: sdk.Int64(1),
                            Quantity5: sdk.Int64(1),
                            Size: sdk.String("sample size"),
                            Sku: sdk.String("sample sku"),
                            UnitPrice1: sdk.String("beatae"),
                            UnitPrice2: sdk.String("commodi"),
                            UnitPrice3: sdk.String("molestiae"),
                            UnitPrice4: sdk.String("modi"),
                            UnitPrice5: sdk.String("qui"),
                        },
                        shared.PaperItemPO{
                            MinUomQty: sdk.Int64(1),
                            PaperID: sdk.Int64(1),
                            Price1: sdk.String("impedit"),
                            Price2: sdk.String("cum"),
                            Price3: sdk.String("esse"),
                            Price4: sdk.String("ipsum"),
                            Price5: sdk.String("excepturi"),
                            PricePerTonne: sdk.String("aspernatur"),
                            QtyUom: sdk.String("sample qty_uom"),
                            Quantity1: sdk.Int64(1),
                            Quantity2: sdk.Int64(1),
                            Quantity3: sdk.Int64(1),
                            Quantity4: sdk.Int64(1),
                            Quantity5: sdk.Int64(1),
                            Size: sdk.String("sample size"),
                            Sku: sdk.String("sample sku"),
                            UnitPrice1: sdk.String("perferendis"),
                            UnitPrice2: sdk.String("ad"),
                            UnitPrice3: sdk.String("natus"),
                            UnitPrice4: sdk.String("sed"),
                            UnitPrice5: sdk.String("iste"),
                        },
                        shared.PaperItemPO{
                            MinUomQty: sdk.Int64(1),
                            PaperID: sdk.Int64(1),
                            Price1: sdk.String("dolor"),
                            Price2: sdk.String("natus"),
                            Price3: sdk.String("laboriosam"),
                            Price4: sdk.String("hic"),
                            Price5: sdk.String("saepe"),
                            PricePerTonne: sdk.String("fuga"),
                            QtyUom: sdk.String("sample qty_uom"),
                            Quantity1: sdk.Int64(1),
                            Quantity2: sdk.Int64(1),
                            Quantity3: sdk.Int64(1),
                            Quantity4: sdk.Int64(1),
                            Quantity5: sdk.Int64(1),
                            Size: sdk.String("sample size"),
                            Sku: sdk.String("sample sku"),
                            UnitPrice1: sdk.String("in"),
                            UnitPrice2: sdk.String("corporis"),
                            UnitPrice3: sdk.String("iste"),
                            UnitPrice4: sdk.String("iure"),
                            UnitPrice5: sdk.String("saepe"),
                        },
                    },
                    Quantity1Price: sdk.String("quidem"),
                    Quantity1Shipping: sdk.String("architecto"),
                    Quantity1Tax: sdk.String("ipsa"),
                    Quantity2Price: sdk.String("reiciendis"),
                    Quantity2Shipping: sdk.String("est"),
                    Quantity2Tax: sdk.String("mollitia"),
                    Quantity3Price: sdk.String("laborum"),
                    Quantity3Shipping: sdk.String("dolores"),
                    Quantity3Tax: sdk.String("dolorem"),
                    Quantity4Price: sdk.String("corporis"),
                    Quantity4Shipping: sdk.String("explicabo"),
                    Quantity4Tax: sdk.String("nobis"),
                    Quantity5Price: sdk.String("enim"),
                    Quantity5Shipping: sdk.String("omnis"),
                    Quantity5Tax: sdk.String("nemo"),
                    RfeItemID: sdk.Int64(1),
                },
            },
            EstimateTitle: sdk.String("sample estimate_title"),
            ExpirationDate: types.MustDateFromString("2022-06-06"),
            OwnerReference: sdk.String("sample owner_reference"),
            RfeID: sdk.Int64(1),
        },
        ProjectID: "accusantium",
        WorkgroupID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostEstimateRaw

Create a Estimate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Estimate.PostEstimateRaw(ctx, operations.PostEstimateRawRequest{
        RequestBody: []byte("culpa"),
        ProjectID: "doloribus",
        WorkgroupID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
