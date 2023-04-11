<!-- Start SDK Example Usage -->
```typescript
import {
  TexttospeechProjectsLocationsOperationsGetRequest,
  TexttospeechProjectsLocationsOperationsGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TexttospeechProjectsLocationsOperationsGetRequest = {
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

sdk.projects.texttospeechProjectsLocationsOperationsGet(req).then((res: TexttospeechProjectsLocationsOperationsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->