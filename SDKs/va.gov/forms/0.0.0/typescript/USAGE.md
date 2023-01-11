<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FindFormByFormNameRequest, FindFormByFormNameResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FindFormByFormNameRequest = {
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    formName: "sit",
  },
};

sdk.forms.findFormByFormName(req).then((res: FindFormByFormNameResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->