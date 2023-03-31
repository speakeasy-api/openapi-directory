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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### cards

* `deleteCrmV3ExtensionsCardsAppIdCardIdArchive` - Delete a card
* `getCrmV3ExtensionsCardsAppIdCardIdGetById` - Get a card.
* `getCrmV3ExtensionsCardsAppIdGetAll` - Get all cards
* `patchCrmV3ExtensionsCardsAppIdCardIdUpdate` - Update a card
* `postCrmV3ExtensionsCardsAppIdCreate` - Create a new card

### sampleResponse

* `getCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse` - Get sample card detail response
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
