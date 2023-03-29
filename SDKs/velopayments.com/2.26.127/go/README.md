# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/velopayments.com/2.26.127/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Countries.ListPaymentChannelRulesV1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentChannelRulesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Countries

* `ListPaymentChannelRulesV1` - List Payment Channel Country Rules
* `ListSupportedCountriesV1` - List Supported Countries
* `ListSupportedCountriesV2` - List Supported Countries

### Currencies

* `ListSupportedCurrenciesV2` - List Supported Currencies

### FundingManager

* `CreateAchFundingRequest` - Create Funding Request
* `CreateFundingRequest` - Create Funding Request
* `CreateFundingRequestV3` - Create Funding Request
* `GetFundingAccount` - Get Funding Account
* `GetFundingAccountV2` - Get Funding Account
* `GetFundingAccounts` - Get Funding Accounts
* `GetFundingAccountsV2` - Get Funding Accounts
* `GetSourceAccount` - Get details about given source account.
* `GetSourceAccountV2` - Get details about given source account.
* `GetSourceAccountV3` - Get details about given source account.
* `GetSourceAccounts` - Get list of source accounts
* `GetSourceAccountsV2` - Get list of source accounts
* `GetSourceAccountsV3` - Get list of source accounts
* `ListFundingAuditDeltas` - Get Funding Audit Delta
* `SetNotificationsRequest` - Set notifications
* `TransferFunds` - Transfer Funds between source accounts
* `TransferFundsV3` - Transfer Funds between source accounts

### FundingManagerPrivate

* `CreateFundingAccountV2` - Create Funding Account
* `DeleteSourceAccountV3` - Delete a source account by ID

### Login

* `Logout` - Logout
* `ResetPassword` - Reset password
* `ValidateAccessToken` - validate
* `VeloAuth` - Authentication endpoint

### PayeeInvitation

* `GetPayeesInvitationStatusV3` - Get Payee Invitation Status
* `GetPayeesInvitationStatusV4` - Get Payee Invitation Status
* `QueryBatchStatusV3` - Query Batch Status
* `QueryBatchStatusV4` - Query Batch Status
* `ResendPayeeInviteV3` - Resend Payee Invite
* `ResendPayeeInviteV4` - Resend Payee Invite
* `V3CreatePayeeJSON` - Initiate Payee Creation
* `V3CreatePayeeMultipart` - Initiate Payee Creation
* `V4CreatePayeeJSON` - Initiate Payee Creation
* `V4CreatePayeeMultipart` - Initiate Payee Creation

### Payees

* `DeletePayeeByIDV3` - Delete Payee by Id
* `DeletePayeeByIDV4` - Delete Payee by Id
* `GetPayeeByIDV3` - Get Payee by Id
* `GetPayeeByIDV4` - Get Payee by Id
* `ListPayeeChangesV3` - List Payee Changes
* `ListPayeeChangesV4` - List Payee Changes
* `ListPayeesV3` - List Payees
* `ListPayeesV4` - List Payees
* `PayeeDetailsUpdateV3` - Update Payee Details
* `PayeeDetailsUpdateV4` - Update Payee Details
* `PostV3PayeesPayeeIDRemoteIDUpdate` - Update Payee Remote Id
* `PostV4PayeesPayeeIDRemoteIDUpdate` - Update Payee Remote Id

### PaymentAuditService

* `ExportTransactionsCsvv4` - Export Transactions
* `GetFundingsV4` - Get Fundings for Payor
* `GetPaymentDetailsV4` - Get Payment
* `GetPaymentsForPayoutV4` - Get Payments for Payout
* `GetPayoutStatsV4` - Get Payout Statistics
* `GetPayoutsForPayorV4` - Get Payouts for Payor
* `ListPaymentChangesV4` - List Payment Changes
* `ListPaymentsAuditV4` - Get List of Payments

### PaymentAuditServiceDeprecated

* `ExportTransactionsCsvv3` - V3 Export Transactions
* `GetFundingsV1` - V1 Get Fundings for Payor
* `GetPaymentDetailsV3` - V3 Get Payment
* `GetPaymentsForPayoutPAV3` - V3 Get Payments for Payout
* `GetPayoutStatsV1` - V1 Get Payout Statistics
* `GetPayoutsForPayorV3` - V3 Get Payouts for Payor
* `ListPaymentChanges` - V1 List Payment Changes
* `ListPaymentsAuditV3` - V3 Get List of Payments

### Payors

* `GetPayorByID` - Get Payor
* `GetPayorByIDV2` - Get Payor
* `PayorAddPayorLogo` - Add Logo
* `PayorCreateAPIKeyRequest` - Create API Key
* `PayorCreateApplicationRequest` - Create Application
* `PayorEmailOptOut` - Reminder Email Opt-Out
* `PayorGetBranding` - Get Branding
* `PayorLinks` - List Payor Links

### PayorsPrivate

* `CreatePayorLinks` - Create a Payor Link

### PayoutService

* `CreateQuoteForPayoutV3` - Create a quote for the payout
* `GetPaymentsForPayoutV3` - Retrieve payments for a payout
* `GetPayoutSummaryV3` - Get Payout Summary
* `InstructPayoutV3` - Instruct Payout
* `SubmitPayoutV3JSON` - Submit Payout
* `SubmitPayoutV3Multipart` - Submit Payout
* `WithdrawPayment` - Withdraw a Payment
* `WithdrawPayoutV3` - Withdraw Payout

### Tokens

* `ResendToken` - Resend a token

### Users

* `DeleteUserByIDV2` - Delete a User
* `DisableUserV2` - Disable a User
* `EnableUserV2` - Enable a User
* `GetSelf` - Get Self
* `GetUserByIDV2` - Get User
* `InviteUser` - Invite a User
* `ListUsers` - List Users
* `RegisterSms` - Register SMS Number
* `ResendToken` - Resend a token
* `RoleUpdate` - Update User Role
* `UnlockUserV2` - Unlock a User
* `UnregisterMFA` - Unregister MFA for the user
* `UnregisterMFAForSelf` - Unregister MFA for Self
* `UpdatePasswordSelf` - Update Password for self
* `UserDetailsUpdate` - Update User Details
* `UserDetailsUpdateForSelf` - Update User Details for self
* `ValidatePasswordSelf` - Validate the proposed password

### Webhooks

* `CreateWebhookV1` - Create Webhook
* `GetWebhookV1` - Get details about the given webhook.
* `ListWebhooksV1` - List the details about the webhooks for the given payor.
* `PingWebhookV1`
* `UpdateWebhookV1` - Update Webhook
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
