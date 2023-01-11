<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PagespeedonlinePagespeedapiRunpagespeedRequest, PagespeedonlinePagespeedapiRunpagespeedResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PagespeedonlinePagespeedapiRunpagespeedRequest = {
  queryParams: {
    alt: "json",
    fields: "voluptas",
    filterThirdPartyResources: true,
    key: "expedita",
    locale: "consequuntur",
    oauthToken: "dolor",
    prettyPrint: true,
    quotaUser: "voluptas",
    rule: [
      "et",
    ],
    screenshot: true,
    strategy: "mobile",
    url: "dicta",
    userIp: "debitis",
  },
};

sdk.pagespeedapi.pagespeedonlinePagespeedapiRunpagespeed(req).then((res: PagespeedonlinePagespeedapiRunpagespeedResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->