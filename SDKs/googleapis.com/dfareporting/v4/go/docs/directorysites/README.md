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
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("non"),
        ID: "5118c2cc-57fb-4d60-b1a7-8ed29a9d4eea",
        Key: sdk.String("totam"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nisi",
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("optio"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DirectorySite: &shared.DirectorySite{
            ID: sdk.String("at"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("modi"),
                Etag: sdk.String("delectus"),
                ID: sdk.String("4c88be4f-278f-4d96-a7e4-6c51d2ffaa58"),
                Kind: sdk.String("temporibus"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("voluptates"),
            },
            InpageTagFormats: []shared.DirectorySiteInpageTagFormatsEnum{
                shared.DirectorySiteInpageTagFormatsEnumStandard,
                shared.DirectorySiteInpageTagFormatsEnumStandard,
                shared.DirectorySiteInpageTagFormatsEnumIframeJavascriptInpage,
                shared.DirectorySiteInpageTagFormatsEnumJavascriptInpage,
            },
            InterstitialTagFormats: []shared.DirectorySiteInterstitialTagFormatsEnum{
                shared.DirectorySiteInterstitialTagFormatsEnumInternalRedirectInterstitial,
                shared.DirectorySiteInterstitialTagFormatsEnumIframeJavascriptInterstitial,
                shared.DirectorySiteInterstitialTagFormatsEnumJavascriptInterstitial,
            },
            Kind: sdk.String("natus"),
            Name: sdk.String("Kristopher Zulauf V"),
            Settings: &shared.DirectorySiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                DfpSettings: &shared.DfpSettings{
                    DfpNetworkCode: sdk.String("alias"),
                    DfpNetworkName: sdk.String("id"),
                    ProgrammaticPlacementAccepted: sdk.Bool(false),
                    PubPaidPlacementAccepted: sdk.Bool(false),
                    PublisherPortalOnly: sdk.Bool(false),
                },
                InstreamVideoPlacementAccepted: sdk.Bool(false),
                InterstitialPlacementAccepted: sdk.Bool(false),
            },
            URL: sdk.String("nobis"),
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("harum"),
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("eligendi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "magni",
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("ullam"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AcceptsInStreamVideoPlacements: sdk.Bool(false),
        AcceptsInterstitialPlacements: sdk.Bool(false),
        AcceptsPublisherPaidPlacements: sdk.Bool(false),
        AccessToken: sdk.String("impedit"),
        Active: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        DfpNetworkCode: sdk.String("ipsam"),
        Fields: sdk.String("error"),
        Ids: []string{
            "debitis",
            "ipsa",
            "quia",
            "totam",
        },
        Key: sdk.String("consequatur"),
        MaxResults: sdk.Int64(545903),
        OauthToken: sdk.String("numquam"),
        PageToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quod",
        QuotaUser: sdk.String("nisi"),
        SearchString: sdk.String("excepturi"),
        SortField: operations.DfareportingDirectorySitesListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingDirectorySitesListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("corrupti"),
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
