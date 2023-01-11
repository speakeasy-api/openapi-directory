<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { MetastoreProjectsLocationsFederationsCreateRequest, MetastoreProjectsLocationsFederationsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MetastoreProjectsLocationsFederationsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    federationId: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    requestId: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
  request: {
    backendMetastores: {
      "et": {
        metastoreType: "DATAPROC_METASTORE",
        name: "dolorem",
      },
    },
    labels: {
      "voluptate": "iste",
      "vitae": "totam",
    },
    name: "dolores",
    version: "illum",
  },
};

sdk.projects.metastoreProjectsLocationsFederationsCreate(req).then((res: MetastoreProjectsLocationsFederationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->