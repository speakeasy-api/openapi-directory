# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ListPaymentChannelRulesV1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }})
                .build();

            ListPaymentChannelRulesV1Response res = sdk.countries.listPaymentChannelRulesV1();

            if (res.paymentChannelRulesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### countries

* `listPaymentChannelRulesV1` - List Payment Channel Country Rules
* `listSupportedCountriesV1` - List Supported Countries
* `listSupportedCountriesV2` - List Supported Countries

### currencies

* `listSupportedCurrenciesV2` - List Supported Currencies

### funding

* `createFundingRequestV2` - Create Funding Request
* `createFundingRequestV3` - Create Funding Request
* `getFundingAccountV2` - Get Funding Account
* `getFundingAccountsV2` - Get Funding Accounts
* `getFundingByIdV1` - Get Funding
* `listFundingAuditDeltas` - Get Funding Audit Delta

### fundingManagerPrivate

* `createFundingAccountV2` - Create Funding Account
* `deleteSourceAccountV3` - Delete a source account by ID

### login

* `logout` - Logout
* `resetPassword` - Reset password
* `validateAccessToken` - validate
* `veloAuth` - Authentication endpoint

### payeeInvitation

* `createPayeeV3Json` - Initiate Payee Creation
* `createPayeeV3Multipart` - Initiate Payee Creation
* `getPayeesInvitationStatusV3` - Get Payee Invitation Status
* `getPayeesInvitationStatusV4` - Get Payee Invitation Status
* `queryBatchStatusV3` - Query Batch Status
* `queryBatchStatusV4` - Query Batch Status
* `resendPayeeInviteV3` - Resend Payee Invite
* `resendPayeeInviteV4` - Resend Payee Invite
* `v4CreatePayeeJson` - Initiate Payee Creation
* `v4CreatePayeeMultipart` - Initiate Payee Creation

### payees

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

### paymentAuditService

* `exportTransactionsCsvv4` - Export Transactions
* `getFundingsV4` - Get Fundings for Payor
* `getPaymentDetailsV4` - Get Payment
* `getPaymentsForPayoutV4` - Get Payments for Payout
* `getPayoutStatsV4` - Get Payout Statistics
* `getPayoutsForPayorV4` - Get Payouts for Payor
* `listPaymentChangesV4` - List Payment Changes
* `listPaymentsAuditV4` - Get List of Payments

### paymentAuditServiceDeprecated

* `exportTransactionsCsvv3` - V3 Export Transactions
* `getFundingsV1` - V1 Get Fundings for Payor
* `getPaymentDetailsV3` - V3 Get Payment
* `getPaymentsForPayoutPAV3` - V3 Get Payments for Payout
* `getPayoutStatsV1` - V1 Get Payout Statistics
* `getPayoutsForPayorV3` - V3 Get Payouts for Payor
* `listPaymentChanges` - V1 List Payment Changes
* `listPaymentsAuditV3` - V3 Get List of Payments

### payorHierarchy

* `payorLinksV1` - List Payor Links

### payors

* `getPayorByIdV1` - Get Payor
* `getPayorByIdV2` - Get Payor
* `payorAddPayorLogoV1` - Add Logo
* `payorCreateApiKeyV1` - Create API Key
* `payorCreateApplicationV1` - Create Application
* `payorEmailOptOut` - Reminder Email Opt-Out
* `payorGetBranding` - Get Branding

### payorsPrivate

* `createPayorLinks` - Create a Payor Link

### payouts

* `createQuoteForPayoutV3` - Create a quote for the payout
* `deschedulePayout` - Deschedule a payout
* `getPaymentsForPayoutV3` - Retrieve payments for a payout
* `getPayoutSummaryV3` - Get Payout Summary
* `instructPayoutV3` - Instruct Payout
* `scheduleForPayout` - Schedule a payout
* `submitPayoutV3Json` - Submit Payout
* `submitPayoutV3Multipart` - Submit Payout
* `withdrawPayment` - Withdraw a Payment
* `withdrawPayoutV3` - Withdraw Payout

### sourceAccounts

* `getSourceAccountV2` - Get Source Account
* `getSourceAccountV3` - Get details about given source account.
* `getSourceAccountsV2` - Get list of source accounts
* `getSourceAccountsV3` - Get list of source accounts
* `setNotificationsRequest` - Set notifications
* `setNotificationsRequestV3` - Set notifications
* `transferFundsV2` - Transfer Funds between source accounts
* `transferFundsV3` - Transfer Funds between source accounts

### tokens

* `resendToken` - Resend a token

### users

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
* `unregisterMFA` - Unregister MFA for the user
* `unregisterMFAForSelf` - Unregister MFA for Self
* `updatePasswordSelf` - Update Password for self
* `userDetailsUpdate` - Update User Details
* `userDetailsUpdateForSelf` - Update User Details for self
* `validatePasswordSelf` - Validate the proposed password

### webhooks

* `createWebhookV1` - Create Webhook
* `getWebhookV1` - Get details about the given webhook.
* `listWebhooksV1` - List the details about the webhooks for the given payor.
* `pingWebhookV1`
* `updateWebhookV1` - Update Webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
