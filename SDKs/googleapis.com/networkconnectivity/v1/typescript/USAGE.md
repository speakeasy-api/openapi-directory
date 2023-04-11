<!-- Start SDK Example Usage -->
```typescript
import {
  NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest,
  NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  hubInput: {
    description: "provident",
    labels: {
      "quibusdam": "unde",
      "nulla": "corrupti",
      "illum": "vel",
    },
    name: "error",
    routingVpcs: [
      {
        uri: "http://innocent-effect.org",
      },
      {
        uri: "http://whirlwind-diver.info",
      },
      {
        uri: "http://spotted-skyline.name",
      },
    ],
  },
  accessToken: "iusto",
  alt: AltEnum.Media,
  callback: "nisi",
  fields: "recusandae",
  hubId: "temporibus",
  key: "ab",
  oauthToken: "quis",
  parent: "veritatis",
  prettyPrint: false,
  quotaUser: "deserunt",
  requestId: "perferendis",
  uploadType: "ipsam",
  uploadProtocol: "repellendus",
};

sdk.projects.networkconnectivityProjectsLocationsGlobalHubsCreate(req).then((res: NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->