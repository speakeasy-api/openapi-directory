# tokenBurnController

### Available Operations

* [getBurningTransaction](#getburningtransaction)
* [mainApp](#mainapp)
* [prepareTransaction](#preparetransaction)

## getBurningTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBurningTransactionRequest;
import org.openapis.openapi.models.operations.GetBurningTransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBurningTransactionRequest req = new GetBurningTransactionRequest("dolor");            

            GetBurningTransactionResponse res = sdk.tokenBurnController.getBurningTransaction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mainApp

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MainAppResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MainAppResponse res = sdk.tokenBurnController.mainApp();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prepareTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrepareTransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                put("laboriosam", new java.util.HashMap<String, Object>() {{
                    put("saepe", "fuga");
                    put("in", "corporis");
                    put("iste", "iure");
                    put("saepe", "quidem");
                }});
                put("architecto", new java.util.HashMap<String, Object>() {{
                    put("reiciendis", "est");
                }});
                put("mollitia", new java.util.HashMap<String, Object>() {{
                    put("dolores", "dolorem");
                    put("corporis", "explicabo");
                    put("nobis", "enim");
                }});
            }}            

            PrepareTransactionResponse res = sdk.tokenBurnController.prepareTransaction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
