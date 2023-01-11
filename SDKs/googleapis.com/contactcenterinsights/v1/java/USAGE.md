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