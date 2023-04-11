<!-- Start SDK Example Usage -->
```typescript
import {
  GetBenefitsDocumentUploadDownloadRequest,
  GetBenefitsDocumentUploadDownloadResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetBenefitsDocumentUploadDownloadRequest = {
  id: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
};

sdk.vbaDocuments.getBenefitsDocumentUploadDownload(req).then((res: GetBenefitsDocumentUploadDownloadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->