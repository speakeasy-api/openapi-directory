<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { EndpointGetAnAlbumRequest, EndpointGetAnAlbumResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: EndpointGetAnAlbumRequest = {
  security: {
    spotifyAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    id: "sit",
  },
  queryParams: {
    market: "voluptas",
  },
  headers: {
    authorization: "culpa",
  },
};

sdk.categoryAlbums.endpointGetAnAlbum(req).then((res: EndpointGetAnAlbumResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->