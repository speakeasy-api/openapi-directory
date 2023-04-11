<!-- Start SDK Example Usage -->
```typescript
import {
  MybusinessAccountsCreateRequest,
  MybusinessAccountsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  AccountPermissionLevelEnum,
  AccountRoleEnum,
  AccountTypeEnum,
  AccountStateStatusEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MybusinessAccountsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  account: {
    accountName: "provident",
    accountNumber: "distinctio",
    name: "quibusdam",
    organizationInfo: {
      phoneNumber: "unde",
      postalAddress: {
        addressLines: [
          "corrupti",
          "illum",
          "vel",
          "error",
        ],
        administrativeArea: "deserunt",
        languageCode: "suscipit",
        locality: "iure",
        organization: "magnam",
        postalCode: "09234-7854",
        recipients: [
          "nisi",
          "recusandae",
          "temporibus",
        ],
        regionCode: "ab",
        revision: 337396,
        sortingCode: "veritatis",
        sublocality: "deserunt",
      },
      registeredDomain: "perferendis",
    },
    permissionLevel: AccountPermissionLevelEnum.OwnerLevel,
    role: AccountRoleEnum.CommunityManager,
    state: {
      status: AccountStateStatusEnum.VerificationRequested,
    },
    type: AccountTypeEnum.UserGroup,
  },
  accessToken: "odit",
  alt: AltEnum.Proto,
  callback: "at",
  fields: "maiores",
  key: "molestiae",
  oauthToken: "quod",
  prettyPrint: false,
  primaryOwner: "quod",
  quotaUser: "esse",
  uploadType: "totam",
  uploadProtocol: "porro",
};

sdk.accounts.mybusinessAccountsCreate(req).then((res: MybusinessAccountsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->