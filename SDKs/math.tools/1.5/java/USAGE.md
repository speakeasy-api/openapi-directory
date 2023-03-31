<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetNumbersBaseSecurity;
import org.openapis.openapi.models.operations.GetNumbersBaseQueryParams;
import org.openapis.openapi.models.operations.GetNumbersBaseRequest;
import org.openapis.openapi.models.operations.GetNumbersBaseResponse;
import org.openapis.openapi.models.shared.SchemeXMathtoolsAPISecret;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersBaseRequest req = new GetNumbersBaseRequest() {{
                security = new GetNumbersBaseSecurity() {{
                    xMathtoolsApiSecret = new SchemeXMathtoolsAPISecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetNumbersBaseQueryParams() {{
                    from = 548814;
                    number = 592845;
                    to = 715190;
                }};
            }};            

            GetNumbersBaseResponse res = sdk.baseConversion.getNumbersBase(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->