<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { WebfontsWebfontsListRequest, WebfontsWebfontsListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: WebfontsWebfontsListRequest = {
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
    sort: "SORT_UNDEFINED",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
};

sdk.webfonts.webfontsWebfontsList(req).then((res: WebfontsWebfontsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->