<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRemovebgFormResponse;
import org.openapis.openapi.models.shared.RemoveBgJson;
import org.openapis.openapi.models.shared.RemoveBgJsonChannelsEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonFormatEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonSizeEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonTypeEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonTypeLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.RemoveBgJson req = new RemoveBgJson() {{
                addShadow = false;
                bgColor = "provident";
                bgImageUrl = "distinctio";
                channels = RemoveBgJsonChannelsEnum.ALPHA;
                crop = false;
                cropMargin = "unde";
                format = RemoveBgJsonFormatEnum.ZIP;
                imageFileB64 = "corrupti";
                imageUrl = "https://www.remove.bg/example-hd.jpg";
                position = "illum";
                roi = "vel";
                scale = "error";
                semitransparency = false;
                size = RemoveBgJsonSizeEnum.FULL;
                type = RemoveBgJsonTypeEnum.PERSON;
                typeLevel = RemoveBgJsonTypeLevelEnum.ONE;
            }};            

            PostRemovebgFormResponse res = sdk.backgroundRemoval.postRemovebgForm(req);

            if (res.removeBgJsonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->