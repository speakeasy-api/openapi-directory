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
                    keys = new String[]() {{
                        add("et"),
                    }};
                }};
                headers = new GetHeaders() {{
                    xMarketId = "non";
                    xPrivateLabelId = 618446600806163976;
                }};
            }};

            GetResponse res = sdk.v1.get(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->