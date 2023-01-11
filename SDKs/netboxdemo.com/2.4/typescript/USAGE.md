<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CircuitsChoicesListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    bearer: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));

sdk.circuits.circuitsChoicesList().then((res: CircuitsChoicesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->