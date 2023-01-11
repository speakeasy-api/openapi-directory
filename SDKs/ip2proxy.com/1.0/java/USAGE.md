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

            GetRequest req = new GetRequest() {{
                queryParams = new GetQueryParams() {{
                    format = "xml";
                    ip = "non";
                    key = "voluptates";
                    package_ = "iusto";
                }};
            }};

            GetResponse res = sdk.get(req);

            if (res.get200TextHTMLString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->