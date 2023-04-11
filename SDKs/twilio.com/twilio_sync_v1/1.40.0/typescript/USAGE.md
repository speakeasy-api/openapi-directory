<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDocumentRequest,
  CreateDocumentResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateDocumentRequest = {
  requestBody: {
    data: "corrupti",
    ttl: 592845,
    uniqueName: "distinctio",
  },
  serviceSid: "quibusdam",
};

sdk.createDocument(req).then((res: CreateDocumentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->