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

            GetV1CategoryListOutputFormatRequest req = new GetV1CategoryListOutputFormatRequest() {{
                pathParams = new GetV1CategoryListOutputFormatPathParams() {{
                    outputFormat = "json";
                }};
                queryParams = new GetV1CategoryListOutputFormatQueryParams() {{
                    apiKey = "voluptas";
                    type = "user";
                }};
            }};

            GetV1CategoryListOutputFormatResponse res = sdk.getV1CategoryListOutputFormat(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->