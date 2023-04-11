<!-- Start SDK Example Usage -->
```typescript
import {
  MergeTemplateRequest,
  MergeTemplateResponse
} from "openapi/dist/sdk/models/operations";
import {
  OutputEnum,
  FormatEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    jsonWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: MergeTemplateRequest = {
  data: {
    id: 12312,
    name: "Sample Data",
  },
  format: FormatEnum.Pdf,
  name: "My document",
  output: OutputEnum.Base64,
  templateId: 19375,
};

sdk.documents.mergeTemplate(req).then((res: MergeTemplateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->