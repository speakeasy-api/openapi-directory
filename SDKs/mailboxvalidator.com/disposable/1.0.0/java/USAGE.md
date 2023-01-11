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

            GetV1EmailDisposableRequest req = new GetV1EmailDisposableRequest() {{
                queryParams = new GetV1EmailDisposableQueryParams() {{
                    email = "beatae";
                    format = "json";
                    key = "adipisci";
                }};
            }};

            GetV1EmailDisposableResponse res = sdk.getV1EmailDisposable(req);

            if (res.getV1EmailDisposable200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->