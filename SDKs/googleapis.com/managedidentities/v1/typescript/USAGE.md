<!-- Start SDK Example Usage -->
```typescript
import {
  ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest,
  ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  TrustTrustDirectionEnum,
  TrustTrustTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest = {
  dollarXgafv: XgafvEnum.Two,
  attachTrustRequestInput: {
    trust: {
      selectiveAuthentication: false,
      targetDnsIpAddresses: [
        "distinctio",
        "quibusdam",
        "unde",
      ],
      targetDomainName: "nulla",
      trustDirection: TrustTrustDirectionEnum.Outbound,
      trustHandshakeSecret: "illum",
      trustType: TrustTrustTypeEnum.Forest,
    },
  },
  accessToken: "error",
  alt: AltEnum.Media,
  callback: "suscipit",
  fields: "iure",
  key: "magnam",
  name: "debitis",
  oauthToken: "ipsa",
  prettyPrint: false,
  quotaUser: "delectus",
  uploadType: "tempora",
  uploadProtocol: "suscipit",
};

sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsAttachTrust(req).then((res: ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->