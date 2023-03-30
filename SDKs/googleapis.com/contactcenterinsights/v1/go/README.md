# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/contactcenterinsights/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Projects

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
* `ContactcenterinsightsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `ContactcenterinsightsProjectsLocationsPhraseMatchersCreate` - Creates a phrase matcher.
* `ContactcenterinsightsProjectsLocationsPhraseMatchersList` - Lists phrase matchers.
* `ContactcenterinsightsProjectsLocationsViewsCreate` - Creates a view.
* `ContactcenterinsightsProjectsLocationsViewsDelete` - Deletes a view.
* `ContactcenterinsightsProjectsLocationsViewsGet` - Gets a view.
* `ContactcenterinsightsProjectsLocationsViewsList` - Lists views.
* `ContactcenterinsightsProjectsLocationsViewsPatch` - Updates a view.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
