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