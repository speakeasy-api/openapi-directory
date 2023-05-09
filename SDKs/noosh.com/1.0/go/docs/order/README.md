# Order

### Available Operations

* [GetBuyOrder](#getbuyorder) - Get a specific buy order
* [GetBuyOrderList](#getbuyorderlist) - List the buy orders
* [GetBuyOrderListOfWorkgroup](#getbuyorderlistofworkgroup) - List the buy orders of workgroup
* [GetBuyOrderOfWorkgroup](#getbuyorderofworkgroup) - Get a specific buy order of workgroup
* [GetOrder](#getorder) - Get a specific buy/sell order
* [GetSellOrder](#getsellorder) - Get a specific sell order
* [GetSellOrderList](#getsellorderlist) - List the sell orders
* [GetSellOrderListOfWorkgroup](#getsellorderlistofworkgroup) - List the sell orders of workgrop
* [GetSellOrderOfWorkgroup](#getsellorderofworkgroup) - Get a specific sell order
* [PostBuyOrderJSON](#postbuyorderjson) - Create a quick buy order
* [PostBuyOrderRaw](#postbuyorderraw) - Create a quick buy order
* [PutBuyOrderJSON](#putbuyorderjson) - Update a specific buy order
* [PutBuyOrderRaw](#putbuyorderraw) - Update a specific buy order
* [PutSellOrderJSON](#putsellorderjson) - Update / Accept or Reject a specific sell order
* [PutSellOrderRaw](#putsellorderraw) - Update / Accept or Reject a specific sell order

## GetBuyOrder

Get a specific buy order

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
    res, err := s.Order.GetBuyOrder(ctx, operations.GetBuyOrderRequest{
        OrderID: "omnis",
        ProjectID: "voluptate",
        WorkgroupID: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetBuyOrderList

List the buy orders

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
    res, err := s.Order.GetBuyOrderList(ctx, operations.GetBuyOrderListRequest{
        ProjectID: "perferendis",
        WorkgroupID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetBuyOrderListOfWorkgroup

List the buy orders of workgroup

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
    res, err := s.Order.GetBuyOrderListOfWorkgroup(ctx, operations.GetBuyOrderListOfWorkgroupRequest{
        WorkgroupID: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetBuyOrderOfWorkgroup

Get a specific buy order of workgroup

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
    res, err := s.Order.GetBuyOrderOfWorkgroup(ctx, operations.GetBuyOrderOfWorkgroupRequest{
        OrderID: "ut",
        WorkgroupID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetOrder

Get a specific buy/sell order

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
    res, err := s.Order.GetOrder(ctx, operations.GetOrderRequest{
        OrderID: "dicta",
        ProjectID: "corporis",
        WorkgroupID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSellOrder

Get a specific sell order

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
    res, err := s.Order.GetSellOrder(ctx, operations.GetSellOrderRequest{
        OrderID: "iusto",
        ProjectID: "dicta",
        WorkgroupID: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSellOrderList

List the sell orders

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
    res, err := s.Order.GetSellOrderList(ctx, operations.GetSellOrderListRequest{
        ProjectID: "enim",
        WorkgroupID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSellOrderListOfWorkgroup

List the sell orders of workgrop

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
    res, err := s.Order.GetSellOrderListOfWorkgroup(ctx, operations.GetSellOrderListOfWorkgroupRequest{
        WorkgroupID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSellOrderOfWorkgroup

Get a specific sell order

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
    res, err := s.Order.GetSellOrderOfWorkgroup(ctx, operations.GetSellOrderOfWorkgroupRequest{
        OrderID: "repudiandae",
        WorkgroupID: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostBuyOrderJSON

Create a quick buy order

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
    res, err := s.Order.PostBuyOrderJSON(ctx, operations.PostBuyOrderJSONRequest{
        OrderPO: &shared.OrderPO{
            BuyerUserID: sdk.Int64(1),
            Comments: sdk.String("sample comments"),
            CustomFields: []shared.CustomFieldPersistVO{
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2021-11-14"),
                    NumberValue: sdk.String("excepturi"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
            },
            InvoiceOrBillingRecipient: sdk.Int64(1),
            OrderCompletionDate: types.MustDateFromString("2022-03-16"),
            OrderItems: []shared.OrderItemPersistVO{
                shared.OrderItemPersistVO{
                    CompletionDate: types.MustDateFromString("2021-03-02"),
                    CustomFields: []shared.CustomFieldPersistVO{
                        shared.CustomFieldPersistVO{
                            DateValue: types.MustDateFromString("2021-04-10"),
                            NumberValue: sdk.String("veritatis"),
                            ParamName: sdk.String("sample param_name"),
                            StringValue: sdk.String("sample string_value"),
                        },
                    },
                    ExTaxValueCalculated: sdk.String("itaque"),
                    Notes: sdk.String("sample notes"),
                    Per: sdk.Int64(1),
                    Price: sdk.String("incidunt"),
                    Quantity: sdk.String("enim"),
                    Shipping: sdk.String("consequatur"),
                    SpecID: sdk.Int64(1),
                    SpecReferenceID: sdk.Int64(1),
                    Tax: sdk.String("sample tax"),
                },
                shared.OrderItemPersistVO{
                    CompletionDate: types.MustDateFromString("2021-04-26"),
                    CustomFields: []shared.CustomFieldPersistVO{
                        shared.CustomFieldPersistVO{
                            DateValue: types.MustDateFromString("2021-07-27"),
                            NumberValue: sdk.String("quibusdam"),
                            ParamName: sdk.String("sample param_name"),
                            StringValue: sdk.String("sample string_value"),
                        },
                    },
                    ExTaxValueCalculated: sdk.String("labore"),
                    Notes: sdk.String("sample notes"),
                    Per: sdk.Int64(1),
                    Price: sdk.String("modi"),
                    Quantity: sdk.String("qui"),
                    Shipping: sdk.String("aliquid"),
                    SpecID: sdk.Int64(1),
                    SpecReferenceID: sdk.Int64(1),
                    Tax: sdk.String("sample tax"),
                },
                shared.OrderItemPersistVO{
                    CompletionDate: types.MustDateFromString("2021-11-23"),
                    CustomFields: []shared.CustomFieldPersistVO{
                        shared.CustomFieldPersistVO{
                            DateValue: types.MustDateFromString("2022-03-04"),
                            NumberValue: sdk.String("ipsam"),
                            ParamName: sdk.String("sample param_name"),
                            StringValue: sdk.String("sample string_value"),
                        },
                    },
                    ExTaxValueCalculated: sdk.String("alias"),
                    Notes: sdk.String("sample notes"),
                    Per: sdk.Int64(1),
                    Price: sdk.String("fugit"),
                    Quantity: sdk.String("dolorum"),
                    Shipping: sdk.String("excepturi"),
                    SpecID: sdk.Int64(1),
                    SpecReferenceID: sdk.Int64(1),
                    Tax: sdk.String("sample tax"),
                },
            },
            OtherSelectionReason: sdk.String("sample other_selection_reason"),
            PaymentMethodID: sdk.Int64(1),
            PaymentReferenceNo: sdk.String("sample payment_reference_no"),
            SellOrder: sdk.Bool(true),
            Shipping: sdk.String("tempora"),
            SupplierReference: sdk.String("sample supplier_reference"),
            SupplierSelectionReasonID: sdk.Int64(1),
            SupplierUserID: sdk.Int64(1),
            Tax: sdk.String("sample tax"),
            Title: sdk.String("sample title"),
        },
        ProjectID: "facilis",
        WorkgroupID: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostBuyOrderRaw

Create a quick buy order

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
    res, err := s.Order.PostBuyOrderRaw(ctx, operations.PostBuyOrderRawRequest{
        RequestBody: []byte("labore"),
        ProjectID: "delectus",
        WorkgroupID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutBuyOrderJSON

Update a specific buy order

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
    res, err := s.Order.PutBuyOrderJSON(ctx, operations.PutBuyOrderJSONRequest{
        OrderUpdPersistVO: &shared.OrderUpdPersistVO{
            Action: sdk.String("sample action"),
            BudgetTypeFieldID: sdk.Int64(1),
            Comments: sdk.String("sample comments"),
            CustomFields: []shared.CustomFieldPersistVO{
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2021-04-10"),
                    NumberValue: sdk.String("aliquid"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
            },
            OrderCompletionDate: types.MustDateFromString("2021-03-17"),
            OrderID: sdk.Int64(1),
            OtherSelectionReason: sdk.String("sample other_selection_reason"),
            OversPercent: sdk.String("sint"),
            PaymentMethodID: sdk.Int64(1),
            PaymentReferenceNo: sdk.String("sample payment_reference_no"),
            RejectReason: sdk.String("sample reject_reason"),
            SupplierSelectionReasonID: sdk.Int64(1),
            UndersPercent: sdk.String("officia"),
        },
        OrderID: "dolor",
        ProjectID: "debitis",
        WorkgroupID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutBuyOrderRaw

Update a specific buy order

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
    res, err := s.Order.PutBuyOrderRaw(ctx, operations.PutBuyOrderRawRequest{
        RequestBody: []byte("dolorum"),
        OrderID: "in",
        ProjectID: "in",
        WorkgroupID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutSellOrderJSON

Update / Accept or Reject a specific sell order

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
    res, err := s.Order.PutSellOrderJSON(ctx, operations.PutSellOrderJSONRequest{
        OrderUpdPersistVO: &shared.OrderUpdPersistVO{
            Action: sdk.String("sample action"),
            BudgetTypeFieldID: sdk.Int64(1),
            Comments: sdk.String("sample comments"),
            CustomFields: []shared.CustomFieldPersistVO{
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-10-08"),
                    NumberValue: sdk.String("magnam"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2020-07-23"),
                    NumberValue: sdk.String("ea"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-04-29"),
                    NumberValue: sdk.String("accusamus"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-06-02"),
                    NumberValue: sdk.String("enim"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
            },
            OrderCompletionDate: types.MustDateFromString("2020-02-08"),
            OrderID: sdk.Int64(1),
            OtherSelectionReason: sdk.String("sample other_selection_reason"),
            OversPercent: sdk.String("quidem"),
            PaymentMethodID: sdk.Int64(1),
            PaymentReferenceNo: sdk.String("sample payment_reference_no"),
            RejectReason: sdk.String("sample reject_reason"),
            SupplierSelectionReasonID: sdk.Int64(1),
            UndersPercent: sdk.String("provident"),
        },
        OrderID: "nam",
        ProjectID: "id",
        WorkgroupID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutSellOrderRaw

Update / Accept or Reject a specific sell order

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
    res, err := s.Order.PutSellOrderRaw(ctx, operations.PutSellOrderRawRequest{
        RequestBody: []byte("deleniti"),
        OrderID: "sapiente",
        ProjectID: "amet",
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
