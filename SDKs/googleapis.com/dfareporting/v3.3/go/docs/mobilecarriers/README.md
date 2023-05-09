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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("repellat"),
        ID: "e9d96553-b89e-4000-9c66-92de7b356220",
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptas",
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("cum"),
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
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("harum"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ipsam",
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("alias"),
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
