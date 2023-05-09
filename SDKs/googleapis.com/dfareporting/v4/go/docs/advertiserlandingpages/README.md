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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("inventore"),
        ID: "57172305-377d-4cfa-89df-975e35668609",
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "unde",
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("repellendus"),
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
            AdvertiserID: sdk.String("minus"),
            Archived: sdk.Bool(false),
            DeepLinks: []shared.DeepLink{
                shared.DeepLink{
                    AppURL: sdk.String("a"),
                    FallbackURL: sdk.String("beatae"),
                    Kind: sdk.String("vitae"),
                    MobileApp: &shared.MobileApp{
                        Directory: shared.MobileAppDirectoryEnumUnknown.ToPointer(),
                        ID: sdk.String("dea1026d-541a-44d1-90fe-b21780bccc0d"),
                        Kind: sdk.String("distinctio"),
                        PublisherName: sdk.String("distinctio"),
                        Title: sdk.String("Dr."),
                    },
                    RemarketingListIds: []string{
                        "soluta",
                        "magnam",
                        "laudantium",
                        "tempora",
                    },
                },
                shared.DeepLink{
                    AppURL: sdk.String("esse"),
                    FallbackURL: sdk.String("doloremque"),
                    Kind: sdk.String("corrupti"),
                    MobileApp: &shared.MobileApp{
                        Directory: shared.MobileAppDirectoryEnumGenericCtvAppStore.ToPointer(),
                        ID: sdk.String("b4e391e6-bc15-48c4-84e5-4599ea342260"),
                        Kind: sdk.String("eveniet"),
                        PublisherName: sdk.String("sint"),
                        Title: sdk.String("Miss"),
                    },
                    RemarketingListIds: []string{
                        "accusantium",
                    },
                },
            },
            ID: sdk.String("consequatur"),
            Kind: sdk.String("impedit"),
            Name: sdk.String("Jared Lind MD"),
            URL: sdk.String("quibusdam"),
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("in"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fuga",
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("suscipit"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officiis"),
        AdvertiserIds: []string{
            "fugit",
            "ratione",
        },
        Alt: shared.AltEnumProto.ToPointer(),
        Archived: sdk.Bool(false),
        Callback: sdk.String("quaerat"),
        CampaignIds: []string{
            "natus",
        },
        Fields: sdk.String("esse"),
        Ids: []string{
            "deserunt",
            "ratione",
            "ipsa",
            "debitis",
        },
        Key: sdk.String("iste"),
        MaxResults: sdk.Int64(646776),
        OauthToken: sdk.String("hic"),
        PageToken: sdk.String("ducimus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "consequuntur",
        QuotaUser: sdk.String("ipsam"),
        SearchString: sdk.String("libero"),
        SortField: operations.DfareportingAdvertiserLandingPagesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingAdvertiserLandingPagesListSortOrderEnumDescending.ToPointer(),
        SubaccountID: sdk.String("dicta"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("explicabo"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LandingPage: &shared.LandingPage{
            AdvertiserID: sdk.String("amet"),
            Archived: sdk.Bool(false),
            DeepLinks: []shared.DeepLink{
                shared.DeepLink{
                    AppURL: sdk.String("fugiat"),
                    FallbackURL: sdk.String("voluptatum"),
                    Kind: sdk.String("velit"),
                    MobileApp: &shared.MobileApp{
                        Directory: shared.MobileAppDirectoryEnumGenericCtvAppStore.ToPointer(),
                        ID: sdk.String("5aeb7799-d22e-48c1-b849-3825fdc42c87"),
                        Kind: sdk.String("commodi"),
                        PublisherName: sdk.String("maxime"),
                        Title: sdk.String("Mr."),
                    },
                    RemarketingListIds: []string{
                        "consequuntur",
                        "possimus",
                        "delectus",
                        "harum",
                    },
                },
            },
            ID: sdk.String("aliquam"),
            Kind: sdk.String("eligendi"),
            Name: sdk.String("Cedric Blanda"),
            URL: sdk.String("nisi"),
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("reiciendis"),
        ID: "841fb1bd-23fd-4b14-9b6b-e5a685998e22",
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eos",
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("id"),
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
            AdvertiserID: sdk.String("commodi"),
            Archived: sdk.Bool(false),
            DeepLinks: []shared.DeepLink{
                shared.DeepLink{
                    AppURL: sdk.String("minus"),
                    FallbackURL: sdk.String("sed"),
                    Kind: sdk.String("nam"),
                    MobileApp: &shared.MobileApp{
                        Directory: shared.MobileAppDirectoryEnumAppleAppStore.ToPointer(),
                        ID: sdk.String("71a289c5-7e85-44e9-8439-d22246569462"),
                        Kind: sdk.String("modi"),
                        PublisherName: sdk.String("doloremque"),
                        Title: sdk.String("Ms."),
                    },
                    RemarketingListIds: []string{
                        "voluptatum",
                    },
                },
                shared.DeepLink{
                    AppURL: sdk.String("tempora"),
                    FallbackURL: sdk.String("delectus"),
                    Kind: sdk.String("quam"),
                    MobileApp: &shared.MobileApp{
                        Directory: shared.MobileAppDirectoryEnumXboxAppStore.ToPointer(),
                        ID: sdk.String("b37cef02-2251-494d-b554-10adc669af90"),
                        Kind: sdk.String("deserunt"),
                        PublisherName: sdk.String("fugit"),
                        Title: sdk.String("Ms."),
                    },
                    RemarketingListIds: []string{
                        "molestiae",
                        "maxime",
                        "facere",
                        "impedit",
                    },
                },
                shared.DeepLink{
                    AppURL: sdk.String("cupiditate"),
                    FallbackURL: sdk.String("deleniti"),
                    Kind: sdk.String("quasi"),
                    MobileApp: &shared.MobileApp{
                        Directory: shared.MobileAppDirectoryEnumGenericCtvAppStore.ToPointer(),
                        ID: sdk.String("068981d6-bb33-4cfa-a348-c31bf407ee4f"),
                        Kind: sdk.String("eligendi"),
                        PublisherName: sdk.String("sapiente"),
                        Title: sdk.String("Mr."),
                    },
                    RemarketingListIds: []string{
                        "numquam",
                        "aspernatur",
                        "nobis",
                        "nihil",
                    },
                },
                shared.DeepLink{
                    AppURL: sdk.String("voluptatum"),
                    FallbackURL: sdk.String("reiciendis"),
                    Kind: sdk.String("vitae"),
                    MobileApp: &shared.MobileApp{
                        Directory: shared.MobileAppDirectoryEnumRokuAppStore.ToPointer(),
                        ID: sdk.String("626398a0-dc76-4632-8ccb-06c8ca12d025"),
                        Kind: sdk.String("aspernatur"),
                        PublisherName: sdk.String("perspiciatis"),
                        Title: sdk.String("Mr."),
                    },
                    RemarketingListIds: []string{
                        "alias",
                        "quidem",
                    },
                },
            },
            ID: sdk.String("deleniti"),
            Kind: sdk.String("possimus"),
            Name: sdk.String("Courtney Conroy"),
            URL: sdk.String("illum"),
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("cum"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "placeat",
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("dolore"),
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
