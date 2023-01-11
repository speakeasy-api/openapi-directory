<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetEntryInfoInfoEntryGetRequest, GetEntryInfoInfoEntryGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetEntryInfoInfoEntryGetRequest = {
  pathParams: {
    entry: "sit",
  },
};

sdk.info.getEntryInfoInfoEntryGet(req).then((res: GetEntryInfoInfoEntryGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->