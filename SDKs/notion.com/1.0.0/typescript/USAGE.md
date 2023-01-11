<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AppendBlockChildrenRequest, AppendBlockChildrenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AppendBlockChildrenRequest = {
  pathParams: {
    id: "sit",
  },
  request: {
    children: [
      {
        heading2: {
          text: [
            {
              text: {
                content: "expedita",
              },
              type: "consequuntur",
            },
            {
              text: {
                content: "dolor",
              },
              type: "expedita",
            },
          ],
        },
        object: "voluptas",
        type: "fugit",
      },
    ],
  },
};

sdk.blocks.appendBlockChildren(req).then((res: AppendBlockChildrenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->