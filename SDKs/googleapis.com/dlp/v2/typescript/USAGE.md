<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DlpInfoTypesListRequest, DlpInfoTypesListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DlpInfoTypesListRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    filter: "dolor",
    key: "expedita",
    languageCode: "voluptas",
    locationId: "fugit",
    oauthToken: "et",
    parent: "nihil",
    prettyPrint: true,
    quotaUser: "dicta",
    uploadType: "debitis",
    uploadProtocol: "voluptatum",
  },
};

sdk.infoTypes.dlpInfoTypesList(req).then((res: DlpInfoTypesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->