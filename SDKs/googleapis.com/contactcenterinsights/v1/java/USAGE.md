<!-- Start SDK Example Usage -->
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

            ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest req = new ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudContactcenterinsightsV1AnalysisInput = new GoogleCloudContactcenterinsightsV1AnalysisInput() {{
                    analysisResult = new GoogleCloudContactcenterinsightsV1AnalysisResult() {{
                        callAnalysisMetadata = new GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata() {{
                            annotations = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1CallAnnotation[]{{
                                add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                    annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 844266;
                                        wordIndex = 602763;
                                    }};
                                    annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 857946;
                                        wordIndex = 544883;
                                    }};
                                    channelTag = 847252;
                                    entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                        entityUniqueId = "vel";
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 6235.64;
                                            score = 6458.94;
                                        }};
                                        type = GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum.PROPER;
                                    }};
                                    holdData = new java.util.HashMap<String, Object>() {{
                                        put("magnam", "debitis");
                                        put("ipsa", "delectus");
                                    }};
                                    intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                        intentUniqueId = "tempora";
                                    }};
                                    interruptionData = new java.util.HashMap<String, Object>() {{
                                        put("molestiae", "minus");
                                        put("placeat", "voluptatum");
                                    }};
                                    issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                        issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "iusto";
                                            issue = "excepturi";
                                            score = 3927.85;
                                        }};
                                    }};
                                    phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "recusandae";
                                        phraseMatcher = "temporibus";
                                    }};
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 710.36;
                                        score = 3373.96;
                                    }};
                                    silenceData = new java.util.HashMap<String, Object>() {{
                                        put("deserunt", "perferendis");
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                    annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 368241;
                                        wordIndex = 832620;
                                    }};
                                    annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 957156;
                                        wordIndex = 778157;
                                    }};
                                    channelTag = 140350;
                                    entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                        entityUniqueId = "at";
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 8700.88;
                                            score = 9786.19;
                                        }};
                                        type = GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum.PROPER;
                                    }};
                                    holdData = new java.util.HashMap<String, Object>() {{
                                        put("quod", "esse");
                                        put("totam", "porro");
                                        put("dolorum", "dicta");
                                        put("nam", "officia");
                                    }};
                                    intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                        intentUniqueId = "occaecati";
                                    }};
                                    interruptionData = new java.util.HashMap<String, Object>() {{
                                        put("deleniti", "hic");
                                    }};
                                    issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                        issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "optio";
                                            issue = "totam";
                                            score = 1059.07;
                                        }};
                                    }};
                                    phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "commodi";
                                        phraseMatcher = "molestiae";
                                    }};
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 2645.55;
                                        score = 1863.32;
                                    }};
                                    silenceData = new java.util.HashMap<String, Object>() {{
                                        put("cum", "esse");
                                        put("ipsum", "excepturi");
                                        put("aspernatur", "perferendis");
                                        put("ad", "natus");
                                    }};
                                }}),
                                add(new GoogleCloudContactcenterinsightsV1CallAnnotation() {{
                                    annotationEndBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 149675;
                                        wordIndex = 612096;
                                    }};
                                    annotationStartBoundary = new GoogleCloudContactcenterinsightsV1AnnotationBoundary() {{
                                        transcriptIndex = 222321;
                                        wordIndex = 616934;
                                    }};
                                    channelTag = 386489;
                                    entityMentionData = new GoogleCloudContactcenterinsightsV1EntityMentionData() {{
                                        entityUniqueId = "hic";
                                        sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                            magnitude = 9025.99;
                                            score = 6818.2;
                                        }};
                                        type = GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum.PROPER;
                                    }};
                                    holdData = new java.util.HashMap<String, Object>() {{
                                        put("iste", "iure");
                                        put("saepe", "quidem");
                                    }};
                                    intentMatchData = new GoogleCloudContactcenterinsightsV1IntentMatchData() {{
                                        intentUniqueId = "architecto";
                                    }};
                                    interruptionData = new java.util.HashMap<String, Object>() {{
                                        put("reiciendis", "est");
                                    }};
                                    issueMatchData = new GoogleCloudContactcenterinsightsV1IssueMatchData() {{
                                        issueAssignment = new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                            displayName = "mollitia";
                                            issue = "laborum";
                                            score = 1709.09;
                                        }};
                                    }};
                                    phraseMatchData = new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                        displayName = "dolorem";
                                        phraseMatcher = "corporis";
                                    }};
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 1289.26;
                                        score = 7506.86;
                                    }};
                                    silenceData = new java.util.HashMap<String, Object>() {{
                                        put("omnis", "nemo");
                                        put("minima", "excepturi");
                                    }};
                                }}),
                            }};
                            entities = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Entity>() {{
                                put("iure", new GoogleCloudContactcenterinsightsV1Entity() {{
                                    displayName = "culpa";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("sapiente", "architecto");
                                        put("mollitia", "dolorem");
                                        put("culpa", "consequuntur");
                                        put("repellat", "mollitia");
                                    }};
                                    salience = 5818.5;
                                    sentiment = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 2532.91;
                                        score = 4143.69;
                                    }};
                                    type = GoogleCloudContactcenterinsightsV1EntityTypeEnum.CONSUMER_GOOD;
                                }});
                            }};
                            intents = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1Intent>() {{
                                put("velit", new GoogleCloudContactcenterinsightsV1Intent() {{
                                    displayName = "error";
                                    id = "251aa52c-3f5a-4d01-9da1-ffe78f097b00";
                                }});
                                put("reprehenderit", new GoogleCloudContactcenterinsightsV1Intent() {{
                                    displayName = "ut";
                                    id = "f15471b5-e6e1-43b9-9d48-8e1e91e450ad";
                                }});
                            }};
                            issueModelResult = new GoogleCloudContactcenterinsightsV1IssueModelResult() {{
                                issueModel = "explicabo";
                                issues = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1IssueAssignment[]{{
                                    add(new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                        displayName = "distinctio";
                                        issue = "quibusdam";
                                        score = 2894.06;
                                    }}),
                                    add(new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                        displayName = "modi";
                                        issue = "qui";
                                        score = 3978.21;
                                    }}),
                                    add(new GoogleCloudContactcenterinsightsV1IssueAssignment() {{
                                        displayName = "cupiditate";
                                        issue = "quos";
                                        score = 201.07;
                                    }}),
                                }};
                            }};;
                            phraseMatchers = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatchData>() {{
                                put("assumenda", new GoogleCloudContactcenterinsightsV1PhraseMatchData() {{
                                    displayName = "ipsam";
                                    phraseMatcher = "alias";
                                }});
                            }};
                            sentiments = new org.openapis.openapi.models.shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[]{{
                                add(new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment() {{
                                    channelTag = 677817;
                                    sentimentData = new GoogleCloudContactcenterinsightsV1SentimentData() {{
                                        magnitude = 5696.18;
                                        score = 2700.08;
                                    }};
                                }}),
                            }};
                        }};;
                        endTime = "facilis";
                    }};;
                    annotatorSelector = new GoogleCloudContactcenterinsightsV1AnnotatorSelector() {{
                        issueModels = new String[]{{
                            add("labore"),
                            add("delectus"),
                            add("eum"),
                        }};
                        phraseMatchers = new String[]{{
                            add("eligendi"),
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
                            conversationProfile = "sint";
                            summarizationModel = GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum.SUMMARIZATION_MODEL_UNSPECIFIED;
                        }};;
                    }};;
                    name = "Terence Marquardt";
                }};;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "in";
                key = "in";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "rerum";
                uploadProtocol = "dicta";
            }};            

            ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse res = sdk.projects.contactcenterinsightsProjectsLocationsConversationsAnalysesCreate(req, new ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity("magnam", "cumque") {{
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
<!-- End SDK Example Usage -->