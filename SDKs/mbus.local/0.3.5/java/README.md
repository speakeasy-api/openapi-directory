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
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;
import org.openapis.openapi.models.shared.BaudrateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest("48", BaudrateEnum.TWO_THOUSAND_FOUR_HUNDRED, "ttyAMA0");            

            GetResponse res = sdk.get(req);

            if (res.mbusData != null) {
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

* [get](docs/sdk/README.md#get) - Gets data from the slave identified by {address}
* [getMulti](docs/sdk/README.md#getmulti) - Gets data from the slave identified by {address}, and supports multiple responses from the slave
* [hat](docs/sdk/README.md#hat) - Gets Raspberry Pi Hat information
* [hatOff](docs/sdk/README.md#hatoff) - Turns off power to the M-Bus
* [hatOn](docs/sdk/README.md#haton) - Turns on power to the M-Bus
* [mbusApi](docs/sdk/README.md#mbusapi) - Returns this API specification
* [scan](docs/sdk/README.md#scan) - Scan the specified device for slaves
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
