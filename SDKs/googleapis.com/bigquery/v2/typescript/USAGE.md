<!-- Start SDK Example Usage -->
```typescript
import {
  BigqueryDatasetsDeleteRequest,
  BigqueryDatasetsDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BigqueryDatasetsDeleteRequest = {
  alt: AltEnum.Json,
  datasetId: "corrupti",
  deleteContents: false,
  fields: "provident",
  key: "distinctio",
  oauthToken: "quibusdam",
  prettyPrint: false,
  projectId: "unde",
  quotaUser: "nulla",
  userIp: "corrupti",
};

sdk.datasets.bigqueryDatasetsDelete(req).then((res: BigqueryDatasetsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->