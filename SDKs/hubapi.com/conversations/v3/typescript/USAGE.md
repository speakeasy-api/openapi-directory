<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostVisitorIdentificationV3TokensCreateGenerateTokenRequest, PostVisitorIdentificationV3TokensCreateGenerateTokenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostVisitorIdentificationV3TokensCreateGenerateTokenRequest = {
  security: {
    hapikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  request: {
    email: "sit",
    firstName: "voluptas",
    lastName: "culpa",
  },
};

sdk.generate.postVisitorIdentificationV3TokensCreateGenerateToken(req).then((res: PostVisitorIdentificationV3TokensCreateGenerateTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->