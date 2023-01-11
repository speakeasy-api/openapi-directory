<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { Area120tablesTablesListRequest, Area120tablesTablesListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: Area120tablesTablesListRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    orderBy: "voluptas",
    pageSize: 8274930044578894929,
    pageToken: "et",
    prettyPrint: true,
    quotaUser: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
};

sdk.tables.area120tablesTablesList(req).then((res: Area120tablesTablesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->