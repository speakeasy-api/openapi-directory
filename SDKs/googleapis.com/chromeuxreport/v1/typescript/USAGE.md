<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ChromeuxreportRecordsQueryRecordRequest, ChromeuxreportRecordsQueryRecordResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ChromeuxreportRecordsQueryRecordRequest = {
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    prettyPrint: true,
    quotaUser: "fugit",
    uploadType: "et",
    uploadProtocol: "nihil",
  },
  request: {
    effectiveConnectionType: "rerum",
    formFactor: "TABLET",
    metrics: [
      "voluptatum",
    ],
    origin: "et",
    url: "ut",
  },
};

sdk.records.chromeuxreportRecordsQueryRecord(req).then((res: ChromeuxreportRecordsQueryRecordResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->