<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetSectionFormatRequest, GetSectionFormatResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetSectionFormatRequest = {
  pathParams: {
    format: "json",
    section: "travel",
  },
  queryParams: {
    callback: "culpa",
  },
};

sdk.stories.getSectionFormat(req).then((res: GetSectionFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->