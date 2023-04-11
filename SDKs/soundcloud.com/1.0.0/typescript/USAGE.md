<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteLikesPlaylistsPlaylistIdRequest,
  DeleteLikesPlaylistsPlaylistIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteLikesPlaylistsPlaylistIdRequest = {
  playlistId: 548814,
};

sdk.likes.deleteLikesPlaylistsPlaylistId(req).then((res: DeleteLikesPlaylistsPlaylistIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->