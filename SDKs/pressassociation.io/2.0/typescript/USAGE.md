<!-- Start SDK Example Usage -->
```typescript
import {
  GetAssetRequest,
  GetAssetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAssetRequest = {
  aliases: false,
  assetId: "corrupti",
};

sdk.asset.getAsset(req).then((res: GetAssetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->