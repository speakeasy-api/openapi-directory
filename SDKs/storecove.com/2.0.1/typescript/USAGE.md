<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAdministrationRequest, CreateAdministrationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    bearer: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateAdministrationRequest = {
  pathParams: {
    legalEntityId: 8717895732742165505,
  },
  request: "voluptas",
};

sdk.administrations.createAdministration(req).then((res: CreateAdministrationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->