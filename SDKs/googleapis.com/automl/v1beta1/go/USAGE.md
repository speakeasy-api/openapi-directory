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
        DollarXgafv: "2",
        Dataset: &shared.Dataset{
            CreateTime: "provident",
            Description: "distinctio",
            DisplayName: "quibusdam",
            Etag: "unde",
            ExampleCount: 857946,
            ImageClassificationDatasetMetadata: &shared.ImageClassificationDatasetMetadata{
                ClassificationType: "MULTICLASS",
            },
            ImageObjectDetectionDatasetMetadata: map[string]interface{}{
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Name: "delectus",
            TablesDatasetMetadata: &shared.TablesDatasetMetadata{
                MlUseColumnSpecID: "tempora",
                PrimaryTableSpecID: "suscipit",
                StatsUpdateTime: "molestiae",
                TargetColumnCorrelations: map[string]shared.CorrelationStats{
                    "placeat": shared.CorrelationStats{
                        CramersV: 5288.95,
                    },
                    "iusto": shared.CorrelationStats{
                        CramersV: 5680.45,
                    },
                    "nisi": shared.CorrelationStats{
                        CramersV: 9255.97,
                    },
                    "temporibus": shared.CorrelationStats{
                        CramersV: 710.36,
                    },
                },
                TargetColumnSpecID: "quis",
                WeightColumnSpecID: "veritatis",
            },
            TextClassificationDatasetMetadata: &shared.TextClassificationDatasetMetadata{
                ClassificationType: "MULTICLASS",
            },
            TextExtractionDatasetMetadata: map[string]interface{}{
                "ipsam": "repellendus",
            },
            TextSentimentDatasetMetadata: &shared.TextSentimentDatasetMetadata{
                SentimentMax: 957156,
            },
            TranslationDatasetMetadata: &shared.TranslationDatasetMetadata{
                SourceLanguageCode: "quo",
                TargetLanguageCode: "odit",
            },
            VideoClassificationDatasetMetadata: map[string]interface{}{
                "at": "maiores",
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
            },
            VideoObjectTrackingDatasetMetadata: map[string]interface{}{
                "dicta": "nam",
                "officia": "occaecati",
                "fugit": "deleniti",
            },
        },
        AccessToken: "hic",
        Alt: "proto",
        Callback: "totam",
        Fields: "beatae",
        Key: "commodi",
        OauthToken: "molestiae",
        Parent: "modi",
        PrettyPrint: false,
        QuotaUser: "qui",
        UploadType: "impedit",
        UploadProtocol: "cum",
    }

    ctx := context.Background()
    res, err := s.Projects.AutomlProjectsLocationsDatasetsCreate(ctx, req, operations.AutomlProjectsLocationsDatasetsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Dataset != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->