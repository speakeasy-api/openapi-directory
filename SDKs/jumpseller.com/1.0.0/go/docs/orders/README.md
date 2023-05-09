# Orders

### Available Operations

* [GetOrdersJSON](#getordersjson) - Retrieve all Orders.
* [GetOrdersAfterIDJSON](#getordersafteridjson) - Retrieve orders filtered by Order Id.
* [GetOrdersCountJSON](#getorderscountjson) - Count all Orders.
* [GetOrdersStatusStatusJSON](#getordersstatusstatusjson) - Retrieve orders filtered by status.
* [GetOrdersIDJSON](#getordersidjson) - Retrieve a single Order.
* [GetOrdersIDHistoryJSON](#getordersidhistoryjson) - Retrieve all Order History.
* [PostOrdersJSON](#postordersjson) - Create a new Order.
* [PostOrdersIDHistoryJSON](#postordersidhistoryjson) - Create a new Order History Entry.
* [PutOrdersIDJSON](#putordersidjson) - Modify an existing Order.

## GetOrdersJSON

Retrieve all Orders.

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
    res, err := s.Orders.GetOrdersJSON(ctx, operations.GetOrdersJSONRequest{
        Authtoken: "quod",
        Limit: sdk.Int64(885338),
        Login: "qui",
        Page: sdk.Int64(679880),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Orders != nil {
        // handle response
    }
}
```

## GetOrdersAfterIDJSON

For example the GET /orders/after/5000 will return Order 5001, 5002, 5003, etc.

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
    res, err := s.Orders.GetOrdersAfterIDJSON(ctx, operations.GetOrdersAfterIDJSONRequest{
        Authtoken: "a",
        ID: 456130,
        Login: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Order != nil {
        // handle response
    }
}
```

## GetOrdersCountJSON

Count all Orders.

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
    res, err := s.Orders.GetOrdersCountJSON(ctx, operations.GetOrdersCountJSONRequest{
        Authtoken: "iusto",
        Login: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## GetOrdersStatusStatusJSON

Retrieve orders filtered by status.

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
    res, err := s.Orders.GetOrdersStatusStatusJSON(ctx, operations.GetOrdersStatusStatusJSONRequest{
        Authtoken: "quisquam",
        Login: "tenetur",
        Status: operations.GetOrdersStatusStatusJSONStatusEnumAbandoned,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Orders != nil {
        // handle response
    }
}
```

## GetOrdersIDJSON

Retrieve a single Order.

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
    res, err := s.Orders.GetOrdersIDJSON(ctx, operations.GetOrdersIDJSONRequest{
        Authtoken: "tempore",
        ID: 880298,
        Login: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Order != nil {
        // handle response
    }
}
```

## GetOrdersIDHistoryJSON

Retrieve all Order History.

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
    res, err := s.Orders.GetOrdersIDHistoryJSON(ctx, operations.GetOrdersIDHistoryJSONRequest{
        Authtoken: "enim",
        ID: 213312,
        Login: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderHistories != nil {
        // handle response
    }
}
```

## PostOrdersJSON

Orders created externally keep the given order product's values (bypassing internal promotion or product amounts).

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
    res, err := s.Orders.PostOrdersJSON(ctx, operations.PostOrdersJSONRequest{
        OrderCreate: shared.OrderCreate{
            Order: &shared.OrderCreateFields{
                Customer: &shared.CustomerFieldsWithBillingAddressAndShippingAddressFields{
                    BillingAddress: &shared.BillingAddress{
                        Address: sdk.String("4072 Hermann Ridges"),
                        City: sdk.String("Lake Jamaal"),
                        Country: sdk.String("Croatia"),
                        Municipality: sdk.String("incidunt"),
                        Name: sdk.String("Shelly Schoen"),
                        Postal: sdk.String("dicta"),
                        Region: sdk.String("laborum"),
                        Surname: sdk.String("totam"),
                        Taxid: sdk.String("incidunt"),
                    },
                    ID: sdk.Int(132068),
                    ShippingAddress: &shared.ShippingAddress{
                        Address: sdk.String("77345 Deckow Estate"),
                        City: sdk.String("East Jeffereyland"),
                        Country: sdk.String("Guatemala"),
                        Municipality: sdk.String("nam"),
                        Name: sdk.String("George Runolfsdottir"),
                        Postal: sdk.String("et"),
                        Region: sdk.String("saepe"),
                        Surname: sdk.String("ipsum"),
                    },
                },
                Products: []shared.OrderProductOrderCreate{
                    shared.OrderProductOrderCreate{
                        Discount: sdk.Float32(7492.55),
                        ID: sdk.Int(552193),
                        Price: sdk.Float32(7316.94),
                        Qty: sdk.Int(584476),
                        VariantID: sdk.Int(45614),
                    },
                },
                ShippingMethodID: sdk.Int(961937),
                ShippingMethodName: sdk.String("dolorem"),
                ShippingPrice: sdk.Float32(2921.47),
                Status: shared.OrderCreateFieldsStatusEnumCanceled.ToPointer(),
            },
        },
        Authtoken: "adipisci",
        Login: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Order != nil {
        // handle response
    }
}
```

## PostOrdersIDHistoryJSON

Create a new Order History Entry.

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
    res, err := s.Orders.PostOrdersIDHistoryJSON(ctx, operations.PostOrdersIDHistoryJSONRequest{
        OrderHistoryEdit: shared.OrderHistoryEdit{
            OrderHistory: &shared.OrderHistoryEditFields{
                Message: sdk.String("architecto"),
            },
        },
        Authtoken: "quae",
        ID: 16429,
        Login: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderHistory != nil {
        // handle response
    }
}
```

## PutOrdersIDJSON

Only `status`, `shipment_status`, `tracking_number`, `tracking_company`, `tracking_url`, `additional_information` and `additional_fields` are available for update. An email is send if `shipment_status` changes.

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
    res, err := s.Orders.PutOrdersIDJSON(ctx, operations.PutOrdersIDJSONRequest{
        OrderEdit: shared.OrderEdit{
            Order: &shared.OrderEditFields{
                AdditionalFields: []shared.OrderAdditionalFields{
                    shared.OrderAdditionalFields{
                        Label: sdk.String("consequatur"),
                        Value: sdk.String("est"),
                    },
                    shared.OrderAdditionalFields{
                        Label: sdk.String("repellendus"),
                        Value: sdk.String("porro"),
                    },
                    shared.OrderAdditionalFields{
                        Label: sdk.String("doloribus"),
                        Value: sdk.String("ut"),
                    },
                    shared.OrderAdditionalFields{
                        Label: sdk.String("facilis"),
                        Value: sdk.String("cupiditate"),
                    },
                },
                AdditionalInformation: sdk.String("qui"),
                ShipmentStatus: shared.OrderEditFieldsShipmentStatusEnumRequested.ToPointer(),
                Status: shared.OrderEditFieldsStatusEnumPendingPayment.ToPointer(),
                TrackingCompany: sdk.String("odio"),
                TrackingNumber: sdk.String("occaecati"),
                TrackingURL: sdk.String("voluptatibus"),
            },
        },
        Authtoken: "quisquam",
        ID: 876506,
        Login: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Order != nil {
        // handle response
    }
}
```
