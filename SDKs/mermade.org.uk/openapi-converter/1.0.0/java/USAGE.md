<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConvertRequestBody;
import org.openapis.openapi.models.operations.ConvertRequestBodyValidateEnum;
import org.openapis.openapi.models.operations.ConvertResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConvertRequestBody req = new ConvertRequestBody() {{
                filename = "corrupti";
                source = "provident";
                validate = ConvertRequestBodyValidateEnum.ON;
            }};            

            ConvertResponse res = sdk.conversion.convert(req);

            if (res.convert200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->