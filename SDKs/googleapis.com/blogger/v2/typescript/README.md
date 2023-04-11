# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/blogger/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/blogger/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### blogs

* `bloggerBlogsGet` - Gets a blog by id.
* `bloggerBlogsList` - Lists blogs by user id, possibly filtered.

### comments

* `bloggerCommentsGet` - Gets a comment by blog id, post id and comment id.
* `bloggerCommentsList` - Lists comments.

### pages

* `bloggerPagesGet` - Gets a page by blog id and page id.
* `bloggerPagesList` - Lists pages.

### posts

* `bloggerPostsGet` - Gets a post by blog id and post id
* `bloggerPostsList` - Lists posts.

### users

* `bloggerUsersGet` - Gets a user by user id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

