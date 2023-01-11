<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteAMediaItemResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.deleteAMediaItem().then((res: DeleteAMediaItemResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->