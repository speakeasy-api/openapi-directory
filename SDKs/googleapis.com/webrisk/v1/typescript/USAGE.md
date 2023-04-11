<!-- Start SDK Example Usage -->
```typescript
import {
  WebriskHashesSearchRequest,
  WebriskHashesSearchResponse,
  WebriskHashesSearchThreatTypesEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: WebriskHashesSearchRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  hashPrefix: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  threatTypes: [
    WebriskHashesSearchThreatTypesEnum.UnwantedSoftware,
    WebriskHashesSearchThreatTypesEnum.Malware,
    WebriskHashesSearchThreatTypesEnum.SocialEngineering,
  ],
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.hashes.webriskHashesSearch(req).then((res: WebriskHashesSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->