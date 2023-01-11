<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetEventsRequest, GetEventsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetEventsRequest = {
  queryParams: {
    company: "sit",
    deal: "voluptas",
    nexttoken: "culpa",
    queryexecutionid: "expedita",
    site: "consequuntur",
    type: "clicks",
  },
};

sdk.developers.getEvents(req).then((res: GetEventsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->