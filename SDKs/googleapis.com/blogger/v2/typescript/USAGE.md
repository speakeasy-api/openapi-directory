<!-- Start SDK Example Usage -->
```typescript
import {
  BloggerBlogsGetRequest,
  BloggerBlogsGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BloggerBlogsGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  blogId: "quibusdam",
  callback: "unde",
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.blogs.bloggerBlogsGet(req).then((res: BloggerBlogsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->