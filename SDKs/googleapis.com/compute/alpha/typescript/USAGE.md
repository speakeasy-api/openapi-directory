<!-- Start SDK Example Usage -->
```typescript
import {
  ComputeAcceleratorTypesAggregatedListRequest,
  ComputeAcceleratorTypesAggregatedListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ComputeAcceleratorTypesAggregatedListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  filter: "nulla",
  includeAllScopes: false,
  key: "corrupti",
  maxResults: 847252,
  oauthToken: "vel",
  orderBy: "error",
  pageToken: "deserunt",
  prettyPrint: false,
  project: "suscipit",
  quotaUser: "iure",
  returnPartialSuccess: false,
  uploadType: "magnam",
  uploadProtocol: "debitis",
  userIp: "ipsa",
};

sdk.acceleratorTypes.computeAcceleratorTypesAggregatedList(req).then((res: ComputeAcceleratorTypesAggregatedListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->