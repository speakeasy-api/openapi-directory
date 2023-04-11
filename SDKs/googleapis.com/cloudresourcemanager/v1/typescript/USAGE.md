<!-- Start SDK Example Usage -->
```typescript
import {
  CloudresourcemanagerLiensCreateRequest,
  CloudresourcemanagerLiensCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudresourcemanagerLiensCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  lien: {
    createTime: "provident",
    name: "distinctio",
    origin: "quibusdam",
    parent: "unde",
    reason: "nulla",
    restrictions: [
      "illum",
      "vel",
      "error",
    ],
  },
  accessToken: "deserunt",
  alt: AltEnum.Media,
  callback: "iure",
  fields: "magnam",
  key: "debitis",
  oauthToken: "ipsa",
  prettyPrint: false,
  quotaUser: "delectus",
  uploadType: "tempora",
  uploadProtocol: "suscipit",
};

sdk.liens.cloudresourcemanagerLiensCreate(req).then((res: CloudresourcemanagerLiensCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->