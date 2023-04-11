# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/mybusinessaccountmanagement/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/mybusinessaccountmanagement/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `mybusinessaccountmanagementAccountsCreate` - Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.
* `mybusinessaccountmanagementAccountsGet` - Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.
* `mybusinessaccountmanagementAccountsInvitationsAccept` - Accepts the specified invitation.
* `mybusinessaccountmanagementAccountsInvitationsDecline` - Declines the specified invitation.
* `mybusinessaccountmanagementAccountsInvitationsList` - Lists pending invitations for the specified account.
* `mybusinessaccountmanagementAccountsList` - Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

### locations

* `mybusinessaccountmanagementLocationsAdminsCreate` - Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
* `mybusinessaccountmanagementLocationsAdminsDelete` - Removes the specified admin as a manager of the specified location.
* `mybusinessaccountmanagementLocationsAdminsList` - Lists all of the admins for the specified location.
* `mybusinessaccountmanagementLocationsAdminsPatch` - Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.
* `mybusinessaccountmanagementLocationsTransfer` - Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

