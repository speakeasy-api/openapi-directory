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
            Parent: "unde",
        },
        QueryParams: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateQueryParams{
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
                                EntityUniqueID: "enim",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 3834.41,
                                    Score: 4776.65,
                                },
                                Type: "COMMON",
                            },
                            HoldData: map[string]interface{}{
                                "non": "deleniti",
                                "similique": "reprehenderit",
                                "molestiae": "quo",
                                "quasi": "laboriosam",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "dicta",
                            },
                            InterruptionData: map[string]interface{}{
                                "voluptatem": "consequatur",
                                "fugiat": "a",
                                "omnis": "eos",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "accusamus",
                                    Issue: "accusamus",
                                    Score: 9786.19,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "rem",
                                PhraseMatcher: "quibusdam",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 8009.11,
                                Score: 4614.79,
                            },
                            SilenceData: map[string]interface{}{
                                "dolor": "soluta",
                                "sed": "quisquam",
                                "rerum": "culpa",
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
                                EntityUniqueID: "odit",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 4146.62,
                                    Score: 4736,
                                },
                                Type: "MENTION_TYPE_UNSPECIFIED",
                            },
                            HoldData: map[string]interface{}{
                                "est": "id",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "blanditiis",
                            },
                            InterruptionData: map[string]interface{}{
                                "similique": "dolores",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "sit",
                                    Issue: "quia",
                                    Score: 6176.36,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "voluptatem",
                                PhraseMatcher: "laborum",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 2223.21,
                                Score: 6169.34,
                            },
                            SilenceData: map[string]interface{}{
                                "earum": "ut",
                                "soluta": "qui",
                            },
                        },
                    },
                    Entities: map[string]shared.GoogleCloudContactcenterinsightsV1Entity{
                        "laborum": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "iusto",
                            Metadata: map[string]string{
                                "optio": "aspernatur",
                                "inventore": "ut",
                                "libero": "et",
                                "libero": "ipsum",
                            },
                            Salience: 2103.82,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 3581.52,
                                Score: 1289.26,
                            },
                            Type: "ADDRESS",
                        },
                        "ipsam": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "est",
                            Metadata: map[string]string{
                                "quia": "similique",
                                "eaque": "odio",
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
                        "non": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "quidem",
                            ID: "neque",
                        },
                        "asperiores": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "et",
                            ID: "culpa",
                        },
                        "aliquam": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "esse",
                            ID: "totam",
                        },
                    },
                    IssueModelResult: &shared.GoogleCloudContactcenterinsightsV1IssueModelResult{
                        IssueModel: "voluptatum",
                        Issues: []shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                            shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                DisplayName: "fuga",
                                Issue: "nesciunt",
                                Score: 3380.07,
                            },
                        },
                    },
                    PhraseMatchers: map[string]shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                        "cum": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "expedita",
                            PhraseMatcher: "ipsam",
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
                EndTime: "consequatur",
            },
            AnnotatorSelector: &shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector{
                IssueModels: []string{
                    "qui",
                    "perferendis",
                    "aspernatur",
                },
                PhraseMatchers: []string{
                    "quo",
                    "tempore",
                    "explicabo",
                },
                RunEntityAnnotator: false,
                RunIntentAnnotator: false,
                RunInterruptionAnnotator: false,
                RunIssueModelAnnotator: false,
                RunPhraseMatcherAnnotator: false,
                RunSentimentAnnotator: false,
                RunSilenceAnnotator: false,
            },
            Name: "aut",
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