<!-- Start SDK Example Usage -->
```typescript
import {
  GetQueryJsonRequest,
  GetQueryJsonResponse,
  GetQueryJsonFacetsEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apikey: "YOUR_API_KEY_HERE",
  },
});

const req: GetQueryJsonRequest = {
  dateRange: "corrupti",
  elevation: 592845,
  facets: GetQueryJsonFacetsEnum.One,
  filter: "quibusdam",
  latitude: "unde",
  limit: 857946,
  longitude: "corrupti",
  name: "illum",
  offset: 423655,
  query: "error",
  sort: "deserunt",
  sw: "suscipit",
};

sdk.events.getQueryJson(req).then((res: GetQueryJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->