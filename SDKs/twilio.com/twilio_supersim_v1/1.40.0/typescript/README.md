# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_supersim_v1/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_supersim_v1/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateEsimProfileCreateEsimProfileRequest,
  CreateEsimProfileResponse,
  CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateEsimProfileCreateEsimProfileRequest = {
  callbackMethod: CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum.Patch,
  callbackUrl: "provident",
  eid: "distinctio",
  generateMatchingId: false,
};

sdk.createEsimProfile(req).then((res: CreateEsimProfileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createEsimProfile` - Order an eSIM Profile.
* `createFleet` - Create a Fleet
* `createIpCommand` - Send an IP Command to a Super SIM.
* `createNetworkAccessProfile` - Create a new Network Access Profile
* `createNetworkAccessProfileNetwork` - Add a Network resource to the Network Access Profile resource.
* `createSim` - Register a Super SIM to your Account
* `createSmsCommand` - Send SMS Command to a Sim.
* `deleteNetworkAccessProfileNetwork` - Remove a Network resource from the Network Access Profile resource's.
* `fetchEsimProfile` - Fetch an eSIM Profile.
* `fetchFleet` - Fetch a Fleet instance from your account.
* `fetchIpCommand` - Fetch IP Command instance from your account.
* `fetchNetwork` - Fetch a Network resource.
* `fetchNetworkAccessProfile` - Fetch a Network Access Profile instance from your account.
* `fetchNetworkAccessProfileNetwork` - Fetch a Network Access Profile resource's Network resource.
* `fetchSim` - Fetch a Super SIM instance from your account.
* `fetchSmsCommand` - Fetch SMS Command instance from your account.
* `listBillingPeriod` - Retrieve a list of Billing Periods for a Super SIM.
* `listEsimProfile` - Retrieve a list of eSIM Profiles.
* `listFleet` - Retrieve a list of Fleets from your account.
* `listIpCommand` - Retrieve a list of IP Commands from your account.
* `listNetwork` - Retrieve a list of Network resources.
* `listNetworkAccessProfile` - Retrieve a list of Network Access Profiles from your account.
* `listNetworkAccessProfileNetwork` - Retrieve a list of Network Access Profile resource's Network resource.
* `listSettingsUpdate` - Retrieve a list of Settings Updates.
* `listSim` - Retrieve a list of Super SIMs from your account.
* `listSimIpAddress` - Retrieve a list of IP Addresses for the given Super SIM.
* `listSmsCommand` - Retrieve a list of SMS Commands from your account.
* `listUsageRecord` - List UsageRecords
* `updateFleet` - Updates the given properties of a Super SIM Fleet instance from your account.
* `updateNetworkAccessProfile` - Updates the given properties of a Network Access Profile in your account.
* `updateSim` - Updates the given properties of a Super SIM instance from your account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

