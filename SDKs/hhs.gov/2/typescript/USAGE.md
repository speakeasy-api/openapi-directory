<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetResourcesCampaignsJsonRequest, GetResourcesCampaignsJsonResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetResourcesCampaignsJsonRequest = {
  queryParams: {
    max: 8717895732742165505,
    offset: 2259404117704393152,
    sort: "culpa",
  },
};

sdk.campaigns.getResourcesCampaignsJson(req).then((res: GetResourcesCampaignsJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->