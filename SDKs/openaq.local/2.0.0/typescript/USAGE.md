<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FavicoFaviconIcoGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.favicoFaviconIcoGet().then((res: FavicoFaviconIcoGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->