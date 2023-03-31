<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity;
import org.openapis.openapi.models.operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchivePathParams;
import org.openapis.openapi.models.operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest;
import org.openapis.openapi.models.operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse;
import org.openapis.openapi.models.shared.SchemeDeveloperHapikey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest req = new DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest() {{
                security = new DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity() {{
                    developerHapikey = new SchemeDeveloperHapikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteCrmV3ExtensionsCardsAppIdCardIdArchivePathParams() {{
                    appId = 548814;
                    cardId = "provident";
                }};
            }};            

            DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse res = sdk.cards.deleteCrmV3ExtensionsCardsAppIdCardIdArchive(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->