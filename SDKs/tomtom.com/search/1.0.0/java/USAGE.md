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
                    versionNumber = 2259404117704393152;
                }};
                queryParams = new GetSearchVersionNumberAdditionalDataExtQueryParams() {{
                    geometries = "culpa";
                    geometriesZoom = 501233450539197794;
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