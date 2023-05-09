# Creatives

### Available Operations

* [AdexchangebuyerCreativesAddDeal](#adexchangebuyercreativesadddeal) - Add a deal id association for the creative.
* [AdexchangebuyerCreativesGet](#adexchangebuyercreativesget) - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* [AdexchangebuyerCreativesInsert](#adexchangebuyercreativesinsert) - Submit a new creative.
* [AdexchangebuyerCreativesList](#adexchangebuyercreativeslist) - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
* [AdexchangebuyerCreativesListDeals](#adexchangebuyercreativeslistdeals) - Lists the external deal ids associated with the creative.
* [AdexchangebuyerCreativesRemoveDeal](#adexchangebuyercreativesremovedeal) - Remove a deal id associated with the creative.

## AdexchangebuyerCreativesAddDeal

Add a deal id association for the creative.

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
    res, err := s.Creatives.AdexchangebuyerCreativesAddDeal(ctx, operations.AdexchangebuyerCreativesAddDealRequest{
        AccountID: 916723,
        Alt: shared.AltEnumJSON.ToPointer(),
        BuyerCreativeID: "quasi",
        DealID: "repudiandae",
        Fields: sdk.String("sint"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UserIP: sdk.String("enim"),
    }, operations.AdexchangebuyerCreativesAddDealSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AdexchangebuyerCreativesGet

Gets the status for a single creative. A creative will be available 30-40 minutes after submission.

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
    res, err := s.Creatives.AdexchangebuyerCreativesGet(ctx, operations.AdexchangebuyerCreativesGetRequest{
        AccountID: 9356,
        Alt: shared.AltEnumJSON.ToPointer(),
        BuyerCreativeID: "est",
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UserIP: sdk.String("quibusdam"),
    }, operations.AdexchangebuyerCreativesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Creative != nil {
        // handle response
    }
}
```

## AdexchangebuyerCreativesInsert

Submit a new creative.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Creatives.AdexchangebuyerCreativesInsert(ctx, operations.AdexchangebuyerCreativesInsertRequest{
        Creative: &shared.Creative{
            HTMLSnippet: sdk.String("labore"),
            AccountID: sdk.Int(264730),
            AdChoicesDestinationURL: sdk.String("qui"),
            AdTechnologyProviders: &shared.CreativeAdTechnologyProviders{
                DetectedProviderIds: []string{
                    "cupiditate",
                    "quos",
                },
                HasUnidentifiedProvider: sdk.Bool(false),
            },
            AdvertiserID: []string{
                "magni",
            },
            AdvertiserName: sdk.String("assumenda"),
            AgencyID: sdk.String("ipsam"),
            APIUploadTimestamp: types.MustTimeFromString("2022-11-08T13:10:11.700Z"),
            Attribute: []int{
                569618,
                270008,
                703737,
            },
            BuyerCreativeID: sdk.String("tempore"),
            ClickThroughURL: []string{
                "delectus",
                "eum",
            },
            Corrections: []shared.CreativeCorrections{
                shared.CreativeCorrections{
                    Contexts: []shared.CreativeCorrectionsContexts{
                        shared.CreativeCorrectionsContexts{
                            AuctionType: []string{
                                "aliquid",
                                "provident",
                                "necessitatibus",
                            },
                            ContextType: sdk.String("sint"),
                            GeoCriteriaID: []int{
                                223081,
                                891555,
                                952749,
                            },
                            Platform: []string{
                                "in",
                                "in",
                                "illum",
                            },
                        },
                        shared.CreativeCorrectionsContexts{
                            AuctionType: []string{
                                "rerum",
                                "dicta",
                                "magnam",
                                "cumque",
                            },
                            ContextType: sdk.String("facere"),
                            GeoCriteriaID: []int{
                                396506,
                                675439,
                            },
                            Platform: []string{
                                "non",
                                "occaecati",
                                "enim",
                                "accusamus",
                            },
                        },
                        shared.CreativeCorrectionsContexts{
                            AuctionType: []string{
                                "quidem",
                                "provident",
                                "nam",
                                "id",
                            },
                            ContextType: sdk.String("blanditiis"),
                            GeoCriteriaID: []int{
                                956084,
                                230533,
                                643990,
                            },
                            Platform: []string{
                                "vel",
                                "natus",
                            },
                        },
                        shared.CreativeCorrectionsContexts{
                            AuctionType: []string{
                                "molestiae",
                                "perferendis",
                                "nihil",
                            },
                            ContextType: sdk.String("magnam"),
                            GeoCriteriaID: []int{
                                660174,
                                287991,
                                290077,
                            },
                            Platform: []string{
                                "natus",
                                "nobis",
                            },
                        },
                    },
                    Details: []string{
                        "vero",
                        "aspernatur",
                    },
                    Reason: sdk.String("architecto"),
                },
            },
            CreativeStatusIdentityType: sdk.String("magnam"),
            DealsStatus: sdk.String("et"),
            DetectedDomains: []string{
                "ullam",
                "provident",
                "quos",
            },
            FilteringReasons: &shared.CreativeFilteringReasons{
                Date: sdk.String("sint"),
                Reasons: []shared.CreativeFilteringReasonsReasons{
                    shared.CreativeFilteringReasonsReasons{
                        FilteringCount: sdk.String("mollitia"),
                        FilteringStatus: sdk.Int(968962),
                    },
                },
            },
            Height: sdk.Int(652103),
            ImpressionTrackingURL: []string{
                "eum",
                "dolor",
            },
            Kind: sdk.String("necessitatibus"),
            Languages: []string{
                "nemo",
            },
            NativeAd: &shared.CreativeNativeAd{
                Advertiser: sdk.String("quasi"),
                AppIcon: &shared.CreativeNativeAdAppIcon{
                    Height: sdk.Int(435865),
                    URL: sdk.String("doloribus"),
                    Width: sdk.Int(891924),
                },
                Body: sdk.String("eius"),
                CallToAction: sdk.String("maxime"),
                ClickLinkURL: sdk.String("deleniti"),
                ClickTrackingURL: sdk.String("facilis"),
                Headline: sdk.String("in"),
                Image: &shared.CreativeNativeAdImage{
                    Height: sdk.Int(100226),
                    URL: sdk.String("architecto"),
                    Width: sdk.Int(919483),
                },
                ImpressionTrackingURL: []string{
                    "expedita",
                    "nihil",
                },
                Logo: &shared.CreativeNativeAdLogo{
                    Height: sdk.Int(998848),
                    URL: sdk.String("quibusdam"),
                    Width: sdk.Int(149448),
                },
                Price: sdk.String("saepe"),
                StarRating: sdk.Float64(8681.26),
                VideoURL: sdk.String("accusantium"),
            },
            OpenAuctionStatus: sdk.String("consequuntur"),
            ProductCategories: []int{
                615560,
                166847,
                123820,
            },
            RestrictedCategories: []int{
                848009,
                864934,
                807319,
                411397,
            },
            SensitiveCategories: []int{
                139972,
                407183,
                33222,
            },
            ServingRestrictions: []shared.CreativeServingRestrictions{
                shared.CreativeServingRestrictions{
                    Contexts: []shared.CreativeServingRestrictionsContexts{
                        shared.CreativeServingRestrictionsContexts{
                            AuctionType: []string{
                                "ipsam",
                                "voluptate",
                                "autem",
                            },
                            ContextType: sdk.String("nam"),
                            GeoCriteriaID: []int{
                                866383,
                            },
                            Platform: []string{
                                "voluptatibus",
                                "perferendis",
                            },
                        },
                        shared.CreativeServingRestrictionsContexts{
                            AuctionType: []string{
                                "amet",
                                "aut",
                                "cumque",
                                "corporis",
                            },
                            ContextType: sdk.String("hic"),
                            GeoCriteriaID: []int{
                                749999,
                                171629,
                                339404,
                            },
                            Platform: []string{
                                "dignissimos",
                                "eaque",
                                "quis",
                            },
                        },
                        shared.CreativeServingRestrictionsContexts{
                            AuctionType: []string{
                                "eos",
                            },
                            ContextType: sdk.String("perferendis"),
                            GeoCriteriaID: []int{
                                793698,
                            },
                            Platform: []string{
                                "dolor",
                                "vero",
                            },
                        },
                        shared.CreativeServingRestrictionsContexts{
                            AuctionType: []string{
                                "hic",
                                "recusandae",
                            },
                            ContextType: sdk.String("omnis"),
                            GeoCriteriaID: []int{
                                596656,
                                31838,
                                783645,
                            },
                            Platform: []string{
                                "blanditiis",
                            },
                        },
                    },
                    DisapprovalReasons: []shared.CreativeServingRestrictionsDisapprovalReasons{
                        shared.CreativeServingRestrictionsDisapprovalReasons{
                            Details: []string{
                                "occaecati",
                            },
                            Reason: sdk.String("rerum"),
                        },
                        shared.CreativeServingRestrictionsDisapprovalReasons{
                            Details: []string{
                                "asperiores",
                            },
                            Reason: sdk.String("earum"),
                        },
                        shared.CreativeServingRestrictionsDisapprovalReasons{
                            Details: []string{
                                "iste",
                                "dolorum",
                            },
                            Reason: sdk.String("deleniti"),
                        },
                    },
                    Reason: sdk.String("pariatur"),
                },
            },
            VendorType: []int{
                750844,
                730122,
                964490,
            },
            Version: sdk.Int(311945),
            VideoURL: sdk.String("quos"),
            VideoVastXML: sdk.String("aliquid"),
            Width: sdk.Int(212390),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UserIP: sdk.String("hic"),
    }, operations.AdexchangebuyerCreativesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Creative != nil {
        // handle response
    }
}
```

## AdexchangebuyerCreativesList

Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.

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
    res, err := s.Creatives.AdexchangebuyerCreativesList(ctx, operations.AdexchangebuyerCreativesListRequest{
        AccountID: []int64{
            739551,
            452109,
            490459,
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        BuyerCreativeID: []string{
            "amet",
            "dolorum",
            "numquam",
            "veritatis",
        },
        DealsStatusFilter: operations.AdexchangebuyerCreativesListDealsStatusFilterEnumApproved.ToPointer(),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("iure"),
        MaxResults: sdk.Int64(487838),
        OauthToken: sdk.String("quaerat"),
        OpenAuctionStatusFilter: operations.AdexchangebuyerCreativesListOpenAuctionStatusFilterEnumNotChecked.ToPointer(),
        PageToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UserIP: sdk.String("voluptas"),
    }, operations.AdexchangebuyerCreativesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativesList != nil {
        // handle response
    }
}
```

## AdexchangebuyerCreativesListDeals

Lists the external deal ids associated with the creative.

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
    res, err := s.Creatives.AdexchangebuyerCreativesListDeals(ctx, operations.AdexchangebuyerCreativesListDealsRequest{
        AccountID: 617658,
        Alt: shared.AltEnumJSON.ToPointer(),
        BuyerCreativeID: "eos",
        Fields: sdk.String("atque"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UserIP: sdk.String("soluta"),
    }, operations.AdexchangebuyerCreativesListDealsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeDealIds != nil {
        // handle response
    }
}
```

## AdexchangebuyerCreativesRemoveDeal

Remove a deal id associated with the creative.

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
    res, err := s.Creatives.AdexchangebuyerCreativesRemoveDeal(ctx, operations.AdexchangebuyerCreativesRemoveDealRequest{
        AccountID: 679393,
        Alt: shared.AltEnumJSON.ToPointer(),
        BuyerCreativeID: "iusto",
        DealID: "voluptate",
        Fields: sdk.String("dolorum"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UserIP: sdk.String("distinctio"),
    }, operations.AdexchangebuyerCreativesRemoveDealSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
