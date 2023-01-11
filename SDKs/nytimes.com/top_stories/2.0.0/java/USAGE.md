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

            GetSectionFormatRequest req = new GetSectionFormatRequest() {{
                pathParams = new GetSectionFormatPathParams() {{
                    format = "json";
                    section = "travel";
                }};
                queryParams = new GetSectionFormatQueryParams() {{
                    callback = "culpa";
                }};
            }};

            GetSectionFormatResponse res = sdk.stories.getSectionFormat(req);

            if (res.getSectionFormat200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->