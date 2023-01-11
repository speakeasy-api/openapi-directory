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

            SendAnSmsRequest req = new SendAnSmsRequest() {{
                pathParams = new SendAnSmsPathParams() {{
                    format = "json";
                }};
                request = "voluptas";
            }};

            SendAnSmsResponse res = sdk.sendAnSms(req);

            if (res.sendAnSms200ApplicationJSONOneOf.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->