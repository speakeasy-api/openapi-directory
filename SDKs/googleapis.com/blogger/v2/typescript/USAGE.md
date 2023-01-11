<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BloggerBlogsGetRequest, BloggerBlogsGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BloggerBlogsGetRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    blogId: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
};

sdk.blogs.bloggerBlogsGet(req).then((res: BloggerBlogsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->