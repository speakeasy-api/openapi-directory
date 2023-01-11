<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetRequest, GetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetRequest = {
  queryParams: {
    addon: [
      "region",
    ],
    format: "xml",
    ip: "expedita",
    key: "consequuntur",
    lang: "ko",
    package: "WS18",
  },
};

sdk.get(req).then((res: GetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->