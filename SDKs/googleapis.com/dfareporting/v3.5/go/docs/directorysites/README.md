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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("autem"),
        ID: "c51d2ffa-a58d-4cef-a34c-955b9bdf2190",
        Key: sdk.String("id"),
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "vero",
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("harum"),
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
            ID: sdk.String("eligendi"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("magni"),
                Etag: sdk.String("dignissimos"),
                ID: sdk.String("25ec2659-ce02-4808-80c6-9ef68e45c8ad"),
                Kind: sdk.String("possimus"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("est"),
            },
            InpageTagFormats: []shared.DirectorySiteInpageTagFormatsEnum{
                shared.DirectorySiteInpageTagFormatsEnumIframeJavascriptInpage,
                shared.DirectorySiteInpageTagFormatsEnumIframeJavascriptInpage,
                shared.DirectorySiteInpageTagFormatsEnumIframeJavascriptInpage,
                shared.DirectorySiteInpageTagFormatsEnumIframeJavascriptInpage,
            },
            InterstitialTagFormats: []shared.DirectorySiteInterstitialTagFormatsEnum{
                shared.DirectorySiteInterstitialTagFormatsEnumIframeJavascriptInterstitial,
            },
            Kind: sdk.String("quaerat"),
            Name: sdk.String("Kimberly Rowe"),
            Settings: &shared.DirectorySiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                DfpSettings: &shared.DfpSettings{
                    DfpNetworkCode: sdk.String("amet"),
                    DfpNetworkName: sdk.String("quia"),
                    ProgrammaticPlacementAccepted: sdk.Bool(false),
                    PubPaidPlacementAccepted: sdk.Bool(false),
                    PublisherPortalOnly: sdk.Bool(false),
                },
                InstreamVideoPlacementAccepted: sdk.Bool(false),
                InterstitialPlacementAccepted: sdk.Bool(false),
            },
            URL: sdk.String("facilis"),
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("inventore"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "sapiente",
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("nobis"),
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
        AccessToken: sdk.String("itaque"),
        Active: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("beatae"),
        DfpNetworkCode: sdk.String("eveniet"),
        Fields: sdk.String("quas"),
        Ids: []string{
            "voluptate",
            "libero",
            "quod",
            "ea",
        },
        Key: sdk.String("error"),
        MaxResults: sdk.Int64(872798),
        OauthToken: sdk.String("incidunt"),
        PageToken: sdk.String("autem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "alias",
        QuotaUser: sdk.String("est"),
        SearchString: sdk.String("iusto"),
        SortField: operations.DfareportingDirectorySitesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingDirectorySitesListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("saepe"),
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
