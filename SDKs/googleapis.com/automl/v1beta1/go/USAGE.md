<!-- Start SDK Example Usage -->
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
    res, err := s.Projects.AutomlProjectsLocationsDatasetsCreate(ctx, operations.AutomlProjectsLocationsDatasetsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Dataset: &shared.Dataset{
            CreateTime: sdk.String("provident"),
            Description: sdk.String("distinctio"),
            DisplayName: sdk.String("quibusdam"),
            Etag: sdk.String("unde"),
            ExampleCount: sdk.Int(857946),
            ImageClassificationDatasetMetadata: &shared.ImageClassificationDatasetMetadata{
                ClassificationType: shared.ImageClassificationDatasetMetadataClassificationTypeEnumMulticlass.ToPointer(),
            },
            ImageObjectDetectionDatasetMetadata: map[string]interface{}{
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Name: sdk.String("Ricky Hoppe"),
            TablesDatasetMetadata: &shared.TablesDatasetMetadata{
                MlUseColumnSpecID: sdk.String("placeat"),
                PrimaryTableSpecID: sdk.String("voluptatum"),
                StatsUpdateTime: sdk.String("iusto"),
                TargetColumnCorrelations: map[string]shared.CorrelationStats{
                    "nisi": shared.CorrelationStats{
                        CramersV: sdk.Float64(9255.97),
                    },
                    "temporibus": shared.CorrelationStats{
                        CramersV: sdk.Float64(710.36),
                    },
                    "quis": shared.CorrelationStats{
                        CramersV: sdk.Float64(871.29),
                    },
                },
                TargetColumnSpecID: sdk.String("deserunt"),
                WeightColumnSpecID: sdk.String("perferendis"),
            },
            TextClassificationDatasetMetadata: &shared.TextClassificationDatasetMetadata{
                ClassificationType: shared.TextClassificationDatasetMetadataClassificationTypeEnumMulticlass.ToPointer(),
            },
            TextExtractionDatasetMetadata: map[string]interface{}{
                "sapiente": "quo",
                "odit": "at",
                "at": "maiores",
                "molestiae": "quod",
            },
            TextSentimentDatasetMetadata: &shared.TextSentimentDatasetMetadata{
                SentimentMax: sdk.Int(800911),
            },
            TranslationDatasetMetadata: &shared.TranslationDatasetMetadata{
                SourceLanguageCode: sdk.String("esse"),
                TargetLanguageCode: sdk.String("totam"),
            },
            VideoClassificationDatasetMetadata: map[string]interface{}{
                "dolorum": "dicta",
                "nam": "officia",
                "occaecati": "fugit",
                "deleniti": "hic",
            },
            VideoObjectTrackingDatasetMetadata: map[string]interface{}{
                "totam": "beatae",
                "commodi": "molestiae",
                "modi": "qui",
                "impedit": "cum",
            },
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ad"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.AutomlProjectsLocationsDatasetsCreateSecurity{
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