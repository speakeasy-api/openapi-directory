<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteAttributesComputedIdRequest, DeleteAttributesComputedIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  }
));
    
const req: DeleteAttributesComputedIdRequest = {
  pathParams: {
    id: 8717895732742165505,
  },
};

sdk.attributes.deleteAttributesComputedId(req).then((res: DeleteAttributesComputedIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->