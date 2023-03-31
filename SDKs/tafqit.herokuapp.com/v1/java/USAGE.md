<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ConvertRequestBody;
import org.openapis.openapi.models.operations.ConvertRequest;
import org.openapis.openapi.models.operations.ConvertResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConvertRequest req = new ConvertRequest() {{
                request = new ConvertRequestBody() {{
                    hundredsForm = "مائة";
                    theNumber = "2519.50";
                    unit = " ريال سعودي";
                }};
            }};            

            ConvertResponse res = sdk.convert(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->