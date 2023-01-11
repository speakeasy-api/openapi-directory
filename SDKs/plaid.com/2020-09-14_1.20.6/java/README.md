# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    plaidVersion = new SchemePlaidVersion() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    secret = new SchemeSecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AccountsBalanceGetRequest req = new AccountsBalanceGetRequest() {{
                request = new AccountsBalanceGetRequest() {{
                    accessToken = "provident";
                    clientId = "eum";
                    options = new AccountsBalanceGetRequestOptions() {{
                        accountIds = new String[]() {{
                            add("dolore"),
                        }};
                        minLastUpdatedDatetime = "1988-11-19T07:30:18Z";
                    }};
                    secret = "ea";
                }};
            }};

            AccountsBalanceGetResponse res = sdk.plaid.accountsBalanceGet(req);

            if (res.accountsGetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### plaid

* `accountsBalanceGet` - Retrieve real-time balance data
* `accountsGet` - Retrieve accounts
* `applicationGet` - Retrieve information about a Plaid application
* `assetReportAuditCopyCreate` - Create Asset Report Audit Copy
* `assetReportAuditCopyGet` - Retrieve an Asset Report Audit Copy
* `assetReportAuditCopyRemove` - Remove Asset Report Audit Copy
* `assetReportCreate` - Create an Asset Report
* `assetReportFilter` - Filter Asset Report
* `assetReportGet` - Retrieve an Asset Report
* `assetReportPdfGet` - Retrieve a PDF Asset Report
* `assetReportRefresh` - Refresh an Asset Report
* `assetReportRemove` - Delete an Asset Report
* `authGet` - Retrieve auth data
* `bankTransferBalanceGet` - Get balance of your Bank Transfer account
* `bankTransferCancel` - Cancel a bank transfer
* `bankTransferCreate` - Create a bank transfer
* `bankTransferEventList` - List bank transfer events
* `bankTransferEventSync` - Sync bank transfer events
* `bankTransferGet` - Retrieve a bank transfer
* `bankTransferList` - List bank transfers
* `bankTransferMigrateAccount` - Migrate account into Bank Transfers
* `categoriesGet` - Get Categories
* `createPaymentToken` - Create payment token
* `depositSwitchAltCreate` - Create a deposit switch without using Plaid Exchange
* `depositSwitchCreate` - Create a deposit switch
* `depositSwitchGet` - Retrieve a deposit switch
* `depositSwitchTokenCreate` - Create a deposit switch token
* `employersSearch` - Search employer database
* `identityGet` - Retrieve identity data
* `incomeVerificationCreate` - Create an income verification instance
* `incomeVerificationDocumentsDownload` - Download the original documents used for income verification
* `incomeVerificationPaystubsGet` - Retrieve information from the paystubs used for income verification
* `incomeVerificationRefresh` - Refresh an income verification
* `incomeVerificationSummaryGet` - Retrieve a summary of information derived from income verification
* `institutionsGet` - Get details of all supported institutions
* `institutionsGetById` - Get details of an institution
* `institutionsSearch` - Search institutions
* `investmentsHoldingsGet` - Get Investment holdings
* `investmentsTransactionsGet` - Get investment transactions
* `itemAccessTokenInvalidate` - Invalidate access_token
* `itemApplicationList` - List a user’s connected applications
* `itemApplicationScopesUpdate` - Update the scopes of access for a particular application
* `itemCreatePublicToken` - Create public token
* `itemGet` - Retrieve an Item
* `itemImport` - Import Item
* `itemPublicTokenExchange` - Exchange public token for an access token
* `itemRemove` - Remove an Item
* `itemWebhookUpdate` - Update Webhook URL
* `liabilitiesGet` - Retrieve Liabilities data
* `linkTokenCreate` - Create Link Token
* `linkTokenGet` - Get Link Token
* `paymentInitiationPaymentCreate` - Create a payment
* `paymentInitiationPaymentGet` - Get payment details
* `paymentInitiationPaymentList` - List payments
* `paymentInitiationRecipientCreate` - Create payment recipient
* `paymentInitiationRecipientGet` - Get payment recipient
* `paymentInitiationRecipientList` - List payment recipients
* `processorApexProcessorTokenCreate` - Create Apex bank account token
* `processorAuthGet` - Retrieve Auth data
* `processorBalanceGet` - Retrieve Balance data
* `processorBankTransferCreate` - Create a bank transfer as a processor
* `processorIdentityGet` - Retrieve Identity data
* `processorStripeBankAccountTokenCreate` - Create Stripe bank account token
* `processorTokenCreate` - Create processor token
* `sandboxBankTransferFireWebhook` - Manually fire a Bank Transfer webhook
* `sandboxBankTransferSimulate` - Simulate a bank transfer event in Sandbox
* `sandboxIncomeFireWebhook` - Manually fire an Income webhook
* `sandboxItemFireWebhook` - Fire a test webhook
* `sandboxItemResetLogin` - Force a Sandbox Item into an error state
* `sandboxItemSetVerificationStatus` - Set verification status for Sandbox account
* `sandboxOauthSelectAccounts` - Save the selected accounts when connecting to the Platypus Oauth institution
* `sandboxProcessorTokenCreate` - Create a test Item and processor token
* `sandboxPublicTokenCreate` - Create a test Item
* `signalDecisionReport` - Report whether you initiated an ACH transaction
* `signalEvaluate` - Evaluate a planned ACH transaction
* `signalReturnReport` - Report a return for an ACH transaction
* `transactionsGet` - Get transaction data
* `transactionsRefresh` - Refresh transaction data
* `webhookVerificationKeyGet` - Get webhook verification key

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
