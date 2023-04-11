<!-- Start SDK Example Usage -->
```typescript
import {
  CloudprivatecatalogproducerCatalogsAssociationsCreateRequest,
  CloudprivatecatalogproducerCatalogsAssociationsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudprivatecatalogproducerCatalogsAssociationsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest: {
    association: {
      createTime: "provident",
      name: "distinctio",
      resource: "quibusdam",
    },
  },
  accessToken: "unde",
  alt: AltEnum.Proto,
  callback: "corrupti",
  fields: "illum",
  key: "vel",
  oauthToken: "error",
  parent: "deserunt",
  prettyPrint: false,
  quotaUser: "suscipit",
  uploadType: "iure",
  uploadProtocol: "magnam",
};

sdk.catalogs.cloudprivatecatalogproducerCatalogsAssociationsCreate(req).then((res: CloudprivatecatalogproducerCatalogsAssociationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->