<!-- Start SDK Example Usage -->
```typescript
import {
  EssentialcontactsProjectsContactsComputeRequest,
  EssentialcontactsProjectsContactsComputeResponse,
  EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: EssentialcontactsProjectsContactsComputeRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  notificationCategories: [
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.ProductUpdates,
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.Security,
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.Billing,
  ],
  oauthToken: "deserunt",
  pageSize: 384382,
  pageToken: "iure",
  parent: "magnam",
  prettyPrint: false,
  quotaUser: "debitis",
  uploadType: "ipsa",
  uploadProtocol: "delectus",
};

sdk.projects.essentialcontactsProjectsContactsCompute(req).then((res: EssentialcontactsProjectsContactsComputeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->