<!-- Start SDK Example Usage -->
```typescript
import {
  GetSearchVersionNumberAdditionalDataExtRequest,
  GetSearchVersionNumberAdditionalDataExtResponse,
  GetSearchVersionNumberAdditionalDataExtExtEnum,
  GetSearchVersionNumberAdditionalDataExtGeometriesZoomEnum,
} from "openapi/dist/sdk/models/operations";
import {
  VersionNumberEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetSearchVersionNumberAdditionalDataExtRequest = {
  ext: GetSearchVersionNumberAdditionalDataExtExtEnum.Json,
  geometries: "corrupti",
  geometriesZoom: GetSearchVersionNumberAdditionalDataExtGeometriesZoomEnum.Thirteen,
  versionNumber: VersionNumberEnum.Two,
};

sdk.additionalData.getSearchVersionNumberAdditionalDataExt(req).then((res: GetSearchVersionNumberAdditionalDataExtResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->