<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PagespeedonlinePagespeedapiRunpagespeedRequest, PagespeedonlinePagespeedapiRunpagespeedResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PagespeedonlinePagespeedapiRunpagespeedRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    captchaToken: "consequuntur",
    category: [
      "ACCESSIBILITY",
      "SEO",
    ],
    fields: "fugit",
    key: "et",
    locale: "nihil",
    oauthToken: "rerum",
    prettyPrint: false,
    quotaUser: "debitis",
    strategy: "STRATEGY_UNSPECIFIED",
    uploadType: "et",
    uploadProtocol: "ut",
    url: "dolorem",
    utmCampaign: "et",
    utmSource: "voluptate",
  },
};

sdk.pagespeedapi.pagespeedonlinePagespeedapiRunpagespeed(req).then((res: PagespeedonlinePagespeedapiRunpagespeedResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->