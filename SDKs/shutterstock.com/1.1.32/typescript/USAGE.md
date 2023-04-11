<!-- Start SDK Example Usage -->
```typescript
import {
  AddTrackCollectionItemsRequest,
  AddTrackCollectionItemsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AddTrackCollectionItemsRequest = {
  collectionItemRequest: {
    items: [
      {
        addedTime: "2021-07-27T21:52:56.087Z",
        id: "quibusdam",
        mediaType: "unde",
      },
      {
        addedTime: "2021-05-14T08:28:11.899Z",
        id: "illum",
        mediaType: "vel",
      },
      {
        addedTime: "2021-09-16T11:56:06.019Z",
        id: "suscipit",
        mediaType: "iure",
      },
    ],
  },
  id: "magnam",
};

sdk.audio.addTrackCollectionItems(req).then((res: AddTrackCollectionItemsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->