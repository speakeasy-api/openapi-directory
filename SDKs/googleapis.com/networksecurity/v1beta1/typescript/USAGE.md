<!-- Start SDK Example Usage -->
```typescript
import {
  NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest,
  NetworksecurityProjectsLocationsAddressGroupsAddItemsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest = {
  dollarXgafv: XgafvEnum.Two,
  addAddressGroupItemsRequest: {
    items: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    requestId: "nulla",
  },
  accessToken: "corrupti",
  addressGroup: "illum",
  alt: AltEnum.Media,
  callback: "error",
  fields: "deserunt",
  key: "suscipit",
  oauthToken: "iure",
  prettyPrint: false,
  quotaUser: "magnam",
  uploadType: "debitis",
  uploadProtocol: "ipsa",
};

sdk.projects.networksecurityProjectsLocationsAddressGroupsAddItems(req).then((res: NetworksecurityProjectsLocationsAddressGroupsAddItemsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->