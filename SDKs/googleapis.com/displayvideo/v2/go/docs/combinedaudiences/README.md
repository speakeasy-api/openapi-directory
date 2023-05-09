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
        AccessToken: sdk.String("officia"),
        AdvertiserID: sdk.String("est"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illo"),
        CombinedAudienceID: "voluptate",
        Fields: sdk.String("consequatur"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("incidunt"),
        PartnerID: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("quo"),
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
        AccessToken: sdk.String("delectus"),
        AdvertiserID: sdk.String("laboriosam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("fuga"),
        Filter: sdk.String("officia"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("cupiditate"),
        OrderBy: sdk.String("soluta"),
        PageSize: sdk.Int64(733226),
        PageToken: sdk.String("culpa"),
        PartnerID: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("ad"),
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
