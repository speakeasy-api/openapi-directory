<!-- Start SDK Example Usage -->
```typescript
import {
  IdsProjectsLocationsEndpointsCreateRequest,
  IdsProjectsLocationsEndpointsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  EndpointSeverityEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: IdsProjectsLocationsEndpointsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  endpointInput: {
    description: "provident",
    labels: {
      "quibusdam": "unde",
      "nulla": "corrupti",
      "illum": "vel",
    },
    network: "error",
    severity: EndpointSeverityEnum.Medium,
    threatExceptions: [
      "iure",
      "magnam",
    ],
    trafficLogs: false,
  },
  accessToken: "debitis",
  alt: AltEnum.Json,
  callback: "delectus",
  endpointId: "tempora",
  fields: "suscipit",
  key: "molestiae",
  oauthToken: "minus",
  parent: "placeat",
  prettyPrint: false,
  quotaUser: "voluptatum",
  requestId: "iusto",
  uploadType: "excepturi",
  uploadProtocol: "nisi",
};

sdk.projects.idsProjectsLocationsEndpointsCreate(req).then((res: IdsProjectsLocationsEndpointsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->