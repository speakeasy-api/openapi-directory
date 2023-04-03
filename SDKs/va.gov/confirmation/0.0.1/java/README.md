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

import org.openapis.openapi.models.operations.GetVeteranStatusSecurity;
import org.openapis.openapi.models.operations.GetVeteranStatusResponse;
import org.openapis.openapi.models.shared.VeteranStatusRequestGenderEnum;
import org.openapis.openapi.models.shared.VeteranStatusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.VeteranStatusRequest req = new VeteranStatusRequest() {{
                birthDate = "1965-01-01";
                firstName = "John";
                gender = "M";
                lastName = "Doe";
                middleName = "Theodore";
                ssn = "555-55-5555";
            }}            

            GetVeteranStatusResponse res = sdk.veteranConfirmationStatus.getVeteranStatus(req, new GetVeteranStatusSecurity() {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.veteranStatusConfirmation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### veteranConfirmationStatus

* `getVeteranStatus` - Get confirmation about an individual's Veteran status according to the VA
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
