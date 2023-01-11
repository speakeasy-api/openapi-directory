<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAuthinfoResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    cookieSid: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));

sdk.authinfo.getAuthinfo().then((res: GetAuthinfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->