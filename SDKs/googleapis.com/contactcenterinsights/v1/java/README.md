# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreatePathParams;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateQueryParams;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnalysisInput;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnalysisResult;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1SentimentData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueModelResult;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueAssignment;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Intent;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1EntityTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Entity;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1CallAnnotation;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueMatchData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IntentMatchData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1EntityMentionData;
import org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest req = new ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest() {{
                security = new ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ContactcenterinsightsProjectsLocationsConversationsAnalysesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleCloudContactcenterinsightsV1AnalysisInput() {{
                    analysisResult = new GoogleCloudContactcenterinsightsV1AnalysisResult() {{
                        callAnalysisMetadata = new GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata() {{
                            annotations = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1CallAnnotation[]{{
                                add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                    annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 437587;
                                        wordIndex = 297534;
                                    }};
                                    annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 891773;
                                        wordIndex = 56713;
                                    }};
                                    channelTag = 963663;
                                    entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                        entityUniqueId = "tempora";
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 3834.41;
                                            score = 4776.65;
                                        }};
                                        type = "COMMON";
                                    }};
                                    holdData = new java.util.HashMap<String, Object>() {{
                                        put("voluptatum", "iusto");
                                        put("excepturi", "nisi");
                                        put("recusandae", "temporibus");
                                        put("ab", "quis");
                                    }};
                                    intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                        intentUniqueId = "veritatis";
                                    }};
                                    interruptionData = new java.util.HashMap<String, Object>() {{
                                        put("perferendis", "ipsam");
                                        put("repellendus", "sapiente");
                                        put("quo", "odit");
                                    }};
                                    issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                        issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "at";
                                            issue = "at";
                                            score = 9786.19;
                                        }};
                                    }};
                                    phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "molestiae";
                                        phraseMatcher = "quod";
                                    }};
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 8009.11;
                                        score = 4614.79;
                                    }};
                                    silenceData = new java.util.HashMap<String, Object>() {{
                                        put("porro", "dolorum");
                                        put("dicta", "nam");
                                        put("officia", "occaecati");
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                    annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 143353;
                                        wordIndex = 537373;
                                    }};
                                    annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 944669;
                                        wordIndex = 758616;
                                    }};
                                    channelTag = 521848;
                                    entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                        entityUniqueId = "beatae";
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 4146.62;
                                            score = 4736;
                                        }};
                                        type = "MENTION_TYPE_UNSPECIFIED";
                                    }};
                                    holdData = new java.util.HashMap<String, Object>() {{
                                        put("impedit", "cum");
                                    }};
                                    intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                        intentUniqueId = "esse";
                                    }};
                                    interruptionData = new java.util.HashMap<String, Object>() {{
                                        put("excepturi", "aspernatur");
                                    }};
                                    issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                        issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "perferendis";
                                            issue = "ad";
                                            score = 6176.36;
                                        }};
                                    }};
                                    phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "sed";
                                        phraseMatcher = "iste";
                                    }};
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 2223.21;
                                        score = 6169.34;
                                    }};
                                    silenceData = new java.util.HashMap<String, Object>() {{
                                        put("hic", "saepe");
                                        put("fuga", "in");
                                    }};
                                }}),
                            }};
                            entities = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Entity>() {{
                                put("iste", new GoogleCloudContactcenterinsightsV1Entity() {{
                                    displayName = "iure";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("quidem", "architecto");
                                        put("ipsa", "reiciendis");
                                        put("est", "mollitia");
                                        put("laborum", "dolores");
                                    }};
                                    salience = 2103.82;
                                    sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 3581.52;
                                        score = 1289.26;
                                    }};
                                    type = "ADDRESS";
                                }});
                                put("enim", new GoogleCloudContactcenterinsightsV1Entity() {{
                                    displayName = "omnis";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("minima", "excepturi");
                                        put("accusantium", "iure");
                                    }};
                                    salience = 6342.74;
                                    sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 9883.74;
                                        score = 9589.5;
                                    }};
                                    type = "PERSON";
                                }});
                            }};
                            intents = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Intent>() {{
                                put("dolorem", new GoogleCloudContactcenterinsightsV1Intent() {{
                                    displayName = "culpa";
                                    id = "consequuntur";
                                }});
                                put("repellat", new GoogleCloudContactcenterinsightsV1Intent() {{
                                    displayName = "mollitia";
                                    id = "occaecati";
                                }});
                                put("numquam", new GoogleCloudContactcenterinsightsV1Intent() {{
                                    displayName = "commodi";
                                    id = "quam";
                                }});
                            }};
                            issueModelResult = new GoogleCloudContactcenterinsightsV1IssueModelResult() {{
                                issueModel = "molestiae";
                                issues = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueAssignment[]{{
                                    add(new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                        displayName = "error";
                                        issue = "quia";
                                        score = 3380.07;
                                    }}),
                                }};
                            }};
                            phraseMatchers = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchData>() {{
                                put("laborum", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                    displayName = "animi";
                                    phraseMatcher = "enim";
                                }});
                            }};
                            sentiments = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[]{{
                                add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                    channelTag = 778346;
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 1965.82;
                                        score = 9495.72;
                                    }};
                                }}),
                            }};
                        }};
                        endTime = "ipsam";
                    }};
                    annotatorSelector = new GoogleCloudContactcenterinsightsV1AnnotatorSelector() {{
                        issueModels = new String[]{{
                            add("possimus"),
                            add("aut"),
                            add("quasi"),
                        }};
                        phraseMatchers = new String[]{{
                            add("temporibus"),
                            add("laborum"),
                            add("quasi"),
                        }};
                        runEntityAnnotator = false;
                        runIntentAnnotator = false;
                        runInterruptionAnnotator = false;
                        runIssueModelAnnotator = false;
                        runPhraseMatcherAnnotator = false;
                        runSentimentAnnotator = false;
                        runSilenceAnnotator = false;
                    }};
                    name = "reiciendis";
                }};
            }};            

            ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse res = sdk.projects.contactcenterinsightsProjectsLocationsConversationsAnalysesCreate(req);

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `contactcenterinsightsProjectsLocationsConversationsAnalysesCreate` - Creates an analysis. The long running operation is done when the analysis has completed.
* `contactcenterinsightsProjectsLocationsConversationsAnalysesList` - Lists analyses.
* `contactcenterinsightsProjectsLocationsConversationsBulkAnalyze` - Analyzes multiple conversations in a single request.
* `contactcenterinsightsProjectsLocationsConversationsCalculateStats` - Gets conversation statistics.
* `contactcenterinsightsProjectsLocationsConversationsCreate` - Creates a conversation.
* `contactcenterinsightsProjectsLocationsConversationsIngest` - Imports conversations and processes them according to the user's configuration.
* `contactcenterinsightsProjectsLocationsConversationsList` - Lists conversations.
* `contactcenterinsightsProjectsLocationsInsightsdataExport` - Export insights data to a destination defined in the request body.
* `contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats` - Gets an issue model's statistics.
* `contactcenterinsightsProjectsLocationsIssueModelsCreate` - Creates an issue model.
* `contactcenterinsightsProjectsLocationsIssueModelsDeploy` - Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
* `contactcenterinsightsProjectsLocationsIssueModelsIssuesList` - Lists issues.
* `contactcenterinsightsProjectsLocationsIssueModelsList` - Lists issue models.
* `contactcenterinsightsProjectsLocationsIssueModelsUndeploy` - Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
* `contactcenterinsightsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `contactcenterinsightsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `contactcenterinsightsProjectsLocationsPhraseMatchersCreate` - Creates a phrase matcher.
* `contactcenterinsightsProjectsLocationsPhraseMatchersList` - Lists phrase matchers.
* `contactcenterinsightsProjectsLocationsViewsCreate` - Creates a view.
* `contactcenterinsightsProjectsLocationsViewsDelete` - Deletes a view.
* `contactcenterinsightsProjectsLocationsViewsGet` - Gets a view.
* `contactcenterinsightsProjectsLocationsViewsList` - Lists views.
* `contactcenterinsightsProjectsLocationsViewsPatch` - Updates a view.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
