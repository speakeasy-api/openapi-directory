<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateExportCustomJobRequest, CreateExportCustomJobResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateExportCustomJobRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    resourceType: "sit",
  },
  request: {
    email: "voluptas",
    endDay: "culpa",
    friendlyName: "expedita",
    startDay: "consequuntur",
    webhookMethod: "dolor",
    webhookUrl: "expedita",
  },
};

sdk.createExportCustomJob(req).then((res: CreateExportCustomJobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->