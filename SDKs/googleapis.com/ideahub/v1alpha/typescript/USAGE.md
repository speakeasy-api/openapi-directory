<!-- Start SDK Example Usage -->
```typescript
import {
  IdeahubIdeasListRequest,
  IdeahubIdeasListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: IdeahubIdeasListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  filter: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  orderBy: "vel",
  pageSize: 623564,
  pageToken: "deserunt",
  parent: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.ideas.ideahubIdeasList(req).then((res: IdeahubIdeasListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->