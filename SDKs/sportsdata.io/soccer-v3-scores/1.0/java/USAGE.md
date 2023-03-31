<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AreasCountriesFormatEnum;
import org.openapis.openapi.models.operations.AreasCountriesPathParams;
import org.openapis.openapi.models.operations.AreasCountriesRequest;
import org.openapis.openapi.models.operations.AreasCountriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = new SchemeAPIKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AreasCountriesRequest req = new AreasCountriesRequest() {{
                pathParams = new AreasCountriesPathParams() {{
                    format = "json";
                }};
            }};            

            AreasCountriesResponse res = sdk.areasCountries(req);

            if (res.areas.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->