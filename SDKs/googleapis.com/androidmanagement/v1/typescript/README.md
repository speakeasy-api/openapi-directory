# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/androidmanagement/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/androidmanagement/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### enterprises

* `androidmanagementEnterprisesCreate` - Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail
* `androidmanagementEnterprisesDevicesIssueCommand` - Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
* `androidmanagementEnterprisesDevicesList` - Lists devices for a given enterprise. Deleted devices are not returned in the response.
* `androidmanagementEnterprisesDevicesOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `androidmanagementEnterprisesEnrollmentTokensCreate` - Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
* `androidmanagementEnterprisesEnrollmentTokensList` - Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
* `androidmanagementEnterprisesList` - Lists EMM-managed enterprises. Only BASIC fields are returned.
* `androidmanagementEnterprisesPoliciesList` - Lists policies for a given enterprise.
* `androidmanagementEnterprisesWebAppsCreate` - Creates a web app.
* `androidmanagementEnterprisesWebAppsDelete` - Deletes a web app.
* `androidmanagementEnterprisesWebAppsGet` - Gets a web app.
* `androidmanagementEnterprisesWebAppsList` - Lists web apps for a given enterprise.
* `androidmanagementEnterprisesWebAppsPatch` - Updates a web app.
* `androidmanagementEnterprisesWebTokensCreate` - Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

### signupUrls

* `androidmanagementSignupUrlsCreate` - Creates an enterprise signup URL.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

