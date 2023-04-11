<!-- Start SDK Example Usage -->
```typescript
import {
  GetResourcesCampaignsJsonRequest,
  GetResourcesCampaignsJsonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetResourcesCampaignsJsonRequest = {
  max: 548814,
  offset: 592845,
  sort: "distinctio",
};

sdk.campaigns.getResourcesCampaignsJson(req).then((res: GetResourcesCampaignsJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->