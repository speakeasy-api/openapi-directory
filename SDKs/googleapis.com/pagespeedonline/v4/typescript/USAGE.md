<!-- Start SDK Example Usage -->
```typescript
import {
  PagespeedonlinePagespeedapiRunpagespeedRequest,
  PagespeedonlinePagespeedapiRunpagespeedResponse,
  PagespeedonlinePagespeedapiRunpagespeedStrategyEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PagespeedonlinePagespeedapiRunpagespeedRequest = {
  alt: AltEnum.Json,
  fields: "corrupti",
  filterThirdPartyResources: false,
  key: "provident",
  locale: "distinctio",
  oauthToken: "quibusdam",
  prettyPrint: false,
  quotaUser: "unde",
  rule: [
    "corrupti",
    "illum",
    "vel",
    "error",
  ],
  screenshot: false,
  snapshots: false,
  strategy: PagespeedonlinePagespeedapiRunpagespeedStrategyEnum.Mobile,
  url: "suscipit",
  userIp: "iure",
  utmCampaign: "magnam",
  utmSource: "debitis",
};

sdk.pagespeedapi.pagespeedonlinePagespeedapiRunpagespeed(req).then((res: PagespeedonlinePagespeedapiRunpagespeedResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->