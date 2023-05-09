# fetchAccountInfo

### Available Operations

* [getAccount](#getaccount) - Fetch credit balance and free API calls.

## getAccount

Get the current credit balance and number of free API calls.

Notes:

* Balance changes may be delayed by several seconds. To locally keep track of your credit balance, you should therefore only call this endpoint initially (or e.g. when the user manually triggers a refresh), then use the `X-Credits-Charged` response header returned with each image processing response to adjust the local balance.

* The "*sizes*" field is always "all", is deprecated and will soon be removed.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountResponse res = sdk.fetchAccountInfo.getAccount();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
