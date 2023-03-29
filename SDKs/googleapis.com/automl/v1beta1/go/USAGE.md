<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AutomlProjectsLocationsDatasetsCreateRequest{
        Security: operations.AutomlProjectsLocationsDatasetsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AutomlProjectsLocationsDatasetsCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.AutomlProjectsLocationsDatasetsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.Dataset{
            CreateTime: "eum",
            Description: "iusto",
            DisplayName: "ullam",
            Etag: "saepe",
            ExampleCount: 56713,
            ImageClassificationDatasetMetadata: &shared.ImageClassificationDatasetMetadata{
                ClassificationType: "MULTILABEL",
            },
            ImageObjectDetectionDatasetMetadata: map[string]interface{}{
                "eum": "voluptatum",
                "autem": "vel",
            },
            Name: "non",
            TablesDatasetMetadata: &shared.TablesDatasetMetadata{
                MlUseColumnSpecID: "deleniti",
                PrimaryTableSpecID: "similique",
                StatsUpdateTime: "reprehenderit",
                TargetColumnCorrelations: map[string]shared.CorrelationStats{
                    "quo": shared.CorrelationStats{
                        CramersV: 710.36,
                    },
                    "laboriosam": shared.CorrelationStats{
                        CramersV: 871.29,
                    },
                    "est": shared.CorrelationStats{
                        CramersV: 202.18,
                    },
                    "consequatur": shared.CorrelationStats{
                        CramersV: 8326.2,
                    },
                },
                TargetColumnSpecID: "a",
                WeightColumnSpecID: "omnis",
            },
            TextClassificationDatasetMetadata: &shared.TextClassificationDatasetMetadata{
                ClassificationType: "CLASSIFICATION_TYPE_UNSPECIFIED",
            },
            TextExtractionDatasetMetadata: map[string]interface{}{
                "accusamus": "reiciendis",
                "rem": "quibusdam",
                "et": "praesentium",
                "occaecati": "dolor",
            },
            TextSentimentDatasetMetadata: &shared.TextSentimentDatasetMetadata{
                SentimentMax: 678880,
            },
            TranslationDatasetMetadata: &shared.TranslationDatasetMetadata{
                SourceLanguageCode: "sed",
                TargetLanguageCode: "quisquam",
            },
            VideoClassificationDatasetMetadata: map[string]interface{}{
                "culpa": "qui",
                "sed": "rerum",
                "possimus": "occaecati",
            },
            VideoObjectTrackingDatasetMetadata: map[string]interface{}{
                "esse": "rem",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.AutomlProjectsLocationsDatasetsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Dataset != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->