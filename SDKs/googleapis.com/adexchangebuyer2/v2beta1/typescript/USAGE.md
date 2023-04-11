<!-- Start SDK Example Usage -->
```typescript
import {
  Adexchangebuyer2AccountsClientsCreateRequest,
  Adexchangebuyer2AccountsClientsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  ClientEntityTypeEnum,
  ClientRoleEnum,
  ClientStatusEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: Adexchangebuyer2AccountsClientsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  client: {
    clientAccountId: "provident",
    clientName: "distinctio",
    entityId: "quibusdam",
    entityName: "unde",
    entityType: ClientEntityTypeEnum.EntityTypeUnclassified,
    partnerClientId: "corrupti",
    role: ClientRoleEnum.ClientDealApprover,
    status: ClientStatusEnum.Disabled,
    visibleToSeller: false,
  },
  accessToken: "error",
  accountId: "deserunt",
  alt: AltEnum.Media,
  callback: "iure",
  fields: "magnam",
  key: "debitis",
  oauthToken: "ipsa",
  prettyPrint: false,
  quotaUser: "delectus",
  uploadType: "tempora",
  uploadProtocol: "suscipit",
};

sdk.accounts.adexchangebuyer2AccountsClientsCreate(req).then((res: Adexchangebuyer2AccountsClientsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->