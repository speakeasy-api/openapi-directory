<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetHackathonsIdFormatRequest, GetHackathonsIdFormatResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetHackathonsIdFormatRequest = {
  pathParams: {
    id: 8717895732742165505,
  },
};

sdk.hackathons.getHackathonsIdFormat(req).then((res: GetHackathonsIdFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->