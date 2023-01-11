<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateDocumentRequest, CreateDocumentResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateDocumentRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    serviceSid: "sit",
  },
  request: {
    data: "voluptas",
    ttl: 6050128673802995827,
    uniqueName: "expedita",
  },
};

sdk.createDocument(req).then((res: CreateDocumentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->