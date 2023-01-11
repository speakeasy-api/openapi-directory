# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ListPaymentChannelRulesV1Response } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    oAuth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));

sdk.countries.listPaymentChannelRulesV1().then((res: ListPaymentChannelRulesV1Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Countries

* `listPaymentChannelRulesV1` - List Payment Channel Country Rules
* `listSupportedCountriesV1` - List Supported Countries
* `listSupportedCountriesV2` - List Supported Countries

### Currencies

* `listSupportedCurrenciesV2` - List Supported Currencies

### Funding Manager

* `createAchFundingRequest` - Create Funding Request
* `createFundingRequest` - Create Funding Request
* `createFundingRequestV3` - Create Funding Request
* `getFundingAccount` - Get Funding Account
* `getFundingAccountV2` - Get Funding Account
* `getFundingAccounts` - Get Funding Accounts
* `getFundingAccountsV2` - Get Funding Accounts
* `getSourceAccount` - Get details about given source account.
* `getSourceAccountV2` - Get details about given source account.
* `getSourceAccountV3` - Get details about given source account.
* `getSourceAccounts` - Get list of source accounts
* `getSourceAccountsV2` - Get list of source accounts
* `getSourceAccountsV3` - Get list of source accounts
* `listFundingAuditDeltas` - Get Funding Audit Delta
* `setNotificationsRequest` - Set notifications
* `transferFunds` - Transfer Funds between source accounts
* `transferFundsV3` - Transfer Funds between source accounts

### Funding Manager Private

* `createFundingAccountV2` - Create Funding Account
* `deleteSourceAccountV3` - Delete a source account by ID

### Login

* `logout` - Logout
* `resetPassword` - Reset password
* `validateAccessToken` - validate
* `veloAuth` - Authentication endpoint

### Payee Invitation

* `getPayeesInvitationStatusV3` - Get Payee Invitation Status
* `getPayeesInvitationStatusV4` - Get Payee Invitation Status
* `queryBatchStatusV3` - Query Batch Status
* `queryBatchStatusV4` - Query Batch Status
* `resendPayeeInviteV3` - Resend Payee Invite
* `resendPayeeInviteV4` - Resend Payee Invite
* `v3CreatePayee` - Initiate Payee Creation
* `v4CreatePayee` - Initiate Payee Creation

### Payees

* `deletePayeeByIdV3` - Delete Payee by Id
* `deletePayeeByIdV4` - Delete Payee by Id
* `getPayeeByIdV3` - Get Payee by Id
* `getPayeeByIdV4` - Get Payee by Id
* `listPayeeChangesV3` - List Payee Changes
* `listPayeeChangesV4` - List Payee Changes
* `listPayeesV3` - List Payees
* `listPayeesV4` - List Payees
* `payeeDetailsUpdateV3` - Update Payee Details
* `payeeDetailsUpdateV4` - Update Payee Details
* `postV3PayeesPayeeIdRemoteIdUpdate` - Update Payee Remote Id
* `postV4PayeesPayeeIdRemoteIdUpdate` - Update Payee Remote Id

### Payment Audit Service

* `exportTransactionsCsvv4` - Export Transactions
* `getFundingsV4` - Get Fundings for Payor
* `getPaymentDetailsV4` - Get Payment
* `getPaymentsForPayoutV4` - Get Payments for Payout
* `getPayoutStatsV4` - Get Payout Statistics
* `getPayoutsForPayorV4` - Get Payouts for Payor
* `listPaymentChangesV4` - List Payment Changes
* `listPaymentsAuditV4` - Get List of Payments

### Payment Audit Service (Deprecated)

* `exportTransactionsCsvv3` - V3 Export Transactions
* `getFundingsV1` - V1 Get Fundings for Payor
* `getPaymentDetailsV3` - V3 Get Payment
* `getPaymentsForPayoutPaV3` - V3 Get Payments for Payout
* `getPayoutStatsV1` - V1 Get Payout Statistics
* `getPayoutsForPayorV3` - V3 Get Payouts for Payor
* `listPaymentChanges` - V1 List Payment Changes
* `listPaymentsAuditV3` - V3 Get List of Payments

### Payors

* `getPayorById` - Get Payor
* `getPayorByIdV2` - Get Payor
* `payorAddPayorLogo` - Add Logo
* `payorCreateApiKeyRequest` - Create API Key
* `payorCreateApplicationRequest` - Create Application
* `payorEmailOptOut` - Reminder Email Opt-Out
* `payorGetBranding` - Get Branding
* `payorLinks` - List Payor Links

### Payors Private

* `createPayorLinks` - Create a Payor Link

### Payout Service

* `createQuoteForPayoutV3` - Create a quote for the payout
* `getPaymentsForPayoutV3` - Retrieve payments for a payout
* `getPayoutSummaryV3` - Get Payout Summary
* `instructPayoutV3` - Instruct Payout
* `submitPayoutV3` - Submit Payout
* `withdrawPayment` - Withdraw a Payment
* `withdrawPayoutV3` - Withdraw Payout

### Tokens

* `resendToken` - Resend a token

### Users

* `deleteUserByIdV2` - Delete a User
* `disableUserV2` - Disable a User
* `enableUserV2` - Enable a User
* `getSelf` - Get Self
* `getUserByIdV2` - Get User
* `inviteUser` - Invite a User
* `listUsers` - List Users
* `registerSms` - Register SMS Number
* `resendToken` - Resend a token
* `roleUpdate` - Update User Role
* `unlockUserV2` - Unlock a User
* `unregisterMfa` - Unregister MFA for the user
* `unregisterMfaForSelf` - Unregister MFA for Self
* `updatePasswordSelf` - Update Password for self
* `userDetailsUpdate` - Update User Details
* `userDetailsUpdateForSelf` - Update User Details for self
* `validatePasswordSelf` - Validate the proposed password

### Webhooks

* `createWebhookV1` - Create Webhook
* `getWebhookV1` - Get details about the given webhook.
* `listWebhooksV1` - List the details about the webhooks for the given payor.
* `pingWebhookV1`
* `updateWebhookV1` - Update Webhook

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
