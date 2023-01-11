<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddShortlinkRequest, AddShortlinkResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AddShortlinkRequest = {
  request: {
    keyid: "sit",
    shortlink: "voluptas",
  },
};

sdk.addShortlink.addShortlink(req).then((res: AddShortlinkResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->