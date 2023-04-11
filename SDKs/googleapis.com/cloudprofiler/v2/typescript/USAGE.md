<!-- Start SDK Example Usage -->
```typescript
import {
  CloudprofilerProjectsProfilesCreateRequest,
  CloudprofilerProjectsProfilesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  CreateProfileRequestProfileTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudprofilerProjectsProfilesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  createProfileRequest: {
    deployment: {
      labels: {
        "distinctio": "quibusdam",
        "unde": "nulla",
        "corrupti": "illum",
      },
      projectId: "vel",
      target: "error",
    },
    profileType: [
      CreateProfileRequestProfileTypeEnum.Heap,
      CreateProfileRequestProfileTypeEnum.Heap,
      CreateProfileRequestProfileTypeEnum.Wall,
    ],
  },
  accessToken: "debitis",
  alt: AltEnum.Json,
  callback: "delectus",
  fields: "tempora",
  key: "suscipit",
  oauthToken: "molestiae",
  parent: "minus",
  prettyPrint: false,
  quotaUser: "placeat",
  uploadType: "voluptatum",
  uploadProtocol: "iusto",
};

sdk.projects.cloudprofilerProjectsProfilesCreate(req).then((res: CloudprofilerProjectsProfilesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->