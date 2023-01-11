<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { MergeTemplateRequest, MergeTemplateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    jsonWebTokenAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: MergeTemplateRequest = {
  queryParams: {
    format: "zip",
    name: "voluptas",
    output: "url",
    templateId: 501233450539197794,
  },
  request: {
    id: 3390393562759376202,
    name: "dolor",
  },
};

sdk.documents.mergeTemplate(req).then((res: MergeTemplateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->