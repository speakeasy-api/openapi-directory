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
import org.openapis.openapi.models.operations.CommunicationRequest;
import org.openapis.openapi.models.operations.CommunicationResponse;
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [textAnalysis](docs/textanalysis/README.md)

* [communication](docs/textanalysis/README.md#communication) - Communication & Tonality
* [ekmanEmotion](docs/textanalysis/README.md#ekmanemotion) - Emotion Analysis
* [emotion](docs/textanalysis/README.md#emotion) - Emotion Analysis
* [languageDetection](docs/textanalysis/README.md#languagedetection) - Language Detection
* [personality](docs/textanalysis/README.md#personality) - Personality Traits
* [sentiment](docs/textanalysis/README.md#sentiment) - Sentiment Analysis
* [topicSentiment](docs/textanalysis/README.md#topicsentiment) - Extracts topics and sentiments and relates them.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
