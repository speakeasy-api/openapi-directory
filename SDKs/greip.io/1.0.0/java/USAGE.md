<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetASNLookupRequest;
import org.openapis.openapi.models.operations.GetASNLookupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetASNLookupRequest req = new GetASNLookupRequest("15169", "2517bc4fc3f790e8f09bc808bb63b899") {{
                format = "JSON";
                isList = "no";
            }};            

            GetASNLookupResponse res = sdk.getASNLookup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->