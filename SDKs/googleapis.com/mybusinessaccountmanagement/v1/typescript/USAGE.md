<!-- Start SDK Example Usage -->
```typescript
import {
  MybusinessaccountmanagementAccountsCreateRequest,
  MybusinessaccountmanagementAccountsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  AccountTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MybusinessaccountmanagementAccountsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  accountInput: {
    accountName: "provident",
    name: "distinctio",
    organizationInfo: {
      address: {
        addressLines: [
          "unde",
          "nulla",
          "corrupti",
          "illum",
        ],
        administrativeArea: "vel",
        languageCode: "error",
        locality: "deserunt",
        organization: "suscipit",
        postalCode: "28092",
        recipients: [
          "molestiae",
          "minus",
        ],
        regionCode: "placeat",
        revision: 528895,
        sortingCode: "iusto",
        sublocality: "excepturi",
      },
    },
    primaryOwner: "nisi",
    type: AccountTypeEnum.Organization,
  },
  accessToken: "temporibus",
  alt: AltEnum.Json,
  callback: "quis",
  fields: "veritatis",
  key: "deserunt",
  oauthToken: "perferendis",
  prettyPrint: false,
  quotaUser: "ipsam",
  uploadType: "repellendus",
  uploadProtocol: "sapiente",
};

sdk.accounts.mybusinessaccountmanagementAccountsCreate(req).then((res: MybusinessaccountmanagementAccountsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->