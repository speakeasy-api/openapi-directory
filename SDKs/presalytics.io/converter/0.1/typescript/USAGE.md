<!-- Start SDK Example Usage -->
```typescript
import {
  SvgconvertFileToConvert,
  SvgconvertResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SvgconvertFileToConvert = {
  file: {
    content: "corrupti".encode(),
    file: "provident",
  },
};

sdk.svgconvert(req).then((res: SvgconvertResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->