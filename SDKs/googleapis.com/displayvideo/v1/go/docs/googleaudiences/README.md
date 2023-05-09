# GoogleAudiences

### Available Operations

* [DisplayvideoGoogleAudiencesGet](#displayvideogoogleaudiencesget) - Gets a Google audience.
* [DisplayvideoGoogleAudiencesList](#displayvideogoogleaudienceslist) - Lists Google audiences. The order is defined by the order_by parameter.

## DisplayvideoGoogleAudiencesGet

Gets a Google audience.

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
    res, err := s.GoogleAudiences.DisplayvideoGoogleAudiencesGet(ctx, operations.DisplayvideoGoogleAudiencesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        AdvertiserID: sdk.String("tempora"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("voluptatem"),
        GoogleAudienceID: "suscipit",
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("facilis"),
        PartnerID: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("quia"),
    }, operations.DisplayvideoGoogleAudiencesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAudience != nil {
        // handle response
    }
}
```

## DisplayvideoGoogleAudiencesList

Lists Google audiences. The order is defined by the order_by parameter.

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
    res, err := s.GoogleAudiences.DisplayvideoGoogleAudiencesList(ctx, operations.DisplayvideoGoogleAudiencesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quaerat"),
        AdvertiserID: sdk.String("corporis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("sapiente"),
        Filter: sdk.String("esse"),
        Key: sdk.String("neque"),
        OauthToken: sdk.String("quidem"),
        OrderBy: sdk.String("quisquam"),
        PageSize: sdk.Int64(506245),
        PageToken: sdk.String("tempora"),
        PartnerID: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("magni"),
    }, operations.DisplayvideoGoogleAudiencesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGoogleAudiencesResponse != nil {
        // handle response
    }
}
```
