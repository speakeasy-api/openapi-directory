<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "sit",
        },
        QueryParams: operations.AutomlProjectsLocationsDatasetsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.Dataset{
            CreateTime: "dicta",
            Description: "debitis",
            DisplayName: "voluptatum",
            Etag: "et",
            ExampleCount: 7144924247938981575,
            ImageClassificationDatasetMetadata: &shared.ImageClassificationDatasetMetadata{
                ClassificationType: "MULTILABEL",
            },
            ImageObjectDetectionDatasetMetadata: map[string]interface{}{
                "voluptate": "iste",
                "vitae": "totam",
            },
            Name: "dolores",
            TablesDatasetMetadata: &shared.TablesDatasetMetadata{
                MlUseColumnSpecID: "illum",
                PrimaryTableSpecID: "debitis",
                StatsUpdateTime: "vel",
                TargetColumnCorrelations: map[string]shared.CorrelationStats{
                    "dolore": shared.CorrelationStats{
                        CramersV: 12.200000,
                    },
                },
                TargetColumnSpecID: "accusantium",
                WeightColumnSpecID: "totam",
            },
            TextClassificationDatasetMetadata: &shared.TextClassificationDatasetMetadata{
                ClassificationType: "MULTICLASS",
            },
            TextExtractionDatasetMetadata: map[string]interface{}{
                "est": "aut",
                "odit": "non",
                "voluptas": "omnis",
            },
            TextSentimentDatasetMetadata: &shared.TextSentimentDatasetMetadata{
                SentimentMax: 1059542851699319360,
            },
            TranslationDatasetMetadata: &shared.TranslationDatasetMetadata{
                SourceLanguageCode: "illo",
                TargetLanguageCode: "sed",
            },
            VideoClassificationDatasetMetadata: map[string]interface{}{
                "autem": "consectetur",
                "nobis": "odio",
            },
            VideoObjectTrackingDatasetMetadata: map[string]interface{}{
                "recusandae": "at",
            },
        },
    }
    
    res, err := s.Projects.AutomlProjectsLocationsDatasetsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Dataset != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->