<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddTrackCollectionItemsRequest, AddTrackCollectionItemsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AddTrackCollectionItemsRequest = {
  security: {
    customerAccessCode: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    id: "sit",
  },
  request: {
    items: [
      {
        addedTime: "1978-05-13T03:50:47Z",
        id: "expedita",
        mediaType: "consequuntur",
      },
    ],
  },
};

sdk.audio.addTrackCollectionItems(req).then((res: AddTrackCollectionItemsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->