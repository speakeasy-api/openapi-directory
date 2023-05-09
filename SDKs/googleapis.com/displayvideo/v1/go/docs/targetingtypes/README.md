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
        AccessToken: sdk.String("fugiat"),
        AdvertiserID: sdk.String("voluptas"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aperiam"),
        TargetingOptionID: "pariatur",
        TargetingType: operations.DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnumTargetingTypeContentOutstreamPosition,
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("culpa"),
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
        AccessToken: sdk.String("ut"),
        AdvertiserID: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("architecto"),
        Filter: sdk.String("tempore"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("nulla"),
        OrderBy: sdk.String("corrupti"),
        PageSize: sdk.Int64(453304),
        PageToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        TargetingType: operations.DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnumTargetingTypePoi,
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("ea"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SearchTargetingOptionsRequest: &shared.SearchTargetingOptionsRequest{
            AdvertiserID: sdk.String("laudantium"),
            BusinessChainSearchTerms: &shared.BusinessChainSearchTerms{
                BusinessChainQuery: sdk.String("qui"),
                RegionQuery: sdk.String("libero"),
            },
            GeoRegionSearchTerms: &shared.GeoRegionSearchTerms{
                GeoRegionQuery: sdk.String("maiores"),
            },
            PageSize: sdk.Int(723374),
            PageToken: sdk.String("pariatur"),
            PoiSearchTerms: &shared.PoiSearchTerms{
                PoiQuery: sdk.String("quod"),
            },
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        TargetingType: operations.DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnumTargetingTypeContentDuration,
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("mollitia"),
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
