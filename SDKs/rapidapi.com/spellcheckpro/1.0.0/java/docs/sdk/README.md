# SDK

### Available Operations

* [checkSpellingRussian](#checkspellingrussian) - Check Spelling (Russian)

## checkSpellingRussian

Check Spelling (Russian)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckSpellingRussianRequest;
import org.openapis.openapi.models.operations.CheckSpellingRussianRequestBody;
import org.openapis.openapi.models.operations.CheckSpellingRussianResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CheckSpellingRussianRequest req = new CheckSpellingRussianRequest() {{
                requestBody = new CheckSpellingRussianRequestBody() {{
                    langCode = "ru";
                    text = "Добрый вее!";
                }};;
                xRapidAPIKey = "provident";
            }};            

            CheckSpellingRussianResponse res = sdk.sdk.checkSpellingRussian(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
