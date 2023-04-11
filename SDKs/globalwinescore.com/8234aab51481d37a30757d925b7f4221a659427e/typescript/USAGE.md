<!-- Start SDK Example Usage -->
```typescript
import {
  GetGlobalwinescoresLatestRequest,
  GetGlobalwinescoresLatestResponse,
  GetGlobalwinescoresLatestColorEnum,
  GetGlobalwinescoresLatestOrderingEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    tokenAuthentication: "YOUR_API_KEY_HERE",
  },
});

const req: GetGlobalwinescoresLatestRequest = {
  authorization: "corrupti",
  color: GetGlobalwinescoresLatestColorEnum.White,
  isPrimeurs: false,
  limit: 715190,
  lwin: "quibusdam",
  lwin11: "unde",
  offset: 857946,
  ordering: GetGlobalwinescoresLatestOrderingEnum.Score,
  vintage: "illum",
  wineId: [
    623564,
    645894,
  ],
};

sdk.globalWineScore.getGlobalwinescoresLatest(req).then((res: GetGlobalwinescoresLatestResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->