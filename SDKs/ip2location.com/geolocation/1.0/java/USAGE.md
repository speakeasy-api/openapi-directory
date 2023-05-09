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

            GetRequest req = new GetRequest("8.8.8.8", "corrupti") {{
                addon = new org.openapis.openapi.models.operations.GetAddonEnum[]{{
                    add(GetAddonEnum.COUNTRY_GROUPINGS),
                    add(GetAddonEnum.COUNTRY_GROUPINGS),
                    add(GetAddonEnum.GEOTARGETING),
                }};
                format = GetFormatEnum.XML;
                lang = GetLangEnum.JA;
                package_ = GetPackageEnum.WS22;
            }};            

            GetResponse res = sdk.get(req);

            if (res.get200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->