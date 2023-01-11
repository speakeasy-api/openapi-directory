<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { VersionhistoryPlatformsChannelsListRequest, VersionhistoryPlatformsChannelsListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: VersionhistoryPlatformsChannelsListRequest = {
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    pageSize: 8274930044578894929,
    pageToken: "et",
    prettyPrint: true,
    quotaUser: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
};

sdk.platforms.versionhistoryPlatformsChannelsList(req).then((res: VersionhistoryPlatformsChannelsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->