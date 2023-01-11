<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetGlobalwinescoresLatestRequest, GetGlobalwinescoresLatestResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    tokenAuthentication: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetGlobalwinescoresLatestRequest = {
  queryParams: {
    color: "red",
    isPrimeurs: false,
    limit: 6050128673802995827,
    lwin: "expedita",
    lwin11: "consequuntur",
    offset: 2669985732393126063,
    ordering: "-score",
    vintage: "voluptas",
    wineId: [
      1543572285742637646,
    ],
  },
  headers: {
    authorization: "nihil",
  },
};

sdk.globalWineScore.getGlobalwinescoresLatest(req).then((res: GetGlobalwinescoresLatestResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->