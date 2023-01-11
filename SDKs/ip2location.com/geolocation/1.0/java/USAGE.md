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
                    addon = new openapisdk.models.operations.GetAddonEnum[]() {{
                        add("region"),
                    }};
                    format = "xml";
                    ip = "expedita";
                    key = "consequuntur";
                    lang = "ko";
                    package_ = "WS18";
                }};
            }};

            GetResponse res = sdk.get(req);

            if (res.get200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->