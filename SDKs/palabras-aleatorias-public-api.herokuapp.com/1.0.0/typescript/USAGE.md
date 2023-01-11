<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAddWordRequest, GetAddWordResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAddWordRequest = {
  queryParams: {
    author: "sit",
    definition: "voluptas",
    related: "culpa",
    word: "expedita",
  },
};

sdk.getAddWord(req).then((res: GetAddWordResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->