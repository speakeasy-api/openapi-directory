# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Parent: "et",
        },
        QueryParams: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "in",
            Alt: "proto",
            Callback: "facilis",
            Fields: "harum",
            Key: "qui",
            OauthToken: "accusantium",
            PrettyPrint: false,
            QuotaUser: "soluta",
            UploadType: "perspiciatis",
            UploadProtocol: "consequatur",
        },
        Request: &shared.GoogleCloudContactcenterinsightsV1AnalysisInput{
            AnalysisResult: &shared.GoogleCloudContactcenterinsightsV1AnalysisResult{
                CallAnalysisMetadata: &shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata{
                    Annotations: []shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 1320062852959944006,
                                WordIndex: 1859099520625584159,
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 1053361679787022021,
                                WordIndex: 8532985284514351143,
                            },
                            ChannelTag: 82445761480475542,
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: "rerum",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 52.200001,
                                    Score: 44.200001,
                                },
                                Type: "COMMON",
                            },
                            HoldData: map[string]interface{}{
                                "amet": "est",
                                "cum": "et",
                                "ea": "illum",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "molestias",
                            },
                            InterruptionData: map[string]interface{}{
                                "in": "est",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "quidem",
                                    Issue: "nihil",
                                    Score: 18.200001,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "a",
                                PhraseMatcher: "eos",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 15.100000,
                                Score: 39.099998,
                            },
                            SilenceData: map[string]interface{}{
                                "provident": "ad",
                                "assumenda": "dicta",
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 7331474967445919112,
                                WordIndex: 6433384287349416520,
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 6986757747204666960,
                                WordIndex: 7498477783465836022,
                            },
                            ChannelTag: 1069405028013384218,
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: "aut",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 88.199997,
                                    Score: 64.199997,
                                },
                                Type: "MENTION_TYPE_UNSPECIFIED",
                            },
                            HoldData: map[string]interface{}{
                                "eos": "quo",
                                "officia": "quo",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "dolor",
                            },
                            InterruptionData: map[string]interface{}{
                                "enim": "nemo",
                                "blanditiis": "in",
                                "maxime": "rerum",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "aliquid",
                                    Issue: "vero",
                                    Score: 62.200001,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "quibusdam",
                                PhraseMatcher: "sit",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 61.099998,
                                Score: 19.200001,
                            },
                            SilenceData: map[string]interface{}{
                                "vero": "voluptatibus",
                            },
                        },
                    },
                    Entities: map[string]shared.GoogleCloudContactcenterinsightsV1Entity{
                        "iure": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "qui",
                            Metadata: map[string]string{
                                "atque": "fugit",
                                "soluta": "inventore",
                                "a": "laboriosam",
                            },
                            Salience: 37.099998,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 42.200001,
                                Score: 18.100000,
                            },
                            Type: "CONSUMER_GOOD",
                        },
                        "voluptate": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "sapiente",
                            Metadata: map[string]string{
                                "aliquam": "ad",
                                "dolores": "vel",
                            },
                            Salience: 95.199997,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 44.200001,
                                Score: 11.100000,
                            },
                            Type: "LOCATION",
                        },
                        "perferendis": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "perferendis",
                            Metadata: map[string]string{
                                "tenetur": "laudantium",
                                "tenetur": "iste",
                                "corrupti": "vel",
                            },
                            Salience: 60.200001,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 69.099998,
                                Score: 64.099998,
                            },
                            Type: "OTHER",
                        },
                    },
                    Intents: map[string]shared.GoogleCloudContactcenterinsightsV1Intent{
                        "reprehenderit": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "debitis",
                            ID: "iste",
                        },
                        "voluptatum": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "numquam",
                            ID: "accusamus",
                        },
                        "est": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "sed",
                            ID: "rerum",
                        },
                    },
                    IssueModelResult: &shared.GoogleCloudContactcenterinsightsV1IssueModelResult{
                        IssueModel: "exercitationem",
                        Issues: []shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                            shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                DisplayName: "architecto",
                                Issue: "nihil",
                                Score: 63.200001,
                            },
                            shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                DisplayName: "natus",
                                Issue: "vero",
                                Score: 29.200001,
                            },
                            shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                DisplayName: "hic",
                                Issue: "nemo",
                                Score: 13.200000,
                            },
                        },
                    },
                    PhraseMatchers: map[string]shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                        "tempore": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "corporis",
                            PhraseMatcher: "labore",
                        },
                        "magnam": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "cupiditate",
                            PhraseMatcher: "voluptatem",
                        },
                    },
                    Sentiments: []shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 4090415154564826905,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 69.099998,
                                Score: 82.099998,
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 8963276659572373249,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 51.099998,
                                Score: 68.199997,
                            },
                        },
                    },
                },
                EndTime: "autem",
            },
            AnnotatorSelector: &shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector{
                IssueModels: []string{
                    "quas",
                    "omnis",
                    "porro",
                },
                PhraseMatchers: []string{
                    "quia",
                },
                RunEntityAnnotator: false,
                RunIntentAnnotator: false,
                RunInterruptionAnnotator: true,
                RunIssueModelAnnotator: false,
                RunPhraseMatcherAnnotator: false,
                RunSentimentAnnotator: true,
                RunSilenceAnnotator: true,
            },
            Name: "est",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `ContactcenterinsightsProjectsLocationsConversationsAnalysesCreate` - Creates an analysis. The long running operation is done when the analysis has completed.
* `ContactcenterinsightsProjectsLocationsConversationsAnalysesList` - Lists analyses.
* `ContactcenterinsightsProjectsLocationsConversationsBulkAnalyze` - Analyzes multiple conversations in a single request.
* `ContactcenterinsightsProjectsLocationsConversationsCalculateStats` - Gets conversation statistics.
* `ContactcenterinsightsProjectsLocationsConversationsCreate` - Creates a conversation.
* `ContactcenterinsightsProjectsLocationsConversationsIngest` - Imports conversations and processes them according to the user's configuration.
* `ContactcenterinsightsProjectsLocationsConversationsList` - Lists conversations.
* `ContactcenterinsightsProjectsLocationsInsightsdataExport` - Export insights data to a destination defined in the request body.
* `ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats` - Gets an issue model's statistics.
* `ContactcenterinsightsProjectsLocationsIssueModelsCreate` - Creates an issue model.
* `ContactcenterinsightsProjectsLocationsIssueModelsDeploy` - Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
* `ContactcenterinsightsProjectsLocationsIssueModelsIssuesList` - Lists issues.
* `ContactcenterinsightsProjectsLocationsIssueModelsList` - Lists issue models.
* `ContactcenterinsightsProjectsLocationsIssueModelsUndeploy` - Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
* `ContactcenterinsightsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `ContactcenterinsightsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `ContactcenterinsightsProjectsLocationsPhraseMatchersCreate` - Creates a phrase matcher.
* `ContactcenterinsightsProjectsLocationsPhraseMatchersList` - Lists phrase matchers.
* `ContactcenterinsightsProjectsLocationsViewsCreate` - Creates a view.
* `ContactcenterinsightsProjectsLocationsViewsDelete` - Deletes a view.
* `ContactcenterinsightsProjectsLocationsViewsGet` - Gets a view.
* `ContactcenterinsightsProjectsLocationsViewsList` - Lists views.
* `ContactcenterinsightsProjectsLocationsViewsPatch` - Updates a view.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
