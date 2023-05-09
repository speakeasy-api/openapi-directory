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
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("nobis"),
        ID: "8962f489-6bf5-41e4-a52d-3c343d61778a",
        Key: sdk.String("earum"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "excepturi",
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("numquam"),
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
            Active: sdk.Bool(false),
            ID: sdk.String("odio"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("magni"),
                Etag: sdk.String("enim"),
                ID: sdk.String("e621909e-9104-44a5-9e59-ac7706670cf1"),
                Kind: sdk.String("optio"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("quis"),
            },
            InpageTagFormats: []shared.DirectorySiteInpageTagFormatsEnum{
                shared.DirectorySiteInpageTagFormatsEnumStandard,
                shared.DirectorySiteInpageTagFormatsEnumStandard,
                shared.DirectorySiteInpageTagFormatsEnumIframeJavascriptInpage,
            },
            InterstitialTagFormats: []shared.DirectorySiteInterstitialTagFormatsEnum{
                shared.DirectorySiteInterstitialTagFormatsEnumIframeJavascriptInterstitial,
            },
            Kind: sdk.String("explicabo"),
            Name: sdk.String("Teresa VonRueden"),
            Settings: &shared.DirectorySiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                DfpSettings: &shared.DfpSettings{
                    DfpNetworkCode: sdk.String("harum"),
                    DfpNetworkName: sdk.String("cum"),
                    ProgrammaticPlacementAccepted: sdk.Bool(false),
                    PubPaidPlacementAccepted: sdk.Bool(false),
                    PublisherPortalOnly: sdk.Bool(false),
                },
                InstreamVideoPlacementAccepted: sdk.Bool(false),
                InterstitialPlacementAccepted: sdk.Bool(false),
            },
            URL: sdk.String("non"),
        },
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("molestias"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "provident",
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("qui"),
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
        AccessToken: sdk.String("velit"),
        Active: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        DfpNetworkCode: sdk.String("suscipit"),
        Fields: sdk.String("odio"),
        Ids: []string{
            "accusamus",
        },
        Key: sdk.String("error"),
        MaxResults: sdk.Int64(246664),
        OauthToken: sdk.String("earum"),
        PageToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aliquid",
        QuotaUser: sdk.String("impedit"),
        SearchString: sdk.String("reiciendis"),
        SortField: operations.DfareportingDirectorySitesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingDirectorySitesListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("dolorem"),
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
