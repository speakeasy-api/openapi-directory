<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetMapVersionNumberCopyrightsFormatRequest, GetMapVersionNumberCopyrightsFormatResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetMapVersionNumberCopyrightsFormatRequest = {
  pathParams: {
    format: "json",
    versionNumber: 2259404117704393152,
  },
  queryParams: {
    callback: "culpa",
  },
};

sdk.copyrights.getMapVersionNumberCopyrightsFormat(req).then((res: GetMapVersionNumberCopyrightsFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->