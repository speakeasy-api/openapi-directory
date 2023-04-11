<!-- Start SDK Example Usage -->
```typescript
import {
  TagmanagerAccountsContainersCreateRequest,
  TagmanagerAccountsContainersCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  ContainerEnabledBuiltInVariableEnum,
  ContainerUsageContextEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TagmanagerAccountsContainersCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  container: {
    accountId: "provident",
    containerId: "distinctio",
    domainName: [
      "unde",
      "nulla",
      "corrupti",
      "illum",
    ],
    enabledBuiltInVariable: [
      ContainerEnabledBuiltInVariableEnum.AmpGtmEvent,
      ContainerEnabledBuiltInVariableEnum.FirebaseEventParameterCampaign,
    ],
    fingerprint: "suscipit",
    name: "iure",
    notes: "magnam",
    publicId: "debitis",
    timeZoneCountryId: "ipsa",
    timeZoneId: "delectus",
    usageContext: [
      ContainerUsageContextEnum.Ios,
      ContainerUsageContextEnum.Ios,
    ],
  },
  accessToken: "minus",
  accountId: "placeat",
  alt: AltEnum.Media,
  callback: "iusto",
  fields: "excepturi",
  key: "nisi",
  oauthToken: "recusandae",
  prettyPrint: false,
  quotaUser: "temporibus",
  uploadType: "ab",
  uploadProtocol: "quis",
};

sdk.accounts.tagmanagerAccountsContainersCreate(req).then((res: TagmanagerAccountsContainersCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->