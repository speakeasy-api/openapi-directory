<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetPersonasRequest, GetPersonasResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    httpBearer: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: GetPersonasRequest = {
  queryParams: {
    count: 8717895732742165505,
    expand: [
      "culpa",
    ],
    fields: [
      "consequuntur",
      "dolor",
    ],
    name: "expedita",
    page: 6044372234677422456,
  },
};

sdk.persona.getPersonas(req).then((res: GetPersonasResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->