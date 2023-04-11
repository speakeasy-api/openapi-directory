<!-- Start SDK Example Usage -->
```typescript
import {
  GetBestPodcastsRequest,
  GetBestPodcastsResponse,
  GetBestPodcastsSortEnum,
} from "openapi/dist/sdk/models/operations";
import {
  SafeModeParamEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetBestPodcastsRequest = {
  xListenAPIKey: "corrupti",
  genreId: "provident",
  language: "distinctio",
  page: 844266,
  publisherRegion: "unde",
  region: "nulla",
  safeMode: SafeModeParamEnum.One,
  sort: GetBestPodcastsSortEnum.ListenScore,
};

sdk.directoryAPI.getBestPodcasts(req).then((res: GetBestPodcastsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->