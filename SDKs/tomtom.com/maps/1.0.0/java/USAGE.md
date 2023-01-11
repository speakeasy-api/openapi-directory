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

            GetMapVersionNumberCopyrightsFormatRequest req = new GetMapVersionNumberCopyrightsFormatRequest() {{
                pathParams = new GetMapVersionNumberCopyrightsFormatPathParams() {{
                    format = "json";
                    versionNumber = 2259404117704393152;
                }};
                queryParams = new GetMapVersionNumberCopyrightsFormatQueryParams() {{
                    callback = "culpa";
                }};
            }};

            GetMapVersionNumberCopyrightsFormatResponse res = sdk.copyrights.getMapVersionNumberCopyrightsFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->