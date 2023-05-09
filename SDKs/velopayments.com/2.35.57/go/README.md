# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/velopayments.com/2.35.57/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
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
## Available Resources and Operations


### [Countries](docs/countries/README.md)

* [~~ListPaymentChannelRulesV1~~](docs/countries/README.md#listpaymentchannelrulesv1) - List Payment Channel Country Rules :warning: **Deprecated**
* [~~ListSupportedCountriesV1~~](docs/countries/README.md#listsupportedcountriesv1) - List Supported Countries :warning: **Deprecated**
* [~~ListSupportedCountriesV2~~](docs/countries/README.md#listsupportedcountriesv2) - List Supported Countries :warning: **Deprecated**

### [Currencies](docs/currencies/README.md)

* [ListSupportedCurrenciesV2](docs/currencies/README.md#listsupportedcurrenciesv2) - List Supported Currencies

### [Funding](docs/funding/README.md)

* [~~CreateFundingRequestV2~~](docs/funding/README.md#createfundingrequestv2) - Create Funding Request :warning: **Deprecated**
* [CreateFundingRequestV3](docs/funding/README.md#createfundingrequestv3) - Create Funding Request
* [GetFundingAccountV2](docs/funding/README.md#getfundingaccountv2) - Get Funding Account
* [GetFundingAccountsV2](docs/funding/README.md#getfundingaccountsv2) - Get Funding Accounts
* [GetFundingByIDV1](docs/funding/README.md#getfundingbyidv1) - Get Funding
* [ListFundingAuditDeltas](docs/funding/README.md#listfundingauditdeltas) - Get Funding Audit Delta

### [FundingManagerPrivate](docs/fundingmanagerprivate/README.md)

* [CreateFundingAccountV2](docs/fundingmanagerprivate/README.md#createfundingaccountv2) - Create Funding Account
* [DeleteSourceAccountV3](docs/fundingmanagerprivate/README.md#deletesourceaccountv3) - Delete a source account by ID

### [Login](docs/login/README.md)

* [Logout](docs/login/README.md#logout) - Logout
* [ResetPassword](docs/login/README.md#resetpassword) - Reset password
* [ValidateAccessToken](docs/login/README.md#validateaccesstoken) - validate
* [VeloAuth](docs/login/README.md#veloauth) - Authentication endpoint

### [PayeeInvitation](docs/payeeinvitation/README.md)

* [~~CreatePayeeV3JSON~~](docs/payeeinvitation/README.md#createpayeev3json) - Initiate Payee Creation :warning: **Deprecated**
* [~~CreatePayeeV3Multipart~~](docs/payeeinvitation/README.md#createpayeev3multipart) - Initiate Payee Creation :warning: **Deprecated**
* [~~GetPayeesInvitationStatusV3~~](docs/payeeinvitation/README.md#getpayeesinvitationstatusv3) - Get Payee Invitation Status :warning: **Deprecated**
* [GetPayeesInvitationStatusV4](docs/payeeinvitation/README.md#getpayeesinvitationstatusv4) - Get Payee Invitation Status
* [~~QueryBatchStatusV3~~](docs/payeeinvitation/README.md#querybatchstatusv3) - Query Batch Status :warning: **Deprecated**
* [QueryBatchStatusV4](docs/payeeinvitation/README.md#querybatchstatusv4) - Query Batch Status
* [~~ResendPayeeInviteV3~~](docs/payeeinvitation/README.md#resendpayeeinvitev3) - Resend Payee Invite :warning: **Deprecated**
* [ResendPayeeInviteV4](docs/payeeinvitation/README.md#resendpayeeinvitev4) - Resend Payee Invite
* [V4CreatePayeeJSON](docs/payeeinvitation/README.md#v4createpayeejson) - Initiate Payee Creation
* [V4CreatePayeeMultipart](docs/payeeinvitation/README.md#v4createpayeemultipart) - Initiate Payee Creation

### [Payees](docs/payees/README.md)

* [~~DeletePayeeByIDV3~~](docs/payees/README.md#deletepayeebyidv3) - Delete Payee by Id :warning: **Deprecated**
* [DeletePayeeByIDV4](docs/payees/README.md#deletepayeebyidv4) - Delete Payee by Id
* [~~GetPayeeByIDV3~~](docs/payees/README.md#getpayeebyidv3) - Get Payee by Id :warning: **Deprecated**
* [GetPayeeByIDV4](docs/payees/README.md#getpayeebyidv4) - Get Payee by Id
* [~~ListPayeeChangesV3~~](docs/payees/README.md#listpayeechangesv3) - List Payee Changes :warning: **Deprecated**
* [ListPayeeChangesV4](docs/payees/README.md#listpayeechangesv4) - List Payee Changes
* [~~ListPayeesV3~~](docs/payees/README.md#listpayeesv3) - List Payees :warning: **Deprecated**
* [ListPayeesV4](docs/payees/README.md#listpayeesv4) - List Payees
* [~~PayeeDetailsUpdateV3~~](docs/payees/README.md#payeedetailsupdatev3) - Update Payee Details :warning: **Deprecated**
* [PayeeDetailsUpdateV4](docs/payees/README.md#payeedetailsupdatev4) - Update Payee Details
* [~~PostV3PayeesPayeeIDRemoteIDUpdate~~](docs/payees/README.md#postv3payeespayeeidremoteidupdate) - Update Payee Remote Id :warning: **Deprecated**
* [PostV4PayeesPayeeIDRemoteIDUpdate](docs/payees/README.md#postv4payeespayeeidremoteidupdate) - Update Payee Remote Id

### [PaymentAuditService](docs/paymentauditservice/README.md)

* [ExportTransactionsCsvv4](docs/paymentauditservice/README.md#exporttransactionscsvv4) - Export Transactions
* [GetFundingsV4](docs/paymentauditservice/README.md#getfundingsv4) - Get Fundings for Payor
* [GetPaymentDetailsV4](docs/paymentauditservice/README.md#getpaymentdetailsv4) - Get Payment
* [GetPaymentsForPayoutV4](docs/paymentauditservice/README.md#getpaymentsforpayoutv4) - Get Payments for Payout
* [GetPayoutStatsV4](docs/paymentauditservice/README.md#getpayoutstatsv4) - Get Payout Statistics
* [GetPayoutsForPayorV4](docs/paymentauditservice/README.md#getpayoutsforpayorv4) - Get Payouts for Payor
* [ListPaymentChangesV4](docs/paymentauditservice/README.md#listpaymentchangesv4) - List Payment Changes
* [ListPaymentsAuditV4](docs/paymentauditservice/README.md#listpaymentsauditv4) - Get List of Payments

### [PaymentAuditServiceDeprecated](docs/paymentauditservicedeprecated/README.md)

* [~~ExportTransactionsCsvv3~~](docs/paymentauditservicedeprecated/README.md#exporttransactionscsvv3) - V3 Export Transactions :warning: **Deprecated**
* [~~GetFundingsV1~~](docs/paymentauditservicedeprecated/README.md#getfundingsv1) - V1 Get Fundings for Payor :warning: **Deprecated**
* [~~GetPaymentDetailsV3~~](docs/paymentauditservicedeprecated/README.md#getpaymentdetailsv3) - V3 Get Payment :warning: **Deprecated**
* [~~GetPaymentsForPayoutPAV3~~](docs/paymentauditservicedeprecated/README.md#getpaymentsforpayoutpav3) - V3 Get Payments for Payout :warning: **Deprecated**
* [~~GetPayoutStatsV1~~](docs/paymentauditservicedeprecated/README.md#getpayoutstatsv1) - V1 Get Payout Statistics :warning: **Deprecated**
* [~~GetPayoutsForPayorV3~~](docs/paymentauditservicedeprecated/README.md#getpayoutsforpayorv3) - V3 Get Payouts for Payor :warning: **Deprecated**
* [~~ListPaymentChanges~~](docs/paymentauditservicedeprecated/README.md#listpaymentchanges) - V1 List Payment Changes :warning: **Deprecated**
* [~~ListPaymentsAuditV3~~](docs/paymentauditservicedeprecated/README.md#listpaymentsauditv3) - V3 Get List of Payments :warning: **Deprecated**

### [PayorHierarchy](docs/payorhierarchy/README.md)

* [PayorLinksV1](docs/payorhierarchy/README.md#payorlinksv1) - List Payor Links

### [Payors](docs/payors/README.md)

* [~~GetPayorByIDV1~~](docs/payors/README.md#getpayorbyidv1) - Get Payor :warning: **Deprecated**
* [GetPayorByIDV2](docs/payors/README.md#getpayorbyidv2) - Get Payor
* [PayorAddPayorLogoV1](docs/payors/README.md#payoraddpayorlogov1) - Add Logo
* [PayorCreateAPIKeyV1](docs/payors/README.md#payorcreateapikeyv1) - Create API Key
* [PayorCreateApplicationV1](docs/payors/README.md#payorcreateapplicationv1) - Create Application
* [PayorEmailOptOut](docs/payors/README.md#payoremailoptout) - Reminder Email Opt-Out
* [PayorGetBranding](docs/payors/README.md#payorgetbranding) - Get Branding

### [PayorsPrivate](docs/payorsprivate/README.md)

* [CreatePayorLinks](docs/payorsprivate/README.md#createpayorlinks) - Create a Payor Link

### [Payouts](docs/payouts/README.md)

* [CreateQuoteForPayoutV3](docs/payouts/README.md#createquoteforpayoutv3) - Create a quote for the payout
* [DeschedulePayout](docs/payouts/README.md#deschedulepayout) - Deschedule a payout
* [GetPaymentsForPayoutV3](docs/payouts/README.md#getpaymentsforpayoutv3) - Retrieve payments for a payout
* [GetPayoutSummaryV3](docs/payouts/README.md#getpayoutsummaryv3) - Get Payout Summary
* [InstructPayoutV3](docs/payouts/README.md#instructpayoutv3) - Instruct Payout
* [ScheduleForPayout](docs/payouts/README.md#scheduleforpayout) - Schedule a payout
* [SubmitPayoutV3JSON](docs/payouts/README.md#submitpayoutv3json) - Submit Payout
* [SubmitPayoutV3Multipart](docs/payouts/README.md#submitpayoutv3multipart) - Submit Payout
* [WithdrawPayment](docs/payouts/README.md#withdrawpayment) - Withdraw a Payment
* [WithdrawPayoutV3](docs/payouts/README.md#withdrawpayoutv3) - Withdraw Payout

### [SourceAccounts](docs/sourceaccounts/README.md)

* [~~GetSourceAccountV2~~](docs/sourceaccounts/README.md#getsourceaccountv2) - Get Source Account :warning: **Deprecated**
* [GetSourceAccountV3](docs/sourceaccounts/README.md#getsourceaccountv3) - Get details about given source account.
* [~~GetSourceAccountsV2~~](docs/sourceaccounts/README.md#getsourceaccountsv2) - Get list of source accounts :warning: **Deprecated**
* [GetSourceAccountsV3](docs/sourceaccounts/README.md#getsourceaccountsv3) - Get list of source accounts
* [~~SetNotificationsRequest~~](docs/sourceaccounts/README.md#setnotificationsrequest) - Set notifications :warning: **Deprecated**
* [SetNotificationsRequestV3](docs/sourceaccounts/README.md#setnotificationsrequestv3) - Set notifications
* [~~TransferFundsV2~~](docs/sourceaccounts/README.md#transferfundsv2) - Transfer Funds between source accounts :warning: **Deprecated**
* [TransferFundsV3](docs/sourceaccounts/README.md#transferfundsv3) - Transfer Funds between source accounts

### [Tokens](docs/tokens/README.md)

* [ResendToken](docs/tokens/README.md#resendtoken) - Resend a token

### [Users](docs/users/README.md)

* [DeleteUserByIDV2](docs/users/README.md#deleteuserbyidv2) - Delete a User
* [DisableUserV2](docs/users/README.md#disableuserv2) - Disable a User
* [EnableUserV2](docs/users/README.md#enableuserv2) - Enable a User
* [GetSelf](docs/users/README.md#getself) - Get Self
* [GetUserByIDV2](docs/users/README.md#getuserbyidv2) - Get User
* [InviteUser](docs/users/README.md#inviteuser) - Invite a User
* [ListUsers](docs/users/README.md#listusers) - List Users
* [RegisterSms](docs/users/README.md#registersms) - Register SMS Number
* [ResendToken](docs/users/README.md#resendtoken) - Resend a token
* [RoleUpdate](docs/users/README.md#roleupdate) - Update User Role
* [UnlockUserV2](docs/users/README.md#unlockuserv2) - Unlock a User
* [UnregisterMFA](docs/users/README.md#unregistermfa) - Unregister MFA for the user
* [UnregisterMFAForSelf](docs/users/README.md#unregistermfaforself) - Unregister MFA for Self
* [UpdatePasswordSelf](docs/users/README.md#updatepasswordself) - Update Password for self
* [UserDetailsUpdate](docs/users/README.md#userdetailsupdate) - Update User Details
* [UserDetailsUpdateForSelf](docs/users/README.md#userdetailsupdateforself) - Update User Details for self
* [ValidatePasswordSelf](docs/users/README.md#validatepasswordself) - Validate the proposed password

### [Webhooks](docs/webhooks/README.md)

* [CreateWebhookV1](docs/webhooks/README.md#createwebhookv1) - Create Webhook
* [GetWebhookV1](docs/webhooks/README.md#getwebhookv1) - Get details about the given webhook.
* [ListWebhooksV1](docs/webhooks/README.md#listwebhooksv1) - List the details about the webhooks for the given payor.
* [PingWebhookV1](docs/webhooks/README.md#pingwebhookv1)
* [UpdateWebhookV1](docs/webhooks/README.md#updatewebhookv1) - Update Webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
