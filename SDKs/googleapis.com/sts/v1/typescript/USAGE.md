<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { StsIntrospectRequest, StsIntrospectResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: StsIntrospectRequest = {
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    prettyPrint: true,
    quotaUser: "fugit",
    uploadType: "et",
    uploadProtocol: "nihil",
  },
  request: {
    token: "rerum",
    tokenTypeHint: "dicta",
  },
};

sdk.v1.stsIntrospect(req).then((res: StsIntrospectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->