# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/patientview.org/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/patientview.org/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetBasicUserInformationRequest,
  GetBasicUserInformationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetBasicUserInformationRequest = {
  token: "corrupti",
};

sdk.authController.getBasicUserInformation(req).then((res: GetBasicUserInformationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

