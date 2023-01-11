<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PlaydeveloperreportingAnomaliesListRequest, PlaydeveloperreportingAnomaliesListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PlaydeveloperreportingAnomaliesListRequest = {
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    filter: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    pageSize: 1543572285742637646,
    pageToken: "nihil",
    prettyPrint: true,
    quotaUser: "dicta",
    uploadType: "debitis",
    uploadProtocol: "voluptatum",
  },
};

sdk.anomalies.playdeveloperreportingAnomaliesList(req).then((res: PlaydeveloperreportingAnomaliesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->