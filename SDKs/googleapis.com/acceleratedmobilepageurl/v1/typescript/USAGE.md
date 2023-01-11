<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AcceleratedmobilepageurlAmpUrlsBatchGetRequest, AcceleratedmobilepageurlAmpUrlsBatchGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AcceleratedmobilepageurlAmpUrlsBatchGetRequest = {
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
    lookupStrategy: "IN_INDEX_DOC",
    urls: [
      "debitis",
      "voluptatum",
      "et",
    ],
  },
};

sdk.ampUrls.acceleratedmobilepageurlAmpUrlsBatchGet(req).then((res: AcceleratedmobilepageurlAmpUrlsBatchGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->