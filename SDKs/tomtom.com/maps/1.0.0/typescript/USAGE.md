<!-- Start SDK Example Usage -->
```typescript
import {
  GetMapVersionNumberCopyrightsFormatRequest,
  GetMapVersionNumberCopyrightsFormatResponse,
  GetMapVersionNumberCopyrightsFormatFormatEnum,
  GetMapVersionNumberCopyrightsFormatVersionNumberEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetMapVersionNumberCopyrightsFormatRequest = {
  callback: "corrupti",
  format: GetMapVersionNumberCopyrightsFormatFormatEnum.Jsonp,
  versionNumber: GetMapVersionNumberCopyrightsFormatVersionNumberEnum.One,
};

sdk.copyrights.getMapVersionNumberCopyrightsFormat(req).then((res: GetMapVersionNumberCopyrightsFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->