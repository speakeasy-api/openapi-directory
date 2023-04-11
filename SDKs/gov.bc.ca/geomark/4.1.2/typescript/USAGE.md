<!-- Start SDK Example Usage -->
```typescript
import {
  GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest,
  GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse,
  GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum,
  GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionSridEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest = {
  fileFormatExtension: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum.Shpz,
  geomarkId: "provident",
  srid: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionSridEnum.TwentySixThousandNineHundredAndNine,
};

sdk.boundingBox.getGeomarksGeomarkIdBoundingBoxFileFormatExtension(req).then((res: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->