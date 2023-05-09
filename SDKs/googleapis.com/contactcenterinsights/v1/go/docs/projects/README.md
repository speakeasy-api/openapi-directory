# Projects

### Available Operations

* [ContactcenterinsightsProjectsLocationsConversationsAnalysesCreate](#contactcenterinsightsprojectslocationsconversationsanalysescreate) - Creates an analysis. The long running operation is done when the analysis has completed.
* [ContactcenterinsightsProjectsLocationsConversationsAnalysesList](#contactcenterinsightsprojectslocationsconversationsanalyseslist) - Lists analyses.
* [ContactcenterinsightsProjectsLocationsConversationsBulkAnalyze](#contactcenterinsightsprojectslocationsconversationsbulkanalyze) - Analyzes multiple conversations in a single request.
* [ContactcenterinsightsProjectsLocationsConversationsCalculateStats](#contactcenterinsightsprojectslocationsconversationscalculatestats) - Gets conversation statistics.
* [ContactcenterinsightsProjectsLocationsConversationsCreate](#contactcenterinsightsprojectslocationsconversationscreate) - Creates a conversation.
* [ContactcenterinsightsProjectsLocationsConversationsIngest](#contactcenterinsightsprojectslocationsconversationsingest) - Imports conversations and processes them according to the user's configuration.
* [ContactcenterinsightsProjectsLocationsConversationsList](#contactcenterinsightsprojectslocationsconversationslist) - Lists conversations.
* [ContactcenterinsightsProjectsLocationsConversationsUpload](#contactcenterinsightsprojectslocationsconversationsupload) - Create a longrunning conversation upload operation. This method differs from CreateConversation by allowing audio transcription and optional DLP redaction.
* [ContactcenterinsightsProjectsLocationsInsightsdataExport](#contactcenterinsightsprojectslocationsinsightsdataexport) - Export insights data to a destination defined in the request body.
* [ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats](#contactcenterinsightsprojectslocationsissuemodelscalculateissuemodelstats) - Gets an issue model's statistics.
* [ContactcenterinsightsProjectsLocationsIssueModelsCreate](#contactcenterinsightsprojectslocationsissuemodelscreate) - Creates an issue model.
* [ContactcenterinsightsProjectsLocationsIssueModelsDeploy](#contactcenterinsightsprojectslocationsissuemodelsdeploy) - Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
* [ContactcenterinsightsProjectsLocationsIssueModelsIssuesList](#contactcenterinsightsprojectslocationsissuemodelsissueslist) - Lists issues.
* [ContactcenterinsightsProjectsLocationsIssueModelsList](#contactcenterinsightsprojectslocationsissuemodelslist) - Lists issue models.
* [ContactcenterinsightsProjectsLocationsIssueModelsUndeploy](#contactcenterinsightsprojectslocationsissuemodelsundeploy) - Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
* [ContactcenterinsightsProjectsLocationsOperationsCancel](#contactcenterinsightsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ContactcenterinsightsProjectsLocationsOperationsList](#contactcenterinsightsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [ContactcenterinsightsProjectsLocationsPhraseMatchersCreate](#contactcenterinsightsprojectslocationsphrasematcherscreate) - Creates a phrase matcher.
* [ContactcenterinsightsProjectsLocationsPhraseMatchersList](#contactcenterinsightsprojectslocationsphrasematcherslist) - Lists phrase matchers.
* [ContactcenterinsightsProjectsLocationsViewsCreate](#contactcenterinsightsprojectslocationsviewscreate) - Creates a view.
* [ContactcenterinsightsProjectsLocationsViewsDelete](#contactcenterinsightsprojectslocationsviewsdelete) - Deletes a view.
* [ContactcenterinsightsProjectsLocationsViewsGet](#contactcenterinsightsprojectslocationsviewsget) - Gets a view.
* [ContactcenterinsightsProjectsLocationsViewsList](#contactcenterinsightsprojectslocationsviewslist) - Lists views.
* [ContactcenterinsightsProjectsLocationsViewsPatch](#contactcenterinsightsprojectslocationsviewspatch) - Updates a view.

## ContactcenterinsightsProjectsLocationsConversationsAnalysesCreate

Creates an analysis. The long running operation is done when the analysis has completed.

### Example Usage

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
                                TranscriptIndex: sdk.Int(652103),
                                WordIndex: sdk.Int(320997),
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: sdk.Int(431418),
                                WordIndex: sdk.Int(221262),
                            },
                            ChannelTag: sdk.Int(896547),
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: sdk.String("odit"),
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(3675.62),
                                    Score: sdk.Float32(972.6),
                                },
                                Type: shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumProper.ToPointer(),
                            },
                            HoldData: map[string]interface{}{
                                "debitis": "eius",
                                "maxime": "deleniti",
                                "facilis": "in",
                                "architecto": "architecto",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: sdk.String("repudiandae"),
                            },
                            InterruptionData: map[string]interface{}{
                                "expedita": "nihil",
                                "repellat": "quibusdam",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: sdk.String("sed"),
                                    Issue: sdk.String("saepe"),
                                    Score: sdk.Float64(8681.26),
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: sdk.String("accusantium"),
                                PhraseMatcher: sdk.String("consequuntur"),
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(5083.15),
                                Score: sdk.Float32(6155.6),
                            },
                            SilenceData: map[string]interface{}{
                                "sunt": "quo",
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: sdk.Int(848009),
                                WordIndex: sdk.Int(864934),
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: sdk.Int(807319),
                                WordIndex: sdk.Int(411397),
                            },
                            ChannelTag: sdk.Int(569101),
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: sdk.String("odit"),
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(4071.83),
                                    Score: sdk.Float32(332.22),
                                },
                                Type: shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumMentionTypeUnspecified.ToPointer(),
                            },
                            HoldData: map[string]interface{}{
                                "quidem": "ipsam",
                                "voluptate": "autem",
                                "nam": "eaque",
                                "pariatur": "nemo",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: sdk.String("voluptatibus"),
                            },
                            InterruptionData: map[string]interface{}{
                                "fugiat": "amet",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: sdk.String("aut"),
                                    Issue: sdk.String("cumque"),
                                    Score: sdk.Float64(3599.78),
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: sdk.String("hic"),
                                PhraseMatcher: sdk.String("libero"),
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(7499.99),
                                Score: sdk.Float32(1716.29),
                            },
                            SilenceData: map[string]interface{}{
                                "totam": "dignissimos",
                                "eaque": "quis",
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: sdk.Int(199996),
                                WordIndex: sdk.Int(179490),
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: sdk.Int(18521),
                                WordIndex: sdk.Int(170986),
                            },
                            ChannelTag: sdk.Int(793698),
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: sdk.String("quam"),
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(2239.24),
                                    Score: sdk.Float32(8745.73),
                                },
                                Type: shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumProper.ToPointer(),
                            },
                            HoldData: map[string]interface{}{
                                "recusandae": "omnis",
                                "facilis": "perspiciatis",
                                "voluptatem": "porro",
                                "consequuntur": "blanditiis",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: sdk.String("error"),
                            },
                            InterruptionData: map[string]interface{}{
                                "occaecati": "rerum",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: sdk.String("adipisci"),
                                    Issue: sdk.String("asperiores"),
                                    Score: sdk.Float64(9342.14),
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: sdk.String("modi"),
                                PhraseMatcher: sdk.String("iste"),
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(6790.91),
                                Score: sdk.Float32(5356.33),
                            },
                            SilenceData: map[string]interface{}{
                                "provident": "nobis",
                                "libero": "delectus",
                                "quaerat": "quos",
                                "aliquid": "dolorem",
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: sdk.Int(209843),
                                WordIndex: sdk.Int(222443),
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: sdk.Int(186193),
                                WordIndex: sdk.Int(218749),
                            },
                            ChannelTag: sdk.Int(944373),
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: sdk.String("excepturi"),
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(7395.51),
                                    Score: sdk.Float32(4521.09),
                                },
                                Type: shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumProper.ToPointer(),
                            },
                            HoldData: map[string]interface{}{
                                "amet": "dolorum",
                                "numquam": "veritatis",
                                "ipsa": "ipsa",
                                "iure": "odio",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: sdk.String("quaerat"),
                            },
                            InterruptionData: map[string]interface{}{
                                "quidem": "voluptatibus",
                                "voluptas": "natus",
                                "eos": "atque",
                                "sit": "fugiat",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: sdk.String("ab"),
                                    Issue: sdk.String("soluta"),
                                    Score: sdk.Float64(6793.93),
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: sdk.String("iusto"),
                                PhraseMatcher: sdk.String("voluptate"),
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(6770.82),
                                Score: sdk.Float32(5365.79),
                            },
                            SilenceData: map[string]interface{}{
                                "necessitatibus": "distinctio",
                                "asperiores": "nihil",
                                "ipsum": "voluptate",
                            },
                        },
                    },
                    Entities: map[string]shared.GoogleCloudContactcenterinsightsV1Entity{
                        "saepe": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: sdk.String("eius"),
                            Metadata: map[string]string{
                                "perferendis": "amet",
                            },
                            Salience: sdk.Float32(7583.79),
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(8815.86),
                                Score: sdk.Float32(3200.17),
                            },
                            Type: shared.GoogleCloudContactcenterinsightsV1EntityTypeEnumNumber.ToPointer(),
                        },
                        "suscipit": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: sdk.String("deserunt"),
                            Metadata: map[string]string{
                                "minima": "repellendus",
                                "totam": "similique",
                                "alias": "at",
                            },
                            Salience: sdk.Float32(3118.6),
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(2735.42),
                                Score: sdk.Float32(4254.51),
                            },
                            Type: shared.GoogleCloudContactcenterinsightsV1EntityTypeEnumDate.ToPointer(),
                        },
                        "officiis": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: sdk.String("qui"),
                            Metadata: map[string]string{
                                "a": "esse",
                                "harum": "iusto",
                                "ipsum": "quisquam",
                            },
                            Salience: sdk.Float32(9473.71),
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(2294.42),
                                Score: sdk.Float32(7308.56),
                            },
                            Type: shared.GoogleCloudContactcenterinsightsV1EntityTypeEnumNumber.ToPointer(),
                        },
                    },
                    Intents: map[string]shared.GoogleCloudContactcenterinsightsV1Intent{
                        "enim": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: sdk.String("dolorem"),
                            ID: sdk.String("f870b326-b5a7-4342-9cdb-1a8422bb679d"),
                        },
                        "qui": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: sdk.String("neque"),
                            ID: sdk.String("22715bf0-cbb1-4e31-b8b9-0f3443a1108e"),
                        },
                    },
                    IssueModelResult: &shared.GoogleCloudContactcenterinsightsV1IssueModelResult{
                        IssueModel: sdk.String("consequatur"),
                        Issues: []shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                            shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                DisplayName: sdk.String("repellendus"),
                                Issue: sdk.String("porro"),
                                Score: sdk.Float64(9843.3),
                            },
                            shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                DisplayName: sdk.String("ut"),
                                Issue: sdk.String("facilis"),
                                Score: sdk.Float64(5864.1),
                            },
                            shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                DisplayName: sdk.String("qui"),
                                Issue: sdk.String("quae"),
                                Score: sdk.Float64(5123.93),
                            },
                        },
                    },
                    PhraseMatchers: map[string]shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                        "occaecati": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: sdk.String("voluptatibus"),
                            PhraseMatcher: sdk.String("quisquam"),
                        },
                        "vero": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: sdk.String("omnis"),
                            PhraseMatcher: sdk.String("quis"),
                        },
                    },
                    Sentiments: []shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: sdk.Int(961571),
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(4551.69),
                                Score: sdk.Float32(2317.01),
                            },
                        },
                    },
                },
                EndTime: sdk.String("vero"),
            },
            AnnotatorSelector: &shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector{
                IssueModels: []string{
                    "dignissimos",
                    "hic",
                    "distinctio",
                    "quod",
                },
                PhraseMatchers: []string{
                    "similique",
                    "facilis",
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
                    ConversationProfile: sdk.String("vero"),
                    SummarizationModel: shared.GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnumSummarizationModelUnspecified.ToPointer(),
                },
            },
            Name: sdk.String("Rosemarie Stanton"),
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("fugit"),
        Parent: "porro",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("iusto"),
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

## ContactcenterinsightsProjectsLocationsConversationsAnalysesList

Lists analyses.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsConversationsAnalysesList(ctx, operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("tempora"),
        Filter: sdk.String("ipsam"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("aspernatur"),
        PageSize: sdk.Int64(428224),
        PageToken: sdk.String("possimus"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ratione"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudContactcenterinsightsV1ListAnalysesResponse != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsConversationsBulkAnalyze

Analyzes multiple conversations in a single request.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyze(ctx, operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest: &shared.GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest{
            AnalysisPercentage: sdk.Float32(2243.17),
            AnnotatorSelector: &shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector{
                IssueModels: []string{
                    "quasi",
                    "ex",
                    "nulla",
                    "excepturi",
                },
                PhraseMatchers: []string{
                    "nostrum",
                    "sapiente",
                    "quisquam",
                    "saepe",
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
                    ConversationProfile: sdk.String("ea"),
                    SummarizationModel: shared.GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnumBaselineModel.ToPointer(),
                },
            },
            Filter: sdk.String("corporis"),
            Parent: sdk.String("veniam"),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("ea"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("consectetur"),
        Parent: "recusandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity{
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

## ContactcenterinsightsProjectsLocationsConversationsCalculateStats

Gets conversation statistics.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsConversationsCalculateStats(ctx, operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("deleniti"),
        Filter: sdk.String("impedit"),
        Key: sdk.String("aliquam"),
        Location: "fugit",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("et"),
    }, operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudContactcenterinsightsV1CalculateStatsResponse != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsConversationsCreate

Creates a conversation.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsConversationsCreate(ctx, operations.ContactcenterinsightsProjectsLocationsConversationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudContactcenterinsightsV1ConversationInput: &shared.GoogleCloudContactcenterinsightsV1ConversationInput{
            AgentID: sdk.String("laborum"),
            CallMetadata: &shared.GoogleCloudContactcenterinsightsV1ConversationCallMetadata{
                AgentChannel: sdk.Int(810424),
                CustomerChannel: sdk.Int(245367),
            },
            DataSource: &shared.GoogleCloudContactcenterinsightsV1ConversationDataSourceInput{
                DialogflowSource: &shared.GoogleCloudContactcenterinsightsV1DialogflowSourceInput{
                    AudioURI: sdk.String("eum"),
                },
                GcsSource: &shared.GoogleCloudContactcenterinsightsV1GcsSource{
                    AudioURI: sdk.String("autem"),
                    TranscriptURI: sdk.String("nobis"),
                },
            },
            ExpireTime: sdk.String("quas"),
            Labels: map[string]string{
                "nulla": "voluptas",
                "libero": "quasi",
                "tempora": "numquam",
                "explicabo": "provident",
            },
            LanguageCode: sdk.String("ipsa"),
            LatestAnalysis: &shared.GoogleCloudContactcenterinsightsV1AnalysisInput{
                AnalysisResult: &shared.GoogleCloudContactcenterinsightsV1AnalysisResult{
                    CallAnalysisMetadata: &shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata{
                        Annotations: []shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                                AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                    TranscriptIndex: sdk.Int(301598),
                                    WordIndex: sdk.Int(487935),
                                },
                                AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                    TranscriptIndex: sdk.Int(262118),
                                    WordIndex: sdk.Int(458515),
                                },
                                ChannelTag: sdk.Int(456141),
                                EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                    EntityUniqueID: sdk.String("rem"),
                                    Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                        Magnitude: sdk.Float32(6832.82),
                                        Score: sdk.Float32(4420.15),
                                    },
                                    Type: shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumCommon.ToPointer(),
                                },
                                HoldData: map[string]interface{}{
                                    "ut": "eum",
                                    "suscipit": "assumenda",
                                    "eos": "praesentium",
                                    "quisquam": "veritatis",
                                },
                                IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                    IntentUniqueID: sdk.String("ipsa"),
                                },
                                InterruptionData: map[string]interface{}{
                                    "quidem": "neque",
                                    "quo": "illum",
                                    "quo": "fuga",
                                },
                                IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                    IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                        DisplayName: sdk.String("eius"),
                                        Issue: sdk.String("eos"),
                                        Score: sdk.Float64(3738.13),
                                    },
                                },
                                PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                    DisplayName: sdk.String("ab"),
                                    PhraseMatcher: sdk.String("cupiditate"),
                                },
                                SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(96.88),
                                    Score: sdk.Float32(2728.22),
                                },
                                SilenceData: map[string]interface{}{
                                    "ipsam": "aspernatur",
                                    "sequi": "quo",
                                    "esse": "recusandae",
                                    "aperiam": "distinctio",
                                },
                            },
                            shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                                AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                    TranscriptIndex: sdk.Int(799796),
                                    WordIndex: sdk.Int(490819),
                                },
                                AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                    TranscriptIndex: sdk.Int(76956),
                                    WordIndex: sdk.Int(469498),
                                },
                                ChannelTag: sdk.Int(518835),
                                EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                    EntityUniqueID: sdk.String("accusamus"),
                                    Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                        Magnitude: sdk.Float32(3068.1),
                                        Score: sdk.Float32(4884.1),
                                    },
                                    Type: shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumProper.ToPointer(),
                                },
                                HoldData: map[string]interface{}{
                                    "sapiente": "dolores",
                                    "deserunt": "molestiae",
                                },
                                IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                    IntentUniqueID: sdk.String("accusantium"),
                                },
                                InterruptionData: map[string]interface{}{
                                    "eum": "quas",
                                    "praesentium": "consequuntur",
                                    "deleniti": "fugit",
                                    "fuga": "mollitia",
                                },
                                IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                    IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                        DisplayName: sdk.String("incidunt"),
                                        Issue: sdk.String("atque"),
                                        Score: sdk.Float64(1288.6),
                                    },
                                },
                                PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                    DisplayName: sdk.String("minima"),
                                    PhraseMatcher: sdk.String("nisi"),
                                },
                                SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(1470.14),
                                    Score: sdk.Float32(9564.06),
                                },
                                SilenceData: map[string]interface{}{
                                    "ratione": "explicabo",
                                },
                            },
                        },
                        Entities: map[string]shared.GoogleCloudContactcenterinsightsV1Entity{
                            "occaecati": shared.GoogleCloudContactcenterinsightsV1Entity{
                                DisplayName: sdk.String("atque"),
                                Metadata: map[string]string{
                                    "esse": "eveniet",
                                },
                                Salience: sdk.Float32(8820.42),
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(829.71),
                                    Score: sdk.Float32(4586.04),
                                },
                                Type: shared.GoogleCloudContactcenterinsightsV1EntityTypeEnumDate.ToPointer(),
                            },
                            "nam": shared.GoogleCloudContactcenterinsightsV1Entity{
                                DisplayName: sdk.String("vero"),
                                Metadata: map[string]string{
                                    "quasi": "saepe",
                                    "vel": "harum",
                                },
                                Salience: sdk.Float32(4732.21),
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(6996.22),
                                    Score: sdk.Float32(5801.97),
                                },
                                Type: shared.GoogleCloudContactcenterinsightsV1EntityTypeEnumEvent.ToPointer(),
                            },
                            "distinctio": shared.GoogleCloudContactcenterinsightsV1Entity{
                                DisplayName: sdk.String("eligendi"),
                                Metadata: map[string]string{
                                    "culpa": "tempore",
                                },
                                Salience: sdk.Float32(2400.2),
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(7669.64),
                                    Score: sdk.Float32(1605.38),
                                },
                                Type: shared.GoogleCloudContactcenterinsightsV1EntityTypeEnumTypeUnspecified.ToPointer(),
                            },
                            "minus": shared.GoogleCloudContactcenterinsightsV1Entity{
                                DisplayName: sdk.String("quaerat"),
                                Metadata: map[string]string{
                                    "consectetur": "esse",
                                    "blanditiis": "provident",
                                    "a": "nulla",
                                    "quas": "esse",
                                },
                                Salience: sdk.Float32(974.68),
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(9518.75),
                                    Score: sdk.Float32(6216.79),
                                },
                                Type: shared.GoogleCloudContactcenterinsightsV1EntityTypeEnumOther.ToPointer(),
                            },
                        },
                        Intents: map[string]shared.GoogleCloudContactcenterinsightsV1Intent{
                            "possimus": shared.GoogleCloudContactcenterinsightsV1Intent{
                                DisplayName: sdk.String("quia"),
                                ID: sdk.String("efd121aa-6f1e-4674-bdb0-4f15756082d6"),
                            },
                            "deleniti": shared.GoogleCloudContactcenterinsightsV1Intent{
                                DisplayName: sdk.String("itaque"),
                                ID: sdk.String("a19f1d17-0513-439d-8808-6a1840394c26"),
                            },
                            "aut": shared.GoogleCloudContactcenterinsightsV1Intent{
                                DisplayName: sdk.String("dignissimos"),
                                ID: sdk.String("1f93f5f0-642d-4ac7-af51-5cc413aa63aa"),
                            },
                            "recusandae": shared.GoogleCloudContactcenterinsightsV1Intent{
                                DisplayName: sdk.String("totam"),
                                ID: sdk.String("d67864db-b675-4fd5-a60b-375ed4f6fbee"),
                            },
                        },
                        IssueModelResult: &shared.GoogleCloudContactcenterinsightsV1IssueModelResult{
                            IssueModel: sdk.String("dolore"),
                            Issues: []shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: sdk.String("asperiores"),
                                    Issue: sdk.String("adipisci"),
                                    Score: sdk.Float64(2494.2),
                                },
                            },
                        },
                        PhraseMatchers: map[string]shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            "beatae": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: sdk.String("dignissimos"),
                                PhraseMatcher: sdk.String("a"),
                            },
                        },
                        Sentiments: []shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                                ChannelTag: sdk.Int(233420),
                                SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(3581.07),
                                    Score: sdk.Float32(6897.68),
                                },
                            },
                            shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                                ChannelTag: sdk.Int(385237),
                                SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(583.56),
                                    Score: sdk.Float32(9167.27),
                                },
                            },
                            shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                                ChannelTag: sdk.Int(730709),
                                SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(1138.16),
                                    Score: sdk.Float32(8817.21),
                                },
                            },
                            shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                                ChannelTag: sdk.Int(631126),
                                SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: sdk.Float32(2724.37),
                                    Score: sdk.Float32(1328.15),
                                },
                            },
                        },
                    },
                    EndTime: sdk.String("voluptas"),
                },
                AnnotatorSelector: &shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector{
                    IssueModels: []string{
                        "voluptas",
                        "minima",
                    },
                    PhraseMatchers: []string{
                        "dolorum",
                        "adipisci",
                        "minus",
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
                        ConversationProfile: sdk.String("dolores"),
                        SummarizationModel: shared.GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnumBaselineModel.ToPointer(),
                    },
                },
                Name: sdk.String("Valerie Haag"),
            },
            LatestSummary: &shared.GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData{
                AnswerRecord: sdk.String("ullam"),
                Confidence: sdk.Float32(2377.42),
                ConversationModel: sdk.String("cum"),
                Metadata: map[string]string{
                    "quas": "hic",
                    "nesciunt": "culpa",
                    "corrupti": "pariatur",
                },
                Text: sdk.String("totam"),
                TextSections: map[string]string{
                    "exercitationem": "nobis",
                    "sit": "rerum",
                    "sed": "reiciendis",
                    "explicabo": "asperiores",
                },
            },
            Medium: shared.GoogleCloudContactcenterinsightsV1ConversationMediumEnumChat.ToPointer(),
            Name: sdk.String("Kristy Bernier"),
            ObfuscatedUserID: sdk.String("laborum"),
            StartTime: sdk.String("sed"),
            Transcript: &shared.GoogleCloudContactcenterinsightsV1ConversationTranscript{
                TranscriptSegments: []shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment{
                    shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment{
                        ChannelTag: sdk.Int(417486),
                        Confidence: sdk.Float32(6960.77),
                        DialogflowSegmentMetadata: &shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata{
                            SmartReplyAllowlistCovered: sdk.Bool(false),
                        },
                        LanguageCode: sdk.String("explicabo"),
                        MessageTime: sdk.String("voluptas"),
                        SegmentParticipant: &shared.GoogleCloudContactcenterinsightsV1ConversationParticipant{
                            DialogflowParticipant: sdk.String("unde"),
                            DialogflowParticipantName: sdk.String("architecto"),
                            ObfuscatedExternalUserID: sdk.String("suscipit"),
                            Role: shared.GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnumAnyAgent.ToPointer(),
                            UserID: sdk.String("debitis"),
                        },
                        Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                            Magnitude: sdk.Float32(724.34),
                            Score: sdk.Float32(9677.95),
                        },
                        Text: sdk.String("perferendis"),
                        Words: []shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                            shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                Confidence: sdk.Float32(9795.74),
                                EndOffset: sdk.String("incidunt"),
                                StartOffset: sdk.String("sed"),
                                Word: sdk.String("provident"),
                            },
                            shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                Confidence: sdk.Float32(2587.02),
                                EndOffset: sdk.String("necessitatibus"),
                                StartOffset: sdk.String("ipsum"),
                                Word: sdk.String("ea"),
                            },
                            shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                Confidence: sdk.Float32(5799.12),
                                EndOffset: sdk.String("quos"),
                                StartOffset: sdk.String("voluptatibus"),
                                Word: sdk.String("tempora"),
                            },
                        },
                    },
                    shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment{
                        ChannelTag: sdk.Int(273009),
                        Confidence: sdk.Float32(4554.44),
                        DialogflowSegmentMetadata: &shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata{
                            SmartReplyAllowlistCovered: sdk.Bool(false),
                        },
                        LanguageCode: sdk.String("reiciendis"),
                        MessageTime: sdk.String("ex"),
                        SegmentParticipant: &shared.GoogleCloudContactcenterinsightsV1ConversationParticipant{
                            DialogflowParticipant: sdk.String("sit"),
                            DialogflowParticipantName: sdk.String("non"),
                            ObfuscatedExternalUserID: sdk.String("officiis"),
                            Role: shared.GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnumAutomatedAgent.ToPointer(),
                            UserID: sdk.String("facilis"),
                        },
                        Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                            Magnitude: sdk.Float32(3103.81),
                            Score: sdk.Float32(2777.73),
                        },
                        Text: sdk.String("ipsam"),
                        Words: []shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                            shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                Confidence: sdk.Float32(5249.7),
                                EndOffset: sdk.String("sit"),
                                StartOffset: sdk.String("nobis"),
                                Word: sdk.String("error"),
                            },
                            shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                Confidence: sdk.Float32(3335.07),
                                EndOffset: sdk.String("minima"),
                                StartOffset: sdk.String("recusandae"),
                                Word: sdk.String("reiciendis"),
                            },
                            shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                Confidence: sdk.Float32(8623.19),
                                EndOffset: sdk.String("magni"),
                                StartOffset: sdk.String("aperiam"),
                                Word: sdk.String("saepe"),
                            },
                            shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                Confidence: sdk.Float32(2536.42),
                                EndOffset: sdk.String("veniam"),
                                StartOffset: sdk.String("in"),
                                Word: sdk.String("officiis"),
                            },
                        },
                    },
                },
            },
            TTL: sdk.String("beatae"),
        },
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("praesentium"),
        ConversationID: sdk.String("cum"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("voluptatum"),
        Parent: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.ContactcenterinsightsProjectsLocationsConversationsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudContactcenterinsightsV1Conversation != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsConversationsIngest

Imports conversations and processes them according to the user's configuration.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsConversationsIngest(ctx, operations.ContactcenterinsightsProjectsLocationsConversationsIngestRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudContactcenterinsightsV1IngestConversationsRequest: &shared.GoogleCloudContactcenterinsightsV1IngestConversationsRequest{
            ConversationConfig: &shared.GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig{
                AgentID: sdk.String("dolorum"),
            },
            GcsSource: &shared.GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource{
                BucketURI: sdk.String("nostrum"),
            },
            Parent: sdk.String("officia"),
            TranscriptObjectConfig: &shared.GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig{
                Medium: shared.GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnumChat.ToPointer(),
            },
        },
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("atque"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("ut"),
        Parent: "fugiat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("expedita"),
    }, operations.ContactcenterinsightsProjectsLocationsConversationsIngestSecurity{
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

## ContactcenterinsightsProjectsLocationsConversationsList

Lists conversations.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsConversationsList(ctx, operations.ContactcenterinsightsProjectsLocationsConversationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("sit"),
        Filter: sdk.String("voluptatum"),
        Key: sdk.String("quas"),
        OauthToken: sdk.String("repudiandae"),
        PageSize: sdk.Int64(361151),
        PageToken: sdk.String("et"),
        Parent: "blanditiis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("sit"),
        View: operations.ContactcenterinsightsProjectsLocationsConversationsListViewEnumFull.ToPointer(),
    }, operations.ContactcenterinsightsProjectsLocationsConversationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudContactcenterinsightsV1ListConversationsResponse != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsConversationsUpload

Create a longrunning conversation upload operation. This method differs from CreateConversation by allowing audio transcription and optional DLP redaction.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsConversationsUpload(ctx, operations.ContactcenterinsightsProjectsLocationsConversationsUploadRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudContactcenterinsightsV1UploadConversationRequestInput: &shared.GoogleCloudContactcenterinsightsV1UploadConversationRequestInput{
            Conversation: &shared.GoogleCloudContactcenterinsightsV1ConversationInput{
                AgentID: sdk.String("saepe"),
                CallMetadata: &shared.GoogleCloudContactcenterinsightsV1ConversationCallMetadata{
                    AgentChannel: sdk.Int(622231),
                    CustomerChannel: sdk.Int(8511),
                },
                DataSource: &shared.GoogleCloudContactcenterinsightsV1ConversationDataSourceInput{
                    DialogflowSource: &shared.GoogleCloudContactcenterinsightsV1DialogflowSourceInput{
                        AudioURI: sdk.String("incidunt"),
                    },
                    GcsSource: &shared.GoogleCloudContactcenterinsightsV1GcsSource{
                        AudioURI: sdk.String("reiciendis"),
                        TranscriptURI: sdk.String("dolorem"),
                    },
                },
                ExpireTime: sdk.String("harum"),
                Labels: map[string]string{
                    "architecto": "occaecati",
                },
                LanguageCode: sdk.String("labore"),
                LatestAnalysis: &shared.GoogleCloudContactcenterinsightsV1AnalysisInput{
                    AnalysisResult: &shared.GoogleCloudContactcenterinsightsV1AnalysisResult{
                        CallAnalysisMetadata: &shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata{
                            Annotations: []shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                                shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                                    AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                        TranscriptIndex: sdk.Int(539074),
                                        WordIndex: sdk.Int(671957),
                                    },
                                    AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                        TranscriptIndex: sdk.Int(724148),
                                        WordIndex: sdk.Int(948861),
                                    },
                                    ChannelTag: sdk.Int(388867),
                                    EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                        EntityUniqueID: sdk.String("alias"),
                                        Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                            Magnitude: sdk.Float32(2270.84),
                                            Score: sdk.Float32(6471.97),
                                        },
                                        Type: shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumProper.ToPointer(),
                                    },
                                    HoldData: map[string]interface{}{
                                        "reiciendis": "provident",
                                        "repellendus": "delectus",
                                        "voluptates": "perferendis",
                                    },
                                    IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                        IntentUniqueID: sdk.String("est"),
                                    },
                                    InterruptionData: map[string]interface{}{
                                        "reprehenderit": "facere",
                                        "fuga": "praesentium",
                                        "mollitia": "veniam",
                                    },
                                    IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                        IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                            DisplayName: sdk.String("voluptatem"),
                                            Issue: sdk.String("quisquam"),
                                            Score: sdk.Float64(9195.32),
                                        },
                                    },
                                    PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                        DisplayName: sdk.String("quasi"),
                                        PhraseMatcher: sdk.String("atque"),
                                    },
                                    SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                        Magnitude: sdk.Float32(4420.36),
                                        Score: sdk.Float32(9911.42),
                                    },
                                    SilenceData: map[string]interface{}{
                                        "suscipit": "quidem",
                                        "maxime": "et",
                                        "esse": "amet",
                                    },
                                },
                                shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                                    AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                        TranscriptIndex: sdk.Int(826825),
                                        WordIndex: sdk.Int(410301),
                                    },
                                    AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                        TranscriptIndex: sdk.Int(539118),
                                        WordIndex: sdk.Int(623295),
                                    },
                                    ChannelTag: sdk.Int(887265),
                                    EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                        EntityUniqueID: sdk.String("officiis"),
                                        Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                            Magnitude: sdk.Float32(8801.07),
                                            Score: sdk.Float32(6188.26),
                                        },
                                        Type: shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumMentionTypeUnspecified.ToPointer(),
                                    },
                                    HoldData: map[string]interface{}{
                                        "ex": "maiores",
                                    },
                                    IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                        IntentUniqueID: sdk.String("corrupti"),
                                    },
                                    InterruptionData: map[string]interface{}{
                                        "error": "blanditiis",
                                        "suscipit": "repudiandae",
                                        "atque": "atque",
                                        "sunt": "recusandae",
                                    },
                                    IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                        IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                            DisplayName: sdk.String("dolorum"),
                                            Issue: sdk.String("repellendus"),
                                            Score: sdk.Float64(2871.19),
                                        },
                                    },
                                    PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                        DisplayName: sdk.String("reiciendis"),
                                        PhraseMatcher: sdk.String("doloremque"),
                                    },
                                    SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                        Magnitude: sdk.Float32(9197.83),
                                        Score: sdk.Float32(1160.98),
                                    },
                                    SilenceData: map[string]interface{}{
                                        "beatae": "dolores",
                                    },
                                },
                                shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                                    AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                        TranscriptIndex: sdk.Int(316488),
                                        WordIndex: sdk.Int(389135),
                                    },
                                    AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                        TranscriptIndex: sdk.Int(246535),
                                        WordIndex: sdk.Int(952143),
                                    },
                                    ChannelTag: sdk.Int(562783),
                                    EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                        EntityUniqueID: sdk.String("magnam"),
                                        Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                            Magnitude: sdk.Float32(9063.55),
                                            Score: sdk.Float32(1604.67),
                                        },
                                        Type: shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumProper.ToPointer(),
                                    },
                                    HoldData: map[string]interface{}{
                                        "perspiciatis": "in",
                                        "adipisci": "eveniet",
                                        "occaecati": "consequuntur",
                                        "fugit": "id",
                                    },
                                    IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                        IntentUniqueID: sdk.String("quis"),
                                    },
                                    InterruptionData: map[string]interface{}{
                                        "error": "illo",
                                        "corporis": "quidem",
                                    },
                                    IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                        IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                            DisplayName: sdk.String("eveniet"),
                                            Issue: sdk.String("non"),
                                            Score: sdk.Float64(8784.93),
                                        },
                                    },
                                    PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                        DisplayName: sdk.String("doloremque"),
                                        PhraseMatcher: sdk.String("iure"),
                                    },
                                    SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                        Magnitude: sdk.Float32(599.44),
                                        Score: sdk.Float32(5176.12),
                                    },
                                    SilenceData: map[string]interface{}{
                                        "molestiae": "eveniet",
                                    },
                                },
                            },
                            Entities: map[string]shared.GoogleCloudContactcenterinsightsV1Entity{
                                "cum": shared.GoogleCloudContactcenterinsightsV1Entity{
                                    DisplayName: sdk.String("iure"),
                                    Metadata: map[string]string{
                                        "ratione": "laborum",
                                        "distinctio": "voluptatum",
                                        "rem": "aliquam",
                                        "ad": "repellat",
                                    },
                                    Salience: sdk.Float32(30.99),
                                    Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                        Magnitude: sdk.Float32(3621.89),
                                        Score: sdk.Float32(5973.03),
                                    },
                                    Type: shared.GoogleCloudContactcenterinsightsV1EntityTypeEnumConsumerGood.ToPointer(),
                                },
                            },
                            Intents: map[string]shared.GoogleCloudContactcenterinsightsV1Intent{
                                "voluptas": shared.GoogleCloudContactcenterinsightsV1Intent{
                                    DisplayName: sdk.String("alias"),
                                    ID: sdk.String("ff2a54a3-1e94-4764-a3e8-65e7956f9251"),
                                },
                                "animi": shared.GoogleCloudContactcenterinsightsV1Intent{
                                    DisplayName: sdk.String("nostrum"),
                                    ID: sdk.String("a9da660f-f57b-4faa-94f9-efc1b4512c10"),
                                },
                                "velit": shared.GoogleCloudContactcenterinsightsV1Intent{
                                    DisplayName: sdk.String("aspernatur"),
                                    ID: sdk.String("648dc2f6-1519-49eb-bd0e-9fe6c632ca3a"),
                                },
                            },
                            IssueModelResult: &shared.GoogleCloudContactcenterinsightsV1IssueModelResult{
                                IssueModel: sdk.String("necessitatibus"),
                                Issues: []shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                        DisplayName: sdk.String("consequatur"),
                                        Issue: sdk.String("quasi"),
                                        Score: sdk.Float64(902.33),
                                    },
                                    shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                        DisplayName: sdk.String("ducimus"),
                                        Issue: sdk.String("natus"),
                                        Score: sdk.Float64(5810.82),
                                    },
                                    shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                        DisplayName: sdk.String("suscipit"),
                                        Issue: sdk.String("adipisci"),
                                        Score: sdk.Float64(965.62),
                                    },
                                    shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                        DisplayName: sdk.String("magni"),
                                        Issue: sdk.String("doloribus"),
                                        Score: sdk.Float64(8595.81),
                                    },
                                },
                            },
                            PhraseMatchers: map[string]shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                "ipsa": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                    DisplayName: sdk.String("tempora"),
                                    PhraseMatcher: sdk.String("nihil"),
                                },
                                "molestiae": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                    DisplayName: sdk.String("dicta"),
                                    PhraseMatcher: sdk.String("iusto"),
                                },
                                "esse": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                    DisplayName: sdk.String("praesentium"),
                                    PhraseMatcher: sdk.String("maiores"),
                                },
                                "reiciendis": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                    DisplayName: sdk.String("vel"),
                                    PhraseMatcher: sdk.String("architecto"),
                                },
                            },
                            Sentiments: []shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                                shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                                    ChannelTag: sdk.Int(39650),
                                    SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                        Magnitude: sdk.Float32(1173.15),
                                        Score: sdk.Float32(4837.06),
                                    },
                                },
                                shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                                    ChannelTag: sdk.Int(271252),
                                    SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                        Magnitude: sdk.Float32(4582.59),
                                        Score: sdk.Float32(4037.93),
                                    },
                                },
                                shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                                    ChannelTag: sdk.Int(235263),
                                    SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                        Magnitude: sdk.Float32(3998.12),
                                        Score: sdk.Float32(588.7),
                                    },
                                },
                                shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                                    ChannelTag: sdk.Int(671384),
                                    SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                        Magnitude: sdk.Float32(1238.44),
                                        Score: sdk.Float32(3447.18),
                                    },
                                },
                            },
                        },
                        EndTime: sdk.String("fugiat"),
                    },
                    AnnotatorSelector: &shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector{
                        IssueModels: []string{
                            "aliquid",
                            "officia",
                            "suscipit",
                        },
                        PhraseMatchers: []string{
                            "perferendis",
                            "eum",
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
                            ConversationProfile: sdk.String("voluptas"),
                            SummarizationModel: shared.GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnumBaselineModel.ToPointer(),
                        },
                    },
                    Name: sdk.String("Raymond Muller"),
                },
                LatestSummary: &shared.GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData{
                    AnswerRecord: sdk.String("mollitia"),
                    Confidence: sdk.Float32(6717.94),
                    ConversationModel: sdk.String("libero"),
                    Metadata: map[string]string{
                        "deleniti": "enim",
                        "vitae": "repellendus",
                    },
                    Text: sdk.String("ex"),
                    TextSections: map[string]string{
                        "ex": "ut",
                        "ad": "expedita",
                        "voluptatem": "molestias",
                        "cum": "aliquid",
                    },
                },
                Medium: shared.GoogleCloudContactcenterinsightsV1ConversationMediumEnumMediumUnspecified.ToPointer(),
                Name: sdk.String("Arturo Bogan"),
                ObfuscatedUserID: sdk.String("culpa"),
                StartTime: sdk.String("voluptatem"),
                Transcript: &shared.GoogleCloudContactcenterinsightsV1ConversationTranscript{
                    TranscriptSegments: []shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment{
                        shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment{
                            ChannelTag: sdk.Int(889288),
                            Confidence: sdk.Float32(1032.98),
                            DialogflowSegmentMetadata: &shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata{
                                SmartReplyAllowlistCovered: sdk.Bool(false),
                            },
                            LanguageCode: sdk.String("fuga"),
                            MessageTime: sdk.String("pariatur"),
                            SegmentParticipant: &shared.GoogleCloudContactcenterinsightsV1ConversationParticipant{
                                DialogflowParticipant: sdk.String("debitis"),
                                DialogflowParticipantName: sdk.String("voluptatem"),
                                ObfuscatedExternalUserID: sdk.String("alias"),
                                Role: shared.GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnumAutomatedAgent.ToPointer(),
                                UserID: sdk.String("earum"),
                            },
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(4042.44),
                                Score: sdk.Float32(9583.08),
                            },
                            Text: sdk.String("rem"),
                            Words: []shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                    Confidence: sdk.Float32(3651),
                                    EndOffset: sdk.String("asperiores"),
                                    StartOffset: sdk.String("ratione"),
                                    Word: sdk.String("ullam"),
                                },
                                shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                    Confidence: sdk.Float32(191.22),
                                    EndOffset: sdk.String("illum"),
                                    StartOffset: sdk.String("totam"),
                                    Word: sdk.String("impedit"),
                                },
                                shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                    Confidence: sdk.Float32(8427.77),
                                    EndOffset: sdk.String("nam"),
                                    StartOffset: sdk.String("ipsam"),
                                    Word: sdk.String("culpa"),
                                },
                                shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                    Confidence: sdk.Float32(2228.64),
                                    EndOffset: sdk.String("aliquam"),
                                    StartOffset: sdk.String("inventore"),
                                    Word: sdk.String("deleniti"),
                                },
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment{
                            ChannelTag: sdk.Int(85311),
                            Confidence: sdk.Float32(2745.75),
                            DialogflowSegmentMetadata: &shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata{
                                SmartReplyAllowlistCovered: sdk.Bool(false),
                            },
                            LanguageCode: sdk.String("dolor"),
                            MessageTime: sdk.String("consequatur"),
                            SegmentParticipant: &shared.GoogleCloudContactcenterinsightsV1ConversationParticipant{
                                DialogflowParticipant: sdk.String("architecto"),
                                DialogflowParticipantName: sdk.String("sit"),
                                ObfuscatedExternalUserID: sdk.String("modi"),
                                Role: shared.GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnumRoleUnspecified.ToPointer(),
                                UserID: sdk.String("ab"),
                            },
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(5137.6),
                                Score: sdk.Float32(656.04),
                            },
                            Text: sdk.String("dolor"),
                            Words: []shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                    Confidence: sdk.Float32(3694.9),
                                    EndOffset: sdk.String("consequuntur"),
                                    StartOffset: sdk.String("ipsa"),
                                    Word: sdk.String("quas"),
                                },
                                shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                    Confidence: sdk.Float32(9111.98),
                                    EndOffset: sdk.String("impedit"),
                                    StartOffset: sdk.String("officiis"),
                                    Word: sdk.String("esse"),
                                },
                                shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                    Confidence: sdk.Float32(8972.77),
                                    EndOffset: sdk.String("sed"),
                                    StartOffset: sdk.String("veniam"),
                                    Word: sdk.String("nesciunt"),
                                },
                                shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                    Confidence: sdk.Float32(7129.27),
                                    EndOffset: sdk.String("eum"),
                                    StartOffset: sdk.String("vel"),
                                    Word: sdk.String("voluptatum"),
                                },
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment{
                            ChannelTag: sdk.Int(301692),
                            Confidence: sdk.Float32(3494.4),
                            DialogflowSegmentMetadata: &shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata{
                                SmartReplyAllowlistCovered: sdk.Bool(false),
                            },
                            LanguageCode: sdk.String("ab"),
                            MessageTime: sdk.String("porro"),
                            SegmentParticipant: &shared.GoogleCloudContactcenterinsightsV1ConversationParticipant{
                                DialogflowParticipant: sdk.String("autem"),
                                DialogflowParticipantName: sdk.String("nobis"),
                                ObfuscatedExternalUserID: sdk.String("laboriosam"),
                                Role: shared.GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnumAnyAgent.ToPointer(),
                                UserID: sdk.String("consequuntur"),
                            },
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(289.52),
                                Score: sdk.Float32(3502.07),
                            },
                            Text: sdk.String("necessitatibus"),
                            Words: []shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                    Confidence: sdk.Float32(3925.69),
                                    EndOffset: sdk.String("at"),
                                    StartOffset: sdk.String("vero"),
                                    Word: sdk.String("est"),
                                },
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment{
                            ChannelTag: sdk.Int(690785),
                            Confidence: sdk.Float32(1927.18),
                            DialogflowSegmentMetadata: &shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata{
                                SmartReplyAllowlistCovered: sdk.Bool(false),
                            },
                            LanguageCode: sdk.String("doloribus"),
                            MessageTime: sdk.String("repudiandae"),
                            SegmentParticipant: &shared.GoogleCloudContactcenterinsightsV1ConversationParticipant{
                                DialogflowParticipant: sdk.String("optio"),
                                DialogflowParticipantName: sdk.String("occaecati"),
                                ObfuscatedExternalUserID: sdk.String("nemo"),
                                Role: shared.GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnumAutomatedAgent.ToPointer(),
                                UserID: sdk.String("blanditiis"),
                            },
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: sdk.Float32(6423.52),
                                Score: sdk.Float32(3763.89),
                            },
                            Text: sdk.String("numquam"),
                            Words: []shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                    Confidence: sdk.Float32(5510.79),
                                    EndOffset: sdk.String("eius"),
                                    StartOffset: sdk.String("aspernatur"),
                                    Word: sdk.String("ducimus"),
                                },
                                shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo{
                                    Confidence: sdk.Float32(2005.16),
                                    EndOffset: sdk.String("fuga"),
                                    StartOffset: sdk.String("laudantium"),
                                    Word: sdk.String("incidunt"),
                                },
                            },
                        },
                    },
                },
                TTL: sdk.String("quasi"),
            },
            ConversationID: sdk.String("rem"),
            Parent: sdk.String("fugiat"),
            RedactionConfig: &shared.GoogleCloudContactcenterinsightsV1RedactionConfig{
                DeidentifyTemplate: sdk.String("dicta"),
                InspectTemplate: sdk.String("nisi"),
            },
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("soluta"),
        Parent: "alias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.ContactcenterinsightsProjectsLocationsConversationsUploadSecurity{
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

## ContactcenterinsightsProjectsLocationsInsightsdataExport

Export insights data to a destination defined in the request body.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsInsightsdataExport(ctx, operations.ContactcenterinsightsProjectsLocationsInsightsdataExportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest: &shared.GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest{
            BigQueryDestination: &shared.GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination{
                Dataset: sdk.String("magni"),
                ProjectID: sdk.String("inventore"),
                Table: sdk.String("fuga"),
            },
            Filter: sdk.String("accusamus"),
            KmsKey: sdk.String("voluptatibus"),
            Parent: sdk.String("distinctio"),
            WriteDisposition: shared.GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnumWriteTruncate.ToPointer(),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("temporibus"),
        Parent: "quos",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.ContactcenterinsightsProjectsLocationsInsightsdataExportSecurity{
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

## ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats

Gets an issue model's statistics.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats(ctx, operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("vero"),
        IssueModel: "voluptatem",
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("non"),
    }, operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsIssueModelsCreate

Creates an issue model.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsIssueModelsCreate(ctx, operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudContactcenterinsightsV1IssueModelInput: &shared.GoogleCloudContactcenterinsightsV1IssueModelInput{
            DisplayName: sdk.String("enim"),
            InputDataConfig: &shared.GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput{
                Filter: sdk.String("sint"),
                Medium: shared.GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnumChat.ToPointer(),
            },
            Name: sdk.String("Claude Hickle"),
            TrainingStats: &shared.GoogleCloudContactcenterinsightsV1IssueModelLabelStats{
                AnalyzedConversationsCount: sdk.String("quis"),
                IssueStats: map[string]shared.GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats{
                    "accusamus": shared.GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats{
                        DisplayName: sdk.String("impedit"),
                        Issue: sdk.String("hic"),
                        LabeledConversationsCount: sdk.String("necessitatibus"),
                    },
                    "asperiores": shared.GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats{
                        DisplayName: sdk.String("ex"),
                        Issue: sdk.String("voluptas"),
                        LabeledConversationsCount: sdk.String("debitis"),
                    },
                    "delectus": shared.GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats{
                        DisplayName: sdk.String("quae"),
                        Issue: sdk.String("minus"),
                        LabeledConversationsCount: sdk.String("fuga"),
                    },
                },
                UnclassifiedConversationsCount: sdk.String("laborum"),
            },
        },
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("magni"),
        Parent: "soluta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity{
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

## ContactcenterinsightsProjectsLocationsIssueModelsDeploy

Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsIssueModelsDeploy(ctx, operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudContactcenterinsightsV1DeployIssueModelRequest: &shared.GoogleCloudContactcenterinsightsV1DeployIssueModelRequest{
            Name: sdk.String("Lillian Kunde"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("odit"),
        Key: sdk.String("voluptatibus"),
        Name: "Dr. Megan Spinka",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("porro"),
    }, operations.ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity{
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

## ContactcenterinsightsProjectsLocationsIssueModelsIssuesList

Lists issues.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsIssueModelsIssuesList(ctx, operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("vel"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("beatae"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("velit"),
    }, operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudContactcenterinsightsV1ListIssuesResponse != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsIssueModelsList

Lists issue models.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsIssueModelsList(ctx, operations.ContactcenterinsightsProjectsLocationsIssueModelsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("iste"),
        Parent: "itaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("itaque"),
    }, operations.ContactcenterinsightsProjectsLocationsIssueModelsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudContactcenterinsightsV1ListIssueModelsResponse != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsIssueModelsUndeploy

Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsIssueModelsUndeploy(ctx, operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest: &shared.GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest{
            Name: sdk.String("Kyle Fahey Jr."),
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("ea"),
        Key: sdk.String("quidem"),
        Name: "Flora Schowalter",
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity{
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

## ContactcenterinsightsProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsOperationsCancel(ctx, operations.ContactcenterinsightsProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("corporis"),
        Name: "Jeremiah Koch PhD",
        OauthToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("inventore"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.ContactcenterinsightsProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsOperationsList(ctx, operations.ContactcenterinsightsProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("nemo"),
        Filter: sdk.String("soluta"),
        Key: sdk.String("libero"),
        Name: "Omar Kuhlman Sr.",
        OauthToken: sdk.String("vel"),
        PageSize: sdk.Int64(64435),
        PageToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.ContactcenterinsightsProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsPhraseMatchersCreate

Creates a phrase matcher.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsPhraseMatchersCreate(ctx, operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudContactcenterinsightsV1PhraseMatcherInput: &shared.GoogleCloudContactcenterinsightsV1PhraseMatcherInput{
            Active: sdk.Bool(false),
            DisplayName: sdk.String("et"),
            Name: sdk.String("Lindsay Stiedemann"),
            PhraseMatchRuleGroups: []shared.GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup{
                shared.GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup{
                    PhraseMatchRules: []shared.GoogleCloudContactcenterinsightsV1PhraseMatchRule{
                        shared.GoogleCloudContactcenterinsightsV1PhraseMatchRule{
                            Config: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig{
                                ExactMatchConfig: &shared.GoogleCloudContactcenterinsightsV1ExactMatchConfig{
                                    CaseSensitive: sdk.Bool(false),
                                },
                            },
                            Negated: sdk.Bool(false),
                            Query: sdk.String("nostrum"),
                        },
                    },
                    Type: shared.GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnumAllOf.ToPointer(),
                },
            },
            RoleMatch: shared.GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnumEndUser.ToPointer(),
            Type: shared.GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnumPhraseMatcherTypeUnspecified.ToPointer(),
            VersionTag: sdk.String("id"),
        },
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("quos"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("sit"),
        Parent: "iusto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudContactcenterinsightsV1PhraseMatcher != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsPhraseMatchersList

Lists phrase matchers.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsPhraseMatchersList(ctx, operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("distinctio"),
        Filter: sdk.String("voluptatem"),
        Key: sdk.String("autem"),
        OauthToken: sdk.String("esse"),
        PageSize: sdk.Int64(172951),
        PageToken: sdk.String("assumenda"),
        Parent: "beatae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("facere"),
        UploadProtocol: sdk.String("corrupti"),
    }, operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsViewsCreate

Creates a view.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsViewsCreate(ctx, operations.ContactcenterinsightsProjectsLocationsViewsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudContactcenterinsightsV1ViewInput: &shared.GoogleCloudContactcenterinsightsV1ViewInput{
            DisplayName: sdk.String("provident"),
            Name: sdk.String("Terence Reynolds"),
            Value: sdk.String("autem"),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("voluptatibus"),
        Parent: "cum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("quia"),
    }, operations.ContactcenterinsightsProjectsLocationsViewsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudContactcenterinsightsV1View != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsViewsDelete

Deletes a view.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsViewsDelete(ctx, operations.ContactcenterinsightsProjectsLocationsViewsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("expedita"),
        Force: sdk.Bool(false),
        Key: sdk.String("officiis"),
        Name: "Rosemarie Kub",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("earum"),
    }, operations.ContactcenterinsightsProjectsLocationsViewsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsViewsGet

Gets a view.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsViewsGet(ctx, operations.ContactcenterinsightsProjectsLocationsViewsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("quis"),
        Name: "Lindsey Kreiger",
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("nesciunt"),
        View: operations.ContactcenterinsightsProjectsLocationsViewsGetViewEnumBasic.ToPointer(),
    }, operations.ContactcenterinsightsProjectsLocationsViewsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudContactcenterinsightsV1View != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsViewsList

Lists views.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsViewsList(ctx, operations.ContactcenterinsightsProjectsLocationsViewsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("expedita"),
        PageSize: sdk.Int64(532669),
        PageToken: sdk.String("cupiditate"),
        Parent: "minima",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("neque"),
    }, operations.ContactcenterinsightsProjectsLocationsViewsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudContactcenterinsightsV1ListViewsResponse != nil {
        // handle response
    }
}
```

## ContactcenterinsightsProjectsLocationsViewsPatch

Updates a view.

### Example Usage

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
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsViewsPatch(ctx, operations.ContactcenterinsightsProjectsLocationsViewsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudContactcenterinsightsV1ViewInput: &shared.GoogleCloudContactcenterinsightsV1ViewInput{
            DisplayName: sdk.String("minus"),
            Name: sdk.String("Emma Herzog"),
            Value: sdk.String("maiores"),
        },
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("ratione"),
        Key: sdk.String("labore"),
        Name: "Sergio Hirthe",
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UpdateMask: sdk.String("nostrum"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.ContactcenterinsightsProjectsLocationsViewsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudContactcenterinsightsV1View != nil {
        // handle response
    }
}
```
