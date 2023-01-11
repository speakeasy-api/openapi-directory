<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { KgsearchEntitiesSearchRequest, KgsearchEntitiesSearchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: KgsearchEntitiesSearchRequest = {
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    ids: [
      "expedita",
      "voluptas",
    ],
    indent: true,
    key: "et",
    languages: [
      "rerum",
    ],
    limit: 7837839688282259259,
    oauthToken: "debitis",
    prefix: true,
    prettyPrint: false,
    query: "ut",
    quotaUser: "dolorem",
    types: [
      "voluptate",
      "iste",
    ],
    uploadType: "vitae",
    uploadProtocol: "totam",
  },
};

sdk.entities.kgsearchEntitiesSearch(req).then((res: KgsearchEntitiesSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->