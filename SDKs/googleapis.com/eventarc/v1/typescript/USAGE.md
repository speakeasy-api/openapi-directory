<!-- Start SDK Example Usage -->
```typescript
import {
  EventarcProjectsLocationsChannelConnectionsCreateRequest,
  EventarcProjectsLocationsChannelConnectionsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: EventarcProjectsLocationsChannelConnectionsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  channelConnectionInput: {
    activationToken: "provident",
    channel: "distinctio",
    name: "quibusdam",
  },
  accessToken: "unde",
  alt: AltEnum.Proto,
  callback: "corrupti",
  channelConnectionId: "illum",
  fields: "vel",
  key: "error",
  oauthToken: "deserunt",
  parent: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.projects.eventarcProjectsLocationsChannelConnectionsCreate(req).then((res: EventarcProjectsLocationsChannelConnectionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->