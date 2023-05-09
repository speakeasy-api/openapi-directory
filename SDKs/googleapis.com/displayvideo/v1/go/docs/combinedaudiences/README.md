# CombinedAudiences

### Available Operations

* [DisplayvideoCombinedAudiencesGet](#displayvideocombinedaudiencesget) - Gets a combined audience.
* [DisplayvideoCombinedAudiencesList](#displayvideocombinedaudienceslist) - Lists combined audiences. The order is defined by the order_by parameter.

## DisplayvideoCombinedAudiencesGet

Gets a combined audience.

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
    res, err := s.CombinedAudiences.DisplayvideoCombinedAudiencesGet(ctx, operations.DisplayvideoCombinedAudiencesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        AdvertiserID: sdk.String("voluptatem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("adipisci"),
        CombinedAudienceID: "accusantium",
        Fields: sdk.String("magnam"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("omnis"),
        PartnerID: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("id"),
    }, operations.DisplayvideoCombinedAudiencesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CombinedAudience != nil {
        // handle response
    }
}
```

## DisplayvideoCombinedAudiencesList

Lists combined audiences. The order is defined by the order_by parameter.

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
    res, err := s.CombinedAudiences.DisplayvideoCombinedAudiencesList(ctx, operations.DisplayvideoCombinedAudiencesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugit"),
        AdvertiserID: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("voluptatum"),
        Filter: sdk.String("quasi"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("nobis"),
        OrderBy: sdk.String("tempora"),
        PageSize: sdk.Int64(452653),
        PageToken: sdk.String("eius"),
        PartnerID: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aperiam"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.DisplayvideoCombinedAudiencesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCombinedAudiencesResponse != nil {
        // handle response
    }
}
```
