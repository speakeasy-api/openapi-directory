<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DomainsrdapAutnumGetRequest, DomainsrdapAutnumGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DomainsrdapAutnumGetRequest = {
  pathParams: {
    autnumId: "sit",
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
};

sdk.autnum.domainsrdapAutnumGet(req).then((res: DomainsrdapAutnumGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->