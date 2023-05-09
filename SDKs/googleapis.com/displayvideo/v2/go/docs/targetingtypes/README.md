# TargetingTypes

### Available Operations

* [DisplayvideoTargetingTypesTargetingOptionsGet](#displayvideotargetingtypestargetingoptionsget) - Gets a single targeting option.
* [DisplayvideoTargetingTypesTargetingOptionsList](#displayvideotargetingtypestargetingoptionslist) - Lists targeting options of a given type.
* [DisplayvideoTargetingTypesTargetingOptionsSearch](#displayvideotargetingtypestargetingoptionssearch) - Searches for targeting options of a given type based on the given search terms.

## DisplayvideoTargetingTypesTargetingOptionsGet

Gets a single targeting option.

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
    res, err := s.TargetingTypes.DisplayvideoTargetingTypesTargetingOptionsGet(ctx, operations.DisplayvideoTargetingTypesTargetingOptionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolores"),
        AdvertiserID: sdk.String("illo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("magni"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nesciunt"),
        TargetingOptionID: "libero",
        TargetingType: operations.DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnumTargetingTypeEnvironment,
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("perspiciatis"),
    }, operations.DisplayvideoTargetingTypesTargetingOptionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TargetingOption != nil {
        // handle response
    }
}
```

## DisplayvideoTargetingTypesTargetingOptionsList

Lists targeting options of a given type.

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
    res, err := s.TargetingTypes.DisplayvideoTargetingTypesTargetingOptionsList(ctx, operations.DisplayvideoTargetingTypesTargetingOptionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ex"),
        AdvertiserID: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("rem"),
        Filter: sdk.String("eveniet"),
        Key: sdk.String("eveniet"),
        OauthToken: sdk.String("voluptatem"),
        OrderBy: sdk.String("repellat"),
        PageSize: sdk.Int64(165108),
        PageToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        TargetingType: operations.DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnumTargetingTypeURL,
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("veniam"),
    }, operations.DisplayvideoTargetingTypesTargetingOptionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTargetingOptionsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoTargetingTypesTargetingOptionsSearch

Searches for targeting options of a given type based on the given search terms.

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
    res, err := s.TargetingTypes.DisplayvideoTargetingTypesTargetingOptionsSearch(ctx, operations.DisplayvideoTargetingTypesTargetingOptionsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SearchTargetingOptionsRequest: &shared.SearchTargetingOptionsRequest{
            AdvertiserID: sdk.String("totam"),
            BusinessChainSearchTerms: &shared.BusinessChainSearchTerms{
                BusinessChainQuery: sdk.String("facere"),
                RegionQuery: sdk.String("eius"),
            },
            GeoRegionSearchTerms: &shared.GeoRegionSearchTerms{
                GeoRegionQuery: sdk.String("doloremque"),
            },
            PageSize: sdk.Int(873725),
            PageToken: sdk.String("aut"),
            PoiSearchTerms: &shared.PoiSearchTerms{
                PoiQuery: sdk.String("sequi"),
            },
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        TargetingType: operations.DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnumTargetingTypeCategory,
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.DisplayvideoTargetingTypesTargetingOptionsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchTargetingOptionsResponse != nil {
        // handle response
    }
}
```
