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
                    from = 8717895732742165505;
                    number = 2259404117704393152;
                    to = 6050128673802995827;
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