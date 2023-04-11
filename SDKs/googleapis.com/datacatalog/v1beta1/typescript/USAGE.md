<!-- Start SDK Example Usage -->
```typescript
import {
  DatacatalogCatalogSearchRequest,
  DatacatalogCatalogSearchResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatacatalogCatalogSearchRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudDatacatalogV1beta1SearchCatalogRequest: {
    orderBy: "provident",
    pageSize: 715190,
    pageToken: "quibusdam",
    query: "unde",
    scope: {
      includeGcpPublicDatasets: false,
      includeOrgIds: [
        "corrupti",
        "illum",
        "vel",
        "error",
      ],
      includeProjectIds: [
        "suscipit",
        "iure",
        "magnam",
      ],
      restrictedLocations: [
        "ipsa",
        "delectus",
        "tempora",
        "suscipit",
      ],
    },
  },
  accessToken: "molestiae",
  alt: AltEnum.Proto,
  callback: "placeat",
  fields: "voluptatum",
  key: "iusto",
  oauthToken: "excepturi",
  prettyPrint: false,
  quotaUser: "nisi",
  uploadType: "recusandae",
  uploadProtocol: "temporibus",
};

sdk.catalog.datacatalogCatalogSearch(req).then((res: DatacatalogCatalogSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->