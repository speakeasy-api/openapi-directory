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