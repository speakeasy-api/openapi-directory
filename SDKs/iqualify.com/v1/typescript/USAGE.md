<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    authorization: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));

sdk.apiInfo.get().then((res: GetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->