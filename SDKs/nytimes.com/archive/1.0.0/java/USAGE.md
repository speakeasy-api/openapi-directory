<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetYearMonthJsonRequest req = new GetYearMonthJsonRequest() {{
                pathParams = new GetYearMonthJsonPathParams() {{
                    month = 3750467686941260453;
                    year = 6927431613354863328;
                }};
            }};

            GetYearMonthJsonResponse res = sdk.archive.getYearMonthJson(req);

            if (res.getYearMonthJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->