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

import org.openapis.openapi.models.operations.GetBasicUserInformationPathParams;
import org.openapis.openapi.models.operations.GetBasicUserInformationRequest;
import org.openapis.openapi.models.operations.GetBasicUserInformationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBasicUserInformationRequest req = new GetBasicUserInformationRequest() {{
                pathParams = new GetBasicUserInformationPathParams() {{
                    token = "corrupti";
                }};
            }};            

            GetBasicUserInformationResponse res = sdk.authController.getBasicUserInformation(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### authController

* `getBasicUserInformation` - Get Basic User Information
* `logIn` - Log In
* `logOut` - Log Out

### observationController

* `getObservationsByCode` - Get Observations of a Certain Type For a User
* `getObservationsByCodes` - Get Observations of Multiple Types For a User
* `getPatientEnteredObservationsByCode` - Get patient entered Observations of a Certain Type For a User

### observationHeadingController

* `getAvailableObservationHeadings` - Get Available Observations Types For a User
* `getPatientEnteredObservationHeadings` - Get Available Patient Entered Observations Types For a User

### patientController

* `getBasicPatientDetails` - Get Basic Patient Information

### patientManagementController

* `getPatientManagement` - getPatientManagement
* `getPatientManagementDiagnoses` - getPatientManagementDiagnoses
* `getPatientManagementLookupTypes` - getPatientManagementLookupTypes
* `savePatientManagement` - savePatientManagement
* `savePatientManagementSurgeries` - savePatientManagementSurgeries
* `validatePatientManagement` - validatePatientManagement
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
