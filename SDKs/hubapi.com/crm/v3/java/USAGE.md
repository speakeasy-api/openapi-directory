<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest;
import org.openapis.openapi.models.operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse;
import org.openapis.openapi.models.operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest req = new DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest(548814, "provident");            

            DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse res = sdk.cards.deleteCrmV3ExtensionsCardsAppIdCardIdArchive(req, new DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity("distinctio") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->