<!-- Start SDK Example Usage -->
```typescript
import {
  LanguageDetectionsDetectRequest,
  LanguageDetectionsDetectResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: LanguageDetectionsDetectRequest = {
  dollarXgafv: XgafvEnum.Two,
  detectLanguageRequest: {
    q: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
  },
  accessToken: "nulla",
  alt: AltEnum.Media,
  bearerToken: "illum",
  callback: "vel",
  fields: "error",
  key: "deserunt",
  oauthToken: "suscipit",
  pp: false,
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.detections.languageDetectionsDetect(req).then((res: LanguageDetectionsDetectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->