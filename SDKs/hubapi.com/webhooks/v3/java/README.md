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

import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSettingsClearSecurity;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSettingsClearPathParams;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSettingsClearRequest;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSettingsClearResponse;
import org.openapis.openapi.models.shared.SchemeDeveloperHapikey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhooksV3AppIdSettingsClearRequest req = new DeleteWebhooksV3AppIdSettingsClearRequest() {{
                security = new DeleteWebhooksV3AppIdSettingsClearSecurity() {{
                    developerHapikey = new SchemeDeveloperHapikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteWebhooksV3AppIdSettingsClearPathParams() {{
                    appId = 548814;
                }};
            }};            

            DeleteWebhooksV3AppIdSettingsClearResponse res = sdk.settings.deleteWebhooksV3AppIdSettingsClear(req);

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


### settings

* `deleteWebhooksV3AppIdSettingsClear`
* `getWebhooksV3AppIdSettingsGetAll`
* `putWebhooksV3AppIdSettingsConfigure`

### subscriptions

* `deleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchive`
* `getWebhooksV3AppIdSubscriptionsSubscriptionIdGetById`
* `getWebhooksV3AppIdSubscriptionsGetAll`
* `patchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdate`
* `postWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatch`
* `postWebhooksV3AppIdSubscriptionsCreate`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
