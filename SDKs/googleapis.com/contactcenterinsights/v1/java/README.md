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
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest;
import org.openapis.openapi.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest req = new ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest() {{
                dollarXgafv = "2";
                googleCloudContactcenterinsightsV1AnalysisInput = new GoogleCloudContactcenterinsightsV1AnalysisInput() {{
                    analysisResult = new GoogleCloudContactcenterinsightsV1AnalysisResult() {{
                        callAnalysisMetadata = new GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata() {{
                            annotations = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1CallAnnotation[]{{
                                add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                    annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 715190;
                                        wordIndex = 844266;
                                    }};
                                    annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 602763;
                                        wordIndex = 857946;
                                    }};
                                    channelTag = 544883;
                                    entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                        entityUniqueId = "illum";
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 4236.55;
                                            score = 6235.64;
                                        }};
                                        type = "PROPER";
                                    }};
                                    holdData = new java.util.HashMap<String, Object>() {{
                                        put("iure", "magnam");
                                        put("debitis", "ipsa");
                                    }};
                                    intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                        intentUniqueId = "delectus";
                                    }};
                                    interruptionData = new java.util.HashMap<String, Object>() {{
                                        put("suscipit", "molestiae");
                                        put("minus", "placeat");
                                    }};
                                    issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                        issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "voluptatum";
                                            issue = "iusto";
                                            score = 5680.45;
                                        }};
                                    }};
                                    phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "nisi";
                                        phraseMatcher = "recusandae";
                                    }};
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 8360.79;
                                        score = 710.36;
                                    }};
                                    silenceData = new java.util.HashMap<String, Object>() {{
                                        put("veritatis", "deserunt");
                                        put("perferendis", "ipsam");
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                    annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 832620;
                                        wordIndex = 957156;
                                    }};
                                    annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 778157;
                                        wordIndex = 140350;
                                    }};
                                    channelTag = 870013;
                                    entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                        entityUniqueId = "at";
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 9786.19;
                                            score = 4736.08;
                                        }};
                                        type = "COMMON";
                                    }};
                                    holdData = new java.util.HashMap<String, Object>() {{
                                        put("esse", "totam");
                                        put("porro", "dolorum");
                                        put("dicta", "nam");
                                        put("officia", "occaecati");
                                    }};
                                    intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                        intentUniqueId = "fugit";
                                    }};
                                    interruptionData = new java.util.HashMap<String, Object>() {{
                                        put("hic", "optio");
                                        put("totam", "beatae");
                                        put("commodi", "molestiae");
                                    }};
                                    issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                        issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "modi";
                                            issue = "qui";
                                            score = 7742.34;
                                        }};
                                    }};
                                    phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "cum";
                                        phraseMatcher = "esse";
                                    }};
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 2165.5;
                                        score = 5684.34;
                                    }};
                                    silenceData = new java.util.HashMap<String, Object>() {{
                                        put("perferendis", "ad");
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                    annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 617636;
                                        wordIndex = 149675;
                                    }};
                                    annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 612096;
                                        wordIndex = 222321;
                                    }};
                                    channelTag = 616934;
                                    entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                        entityUniqueId = "laboriosam";
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 9437.49;
                                            score = 9025.99;
                                        }};
                                        type = "COMMON";
                                    }};
                                    holdData = new java.util.HashMap<String, Object>() {{
                                        put("corporis", "iste");
                                        put("iure", "saepe");
                                    }};
                                    intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                        intentUniqueId = "quidem";
                                    }};
                                    interruptionData = new java.util.HashMap<String, Object>() {{
                                        put("ipsa", "reiciendis");
                                    }};
                                    issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                        issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "est";
                                            issue = "mollitia";
                                            score = 6706.38;
                                        }};
                                    }};
                                    phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "dolores";
                                        phraseMatcher = "dolorem";
                                    }};
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 3581.52;
                                        score = 1289.26;
                                    }};
                                    silenceData = new java.util.HashMap<String, Object>() {{
                                        put("enim", "omnis");
                                        put("nemo", "minima");
                                        put("excepturi", "accusantium");
                                        put("iure", "culpa");
                                    }};
                                }}),
                            }};
                            entities = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Entity>() {{
                                put("sapiente", new GoogleCloudContactcenterinsightsV1Entity() {{
                                    displayName = "architecto";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("dolorem", "culpa");
                                        put("consequuntur", "repellat");
                                        put("mollitia", "occaecati");
                                    }};
                                    salience = 2532.91;
                                    sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 4143.69;
                                        score = 4663.11;
                                    }};
                                    type = "CONSUMER_GOOD";
                                }});
                                put("velit", new GoogleCloudContactcenterinsightsV1Entity() {{
                                    displayName = "error";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("quis", "vitae");
                                    }};
                                    salience = 6747.52;
                                    sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 6563.3;
                                        score = 3172.02;
                                    }};
                                    type = "PERSON";
                                }});
                                put("quo", new GoogleCloudContactcenterinsightsV1Entity() {{
                                    displayName = "sequi";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("ipsam", "id");
                                        put("possimus", "aut");
                                        put("quasi", "error");
                                        put("temporibus", "laborum");
                                    }};
                                    salience = 960.98;
                                    sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 9719.45;
                                        score = 9764.6;
                                    }};
                                    type = "NUMBER";
                                }});
                                put("nihil", new GoogleCloudContactcenterinsightsV1Entity() {{
                                    displayName = "praesentium";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("ipsa", "omnis");
                                        put("voluptate", "cum");
                                        put("perferendis", "doloremque");
                                        put("reprehenderit", "ut");
                                    }};
                                    salience = 9795.87;
                                    sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 1201.96;
                                        score = 3594.44;
                                    }};
                                    type = "ORGANIZATION";
                                }});
                            }};
                            intents = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Intent>() {{
                                put("dicta", new GoogleCloudContactcenterinsightsV1Intent() {{
                                    displayName = "harum";
                                    id = "enim";
                                }});
                                put("accusamus", new GoogleCloudContactcenterinsightsV1Intent() {{
                                    displayName = "commodi";
                                    id = "repudiandae";
                                }});
                            }};
                            issueModelResult = new GoogleCloudContactcenterinsightsV1IssueModelResult() {{
                                issueModel = "quae";
                                issues = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueAssignment[]{{
                                    add(new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                        displayName = "quidem";
                                        issue = "molestias";
                                        score = 5666.02;
                                    }}),
                                }};
                            }};
                            phraseMatchers = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchData>() {{
                                put("modi", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                    displayName = "praesentium";
                                    phraseMatcher = "rem";
                                }});
                                put("voluptates", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                    displayName = "quasi";
                                    phraseMatcher = "repudiandae";
                                }});
                                put("sint", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                    displayName = "veritatis";
                                    phraseMatcher = "itaque";
                                }});
                                put("incidunt", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                    displayName = "enim";
                                    phraseMatcher = "consequatur";
                                }});
                            }};
                            sentiments = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[]{{
                                add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                    channelTag = 842342;
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 1317.97;
                                        score = 6471.74;
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                    channelTag = 716327;
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 8413.86;
                                        score = 2894.06;
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                    channelTag = 264730;
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 1831.91;
                                        score = 3978.21;
                                    }};
                                }}),
                            }};
                        }};
                        endTime = "cupiditate";
                    }};
                    annotatorSelector = new GoogleCloudContactcenterinsightsV1AnnotatorSelector() {{
                        issueModels = new String[]{{
                            add("perferendis"),
                            add("magni"),
                            add("assumenda"),
                        }};
                        phraseMatchers = new String[]{{
                            add("alias"),
                            add("fugit"),
                        }};
                        runEntityAnnotator = false;
                        runIntentAnnotator = false;
                        runInterruptionAnnotator = false;
                        runIssueModelAnnotator = false;
                        runPhraseMatcherAnnotator = false;
                        runSentimentAnnotator = false;
                        runSilenceAnnotator = false;
                    }};
                    name = "dolorum";
                }};
                accessToken = "excepturi";
                alt = "json";
                callback = "facilis";
                fields = "tempore";
                key = "labore";
                oauthToken = "delectus";
                parent = "eum";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "eligendi";
                uploadProtocol = "sint";
            }}            

            ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse res = sdk.projects.contactcenterinsightsProjectsLocationsConversationsAnalysesCreate(req, new ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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
