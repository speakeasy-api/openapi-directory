# projects

### Available Operations

* [contactcenterinsightsProjectsLocationsConversationsAnalysesCreate](#contactcenterinsightsprojectslocationsconversationsanalysescreate) - Creates an analysis. The long running operation is done when the analysis has completed.
* [contactcenterinsightsProjectsLocationsConversationsAnalysesList](#contactcenterinsightsprojectslocationsconversationsanalyseslist) - Lists analyses.
* [contactcenterinsightsProjectsLocationsConversationsBulkAnalyze](#contactcenterinsightsprojectslocationsconversationsbulkanalyze) - Analyzes multiple conversations in a single request.
* [contactcenterinsightsProjectsLocationsConversationsCalculateStats](#contactcenterinsightsprojectslocationsconversationscalculatestats) - Gets conversation statistics.
* [contactcenterinsightsProjectsLocationsConversationsCreate](#contactcenterinsightsprojectslocationsconversationscreate) - Creates a conversation.
* [contactcenterinsightsProjectsLocationsConversationsIngest](#contactcenterinsightsprojectslocationsconversationsingest) - Imports conversations and processes them according to the user's configuration.
* [contactcenterinsightsProjectsLocationsConversationsList](#contactcenterinsightsprojectslocationsconversationslist) - Lists conversations.
* [contactcenterinsightsProjectsLocationsConversationsUpload](#contactcenterinsightsprojectslocationsconversationsupload) - Create a longrunning conversation upload operation. This method differs from CreateConversation by allowing audio transcription and optional DLP redaction.
* [contactcenterinsightsProjectsLocationsInsightsdataExport](#contactcenterinsightsprojectslocationsinsightsdataexport) - Export insights data to a destination defined in the request body.
* [contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats](#contactcenterinsightsprojectslocationsissuemodelscalculateissuemodelstats) - Gets an issue model's statistics.
* [contactcenterinsightsProjectsLocationsIssueModelsCreate](#contactcenterinsightsprojectslocationsissuemodelscreate) - Creates an issue model.
* [contactcenterinsightsProjectsLocationsIssueModelsDeploy](#contactcenterinsightsprojectslocationsissuemodelsdeploy) - Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
* [contactcenterinsightsProjectsLocationsIssueModelsIssuesList](#contactcenterinsightsprojectslocationsissuemodelsissueslist) - Lists issues.
* [contactcenterinsightsProjectsLocationsIssueModelsList](#contactcenterinsightsprojectslocationsissuemodelslist) - Lists issue models.
* [contactcenterinsightsProjectsLocationsIssueModelsUndeploy](#contactcenterinsightsprojectslocationsissuemodelsundeploy) - Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
* [contactcenterinsightsProjectsLocationsOperationsCancel](#contactcenterinsightsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [contactcenterinsightsProjectsLocationsOperationsList](#contactcenterinsightsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [contactcenterinsightsProjectsLocationsPhraseMatchersCreate](#contactcenterinsightsprojectslocationsphrasematcherscreate) - Creates a phrase matcher.
* [contactcenterinsightsProjectsLocationsPhraseMatchersList](#contactcenterinsightsprojectslocationsphrasematcherslist) - Lists phrase matchers.
* [contactcenterinsightsProjectsLocationsViewsCreate](#contactcenterinsightsprojectslocationsviewscreate) - Creates a view.
* [contactcenterinsightsProjectsLocationsViewsDelete](#contactcenterinsightsprojectslocationsviewsdelete) - Deletes a view.
* [contactcenterinsightsProjectsLocationsViewsGet](#contactcenterinsightsprojectslocationsviewsget) - Gets a view.
* [contactcenterinsightsProjectsLocationsViewsList](#contactcenterinsightsprojectslocationsviewslist) - Lists views.
* [contactcenterinsightsProjectsLocationsViewsPatch](#contactcenterinsightsprojectslocationsviewspatch) - Updates a view.

## contactcenterinsightsProjectsLocationsConversationsAnalysesCreate

Creates an analysis. The long running operation is done when the analysis has completed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnalysisInput;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnalysisResult;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1CallAnnotation;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Entity;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1EntityMentionData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1EntityTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Intent;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IntentMatchData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueAssignment;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueMatchData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueModelResult;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1SentimentData;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest req = new ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest("facere") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudContactcenterinsightsV1AnalysisInput = new GoogleCloudContactcenterinsightsV1AnalysisInput() {{
                    analysisResult = new GoogleCloudContactcenterinsightsV1AnalysisResult() {{
                        callAnalysisMetadata = new GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata() {{
                            annotations = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1CallAnnotation[]{{
                                add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                    annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 675439;
                                        wordIndex = 881104;
                                    }};
                                    annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 249796;
                                        wordIndex = 581273;
                                    }};
                                    channelTag = 313218;
                                    entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                        entityUniqueId = "accusamus";
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 9654.17;
                                            score = 6925.32;
                                        }};
                                        type = GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum.PROPER;
                                    }};
                                    holdData = new java.util.HashMap<String, Object>() {{
                                        put("id", "blanditiis");
                                        put("deleniti", "sapiente");
                                        put("amet", "deserunt");
                                    }};
                                    intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                        intentUniqueId = "nisi";
                                    }};
                                    interruptionData = new java.util.HashMap<String, Object>() {{
                                        put("natus", "omnis");
                                        put("molestiae", "perferendis");
                                    }};
                                    issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                        issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "nihil";
                                            issue = "magnam";
                                            score = 7160.75;
                                        }};
                                    }};
                                    phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "id";
                                        phraseMatcher = "labore";
                                    }};
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 2900.77;
                                        score = 3834.62;
                                    }};
                                    silenceData = new java.util.HashMap<String, Object>() {{
                                        put("nobis", "eum");
                                        put("vero", "aspernatur");
                                        put("architecto", "magnam");
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                    annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 92373;
                                        wordIndex = 569965;
                                    }};
                                    annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 354047;
                                        wordIndex = 590873;
                                    }};
                                    channelTag = 551816;
                                    entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                        entityUniqueId = "sint";
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 336.25;
                                            score = 6532.01;
                                        }};
                                        type = GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum.COMMON;
                                    }};
                                    holdData = new java.util.HashMap<String, Object>() {{
                                        put("ad", "eum");
                                        put("dolor", "necessitatibus");
                                        put("odit", "nemo");
                                    }};
                                    intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                        intentUniqueId = "quasi";
                                    }};
                                    interruptionData = new java.util.HashMap<String, Object>() {{
                                        put("doloribus", "debitis");
                                        put("eius", "maxime");
                                    }};
                                    issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                        issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "deleniti";
                                            issue = "facilis";
                                            score = 4479.26;
                                        }};
                                    }};
                                    phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "architecto";
                                        phraseMatcher = "architecto";
                                    }};
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 9194.83;
                                        score = 3523.12;
                                    }};
                                    silenceData = new java.util.HashMap<String, Object>() {{
                                        put("nihil", "repellat");
                                        put("quibusdam", "sed");
                                        put("saepe", "pariatur");
                                    }};
                                }}),
                            }};
                            entities = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Entity>() {{
                                put("consequuntur", new GoogleCloudContactcenterinsightsV1Entity() {{
                                    displayName = "praesentium";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("magni", "sunt");
                                        put("quo", "illum");
                                        put("pariatur", "maxime");
                                    }};
                                    salience = 4113.97;
                                    sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 5691.01;
                                        score = 1399.72;
                                    }};
                                    type = GoogleCloudContactcenterinsightsV1EntityTypeEnum.WORK_OF_ART;
                                }});
                            }};
                            intents = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Intent>() {{
                                put("ab", new GoogleCloudContactcenterinsightsV1Intent() {{
                                    displayName = "maiores";
                                    id = "b576b0d5-f0d3-40c5-bbb2-587053202c73";
                                }});
                            }};
                            issueModelResult = new GoogleCloudContactcenterinsightsV1IssueModelResult() {{
                                issueModel = "vero";
                                issues = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueAssignment[]{{
                                    add(new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                        displayName = "hic";
                                        issue = "recusandae";
                                        score = 6082.53;
                                    }}),
                                    add(new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                        displayName = "facilis";
                                        issue = "perspiciatis";
                                        score = 318.38;
                                    }}),
                                }};
                            }};;
                            phraseMatchers = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchData>() {{
                                put("consequuntur", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                    displayName = "blanditiis";
                                    phraseMatcher = "error";
                                }});
                                put("eaque", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                    displayName = "occaecati";
                                    phraseMatcher = "rerum";
                                }});
                                put("adipisci", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                    displayName = "asperiores";
                                    phraseMatcher = "earum";
                                }});
                                put("modi", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                    displayName = "iste";
                                    phraseMatcher = "dolorum";
                                }});
                            }};
                            sentiments = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[]{{
                                add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                    channelTag = 864282;
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 5899.1;
                                        score = 7508.44;
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                    channelTag = 730122;
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 9644.9;
                                        score = 3119.45;
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                    channelTag = 554242;
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 3982.21;
                                        score = 2123.9;
                                    }};
                                }}),
                            }};
                        }};;
                        endTime = "dolorem";
                    }};;
                    annotatorSelector = new GoogleCloudContactcenterinsightsV1AnnotatorSelector() {{
                        issueModels = new String[]{{
                            add("qui"),
                        }};
                        phraseMatchers = new String[]{{
                            add("hic"),
                        }};
                        runEntityAnnotator = false;
                        runIntentAnnotator = false;
                        runInterruptionAnnotator = false;
                        runIssueModelAnnotator = false;
                        runPhraseMatcherAnnotator = false;
                        runSentimentAnnotator = false;
                        runSilenceAnnotator = false;
                        runSummarizationAnnotator = false;
                        summarizationConfig = new GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig() {{
                            conversationProfile = "excepturi";
                            summarizationModel = GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum.BASELINE_MODEL;
                        }};;
                    }};;
                    name = "Marian Wisozk";
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "ipsa";
                key = "iure";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "accusamus";
                uploadProtocol = "quidem";
            }};            

            ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse res = sdk.projects.contactcenterinsightsProjectsLocationsConversationsAnalysesCreate(req, new ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity("voluptatibus", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsConversationsAnalysesList

Lists analyses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsConversationsAnalysesListRequest req = new ContactcenterinsightsProjectsLocationsConversationsAnalysesListRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "atque";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "ab";
                filter = "soluta";
                key = "dolorum";
                oauthToken = "iusto";
                pageSize = 453697L;
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "omnis";
                uploadProtocol = "necessitatibus";
            }};            

            ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse res = sdk.projects.contactcenterinsightsProjectsLocationsConversationsAnalysesList(req, new ContactcenterinsightsProjectsLocationsConversationsAnalysesListSecurity("distinctio", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudContactcenterinsightsV1ListAnalysesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsConversationsBulkAnalyze

Analyzes multiple conversations in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest req = new ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest("nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest = new GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest() {{
                    analysisPercentage = 4560.15;
                    annotatorSelector = new GoogleCloudContactcenterinsightsV1AnnotatorSelector() {{
                        issueModels = new String[]{{
                            add("saepe"),
                            add("eius"),
                            add("aspernatur"),
                        }};
                        phraseMatchers = new String[]{{
                            add("amet"),
                        }};
                        runEntityAnnotator = false;
                        runIntentAnnotator = false;
                        runInterruptionAnnotator = false;
                        runIssueModelAnnotator = false;
                        runPhraseMatcherAnnotator = false;
                        runSentimentAnnotator = false;
                        runSilenceAnnotator = false;
                        runSummarizationAnnotator = false;
                        summarizationConfig = new GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig() {{
                            conversationProfile = "optio";
                            summarizationModel = GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum.BASELINE_MODEL;
                        }};;
                    }};;
                    filter = "ad";
                    parent = "saepe";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "minima";
                key = "repellendus";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "alias";
                uploadProtocol = "at";
            }};            

            ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse res = sdk.projects.contactcenterinsightsProjectsLocationsConversationsBulkAnalyze(req, new ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity("quaerat", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsConversationsCalculateStats

Gets conversation statistics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest req = new ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest("vel") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "a";
                filter = "esse";
                key = "harum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "quisquam";
                uploadProtocol = "tenetur";
            }};            

            ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse res = sdk.projects.contactcenterinsightsProjectsLocationsConversationsCalculateStats(req, new ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity("amet", "tempore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudContactcenterinsightsV1CalculateStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsConversationsCreate

Creates a conversation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsCreateRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsCreateResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnalysisInput;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnalysisResult;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1CallAnnotation;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationCallMetadata;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationDataSourceInput;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationInput;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationMediumEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationParticipant;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationTranscript;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1DialogflowSourceInput;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Entity;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1EntityMentionData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1EntityTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Intent;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IntentMatchData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueAssignment;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueMatchData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueModelResult;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1SentimentData;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsConversationsCreateRequest req = new ContactcenterinsightsProjectsLocationsConversationsCreateRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudContactcenterinsightsV1ConversationInput = new GoogleCloudContactcenterinsightsV1ConversationInput() {{
                    agentId = "enim";
                    callMetadata = new GoogleCloudContactcenterinsightsV1ConversationCallMetadata() {{
                        agentChannel = 213312;
                        customerChannel = 957451;
                    }};;
                    dataSource = new GoogleCloudContactcenterinsightsV1ConversationDataSourceInput() {{
                        dialogflowSource = new GoogleCloudContactcenterinsightsV1DialogflowSourceInput() {{
                            audioUri = "totam";
                        }};;
                        gcsSource = new GoogleCloudContactcenterinsightsV1GcsSource() {{
                            audioUri = "nihil";
                            transcriptUri = "sit";
                        }};;
                    }};;
                    expireTime = "expedita";
                    labels = new java.util.HashMap<String, String>() {{
                        put("sed", "vel");
                    }};
                    languageCode = "libero";
                    latestAnalysis = new GoogleCloudContactcenterinsightsV1AnalysisInput() {{
                        analysisResult = new GoogleCloudContactcenterinsightsV1AnalysisResult() {{
                            callAnalysisMetadata = new GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata() {{
                                annotations = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1CallAnnotation[]{{
                                    add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                        annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                            transcriptIndex = 646265;
                                            wordIndex = 463575;
                                        }};
                                        annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                            transcriptIndex = 214880;
                                            wordIndex = 277628;
                                        }};
                                        channelTag = 186458;
                                        entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                            entityUniqueId = "cupiditate";
                                            sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                magnitude = 8075.81;
                                                score = 8638.56;
                                            }};
                                            type = GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum.COMMON;
                                        }};
                                        holdData = new java.util.HashMap<String, Object>() {{
                                            put("laborum", "totam");
                                        }};
                                        intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                            intentUniqueId = "incidunt";
                                        }};
                                        interruptionData = new java.util.HashMap<String, Object>() {{
                                            put("dolores", "distinctio");
                                        }};
                                        issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                            issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                                displayName = "facilis";
                                                issue = "aliquid";
                                                score = 4631.5;
                                            }};
                                        }};
                                        phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                            displayName = "molestias";
                                            phraseMatcher = "temporibus";
                                        }};
                                        sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 1832.8;
                                            score = 2048.65;
                                        }};
                                        silenceData = new java.util.HashMap<String, Object>() {{
                                            put("magni", "odio");
                                        }};
                                    }}),
                                    add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                        annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                            transcriptIndex = 124833;
                                            wordIndex = 355613;
                                        }};
                                        annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                            transcriptIndex = 722081;
                                            wordIndex = 940432;
                                        }};
                                        channelTag = 30452;
                                        entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                            entityUniqueId = "cumque";
                                            sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                magnitude = 7469.94;
                                                score = 7486.64;
                                            }};
                                            type = GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum.MENTION_TYPE_UNSPECIFIED;
                                        }};
                                        holdData = new java.util.HashMap<String, Object>() {{
                                            put("ipsum", "veritatis");
                                            put("nobis", "quos");
                                            put("tempore", "cupiditate");
                                            put("aperiam", "delectus");
                                        }};
                                        intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                            intentUniqueId = "dolorem";
                                        }};
                                        interruptionData = new java.util.HashMap<String, Object>() {{
                                            put("labore", "adipisci");
                                            put("dolorum", "architecto");
                                        }};
                                        issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                            issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                                displayName = "quae";
                                                issue = "aut";
                                                score = 5556.49;
                                            }};
                                        }};
                                        phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                            displayName = "itaque";
                                            phraseMatcher = "consequatur";
                                        }};
                                        sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 6699.17;
                                            score = 8330.38;
                                        }};
                                        silenceData = new java.util.HashMap<String, Object>() {{
                                            put("doloribus", "ut");
                                            put("facilis", "cupiditate");
                                            put("qui", "quae");
                                            put("laudantium", "odio");
                                        }};
                                    }}),
                                }};
                                entities = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Entity>() {{
                                    put("voluptatibus", new GoogleCloudContactcenterinsightsV1Entity() {{
                                        displayName = "quisquam";
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("omnis", "quis");
                                            put("ipsum", "delectus");
                                            put("voluptate", "consectetur");
                                            put("vero", "tenetur");
                                        }};
                                        salience = 4922.68;
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 9413.78;
                                            score = 7155.61;
                                        }};
                                        type = GoogleCloudContactcenterinsightsV1EntityTypeEnum.DATE;
                                    }});
                                    put("odio", new GoogleCloudContactcenterinsightsV1Entity() {{
                                        displayName = "similique";
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("vero", "ducimus");
                                            put("dolore", "quibusdam");
                                            put("illum", "sequi");
                                        }};
                                        salience = 6178.77;
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 7733.26;
                                            score = 132.36;
                                        }};
                                        type = GoogleCloudContactcenterinsightsV1EntityTypeEnum.PRICE;
                                    }});
                                    put("exercitationem", new GoogleCloudContactcenterinsightsV1Entity() {{
                                        displayName = "nulla";
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("porro", "maiores");
                                        }};
                                        salience = 9850.33;
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 4783.7;
                                            score = 7535.7;
                                        }};
                                        type = GoogleCloudContactcenterinsightsV1EntityTypeEnum.CONSUMER_GOOD;
                                    }});
                                }};
                                intents = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Intent>() {{
                                    put("officia", new GoogleCloudContactcenterinsightsV1Intent() {{
                                        displayName = "tempora";
                                        id = "5626d436-813f-416d-9f5f-ce6c556146c3";
                                    }});
                                }};
                                issueModelResult = new GoogleCloudContactcenterinsightsV1IssueModelResult() {{
                                    issueModel = "recusandae";
                                    issues = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueAssignment[]{{
                                        add(new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "minima";
                                            issue = "eaque";
                                            score = 9528.71;
                                        }}),
                                    }};
                                }};;
                                phraseMatchers = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchData>() {{
                                    put("aut", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "aut";
                                        phraseMatcher = "deleniti";
                                    }});
                                    put("impedit", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "aliquam";
                                        phraseMatcher = "fugit";
                                    }});
                                    put("accusamus", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "inventore";
                                        phraseMatcher = "non";
                                    }});
                                }};
                                sentiments = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[]{{
                                    add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                        channelTag = 677412;
                                        sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 6720.48;
                                            score = 8104.24;
                                        }};
                                    }}),
                                }};
                            }};;
                            endTime = "velit";
                        }};;
                        annotatorSelector = new GoogleCloudContactcenterinsightsV1AnnotatorSelector() {{
                            issueModels = new String[]{{
                                add("autem"),
                                add("nobis"),
                            }};
                            phraseMatchers = new String[]{{
                                add("assumenda"),
                                add("nulla"),
                                add("voluptas"),
                            }};
                            runEntityAnnotator = false;
                            runIntentAnnotator = false;
                            runInterruptionAnnotator = false;
                            runIssueModelAnnotator = false;
                            runPhraseMatcherAnnotator = false;
                            runSentimentAnnotator = false;
                            runSilenceAnnotator = false;
                            runSummarizationAnnotator = false;
                            summarizationConfig = new GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig() {{
                                conversationProfile = "libero";
                                summarizationModel = GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum.SUMMARIZATION_MODEL_UNSPECIFIED;
                            }};;
                        }};;
                        name = "Carrie Cole IV";
                    }};;
                    latestSummary = new GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData() {{
                        answerRecord = "magnam";
                        confidence = 4879.35;
                        conversationModel = "eius";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("esse", "rem");
                            put("fuga", "reprehenderit");
                        }};
                        text = "quidem";
                        textSections = new java.util.HashMap<String, String>() {{
                            put("ut", "eum");
                            put("suscipit", "assumenda");
                            put("eos", "praesentium");
                            put("quisquam", "veritatis");
                        }};
                    }};;
                    medium = GoogleCloudContactcenterinsightsV1ConversationMediumEnum.MEDIUM_UNSPECIFIED;
                    name = "Rickey DuBuque";
                    obfuscatedUserId = "quo";
                    startTime = "fuga";
                    transcript = new GoogleCloudContactcenterinsightsV1ConversationTranscript() {{
                        transcriptSegments = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment[]{{
                            add(new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment() {{
                                channelTag = 178367;
                                confidence = 3738.13;
                                dialogflowSegmentMetadata = new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata() {{
                                    smartReplyAllowlistCovered = false;
                                }};
                                languageCode = "ab";
                                messageTime = "cupiditate";
                                segmentParticipant = new GoogleCloudContactcenterinsightsV1ConversationParticipant() {{
                                    dialogflowParticipant = "consequatur";
                                    dialogflowParticipantName = "tempora";
                                    obfuscatedExternalUserId = "debitis";
                                    role = GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum.HUMAN_AGENT;
                                    userId = "aspernatur";
                                }};
                                sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                    magnitude = 1970.54;
                                    score = 7791.92;
                                }};
                                text = "esse";
                                words = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo[]{{
                                    add(new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo() {{
                                        confidence = 446.12;
                                        endOffset = "distinctio";
                                        startOffset = "quod";
                                        word = "dignissimos";
                                    }}),
                                    add(new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo() {{
                                        confidence = 769.56;
                                        endOffset = "nihil";
                                        startOffset = "totam";
                                        word = "accusamus";
                                    }}),
                                    add(new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo() {{
                                        confidence = 3068.1;
                                        endOffset = "odio";
                                        startOffset = "occaecati";
                                        word = "commodi";
                                    }}),
                                    add(new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo() {{
                                        confidence = 9594.34;
                                        endOffset = "dolores";
                                        startOffset = "deserunt";
                                        word = "molestiae";
                                    }}),
                                }};
                            }}),
                            add(new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment() {{
                                channelTag = 35362;
                                confidence = 7836.48;
                                dialogflowSegmentMetadata = new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata() {{
                                    smartReplyAllowlistCovered = false;
                                }};
                                languageCode = "eum";
                                messageTime = "quas";
                                segmentParticipant = new GoogleCloudContactcenterinsightsV1ConversationParticipant() {{
                                    dialogflowParticipant = "praesentium";
                                    dialogflowParticipantName = "consequuntur";
                                    obfuscatedExternalUserId = "deleniti";
                                    role = GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum.ROLE_UNSPECIFIED;
                                    userId = "fuga";
                                }};
                                sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                    magnitude = 6494.63;
                                    score = 2775.96;
                                }};
                                text = "atque";
                                words = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo[]{{
                                    add(new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo() {{
                                        confidence = 3256.85;
                                        endOffset = "nisi";
                                        startOffset = "fugit";
                                        word = "sapiente";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    ttl = "consequuntur";
                }};;
                accessToken = "ratione";
                alt = AltEnum.JSON;
                callback = "saepe";
                conversationId = "occaecati";
                fields = "atque";
                key = "et";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "accusamus";
                uploadProtocol = "veritatis";
            }};            

            ContactcenterinsightsProjectsLocationsConversationsCreateResponse res = sdk.projects.contactcenterinsightsProjectsLocationsConversationsCreate(req, new ContactcenterinsightsProjectsLocationsConversationsCreateSecurity("esse", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudContactcenterinsightsV1Conversation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsConversationsIngest

Imports conversations and processes them according to the user's configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsIngestRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsIngestResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsIngestSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IngestConversationsRequest;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsConversationsIngestRequest req = new ContactcenterinsightsProjectsLocationsConversationsIngestRequest("nam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudContactcenterinsightsV1IngestConversationsRequest = new GoogleCloudContactcenterinsightsV1IngestConversationsRequest() {{
                    conversationConfig = new GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig() {{
                        agentId = "aliquid";
                    }};;
                    gcsSource = new GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource() {{
                        bucketUri = "quasi";
                    }};;
                    parent = "saepe";
                    transcriptObjectConfig = new GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig() {{
                        medium = GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnum.PHONE_CALL;
                    }};;
                }};;
                accessToken = "harum";
                alt = AltEnum.MEDIA;
                callback = "rerum";
                fields = "occaecati";
                key = "minima";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "sit";
                uploadProtocol = "culpa";
            }};            

            ContactcenterinsightsProjectsLocationsConversationsIngestResponse res = sdk.projects.contactcenterinsightsProjectsLocationsConversationsIngest(req, new ContactcenterinsightsProjectsLocationsConversationsIngestSecurity("tempore", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsConversationsList

Lists conversations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsListRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsListResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsListSecurity;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsConversationsListRequest req = new ContactcenterinsightsProjectsLocationsConversationsListRequest("cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "sapiente";
                filter = "consectetur";
                key = "esse";
                oauthToken = "blanditiis";
                pageSize = 590984L;
                pageToken = "a";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "quas";
                uploadProtocol = "esse";
                view = ContactcenterinsightsProjectsLocationsConversationsListViewEnum.CONVERSATION_VIEW_UNSPECIFIED;
            }};            

            ContactcenterinsightsProjectsLocationsConversationsListResponse res = sdk.projects.contactcenterinsightsProjectsLocationsConversationsList(req, new ContactcenterinsightsProjectsLocationsConversationsListSecurity("a", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudContactcenterinsightsV1ListConversationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsConversationsUpload

Create a longrunning conversation upload operation. This method differs from CreateConversation by allowing audio transcription and optional DLP redaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsUploadRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsUploadResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnalysisInput;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnalysisResult;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1CallAnnotation;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationCallMetadata;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationDataSourceInput;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationInput;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationMediumEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationParticipant;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationTranscript;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1DialogflowSourceInput;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Entity;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1EntityMentionData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1EntityTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Intent;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IntentMatchData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueAssignment;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueMatchData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueModelResult;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1RedactionConfig;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1SentimentData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1UploadConversationRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsConversationsUploadRequest req = new ContactcenterinsightsProjectsLocationsConversationsUploadRequest("sint") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudContactcenterinsightsV1UploadConversationRequestInput = new GoogleCloudContactcenterinsightsV1UploadConversationRequestInput() {{
                    conversation = new GoogleCloudContactcenterinsightsV1ConversationInput() {{
                        agentId = "possimus";
                        callMetadata = new GoogleCloudContactcenterinsightsV1ConversationCallMetadata() {{
                            agentChannel = 157632;
                            customerChannel = 908844;
                        }};;
                        dataSource = new GoogleCloudContactcenterinsightsV1ConversationDataSourceInput() {{
                            dialogflowSource = new GoogleCloudContactcenterinsightsV1DialogflowSourceInput() {{
                                audioUri = "asperiores";
                            }};;
                            gcsSource = new GoogleCloudContactcenterinsightsV1GcsSource() {{
                                audioUri = "facere";
                                transcriptUri = "veritatis";
                            }};;
                        }};;
                        expireTime = "consequuntur";
                        labels = new java.util.HashMap<String, String>() {{
                            put("similique", "culpa");
                        }};
                        languageCode = "aliquid";
                        latestAnalysis = new GoogleCloudContactcenterinsightsV1AnalysisInput() {{
                            analysisResult = new GoogleCloudContactcenterinsightsV1AnalysisResult() {{
                                callAnalysisMetadata = new GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata() {{
                                    annotations = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1CallAnnotation[]{{
                                        add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                            annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                                transcriptIndex = 62713;
                                                wordIndex = 936747;
                                            }};
                                            annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                                transcriptIndex = 424032;
                                                wordIndex = 447378;
                                            }};
                                            channelTag = 258684;
                                            entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                                entityUniqueId = "libero";
                                                sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                    magnitude = 8490.39;
                                                    score = 7422.38;
                                                }};
                                                type = GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum.MENTION_TYPE_UNSPECIFIED;
                                            }};
                                            holdData = new java.util.HashMap<String, Object>() {{
                                                put("sapiente", "dicta");
                                                put("ullam", "reprehenderit");
                                            }};
                                            intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                                intentUniqueId = "ullam";
                                            }};
                                            interruptionData = new java.util.HashMap<String, Object>() {{
                                                put("aut", "voluptatum");
                                                put("qui", "quibusdam");
                                            }};
                                            issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                                issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                                    displayName = "ex";
                                                    issue = "deleniti";
                                                    score = 9292.92;
                                                }};
                                            }};
                                            phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                                displayName = "dolorum";
                                                phraseMatcher = "architecto";
                                            }};
                                            sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                magnitude = 6091.78;
                                                score = 9453.02;
                                            }};
                                            silenceData = new java.util.HashMap<String, Object>() {{
                                                put("at", "et");
                                            }};
                                        }}),
                                        add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                            annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                                transcriptIndex = 454162;
                                                wordIndex = 55965;
                                            }};
                                            annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                                transcriptIndex = 326701;
                                                wordIndex = 86532;
                                            }};
                                            channelTag = 232744;
                                            entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                                entityUniqueId = "adipisci";
                                                sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                    magnitude = 6144.65;
                                                    score = 8395.13;
                                                }};
                                                type = GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum.MENTION_TYPE_UNSPECIFIED;
                                            }};
                                            holdData = new java.util.HashMap<String, Object>() {{
                                                put("aut", "laudantium");
                                                put("eum", "mollitia");
                                                put("ab", "corrupti");
                                            }};
                                            intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                                intentUniqueId = "non";
                                            }};
                                            interruptionData = new java.util.HashMap<String, Object>() {{
                                                put("dolor", "occaecati");
                                            }};
                                            issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                                issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                                    displayName = "numquam";
                                                    issue = "impedit";
                                                    score = 1310.55;
                                                }};
                                            }};
                                            phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                                displayName = "voluptas";
                                                phraseMatcher = "aut";
                                            }};
                                            sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                magnitude = 4910.25;
                                                score = 1154.84;
                                            }};
                                            silenceData = new java.util.HashMap<String, Object>() {{
                                                put("natus", "velit");
                                                put("voluptatibus", "voluptas");
                                                put("asperiores", "aperiam");
                                                put("ea", "quaerat");
                                            }};
                                        }}),
                                        add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                            annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                                transcriptIndex = 162954;
                                                wordIndex = 831520;
                                            }};
                                            annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                                transcriptIndex = 638762;
                                                wordIndex = 807023;
                                            }};
                                            channelTag = 490305;
                                            entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                                entityUniqueId = "officia";
                                                sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                    magnitude = 9894.1;
                                                    score = 3681.02;
                                                }};
                                                type = GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum.MENTION_TYPE_UNSPECIFIED;
                                            }};
                                            holdData = new java.util.HashMap<String, Object>() {{
                                                put("porro", "quod");
                                                put("labore", "ab");
                                            }};
                                            intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                                intentUniqueId = "adipisci";
                                            }};
                                            interruptionData = new java.util.HashMap<String, Object>() {{
                                                put("id", "suscipit");
                                                put("velit", "culpa");
                                                put("est", "recusandae");
                                            }};
                                            issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                                issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                                    displayName = "totam";
                                                    issue = "fugiat";
                                                    score = 4240.89;
                                                }};
                                            }};
                                            phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                                displayName = "ducimus";
                                                phraseMatcher = "quos";
                                            }};
                                            sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                magnitude = 4278.34;
                                                score = 2870.51;
                                            }};
                                            silenceData = new java.util.HashMap<String, Object>() {{
                                                put("facilis", "cum");
                                                put("commodi", "in");
                                                put("corporis", "reiciendis");
                                                put("assumenda", "nemo");
                                            }};
                                        }}),
                                        add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                            annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                                transcriptIndex = 924967;
                                                wordIndex = 397533;
                                            }};
                                            annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                                transcriptIndex = 46007;
                                                wordIndex = 738683;
                                            }};
                                            channelTag = 232627;
                                            entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                                entityUniqueId = "in";
                                                sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                    magnitude = 3485.19;
                                                    score = 9372.85;
                                                }};
                                                type = GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum.COMMON;
                                            }};
                                            holdData = new java.util.HashMap<String, Object>() {{
                                                put("doloribus", "suscipit");
                                                put("reiciendis", "quidem");
                                            }};
                                            intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                                intentUniqueId = "saepe";
                                            }};
                                            interruptionData = new java.util.HashMap<String, Object>() {{
                                                put("dolore", "sunt");
                                                put("asperiores", "adipisci");
                                                put("non", "amet");
                                                put("beatae", "dignissimos");
                                            }};
                                            issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                                issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                                    displayName = "a";
                                                    issue = "debitis";
                                                    score = 2334.2;
                                                }};
                                            }};
                                            phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                                displayName = "corporis";
                                                phraseMatcher = "harum";
                                            }};
                                            sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                magnitude = 3852.37;
                                                score = 583.56;
                                            }};
                                            silenceData = new java.util.HashMap<String, Object>() {{
                                                put("libero", "vitae");
                                                put("accusamus", "similique");
                                                put("tempora", "aspernatur");
                                                put("voluptas", "voluptas");
                                            }};
                                        }}),
                                    }};
                                    entities = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Entity>() {{
                                        put("minima", new GoogleCloudContactcenterinsightsV1Entity() {{
                                            displayName = "nobis";
                                            metadata = new java.util.HashMap<String, String>() {{
                                                put("adipisci", "minus");
                                                put("dolores", "blanditiis");
                                                put("in", "dolore");
                                            }};
                                            salience = 3044.68;
                                            sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                magnitude = 8859.63;
                                                score = 8391.89;
                                            }};
                                            type = GoogleCloudContactcenterinsightsV1EntityTypeEnum.EVENT;
                                        }});
                                        put("adipisci", new GoogleCloudContactcenterinsightsV1Entity() {{
                                            displayName = "cum";
                                            metadata = new java.util.HashMap<String, String>() {{
                                                put("quas", "hic");
                                                put("nesciunt", "culpa");
                                                put("corrupti", "pariatur");
                                            }};
                                            salience = 5196.43;
                                            sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                magnitude = 9402.1;
                                                score = 3487.83;
                                            }};
                                            type = GoogleCloudContactcenterinsightsV1EntityTypeEnum.ADDRESS;
                                        }});
                                    }};
                                    intents = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Intent>() {{
                                        put("rerum", new GoogleCloudContactcenterinsightsV1Intent() {{
                                            displayName = "sed";
                                            id = "f2fb7b19-4a27-46b2-a916-fe1f08f4294e";
                                        }});
                                    }};
                                    issueModelResult = new GoogleCloudContactcenterinsightsV1IssueModelResult() {{
                                        issueModel = "ipsum";
                                        issues = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueAssignment[]{{
                                            add(new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                                displayName = "occaecati";
                                                issue = "quos";
                                                score = 9757.52;
                                            }}),
                                            add(new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                                displayName = "tempora";
                                                issue = "tempora";
                                                score = 4554.44;
                                            }}),
                                        }};
                                    }};;
                                    phraseMatchers = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchData>() {{
                                        put("ex", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                            displayName = "sit";
                                            phraseMatcher = "non";
                                        }});
                                        put("officiis", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                            displayName = "praesentium";
                                            phraseMatcher = "facilis";
                                        }});
                                        put("quaerat", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                            displayName = "incidunt";
                                            phraseMatcher = "ipsam";
                                        }});
                                        put("debitis", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                            displayName = "rem";
                                            phraseMatcher = "sit";
                                        }});
                                    }};
                                    sentiments = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[]{{
                                        add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                            channelTag = 625637;
                                            sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                magnitude = 3335.07;
                                                score = 3295.43;
                                            }};
                                        }}),
                                        add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                            channelTag = 924159;
                                            sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                magnitude = 9671.22;
                                                score = 8623.19;
                                            }};
                                        }}),
                                        add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                            channelTag = 168576;
                                            sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                magnitude = 486.9;
                                                score = 9014.83;
                                            }};
                                        }}),
                                        add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                            channelTag = 253642;
                                            sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                                magnitude = 3299.35;
                                                score = 4461.35;
                                            }};
                                        }}),
                                    }};
                                }};;
                                endTime = "officiis";
                            }};;
                            annotatorSelector = new GoogleCloudContactcenterinsightsV1AnnotatorSelector() {{
                                issueModels = new String[]{{
                                    add("laudantium"),
                                }};
                                phraseMatchers = new String[]{{
                                    add("praesentium"),
                                    add("cum"),
                                }};
                                runEntityAnnotator = false;
                                runIntentAnnotator = false;
                                runInterruptionAnnotator = false;
                                runIssueModelAnnotator = false;
                                runPhraseMatcherAnnotator = false;
                                runSentimentAnnotator = false;
                                runSilenceAnnotator = false;
                                runSummarizationAnnotator = false;
                                summarizationConfig = new GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig() {{
                                    conversationProfile = "laboriosam";
                                    summarizationModel = GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum.BASELINE_MODEL;
                                }};;
                            }};;
                            name = "Evan Welch";
                        }};;
                        latestSummary = new GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData() {{
                            answerRecord = "neque";
                            confidence = 6771.15;
                            conversationModel = "nostrum";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("dolorum", "corrupti");
                                put("accusamus", "tempora");
                                put("atque", "fugit");
                            }};
                            text = "ut";
                            textSections = new java.util.HashMap<String, String>() {{
                                put("voluptatem", "culpa");
                                put("expedita", "magnam");
                                put("consequatur", "esse");
                                put("ipsam", "sit");
                            }};
                        }};;
                        medium = GoogleCloudContactcenterinsightsV1ConversationMediumEnum.PHONE_CALL;
                        name = "Ms. Lamar Hessel";
                        obfuscatedUserId = "sed";
                        startTime = "sit";
                        transcript = new GoogleCloudContactcenterinsightsV1ConversationTranscript() {{
                            transcriptSegments = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment[]{{
                                add(new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment() {{
                                    channelTag = 342611;
                                    confidence = 9061.72;
                                    dialogflowSegmentMetadata = new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata() {{
                                        smartReplyAllowlistCovered = false;
                                    }};
                                    languageCode = "error";
                                    messageTime = "consequatur";
                                    segmentParticipant = new GoogleCloudContactcenterinsightsV1ConversationParticipant() {{
                                        dialogflowParticipant = "incidunt";
                                        dialogflowParticipantName = "reiciendis";
                                        obfuscatedExternalUserId = "dolorem";
                                        role = GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum.END_USER;
                                        userId = "dicta";
                                    }};
                                    sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 994.16;
                                        score = 5771.4;
                                    }};
                                    text = "labore";
                                    words = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo[]{{
                                        add(new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo() {{
                                            confidence = 5390.74;
                                            endOffset = "laborum";
                                            startOffset = "nam";
                                            word = "tenetur";
                                        }}),
                                        add(new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo() {{
                                            confidence = 3888.67;
                                            endOffset = "alias";
                                            startOffset = "amet";
                                            word = "deserunt";
                                        }}),
                                        add(new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo() {{
                                            confidence = 4548.6;
                                            endOffset = "unde";
                                            startOffset = "reiciendis";
                                            word = "provident";
                                        }}),
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment() {{
                                    channelTag = 833819;
                                    confidence = 9627.71;
                                    dialogflowSegmentMetadata = new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata() {{
                                        smartReplyAllowlistCovered = false;
                                    }};
                                    languageCode = "voluptates";
                                    messageTime = "perferendis";
                                    segmentParticipant = new GoogleCloudContactcenterinsightsV1ConversationParticipant() {{
                                        dialogflowParticipant = "est";
                                        dialogflowParticipantName = "quidem";
                                        obfuscatedExternalUserId = "reprehenderit";
                                        role = GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum.ANY_AGENT;
                                        userId = "fuga";
                                    }};
                                    sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 5098.07;
                                        score = 6485.98;
                                    }};
                                    text = "veniam";
                                    words = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo[]{{
                                        add(new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo() {{
                                            confidence = 7908.4;
                                            endOffset = "repudiandae";
                                            startOffset = "quasi";
                                            word = "atque";
                                        }}),
                                    }};
                                }}),
                            }};
                        }};;
                        ttl = "reprehenderit";
                    }};;
                    conversationId = "asperiores";
                    parent = "totam";
                    redactionConfig = new GoogleCloudContactcenterinsightsV1RedactionConfig() {{
                        deidentifyTemplate = "suscipit";
                        inspectTemplate = "quidem";
                    }};;
                }};;
                accessToken = "maxime";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "amet";
                key = "assumenda";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "error";
                uploadProtocol = "officiis";
            }};            

            ContactcenterinsightsProjectsLocationsConversationsUploadResponse res = sdk.projects.contactcenterinsightsProjectsLocationsConversationsUpload(req, new ContactcenterinsightsProjectsLocationsConversationsUploadSecurity("officiis", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsInsightsdataExport

Export insights data to a destination defined in the request body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsInsightsdataExportRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsInsightsdataExportResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsInsightsdataExportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsInsightsdataExportRequest req = new ContactcenterinsightsProjectsLocationsInsightsdataExportRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudContactcenterinsightsV1ExportInsightsDataRequest = new GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest() {{
                    bigQueryDestination = new GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination() {{
                        dataset = "aspernatur";
                        projectId = "ex";
                        table = "maiores";
                    }};;
                    filter = "corrupti";
                    kmsKey = "at";
                    parent = "error";
                    writeDisposition = GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum.WRITE_TRUNCATE;
                }};;
                accessToken = "suscipit";
                alt = AltEnum.PROTO;
                callback = "atque";
                fields = "atque";
                key = "sunt";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "repellendus";
                uploadProtocol = "labore";
            }};            

            ContactcenterinsightsProjectsLocationsInsightsdataExportResponse res = sdk.projects.contactcenterinsightsProjectsLocationsInsightsdataExport(req, new ContactcenterinsightsProjectsLocationsInsightsdataExportSecurity("reiciendis", "doloremque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats

Gets an issue model's statistics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsRequest req = new ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "enim";
                key = "laboriosam";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "molestias";
                uploadProtocol = "magnam";
            }};            

            ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsResponse res = sdk.projects.contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats(req, new ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsSecurity("saepe", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsIssueModelsCreate

Creates an issue model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueModelInput;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueModelLabelStats;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest req = new ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudContactcenterinsightsV1IssueModelInput = new GoogleCloudContactcenterinsightsV1IssueModelInput() {{
                    displayName = "perspiciatis";
                    inputDataConfig = new GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput() {{
                        filter = "in";
                        medium = GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum.MEDIUM_UNSPECIFIED;
                    }};;
                    name = "Tracy Cronin";
                    trainingStats = new GoogleCloudContactcenterinsightsV1IssueModelLabelStats() {{
                        analyzedConversationsCount = "quis";
                        issueStats = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats>() {{
                            put("error", new GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats() {{
                                displayName = "illo";
                                issue = "corporis";
                                labeledConversationsCount = "quidem";
                            }});
                            put("eveniet", new GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats() {{
                                displayName = "non";
                                issue = "vero";
                                labeledConversationsCount = "doloremque";
                            }});
                        }};
                        unclassifiedConversationsCount = "iure";
                    }};;
                }};;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "quae";
                fields = "molestiae";
                key = "eveniet";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "iure";
                uploadProtocol = "necessitatibus";
            }};            

            ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse res = sdk.projects.contactcenterinsightsProjectsLocationsIssueModelsCreate(req, new ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity("ratione", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsIssueModelsDeploy

Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1DeployIssueModelRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest req = new ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudContactcenterinsightsV1DeployIssueModelRequest = new GoogleCloudContactcenterinsightsV1DeployIssueModelRequest() {{
                    name = "Jim Hammes II";
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "mollitia";
                fields = "voluptas";
                key = "alias";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "dolores";
                uploadProtocol = "id";
            }};            

            ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse res = sdk.projects.contactcenterinsightsProjectsLocationsIssueModelsDeploy(req, new ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity("minima", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsIssueModelsIssuesList

Lists issues.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsIssueModelsIssuesListRequest req = new ContactcenterinsightsProjectsLocationsIssueModelsIssuesListRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quae";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "quaerat";
                key = "molestiae";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "culpa";
                uploadProtocol = "adipisci";
            }};            

            ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse res = sdk.projects.contactcenterinsightsProjectsLocationsIssueModelsIssuesList(req, new ContactcenterinsightsProjectsLocationsIssueModelsIssuesListSecurity("debitis", "laudantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudContactcenterinsightsV1ListIssuesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsIssueModelsList

Lists issue models.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsListRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsListResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsIssueModelsListRequest req = new ContactcenterinsightsProjectsLocationsIssueModelsListRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "quis";
                key = "eum";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "aspernatur";
                uploadProtocol = "ullam";
            }};            

            ContactcenterinsightsProjectsLocationsIssueModelsListResponse res = sdk.projects.contactcenterinsightsProjectsLocationsIssueModelsList(req, new ContactcenterinsightsProjectsLocationsIssueModelsListSecurity("quasi", "animi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudContactcenterinsightsV1ListIssueModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsIssueModelsUndeploy

Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest req = new ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest("nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudContactcenterinsightsV1UndeployIssueModelRequest = new GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest() {{
                    name = "Rufus Okuneva";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "doloribus";
                fields = "ullam";
                key = "in";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "officia";
                uploadProtocol = "laborum";
            }};            

            ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse res = sdk.projects.contactcenterinsightsProjectsLocationsIssueModelsUndeploy(req, new ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity("placeat", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsOperationsCancelRequest req = new ContactcenterinsightsProjectsLocationsOperationsCancelRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "cumque";
                fields = "vitae";
                key = "rerum";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "inventore";
                uploadProtocol = "fugit";
            }};            

            ContactcenterinsightsProjectsLocationsOperationsCancelResponse res = sdk.projects.contactcenterinsightsProjectsLocationsOperationsCancel(req, new ContactcenterinsightsProjectsLocationsOperationsCancelSecurity("cumque", "quae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsOperationsListRequest req = new ContactcenterinsightsProjectsLocationsOperationsListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "rem";
                filter = "at";
                key = "impedit";
                oauthToken = "eos";
                pageSize = 958741L;
                pageToken = "eum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "minima";
                uploadProtocol = "beatae";
            }};            

            ContactcenterinsightsProjectsLocationsOperationsListResponse res = sdk.projects.contactcenterinsightsProjectsLocationsOperationsList(req, new ContactcenterinsightsProjectsLocationsOperationsListSecurity("cupiditate", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsPhraseMatchersCreate

Creates a phrase matcher.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ExactMatchConfig;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchRule;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatcherInput;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsPhraseMatchersCreateRequest req = new ContactcenterinsightsProjectsLocationsPhraseMatchersCreateRequest("earum") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudContactcenterinsightsV1PhraseMatcherInput = new GoogleCloudContactcenterinsightsV1PhraseMatcherInput() {{
                    active = false;
                    displayName = "hic";
                    name = "Timothy Weber";
                    phraseMatchRuleGroups = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup[]{{
                        add(new GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup() {{
                            phraseMatchRules = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchRule[]{{
                                add(new GoogleCloudContactcenterinsightsV1PhraseMatchRule() {{
                                    config = new GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig() {{
                                        exactMatchConfig = new GoogleCloudContactcenterinsightsV1ExactMatchConfig() {{
                                            caseSensitive = false;
                                        }};
                                    }};
                                    negated = false;
                                    query = "porro";
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1PhraseMatchRule() {{
                                    config = new GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig() {{
                                        exactMatchConfig = new GoogleCloudContactcenterinsightsV1ExactMatchConfig() {{
                                            caseSensitive = false;
                                        }};
                                    }};
                                    negated = false;
                                    query = "suscipit";
                                }}),
                            }};
                            type = GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum.PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED;
                        }}),
                        add(new GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup() {{
                            phraseMatchRules = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchRule[]{{
                                add(new GoogleCloudContactcenterinsightsV1PhraseMatchRule() {{
                                    config = new GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig() {{
                                        exactMatchConfig = new GoogleCloudContactcenterinsightsV1ExactMatchConfig() {{
                                            caseSensitive = false;
                                        }};
                                    }};
                                    negated = false;
                                    query = "cumque";
                                }}),
                            }};
                            type = GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum.ANY_OF;
                        }}),
                        add(new GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup() {{
                            phraseMatchRules = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchRule[]{{
                                add(new GoogleCloudContactcenterinsightsV1PhraseMatchRule() {{
                                    config = new GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig() {{
                                        exactMatchConfig = new GoogleCloudContactcenterinsightsV1ExactMatchConfig() {{
                                            caseSensitive = false;
                                        }};
                                    }};
                                    negated = false;
                                    query = "animi";
                                }}),
                            }};
                            type = GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum.ANY_OF;
                        }}),
                        add(new GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup() {{
                            phraseMatchRules = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchRule[]{{
                                add(new GoogleCloudContactcenterinsightsV1PhraseMatchRule() {{
                                    config = new GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig() {{
                                        exactMatchConfig = new GoogleCloudContactcenterinsightsV1ExactMatchConfig() {{
                                            caseSensitive = false;
                                        }};
                                    }};
                                    negated = false;
                                    query = "consequatur";
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1PhraseMatchRule() {{
                                    config = new GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig() {{
                                        exactMatchConfig = new GoogleCloudContactcenterinsightsV1ExactMatchConfig() {{
                                            caseSensitive = false;
                                        }};
                                    }};
                                    negated = false;
                                    query = "quasi";
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1PhraseMatchRule() {{
                                    config = new GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig() {{
                                        exactMatchConfig = new GoogleCloudContactcenterinsightsV1ExactMatchConfig() {{
                                            caseSensitive = false;
                                        }};
                                    }};
                                    negated = false;
                                    query = "et";
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1PhraseMatchRule() {{
                                    config = new GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig() {{
                                        exactMatchConfig = new GoogleCloudContactcenterinsightsV1ExactMatchConfig() {{
                                            caseSensitive = false;
                                        }};
                                    }};
                                    negated = false;
                                    query = "ducimus";
                                }}),
                            }};
                            type = GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum.ALL_OF;
                        }}),
                    }};
                    roleMatch = GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum.AUTOMATED_AGENT;
                    type = GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum.ALL_OF;
                    versionTag = "adipisci";
                }};;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "nulla";
                key = "necessitatibus";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "nihil";
                uploadProtocol = "molestiae";
            }};            

            ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse res = sdk.projects.contactcenterinsightsProjectsLocationsPhraseMatchersCreate(req, new ContactcenterinsightsProjectsLocationsPhraseMatchersCreateSecurity("dicta", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudContactcenterinsightsV1PhraseMatcher != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsPhraseMatchersList

Lists phrase matchers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest req = new ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "architecto";
                filter = "fugiat";
                key = "doloremque";
                oauthToken = "dicta";
                pageSize = 483706L;
                pageToken = "tempora";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ex";
                uploadProtocol = "consectetur";
            }};            

            ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse res = sdk.projects.contactcenterinsightsProjectsLocationsPhraseMatchersList(req, new ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity("aliquid", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudContactcenterinsightsV1ListPhraseMatchersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsViewsCreate

Creates a view.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsCreateRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsCreateResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ViewInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsViewsCreateRequest req = new ContactcenterinsightsProjectsLocationsViewsCreateRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudContactcenterinsightsV1ViewInput = new GoogleCloudContactcenterinsightsV1ViewInput() {{
                    displayName = "nostrum";
                    name = "Damon Jacobs";
                    value = "aliquid";
                }};;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "voluptas";
                fields = "iste";
                key = "id";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "possimus";
                uploadProtocol = "voluptates";
            }};            

            ContactcenterinsightsProjectsLocationsViewsCreateResponse res = sdk.projects.contactcenterinsightsProjectsLocationsViewsCreate(req, new ContactcenterinsightsProjectsLocationsViewsCreateSecurity("mollitia", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudContactcenterinsightsV1View != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsViewsDelete

Deletes a view.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsDeleteRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsDeleteResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsViewsDeleteRequest req = new ContactcenterinsightsProjectsLocationsViewsDeleteRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deleniti";
                alt = AltEnum.JSON;
                callback = "vitae";
                fields = "repellendus";
                force = false;
                key = "ex";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "ut";
                uploadProtocol = "ad";
            }};            

            ContactcenterinsightsProjectsLocationsViewsDeleteResponse res = sdk.projects.contactcenterinsightsProjectsLocationsViewsDelete(req, new ContactcenterinsightsProjectsLocationsViewsDeleteSecurity("expedita", "voluptatem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsViewsGet

Gets a view.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsGetRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsGetResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsGetSecurity;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsViewsGetRequest req = new ContactcenterinsightsProjectsLocationsViewsGetRequest("molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "voluptatum";
                fields = "omnis";
                key = "veritatis";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "culpa";
                uploadProtocol = "voluptatem";
                view = ContactcenterinsightsProjectsLocationsViewsGetViewEnum.BASIC;
            }};            

            ContactcenterinsightsProjectsLocationsViewsGetResponse res = sdk.projects.contactcenterinsightsProjectsLocationsViewsGet(req, new ContactcenterinsightsProjectsLocationsViewsGetSecurity("officiis", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudContactcenterinsightsV1View != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsViewsList

Lists views.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsListRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsListResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsViewsListRequest req = new ContactcenterinsightsProjectsLocationsViewsListRequest("fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "alias";
                fields = "deleniti";
                key = "earum";
                oauthToken = "ex";
                pageSize = 958308L;
                pageToken = "rem";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "nemo";
                uploadProtocol = "asperiores";
            }};            

            ContactcenterinsightsProjectsLocationsViewsListResponse res = sdk.projects.contactcenterinsightsProjectsLocationsViewsList(req, new ContactcenterinsightsProjectsLocationsViewsListSecurity("ratione", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudContactcenterinsightsV1ListViewsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenterinsightsProjectsLocationsViewsPatch

Updates a view.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsPatchRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsPatchResponse;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsViewsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ViewInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsViewsPatchRequest req = new ContactcenterinsightsProjectsLocationsViewsPatchRequest("perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudContactcenterinsightsV1ViewInput = new GoogleCloudContactcenterinsightsV1ViewInput() {{
                    displayName = "totam";
                    name = "Taylor Reichel";
                    value = "dolor";
                }};;
                accessToken = "aliquam";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "veritatis";
                key = "tempora";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "consequatur";
                updateMask = "architecto";
                uploadType = "sit";
                uploadProtocol = "modi";
            }};            

            ContactcenterinsightsProjectsLocationsViewsPatchResponse res = sdk.projects.contactcenterinsightsProjectsLocationsViewsPatch(req, new ContactcenterinsightsProjectsLocationsViewsPatchSecurity("fugit", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudContactcenterinsightsV1View != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
