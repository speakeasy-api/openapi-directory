<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetBenefitsDocumentUploadDownloadRequest, GetBenefitsDocumentUploadDownloadResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetBenefitsDocumentUploadDownloadRequest = {
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    id: "sit",
  },
};

sdk.vbaDocuments.getBenefitsDocumentUploadDownload(req).then((res: GetBenefitsDocumentUploadDownloadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->