<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BadWordFilterRequest, BadWordFilterResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    userId: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BadWordFilterRequest = {
  request: {
    catalog: "sit",
    censorCharacter: "voluptas",
    content: "culpa",
    outputCase: "camel",
  },
};

sdk.dataTools.badWordFilter(req).then((res: BadWordFilterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->