<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAttachmentRequest,
  CreateAttachmentResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateAttachmentRequest = {
  bucketId: "corrupti",
  collectionId: "provident",
  id: "distinctio",
};

sdk.attachment.createAttachment(req).then((res: CreateAttachmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->