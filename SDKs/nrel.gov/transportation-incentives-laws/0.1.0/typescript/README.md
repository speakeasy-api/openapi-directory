# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nrel.gov/transportation-incentives-laws/0.1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nrel.gov/transportation-incentives-laws/0.1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  TransportationIncentivesLawsAllRequest,
  TransportationIncentivesLawsAllResponse,
  TransportationIncentivesLawsAllOutputFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TransportationIncentivesLawsAllRequest = {
  apiKey: "corrupti",
  expired: false,
  incentiveType: "provident",
  jurisdiction: "distinctio",
  keyword: "quibusdam",
  lawType: "unde",
  limit: 857946,
  local: false,
  outputFormat: TransportationIncentivesLawsAllOutputFormatEnum.Xml,
  poc: false,
  recent: false,
  regulationType: "illum",
  technology: "vel",
  userType: "error",
};

sdk.transportationIncentivesLawsAll(req).then((res: TransportationIncentivesLawsAllResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `transportationIncentivesLawsAll` - Return a full list of laws and incentives that match your query.
* `transportationIncentivesLawsCategories` - Return the law categories for a given category type.
* `transportationIncentivesLawsId` - Fetch the details of a specific law given the law's ID.
* `transportationIncentivesLawsPocs` - Get the points of contact for a given jurisdiction.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

