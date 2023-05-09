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
        AccountID: 944669,
        Alt: shared.AltEnumJSON.ToPointer(),
        BuyerCreativeID: "optio",
        Fields: sdk.String("totam"),
        Key: sdk.String("beatae"),
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UserIP: sdk.String("modi"),
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
            HTMLSnippet: sdk.String("qui"),
            AccountID: sdk.Int(774234),
            AdvertiserID: []string{
                "esse",
                "ipsum",
                "excepturi",
            },
            AdvertiserName: sdk.String("aspernatur"),
            AgencyID: sdk.String("perferendis"),
            APIUploadTimestamp: types.MustTimeFromString("2022-05-20T13:30:46.463Z"),
            Attribute: []int{
                612096,
            },
            BuyerCreativeID: sdk.String("dolor"),
            ClickThroughURL: []string{
                "laboriosam",
                "hic",
                "saepe",
            },
            Corrections: []shared.CreativeCorrections{
                shared.CreativeCorrections{
                    Details: []string{
                        "corporis",
                        "iste",
                    },
                    Reason: sdk.String("iure"),
                },
                shared.CreativeCorrections{
                    Details: []string{
                        "quidem",
                        "architecto",
                        "ipsa",
                        "reiciendis",
                    },
                    Reason: sdk.String("est"),
                },
                shared.CreativeCorrections{
                    Details: []string{
                        "laborum",
                        "dolores",
                        "dolorem",
                    },
                    Reason: sdk.String("corporis"),
                },
            },
            DisapprovalReasons: []shared.CreativeDisapprovalReasons{
                shared.CreativeDisapprovalReasons{
                    Details: []string{
                        "enim",
                        "omnis",
                        "nemo",
                        "minima",
                    },
                    Reason: sdk.String("excepturi"),
                },
            },
            FilteringReasons: &shared.CreativeFilteringReasons{
                Date: sdk.String("accusantium"),
                Reasons: []shared.CreativeFilteringReasonsReasons{
                    shared.CreativeFilteringReasonsReasons{
                        FilteringCount: sdk.String("culpa"),
                        FilteringStatus: sdk.Int(988374),
                    },
                    shared.CreativeFilteringReasonsReasons{
                        FilteringCount: sdk.String("sapiente"),
                        FilteringStatus: sdk.Int(102044),
                    },
                },
            },
            Height: sdk.Int(652790),
            ImpressionTrackingURL: []string{
                "culpa",
            },
            Kind: sdk.String("consequuntur"),
            ProductCategories: []int{
                653108,
                581850,
                253291,
                414369,
            },
            RestrictedCategories: []int{
                474697,
                244425,
            },
            SensitiveCategories: []int{
                158969,
                338007,
                110375,
            },
            Status: sdk.String("laborum"),
            VendorType: []int{
                317202,
                138183,
                778346,
            },
            Version: sdk.Int(196582),
            VideoURL: sdk.String("tenetur"),
            Width: sdk.Int(368725),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("id"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UserIP: sdk.String("error"),
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
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("laborum"),
        MaxResults: sdk.Int64(96098),
        OauthToken: sdk.String("reiciendis"),
        PageToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        StatusFilter: operations.AdexchangebuyerCreativesListStatusFilterEnumDisapproved.ToPointer(),
        UserIP: sdk.String("praesentium"),
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
