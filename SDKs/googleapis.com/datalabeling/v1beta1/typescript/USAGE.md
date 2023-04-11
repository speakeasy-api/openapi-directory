<!-- Start SDK Example Usage -->
```typescript
import {
  DatalabelingProjectsAnnotationSpecSetsCreateRequest,
  DatalabelingProjectsAnnotationSpecSetsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatalabelingProjectsAnnotationSpecSetsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest: {
    annotationSpecSet: {
      annotationSpecs: [
        {
          description: "distinctio",
          displayName: "quibusdam",
          index: 602763,
        },
        {
          description: "nulla",
          displayName: "corrupti",
          index: 847252,
        },
        {
          description: "vel",
          displayName: "error",
          index: 645894,
        },
      ],
      blockingResources: [
        "iure",
        "magnam",
      ],
      description: "debitis",
      displayName: "ipsa",
      name: "delectus",
    },
  },
  accessToken: "tempora",
  alt: AltEnum.Media,
  callback: "molestiae",
  fields: "minus",
  key: "placeat",
  oauthToken: "voluptatum",
  parent: "iusto",
  prettyPrint: false,
  quotaUser: "excepturi",
  uploadType: "nisi",
  uploadProtocol: "recusandae",
};

sdk.projects.datalabelingProjectsAnnotationSpecSetsCreate(req).then((res: DatalabelingProjectsAnnotationSpecSetsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->