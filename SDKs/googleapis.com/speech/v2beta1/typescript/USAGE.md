<!-- Start SDK Example Usage -->
```typescript
import {
  SpeechProjectsLocationsOperationsGetRequest,
  SpeechProjectsLocationsOperationsGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SpeechProjectsLocationsOperationsGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  name: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.projects.speechProjectsLocationsOperationsGet(req).then((res: SpeechProjectsLocationsOperationsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->