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
            Parent: "corrupti",
        },
        QueryParams: operations.AutomlProjectsLocationsDatasetsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.Dataset{
            CreateTime: "suscipit",
            Description: "iure",
            DisplayName: "magnam",
            Etag: "debitis",
            ExampleCount: 56713,
            ImageClassificationDatasetMetadata: &shared.ImageClassificationDatasetMetadata{
                ClassificationType: "MULTILABEL",
            },
            ImageObjectDetectionDatasetMetadata: map[string]interface{}{
                "suscipit": "molestiae",
                "minus": "placeat",
            },
            Name: "voluptatum",
            TablesDatasetMetadata: &shared.TablesDatasetMetadata{
                MlUseColumnSpecID: "iusto",
                PrimaryTableSpecID: "excepturi",
                StatsUpdateTime: "nisi",
                TargetColumnCorrelations: map[string]shared.CorrelationStats{
                    "temporibus": shared.CorrelationStats{
                        CramersV: 710.36,
                    },
                    "quis": shared.CorrelationStats{
                        CramersV: 871.29,
                    },
                    "deserunt": shared.CorrelationStats{
                        CramersV: 202.18,
                    },
                    "ipsam": shared.CorrelationStats{
                        CramersV: 8326.2,
                    },
                },
                TargetColumnSpecID: "sapiente",
                WeightColumnSpecID: "quo",
            },
            TextClassificationDatasetMetadata: &shared.TextClassificationDatasetMetadata{
                ClassificationType: "CLASSIFICATION_TYPE_UNSPECIFIED",
            },
            TextExtractionDatasetMetadata: map[string]interface{}{
                "at": "maiores",
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
            },
            TextSentimentDatasetMetadata: &shared.TextSentimentDatasetMetadata{
                SentimentMax: 678880,
            },
            TranslationDatasetMetadata: &shared.TranslationDatasetMetadata{
                SourceLanguageCode: "dicta",
                TargetLanguageCode: "nam",
            },
            VideoClassificationDatasetMetadata: map[string]interface{}{
                "occaecati": "fugit",
                "deleniti": "hic",
                "optio": "totam",
            },
            VideoObjectTrackingDatasetMetadata: map[string]interface{}{
                "commodi": "molestiae",
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