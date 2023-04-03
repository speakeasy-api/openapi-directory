<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAddonEnum;
import org.openapis.openapi.models.operations.GetFormatEnum;
import org.openapis.openapi.models.operations.GetLangEnum;
import org.openapis.openapi.models.operations.GetPackageEnum;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest() {{
                addon = new org.openapis.openapi.models.operations.GetAddonEnum[]{{
                    add("geotargeting"),
                    add("country_groupings"),
                    add("country_groupings"),
                }};
                format = "xml";
                ip = "8.8.8.8";
                key = "nulla";
                lang = "ja";
                package_ = "WS22";
            }}            

            GetResponse res = sdk.get(req);

            if (res.get200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->