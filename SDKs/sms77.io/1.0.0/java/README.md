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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AnalyticsGroupByEnum;
import org.openapis.openapi.models.operations.AnalyticsQueryParams;
import org.openapis.openapi.models.operations.AnalyticsRequest;
import org.openapis.openapi.models.operations.AnalyticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AnalyticsRequest req = new AnalyticsRequest() {{
                queryParams = new AnalyticsQueryParams() {{
                    end = "corrupti";
                    groupBy = "subaccount";
                    label = "distinctio";
                    start = "quibusdam";
                    subaccounts = "unde";
                }};
            }};            

            AnalyticsResponse res = sdk.analytics.analytics(req);

            if (res.analytics200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### analytics

* `analytics`

### balance

* `balance`

### contacts

* `contactsGet`
* `contactsPOST`

### hooks

* `hooksGet`
* `hooksPOST`

### lookup

* `lookup`
* `lookupCnam`
* `lookupFormat`
* `lookupHlr`
* `lookupMnp`

### pricing

* `pricing`

### sms

* `sms`

### status

* `status`

### validateForVoice

* `validateForVoice`

### voice

* `voice`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
