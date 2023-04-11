<!-- Start SDK Example Usage -->
```typescript
import {
  GetV2AccountStagesJsonRequest,
  GetV2AccountStagesJsonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetV2AccountStagesJsonRequest = {
  ids: [
    592845,
    715190,
    844266,
  ],
  includePagingCounts: false,
  limitPagingCounts: false,
  page: 602763,
  perPage: 857946,
  sortBy: "corrupti",
  sortDirection: "illum",
  updatedAt: [
    "error",
    "deserunt",
  ],
};

sdk.accountStages.getV2AccountStagesJson(req).then((res: GetV2AccountStagesJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->