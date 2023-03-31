# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### definition

* `getCommunicationPreferencesV3DefinitionsGetPage` - Get subscription definitions

### status

* `getCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus` - Get subscription statuses for a contact
* `postCommunicationPreferencesV3SubscribeSubscribe` - Subscribe a contact
* `postCommunicationPreferencesV3UnsubscribeUnsubscribe` - Unsubscribe a contact
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
