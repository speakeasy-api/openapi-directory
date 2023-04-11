<!-- Start SDK Example Usage -->
```typescript
import {
  DiscoveryApisGetRestRequest,
  DiscoveryApisGetRestResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DiscoveryApisGetRestRequest = {
  alt: AltEnum.Json,
  api: "corrupti",
  fields: "provident",
  key: "distinctio",
  oauthToken: "quibusdam",
  prettyPrint: false,
  quotaUser: "unde",
  userIp: "nulla",
  version: "corrupti",
};

sdk.apis.discoveryApisGetRest(req).then((res: DiscoveryApisGetRestResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->