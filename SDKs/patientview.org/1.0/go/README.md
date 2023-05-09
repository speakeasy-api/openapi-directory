# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/patientview.org/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AuthController.GetBasicUserInformation(ctx, operations.GetBasicUserInformationRequest{
        Token: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AuthController](docs/authcontroller/README.md)

* [GetBasicUserInformation](docs/authcontroller/README.md#getbasicuserinformation) - Get Basic User Information
* [LogIn](docs/authcontroller/README.md#login) - Log In
* [LogOut](docs/authcontroller/README.md#logout) - Log Out

### [ObservationController](docs/observationcontroller/README.md)

* [GetObservationsByCode](docs/observationcontroller/README.md#getobservationsbycode) - Get Observations of a Certain Type For a User
* [GetObservationsByCodes](docs/observationcontroller/README.md#getobservationsbycodes) - Get Observations of Multiple Types For a User
* [GetPatientEnteredObservationsByCode](docs/observationcontroller/README.md#getpatiententeredobservationsbycode) - Get patient entered Observations of a Certain Type For a User

### [ObservationHeadingController](docs/observationheadingcontroller/README.md)

* [GetAvailableObservationHeadings](docs/observationheadingcontroller/README.md#getavailableobservationheadings) - Get Available Observations Types For a User
* [GetPatientEnteredObservationHeadings](docs/observationheadingcontroller/README.md#getpatiententeredobservationheadings) - Get Available Patient Entered Observations Types For a User

### [PatientController](docs/patientcontroller/README.md)

* [GetBasicPatientDetails](docs/patientcontroller/README.md#getbasicpatientdetails) - Get Basic Patient Information

### [PatientManagementController](docs/patientmanagementcontroller/README.md)

* [GetPatientManagement](docs/patientmanagementcontroller/README.md#getpatientmanagement) - getPatientManagement
* [GetPatientManagementDiagnoses](docs/patientmanagementcontroller/README.md#getpatientmanagementdiagnoses) - getPatientManagementDiagnoses
* [GetPatientManagementLookupTypes](docs/patientmanagementcontroller/README.md#getpatientmanagementlookuptypes) - getPatientManagementLookupTypes
* [SavePatientManagement](docs/patientmanagementcontroller/README.md#savepatientmanagement) - savePatientManagement
* [SavePatientManagementSurgeries](docs/patientmanagementcontroller/README.md#savepatientmanagementsurgeries) - savePatientManagementSurgeries
* [ValidatePatientManagement](docs/patientmanagementcontroller/README.md#validatepatientmanagement) - validatePatientManagement
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
