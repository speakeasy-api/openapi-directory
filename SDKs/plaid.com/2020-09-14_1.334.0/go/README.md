# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/plaid.com/2020-09-14_1.334.0/go
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
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
            PlaidVersion: shared.SchemePlaidVersion{
                APIKey: "YOUR_API_KEY_HERE",
            },
            Secret: shared.SchemeSecret{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AccountsBalanceGetRequest{
        Request: shared.AccountsBalanceGetRequest{
            AccessToken: "corrupti",
            ClientID: "provident",
            Options: &shared.AccountsBalanceGetRequestOptions{
                AccountIds: []string{
                    "quibusdam",
                    "unde",
                    "nulla",
                },
                MinLastUpdatedDatetime: "2022-09-12T05:31:49.907Z",
            },
            Secret: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.Plaid.AccountsBalanceGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsGetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Plaid

* `AccountsBalanceGet` - Retrieve real-time balance data
* `AccountsGet` - Retrieve accounts
* `ApplicationGet` - Retrieve information about a Plaid application
* `AssetReportAuditCopyCreate` - Create Asset Report Audit Copy
* `AssetReportAuditCopyGet` - Retrieve an Asset Report Audit Copy
* `AssetReportAuditCopyRemove` - Remove Asset Report Audit Copy
* `AssetReportCreate` - Create an Asset Report
* `AssetReportFilter` - Filter Asset Report
* `AssetReportGet` - Retrieve an Asset Report
* `AssetReportPdfGet` - Retrieve a PDF Asset Report
* `AssetReportRefresh` - Refresh an Asset Report
* `AssetReportRemove` - Delete an Asset Report
* `AuthGet` - Retrieve auth data
* `BankTransferBalanceGet` - Get balance of your Bank Transfer account
* `BankTransferCancel` - Cancel a bank transfer
* `BankTransferCreate` - Create a bank transfer
* `BankTransferEventList` - List bank transfer events
* `BankTransferEventSync` - Sync bank transfer events
* `BankTransferGet` - Retrieve a bank transfer
* `BankTransferList` - List bank transfers
* `BankTransferMigrateAccount` - Migrate account into Bank Transfers
* `BankTransferSweepGet` - Retrieve a sweep
* `BankTransferSweepList` - List sweeps
* `CategoriesGet` - Get Categories
* `CreatePaymentToken` - Create payment token
* `CreditAssetReportFreddieMacGet` - Retrieve an Asset Report with Freddie Mac format. Only Freddie Mac can use this endpoint.
* `CreditAuditCopyTokenCreate` - Create Asset or Income Report Audit Copy Token
* `CreditAuditCopyTokenUpdate` - Update an Audit Copy Token
* `CreditBankEmploymentGet` - Retrieve information from the bank accounts used for employment verification
* `CreditBankIncomeGet` - Retrieve information from the bank accounts used for income verification
* `CreditBankIncomePdfGet` - Retrieve information from the bank accounts used for income verification in PDF format
* `CreditBankIncomeRefresh` - Refresh a user's bank income information
* `CreditEmploymentGet` - Retrieve a summary of an individual's employment information
* `CreditFreddieMacReportsGet` - Retrieve an Asset Report with Freddie Mac format (aka VOA - Verification Of Assets), and a Verification Of Employment (VOE) report if this one is available. Only Freddie Mac can use this endpoint.
* `CreditPayrollIncomeGet` - Retrieve a user's payroll information
* `CreditPayrollIncomePrecheck` - Check income verification eligibility and optimize conversion
* `CreditPayrollIncomeRefresh` - Refresh a digital payroll income verification
* `CreditRelayCreate` - Create a relay token to share an Asset Report with a partner client (beta)
* `CreditRelayGet` - Retrieve the reports associated with a relay token that was shared with you (beta)
* `CreditRelayRefresh` - Refresh a report of a relay token (beta)
* `CreditRelayRemove` - Remove relay token (beta)
* `CreditReportAuditCopyRemove` - Remove an Audit Copy token
* `CreditSessionsGet` - Retrieve Link sessions for your user
* `DashboardUserGet` - Retrieve a dashboard user
* `DashboardUserList` - List dashboard users
* `DepositSwitchAltCreate` - Create a deposit switch without using Plaid Exchange
* `DepositSwitchCreate` - Create a deposit switch
* `DepositSwitchGet` - Retrieve a deposit switch
* `DepositSwitchTokenCreate` - Create a deposit switch token
* `EmployersSearch` - Search employer database
* `EmploymentVerificationGet` - (Deprecated) Retrieve a summary of an individual's employment information
* `FdxNotifications` - Webhook receiver for fdx notifications
* `IdentityGet` - Retrieve identity data
* `IdentityMatch` - Retrieve identity match score
* `IdentityVerificationCreate` - Create a new identity verification
* `IdentityVerificationGet` - Retrieve Identity Verification
* `IdentityVerificationList` - List Identity Verifications
* `IdentityVerificationRetry` - Retry an Identity Verification
* `IncomeVerificationCreate` - (Deprecated) Create an income verification instance
* `IncomeVerificationDocumentsDownload` - (Deprecated) Download the original documents used for income verification
* `IncomeVerificationPaystubsGet` - (Deprecated) Retrieve information from the paystubs used for income verification
* `IncomeVerificationPrecheck` - (Deprecated) Check digital income verification eligibility and optimize conversion
* `IncomeVerificationTaxformsGet` - (Deprecated) Retrieve information from the tax documents used for income verification
* `InstitutionsGet` - Get details of all supported institutions
* `InstitutionsGetByID` - Get details of an institution
* `InstitutionsSearch` - Search institutions
* `InvestmentsHoldingsGet` - Get Investment holdings
* `InvestmentsTransactionsGet` - Get investment transactions
* `ItemAccessTokenInvalidate` - Invalidate access_token
* `ItemActivityList` - List a historical log of user consent events
* `ItemApplicationList` - List a user’s connected applications
* `ItemApplicationScopesUpdate` - Update the scopes of access for a particular application
* `ItemCreatePublicToken` - Create public token
* `ItemGet` - Retrieve an Item
* `ItemImport` - Import Item
* `ItemPublicTokenExchange` - Exchange public token for an access token
* `ItemRemove` - Remove an Item
* `ItemWebhookUpdate` - Update Webhook URL
* `LiabilitiesGet` - Retrieve Liabilities data
* `LinkDeliveryCreate` - Create Link Delivery session
* `LinkDeliveryGet` - Get Link Delivery session
* `LinkOauthCorrelationIDExchange` - Exchange the Link Correlation Id for a Link Token
* `LinkTokenCreate` - Create Link Token
* `LinkTokenGet` - Get Link Token
* `PartnerCustomerCreate` - Creates a new end customer for a Plaid reseller.
* `PartnerCustomerEnable` - Enables a Plaid reseller's end customer in the Production environment.
* `PartnerCustomerGet` - Returns a Plaid reseller's end customer.
* `PartnerCustomerOauthInstitutionsGet` - Returns OAuth-institution registration information for a given end customer.
* `PartnerCustomerRemove` - Removes a Plaid reseller's end customer.
* `PaymentInitiationConsentCreate` - Create payment consent
* `PaymentInitiationConsentGet` - Get payment consent
* `PaymentInitiationConsentPaymentExecute` - Execute a single payment using consent
* `PaymentInitiationConsentRevoke` - Revoke payment consent
* `PaymentInitiationPaymentCreate` - Create a payment
* `PaymentInitiationPaymentGet` - Get payment details
* `PaymentInitiationPaymentList` - List payments
* `PaymentInitiationPaymentReverse` - Reverse an existing payment
* `PaymentInitiationRecipientCreate` - Create payment recipient
* `PaymentInitiationRecipientGet` - Get payment recipient
* `PaymentInitiationRecipientList` - List payment recipients
* `PaymentProfileCreate` - Create payment profile
* `PaymentProfileGet` - Get payment profile
* `PaymentProfileRemove` - Remove payment profile
* `ProcessorApexProcessorTokenCreate` - Create Apex bank account token
* `ProcessorAuthGet` - Retrieve Auth data
* `ProcessorBalanceGet` - Retrieve Balance data
* `ProcessorBankTransferCreate` - Create a bank transfer as a processor
* `ProcessorIdentityGet` - Retrieve Identity data
* `ProcessorSignalDecisionReport` - Report whether you initiated an ACH transaction
* `ProcessorSignalEvaluate` - Evaluate a planned ACH transaction
* `ProcessorSignalReturnReport` - Report a return for an ACH transaction
* `ProcessorStripeBankAccountTokenCreate` - Create Stripe bank account token
* `ProcessorTokenCreate` - Create processor token
* `SandboxBankTransferFireWebhook` - Manually fire a Bank Transfer webhook
* `SandboxBankTransferSimulate` - Simulate a bank transfer event in Sandbox
* `SandboxIncomeFireWebhook` - Manually fire an Income webhook
* `SandboxItemFireWebhook` - Fire a test webhook
* `SandboxItemResetLogin` - Force a Sandbox Item into an error state
* `SandboxItemSetVerificationStatus` - Set verification status for Sandbox account
* `SandboxOauthSelectAccounts` - Save the selected accounts when connecting to the Platypus Oauth institution
* `SandboxPaymentProfileResetLogin` - Reset the login of a Payment Profile
* `SandboxProcessorTokenCreate` - Create a test Item and processor token
* `SandboxPublicTokenCreate` - Create a test Item
* `SandboxTransferFireWebhook` - Manually fire a Transfer webhook
* `SandboxTransferRepaymentSimulate` - Trigger the creation of a repayment
* `SandboxTransferSimulate` - Simulate a transfer event in Sandbox
* `SandboxTransferSweepSimulate` - Simulate creating a sweep
* `SandboxTransferTestClockAdvance` - Advance a test clock
* `SandboxTransferTestClockCreate` - Create a test clock
* `SandboxTransferTestClockGet` - Get a test clock
* `SandboxTransferTestClockList` - List test clocks
* `SignalDecisionReport` - Report whether you initiated an ACH transaction
* `SignalEvaluate` - Evaluate a planned ACH transaction
* `SignalPrepare` - Opt-in an Item to Signal
* `SignalReturnReport` - Report a return for an ACH transaction
* `TransactionsEnhance` - enhance locally-held transaction data
* `TransactionsEnrich` - Enrich locally-held transaction data
* `TransactionsGet` - Get transaction data
* `TransactionsRecurringGet` - Fetch recurring transaction streams
* `TransactionsRefresh` - Refresh transaction data
* `TransactionsRulesCreate` - Create transaction category rule
* `TransactionsRulesList` - Return a list of rules created for the Item associated with the access token.
* `TransactionsRulesRemove` - Remove transaction rule
* `TransactionsSync` - Get incremental transaction updates on an Item
* `TransferAuthorizationCreate` - Create a transfer authorization
* `TransferCancel` - Cancel a transfer
* `TransferCapabilitiesGet` - Get RTP eligibility information of a transfer
* `TransferCreate` - Create a transfer
* `TransferEventList` - List transfer events
* `TransferEventSync` - Sync transfer events
* `TransferGet` - Retrieve a transfer
* `TransferIntentCreate` - Create a transfer intent object to invoke the Transfer UI
* `TransferIntentGet` - Retrieve more information about a transfer intent
* `TransferList` - List transfers
* `TransferMigrateAccount` - Migrate account into Transfers
* `TransferOriginatorCreate` - Create a new originator
* `TransferOriginatorGetJSON` - Get status of an originator's onboarding
* `TransferOriginatorGetRaw` - Get status of an originator's onboarding
* `TransferOriginatorList` - Get status of all originators' onboarding
* `TransferQuestionnaireCreate` - Generate a Plaid-hosted onboarding UI URL.
* `TransferRecurringCancel` - Cancel a recurring transfer.
* `TransferRecurringCreate` - Create a recurring transfer
* `TransferRecurringGet` - Retrieve a recurring transfer
* `TransferRecurringList` - List recurring transfers
* `TransferRefundCancel` - Cancel a refund
* `TransferRefundCreate` - Create a refund
* `TransferRefundGet` - Retrieve a refund
* `TransferRepaymentList` - Lists historical repayments
* `TransferRepaymentReturnList` - List the returns included in a repayment
* `TransferSweepGet` - Retrieve a sweep
* `TransferSweepList` - List sweeps
* `UserCreate` - Create user
* `WalletCreate` - Create an e-wallet
* `WalletGet` - Fetch an e-wallet
* `WalletList` - Fetch a list of e-wallets
* `WalletTransactionExecute` - Execute a transaction using an e-wallet
* `WalletTransactionGet` - Fetch an e-wallet transaction
* `WalletTransactionList` - List e-wallet transactions
* `WatchlistScreeningEntityCreate` - Create a watchlist screening for an entity
* `WatchlistScreeningEntityGet` - Get an entity screening
* `WatchlistScreeningEntityHistoryList` - List history for entity watchlist screenings
* `WatchlistScreeningEntityHitList` - List hits for entity watchlist screenings
* `WatchlistScreeningEntityList` - List entity watchlist screenings
* `WatchlistScreeningEntityProgramGet` - Get entity watchlist screening program
* `WatchlistScreeningEntityProgramList` - List entity watchlist screening programs
* `WatchlistScreeningEntityReviewCreate` - Create a review for an entity watchlist screening
* `WatchlistScreeningEntityReviewList` - List reviews for entity watchlist screenings
* `WatchlistScreeningEntityUpdate` - Update an entity screening
* `WatchlistScreeningIndividualCreate` - Create a watchlist screening for a person
* `WatchlistScreeningIndividualGet` - Retrieve an individual watchlist screening
* `WatchlistScreeningIndividualHistoryList` - List history for individual watchlist screenings
* `WatchlistScreeningIndividualHitList` - List hits for individual watchlist screening
* `WatchlistScreeningIndividualList` - List Individual Watchlist Screenings
* `WatchlistScreeningIndividualProgramGet` - Get individual watchlist screening program
* `WatchlistScreeningIndividualProgramList` - List individual watchlist screening programs
* `WatchlistScreeningIndividualReviewCreate` - Create a review for an individual watchlist screening
* `WatchlistScreeningIndividualReviewList` - List reviews for individual watchlist screenings
* `WatchlistScreeningIndividualUpdate` - Update individual watchlist screening
* `WebhookVerificationKeyGet` - Get webhook verification key
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
