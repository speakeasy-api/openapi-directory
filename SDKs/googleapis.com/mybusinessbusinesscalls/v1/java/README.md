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
import org.openapis.openapi.models.operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest;
import org.openapis.openapi.models.operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest req = new MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse res = sdk.locations.mybusinessbusinesscallsLocationsBusinesscallsinsightsList(req);

            if (res.listBusinessCallsInsightsResponse != null) {
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


### [locations](docs/locations/README.md)

* [mybusinessbusinesscallsLocationsBusinesscallsinsightsList](docs/locations/README.md#mybusinessbusinesscallslocationsbusinesscallsinsightslist) - Returns insights for Business calls for a location.
* [mybusinessbusinesscallsLocationsGetBusinesscallssettings](docs/locations/README.md#mybusinessbusinesscallslocationsgetbusinesscallssettings) - Returns the Business calls settings resource for the given location.
* [mybusinessbusinesscallsLocationsUpdateBusinesscallssettings](docs/locations/README.md#mybusinessbusinesscallslocationsupdatebusinesscallssettings) - Updates the Business call settings for the specified location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
