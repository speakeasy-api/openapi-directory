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
                    accessToken = "temporibus";
                    alt = "proto";
                    callback = "doloribus";
                    fields = "sapiente";
                    key = "rerum";
                    oauthToken = "esse";
                    prettyPrint = true;
                    quotaUser = "quibusdam";
                    uploadType = "iste";
                    uploadProtocol = "nulla";
                }};
                request = new GoogleCloudContactcenterinsightsV1AnalysisInput() {{
                    analysisResult = new GoogleCloudContactcenterinsightsV1AnalysisResult() {{
                        callAnalysisMetadata = new GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata() {{
                            annotations = new openapisdk.models.shared.GoogleCloudContactcenterinsightsV1CallAnnotation[]() {{
                                add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                    annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 5236849506328252522;
                                        wordIndex = 1841926357314730122;
                                    }};
                                    annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 3166371538539120427;
                                        wordIndex = 8303163369109821109;
                                    }};
                                    channelTag = 6091541572260922748;
                                    entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                        entityUniqueId = "sapiente";
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 5.200000;
                                            score = 51.200001;
                                        }};
                                        type = "MENTION_TYPE_UNSPECIFIED";
                                    }};
                                    holdData = new java.util.HashMap<String, Object>() {{
                                        put("reprehenderit", "excepturi");
                                    }};
                                    intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                        intentUniqueId = "facere";
                                    }};
                                    interruptionData = new java.util.HashMap<String, Object>() {{
                                        put("ut", "dolore");
                                        put("assumenda", "ullam");
                                    }};
                                    issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                        issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "velit";
                                            issue = "eos";
                                            score = 11.100000;
                                        }};
                                    }};
                                    phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "nam";
                                        phraseMatcher = "at";
                                    }};
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 46.099998;
                                        score = 43.200001;
                                    }};
                                    silenceData = new java.util.HashMap<String, Object>() {{
                                        put("excepturi", "aut");
                                    }};
                                }}),
                            }};
                            entities = new java.util.HashMap<String, openapisdk.models.shared.GoogleCloudContactcenterinsightsV1Entity>() {{
                                put("omnis", new GoogleCloudContactcenterinsightsV1Entity() {{
                                    displayName = "ab";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("aut", "impedit");
                                    }};
                                    salience = 88.199997;
                                    sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 30.200001;
                                        score = 98.099998;
                                    }};
                                    type = "ADDRESS";
                                }});
                            }};
                            intents = new java.util.HashMap<String, openapisdk.models.shared.GoogleCloudContactcenterinsightsV1Intent>() {{
                                put("odio", new GoogleCloudContactcenterinsightsV1Intent() {{
                                    displayName = "quia";
                                    id = "sint";
                                }});
                                put("harum", new GoogleCloudContactcenterinsightsV1Intent() {{
                                    displayName = "blanditiis";
                                    id = "dignissimos";
                                }});
                            }};
                            issueModelResult = new GoogleCloudContactcenterinsightsV1IssueModelResult() {{
                                issueModel = "mollitia";
                                issues = new openapisdk.models.shared.GoogleCloudContactcenterinsightsV1IssueAssignment[]() {{
                                    add(new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                        displayName = "eos";
                                        issue = "cum";
                                        score = 97.099998;
                                    }}),
                                    add(new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                        displayName = "voluptatem";
                                        issue = "ut";
                                        score = 55.200001;
                                    }}),
                                }};
                            }};
                            phraseMatchers = new java.util.HashMap<String, openapisdk.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchData>() {{
                                put("sunt", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                    displayName = "soluta";
                                    phraseMatcher = "aperiam";
                                }});
                                put("ab", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                    displayName = "minima";
                                    phraseMatcher = "provident";
                                }});
                            }};
                            sentiments = new openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[]() {{
                                add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                    channelTag = 6661702461337470207;
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 86.099998;
                                        score = 18.100000;
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                    channelTag = 4723046027390241627;
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 77.099998;
                                        score = 71.099998;
                                    }};
                                }}),
                            }};
                        }};
                        endTime = "facere";
                    }};
                    annotatorSelector = new GoogleCloudContactcenterinsightsV1AnnotatorSelector() {{
                        issueModels = new String[]() {{
                            add("molestiae"),
                            add("ea"),
                            add("non"),
                        }};
                        phraseMatchers = new String[]() {{
                            add("aliquam"),
                        }};
                        runEntityAnnotator = false;
                        runIntentAnnotator = true;
                        runInterruptionAnnotator = false;
                        runIssueModelAnnotator = false;
                        runPhraseMatcherAnnotator = false;
                        runSentimentAnnotator = true;
                        runSilenceAnnotator = false;
                    }};
                    name = "est";
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
