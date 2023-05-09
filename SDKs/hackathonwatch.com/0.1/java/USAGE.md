<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETHackathonsIdFormatRequest;
import org.openapis.openapi.models.operations.GETHackathonsIdFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETHackathonsIdFormatRequest req = new GETHackathonsIdFormatRequest(548814);            

            GETHackathonsIdFormatResponse res = sdk.hackathons.getHackathonsIdFormat(req);

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