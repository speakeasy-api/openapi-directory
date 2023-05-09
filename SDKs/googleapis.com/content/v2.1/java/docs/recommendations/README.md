# recommendations

### Available Operations

* [contentRecommendationsGenerate](#contentrecommendationsgenerate) - Generates recommendations for a merchant.
* [contentRecommendationsReportInteraction](#contentrecommendationsreportinteraction) - Reports an interaction on a recommendation for a merchant.

## contentRecommendationsGenerate

Generates recommendations for a merchant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRecommendationsGenerateRequest;
import org.openapis.openapi.models.operations.ContentRecommendationsGenerateResponse;
import org.openapis.openapi.models.operations.ContentRecommendationsGenerateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRecommendationsGenerateRequest req = new ContentRecommendationsGenerateRequest("distinctio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "atque";
                allowedTag = new String[]{{
                    add("nemo"),
                }};
                alt = AltEnum.MEDIA;
                callback = "accusamus";
                fields = "minus";
                key = "impedit";
                languageCode = "minima";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "praesentium";
                uploadProtocol = "vel";
            }};            

            ContentRecommendationsGenerateResponse res = sdk.recommendations.contentRecommendationsGenerate(req, new ContentRecommendationsGenerateSecurity("doloremque", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.generateRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentRecommendationsReportInteraction

Reports an interaction on a recommendation for a merchant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRecommendationsReportInteractionRequest;
import org.openapis.openapi.models.operations.ContentRecommendationsReportInteractionResponse;
import org.openapis.openapi.models.operations.ContentRecommendationsReportInteractionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReportInteractionRequest;
import org.openapis.openapi.models.shared.ReportInteractionRequestInteractionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRecommendationsReportInteractionRequest req = new ContentRecommendationsReportInteractionRequest("quas") {{
                dollarXgafv = XgafvEnum.TWO;
                reportInteractionRequest = new ReportInteractionRequest() {{
                    interactionType = ReportInteractionRequestInteractionTypeEnum.INTERACTION_CLICK;
                    responseToken = "ullam";
                    subtype = "praesentium";
                    type = "perferendis";
                }};;
                accessToken = "soluta";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "nesciunt";
                key = "quas";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "itaque";
                uploadProtocol = "quaerat";
            }};            

            ContentRecommendationsReportInteractionResponse res = sdk.recommendations.contentRecommendationsReportInteraction(req, new ContentRecommendationsReportInteractionSecurity("repellat", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
