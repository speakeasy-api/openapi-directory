<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAssetRequest, GetAssetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAssetRequest = {
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    assetId: "sit",
  },
  queryParams: {
    aliases: false,
  },
};

sdk.asset.getAsset(req).then((res: GetAssetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->