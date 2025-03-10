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
import org.openapis.openapi.models.operations.GETMostemailedSectionTimePeriodJsonRequest;
import org.openapis.openapi.models.operations.GETMostemailedSectionTimePeriodJsonResponse;
import org.openapis.openapi.models.operations.GETMostemailedSectionTimePeriodJsonSecurity;
import org.openapis.openapi.models.shared.SectionEnum;
import org.openapis.openapi.models.shared.TimePeriodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETMostemailedSectionTimePeriodJsonRequest req = new GETMostemailedSectionTimePeriodJsonRequest(SectionEnum.PUBLIC_EDITOR, TimePeriodEnum.SEVEN);            

            GETMostemailedSectionTimePeriodJsonResponse res = sdk.getMostemailedSectionTimePeriodJson(req, new GETMostemailedSectionTimePeriodJsonSecurity("distinctio") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getMostemailedSectionTimePeriodJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [getMostemailedSectionTimePeriodJson](docs/sdk/README.md#getmostemailedsectiontimeperiodjson) - Most Emailed by Section & Time Period
* [getMostsharedSectionTimePeriodJson](docs/sdk/README.md#getmostsharedsectiontimeperiodjson) - Most Shared by Section & Time Period
* [getMostviewedSectionTimePeriodJson](docs/sdk/README.md#getmostviewedsectiontimeperiodjson) - Most Viewed by Section & Time Period
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
