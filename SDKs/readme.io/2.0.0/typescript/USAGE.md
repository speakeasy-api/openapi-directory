<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteApiSpecificationRequest, DeleteApiSpecificationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteApiSpecificationRequest = {
  security: {
    apiKey: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    id: "sit",
  },
};

sdk.apiSpecification.deleteApiSpecification(req).then((res: DeleteApiSpecificationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->