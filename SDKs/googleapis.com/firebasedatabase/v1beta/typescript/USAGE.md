<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FirebasedatabaseProjectsLocationsInstancesCreateRequest, FirebasedatabaseProjectsLocationsInstancesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FirebasedatabaseProjectsLocationsInstancesCreateRequest = {
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
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    databaseId: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
    validateOnly: true,
  },
  request: {
    name: "voluptatum",
    type: "DATABASE_INSTANCE_TYPE_UNSPECIFIED",
  },
};

sdk.projects.firebasedatabaseProjectsLocationsInstancesCreate(req).then((res: FirebasedatabaseProjectsLocationsInstancesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->