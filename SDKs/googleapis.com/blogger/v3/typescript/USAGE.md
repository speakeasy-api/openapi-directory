<!-- Start SDK Example Usage -->
```typescript
import {
  BloggerBlogUserInfosGetRequest,
  BloggerBlogUserInfosGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BloggerBlogUserInfosGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  blogId: "quibusdam",
  callback: "unde",
  fields: "nulla",
  key: "corrupti",
  maxPosts: 847252,
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
  userId: "iure",
};

sdk.blogUserInfos.bloggerBlogUserInfosGet(req).then((res: BloggerBlogUserInfosGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->