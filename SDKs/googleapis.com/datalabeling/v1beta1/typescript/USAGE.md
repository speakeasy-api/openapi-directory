<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DatalabelingProjectsAnnotationSpecSetsCreateRequest, DatalabelingProjectsAnnotationSpecSetsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DatalabelingProjectsAnnotationSpecSetsCreateRequest = {
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
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    annotationSpecSet: {
      annotationSpecs: [
        {
          description: "debitis",
          displayName: "voluptatum",
          index: 2339563716805116249,
        },
        {
          description: "ut",
          displayName: "dolorem",
          index: 7259475919510918339,
        },
        {
          description: "voluptate",
          displayName: "iste",
          index: 3930927879439176946,
        },
      ],
      blockingResources: [
        "dolores",
        "illum",
        "debitis",
      ],
      description: "vel",
      displayName: "odio",
      name: "dolore",
    },
  },
};

sdk.projects.datalabelingProjectsAnnotationSpecSetsCreate(req).then((res: DatalabelingProjectsAnnotationSpecSetsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->