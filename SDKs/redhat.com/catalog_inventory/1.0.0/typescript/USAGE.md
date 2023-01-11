<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetDocumentationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    userSecurity: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  }
));

sdk.getDocumentation().then((res: GetDocumentationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->