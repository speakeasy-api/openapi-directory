<!-- Start SDK Example Usage -->
```typescript
import {
  ReplicapoolPoolsDeleteRequest,
  ReplicapoolPoolsDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ReplicapoolPoolsDeleteRequest = {
  poolsDeleteRequest: {
    abandonInstances: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
  },
  alt: AltEnum.Json,
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  poolName: "illum",
  prettyPrint: false,
  projectName: "vel",
  quotaUser: "error",
  userIp: "deserunt",
  zone: "suscipit",
};

sdk.pools.replicapoolPoolsDelete(req).then((res: ReplicapoolPoolsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->