# Shipment

### Available Operations

* [GetShipment](#getshipment) - Get a specific shipment.
* [GetShipmentList](#getshipmentlist) - List shipments of project
* [PostShipmentJSON](#postshipmentjson) - Create a shipment
* [PostShipmentRaw](#postshipmentraw) - Create a shipment
* [PutShipmentLocationJSON](#putshipmentlocationjson) - Update a specific shipment location
* [PutShipmentLocationRaw](#putshipmentlocationraw) - Update a specific shipment location

## GetShipment

Get a specific shipment.

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
    res, err := s.Shipment.GetShipment(ctx, operations.GetShipmentRequest{
        ProjectID: "dolores",
        ShipmentID: "minus",
        WorkgroupID: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetShipmentList

List shipments of project

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
    res, err := s.Shipment.GetShipmentList(ctx, operations.GetShipmentListRequest{
        ProjectID: "dolor",
        WorkgroupID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostShipmentJSON

Create a shipment

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
    res, err := s.Shipment.PostShipmentJSON(ctx, operations.PostShipmentJSONRequest{
        ShipmentLocationPostPersistVO: &shared.ShipmentLocationPostPersistVO{
            AddressLine1: sdk.String("sample address_line1"),
            AddressLine2: sdk.String("sample address_line2"),
            AddressLine3: sdk.String("sample address_line3"),
            BatchLabel: sdk.String("sample batch_label"),
            City: sdk.String("sample city"),
            CompanyName: sdk.String("sample company_name"),
            CountryIsoCode: sdk.String("sample country_iso_code"),
            DeliveryDate: types.MustDateFromString("2022-01-21"),
            DescriptionOrTitle: sdk.String("sample description_or_title"),
            Email: sdk.String("sample email"),
            FirstName: sdk.String("sample first_name"),
            InnerCartonLabel: sdk.String("sample inner_carton_label"),
            LastName: sdk.String("sample last_name"),
            MiddleName: sdk.String("sample middle_name"),
            OuterCartonLabel: sdk.String("sample outer_carton_label"),
            PalletLablel: sdk.String("sample pallet_lablel"),
            PoofType: sdk.String("sample poof_type"),
            PostalCode: sdk.String("sample postal_code"),
            RequestType: sdk.String("sample request_type"),
            RequestedQuantity: sdk.Int64(1),
            ShipmentCustomFields: []shared.CustomFieldPersistVO{
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2021-08-04"),
                    NumberValue: sdk.String("perspiciatis"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-03-20"),
                    NumberValue: sdk.String("consequuntur"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2021-10-04"),
                    NumberValue: sdk.String("eaque"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2021-08-08"),
                    NumberValue: sdk.String("adipisci"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
            },
            ShipmentRequestCustomFields: []shared.CustomFieldPersistVO{
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-03-14"),
                    NumberValue: sdk.String("iste"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2021-12-05"),
                    NumberValue: sdk.String("pariatur"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2021-07-01"),
                    NumberValue: sdk.String("libero"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-01-24"),
                    NumberValue: sdk.String("quos"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
            },
            ShippingCarrier: sdk.String("sample shipping_carrier"),
            ShippingInstruction: sdk.String("sample shipping_instruction"),
            ShppingMethod: sdk.String("sample shpping_method"),
            SpecIds: sdk.String("sample spec_ids"),
            State: sdk.String("sample state"),
            WorkPhoneNumber: sdk.String("sample work_phone_number"),
            WorkgroupName: sdk.String("sample workgroup_name"),
        },
        ProjectID: "aliquid",
        WorkgroupID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostShipmentRaw

Create a shipment

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
    res, err := s.Shipment.PostShipmentRaw(ctx, operations.PostShipmentRawRequest{
        RequestBody: []byte("dolorem"),
        ProjectID: "dolor",
        WorkgroupID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutShipmentLocationJSON

Update a specific shipment location

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
    res, err := s.Shipment.PutShipmentLocationJSON(ctx, operations.PutShipmentLocationJSONRequest{
        ShipmentLocationPersistVO: &shared.ShipmentLocationPersistVO{
            DueDate: types.MustDateFromString("2022-01-21"),
            QtyReceived: sdk.Int64(1),
            QtyRequested: sdk.Int64(1),
            QtyShipped: sdk.Int64(1),
            ReceivedDate: types.MustDateFromString("2021-07-10"),
            ShippedDate: types.MustDateFromString("2022-07-05"),
            ShippingCost: sdk.String("reiciendis"),
            Type: sdk.String("sample type"),
        },
        LocationID: "amet",
        ProjectID: "dolorum",
        ShipmentID: "numquam",
        WorkgroupID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutShipmentLocationRaw

Update a specific shipment location

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
    res, err := s.Shipment.PutShipmentLocationRaw(ctx, operations.PutShipmentLocationRawRequest{
        RequestBody: []byte("ipsa"),
        LocationID: "ipsa",
        ProjectID: "iure",
        ShipmentID: "odio",
        WorkgroupID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
