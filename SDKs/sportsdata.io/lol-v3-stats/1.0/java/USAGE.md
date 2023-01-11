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
                    apiKeyHeader = new SchemeApiKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

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