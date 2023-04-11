<!-- Start SDK Example Usage -->
```typescript
import {
  BeyondcorpProjectsLocationsAppConnectionsCreateRequest,
  BeyondcorpProjectsLocationsAppConnectionsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum,
  GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BeyondcorpProjectsLocationsAppConnectionsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudBeyondcorpAppconnectionsV1AppConnectionInput: {
    applicationEndpoint: {
      host: "provident",
      port: 715190,
    },
    connectors: [
      "unde",
      "nulla",
      "corrupti",
      "illum",
    ],
    displayName: "vel",
    gateway: {
      appGateway: "error",
      type: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum.GcpRegionalMig,
    },
    labels: {
      "iure": "magnam",
      "debitis": "ipsa",
    },
    name: "delectus",
    type: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum.TypeUnspecified,
  },
  accessToken: "suscipit",
  alt: AltEnum.Media,
  appConnectionId: "minus",
  callback: "placeat",
  fields: "voluptatum",
  key: "iusto",
  oauthToken: "excepturi",
  parent: "nisi",
  prettyPrint: false,
  quotaUser: "recusandae",
  requestId: "temporibus",
  uploadType: "ab",
  uploadProtocol: "quis",
  validateOnly: false,
};

sdk.projects.beyondcorpProjectsLocationsAppConnectionsCreate(req).then((res: BeyondcorpProjectsLocationsAppConnectionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->