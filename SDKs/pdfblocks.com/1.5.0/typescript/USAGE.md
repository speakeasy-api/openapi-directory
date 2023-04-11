<!-- Start SDK Example Usage -->
```typescript
import {
  AddImageWatermarkV1RequestBody,
  AddImageWatermarkV1Response
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: AddImageWatermarkV1RequestBody = {
  file: {
    content: "corrupti".encode(),
    file: "provident",
  },
  image: {
    content: "distinctio".encode(),
    image: "quibusdam",
  },
  margin: 1,
  transparency: 50,
};

sdk.addImageWatermarkV1(req).then((res: AddImageWatermarkV1Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->