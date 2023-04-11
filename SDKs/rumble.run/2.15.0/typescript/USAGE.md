<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CredentialOptions,
  CreateAccountCredentialResponse
} from "openapi/dist/sdk/models/operations";
import {
  CredentialOptionsTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.CredentialOptions = {
  acl: {
    "provident": "distinctio",
    "quibusdam": "unde",
    "nulla": "corrupti",
  },
  cidrs: "10.0.0.17/32, 192.168.1.0/24",
  global: false,
  name: "credentials_name",
  secret: {
    authPassphrase: "authpass",
    authProtocol: "sha",
    context: "vlan-32",
    privacyPassphrase: "privpass",
    privacyProtocol: "aes",
    username: "user",
  },
  type: CredentialOptionsTypeEnum.MiradoreApiKeyV1,
};

sdk.account.createAccountCredential(req).then((res: CreateAccountCredentialResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->