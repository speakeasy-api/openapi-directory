<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FactchecktoolsClaimsSearchRequest, FactchecktoolsClaimsSearchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FactchecktoolsClaimsSearchRequest = {
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    languageCode: "expedita",
    maxAgeDays: 6044372234677422456,
    oauthToken: "fugit",
    offset: 1543572285742637646,
    pageSize: 2661732831099943416,
    pageToken: "rerum",
    prettyPrint: false,
    query: "debitis",
    quotaUser: "voluptatum",
    reviewPublisherSiteFilter: "et",
    uploadType: "ut",
    uploadProtocol: "dolorem",
  },
};

sdk.claims.factchecktoolsClaimsSearch(req).then((res: FactchecktoolsClaimsSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->