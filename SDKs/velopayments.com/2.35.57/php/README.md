# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->countries->listPaymentChannelRulesV1();

    if ($response->paymentChannelRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [countries](docs/countries/README.md)

* [~~listPaymentChannelRulesV1~~](docs/countries/README.md#listpaymentchannelrulesv1) - List Payment Channel Country Rules :warning: **Deprecated**
* [~~listSupportedCountriesV1~~](docs/countries/README.md#listsupportedcountriesv1) - List Supported Countries :warning: **Deprecated**
* [~~listSupportedCountriesV2~~](docs/countries/README.md#listsupportedcountriesv2) - List Supported Countries :warning: **Deprecated**

### [currencies](docs/currencies/README.md)

* [listSupportedCurrenciesV2](docs/currencies/README.md#listsupportedcurrenciesv2) - List Supported Currencies

### [funding](docs/funding/README.md)

* [~~createFundingRequestV2~~](docs/funding/README.md#createfundingrequestv2) - Create Funding Request :warning: **Deprecated**
* [createFundingRequestV3](docs/funding/README.md#createfundingrequestv3) - Create Funding Request
* [getFundingAccountV2](docs/funding/README.md#getfundingaccountv2) - Get Funding Account
* [getFundingAccountsV2](docs/funding/README.md#getfundingaccountsv2) - Get Funding Accounts
* [getFundingByIdV1](docs/funding/README.md#getfundingbyidv1) - Get Funding
* [listFundingAuditDeltas](docs/funding/README.md#listfundingauditdeltas) - Get Funding Audit Delta

### [fundingManagerPrivate](docs/fundingmanagerprivate/README.md)

* [createFundingAccountV2](docs/fundingmanagerprivate/README.md#createfundingaccountv2) - Create Funding Account
* [deleteSourceAccountV3](docs/fundingmanagerprivate/README.md#deletesourceaccountv3) - Delete a source account by ID

### [login](docs/login/README.md)

* [logout](docs/login/README.md#logout) - Logout
* [resetPassword](docs/login/README.md#resetpassword) - Reset password
* [validateAccessToken](docs/login/README.md#validateaccesstoken) - validate
* [veloAuth](docs/login/README.md#veloauth) - Authentication endpoint

### [payeeInvitation](docs/payeeinvitation/README.md)

* [~~createPayeeV3Json~~](docs/payeeinvitation/README.md#createpayeev3json) - Initiate Payee Creation :warning: **Deprecated**
* [~~createPayeeV3Multipart~~](docs/payeeinvitation/README.md#createpayeev3multipart) - Initiate Payee Creation :warning: **Deprecated**
* [~~getPayeesInvitationStatusV3~~](docs/payeeinvitation/README.md#getpayeesinvitationstatusv3) - Get Payee Invitation Status :warning: **Deprecated**
* [getPayeesInvitationStatusV4](docs/payeeinvitation/README.md#getpayeesinvitationstatusv4) - Get Payee Invitation Status
* [~~queryBatchStatusV3~~](docs/payeeinvitation/README.md#querybatchstatusv3) - Query Batch Status :warning: **Deprecated**
* [queryBatchStatusV4](docs/payeeinvitation/README.md#querybatchstatusv4) - Query Batch Status
* [~~resendPayeeInviteV3~~](docs/payeeinvitation/README.md#resendpayeeinvitev3) - Resend Payee Invite :warning: **Deprecated**
* [resendPayeeInviteV4](docs/payeeinvitation/README.md#resendpayeeinvitev4) - Resend Payee Invite
* [v4CreatePayeeJson](docs/payeeinvitation/README.md#v4createpayeejson) - Initiate Payee Creation
* [v4CreatePayeeMultipart](docs/payeeinvitation/README.md#v4createpayeemultipart) - Initiate Payee Creation

### [payees](docs/payees/README.md)

* [~~deletePayeeByIdV3~~](docs/payees/README.md#deletepayeebyidv3) - Delete Payee by Id :warning: **Deprecated**
* [deletePayeeByIdV4](docs/payees/README.md#deletepayeebyidv4) - Delete Payee by Id
* [~~getPayeeByIdV3~~](docs/payees/README.md#getpayeebyidv3) - Get Payee by Id :warning: **Deprecated**
* [getPayeeByIdV4](docs/payees/README.md#getpayeebyidv4) - Get Payee by Id
* [~~listPayeeChangesV3~~](docs/payees/README.md#listpayeechangesv3) - List Payee Changes :warning: **Deprecated**
* [listPayeeChangesV4](docs/payees/README.md#listpayeechangesv4) - List Payee Changes
* [~~listPayeesV3~~](docs/payees/README.md#listpayeesv3) - List Payees :warning: **Deprecated**
* [listPayeesV4](docs/payees/README.md#listpayeesv4) - List Payees
* [~~payeeDetailsUpdateV3~~](docs/payees/README.md#payeedetailsupdatev3) - Update Payee Details :warning: **Deprecated**
* [payeeDetailsUpdateV4](docs/payees/README.md#payeedetailsupdatev4) - Update Payee Details
* [~~postV3PayeesPayeeIdRemoteIdUpdate~~](docs/payees/README.md#postv3payeespayeeidremoteidupdate) - Update Payee Remote Id :warning: **Deprecated**
* [postV4PayeesPayeeIdRemoteIdUpdate](docs/payees/README.md#postv4payeespayeeidremoteidupdate) - Update Payee Remote Id

### [paymentAuditService](docs/paymentauditservice/README.md)

* [exportTransactionsCsvv4](docs/paymentauditservice/README.md#exporttransactionscsvv4) - Export Transactions
* [getFundingsV4](docs/paymentauditservice/README.md#getfundingsv4) - Get Fundings for Payor
* [getPaymentDetailsV4](docs/paymentauditservice/README.md#getpaymentdetailsv4) - Get Payment
* [getPaymentsForPayoutV4](docs/paymentauditservice/README.md#getpaymentsforpayoutv4) - Get Payments for Payout
* [getPayoutStatsV4](docs/paymentauditservice/README.md#getpayoutstatsv4) - Get Payout Statistics
* [getPayoutsForPayorV4](docs/paymentauditservice/README.md#getpayoutsforpayorv4) - Get Payouts for Payor
* [listPaymentChangesV4](docs/paymentauditservice/README.md#listpaymentchangesv4) - List Payment Changes
* [listPaymentsAuditV4](docs/paymentauditservice/README.md#listpaymentsauditv4) - Get List of Payments

### [paymentAuditServiceDeprecated](docs/paymentauditservicedeprecated/README.md)

* [~~exportTransactionsCsvv3~~](docs/paymentauditservicedeprecated/README.md#exporttransactionscsvv3) - V3 Export Transactions :warning: **Deprecated**
* [~~getFundingsV1~~](docs/paymentauditservicedeprecated/README.md#getfundingsv1) - V1 Get Fundings for Payor :warning: **Deprecated**
* [~~getPaymentDetailsV3~~](docs/paymentauditservicedeprecated/README.md#getpaymentdetailsv3) - V3 Get Payment :warning: **Deprecated**
* [~~getPaymentsForPayoutPAV3~~](docs/paymentauditservicedeprecated/README.md#getpaymentsforpayoutpav3) - V3 Get Payments for Payout :warning: **Deprecated**
* [~~getPayoutStatsV1~~](docs/paymentauditservicedeprecated/README.md#getpayoutstatsv1) - V1 Get Payout Statistics :warning: **Deprecated**
* [~~getPayoutsForPayorV3~~](docs/paymentauditservicedeprecated/README.md#getpayoutsforpayorv3) - V3 Get Payouts for Payor :warning: **Deprecated**
* [~~listPaymentChanges~~](docs/paymentauditservicedeprecated/README.md#listpaymentchanges) - V1 List Payment Changes :warning: **Deprecated**
* [~~listPaymentsAuditV3~~](docs/paymentauditservicedeprecated/README.md#listpaymentsauditv3) - V3 Get List of Payments :warning: **Deprecated**

### [payorHierarchy](docs/payorhierarchy/README.md)

* [payorLinksV1](docs/payorhierarchy/README.md#payorlinksv1) - List Payor Links

### [payors](docs/payors/README.md)

* [~~getPayorByIdV1~~](docs/payors/README.md#getpayorbyidv1) - Get Payor :warning: **Deprecated**
* [getPayorByIdV2](docs/payors/README.md#getpayorbyidv2) - Get Payor
* [payorAddPayorLogoV1](docs/payors/README.md#payoraddpayorlogov1) - Add Logo
* [payorCreateApiKeyV1](docs/payors/README.md#payorcreateapikeyv1) - Create API Key
* [payorCreateApplicationV1](docs/payors/README.md#payorcreateapplicationv1) - Create Application
* [payorEmailOptOut](docs/payors/README.md#payoremailoptout) - Reminder Email Opt-Out
* [payorGetBranding](docs/payors/README.md#payorgetbranding) - Get Branding

### [payorsPrivate](docs/payorsprivate/README.md)

* [createPayorLinks](docs/payorsprivate/README.md#createpayorlinks) - Create a Payor Link

### [payouts](docs/payouts/README.md)

* [createQuoteForPayoutV3](docs/payouts/README.md#createquoteforpayoutv3) - Create a quote for the payout
* [deschedulePayout](docs/payouts/README.md#deschedulepayout) - Deschedule a payout
* [getPaymentsForPayoutV3](docs/payouts/README.md#getpaymentsforpayoutv3) - Retrieve payments for a payout
* [getPayoutSummaryV3](docs/payouts/README.md#getpayoutsummaryv3) - Get Payout Summary
* [instructPayoutV3](docs/payouts/README.md#instructpayoutv3) - Instruct Payout
* [scheduleForPayout](docs/payouts/README.md#scheduleforpayout) - Schedule a payout
* [submitPayoutV3Json](docs/payouts/README.md#submitpayoutv3json) - Submit Payout
* [submitPayoutV3Multipart](docs/payouts/README.md#submitpayoutv3multipart) - Submit Payout
* [withdrawPayment](docs/payouts/README.md#withdrawpayment) - Withdraw a Payment
* [withdrawPayoutV3](docs/payouts/README.md#withdrawpayoutv3) - Withdraw Payout

### [sourceAccounts](docs/sourceaccounts/README.md)

* [~~getSourceAccountV2~~](docs/sourceaccounts/README.md#getsourceaccountv2) - Get Source Account :warning: **Deprecated**
* [getSourceAccountV3](docs/sourceaccounts/README.md#getsourceaccountv3) - Get details about given source account.
* [~~getSourceAccountsV2~~](docs/sourceaccounts/README.md#getsourceaccountsv2) - Get list of source accounts :warning: **Deprecated**
* [getSourceAccountsV3](docs/sourceaccounts/README.md#getsourceaccountsv3) - Get list of source accounts
* [~~setNotificationsRequest~~](docs/sourceaccounts/README.md#setnotificationsrequest) - Set notifications :warning: **Deprecated**
* [setNotificationsRequestV3](docs/sourceaccounts/README.md#setnotificationsrequestv3) - Set notifications
* [~~transferFundsV2~~](docs/sourceaccounts/README.md#transferfundsv2) - Transfer Funds between source accounts :warning: **Deprecated**
* [transferFundsV3](docs/sourceaccounts/README.md#transferfundsv3) - Transfer Funds between source accounts

### [tokens](docs/tokens/README.md)

* [resendToken](docs/tokens/README.md#resendtoken) - Resend a token

### [users](docs/users/README.md)

* [deleteUserByIdV2](docs/users/README.md#deleteuserbyidv2) - Delete a User
* [disableUserV2](docs/users/README.md#disableuserv2) - Disable a User
* [enableUserV2](docs/users/README.md#enableuserv2) - Enable a User
* [getSelf](docs/users/README.md#getself) - Get Self
* [getUserByIdV2](docs/users/README.md#getuserbyidv2) - Get User
* [inviteUser](docs/users/README.md#inviteuser) - Invite a User
* [listUsers](docs/users/README.md#listusers) - List Users
* [registerSms](docs/users/README.md#registersms) - Register SMS Number
* [resendToken](docs/users/README.md#resendtoken) - Resend a token
* [roleUpdate](docs/users/README.md#roleupdate) - Update User Role
* [unlockUserV2](docs/users/README.md#unlockuserv2) - Unlock a User
* [unregisterMFA](docs/users/README.md#unregistermfa) - Unregister MFA for the user
* [unregisterMFAForSelf](docs/users/README.md#unregistermfaforself) - Unregister MFA for Self
* [updatePasswordSelf](docs/users/README.md#updatepasswordself) - Update Password for self
* [userDetailsUpdate](docs/users/README.md#userdetailsupdate) - Update User Details
* [userDetailsUpdateForSelf](docs/users/README.md#userdetailsupdateforself) - Update User Details for self
* [validatePasswordSelf](docs/users/README.md#validatepasswordself) - Validate the proposed password

### [webhooks](docs/webhooks/README.md)

* [createWebhookV1](docs/webhooks/README.md#createwebhookv1) - Create Webhook
* [getWebhookV1](docs/webhooks/README.md#getwebhookv1) - Get details about the given webhook.
* [listWebhooksV1](docs/webhooks/README.md#listwebhooksv1) - List the details about the webhooks for the given payor.
* [pingWebhookV1](docs/webhooks/README.md#pingwebhookv1)
* [updateWebhookV1](docs/webhooks/README.md#updatewebhookv1) - Update Webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
