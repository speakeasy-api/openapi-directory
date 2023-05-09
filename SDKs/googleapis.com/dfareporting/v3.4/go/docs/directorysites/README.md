# DirectorySites

### Available Operations

* [DfareportingDirectorySitesGet](#dfareportingdirectorysitesget) - Gets one directory site by ID.
* [DfareportingDirectorySitesInsert](#dfareportingdirectorysitesinsert) - Inserts a new directory site.
* [DfareportingDirectorySitesList](#dfareportingdirectorysiteslist) - Retrieves a list of directory sites, possibly filtered. This method supports paging.

## DfareportingDirectorySitesGet

Gets one directory site by ID.

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
    res, err := s.DirectorySites.DfareportingDirectorySitesGet(ctx, operations.DfareportingDirectorySitesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("debitis"),
        ID: "3023b93e-3431-46cf-95b4-313553ccf1c2",
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "placeat",
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("illum"),
    }, operations.DfareportingDirectorySitesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DirectorySite != nil {
        // handle response
    }
}
```

## DfareportingDirectorySitesInsert

Inserts a new directory site.

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
    res, err := s.DirectorySites.DfareportingDirectorySitesInsert(ctx, operations.DfareportingDirectorySitesInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DirectorySite: &shared.DirectorySite{
            ID: sdk.String("minus"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sint"),
                Etag: sdk.String("occaecati"),
                ID: sdk.String("04c5195b-8648-4cef-a78f-1e2d3b901e09"),
                Kind: sdk.String("corporis"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("distinctio"),
            },
            InpageTagFormats: []shared.DirectorySiteInpageTagFormatsEnum{
                shared.DirectorySiteInpageTagFormatsEnumInternalRedirectInpage,
                shared.DirectorySiteInpageTagFormatsEnumIframeJavascriptInpage,
                shared.DirectorySiteInpageTagFormatsEnumJavascriptInpage,
            },
            InterstitialTagFormats: []shared.DirectorySiteInterstitialTagFormatsEnum{
                shared.DirectorySiteInterstitialTagFormatsEnumJavascriptInterstitial,
                shared.DirectorySiteInterstitialTagFormatsEnumIframeJavascriptInterstitial,
                shared.DirectorySiteInterstitialTagFormatsEnumInternalRedirectInterstitial,
            },
            Kind: sdk.String("voluptatibus"),
            Name: sdk.String("Rebecca Durgan"),
            Settings: &shared.DirectorySiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                DfpSettings: &shared.DfpSettings{
                    DfpNetworkCode: sdk.String("enim"),
                    DfpNetworkName: sdk.String("culpa"),
                    ProgrammaticPlacementAccepted: sdk.Bool(false),
                    PubPaidPlacementAccepted: sdk.Bool(false),
                    PublisherPortalOnly: sdk.Bool(false),
                },
                InstreamVideoPlacementAccepted: sdk.Bool(false),
                InterstitialPlacementAccepted: sdk.Bool(false),
            },
            URL: sdk.String("dolore"),
        },
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestias"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "corrupti",
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("odio"),
    }, operations.DfareportingDirectorySitesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DirectorySite != nil {
        // handle response
    }
}
```

## DfareportingDirectorySitesList

Retrieves a list of directory sites, possibly filtered. This method supports paging.

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
    res, err := s.DirectorySites.DfareportingDirectorySitesList(ctx, operations.DfareportingDirectorySitesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AcceptsInStreamVideoPlacements: sdk.Bool(false),
        AcceptsInterstitialPlacements: sdk.Bool(false),
        AcceptsPublisherPaidPlacements: sdk.Bool(false),
        AccessToken: sdk.String("eveniet"),
        Active: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quos"),
        DfpNetworkCode: sdk.String("eveniet"),
        Fields: sdk.String("officia"),
        Ids: []string{
            "debitis",
            "non",
            "veniam",
        },
        Key: sdk.String("illo"),
        MaxResults: sdk.Int64(72247),
        OauthToken: sdk.String("deleniti"),
        PageToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fugit",
        QuotaUser: sdk.String("optio"),
        SearchString: sdk.String("quo"),
        SortField: operations.DfareportingDirectorySitesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingDirectorySitesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("libero"),
    }, operations.DfareportingDirectorySitesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DirectorySitesListResponse != nil {
        // handle response
    }
}
```
