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
* `bankTransferSweepGet` - Retrieve a sweep
* `bankTransferSweepList` - List sweeps
* `categoriesGet` - Get Categories
* `createPaymentToken` - Create payment token
* `creditAssetReportFreddieMacGet` - Retrieve an Asset Report with Freddie Mac format. Only Freddie Mac can use this endpoint.
* `creditAuditCopyTokenCreate` - Create Asset or Income Report Audit Copy Token
* `creditAuditCopyTokenUpdate` - Update an Audit Copy Token
* `creditBankEmploymentGet` - Retrieve information from the bank accounts used for employment verification
* `creditBankIncomeGet` - Retrieve information from the bank accounts used for income verification
* `creditBankIncomePdfGet` - Retrieve information from the bank accounts used for income verification in PDF format
* `creditBankIncomeRefresh` - Refresh a user's bank income information
* `creditEmploymentGet` - Retrieve a summary of an individual's employment information
* `creditFreddieMacReportsGet` - Retrieve an Asset Report with Freddie Mac format (aka VOA - Verification Of Assets), and a Verification Of Employment (VOE) report if this one is available. Only Freddie Mac can use this endpoint.
* `creditPayrollIncomeGet` - Retrieve a user's payroll information
* `creditPayrollIncomePrecheck` - Check income verification eligibility and optimize conversion
* `creditPayrollIncomeRefresh` - Refresh a digital payroll income verification
* `creditRelayCreate` - Create a relay token to share an Asset Report with a partner client (beta)
* `creditRelayGet` - Retrieve the reports associated with a relay token that was shared with you (beta)
* `creditRelayRefresh` - Refresh a report of a relay token (beta)
* `creditRelayRemove` - Remove relay token (beta)
* `creditReportAuditCopyRemove` - Remove an Audit Copy token
* `creditSessionsGet` - Retrieve Link sessions for your user
* `dashboardUserGet` - Retrieve a dashboard user
* `dashboardUserList` - List dashboard users
* `depositSwitchAltCreate` - Create a deposit switch without using Plaid Exchange
* `depositSwitchCreate` - Create a deposit switch
* `depositSwitchGet` - Retrieve a deposit switch
* `depositSwitchTokenCreate` - Create a deposit switch token
* `employersSearch` - Search employer database
* `employmentVerificationGet` - (Deprecated) Retrieve a summary of an individual's employment information
* `fdxNotifications` - Webhook receiver for fdx notifications
* `identityGet` - Retrieve identity data
* `identityMatch` - Retrieve identity match score
* `identityVerificationCreate` - Create a new identity verification
* `identityVerificationGet` - Retrieve Identity Verification
* `identityVerificationList` - List Identity Verifications
* `identityVerificationRetry` - Retry an Identity Verification
* `incomeVerificationCreate` - (Deprecated) Create an income verification instance
* `incomeVerificationDocumentsDownload` - (Deprecated) Download the original documents used for income verification
* `incomeVerificationPaystubsGet` - (Deprecated) Retrieve information from the paystubs used for income verification
* `incomeVerificationPrecheck` - (Deprecated) Check digital income verification eligibility and optimize conversion
* `incomeVerificationTaxformsGet` - (Deprecated) Retrieve information from the tax documents used for income verification
* `institutionsGet` - Get details of all supported institutions
* `institutionsGetById` - Get details of an institution
* `institutionsSearch` - Search institutions
* `investmentsHoldingsGet` - Get Investment holdings
* `investmentsTransactionsGet` - Get investment transactions
* `itemAccessTokenInvalidate` - Invalidate access_token
* `itemActivityList` - List a historical log of user consent events
* `itemApplicationList` - List a user’s connected applications
* `itemApplicationScopesUpdate` - Update the scopes of access for a particular application
* `itemCreatePublicToken` - Create public token
* `itemGet` - Retrieve an Item
* `itemImport` - Import Item
* `itemPublicTokenExchange` - Exchange public token for an access token
* `itemRemove` - Remove an Item
* `itemWebhookUpdate` - Update Webhook URL
* `liabilitiesGet` - Retrieve Liabilities data
* `linkDeliveryCreate` - Create Link Delivery session
* `linkDeliveryGet` - Get Link Delivery session
* `linkOauthCorrelationIdExchange` - Exchange the Link Correlation Id for a Link Token
* `linkTokenCreate` - Create Link Token
* `linkTokenGet` - Get Link Token
* `partnerCustomerCreate` - Creates a new end customer for a Plaid reseller.
* `partnerCustomerEnable` - Enables a Plaid reseller's end customer in the Production environment.
* `partnerCustomerGet` - Returns a Plaid reseller's end customer.
* `partnerCustomerOauthInstitutionsGet` - Returns OAuth-institution registration information for a given end customer.
* `partnerCustomerRemove` - Removes a Plaid reseller's end customer.
* `paymentInitiationConsentCreate` - Create payment consent
* `paymentInitiationConsentGet` - Get payment consent
* `paymentInitiationConsentPaymentExecute` - Execute a single payment using consent
* `paymentInitiationConsentRevoke` - Revoke payment consent
* `paymentInitiationPaymentCreate` - Create a payment
* `paymentInitiationPaymentGet` - Get payment details
* `paymentInitiationPaymentList` - List payments
* `paymentInitiationPaymentReverse` - Reverse an existing payment
* `paymentInitiationRecipientCreate` - Create payment recipient
* `paymentInitiationRecipientGet` - Get payment recipient
* `paymentInitiationRecipientList` - List payment recipients
* `paymentProfileCreate` - Create payment profile
* `paymentProfileGet` - Get payment profile
* `paymentProfileRemove` - Remove payment profile
* `processorApexProcessorTokenCreate` - Create Apex bank account token
* `processorAuthGet` - Retrieve Auth data
* `processorBalanceGet` - Retrieve Balance data
* `processorBankTransferCreate` - Create a bank transfer as a processor
* `processorIdentityGet` - Retrieve Identity data
* `processorSignalDecisionReport` - Report whether you initiated an ACH transaction
* `processorSignalEvaluate` - Evaluate a planned ACH transaction
* `processorSignalReturnReport` - Report a return for an ACH transaction
* `processorStripeBankAccountTokenCreate` - Create Stripe bank account token
* `processorTokenCreate` - Create processor token
* `sandboxBankTransferFireWebhook` - Manually fire a Bank Transfer webhook
* `sandboxBankTransferSimulate` - Simulate a bank transfer event in Sandbox
* `sandboxIncomeFireWebhook` - Manually fire an Income webhook
* `sandboxItemFireWebhook` - Fire a test webhook
* `sandboxItemResetLogin` - Force a Sandbox Item into an error state
* `sandboxItemSetVerificationStatus` - Set verification status for Sandbox account
* `sandboxOauthSelectAccounts` - Save the selected accounts when connecting to the Platypus Oauth institution
* `sandboxPaymentProfileResetLogin` - Reset the login of a Payment Profile
* `sandboxProcessorTokenCreate` - Create a test Item and processor token
* `sandboxPublicTokenCreate` - Create a test Item
* `sandboxTransferFireWebhook` - Manually fire a Transfer webhook
* `sandboxTransferRepaymentSimulate` - Trigger the creation of a repayment
* `sandboxTransferSimulate` - Simulate a transfer event in Sandbox
* `sandboxTransferSweepSimulate` - Simulate creating a sweep
* `sandboxTransferTestClockAdvance` - Advance a test clock
* `sandboxTransferTestClockCreate` - Create a test clock
* `sandboxTransferTestClockGet` - Get a test clock
* `sandboxTransferTestClockList` - List test clocks
* `signalDecisionReport` - Report whether you initiated an ACH transaction
* `signalEvaluate` - Evaluate a planned ACH transaction
* `signalPrepare` - Opt-in an Item to Signal
* `signalReturnReport` - Report a return for an ACH transaction
* `transactionsEnhance` - enhance locally-held transaction data
* `transactionsEnrich` - Enrich locally-held transaction data
* `transactionsGet` - Get transaction data
* `transactionsRecurringGet` - Fetch recurring transaction streams
* `transactionsRefresh` - Refresh transaction data
* `transactionsRulesCreate` - Create transaction category rule
* `transactionsRulesList` - Return a list of rules created for the Item associated with the access token.
* `transactionsRulesRemove` - Remove transaction rule
* `transactionsSync` - Get incremental transaction updates on an Item
* `transferAuthorizationCreate` - Create a transfer authorization
* `transferCancel` - Cancel a transfer
* `transferCapabilitiesGet` - Get RTP eligibility information of a transfer
* `transferCreate` - Create a transfer
* `transferEventList` - List transfer events
* `transferEventSync` - Sync transfer events
* `transferGet` - Retrieve a transfer
* `transferIntentCreate` - Create a transfer intent object to invoke the Transfer UI
* `transferIntentGet` - Retrieve more information about a transfer intent
* `transferList` - List transfers
* `transferMigrateAccount` - Migrate account into Transfers
* `transferOriginatorCreate` - Create a new originator
* `transferOriginatorGetJson` - Get status of an originator's onboarding
* `transferOriginatorGetRaw` - Get status of an originator's onboarding
* `transferOriginatorList` - Get status of all originators' onboarding
* `transferQuestionnaireCreate` - Generate a Plaid-hosted onboarding UI URL.
* `transferRecurringCancel` - Cancel a recurring transfer.
* `transferRecurringCreate` - Create a recurring transfer
* `transferRecurringGet` - Retrieve a recurring transfer
* `transferRecurringList` - List recurring transfers
* `transferRefundCancel` - Cancel a refund
* `transferRefundCreate` - Create a refund
* `transferRefundGet` - Retrieve a refund
* `transferRepaymentList` - Lists historical repayments
* `transferRepaymentReturnList` - List the returns included in a repayment
* `transferSweepGet` - Retrieve a sweep
* `transferSweepList` - List sweeps
* `userCreate` - Create user
* `walletCreate` - Create an e-wallet
* `walletGet` - Fetch an e-wallet
* `walletList` - Fetch a list of e-wallets
* `walletTransactionExecute` - Execute a transaction using an e-wallet
* `walletTransactionGet` - Fetch an e-wallet transaction
* `walletTransactionList` - List e-wallet transactions
* `watchlistScreeningEntityCreate` - Create a watchlist screening for an entity
* `watchlistScreeningEntityGet` - Get an entity screening
* `watchlistScreeningEntityHistoryList` - List history for entity watchlist screenings
* `watchlistScreeningEntityHitList` - List hits for entity watchlist screenings
* `watchlistScreeningEntityList` - List entity watchlist screenings
* `watchlistScreeningEntityProgramGet` - Get entity watchlist screening program
* `watchlistScreeningEntityProgramList` - List entity watchlist screening programs
* `watchlistScreeningEntityReviewCreate` - Create a review for an entity watchlist screening
* `watchlistScreeningEntityReviewList` - List reviews for entity watchlist screenings
* `watchlistScreeningEntityUpdate` - Update an entity screening
* `watchlistScreeningIndividualCreate` - Create a watchlist screening for a person
* `watchlistScreeningIndividualGet` - Retrieve an individual watchlist screening
* `watchlistScreeningIndividualHistoryList` - List history for individual watchlist screenings
* `watchlistScreeningIndividualHitList` - List hits for individual watchlist screening
* `watchlistScreeningIndividualList` - List Individual Watchlist Screenings
* `watchlistScreeningIndividualProgramGet` - Get individual watchlist screening program
* `watchlistScreeningIndividualProgramList` - List individual watchlist screening programs
* `watchlistScreeningIndividualReviewCreate` - Create a review for an individual watchlist screening
* `watchlistScreeningIndividualReviewList` - List reviews for individual watchlist screenings
* `watchlistScreeningIndividualUpdate` - Update individual watchlist screening
* `webhookVerificationKeyGet` - Get webhook verification key
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
