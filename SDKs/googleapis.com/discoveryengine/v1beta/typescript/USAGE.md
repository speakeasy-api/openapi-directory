<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest, DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest = {
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
    documentId: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    id: "debitis",
    jsonData: "voluptatum",
    name: "et",
    parentDocumentId: "ut",
    schemaId: "dolorem",
    structData: {
      "voluptate": "iste",
      "vitae": "totam",
    },
  },
};

sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(req).then((res: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->