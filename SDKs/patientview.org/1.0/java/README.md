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
import org.openapis.openapi.models.operations.GetBasicUserInformationRequest;
import org.openapis.openapi.models.operations.GetBasicUserInformationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBasicUserInformationRequest req = new GetBasicUserInformationRequest("corrupti");            

            GetBasicUserInformationResponse res = sdk.authController.getBasicUserInformation(req);

            if (res.body != null) {
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


### [authController](docs/authcontroller/README.md)

* [getBasicUserInformation](docs/authcontroller/README.md#getbasicuserinformation) - Get Basic User Information
* [logIn](docs/authcontroller/README.md#login) - Log In
* [logOut](docs/authcontroller/README.md#logout) - Log Out

### [observationController](docs/observationcontroller/README.md)

* [getObservationsByCode](docs/observationcontroller/README.md#getobservationsbycode) - Get Observations of a Certain Type For a User
* [getObservationsByCodes](docs/observationcontroller/README.md#getobservationsbycodes) - Get Observations of Multiple Types For a User
* [getPatientEnteredObservationsByCode](docs/observationcontroller/README.md#getpatiententeredobservationsbycode) - Get patient entered Observations of a Certain Type For a User

### [observationHeadingController](docs/observationheadingcontroller/README.md)

* [getAvailableObservationHeadings](docs/observationheadingcontroller/README.md#getavailableobservationheadings) - Get Available Observations Types For a User
* [getPatientEnteredObservationHeadings](docs/observationheadingcontroller/README.md#getpatiententeredobservationheadings) - Get Available Patient Entered Observations Types For a User

### [patientController](docs/patientcontroller/README.md)

* [getBasicPatientDetails](docs/patientcontroller/README.md#getbasicpatientdetails) - Get Basic Patient Information

### [patientManagementController](docs/patientmanagementcontroller/README.md)

* [getPatientManagement](docs/patientmanagementcontroller/README.md#getpatientmanagement) - getPatientManagement
* [getPatientManagementDiagnoses](docs/patientmanagementcontroller/README.md#getpatientmanagementdiagnoses) - getPatientManagementDiagnoses
* [getPatientManagementLookupTypes](docs/patientmanagementcontroller/README.md#getpatientmanagementlookuptypes) - getPatientManagementLookupTypes
* [savePatientManagement](docs/patientmanagementcontroller/README.md#savepatientmanagement) - savePatientManagement
* [savePatientManagementSurgeries](docs/patientmanagementcontroller/README.md#savepatientmanagementsurgeries) - savePatientManagementSurgeries
* [validatePatientManagement](docs/patientmanagementcontroller/README.md#validatepatientmanagement) - validatePatientManagement
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
