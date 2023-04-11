<!-- Start SDK Example Usage -->
```typescript
import {
  GetOrganizationApiRequestsRequest,
  GetOrganizationApiRequestsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    merakiApiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetOrganizationApiRequestsRequest = {
  adminId: "corrupti",
  endingBefore: "provident",
  method: "distinctio",
  organizationId: "quibusdam",
  path: "unde",
  perPage: 857946,
  responseCode: 544883,
  sourceIp: "illum",
  startingAfter: "vel",
  t0: "error",
  t1: "deserunt",
  timespan: 3843.82,
};

sdk.apiUsage.getOrganizationApiRequests(req).then((res: GetOrganizationApiRequestsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->