<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetV1ValidationSingleFormatEnum;
import org.openapis.openapi.models.operations.GetV1ValidationSingleRequest;
import org.openapis.openapi.models.operations.GetV1ValidationSingleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1ValidationSingleRequest req = new GetV1ValidationSingleRequest() {{
                email = "Larue_Rau85@yahoo.com";
                format = "xml";
                key = "illum";
            }}            

            GetV1ValidationSingleResponse res = sdk.getV1ValidationSingle(req);

            if (res.getV1ValidationSingle200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->