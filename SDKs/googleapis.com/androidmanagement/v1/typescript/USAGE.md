<!-- Start SDK Example Usage -->
```typescript
import {
  AndroidmanagementEnterprisesCreateRequest,
  AndroidmanagementEnterprisesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  EnterpriseEnabledNotificationTypesEnum,
  SigninDetailAllowPersonalUsageEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AndroidmanagementEnterprisesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  enterprise: {
    appAutoApprovalEnabled: false,
    contactInfo: {
      contactEmail: "provident",
      dataProtectionOfficerEmail: "distinctio",
      dataProtectionOfficerName: "quibusdam",
      dataProtectionOfficerPhone: "unde",
      euRepresentativeEmail: "nulla",
      euRepresentativeName: "corrupti",
      euRepresentativePhone: "illum",
    },
    enabledNotificationTypes: [
      EnterpriseEnabledNotificationTypesEnum.StatusReport,
      EnterpriseEnabledNotificationTypesEnum.StatusReport,
    ],
    enterpriseDisplayName: "suscipit",
    logo: {
      sha256Hash: "iure",
      url: "magnam",
    },
    name: "debitis",
    primaryColor: 56713,
    pubsubTopic: "delectus",
    signinDetails: [
      {
        allowPersonalUsage: SigninDetailAllowPersonalUsageEnum.PersonalUsageAllowed,
        qrCode: "molestiae",
        signinEnrollmentToken: "minus",
        signinUrl: "placeat",
      },
      {
        allowPersonalUsage: SigninDetailAllowPersonalUsageEnum.PersonalUsageAllowed,
        qrCode: "iusto",
        signinEnrollmentToken: "excepturi",
        signinUrl: "nisi",
      },
    ],
    termsAndConditions: [
      {
        content: {
          defaultMessage: "temporibus",
          localizedMessages: {
            "quis": "veritatis",
          },
        },
        header: {
          defaultMessage: "deserunt",
          localizedMessages: {
            "ipsam": "repellendus",
          },
        },
      },
      {
        content: {
          defaultMessage: "sapiente",
          localizedMessages: {
            "odit": "at",
            "at": "maiores",
            "molestiae": "quod",
            "quod": "esse",
          },
        },
        header: {
          defaultMessage: "totam",
          localizedMessages: {
            "dolorum": "dicta",
            "nam": "officia",
            "occaecati": "fugit",
            "deleniti": "hic",
          },
        },
      },
      {
        content: {
          defaultMessage: "optio",
          localizedMessages: {
            "beatae": "commodi",
            "molestiae": "modi",
            "qui": "impedit",
          },
        },
        header: {
          defaultMessage: "cum",
          localizedMessages: {
            "ipsum": "excepturi",
            "aspernatur": "perferendis",
          },
        },
      },
      {
        content: {
          defaultMessage: "ad",
          localizedMessages: {
            "sed": "iste",
            "dolor": "natus",
            "laboriosam": "hic",
          },
        },
        header: {
          defaultMessage: "saepe",
          localizedMessages: {
            "in": "corporis",
            "iste": "iure",
            "saepe": "quidem",
          },
        },
      },
    ],
  },
  accessToken: "architecto",
  agreementAccepted: false,
  alt: AltEnum.Json,
  callback: "reiciendis",
  enterpriseToken: "est",
  fields: "mollitia",
  key: "laborum",
  oauthToken: "dolores",
  prettyPrint: false,
  projectId: "dolorem",
  quotaUser: "corporis",
  signupUrlName: "explicabo",
  uploadType: "nobis",
  uploadProtocol: "enim",
};

sdk.enterprises.androidmanagementEnterprisesCreate(req).then((res: AndroidmanagementEnterprisesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->