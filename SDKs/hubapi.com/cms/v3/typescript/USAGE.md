<!-- Start SDK Example Usage -->
```typescript
import {
  GetCmsV3DomainsGetPageRequest,
  GetCmsV3DomainsGetPageResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetCmsV3DomainsGetPageRequest = {
  after: "corrupti",
  archived: false,
  createdAfter: "2021-07-27T21:52:56.087Z",
  createdAt: "2021-03-11T23:22:42.658Z",
  createdBefore: "2021-05-14T08:28:11.899Z",
  limit: 847252,
  sort: [
    "error",
    "deserunt",
  ],
  updatedAfter: "2022-07-25T06:44:09.184Z",
  updatedAt: "2022-02-09T12:04:06.508Z",
  updatedBefore: "2022-01-14T06:18:51.036Z",
};

sdk.domains.getCmsV3DomainsGetPage(req).then((res: GetCmsV3DomainsGetPageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->