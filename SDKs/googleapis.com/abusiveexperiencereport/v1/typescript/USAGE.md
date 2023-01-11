<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AbusiveexperiencereportSitesGetRequest, AbusiveexperiencereportSitesGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AbusiveexperiencereportSitesGetRequest = {
  pathParams: {
    name: "sit",
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

sdk.sites.abusiveexperiencereportSitesGet(req).then((res: AbusiveexperiencereportSitesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->