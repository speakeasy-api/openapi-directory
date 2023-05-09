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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreate(ctx, operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudContactcenterinsightsV1AnalysisInput: &shared.GoogleCloudContactcenterinsightsV1AnalysisInput{
            AnalysisResult: &shared.GoogleCloudContactcenterinsightsV1AnalysisResult{
                CallAnalysisMetadata: &shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata{
                    Annotations: []shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: sdk.Int(715190),
                                WordIndex: sdk.Int(844266),
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: sdk.Int(602763),
                                WordIndex: sdk.Int(857946),
                            },
                            ChannelTag: sdk.Int(544883),
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: sdk.String("illum"),
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(4236.55),
                                    Score: sdk.Float32(6235.64),
                                },
                                Type: shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumProper.ToPointer(),
                            },
                            HoldData: map[string]interface{}{
                                "iure": "magnam",
                                "debitis": "ipsa",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: sdk.String("delectus"),
                            },
                            InterruptionData: map[string]interface{}{
                                "suscipit": "molestiae",
                                "minus": "placeat",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: sdk.String("voluptatum"),
                                    Issue: sdk.String("iusto"),
                                    Score: sdk.Float64(5680.45),
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: sdk.String("nisi"),
                                PhraseMatcher: sdk.String("recusandae"),
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(8360.79),
                                Score: sdk.Float32(710.36),
                            },
                            SilenceData: map[string]interface{}{
                                "veritatis": "deserunt",
                                "perferendis": "ipsam",
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: sdk.Int(832620),
                                WordIndex: sdk.Int(957156),
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: sdk.Int(778157),
                                WordIndex: sdk.Int(140350),
                            },
                            ChannelTag: sdk.Int(870013),
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: sdk.String("at"),
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(9786.19),
                                    Score: sdk.Float32(4736.08),
                                },
                                Type: shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumCommon.ToPointer(),
                            },
                            HoldData: map[string]interface{}{
                                "esse": "totam",
                                "porro": "dolorum",
                                "dicta": "nam",
                                "officia": "occaecati",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: sdk.String("fugit"),
                            },
                            InterruptionData: map[string]interface{}{
                                "hic": "optio",
                                "totam": "beatae",
                                "commodi": "molestiae",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: sdk.String("modi"),
                                    Issue: sdk.String("qui"),
                                    Score: sdk.Float64(7742.34),
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: sdk.String("cum"),
                                PhraseMatcher: sdk.String("esse"),
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(2165.5),
                                Score: sdk.Float32(5684.34),
                            },
                            SilenceData: map[string]interface{}{
                                "perferendis": "ad",
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: sdk.Int(617636),
                                WordIndex: sdk.Int(149675),
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: sdk.Int(612096),
                                WordIndex: sdk.Int(222321),
                            },
                            ChannelTag: sdk.Int(616934),
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: sdk.String("laboriosam"),
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(9437.49),
                                    Score: sdk.Float32(9025.99),
                                },
                                Type: shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumCommon.ToPointer(),
                            },
                            HoldData: map[string]interface{}{
                                "corporis": "iste",
                                "iure": "saepe",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: sdk.String("quidem"),
                            },
                            InterruptionData: map[string]interface{}{
                                "ipsa": "reiciendis",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: sdk.String("est"),
                                    Issue: sdk.String("mollitia"),
                                    Score: sdk.Float64(6706.38),
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: sdk.String("dolores"),
                                PhraseMatcher: sdk.String("dolorem"),
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(3581.52),
                                Score: sdk.Float32(1289.26),
                            },
                            SilenceData: map[string]interface{}{
                                "enim": "omnis",
                                "nemo": "minima",
                                "excepturi": "accusantium",
                                "iure": "culpa",
                            },
                        },
                    },
                    Entities: map[string]shared.GoogleCloudContactcenterinsightsV1Entity{
                        "sapiente": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: sdk.String("architecto"),
                            Metadata: map[string]string{
                                "dolorem": "culpa",
                                "consequuntur": "repellat",
                                "mollitia": "occaecati",
                            },
                            Salience: sdk.Float32(2532.91),
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(4143.69),
                                Score: sdk.Float32(4663.11),
                            },
                            Type: shared.GoogleCloudContactcenterinsightsV1EntityTypeEnumConsumerGood.ToPointer(),
                        },
                        "velit": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: sdk.String("error"),
                            Metadata: map[string]string{
                                "quis": "vitae",
                            },
                            Salience: sdk.Float32(6747.52),
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(6563.3),
                                Score: sdk.Float32(3172.02),
                            },
                            Type: shared.GoogleCloudContactcenterinsightsV1EntityTypeEnumPerson.ToPointer(),
                        },
                        "quo": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: sdk.String("sequi"),
                            Metadata: map[string]string{
                                "ipsam": "id",
                                "possimus": "aut",
                                "quasi": "error",
                                "temporibus": "laborum",
                            },
                            Salience: sdk.Float32(960.98),
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(9719.45),
                                Score: sdk.Float32(9764.6),
                            },
                            Type: shared.GoogleCloudContactcenterinsightsV1EntityTypeEnumNumber.ToPointer(),
                        },
                        "nihil": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: sdk.String("praesentium"),
                            Metadata: map[string]string{
                                "ipsa": "omnis",
                                "voluptate": "cum",
                                "perferendis": "doloremque",
                                "reprehenderit": "ut",
                            },
                            Salience: sdk.Float32(9795.87),
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(1201.96),
                                Score: sdk.Float32(3594.44),
                            },
                            Type: shared.GoogleCloudContactcenterinsightsV1EntityTypeEnumOrganization.ToPointer(),
                        },
                    },
                    Intents: map[string]shared.GoogleCloudContactcenterinsightsV1Intent{
                        "dicta": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: sdk.String("harum"),
                            ID: sdk.String("5e6e13b9-9d48-48e1-a91e-450ad2abd442"),
                        },
                        "aliquid": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: sdk.String("cupiditate"),
                            ID: sdk.String("802d502a-94bb-44f6-bc96-9e9a3efa77df"),
                        },
                    },
                    IssueModelResult: &shared.GoogleCloudContactcenterinsightsV1IssueModelResult{
                        IssueModel: sdk.String("rerum"),
                        Issues: []shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                            shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                DisplayName: sdk.String("magnam"),
                                Issue: sdk.String("cumque"),
                                Score: sdk.Float64(8137.98),
                            },
                        },
                    },
                    PhraseMatchers: map[string]shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                        "aliquid": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: sdk.String("laborum"),
                            PhraseMatcher: sdk.String("accusamus"),
                        },
                        "non": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: sdk.String("occaecati"),
                            PhraseMatcher: sdk.String("enim"),
                        },
                    },
                    Sentiments: []shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: sdk.Int(965417),
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(6925.32),
                                Score: sdk.Float32(5884.65),
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: sdk.Int(725255),
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(6596.69),
                                Score: sdk.Float32(5013.24),
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: sdk.Int(533206),
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(9560.84),
                                Score: sdk.Float32(2305.33),
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: sdk.Int(643990),
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(3948.69),
                                Score: sdk.Float32(4238.55),
                            },
                        },
                    },
                },
                EndTime: sdk.String("natus"),
            },
            AnnotatorSelector: &shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector{
                IssueModels: []string{
                    "molestiae",
                    "perferendis",
                    "nihil",
                },
                PhraseMatchers: []string{
                    "distinctio",
                    "id",
                },
                RunEntityAnnotator: sdk.Bool(false),
                RunIntentAnnotator: sdk.Bool(false),
                RunInterruptionAnnotator: sdk.Bool(false),
                RunIssueModelAnnotator: sdk.Bool(false),
                RunPhraseMatcherAnnotator: sdk.Bool(false),
                RunSentimentAnnotator: sdk.Bool(false),
                RunSilenceAnnotator: sdk.Bool(false),
                RunSummarizationAnnotator: sdk.Bool(false),
                SummarizationConfig: &shared.GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig{
                    ConversationProfile: sdk.String("labore"),
                    SummarizationModel: shared.GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnumSummarizationModelUnspecified.ToPointer(),
                },
            },
            Name: sdk.String("Ada Rohan"),
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("et"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("ullam"),
        Parent: "provident",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->