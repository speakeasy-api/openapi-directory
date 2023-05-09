# languagePrediction

## Overview

Resources that return predictions for text input.

### Available Operations

* [intentMultipart](#intentmultipart) - Prediction for Intent
* [sentimentMultipart](#sentimentmultipart) - Prediction for Sentiment

## intentMultipart

Returns an intent prediction for the given string.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntentMultipartResponse;
import org.openapis.openapi.models.operations.IntentMultipartSecurity;
import org.openapis.openapi.models.shared.IntentPredictRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.IntentPredictRequest req = new IntentPredictRequest("I can't tell you how much fun it was", "WJH4YCA7YX4PCWVNCYNWYHBMY4") {{
                numResults = 3;
                sampleId = "nam";
            }};            

            IntentMultipartResponse res = sdk.languagePrediction.intentMultipart(req, new IntentMultipartSecurity("officia") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.intentPredictResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sentimentMultipart

Returns a sentiment prediction for the given string.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SentimentMultipartResponse;
import org.openapis.openapi.models.operations.SentimentMultipartSecurity;
import org.openapis.openapi.models.shared.SentimentPredictRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SentimentPredictRequest req = new SentimentPredictRequest("I can't tell you how much fun it was", "WJH4YCA7YX4PCWVNCYNWYHBMY4") {{
                numResults = 3;
                sampleId = "occaecati";
            }};            

            SentimentMultipartResponse res = sdk.languagePrediction.sentimentMultipart(req, new SentimentMultipartSecurity("fugit") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.sentimentPredictResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
