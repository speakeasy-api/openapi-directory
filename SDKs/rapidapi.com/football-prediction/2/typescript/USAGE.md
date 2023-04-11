<!-- Start SDK Example Usage -->
```typescript
import {
  GetApiV2ListFederationsRequest,
  GetApiV2ListFederationsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetApiV2ListFederationsRequest = {
  xRapidApiKey: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
};

sdk.getApiV2ListFederations(req).then((res: GetApiV2ListFederationsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->