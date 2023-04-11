<!-- Start SDK Example Usage -->
```typescript
import {
  PagespeedonlinePagespeedapiRunpagespeedRequest,
  PagespeedonlinePagespeedapiRunpagespeedResponse,
  PagespeedonlinePagespeedapiRunpagespeedCategoryEnum,
  PagespeedonlinePagespeedapiRunpagespeedStrategyEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PagespeedonlinePagespeedapiRunpagespeedRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  captchaToken: "unde",
  category: [
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnum.Performance,
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnum.Seo,
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnum.BestPractices,
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnum.Performance,
  ],
  fields: "deserunt",
  key: "suscipit",
  locale: "iure",
  oauthToken: "magnam",
  prettyPrint: false,
  quotaUser: "debitis",
  strategy: PagespeedonlinePagespeedapiRunpagespeedStrategyEnum.StrategyUnspecified,
  uploadType: "delectus",
  uploadProtocol: "tempora",
  url: "suscipit",
  utmCampaign: "molestiae",
  utmSource: "minus",
};

sdk.pagespeedapi.pagespeedonlinePagespeedapiRunpagespeed(req).then((res: PagespeedonlinePagespeedapiRunpagespeedResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->