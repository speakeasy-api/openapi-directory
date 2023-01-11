<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DrivelabelsLabelsGetRequest, DrivelabelsLabelsGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DrivelabelsLabelsGetRequest = {
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
    languageCode: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
    useAdminAccess: true,
    view: "LABEL_VIEW_BASIC",
  },
};

sdk.labels.drivelabelsLabelsGet(req).then((res: DrivelabelsLabelsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->