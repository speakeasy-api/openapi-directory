# Pages

### Available Operations

* [FactchecktoolsPagesCreate](#factchecktoolspagescreate) - Create `ClaimReview` markup on a page.
* [FactchecktoolsPagesDelete](#factchecktoolspagesdelete) - Delete all `ClaimReview` markup on a page.
* [FactchecktoolsPagesGet](#factchecktoolspagesget) - Get all `ClaimReview` markup on a page.
* [FactchecktoolsPagesList](#factchecktoolspageslist) - List the `ClaimReview` markup pages for a specific URL or for an organization.
* [FactchecktoolsPagesUpdate](#factchecktoolspagesupdate) - Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.

## FactchecktoolsPagesCreate

Create `ClaimReview` markup on a page.

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
    res, err := s.Pages.FactchecktoolsPagesCreate(ctx, operations.FactchecktoolsPagesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage{
            ClaimReviewAuthor: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor{
                ImageURL: sdk.String("sapiente"),
                Name: sdk.String("Fred Strosin"),
            },
            ClaimReviewMarkups: []shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup{
                shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup{
                    ClaimAppearances: []string{
                        "quod",
                        "esse",
                        "totam",
                        "porro",
                    },
                    ClaimAuthor: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor{
                        ImageURL: sdk.String("dolorum"),
                        JobTitle: sdk.String("Direct Assurance Orchestrator"),
                        Name: sdk.String("Wayne Lind"),
                        SameAs: sdk.String("totam"),
                    },
                    ClaimDate: sdk.String("beatae"),
                    ClaimFirstAppearance: sdk.String("commodi"),
                    ClaimLocation: sdk.String("molestiae"),
                    ClaimReviewed: sdk.String("modi"),
                    Rating: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating{
                        BestRating: sdk.Int(186332),
                        ImageURL: sdk.String("impedit"),
                        RatingExplanation: sdk.String("cum"),
                        RatingValue: sdk.Int(456150),
                        TextualRating: sdk.String("ipsum"),
                        WorstRating: sdk.Int(568434),
                    },
                    URL: sdk.String("aspernatur"),
                },
                shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup{
                    ClaimAppearances: []string{
                        "ad",
                    },
                    ClaimAuthor: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor{
                        ImageURL: sdk.String("natus"),
                        JobTitle: sdk.String("Corporate Communications Manager"),
                        Name: sdk.String("Lester Welch"),
                        SameAs: sdk.String("in"),
                    },
                    ClaimDate: sdk.String("corporis"),
                    ClaimFirstAppearance: sdk.String("iste"),
                    ClaimLocation: sdk.String("iure"),
                    ClaimReviewed: sdk.String("saepe"),
                    Rating: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating{
                        BestRating: sdk.Int(697631),
                        ImageURL: sdk.String("architecto"),
                        RatingExplanation: sdk.String("ipsa"),
                        RatingValue: sdk.Int(969810),
                        TextualRating: sdk.String("est"),
                        WorstRating: sdk.Int(653140),
                    },
                    URL: sdk.String("laborum"),
                },
            },
            Name: sdk.String("Connie Herzog"),
            PageURL: sdk.String("enim"),
            PublishDate: sdk.String("omnis"),
            VersionID: sdk.String("nemo"),
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("iure"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.FactchecktoolsPagesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage != nil {
        // handle response
    }
}
```

## FactchecktoolsPagesDelete

Delete all `ClaimReview` markup on a page.

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
    res, err := s.Pages.FactchecktoolsPagesDelete(ctx, operations.FactchecktoolsPagesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("occaecati"),
        Name: "Lucy Konopelski",
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("vitae"),
    }, operations.FactchecktoolsPagesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## FactchecktoolsPagesGet

Get all `ClaimReview` markup on a page.

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
    res, err := s.Pages.FactchecktoolsPagesGet(ctx, operations.FactchecktoolsPagesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("quo"),
        Key: sdk.String("sequi"),
        Name: "Vernon Ondricka Sr.",
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.FactchecktoolsPagesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage != nil {
        // handle response
    }
}
```

## FactchecktoolsPagesList

List the `ClaimReview` markup pages for a specific URL or for an organization.

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
    res, err := s.Pages.FactchecktoolsPagesList(ctx, operations.FactchecktoolsPagesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("ipsa"),
        Offset: sdk.Int64(604846),
        Organization: sdk.String("voluptate"),
        PageSize: sdk.Int64(739264),
        PageToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloremque"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("ut"),
        URL: sdk.String("maiores"),
    }, operations.FactchecktoolsPagesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse != nil {
        // handle response
    }
}
```

## FactchecktoolsPagesUpdate

Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.

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
    res, err := s.Pages.FactchecktoolsPagesUpdate(ctx, operations.FactchecktoolsPagesUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage{
            ClaimReviewAuthor: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor{
                ImageURL: sdk.String("corporis"),
                Name: sdk.String("Heidi Carter"),
            },
            ClaimReviewMarkups: []shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup{
                shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup{
                    ClaimAppearances: []string{
                        "repudiandae",
                        "quae",
                    },
                    ClaimAuthor: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor{
                        ImageURL: sdk.String("ipsum"),
                        JobTitle: sdk.String("International Infrastructure Planner"),
                        Name: sdk.String("Joel Lang"),
                        SameAs: sdk.String("quasi"),
                    },
                    ClaimDate: sdk.String("repudiandae"),
                    ClaimFirstAppearance: sdk.String("sint"),
                    ClaimLocation: sdk.String("veritatis"),
                    ClaimReviewed: sdk.String("itaque"),
                    Rating: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating{
                        BestRating: sdk.Int(277718),
                        ImageURL: sdk.String("enim"),
                        RatingExplanation: sdk.String("consequatur"),
                        RatingValue: sdk.Int(667411),
                        TextualRating: sdk.String("quibusdam"),
                        WorstRating: sdk.Int(131797),
                    },
                    URL: sdk.String("deserunt"),
                },
                shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup{
                    ClaimAppearances: []string{
                        "quibusdam",
                        "labore",
                        "modi",
                    },
                    ClaimAuthor: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor{
                        ImageURL: sdk.String("qui"),
                        JobTitle: sdk.String("Regional Intranet Designer"),
                        Name: sdk.String("Louise Simonis Sr."),
                        SameAs: sdk.String("dolorum"),
                    },
                    ClaimDate: sdk.String("excepturi"),
                    ClaimFirstAppearance: sdk.String("tempora"),
                    ClaimLocation: sdk.String("facilis"),
                    ClaimReviewed: sdk.String("tempore"),
                    Rating: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating{
                        BestRating: sdk.Int(288476),
                        ImageURL: sdk.String("delectus"),
                        RatingExplanation: sdk.String("eum"),
                        RatingValue: sdk.Int(248753),
                        TextualRating: sdk.String("eligendi"),
                        WorstRating: sdk.Int(576157),
                    },
                    URL: sdk.String("aliquid"),
                },
                shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup{
                    ClaimAppearances: []string{
                        "necessitatibus",
                        "sint",
                        "officia",
                    },
                    ClaimAuthor: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor{
                        ImageURL: sdk.String("dolor"),
                        JobTitle: sdk.String("Human Usability Developer"),
                        Name: sdk.String("Arlene Stamm"),
                        SameAs: sdk.String("dicta"),
                    },
                    ClaimDate: sdk.String("magnam"),
                    ClaimFirstAppearance: sdk.String("cumque"),
                    ClaimLocation: sdk.String("facere"),
                    ClaimReviewed: sdk.String("ea"),
                    Rating: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating{
                        BestRating: sdk.Int(396506),
                        ImageURL: sdk.String("laborum"),
                        RatingExplanation: sdk.String("accusamus"),
                        RatingValue: sdk.Int(249796),
                        TextualRating: sdk.String("occaecati"),
                        WorstRating: sdk.Int(313218),
                    },
                    URL: sdk.String("accusamus"),
                },
                shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup{
                    ClaimAppearances: []string{
                        "quidem",
                        "provident",
                        "nam",
                        "id",
                    },
                    ClaimAuthor: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor{
                        ImageURL: sdk.String("blanditiis"),
                        JobTitle: sdk.String("Global Usability Manager"),
                        Name: sdk.String("Tyler Kassulke"),
                        SameAs: sdk.String("molestiae"),
                    },
                    ClaimDate: sdk.String("perferendis"),
                    ClaimFirstAppearance: sdk.String("nihil"),
                    ClaimLocation: sdk.String("magnam"),
                    ClaimReviewed: sdk.String("distinctio"),
                    Rating: &shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating{
                        BestRating: sdk.Int(660174),
                        ImageURL: sdk.String("labore"),
                        RatingExplanation: sdk.String("labore"),
                        RatingValue: sdk.Int(383462),
                        TextualRating: sdk.String("natus"),
                        WorstRating: sdk.Int(749170),
                    },
                    URL: sdk.String("eum"),
                },
            },
            Name: sdk.String("Brandon Brakus V"),
            PageURL: sdk.String("ullam"),
            PublishDate: sdk.String("provident"),
            VersionID: sdk.String("quos"),
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("mollitia"),
        Name: "Natalie Ernser",
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.FactchecktoolsPagesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage != nil {
        // handle response
    }
}
```
