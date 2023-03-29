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
