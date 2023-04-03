<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PostRemovebgFormResponse;
import org.openapis.openapi.models.shared.RemoveBgJsonChannelsEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonFormatEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonSizeEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonTypeEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonTypeLevelEnum;
import org.openapis.openapi.models.shared.RemoveBgJson;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.RemoveBgJson req = new RemoveBgJson() {{
                addShadow = false;
                bgColor = "corrupti";
                bgImageUrl = "provident";
                channels = "alpha";
                crop = false;
                cropMargin = "quibusdam";
                format = "jpg";
                imageFileB64 = "nulla";
                imageUrl = "https://www.remove.bg/example-hd.jpg";
                position = "corrupti";
                roi = "illum";
                scale = "vel";
                semitransparency = false;
                size = "full";
                type = "product";
                typeLevel = "1";
            }}            

            PostRemovebgFormResponse res = sdk.backgroundRemoval.postRemovebgForm(req);

            if (res.removeBgJsonResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->