# MobileCarriers

### Available Operations

* [DfareportingMobileCarriersGet](#dfareportingmobilecarriersget) - Gets one mobile carrier by ID.
* [DfareportingMobileCarriersList](#dfareportingmobilecarrierslist) - Retrieves a list of mobile carriers.

## DfareportingMobileCarriersGet

Gets one mobile carrier by ID.

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
    res, err := s.MobileCarriers.DfareportingMobileCarriersGet(ctx, operations.DfareportingMobileCarriersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("deleniti"),
        ID: "bb71804f-423d-4543-935f-377ac5c9b7e9",
        Key: sdk.String("velit"),
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "suscipit",
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("optio"),
    }, operations.DfareportingMobileCarriersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MobileCarrier != nil {
        // handle response
    }
}
```

## DfareportingMobileCarriersList

Retrieves a list of mobile carriers.

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
    res, err := s.MobileCarriers.DfareportingMobileCarriersList(ctx, operations.DfareportingMobileCarriersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("doloremque"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "iusto",
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.DfareportingMobileCarriersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MobileCarriersListResponse != nil {
        // handle response
    }
}
```
