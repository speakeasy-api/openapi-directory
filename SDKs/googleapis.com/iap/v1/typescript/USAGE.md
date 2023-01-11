<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { IapProjectsBrandsCreateRequest, IapProjectsBrandsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: IapProjectsBrandsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    applicationTitle: "dicta",
    supportEmail: "debitis",
  },
};

sdk.projects.iapProjectsBrandsCreate(req).then((res: IapProjectsBrandsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->