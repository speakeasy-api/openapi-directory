# AdvertiserLandingPages

### Available Operations

* [DfareportingAdvertiserLandingPagesGet](#dfareportingadvertiserlandingpagesget) - Gets one landing page by ID.
* [DfareportingAdvertiserLandingPagesInsert](#dfareportingadvertiserlandingpagesinsert) - Inserts a new landing page.
* [DfareportingAdvertiserLandingPagesList](#dfareportingadvertiserlandingpageslist) - Retrieves a list of landing pages.
* [DfareportingAdvertiserLandingPagesPatch](#dfareportingadvertiserlandingpagespatch) - Updates an existing advertiser landing page. This method supports patch semantics.
* [DfareportingAdvertiserLandingPagesUpdate](#dfareportingadvertiserlandingpagesupdate) - Updates an existing landing page.

## DfareportingAdvertiserLandingPagesGet

Gets one landing page by ID.

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
    res, err := s.AdvertiserLandingPages.DfareportingAdvertiserLandingPagesGet(ctx, operations.DfareportingAdvertiserLandingPagesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("deserunt"),
        ID: "e12c6891-f82c-4e11-9717-2305377dcfa8",
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "doloribus",
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.DfareportingAdvertiserLandingPagesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LandingPage != nil {
        // handle response
    }
}
```

## DfareportingAdvertiserLandingPagesInsert

Inserts a new landing page.

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
    res, err := s.AdvertiserLandingPages.DfareportingAdvertiserLandingPagesInsert(ctx, operations.DfareportingAdvertiserLandingPagesInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LandingPage: &shared.LandingPage{
            AdvertiserID: sdk.String("sequi"),
            Archived: sdk.Bool(false),
            DeepLinks: []shared.DeepLink{
                shared.DeepLink{
                    AppURL: sdk.String("commodi"),
                    FallbackURL: sdk.String("vel"),
                    Kind: sdk.String("rem"),
                    MobileApp: &shared.MobileApp{
                        Directory: shared.MobileAppDirectoryEnumAppleAppStore.ToPointer(),
                        ID: sdk.String("092e9c3d-dc5f-4111-9ea1-026d541a4d19"),
                        Kind: sdk.String("alias"),
                        PublisherName: sdk.String("sapiente"),
                        Title: sdk.String("Dr."),
                    },
                    RemarketingListIds: []string{
                        "quia",
                        "vitae",
                        "odio",
                    },
                },
                shared.DeepLink{
                    AppURL: sdk.String("quas"),
                    FallbackURL: sdk.String("ipsa"),
                    Kind: sdk.String("distinctio"),
                    MobileApp: &shared.MobileApp{
                        Directory: shared.MobileAppDirectoryEnumGooglePlayStore.ToPointer(),
                        ID: sdk.String("cc0dbbdd-b484-4708-bb4e-391e6bc158c4"),
                        Kind: sdk.String("impedit"),
                        PublisherName: sdk.String("ut"),
                        Title: sdk.String("Dr."),
                    },
                    RemarketingListIds: []string{
                        "numquam",
                        "enim",
                    },
                },
            },
            ID: sdk.String("cupiditate"),
            Kind: sdk.String("occaecati"),
            Name: sdk.String("Blake Feil"),
            URL: sdk.String("explicabo"),
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("sint"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "accusantium",
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.DfareportingAdvertiserLandingPagesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LandingPage != nil {
        // handle response
    }
}
```

## DfareportingAdvertiserLandingPagesList

Retrieves a list of landing pages.

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
    res, err := s.AdvertiserLandingPages.DfareportingAdvertiserLandingPagesList(ctx, operations.DfareportingAdvertiserLandingPagesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        AdvertiserIds: []string{
            "et",
            "expedita",
            "quibusdam",
        },
        Alt: shared.AltEnumMedia.ToPointer(),
        Archived: sdk.Bool(false),
        Callback: sdk.String("maiores"),
        CampaignIds: []string{
            "in",
            "culpa",
            "doloremque",
        },
        Fields: sdk.String("fuga"),
        Ids: []string{
            "architecto",
        },
        Key: sdk.String("suscipit"),
        MaxResults: sdk.Int64(757438),
        OauthToken: sdk.String("officiis"),
        PageToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fugit",
        QuotaUser: sdk.String("ratione"),
        SearchString: sdk.String("possimus"),
        SortField: operations.DfareportingAdvertiserLandingPagesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingAdvertiserLandingPagesListSortOrderEnumAscending.ToPointer(),
        SubaccountID: sdk.String("natus"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.DfareportingAdvertiserLandingPagesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvertiserLandingPagesListResponse != nil {
        // handle response
    }
}
```

## DfareportingAdvertiserLandingPagesPatch

Updates an existing advertiser landing page. This method supports patch semantics.

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
    res, err := s.AdvertiserLandingPages.DfareportingAdvertiserLandingPagesPatch(ctx, operations.DfareportingAdvertiserLandingPagesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LandingPage: &shared.LandingPage{
            AdvertiserID: sdk.String("ratione"),
            Archived: sdk.Bool(false),
            DeepLinks: []shared.DeepLink{
                shared.DeepLink{
                    AppURL: sdk.String("debitis"),
                    FallbackURL: sdk.String("iste"),
                    Kind: sdk.String("deserunt"),
                    MobileApp: &shared.MobileApp{
                        Directory: shared.MobileAppDirectoryEnumGooglePlayStore.ToPointer(),
                        ID: sdk.String("725b2912-2030-4d83-b5ae-b7799d22e8c1"),
                        Kind: sdk.String("repellat"),
                        PublisherName: sdk.String("atque"),
                        Title: sdk.String("Mrs."),
                    },
                    RemarketingListIds: []string{
                        "amet",
                        "corrupti",
                        "sunt",
                    },
                },
            },
            ID: sdk.String("nemo"),
            Kind: sdk.String("delectus"),
            Name: sdk.String("Lowell Hagenes"),
            URL: sdk.String("quos"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("sed"),
        ID: "c2dfb4cf-c1c7-4623-8f84-1fb1bd23fdb1",
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "expedita",
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.DfareportingAdvertiserLandingPagesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LandingPage != nil {
        // handle response
    }
}
```

## DfareportingAdvertiserLandingPagesUpdate

Updates an existing landing page.

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
    res, err := s.AdvertiserLandingPages.DfareportingAdvertiserLandingPagesUpdate(ctx, operations.DfareportingAdvertiserLandingPagesUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LandingPage: &shared.LandingPage{
            AdvertiserID: sdk.String("officia"),
            Archived: sdk.Bool(false),
            DeepLinks: []shared.DeepLink{
                shared.DeepLink{
                    AppURL: sdk.String("laudantium"),
                    FallbackURL: sdk.String("corporis"),
                    Kind: sdk.String("excepturi"),
                    MobileApp: &shared.MobileApp{
                        Directory: shared.MobileAppDirectoryEnumAppleAppStore.ToPointer(),
                        ID: sdk.String("8e22ae20-da16-4fc2-b271-a289c57e854e"),
                        Kind: sdk.String("omnis"),
                        PublisherName: sdk.String("ipsa"),
                        Title: sdk.String("Mrs."),
                    },
                    RemarketingListIds: []string{
                        "occaecati",
                    },
                },
                shared.DeepLink{
                    AppURL: sdk.String("quibusdam"),
                    FallbackURL: sdk.String("magni"),
                    Kind: sdk.String("consequuntur"),
                    MobileApp: &shared.MobileApp{
                        Directory: shared.MobileAppDirectoryEnumUnknown.ToPointer(),
                        ID: sdk.String("46569462-4070-484f-bab3-7cef02225194"),
                        Kind: sdk.String("fugiat"),
                        PublisherName: sdk.String("quidem"),
                        Title: sdk.String("Mrs."),
                    },
                    RemarketingListIds: []string{
                        "modi",
                        "quasi",
                    },
                },
            },
            ID: sdk.String("quae"),
            Kind: sdk.String("similique"),
            Name: sdk.String("Garrett Hoeger"),
            URL: sdk.String("est"),
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("autem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quo",
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("facere"),
    }, operations.DfareportingAdvertiserLandingPagesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LandingPage != nil {
        // handle response
    }
}
```
