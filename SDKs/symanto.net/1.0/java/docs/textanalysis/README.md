# textAnalysis

### Available Operations

* [communication](#communication) - Communication & Tonality
* [ekmanEmotion](#ekmanemotion) - Emotion Analysis
* [emotion](#emotion) - Emotion Analysis
* [languageDetection](#languagedetection) - Language Detection
* [personality](#personality) - Personality Traits
* [sentiment](#sentiment) - Sentiment Analysis
* [topicSentiment](#topicsentiment) - Extracts topics and sentiments and relates them.

## communication

Identify the purpose and writing style of a written text.

Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]

Returned labels:
* action-seeking
* fact-oriented
* information-seeking
* self-revealing

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommunicationRequest;
import org.openapis.openapi.models.operations.CommunicationResponse;
import org.openapis.openapi.models.shared.Post;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CommunicationRequest req = new CommunicationRequest() {{
                requestBody = new org.openapis.openapi.models.shared.Post[]{{
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                }};
                all = false;
            }};            

            CommunicationResponse res = sdk.textAnalysis.communication(req);

            if (res.predictionResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ekmanEmotion

Detect the emotions of the text based on Ekman.

Supported Langauges: [`en`, `de`, `es`]

Returned labels:
* anger
* disgust
* fear
* joy
* sadness
* surprise
* no-emotion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EkmanEmotionRequest;
import org.openapis.openapi.models.operations.EkmanEmotionResponse;
import org.openapis.openapi.models.shared.Post;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            EkmanEmotionRequest req = new EkmanEmotionRequest() {{
                requestBody = new org.openapis.openapi.models.shared.Post[]{{
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                }};
                all = false;
            }};            

            EkmanEmotionResponse res = sdk.textAnalysis.ekmanEmotion(req);

            if (res.predictionResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## emotion

Detect the emotions of the text.

Supported Langauges: [`en`, `de`, `es`]

Returned labels:
* anger
* joy
* love
* sadness
* surprise
* uncategorized

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmotionRequest;
import org.openapis.openapi.models.operations.EmotionResponse;
import org.openapis.openapi.models.shared.Post;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            EmotionRequest req = new EmotionRequest() {{
                requestBody = new org.openapis.openapi.models.shared.Post[]{{
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                }};
                all = false;
            }};            

            EmotionResponse res = sdk.textAnalysis.emotion(req);

            if (res.predictionResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## languageDetection

Identifies what language a text is written in. Only languages that our API supports can be analyzed.

Returned labels:
* language_code of the detected language

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LanguageDetectionResponse;
import org.openapis.openapi.models.shared.LanguageDetection;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.LanguageDetection[]{{
                add(new LanguageDetection("quod") {{
                    id = "a674e0f4-67cc-4879-aed1-51a05dfc2ddf";
                    text = "molestiae";
                }}),
                add(new LanguageDetection("laboriosam") {{
                    id = "c78ca1ba-928f-4c81-a742-cb7392059293";
                    text = "natus";
                }}),
                add(new LanguageDetection("dolorem") {{
                    id = "fea7596e-b10f-4aaa-a352-c5955907aff1";
                    text = "mollitia";
                }}),
            }}            

            LanguageDetectionResponse res = sdk.textAnalysis.languageDetection(req);

            if (res.languageDetectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## personality

Predict the personality trait of author of any written text.

Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]

Returned labels:

* emotional
* rational

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PersonalityRequest;
import org.openapis.openapi.models.operations.PersonalityResponse;
import org.openapis.openapi.models.shared.Post;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PersonalityRequest req = new PersonalityRequest() {{
                requestBody = new org.openapis.openapi.models.shared.Post[]{{
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                }};
                all = false;
            }};            

            PersonalityResponse res = sdk.textAnalysis.personality(req);

            if (res.predictionResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sentiment

Evaluate the overall tonality of the text.

Supported Languages: [`en`, `de`, `es`]

Returned labels:
* positive
* negative

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SentimentRequest;
import org.openapis.openapi.models.operations.SentimentResponse;
import org.openapis.openapi.models.shared.Post;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            SentimentRequest req = new SentimentRequest() {{
                requestBody = new org.openapis.openapi.models.shared.Post[]{{
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                }};
                all = false;
            }};            

            SentimentResponse res = sdk.textAnalysis.sentiment(req);

            if (res.predictionResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## topicSentiment

Extracts topics and sentiments and relates them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TopicSentimentDomainEnum;
import org.openapis.openapi.models.operations.TopicSentimentRequest;
import org.openapis.openapi.models.operations.TopicSentimentResponse;
import org.openapis.openapi.models.shared.Post;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TopicSentimentRequest req = new TopicSentimentRequest() {{
                requestBody = new org.openapis.openapi.models.shared.Post[]{{
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                    add(new Post("en", "I love the service") {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                }};
                domain = TopicSentimentDomainEnum.EMPLOYEE;
            }};            

            TopicSentimentResponse res = sdk.textAnalysis.topicSentiment(req);

            if (res.topicSentimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
