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
import org.openapis.openapi.models.operations.MybusinesslodgingLocationsGetLodgingRequest;
import org.openapis.openapi.models.operations.MybusinesslodgingLocationsGetLodgingResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinesslodgingLocationsGetLodgingRequest req = new MybusinesslodgingLocationsGetLodgingRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                readMask = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            MybusinesslodgingLocationsGetLodgingResponse res = sdk.locations.mybusinesslodgingLocationsGetLodging(req);

            if (res.lodging != null) {
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

* [mybusinesslodgingLocationsGetLodging](docs/locations/README.md#mybusinesslodginglocationsgetlodging) - Returns the Lodging of a specific location.
* [mybusinesslodgingLocationsLodgingGetGoogleUpdated](docs/locations/README.md#mybusinesslodginglocationslodginggetgoogleupdated) - Returns the Google updated Lodging of a specific location.
* [mybusinesslodgingLocationsUpdateLodging](docs/locations/README.md#mybusinesslodginglocationsupdatelodging) - Updates the Lodging of a specific location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
