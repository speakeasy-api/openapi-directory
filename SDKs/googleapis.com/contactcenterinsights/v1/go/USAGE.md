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
            Parent: "dolores",
        },
        QueryParams: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "sed",
            Alt: "proto",
            Callback: "numquam",
            Fields: "soluta",
            Key: "culpa",
            OauthToken: "quia",
            PrettyPrint: false,
            QuotaUser: "facilis",
            UploadType: "sequi",
            UploadProtocol: "molestias",
        },
        Request: &shared.GoogleCloudContactcenterinsightsV1AnalysisInput{
            AnalysisResult: &shared.GoogleCloudContactcenterinsightsV1AnalysisResult{
                CallAnalysisMetadata: &shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata{
                    Annotations: []shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 740017356361478876,
                                WordIndex: 1368575382608709523,
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 6981855267861832531,
                                WordIndex: 7852834454093480811,
                            },
                            ChannelTag: 202253746349016182,
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: "esse",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 53.200001,
                                    Score: 93.199997,
                                },
                                Type: "COMMON",
                            },
                            HoldData: map[string]interface{}{
                                "possimus": "quia",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "recusandae",
                            },
                            InterruptionData: map[string]interface{}{
                                "ut": "qui",
                                "fuga": "pariatur",
                                "voluptatibus": "corporis",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "ipsum",
                                    Issue: "aut",
                                    Score: 63.200001,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "ut",
                                PhraseMatcher: "aut",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 51.200001,
                                Score: 97.099998,
                            },
                            SilenceData: map[string]interface{}{
                                "voluptatibus": "a",
                                "qui": "numquam",
                                "tenetur": "placeat",
                            },
                        },
                    },
                    Entities: map[string]shared.GoogleCloudContactcenterinsightsV1Entity{
                        "porro": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "est",
                            Metadata: map[string]string{
                                "sunt": "non",
                                "est": "sunt",
                                "animi": "aspernatur",
                            },
                            Salience: 82.199997,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 96.199997,
                                Score: 73.199997,
                            },
                            Type: "PRICE",
                        },
                        "omnis": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "aliquam",
                            Metadata: map[string]string{
                                "est": "alias",
                                "at": "ea",
                            },
                            Salience: 36.099998,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 62.099998,
                                Score: 33.099998,
                            },
                            Type: "TYPE_UNSPECIFIED",
                        },
                    },
                    Intents: map[string]shared.GoogleCloudContactcenterinsightsV1Intent{
                        "soluta": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "harum",
                            ID: "ut",
                        },
                        "itaque": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "corporis",
                            ID: "id",
                        },
                    },
                    IssueModelResult: &shared.GoogleCloudContactcenterinsightsV1IssueModelResult{
                        IssueModel: "omnis",
                        Issues: []shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                            shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                DisplayName: "ut",
                                Issue: "consequatur",
                                Score: 42.200001,
                            },
                        },
                    },
                    PhraseMatchers: map[string]shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                        "rerum": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "alias",
                            PhraseMatcher: "corrupti",
                        },
                        "odit": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "tenetur",
                            PhraseMatcher: "est",
                        },
                        "ipsam": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "natus",
                            PhraseMatcher: "earum",
                        },
                    },
                    Sentiments: []shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 3584840443636536604,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 94.199997,
                                Score: 45.200001,
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 3964366772056344135,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 27.100000,
                                Score: 55.200001,
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 4331683424612488860,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 3.100000,
                                Score: 52.200001,
                            },
                        },
                    },
                },
                EndTime: "sint",
            },
            AnnotatorSelector: &shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector{
                IssueModels: []string{
                    "et",
                    "laboriosam",
                    "molestiae",
                },
                PhraseMatchers: []string{
                    "veritatis",
                },
                RunEntityAnnotator: false,
                RunIntentAnnotator: true,
                RunInterruptionAnnotator: false,
                RunIssueModelAnnotator: true,
                RunPhraseMatcherAnnotator: false,
                RunSentimentAnnotator: true,
                RunSilenceAnnotator: false,
            },
            Name: "ut",
        },
    }
    
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->