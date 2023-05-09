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
        AccessToken: sdk.String("tenetur"),
        AdvertiserID: sdk.String("non"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corrupti"),
        Fields: sdk.String("itaque"),
        GoogleAudienceID: "earum",
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("dicta"),
        PartnerID: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("cum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("illum"),
        AdvertiserID: sdk.String("ea"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("accusamus"),
        Filter: sdk.String("animi"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("voluptatem"),
        OrderBy: sdk.String("maiores"),
        PageSize: sdk.Int64(484905),
        PageToken: sdk.String("veniam"),
        PartnerID: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("tenetur"),
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
