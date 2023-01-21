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
            Parent: "sit",
        },
        QueryParams: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateQueryParams{
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
        Request: &shared.GoogleCloudContactcenterinsightsV1AnalysisInput{
            AnalysisResult: &shared.GoogleCloudContactcenterinsightsV1AnalysisResult{
                CallAnalysisMetadata: &shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata{
                    Annotations: []shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 2518412263346885298,
                                WordIndex: 5617773211005988520,
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 2339563716805116249,
                                WordIndex: 7144924247938981575,
                            },
                            ChannelTag: 161231572858529631,
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: "et",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 94.199997,
                                    Score: 68.099998,
                                },
                                Type: "MENTION_TYPE_UNSPECIFIED",
                            },
                            HoldData: map[string]interface{}{
                                "debitis": "vel",
                                "odio": "dolore",
                                "id": "aspernatur",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "accusantium",
                            },
                            InterruptionData: map[string]interface{}{
                                "commodi": "quis",
                                "est": "aut",
                                "odit": "non",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "voluptas",
                                    Issue: "omnis",
                                    Score: 44.099998,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "sed",
                                PhraseMatcher: "officiis",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 87.099998,
                                Score: 0.100000,
                            },
                            SilenceData: map[string]interface{}{
                                "recusandae": "at",
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 3959279844101328186,
                                WordIndex: 8902041070398994519,
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 303089054982227392,
                                WordIndex: 7338728586234333996,
                            },
                            ChannelTag: 5392504858645185670,
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: "ut",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 56.099998,
                                    Score: 30.200001,
                                },
                                Type: "MENTION_TYPE_UNSPECIFIED",
                            },
                            HoldData: map[string]interface{}{
                                "dolor": "beatae",
                                "veritatis": "in",
                                "et": "omnis",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "ipsum",
                            },
                            InterruptionData: map[string]interface{}{
                                "dolores": "placeat",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "vel",
                                    Issue: "rerum",
                                    Score: 89.099998,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "quam",
                                PhraseMatcher: "reprehenderit",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 94.099998,
                                Score: 72.199997,
                            },
                            SilenceData: map[string]interface{}{
                                "qui": "ut",
                                "itaque": "ab",
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 8218430188258725598,
                                WordIndex: 4255970180603226314,
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 2682844416202521633,
                                WordIndex: 4304520335772049496,
                            },
                            ChannelTag: 3462733497206508461,
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: "architecto",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 38.200001,
                                    Score: 20.100000,
                                },
                                Type: "PROPER",
                            },
                            HoldData: map[string]interface{}{
                                "magni": "et",
                                "optio": "qui",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "earum",
                            },
                            InterruptionData: map[string]interface{}{
                                "omnis": "ut",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "consequatur",
                                    Issue: "dolor",
                                    Score: 26.100000,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "reprehenderit",
                                PhraseMatcher: "consectetur",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 59.200001,
                                Score: 64.099998,
                            },
                            SilenceData: map[string]interface{}{
                                "soluta": "aut",
                            },
                        },
                    },
                    Entities: map[string]shared.GoogleCloudContactcenterinsightsV1Entity{
                        "consequuntur": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "laudantium",
                            Metadata: map[string]string{
                                "ipsa": "expedita",
                            },
                            Salience: 20.200001,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 26.200001,
                                Score: 87.099998,
                            },
                            Type: "DATE",
                        },
                        "maxime": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "eum",
                            Metadata: map[string]string{
                                "et": "rerum",
                                "reiciendis": "quis",
                            },
                            Salience: 97.199997,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 1.200000,
                                Score: 40.200001,
                            },
                            Type: "PHONE_NUMBER",
                        },
                        "et": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "impedit",
                            Metadata: map[string]string{
                                "expedita": "vel",
                                "qui": "modi",
                                "nihil": "tempora",
                            },
                            Salience: 42.200001,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 60.099998,
                                Score: 34.099998,
                            },
                            Type: "LOCATION",
                        },
                    },
                    Intents: map[string]shared.GoogleCloudContactcenterinsightsV1Intent{
                        "placeat": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "qui",
                            ID: "nisi",
                        },
                        "quis": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "adipisci",
                            ID: "porro",
                        },
                    },
                    IssueModelResult: &shared.GoogleCloudContactcenterinsightsV1IssueModelResult{
                        IssueModel: "rerum",
                        Issues: []shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                            shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                DisplayName: "accusamus",
                                Issue: "numquam",
                                Score: 58.200001,
                            },
                        },
                    },
                    PhraseMatchers: map[string]shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                        "laborum": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "fugit",
                            PhraseMatcher: "quis",
                        },
                        "minus": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "soluta",
                            PhraseMatcher: "aperiam",
                        },
                    },
                    Sentiments: []shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 4970157864765978097,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 52.099998,
                                Score: 29.200001,
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 8997481548049309375,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 86.099998,
                                Score: 68.199997,
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 7899896093082851758,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 83.099998,
                                Score: 30.100000,
                            },
                        },
                    },
                },
                EndTime: "cupiditate",
            },
            AnnotatorSelector: &shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector{
                IssueModels: []string{
                    "molestiae",
                    "pariatur",
                    "quasi",
                },
                PhraseMatchers: []string{
                    "enim",
                    "qui",
                    "sit",
                },
                RunEntityAnnotator: false,
                RunIntentAnnotator: true,
                RunInterruptionAnnotator: true,
                RunIssueModelAnnotator: false,
                RunPhraseMatcherAnnotator: true,
                RunSentimentAnnotator: true,
                RunSilenceAnnotator: true,
            },
            Name: "occaecati",
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