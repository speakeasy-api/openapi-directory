<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetBestPodcastsRequest, GetBestPodcastsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetBestPodcastsRequest = {
  queryParams: {
    genreId: "sit",
    language: "voluptas",
    page: 6050128673802995827,
    publisherRegion: "expedita",
    region: "consequuntur",
    safeMode: 2669985732393126063,
  },
  headers: {
    xListenAPIKey: "expedita",
  },
};

sdk.directoryAPI.getBestPodcasts(req).then((res: GetBestPodcastsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->