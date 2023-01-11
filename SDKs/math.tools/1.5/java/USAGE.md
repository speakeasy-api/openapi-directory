<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetNumbersBaseRequest req = new GetNumbersBaseRequest() {{
                security = new GetNumbersBaseSecurity() {{
                    xMathtoolsApiSecret = new SchemeXMathtoolsApiSecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetNumbersBaseQueryParams() {{
                    from = 8225399839890232258;
                    number = 3040496219467278628;
                    to = 2023755713546139166;
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