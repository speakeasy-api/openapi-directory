<!-- Start SDK Example Usage -->
```typescript
import {
  FirebasemlProjectsModelsCreateRequest,
  FirebasemlProjectsModelsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FirebasemlProjectsModelsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  modelInput: {
    displayName: "provident",
    name: "distinctio",
    state: {
      published: false,
      validationError: {
        code: 844266,
        details: [
          {
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
            "iure": "magnam",
          },
          {
            "ipsa": "delectus",
            "tempora": "suscipit",
            "molestiae": "minus",
            "placeat": "voluptatum",
          },
          {
            "excepturi": "nisi",
            "recusandae": "temporibus",
          },
        ],
        message: "ab",
      },
    },
    tags: [
      "veritatis",
      "deserunt",
    ],
    tfliteModel: {
      automlModel: "perferendis",
      gcsTfliteUri: "ipsam",
    },
  },
  accessToken: "repellendus",
  alt: AltEnum.Proto,
  callback: "quo",
  fields: "odit",
  key: "at",
  oauthToken: "at",
  parent: "maiores",
  prettyPrint: false,
  quotaUser: "molestiae",
  uploadType: "quod",
  uploadProtocol: "quod",
};

sdk.projects.firebasemlProjectsModelsCreate(req).then((res: FirebasemlProjectsModelsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->