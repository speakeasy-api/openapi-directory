<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { SvgconvertRequest, SvgconvertResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SvgconvertRequest = {
  request: {
    file: {
      content: "sit".encode(),
      file: "voluptas",
    },
  },
};

sdk.svgconvert(req).then((res: SvgconvertResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->