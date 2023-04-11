<!-- Start SDK Example Usage -->
```typescript
import {
  StorageBucketAccessControlsDeleteRequest,
  StorageBucketAccessControlsDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: StorageBucketAccessControlsDeleteRequest = {
  alt: AltEnum.Json,
  bucket: "corrupti",
  entity: "provident",
  fields: "distinctio",
  key: "quibusdam",
  oauthToken: "unde",
  prettyPrint: false,
  quotaUser: "nulla",
  uploadType: "corrupti",
  userIp: "illum",
  userProject: "vel",
};

sdk.bucketAccessControls.storageBucketAccessControlsDelete(req).then((res: StorageBucketAccessControlsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->