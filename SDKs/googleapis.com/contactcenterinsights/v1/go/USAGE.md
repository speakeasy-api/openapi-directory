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
        DollarXgafv: "2",
        GoogleCloudContactcenterinsightsV1AnalysisInput: &shared.GoogleCloudContactcenterinsightsV1AnalysisInput{
            AnalysisResult: &shared.GoogleCloudContactcenterinsightsV1AnalysisResult{
                CallAnalysisMetadata: &shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata{
                    Annotations: []shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 715190,
                                WordIndex: 844266,
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 602763,
                                WordIndex: 857946,
                            },
                            ChannelTag: 544883,
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: "illum",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 4236.55,
                                    Score: 6235.64,
                                },
                                Type: "PROPER",
                            },
                            HoldData: map[string]interface{}{
                                "iure": "magnam",
                                "debitis": "ipsa",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "delectus",
                            },
                            InterruptionData: map[string]interface{}{
                                "suscipit": "molestiae",
                                "minus": "placeat",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "voluptatum",
                                    Issue: "iusto",
                                    Score: 5680.45,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "nisi",
                                PhraseMatcher: "recusandae",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 8360.79,
                                Score: 710.36,
                            },
                            SilenceData: map[string]interface{}{
                                "veritatis": "deserunt",
                                "perferendis": "ipsam",
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 832620,
                                WordIndex: 957156,
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 778157,
                                WordIndex: 140350,
                            },
                            ChannelTag: 870013,
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: "at",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 9786.19,
                                    Score: 4736.08,
                                },
                                Type: "COMMON",
                            },
                            HoldData: map[string]interface{}{
                                "esse": "totam",
                                "porro": "dolorum",
                                "dicta": "nam",
                                "officia": "occaecati",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "fugit",
                            },
                            InterruptionData: map[string]interface{}{
                                "hic": "optio",
                                "totam": "beatae",
                                "commodi": "molestiae",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "modi",
                                    Issue: "qui",
                                    Score: 7742.34,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "cum",
                                PhraseMatcher: "esse",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 2165.5,
                                Score: 5684.34,
                            },
                            SilenceData: map[string]interface{}{
                                "perferendis": "ad",
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 617636,
                                WordIndex: 149675,
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 612096,
                                WordIndex: 222321,
                            },
                            ChannelTag: 616934,
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: "laboriosam",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 9437.49,
                                    Score: 9025.99,
                                },
                                Type: "COMMON",
                            },
                            HoldData: map[string]interface{}{
                                "corporis": "iste",
                                "iure": "saepe",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "quidem",
                            },
                            InterruptionData: map[string]interface{}{
                                "ipsa": "reiciendis",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "est",
                                    Issue: "mollitia",
                                    Score: 6706.38,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "dolores",
                                PhraseMatcher: "dolorem",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 3581.52,
                                Score: 1289.26,
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
                            DisplayName: "architecto",
                            Metadata: map[string]string{
                                "dolorem": "culpa",
                                "consequuntur": "repellat",
                                "mollitia": "occaecati",
                            },
                            Salience: 2532.91,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 4143.69,
                                Score: 4663.11,
                            },
                            Type: "CONSUMER_GOOD",
                        },
                        "velit": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "error",
                            Metadata: map[string]string{
                                "quis": "vitae",
                            },
                            Salience: 6747.52,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 6563.3,
                                Score: 3172.02,
                            },
                            Type: "PERSON",
                        },
                        "quo": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "sequi",
                            Metadata: map[string]string{
                                "ipsam": "id",
                                "possimus": "aut",
                                "quasi": "error",
                                "temporibus": "laborum",
                            },
                            Salience: 960.98,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 9719.45,
                                Score: 9764.6,
                            },
                            Type: "NUMBER",
                        },
                        "nihil": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "praesentium",
                            Metadata: map[string]string{
                                "ipsa": "omnis",
                                "voluptate": "cum",
                                "perferendis": "doloremque",
                                "reprehenderit": "ut",
                            },
                            Salience: 9795.87,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 1201.96,
                                Score: 3594.44,
                            },
                            Type: "ORGANIZATION",
                        },
                    },
                    Intents: map[string]shared.GoogleCloudContactcenterinsightsV1Intent{
                        "dicta": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "harum",
                            ID: "enim",
                        },
                        "accusamus": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "commodi",
                            ID: "repudiandae",
                        },
                    },
                    IssueModelResult: &shared.GoogleCloudContactcenterinsightsV1IssueModelResult{
                        IssueModel: "quae",
                        Issues: []shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                            shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                DisplayName: "quidem",
                                Issue: "molestias",
                                Score: 5666.02,
                            },
                        },
                    },
                    PhraseMatchers: map[string]shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                        "modi": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "praesentium",
                            PhraseMatcher: "rem",
                        },
                        "voluptates": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "quasi",
                            PhraseMatcher: "repudiandae",
                        },
                        "sint": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "veritatis",
                            PhraseMatcher: "itaque",
                        },
                        "incidunt": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "enim",
                            PhraseMatcher: "consequatur",
                        },
                    },
                    Sentiments: []shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 842342,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 1317.97,
                                Score: 6471.74,
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 716327,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 8413.86,
                                Score: 2894.06,
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 264730,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 1831.91,
                                Score: 3978.21,
                            },
                        },
                    },
                },
                EndTime: "cupiditate",
            },
            AnnotatorSelector: &shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector{
                IssueModels: []string{
                    "perferendis",
                    "magni",
                    "assumenda",
                },
                PhraseMatchers: []string{
                    "alias",
                    "fugit",
                },
                RunEntityAnnotator: false,
                RunIntentAnnotator: false,
                RunInterruptionAnnotator: false,
                RunIssueModelAnnotator: false,
                RunPhraseMatcherAnnotator: false,
                RunSentimentAnnotator: false,
                RunSilenceAnnotator: false,
            },
            Name: "dolorum",
        },
        AccessToken: "excepturi",
        Alt: "json",
        Callback: "facilis",
        Fields: "tempore",
        Key: "labore",
        OauthToken: "delectus",
        Parent: "eum",
        PrettyPrint: false,
        QuotaUser: "non",
        UploadType: "eligendi",
        UploadProtocol: "sint",
    }

    ctx := context.Background()
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreate(ctx, req, operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity{
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