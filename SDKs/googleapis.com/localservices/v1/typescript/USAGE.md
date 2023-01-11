<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { LocalservicesAccountReportsSearchRequest, LocalservicesAccountReportsSearchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: LocalservicesAccountReportsSearchRequest = {
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
    endDateDay: 3390393562759376202,
    endDateMonth: 2669985732393126063,
    endDateYear: 1774932891286980153,
    fields: "voluptas",
    key: "fugit",
    oauthToken: "et",
    pageSize: 2661732831099943416,
    pageToken: "rerum",
    prettyPrint: false,
    query: "debitis",
    quotaUser: "voluptatum",
    startDateDay: 2339563716805116249,
    startDateMonth: 7144924247938981575,
    startDateYear: 161231572858529631,
    uploadType: "et",
    uploadProtocol: "voluptate",
  },
};

sdk.accountReports.localservicesAccountReportsSearch(req).then((res: LocalservicesAccountReportsSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->