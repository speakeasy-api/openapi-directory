# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new GoogleCloudContactcenterinsightsV1AnalysisInput() {{
                    analysisResult = new GoogleCloudContactcenterinsightsV1AnalysisResult() {{
                        callAnalysisMetadata = new GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata() {{
                            annotations = new openapisdk.models.shared.GoogleCloudContactcenterinsightsV1CallAnnotation[]() {{
                                add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                    annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 2518412263346885298;
                                        wordIndex = 5617773211005988520;
                                    }};
                                    annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 2339563716805116249;
                                        wordIndex = 7144924247938981575;
                                    }};
                                    channelTag = 161231572858529631;
                                    entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                        entityUniqueId = "et";
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 94.199997;
                                            score = 68.099998;
                                        }};
                                        type = "MENTION_TYPE_UNSPECIFIED";
                                    }};
                                    holdData = new java.util.HashMap<String, Object>() {{
                                        put("debitis", "vel");
                                        put("odio", "dolore");
                                        put("id", "aspernatur");
                                    }};
                                    intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                        intentUniqueId = "accusantium";
                                    }};
                                    interruptionData = new java.util.HashMap<String, Object>() {{
                                        put("commodi", "quis");
                                        put("est", "aut");
                                        put("odit", "non");
                                    }};
                                    issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                        issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "voluptas";
                                            issue = "omnis";
                                            score = 44.099998;
                                        }};
                                    }};
                                    phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "sed";
                                        phraseMatcher = "officiis";
                                    }};
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 87.099998;
                                        score = 0.100000;
                                    }};
                                    silenceData = new java.util.HashMap<String, Object>() {{
                                        put("recusandae", "at");
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                    annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 3959279844101328186;
                                        wordIndex = 8902041070398994519;
                                    }};
                                    annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 303089054982227392;
                                        wordIndex = 7338728586234333996;
                                    }};
                                    channelTag = 5392504858645185670;
                                    entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                        entityUniqueId = "ut";
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 56.099998;
                                            score = 30.200001;
                                        }};
                                        type = "MENTION_TYPE_UNSPECIFIED";
                                    }};
                                    holdData = new java.util.HashMap<String, Object>() {{
                                        put("dolor", "beatae");
                                        put("veritatis", "in");
                                        put("et", "omnis");
                                    }};
                                    intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                        intentUniqueId = "ipsum";
                                    }};
                                    interruptionData = new java.util.HashMap<String, Object>() {{
                                        put("dolores", "placeat");
                                    }};
                                    issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                        issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "vel";
                                            issue = "rerum";
                                            score = 89.099998;
                                        }};
                                    }};
                                    phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "quam";
                                        phraseMatcher = "reprehenderit";
                                    }};
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 94.099998;
                                        score = 72.199997;
                                    }};
                                    silenceData = new java.util.HashMap<String, Object>() {{
                                        put("qui", "ut");
                                        put("itaque", "ab");
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                    annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 8218430188258725598;
                                        wordIndex = 4255970180603226314;
                                    }};
                                    annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 2682844416202521633;
                                        wordIndex = 4304520335772049496;
                                    }};
                                    channelTag = 3462733497206508461;
                                    entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                        entityUniqueId = "architecto";
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 38.200001;
                                            score = 20.100000;
                                        }};
                                        type = "PROPER";
                                    }};
                                    holdData = new java.util.HashMap<String, Object>() {{
                                        put("magni", "et");
                                        put("optio", "qui");
                                    }};
                                    intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                        intentUniqueId = "earum";
                                    }};
                                    interruptionData = new java.util.HashMap<String, Object>() {{
                                        put("omnis", "ut");
                                    }};
                                    issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                        issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "consequatur";
                                            issue = "dolor";
                                            score = 26.100000;
                                        }};
                                    }};
                                    phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "reprehenderit";
                                        phraseMatcher = "consectetur";
                                    }};
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 59.200001;
                                        score = 64.099998;
                                    }};
                                    silenceData = new java.util.HashMap<String, Object>() {{
                                        put("soluta", "aut");
                                    }};
                                }}),
                            }};
                            entities = new java.util.HashMap<String, openapisdk.models.shared.GoogleCloudContactcenterinsightsV1Entity>() {{
                                put("consequuntur", new GoogleCloudContactcenterinsightsV1Entity() {{
                                    displayName = "laudantium";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("ipsa", "expedita");
                                    }};
                                    salience = 20.200001;
                                    sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 26.200001;
                                        score = 87.099998;
                                    }};
                                    type = "DATE";
                                }});
                                put("maxime", new GoogleCloudContactcenterinsightsV1Entity() {{
                                    displayName = "eum";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("et", "rerum");
                                        put("reiciendis", "quis");
                                    }};
                                    salience = 97.199997;
                                    sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 1.200000;
                                        score = 40.200001;
                                    }};
                                    type = "PHONE_NUMBER";
                                }});
                                put("et", new GoogleCloudContactcenterinsightsV1Entity() {{
                                    displayName = "impedit";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("expedita", "vel");
                                        put("qui", "modi");
                                        put("nihil", "tempora");
                                    }};
                                    salience = 42.200001;
                                    sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 60.099998;
                                        score = 34.099998;
                                    }};
                                    type = "LOCATION";
                                }});
                            }};
                            intents = new java.util.HashMap<String, openapisdk.models.shared.GoogleCloudContactcenterinsightsV1Intent>() {{
                                put("placeat", new GoogleCloudContactcenterinsightsV1Intent() {{
                                    displayName = "qui";
                                    id = "nisi";
                                }});
                                put("quis", new GoogleCloudContactcenterinsightsV1Intent() {{
                                    displayName = "adipisci";
                                    id = "porro";
                                }});
                            }};
                            issueModelResult = new GoogleCloudContactcenterinsightsV1IssueModelResult() {{
                                issueModel = "rerum";
                                issues = new openapisdk.models.shared.GoogleCloudContactcenterinsightsV1IssueAssignment[]() {{
                                    add(new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                        displayName = "accusamus";
                                        issue = "numquam";
                                        score = 58.200001;
                                    }}),
                                }};
                            }};
                            phraseMatchers = new java.util.HashMap<String, openapisdk.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchData>() {{
                                put("laborum", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                    displayName = "fugit";
                                    phraseMatcher = "quis";
                                }});
                                put("minus", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                    displayName = "soluta";
                                    phraseMatcher = "aperiam";
                                }});
                            }};
                            sentiments = new openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[]() {{
                                add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                    channelTag = 4970157864765978097;
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 52.099998;
                                        score = 29.200001;
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                    channelTag = 8997481548049309375;
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 86.099998;
                                        score = 68.199997;
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                    channelTag = 7899896093082851758;
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 83.099998;
                                        score = 30.100000;
                                    }};
                                }}),
                            }};
                        }};
                        endTime = "cupiditate";
                    }};
                    annotatorSelector = new GoogleCloudContactcenterinsightsV1AnnotatorSelector() {{
                        issueModels = new String[]() {{
                            add("molestiae"),
                            add("pariatur"),
                            add("quasi"),
                        }};
                        phraseMatchers = new String[]() {{
                            add("enim"),
                            add("qui"),
                            add("sit"),
                        }};
                        runEntityAnnotator = false;
                        runIntentAnnotator = true;
                        runInterruptionAnnotator = true;
                        runIssueModelAnnotator = false;
                        runPhraseMatcherAnnotator = true;
                        runSentimentAnnotator = true;
                        runSilenceAnnotator = true;
                    }};
                    name = "occaecati";
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
* `contactcenterinsightsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `contactcenterinsightsProjectsLocationsPhraseMatchersCreate` - Creates a phrase matcher.
* `contactcenterinsightsProjectsLocationsPhraseMatchersList` - Lists phrase matchers.
* `contactcenterinsightsProjectsLocationsViewsCreate` - Creates a view.
* `contactcenterinsightsProjectsLocationsViewsDelete` - Deletes a view.
* `contactcenterinsightsProjectsLocationsViewsGet` - Gets a view.
* `contactcenterinsightsProjectsLocationsViewsList` - Lists views.
* `contactcenterinsightsProjectsLocationsViewsPatch` - Updates a view.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
