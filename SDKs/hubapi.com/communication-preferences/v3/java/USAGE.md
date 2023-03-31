<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetCommunicationPreferencesV3DefinitionsGetPageSecurity;
import org.openapis.openapi.models.operations.GetCommunicationPreferencesV3DefinitionsGetPageRequest;
import org.openapis.openapi.models.operations.GetCommunicationPreferencesV3DefinitionsGetPageResponse;
import org.openapis.openapi.models.shared.SchemeHapikey;
import org.openapis.openapi.models.shared.SchemeOauth2Legacy;
import org.openapis.openapi.models.shared.SchemePrivateAppsLegacy;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCommunicationPreferencesV3DefinitionsGetPageRequest req = new GetCommunicationPreferencesV3DefinitionsGetPageRequest() {{
                security = new GetCommunicationPreferencesV3DefinitionsGetPageSecurity() {{
                    hapikey = new SchemeHapikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
            }};            

            GetCommunicationPreferencesV3DefinitionsGetPageResponse res = sdk.definition.getCommunicationPreferencesV3DefinitionsGetPage(req);

            if (res.subscriptionDefinitionsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->