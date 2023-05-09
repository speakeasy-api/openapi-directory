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
import org.openapis.openapi.models.operations.FetchPhoneNumberRequest;
import org.openapis.openapi.models.operations.FetchPhoneNumberResponse;
import org.openapis.openapi.models.operations.FetchPhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPhoneNumberRequest req = new FetchPhoneNumberRequest("corrupti");            

            FetchPhoneNumberResponse res = sdk.fetchPhoneNumber(req, new FetchPhoneNumberSecurity("provident", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.routesV2PhoneNumber != null) {
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

* [fetchPhoneNumber](docs/sdk/README.md#fetchphonenumber) - Fetch the Inbound Processing Region assigned to a phone number.
* [fetchSipDomain](docs/sdk/README.md#fetchsipdomain)
* [fetchTrunks](docs/sdk/README.md#fetchtrunks) - Fetch the Inbound Processing Region assigned to a SIP Trunk.
* [updatePhoneNumber](docs/sdk/README.md#updatephonenumber) - Assign an Inbound Processing Region to a phone number.
* [updateSipDomain](docs/sdk/README.md#updatesipdomain)
* [updateTrunks](docs/sdk/README.md#updatetrunks) - Assign an Inbound Processing Region to a SIP Trunk
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
