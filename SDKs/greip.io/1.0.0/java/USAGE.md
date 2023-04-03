<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetBulkLookupRequest;
import org.openapis.openapi.models.operations.GetBulkLookupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBulkLookupRequest req = new GetBulkLookupRequest() {{
                format = "XML";
                ips = "1.1.1.1,2.2.2.2";
                key = "2517bc4fc3f790e8f09bc808bb63b899";
                lang = "AR";
                params = "currency";
            }}            

            GetBulkLookupResponse res = sdk.getBulkLookup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->