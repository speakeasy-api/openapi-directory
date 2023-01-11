<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetApiPdfResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    oAuth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));

sdk.pdf.getApiPdf().then((res: GetApiPdfResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->