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

            DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest req = new DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest() {{
                security = new DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity() {{
                    developerHapikey = new SchemeDeveloperHapikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteCrmV3ExtensionsCardsAppIdCardIdArchivePathParams() {{
                    appId = 5805871044506062094;
                    cardId = "illo";
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