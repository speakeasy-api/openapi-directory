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
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("corrupti"),
        ID: "55d015b6-2c8b-483a-b8a8-a88c144200c2",
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "repudiandae",
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("similique"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "adipisci",
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("modi"),
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
