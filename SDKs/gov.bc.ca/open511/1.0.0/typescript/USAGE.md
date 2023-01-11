<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAreasRequest, GetAreasResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAreasRequest = {
  queryParams: {
    format: "json",
  },
};

sdk.resources.getAreas(req).then((res: GetAreasResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->