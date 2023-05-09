# Creatives

### Available Operations

* [AdexchangebuyerCreativesGet](#adexchangebuyercreativesget) - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* [AdexchangebuyerCreativesInsert](#adexchangebuyercreativesinsert) - Submit a new creative.
* [AdexchangebuyerCreativesList](#adexchangebuyercreativeslist) - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.

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
        AccountID: 118727,
        Alt: shared.AltEnumJSON.ToPointer(),
        BuyerCreativeID: "harum",
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UserIP: sdk.String("quae"),
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
            HTMLSnippet: sdk.String("ipsum"),
            AccountID: sdk.Int(692472),
            AdTechnologyProviders: &shared.CreativeAdTechnologyProviders{
                DetectedProviderIds: []string{
                    "excepturi",
                    "pariatur",
                    "modi",
                },
                HasUnidentifiedProvider: sdk.Bool(false),
            },
            AdvertiserID: []string{
                "rem",
                "voluptates",
                "quasi",
            },
            AdvertiserName: sdk.String("repudiandae"),
            AgencyID: sdk.String("sint"),
            APIUploadTimestamp: types.MustTimeFromString("2022-01-26T19:21:55.034Z"),
            Attribute: []int{
                318569,
                9356,
            },
            BuyerCreativeID: sdk.String("est"),
            ClickThroughURL: []string{
                "explicabo",
                "deserunt",
                "distinctio",
                "quibusdam",
            },
            Corrections: []shared.CreativeCorrections{
                shared.CreativeCorrections{
                    Details: []string{
                        "qui",
                        "aliquid",
                    },
                    Reason: sdk.String("cupiditate"),
                },
                shared.CreativeCorrections{
                    Details: []string{
                        "perferendis",
                        "magni",
                        "assumenda",
                    },
                    Reason: sdk.String("ipsam"),
                },
            },
            DisapprovalReasons: []shared.CreativeDisapprovalReasons{
                shared.CreativeDisapprovalReasons{
                    Details: []string{
                        "dolorum",
                    },
                    Reason: sdk.String("excepturi"),
                },
            },
            FilteringReasons: &shared.CreativeFilteringReasons{
                Date: sdk.String("tempora"),
                Reasons: []shared.CreativeFilteringReasonsReasons{
                    shared.CreativeFilteringReasonsReasons{
                        FilteringCount: sdk.String("tempore"),
                        FilteringStatus: sdk.Int(288476),
                    },
                    shared.CreativeFilteringReasonsReasons{
                        FilteringCount: sdk.String("delectus"),
                        FilteringStatus: sdk.Int(433288),
                    },
                    shared.CreativeFilteringReasonsReasons{
                        FilteringCount: sdk.String("non"),
                        FilteringStatus: sdk.Int(756107),
                    },
                },
            },
            Height: sdk.Int(576157),
            ImpressionTrackingURL: []string{
                "provident",
                "necessitatibus",
            },
            Kind: sdk.String("sint"),
            NativeAd: &shared.CreativeNativeAd{
                Advertiser: sdk.String("officia"),
                AppIcon: &shared.CreativeNativeAdAppIcon{
                    Height: sdk.Int(223081),
                    URL: sdk.String("debitis"),
                    Width: sdk.Int(952749),
                },
                Body: sdk.String("dolorum"),
                CallToAction: sdk.String("in"),
                ClickTrackingURL: sdk.String("in"),
                Headline: sdk.String("illum"),
                Image: &shared.CreativeNativeAdImage{
                    Height: sdk.Int(978571),
                    URL: sdk.String("rerum"),
                    Width: sdk.Int(116202),
                },
                ImpressionTrackingURL: []string{
                    "cumque",
                    "facere",
                },
                Logo: &shared.CreativeNativeAdLogo{
                    Height: sdk.Int(411820),
                    URL: sdk.String("aliquid"),
                    Width: sdk.Int(675439),
                },
                Price: sdk.String("accusamus"),
                StarRating: sdk.Float64(2497.96),
            },
            ProductCategories: []int{
                313218,
                881736,
                965417,
            },
            RestrictedCategories: []int{
                588465,
                725255,
                659669,
            },
            SensitiveCategories: []int{
                533206,
                956084,
                230533,
            },
            Status: sdk.String("deserunt"),
            VendorType: []int{
                423855,
                618809,
            },
            Version: sdk.Int(606393),
            VideoURL: sdk.String("molestiae"),
            Width: sdk.Int(19193),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("nihil"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UserIP: sdk.String("labore"),
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
            383462,
            618016,
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        BuyerCreativeID: []string{
            "eum",
            "vero",
            "aspernatur",
        },
        Fields: sdk.String("architecto"),
        Key: sdk.String("magnam"),
        MaxResults: sdk.Int64(92373),
        OauthToken: sdk.String("excepturi"),
        PageToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        StatusFilter: operations.AdexchangebuyerCreativesListStatusFilterEnumDisapproved.ToPointer(),
        UserIP: sdk.String("sint"),
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
