<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetSearchVersionNumberAdditionalDataExtRequest, GetSearchVersionNumberAdditionalDataExtResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetSearchVersionNumberAdditionalDataExtRequest = {
  pathParams: {
    ext: "json",
    versionNumber: 2259404117704393152,
  },
  queryParams: {
    geometries: "culpa",
    geometriesZoom: 501233450539197794,
  },
};

sdk.additionalData.getSearchVersionNumberAdditionalDataExt(req).then((res: GetSearchVersionNumberAdditionalDataExtResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->