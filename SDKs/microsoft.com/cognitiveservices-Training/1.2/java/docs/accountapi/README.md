# accountApi

### Available Operations

* [getAccountInfo](#getaccountinfo) - Get basic information about your account

## getAccountInfo

Get basic information about your account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountInfoRequest;
import org.openapis.openapi.models.operations.GetAccountInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountInfoRequest req = new GetAccountInfoRequest("provident");            

            GetAccountInfoResponse res = sdk.accountApi.getAccountInfo(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
