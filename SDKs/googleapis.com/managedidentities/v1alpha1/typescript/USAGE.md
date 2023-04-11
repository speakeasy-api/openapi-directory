<!-- Start SDK Example Usage -->
```typescript
import {
  ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest,
  ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  TrustStateEnum,
  TrustTrustDirectionEnum,
  TrustTrustTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest = {
  dollarXgafv: XgafvEnum.Two,
  attachTrustRequest: {
    trust: {
      createTime: "provident",
      lastKnownTrustConnectedHeartbeatTime: "distinctio",
      selectiveAuthentication: false,
      state: TrustStateEnum.Disconnected,
      stateDescription: "unde",
      targetDnsIpAddresses: [
        "corrupti",
        "illum",
        "vel",
        "error",
      ],
      targetDomainName: "deserunt",
      trustDirection: TrustTrustDirectionEnum.Inbound,
      trustHandshakeSecret: "iure",
      trustType: TrustTrustTypeEnum.TrustTypeUnspecified,
      updateTime: "debitis",
    },
  },
  accessToken: "ipsa",
  alt: AltEnum.Proto,
  callback: "tempora",
  fields: "suscipit",
  key: "molestiae",
  name: "minus",
  oauthToken: "placeat",
  prettyPrint: false,
  quotaUser: "voluptatum",
  uploadType: "iusto",
  uploadProtocol: "excepturi",
};

sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsAttachTrust(req).then((res: ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->