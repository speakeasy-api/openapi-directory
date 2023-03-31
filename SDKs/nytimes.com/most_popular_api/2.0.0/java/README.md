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

import org.openapis.openapi.models.operations.GETMostemailedSectionTimePeriodJsonSecurity;
import org.openapis.openapi.models.operations.GETMostemailedSectionTimePeriodJsonPathParams;
import org.openapis.openapi.models.operations.GETMostemailedSectionTimePeriodJsonRequest;
import org.openapis.openapi.models.operations.GETMostemailedSectionTimePeriodJsonResponse;
import org.openapis.openapi.models.shared.TimePeriodEnum;
import org.openapis.openapi.models.shared.SectionEnum;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETMostemailedSectionTimePeriodJsonRequest req = new GETMostemailedSectionTimePeriodJsonRequest() {{
                security = new GETMostemailedSectionTimePeriodJsonSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new GETMostemailedSectionTimePeriodJsonPathParams() {{
                    section = "Public Editor";
                    timePeriod = "7";
                }};
            }};            

            GETMostemailedSectionTimePeriodJsonResponse res = sdk.getMostemailedSectionTimePeriodJson(req);

            if (res.getMostemailedSectionTimePeriodJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getMostemailedSectionTimePeriodJson` - Most Emailed by Section & Time Period
* `getMostsharedSectionTimePeriodJson` - Most Shared by Section & Time Period
* `getMostviewedSectionTimePeriodJson` - Most Viewed by Section & Time Period
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
