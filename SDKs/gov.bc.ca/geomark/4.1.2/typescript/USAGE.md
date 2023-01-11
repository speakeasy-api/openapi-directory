<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest, GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest = {
  pathParams: {
    fileFormatExtension: "json",
    geomarkId: "voluptas",
  },
  queryParams: {
    srid: 6050128673802995827,
  },
};

sdk.boundingBox.getGeomarksGeomarkIdBoundingBoxFileFormatExtension(req).then((res: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->