<!-- Start SDK Example Usage -->
```typescript
import {
  ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest,
  ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest: {
    requests: [
      {
        policySchema: "distinctio",
        policyTargetKey: {
          additionalTargetKeys: {
            "unde": "nulla",
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
          },
          targetResource: "iure",
        },
      },
      {
        policySchema: "magnam",
        policyTargetKey: {
          additionalTargetKeys: {
            "ipsa": "delectus",
            "tempora": "suscipit",
            "molestiae": "minus",
            "placeat": "voluptatum",
          },
          targetResource: "iusto",
        },
      },
      {
        policySchema: "excepturi",
        policyTargetKey: {
          additionalTargetKeys: {
            "recusandae": "temporibus",
            "ab": "quis",
          },
          targetResource: "veritatis",
        },
      },
    ],
  },
  accessToken: "deserunt",
  alt: AltEnum.Json,
  callback: "ipsam",
  customer: "repellendus",
  fields: "sapiente",
  key: "quo",
  oauthToken: "odit",
  prettyPrint: false,
  quotaUser: "at",
  uploadType: "at",
  uploadProtocol: "maiores",
};

sdk.customers.chromepolicyCustomersPoliciesGroupsBatchDelete(req).then((res: ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->