# Projects

### Available Operations

* [RecommenderProjectsLocationsInsightTypesInsightsList](#recommenderprojectslocationsinsighttypesinsightslist) - Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
* [RecommenderProjectsLocationsInsightTypesInsightsMarkAccepted](#recommenderprojectslocationsinsighttypesinsightsmarkaccepted) - Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
* [RecommenderProjectsLocationsRecommendersRecommendationsGet](#recommenderprojectslocationsrecommendersrecommendationsget) - Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
* [RecommenderProjectsLocationsRecommendersRecommendationsList](#recommenderprojectslocationsrecommendersrecommendationslist) - Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
* [RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimed](#recommenderprojectslocationsrecommendersrecommendationsmarkclaimed) - Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
* [RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissed](#recommenderprojectslocationsrecommendersrecommendationsmarkdismissed) - Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
* [RecommenderProjectsLocationsRecommendersRecommendationsMarkFailed](#recommenderprojectslocationsrecommendersrecommendationsmarkfailed) - Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
* [RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded](#recommenderprojectslocationsrecommendersrecommendationsmarksucceeded) - Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
* [RecommenderProjectsLocationsRecommendersUpdateConfig](#recommenderprojectslocationsrecommendersupdateconfig) - Updates a Recommender Config. This will create a new revision of the config.

## RecommenderProjectsLocationsInsightTypesInsightsList

Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.

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
    res, err := s.Projects.RecommenderProjectsLocationsInsightTypesInsightsList(ctx, operations.RecommenderProjectsLocationsInsightTypesInsightsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Filter: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("placeat"),
        PageSize: sdk.Int64(528895),
        PageToken: sdk.String("iusto"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.RecommenderProjectsLocationsInsightTypesInsightsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommenderV1ListInsightsResponse != nil {
        // handle response
    }
}
```

## RecommenderProjectsLocationsInsightTypesInsightsMarkAccepted

Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.

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
    res, err := s.Projects.RecommenderProjectsLocationsInsightTypesInsightsMarkAccepted(ctx, operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRecommenderV1MarkInsightAcceptedRequest: &shared.GoogleCloudRecommenderV1MarkInsightAcceptedRequest{
            Etag: sdk.String("quis"),
            StateMetadata: map[string]string{
                "deserunt": "perferendis",
            },
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("quo"),
        Key: sdk.String("odit"),
        Name: "Wilfred Wolff",
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("porro"),
    }, operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommenderV1Insight != nil {
        // handle response
    }
}
```

## RecommenderProjectsLocationsRecommendersRecommendationsGet

Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.

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
    res, err := s.Projects.RecommenderProjectsLocationsRecommendersRecommendationsGet(ctx, operations.RecommenderProjectsLocationsRecommendersRecommendationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("fugit"),
        Name: "Irvin Rosenbaum III",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.RecommenderProjectsLocationsRecommendersRecommendationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommenderV1Recommendation != nil {
        // handle response
    }
}
```

## RecommenderProjectsLocationsRecommendersRecommendationsList

Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.

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
    res, err := s.Projects.RecommenderProjectsLocationsRecommendersRecommendationsList(ctx, operations.RecommenderProjectsLocationsRecommendersRecommendationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("aspernatur"),
        Filter: sdk.String("perferendis"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(149675),
        PageToken: sdk.String("iste"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
    }, operations.RecommenderProjectsLocationsRecommendersRecommendationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommenderV1ListRecommendationsResponse != nil {
        // handle response
    }
}
```

## RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimed

Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

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
    res, err := s.Projects.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimed(ctx, operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRecommenderV1MarkRecommendationClaimedRequest: &shared.GoogleCloudRecommenderV1MarkRecommendationClaimedRequest{
            Etag: sdk.String("fuga"),
            StateMetadata: map[string]string{
                "corporis": "iste",
                "iure": "saepe",
            },
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("est"),
        Name: "Cameron Dach",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommenderV1Recommendation != nil {
        // handle response
    }
}
```

## RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissed

Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

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
    res, err := s.Projects.RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissed(ctx, operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissedRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRecommenderV1MarkRecommendationDismissedRequest: &shared.GoogleCloudRecommenderV1MarkRecommendationDismissedRequest{
            Etag: sdk.String("minima"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("doloribus"),
        Name: "Juan O'Hara",
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissedSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommenderV1Recommendation != nil {
        // handle response
    }
}
```

## RecommenderProjectsLocationsRecommendersRecommendationsMarkFailed

Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

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
    res, err := s.Projects.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailed(ctx, operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRecommenderV1MarkRecommendationFailedRequest: &shared.GoogleCloudRecommenderV1MarkRecommendationFailedRequest{
            Etag: sdk.String("commodi"),
            StateMetadata: map[string]string{
                "molestiae": "velit",
                "error": "quia",
            },
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("animi"),
        Key: sdk.String("enim"),
        Name: "Angelica Dietrich",
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("possimus"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommenderV1Recommendation != nil {
        // handle response
    }
}
```

## RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded

Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

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
    res, err := s.Projects.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded(ctx, operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRecommenderV1MarkRecommendationSucceededRequest: &shared.GoogleCloudRecommenderV1MarkRecommendationSucceededRequest{
            Etag: sdk.String("temporibus"),
            StateMetadata: map[string]string{
                "quasi": "reiciendis",
                "voluptatibus": "vero",
                "nihil": "praesentium",
            },
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("cum"),
        Name: "Sharon Kiehn",
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommenderV1Recommendation != nil {
        // handle response
    }
}
```

## RecommenderProjectsLocationsRecommendersUpdateConfig

Updates a Recommender Config. This will create a new revision of the config.

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
    res, err := s.Projects.RecommenderProjectsLocationsRecommendersUpdateConfig(ctx, operations.RecommenderProjectsLocationsRecommendersUpdateConfigRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRecommenderV1RecommenderConfigInput: &shared.GoogleCloudRecommenderV1RecommenderConfigInput{
            Annotations: map[string]string{
                "enim": "accusamus",
                "commodi": "repudiandae",
                "quae": "ipsum",
            },
            DisplayName: sdk.String("quidem"),
            Etag: sdk.String("molestias"),
            Name: sdk.String("Ervin Gleason"),
            RecommenderGenerationConfig: &shared.GoogleCloudRecommenderV1RecommenderGenerationConfig{
                Params: map[string]interface{}{
                    "quasi": "repudiandae",
                    "sint": "veritatis",
                    "itaque": "incidunt",
                    "enim": "consequatur",
                },
            },
            UpdateTime: sdk.String("est"),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        Name: "Pauline Deckow",
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UpdateMask: sdk.String("magni"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("ipsam"),
        ValidateOnly: sdk.Bool(false),
    }, operations.RecommenderProjectsLocationsRecommendersUpdateConfigSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommenderV1RecommenderConfig != nil {
        // handle response
    }
}
```
