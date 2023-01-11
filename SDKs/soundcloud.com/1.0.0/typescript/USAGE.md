<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteLikesPlaylistsPlaylistIdRequest, DeleteLikesPlaylistsPlaylistIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteLikesPlaylistsPlaylistIdRequest = {
  security: {
    authHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    playlistId: 8717895732742165505,
  },
};

sdk.likes.deleteLikesPlaylistsPlaylistId(req).then((res: DeleteLikesPlaylistsPlaylistIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->