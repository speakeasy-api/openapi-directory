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
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetSearchVersionNumberAdditionalDataExtRequest req = new GetSearchVersionNumberAdditionalDataExtRequest() {{
                pathParams = new GetSearchVersionNumberAdditionalDataExtPathParams() {{
                    ext = "json";
                    versionNumber = 6910103553472090033;
                }};
                queryParams = new GetSearchVersionNumberAdditionalDataExtQueryParams() {{
                    geometries = "debitis";
                    geometriesZoom = 3507238623703885833;
                }};
            }};

            GetSearchVersionNumberAdditionalDataExtResponse res = sdk.additionalData.getSearchVersionNumberAdditionalDataExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->