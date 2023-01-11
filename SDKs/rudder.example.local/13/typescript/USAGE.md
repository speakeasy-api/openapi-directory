<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ApiGeneralInformationsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiTokens: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));

sdk.apiInfo.apiGeneralInformations().then((res: ApiGeneralInformationsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->