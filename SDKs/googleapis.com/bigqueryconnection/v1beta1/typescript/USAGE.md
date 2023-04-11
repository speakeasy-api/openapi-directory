<!-- Start SDK Example Usage -->
```typescript
import {
  BigqueryconnectionProjectsLocationsConnectionsCreateRequest,
  BigqueryconnectionProjectsLocationsConnectionsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  CloudSqlPropertiesTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BigqueryconnectionProjectsLocationsConnectionsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  connectionInput: {
    cloudSql: {
      credential: {
        password: "provident",
        username: "Micheal_Sporer",
      },
      database: "corrupti",
      instanceId: "illum",
      type: CloudSqlPropertiesTypeEnum.Postgres,
    },
    description: "error",
    friendlyName: "deserunt",
    name: "suscipit",
  },
  accessToken: "iure",
  alt: AltEnum.Json,
  callback: "debitis",
  connectionId: "ipsa",
  fields: "delectus",
  key: "tempora",
  oauthToken: "suscipit",
  parent: "molestiae",
  prettyPrint: false,
  quotaUser: "minus",
  uploadType: "placeat",
  uploadProtocol: "voluptatum",
};

sdk.projects.bigqueryconnectionProjectsLocationsConnectionsCreate(req).then((res: BigqueryconnectionProjectsLocationsConnectionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->