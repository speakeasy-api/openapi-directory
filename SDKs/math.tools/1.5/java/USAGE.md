<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersBaseRequest;
import org.openapis.openapi.models.operations.GetNumbersBaseResponse;
import org.openapis.openapi.models.operations.GetNumbersBaseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersBaseRequest req = new GetNumbersBaseRequest(548814L, 592845L) {{
                from = 715190L;
            }};            

            GetNumbersBaseResponse res = sdk.baseConversion.getNumbersBase(req, new GetNumbersBaseSecurity("quibusdam") {{
                xMathtoolsApiSecret = "YOUR_API_KEY_HERE";
            }});

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