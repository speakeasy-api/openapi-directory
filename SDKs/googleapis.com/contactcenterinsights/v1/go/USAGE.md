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

    req := operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest{
        Security: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateQueryParams{
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
        Request: &shared.GoogleCloudContactcenterinsightsV1AnalysisInput{
            AnalysisResult: &shared.GoogleCloudContactcenterinsightsV1AnalysisResult{
                CallAnalysisMetadata: &shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata{
                    Annotations: []shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 437587,
                                WordIndex: 297534,
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 891773,
                                WordIndex: 56713,
                            },
                            ChannelTag: 963663,
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: "tempora",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 3834.41,
                                    Score: 4776.65,
                                },
                                Type: "COMMON",
                            },
                            HoldData: map[string]interface{}{
                                "voluptatum": "iusto",
                                "excepturi": "nisi",
                                "recusandae": "temporibus",
                                "ab": "quis",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "veritatis",
                            },
                            InterruptionData: map[string]interface{}{
                                "perferendis": "ipsam",
                                "repellendus": "sapiente",
                                "quo": "odit",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "at",
                                    Issue: "at",
                                    Score: 9786.19,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "molestiae",
                                PhraseMatcher: "quod",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 8009.11,
                                Score: 4614.79,
                            },
                            SilenceData: map[string]interface{}{
                                "porro": "dolorum",
                                "dicta": "nam",
                                "officia": "occaecati",
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 143353,
                                WordIndex: 537373,
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 944669,
                                WordIndex: 758616,
                            },
                            ChannelTag: 521848,
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: "beatae",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 4146.62,
                                    Score: 4736,
                                },
                                Type: "MENTION_TYPE_UNSPECIFIED",
                            },
                            HoldData: map[string]interface{}{
                                "impedit": "cum",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "esse",
                            },
                            InterruptionData: map[string]interface{}{
                                "excepturi": "aspernatur",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "perferendis",
                                    Issue: "ad",
                                    Score: 6176.36,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "sed",
                                PhraseMatcher: "iste",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 2223.21,
                                Score: 6169.34,
                            },
                            SilenceData: map[string]interface{}{
                                "hic": "saepe",
                                "fuga": "in",
                            },
                        },
                    },
                    Entities: map[string]shared.GoogleCloudContactcenterinsightsV1Entity{
                        "iste": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "iure",
                            Metadata: map[string]string{
                                "quidem": "architecto",
                                "ipsa": "reiciendis",
                                "est": "mollitia",
                                "laborum": "dolores",
                            },
                            Salience: 2103.82,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 3581.52,
                                Score: 1289.26,
                            },
                            Type: "ADDRESS",
                        },
                        "enim": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "omnis",
                            Metadata: map[string]string{
                                "minima": "excepturi",
                                "accusantium": "iure",
                            },
                            Salience: 6342.74,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 9883.74,
                                Score: 9589.5,
                            },
                            Type: "PERSON",
                        },
                    },
                    Intents: map[string]shared.GoogleCloudContactcenterinsightsV1Intent{
                        "dolorem": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "culpa",
                            ID: "consequuntur",
                        },
                        "repellat": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "mollitia",
                            ID: "occaecati",
                        },
                        "numquam": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "commodi",
                            ID: "quam",
                        },
                    },
                    IssueModelResult: &shared.GoogleCloudContactcenterinsightsV1IssueModelResult{
                        IssueModel: "molestiae",
                        Issues: []shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                            shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                DisplayName: "error",
                                Issue: "quia",
                                Score: 3380.07,
                            },
                        },
                    },
                    PhraseMatchers: map[string]shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                        "laborum": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "animi",
                            PhraseMatcher: "enim",
                        },
                    },
                    Sentiments: []shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 778346,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 1965.82,
                                Score: 9495.72,
                            },
                        },
                    },
                },
                EndTime: "ipsam",
            },
            AnnotatorSelector: &shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector{
                IssueModels: []string{
                    "possimus",
                    "aut",
                    "quasi",
                },
                PhraseMatchers: []string{
                    "temporibus",
                    "laborum",
                    "quasi",
                },
                RunEntityAnnotator: false,
                RunIntentAnnotator: false,
                RunInterruptionAnnotator: false,
                RunIssueModelAnnotator: false,
                RunPhraseMatcherAnnotator: false,
                RunSentimentAnnotator: false,
                RunSilenceAnnotator: false,
            },
            Name: "reiciendis",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->