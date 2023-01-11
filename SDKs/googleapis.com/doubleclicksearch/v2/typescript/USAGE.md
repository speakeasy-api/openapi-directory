<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DoubleclicksearchConversionGetRequest, DoubleclicksearchConversionGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DoubleclicksearchConversionGetRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    advertiserId: "sit",
    agencyId: "voluptas",
    engineAccountId: "culpa",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "consequuntur",
    adGroupId: "dolor",
    adId: "expedita",
    alt: "proto",
    callback: "fugit",
    campaignId: "et",
    criterionId: "nihil",
    customerId: "rerum",
    endDate: 7837839688282259259,
    fields: "debitis",
    key: "voluptatum",
    oauthToken: "et",
    prettyPrint: false,
    quotaUser: "dolorem",
    rowCount: 7259475919510918339,
    startDate: 7373105480197164748,
    startRow: 3287288577352441706,
    uploadType: "vitae",
    uploadProtocol: "totam",
  },
};

sdk.conversion.doubleclicksearchConversionGet(req).then((res: DoubleclicksearchConversionGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->