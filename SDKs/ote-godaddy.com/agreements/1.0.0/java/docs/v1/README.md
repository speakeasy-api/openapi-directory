# v1

### Available Operations

* [get](#get) - Retrieve Legal Agreements for provided agreements keys

## get

Retrieve Legal Agreements for provided agreements keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest(                new String[]{{
                                add("illum"),
                                add("vel"),
                                add("error"),
                            }}) {{
                xMarketId = "deserunt";
                xPrivateLabelId = 384382L;
            }};            

            GetResponse res = sdk.v1.get(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
