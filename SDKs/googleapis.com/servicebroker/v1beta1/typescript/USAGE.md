<!-- Start SDK Example Usage -->
```typescript
import {
  ServicebrokerProjectsBrokersCreateRequest,
  ServicebrokerProjectsBrokersCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ServicebrokerProjectsBrokersCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudServicebrokerV1beta1Broker: {
    createTime: "provident",
    name: "distinctio",
    title: "Dr.",
    url: "unde",
  },
  accessToken: "nulla",
  alt: AltEnum.Media,
  callback: "illum",
  fields: "vel",
  key: "error",
  oauthToken: "deserunt",
  parent: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.projects.servicebrokerProjectsBrokersCreate(req).then((res: ServicebrokerProjectsBrokersCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->