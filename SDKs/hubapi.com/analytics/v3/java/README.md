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

import org.openapis.openapi.models.operations.PostEventsV3SendSecurity;
import org.openapis.openapi.models.operations.PostEventsV3SendRequest;
import org.openapis.openapi.models.operations.PostEventsV3SendResponse;
import org.openapis.openapi.models.shared.BehavioralEventHttpCompletionRequest;
import org.openapis.openapi.models.shared.SchemeHapikey;
import org.openapis.openapi.models.shared.SchemeOauth2Legacy;
import org.openapis.openapi.models.shared.SchemePrivateAppsLegacy;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostEventsV3SendRequest req = new PostEventsV3SendRequest() {{
                security = new PostEventsV3SendSecurity() {{
                    hapikey = new SchemeHapikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new BehavioralEventHttpCompletionRequest() {{
                    email = "Larue_Rau85@yahoo.com";
                    eventName = "corrupti";
                    objectId = "illum";
                    occurredAt = "2022-05-18T09:34:54.894Z";
                    properties = new java.util.HashMap<String, String>() {{
                        put("suscipit", "iure");
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    utk = "tempora";
                }};
            }};            

            PostEventsV3SendResponse res = sdk.behavioralEventsTracking.postEventsV3Send(req);

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


### behavioralEventsTracking

* `postEventsV3Send` - Sends Custom Behavioral Event
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
