<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AccessTokenPutFormResponse;
import org.openapis.openapi.models.shared.AccessTokenToPut;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AccessTokenToPut req = new AccessTokenToPut() {{
                cardId = 548814;
                userId = 592845;
            }}            

            AccessTokenPutFormResponse res = sdk.accessToken.accessTokenPutForm(req);

            if (res.accessTokenPutForm200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->