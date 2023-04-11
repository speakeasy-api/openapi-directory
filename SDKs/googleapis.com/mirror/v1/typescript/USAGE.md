<!-- Start SDK Example Usage -->
```typescript
import {
  MirrorAccountsInsertRequest,
  MirrorAccountsInsertResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MirrorAccountsInsertRequest = {
  account: {
    authTokens: [
      {
        authToken: "provident",
        type: "distinctio",
      },
      {
        authToken: "quibusdam",
        type: "unde",
      },
      {
        authToken: "nulla",
        type: "corrupti",
      },
    ],
    features: [
      "vel",
      "error",
      "deserunt",
      "suscipit",
    ],
    password: "iure",
    userData: [
      {
        key: "debitis",
        value: "ipsa",
      },
      {
        key: "delectus",
        value: "tempora",
      },
    ],
  },
  accountName: "suscipit",
  accountType: "molestiae",
  alt: AltEnum.Json,
  fields: "minus",
  key: "placeat",
  oauthToken: "voluptatum",
  prettyPrint: false,
  quotaUser: "iusto",
  userIp: "excepturi",
  userToken: "nisi",
};

sdk.accounts.mirrorAccountsInsert(req).then((res: MirrorAccountsInsertResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->