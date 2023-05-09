# Partners

### Available Operations

* [GetPartnersStoresJSON](#getpartnersstoresjson) - Retrieve statistics.
* [GetStoreCheckStatusJSON](#getstorecheckstatusjson) - Retrive store creation status.
* [PostStoreCreateJSON](#poststorecreatejson) - Create a Partnered Store

## GetPartnersStoresJSON

Retrieve statistics.

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
    res, err := s.Partners.GetPartnersStoresJSON(ctx, operations.GetPartnersStoresJSONRequest{
        AuthToken: "autem",
        From: "nobis",
        Page: sdk.Int64(557369),
        PartnerCode: "assumenda",
        To: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Types != nil {
        // handle response
    }
}
```

## GetStoreCheckStatusJSON

Retrive store creation status.

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
    res, err := s.Partners.GetStoreCheckStatusJSON(ctx, operations.GetStoreCheckStatusJSONRequest{
        AuthToken: "voluptas",
        Locale: sdk.String("libero"),
        PartnerCode: "quasi",
        StoreCode: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStoreCheckStatusJSON200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## PostStoreCreateJSON

Create a Partnered Store

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
    res, err := s.Partners.PostStoreCreateJSON(ctx, operations.PostStoreCreateJSONRequest{
        PartnerStoreCreate: shared.PartnerStoreCreate{
            Aff: sdk.String("numquam"),
            Email: sdk.String("Larissa.Bednar@gmail.com"),
            Locale: sdk.String("odio"),
            Password: sdk.String("eius"),
            PlanName: shared.PartnerStoreCreatePlanNameEnumPlus.ToPointer(),
            RejectDuplicates: sdk.Bool(false),
            StoreName: sdk.String("esse"),
        },
        AuthToken: "rem",
        PartnerCode: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartnerStoreCode != nil {
        // handle response
    }
}
```
