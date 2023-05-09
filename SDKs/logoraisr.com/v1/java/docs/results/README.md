# results

### Available Operations

* [resultsRead](#resultsread) - Get the result from image processing

## resultsRead

This GET-Method returns the URL where the result can downloaded from.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResultsReadRequest;
import org.openapis.openapi.models.operations.ResultsReadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResultsReadRequest req = new ResultsReadRequest("iure");            

            ResultsReadResponse res = sdk.results.resultsRead(req);

            if (res.resultResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
