<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { SqlBackupRunsDeleteRequest, SqlBackupRunsDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SqlBackupRunsDeleteRequest = {
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
  pathParams: {
    id: "sit",
    instance: "voluptas",
    project: "culpa",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "consequuntur",
    alt: "media",
    callback: "expedita",
    fields: "voluptas",
    key: "fugit",
    oauthToken: "et",
    prettyPrint: true,
    quotaUser: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
};

sdk.backupRuns.sqlBackupRunsDelete(req).then((res: SqlBackupRunsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->