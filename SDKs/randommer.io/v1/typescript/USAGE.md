<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetApiCardRequest, GetApiCardResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetApiCardRequest = {
  queryParams: {
    type: "sit",
  },
  headers: {
    xApiKey: "voluptas",
  },
};

sdk.card.getApiCard(req).then((res: GetApiCardResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->