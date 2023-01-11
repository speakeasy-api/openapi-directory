<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { NotebooksProjectsLocationsEnvironmentsCreateRequest, NotebooksProjectsLocationsEnvironmentsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: NotebooksProjectsLocationsEnvironmentsCreateRequest = {
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
    environmentId: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    containerImage: {
      repository: "debitis",
      tag: "voluptatum",
    },
    description: "et",
    displayName: "ut",
    postStartupScript: "dolorem",
    vmImage: {
      imageFamily: "et",
      imageName: "voluptate",
      project: "iste",
    },
  },
};

sdk.projects.notebooksProjectsLocationsEnvironmentsCreate(req).then((res: NotebooksProjectsLocationsEnvironmentsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->