# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/plaid.com/2020-09-14_1.345.1/go
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
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ClientID: "YOUR_API_KEY_HERE",
            PlaidVersion: "YOUR_API_KEY_HERE",
            Secret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Plaid.AccountsBalanceGet(ctx, shared.AccountsBalanceGetRequest{
        AccessToken: "corrupti",
        ClientID: sdk.String("provident"),
        Options: &shared.AccountsBalanceGetRequestOptions{
            AccountIds: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
            MinLastUpdatedDatetime: types.MustTimeFromString("2021-04-22T12:08:58.275Z"),
        },
        Secret: sdk.String("vel"),
    })
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
## Available Resources and Operations


### [Plaid](docs/plaid/README.md)

* [AccountsBalanceGet](docs/plaid/README.md#accountsbalanceget) - Retrieve real-time balance data
* [AccountsGet](docs/plaid/README.md#accountsget) - Retrieve accounts
* [ApplicationGet](docs/plaid/README.md#applicationget) - Retrieve information about a Plaid application
* [AssetReportAuditCopyCreate](docs/plaid/README.md#assetreportauditcopycreate) - Create Asset Report Audit Copy
* [AssetReportAuditCopyGet](docs/plaid/README.md#assetreportauditcopyget) - Retrieve an Asset Report Audit Copy
* [AssetReportAuditCopyRemove](docs/plaid/README.md#assetreportauditcopyremove) - Remove Asset Report Audit Copy
* [AssetReportCreate](docs/plaid/README.md#assetreportcreate) - Create an Asset Report
* [AssetReportFilter](docs/plaid/README.md#assetreportfilter) - Filter Asset Report
* [AssetReportGet](docs/plaid/README.md#assetreportget) - Retrieve an Asset Report
* [AssetReportPdfGet](docs/plaid/README.md#assetreportpdfget) - Retrieve a PDF Asset Report
* [AssetReportRefresh](docs/plaid/README.md#assetreportrefresh) - Refresh an Asset Report
* [AssetReportRemove](docs/plaid/README.md#assetreportremove) - Delete an Asset Report
* [AuthGet](docs/plaid/README.md#authget) - Retrieve auth data
* [BankTransferBalanceGet](docs/plaid/README.md#banktransferbalanceget) - Get balance of your Bank Transfer account
* [BankTransferCancel](docs/plaid/README.md#banktransfercancel) - Cancel a bank transfer
* [BankTransferCreate](docs/plaid/README.md#banktransfercreate) - Create a bank transfer
* [BankTransferEventList](docs/plaid/README.md#banktransfereventlist) - List bank transfer events
* [BankTransferEventSync](docs/plaid/README.md#banktransfereventsync) - Sync bank transfer events
* [BankTransferGet](docs/plaid/README.md#banktransferget) - Retrieve a bank transfer
* [BankTransferList](docs/plaid/README.md#banktransferlist) - List bank transfers
* [BankTransferMigrateAccount](docs/plaid/README.md#banktransfermigrateaccount) - Migrate account into Bank Transfers
* [BankTransferSweepGet](docs/plaid/README.md#banktransfersweepget) - Retrieve a sweep
* [BankTransferSweepList](docs/plaid/README.md#banktransfersweeplist) - List sweeps
* [CategoriesGet](docs/plaid/README.md#categoriesget) - Get Categories
* [~~CreatePaymentToken~~](docs/plaid/README.md#createpaymenttoken) - Create payment token :warning: **Deprecated**
* [CreditAssetReportFreddieMacGet](docs/plaid/README.md#creditassetreportfreddiemacget) - Retrieve an Asset Report with Freddie Mac format. Only Freddie Mac can use this endpoint.
* [CreditAuditCopyTokenCreate](docs/plaid/README.md#creditauditcopytokencreate) - Create Asset or Income Report Audit Copy Token
* [CreditAuditCopyTokenUpdate](docs/plaid/README.md#creditauditcopytokenupdate) - Update an Audit Copy Token
* [CreditBankEmploymentGet](docs/plaid/README.md#creditbankemploymentget) - Retrieve information from the bank accounts used for employment verification
* [CreditBankIncomeGet](docs/plaid/README.md#creditbankincomeget) - Retrieve information from the bank accounts used for income verification
* [CreditBankIncomePdfGet](docs/plaid/README.md#creditbankincomepdfget) - Retrieve information from the bank accounts used for income verification in PDF format
* [CreditBankIncomeRefresh](docs/plaid/README.md#creditbankincomerefresh) - Refresh a user's bank income information
* [CreditEmploymentGet](docs/plaid/README.md#creditemploymentget) - Retrieve a summary of an individual's employment information
* [CreditFreddieMacReportsGet](docs/plaid/README.md#creditfreddiemacreportsget) - Retrieve an Asset Report with Freddie Mac format (aka VOA - Verification Of Assets), and a Verification Of Employment (VOE) report if this one is available. Only Freddie Mac can use this endpoint.
* [CreditPayrollIncomeGet](docs/plaid/README.md#creditpayrollincomeget) - Retrieve a user's payroll information
* [CreditPayrollIncomePrecheck](docs/plaid/README.md#creditpayrollincomeprecheck) - Check income verification eligibility and optimize conversion
* [CreditPayrollIncomeRefresh](docs/plaid/README.md#creditpayrollincomerefresh) - Refresh a digital payroll income verification
* [CreditRelayCreate](docs/plaid/README.md#creditrelaycreate) - Create a relay token to share an Asset Report with a partner client (beta)
* [CreditRelayGet](docs/plaid/README.md#creditrelayget) - Retrieve the reports associated with a relay token that was shared with you (beta)
* [CreditRelayRefresh](docs/plaid/README.md#creditrelayrefresh) - Refresh a report of a relay token (beta)
* [CreditRelayRemove](docs/plaid/README.md#creditrelayremove) - Remove relay token (beta)
* [CreditReportAuditCopyRemove](docs/plaid/README.md#creditreportauditcopyremove) - Remove an Audit Copy token
* [CreditSessionsGet](docs/plaid/README.md#creditsessionsget) - Retrieve Link sessions for your user
* [DashboardUserGet](docs/plaid/README.md#dashboarduserget) - Retrieve a dashboard user
* [DashboardUserList](docs/plaid/README.md#dashboarduserlist) - List dashboard users
* [DepositSwitchAltCreate](docs/plaid/README.md#depositswitchaltcreate) - Create a deposit switch without using Plaid Exchange
* [DepositSwitchCreate](docs/plaid/README.md#depositswitchcreate) - Create a deposit switch
* [DepositSwitchGet](docs/plaid/README.md#depositswitchget) - Retrieve a deposit switch
* [DepositSwitchTokenCreate](docs/plaid/README.md#depositswitchtokencreate) - Create a deposit switch token
* [EmployersSearch](docs/plaid/README.md#employerssearch) - Search employer database
* [~~EmploymentVerificationGet~~](docs/plaid/README.md#employmentverificationget) - (Deprecated) Retrieve a summary of an individual's employment information :warning: **Deprecated**
* [FdxNotifications](docs/plaid/README.md#fdxnotifications) - Webhook receiver for fdx notifications
* [IdentityGet](docs/plaid/README.md#identityget) - Retrieve identity data
* [IdentityMatch](docs/plaid/README.md#identitymatch) - Retrieve identity match score
* [IdentityVerificationCreate](docs/plaid/README.md#identityverificationcreate) - Create a new identity verification
* [IdentityVerificationGet](docs/plaid/README.md#identityverificationget) - Retrieve Identity Verification
* [IdentityVerificationList](docs/plaid/README.md#identityverificationlist) - List Identity Verifications
* [IdentityVerificationRetry](docs/plaid/README.md#identityverificationretry) - Retry an Identity Verification
* [~~IncomeVerificationCreate~~](docs/plaid/README.md#incomeverificationcreate) - (Deprecated) Create an income verification instance :warning: **Deprecated**
* [~~IncomeVerificationDocumentsDownload~~](docs/plaid/README.md#incomeverificationdocumentsdownload) - (Deprecated) Download the original documents used for income verification :warning: **Deprecated**
* [~~IncomeVerificationPaystubsGet~~](docs/plaid/README.md#incomeverificationpaystubsget) - (Deprecated) Retrieve information from the paystubs used for income verification :warning: **Deprecated**
* [~~IncomeVerificationPrecheck~~](docs/plaid/README.md#incomeverificationprecheck) - (Deprecated) Check digital income verification eligibility and optimize conversion :warning: **Deprecated**
* [~~IncomeVerificationTaxformsGet~~](docs/plaid/README.md#incomeverificationtaxformsget) - (Deprecated) Retrieve information from the tax documents used for income verification :warning: **Deprecated**
* [InstitutionsGet](docs/plaid/README.md#institutionsget) - Get details of all supported institutions
* [InstitutionsGetByID](docs/plaid/README.md#institutionsgetbyid) - Get details of an institution
* [InstitutionsSearch](docs/plaid/README.md#institutionssearch) - Search institutions
* [InvestmentsHoldingsGet](docs/plaid/README.md#investmentsholdingsget) - Get Investment holdings
* [InvestmentsTransactionsGet](docs/plaid/README.md#investmentstransactionsget) - Get investment transactions
* [ItemAccessTokenInvalidate](docs/plaid/README.md#itemaccesstokeninvalidate) - Invalidate access_token
* [ItemActivityList](docs/plaid/README.md#itemactivitylist) - List a historical log of user consent events
* [ItemApplicationList](docs/plaid/README.md#itemapplicationlist) - List a user’s connected applications
* [ItemApplicationScopesUpdate](docs/plaid/README.md#itemapplicationscopesupdate) - Update the scopes of access for a particular application
* [ItemCreatePublicToken](docs/plaid/README.md#itemcreatepublictoken) - Create public token
* [ItemGet](docs/plaid/README.md#itemget) - Retrieve an Item
* [ItemImport](docs/plaid/README.md#itemimport) - Import Item
* [ItemPublicTokenExchange](docs/plaid/README.md#itempublictokenexchange) - Exchange public token for an access token
* [ItemRemove](docs/plaid/README.md#itemremove) - Remove an Item
* [ItemWebhookUpdate](docs/plaid/README.md#itemwebhookupdate) - Update Webhook URL
* [LiabilitiesGet](docs/plaid/README.md#liabilitiesget) - Retrieve Liabilities data
* [LinkDeliveryCreate](docs/plaid/README.md#linkdeliverycreate) - Create Link Delivery session
* [LinkDeliveryGet](docs/plaid/README.md#linkdeliveryget) - Get Link Delivery session
* [LinkOauthCorrelationIDExchange](docs/plaid/README.md#linkoauthcorrelationidexchange) - Exchange the Link Correlation Id for a Link Token
* [LinkTokenCreate](docs/plaid/README.md#linktokencreate) - Create Link Token
* [LinkTokenGet](docs/plaid/README.md#linktokenget) - Get Link Token
* [PartnerCustomerCreate](docs/plaid/README.md#partnercustomercreate) - Creates a new end customer for a Plaid reseller.
* [PartnerCustomerEnable](docs/plaid/README.md#partnercustomerenable) - Enables a Plaid reseller's end customer in the Production environment.
* [PartnerCustomerGet](docs/plaid/README.md#partnercustomerget) - Returns a Plaid reseller's end customer.
* [PartnerCustomerOauthInstitutionsGet](docs/plaid/README.md#partnercustomeroauthinstitutionsget) - Returns OAuth-institution registration information for a given end customer.
* [PartnerCustomerRemove](docs/plaid/README.md#partnercustomerremove) - Removes a Plaid reseller's end customer.
* [PaymentInitiationConsentCreate](docs/plaid/README.md#paymentinitiationconsentcreate) - Create payment consent
* [PaymentInitiationConsentGet](docs/plaid/README.md#paymentinitiationconsentget) - Get payment consent
* [PaymentInitiationConsentPaymentExecute](docs/plaid/README.md#paymentinitiationconsentpaymentexecute) - Execute a single payment using consent
* [PaymentInitiationConsentRevoke](docs/plaid/README.md#paymentinitiationconsentrevoke) - Revoke payment consent
* [PaymentInitiationPaymentCreate](docs/plaid/README.md#paymentinitiationpaymentcreate) - Create a payment
* [PaymentInitiationPaymentGet](docs/plaid/README.md#paymentinitiationpaymentget) - Get payment details
* [PaymentInitiationPaymentList](docs/plaid/README.md#paymentinitiationpaymentlist) - List payments
* [PaymentInitiationPaymentReverse](docs/plaid/README.md#paymentinitiationpaymentreverse) - Reverse an existing payment
* [PaymentInitiationRecipientCreate](docs/plaid/README.md#paymentinitiationrecipientcreate) - Create payment recipient
* [PaymentInitiationRecipientGet](docs/plaid/README.md#paymentinitiationrecipientget) - Get payment recipient
* [PaymentInitiationRecipientList](docs/plaid/README.md#paymentinitiationrecipientlist) - List payment recipients
* [PaymentProfileCreate](docs/plaid/README.md#paymentprofilecreate) - Create payment profile
* [PaymentProfileGet](docs/plaid/README.md#paymentprofileget) - Get payment profile
* [PaymentProfileRemove](docs/plaid/README.md#paymentprofileremove) - Remove payment profile
* [ProcessorApexProcessorTokenCreate](docs/plaid/README.md#processorapexprocessortokencreate) - Create Apex bank account token
* [ProcessorAuthGet](docs/plaid/README.md#processorauthget) - Retrieve Auth data
* [ProcessorBalanceGet](docs/plaid/README.md#processorbalanceget) - Retrieve Balance data
* [ProcessorBankTransferCreate](docs/plaid/README.md#processorbanktransfercreate) - Create a bank transfer as a processor
* [ProcessorIdentityGet](docs/plaid/README.md#processoridentityget) - Retrieve Identity data
* [ProcessorSignalDecisionReport](docs/plaid/README.md#processorsignaldecisionreport) - Report whether you initiated an ACH transaction
* [ProcessorSignalEvaluate](docs/plaid/README.md#processorsignalevaluate) - Evaluate a planned ACH transaction
* [ProcessorSignalReturnReport](docs/plaid/README.md#processorsignalreturnreport) - Report a return for an ACH transaction
* [ProcessorStripeBankAccountTokenCreate](docs/plaid/README.md#processorstripebankaccounttokencreate) - Create Stripe bank account token
* [ProcessorTokenCreate](docs/plaid/README.md#processortokencreate) - Create processor token
* [SandboxBankTransferFireWebhook](docs/plaid/README.md#sandboxbanktransferfirewebhook) - Manually fire a Bank Transfer webhook
* [SandboxBankTransferSimulate](docs/plaid/README.md#sandboxbanktransfersimulate) - Simulate a bank transfer event in Sandbox
* [SandboxIncomeFireWebhook](docs/plaid/README.md#sandboxincomefirewebhook) - Manually fire an Income webhook
* [SandboxItemFireWebhook](docs/plaid/README.md#sandboxitemfirewebhook) - Fire a test webhook
* [SandboxItemResetLogin](docs/plaid/README.md#sandboxitemresetlogin) - Force a Sandbox Item into an error state
* [SandboxItemSetVerificationStatus](docs/plaid/README.md#sandboxitemsetverificationstatus) - Set verification status for Sandbox account
* [SandboxOauthSelectAccounts](docs/plaid/README.md#sandboxoauthselectaccounts) - Save the selected accounts when connecting to the Platypus Oauth institution
* [SandboxPaymentProfileResetLogin](docs/plaid/README.md#sandboxpaymentprofileresetlogin) - Reset the login of a Payment Profile
* [SandboxProcessorTokenCreate](docs/plaid/README.md#sandboxprocessortokencreate) - Create a test Item and processor token
* [SandboxPublicTokenCreate](docs/plaid/README.md#sandboxpublictokencreate) - Create a test Item
* [SandboxTransferFireWebhook](docs/plaid/README.md#sandboxtransferfirewebhook) - Manually fire a Transfer webhook
* [SandboxTransferRepaymentSimulate](docs/plaid/README.md#sandboxtransferrepaymentsimulate) - Trigger the creation of a repayment
* [SandboxTransferSimulate](docs/plaid/README.md#sandboxtransfersimulate) - Simulate a transfer event in Sandbox
* [SandboxTransferSweepSimulate](docs/plaid/README.md#sandboxtransfersweepsimulate) - Simulate creating a sweep
* [SandboxTransferTestClockAdvance](docs/plaid/README.md#sandboxtransfertestclockadvance) - Advance a test clock
* [SandboxTransferTestClockCreate](docs/plaid/README.md#sandboxtransfertestclockcreate) - Create a test clock
* [SandboxTransferTestClockGet](docs/plaid/README.md#sandboxtransfertestclockget) - Get a test clock
* [SandboxTransferTestClockList](docs/plaid/README.md#sandboxtransfertestclocklist) - List test clocks
* [SignalDecisionReport](docs/plaid/README.md#signaldecisionreport) - Report whether you initiated an ACH transaction
* [SignalEvaluate](docs/plaid/README.md#signalevaluate) - Evaluate a planned ACH transaction
* [SignalPrepare](docs/plaid/README.md#signalprepare) - Opt-in an Item to Signal
* [SignalReturnReport](docs/plaid/README.md#signalreturnreport) - Report a return for an ACH transaction
* [TransactionsEnhance](docs/plaid/README.md#transactionsenhance) - enhance locally-held transaction data
* [TransactionsEnrich](docs/plaid/README.md#transactionsenrich) - Enrich locally-held transaction data
* [TransactionsGet](docs/plaid/README.md#transactionsget) - Get transaction data
* [TransactionsRecurringGet](docs/plaid/README.md#transactionsrecurringget) - Fetch recurring transaction streams
* [TransactionsRefresh](docs/plaid/README.md#transactionsrefresh) - Refresh transaction data
* [TransactionsRulesCreate](docs/plaid/README.md#transactionsrulescreate) - Create transaction category rule
* [TransactionsRulesList](docs/plaid/README.md#transactionsruleslist) - Return a list of rules created for the Item associated with the access token.
* [TransactionsRulesRemove](docs/plaid/README.md#transactionsrulesremove) - Remove transaction rule
* [TransactionsSync](docs/plaid/README.md#transactionssync) - Get incremental transaction updates on an Item
* [TransferAuthorizationCreate](docs/plaid/README.md#transferauthorizationcreate) - Create a transfer authorization
* [TransferCancel](docs/plaid/README.md#transfercancel) - Cancel a transfer
* [TransferCapabilitiesGet](docs/plaid/README.md#transfercapabilitiesget) - Get RTP eligibility information of a transfer
* [TransferConfigurationGet](docs/plaid/README.md#transferconfigurationget) - Get transfer product configuration
* [TransferCreate](docs/plaid/README.md#transfercreate) - Create a transfer
* [TransferEventList](docs/plaid/README.md#transfereventlist) - List transfer events
* [TransferEventSync](docs/plaid/README.md#transfereventsync) - Sync transfer events
* [TransferGet](docs/plaid/README.md#transferget) - Retrieve a transfer
* [TransferIntentCreate](docs/plaid/README.md#transferintentcreate) - Create a transfer intent object to invoke the Transfer UI
* [TransferIntentGet](docs/plaid/README.md#transferintentget) - Retrieve more information about a transfer intent
* [TransferList](docs/plaid/README.md#transferlist) - List transfers
* [TransferMetricsGet](docs/plaid/README.md#transfermetricsget) - Get transfer product usage metrics
* [TransferMigrateAccount](docs/plaid/README.md#transfermigrateaccount) - Migrate account into Transfers
* [TransferOriginatorCreate](docs/plaid/README.md#transferoriginatorcreate) - Create a new originator
* [TransferOriginatorGetJSON](docs/plaid/README.md#transferoriginatorgetjson) - Get status of an originator's onboarding
* [TransferOriginatorGetRaw](docs/plaid/README.md#transferoriginatorgetraw) - Get status of an originator's onboarding
* [TransferOriginatorList](docs/plaid/README.md#transferoriginatorlist) - Get status of all originators' onboarding
* [TransferQuestionnaireCreate](docs/plaid/README.md#transferquestionnairecreate) - Generate a Plaid-hosted onboarding UI URL.
* [TransferRecurringCancel](docs/plaid/README.md#transferrecurringcancel) - Cancel a recurring transfer.
* [TransferRecurringCreate](docs/plaid/README.md#transferrecurringcreate) - Create a recurring transfer
* [TransferRecurringGet](docs/plaid/README.md#transferrecurringget) - Retrieve a recurring transfer
* [TransferRecurringList](docs/plaid/README.md#transferrecurringlist) - List recurring transfers
* [TransferRefundCancel](docs/plaid/README.md#transferrefundcancel) - Cancel a refund
* [TransferRefundCreate](docs/plaid/README.md#transferrefundcreate) - Create a refund
* [TransferRefundGet](docs/plaid/README.md#transferrefundget) - Retrieve a refund
* [TransferRepaymentList](docs/plaid/README.md#transferrepaymentlist) - Lists historical repayments
* [TransferRepaymentReturnList](docs/plaid/README.md#transferrepaymentreturnlist) - List the returns included in a repayment
* [TransferSweepGet](docs/plaid/README.md#transfersweepget) - Retrieve a sweep
* [TransferSweepList](docs/plaid/README.md#transfersweeplist) - List sweeps
* [UserCreate](docs/plaid/README.md#usercreate) - Create user
* [WalletCreate](docs/plaid/README.md#walletcreate) - Create an e-wallet
* [WalletGet](docs/plaid/README.md#walletget) - Fetch an e-wallet
* [WalletList](docs/plaid/README.md#walletlist) - Fetch a list of e-wallets
* [WalletTransactionExecute](docs/plaid/README.md#wallettransactionexecute) - Execute a transaction using an e-wallet
* [WalletTransactionGet](docs/plaid/README.md#wallettransactionget) - Fetch an e-wallet transaction
* [WalletTransactionList](docs/plaid/README.md#wallettransactionlist) - List e-wallet transactions
* [WatchlistScreeningEntityCreate](docs/plaid/README.md#watchlistscreeningentitycreate) - Create a watchlist screening for an entity
* [WatchlistScreeningEntityGet](docs/plaid/README.md#watchlistscreeningentityget) - Get an entity screening
* [WatchlistScreeningEntityHistoryList](docs/plaid/README.md#watchlistscreeningentityhistorylist) - List history for entity watchlist screenings
* [WatchlistScreeningEntityHitList](docs/plaid/README.md#watchlistscreeningentityhitlist) - List hits for entity watchlist screenings
* [WatchlistScreeningEntityList](docs/plaid/README.md#watchlistscreeningentitylist) - List entity watchlist screenings
* [WatchlistScreeningEntityProgramGet](docs/plaid/README.md#watchlistscreeningentityprogramget) - Get entity watchlist screening program
* [WatchlistScreeningEntityProgramList](docs/plaid/README.md#watchlistscreeningentityprogramlist) - List entity watchlist screening programs
* [WatchlistScreeningEntityReviewCreate](docs/plaid/README.md#watchlistscreeningentityreviewcreate) - Create a review for an entity watchlist screening
* [WatchlistScreeningEntityReviewList](docs/plaid/README.md#watchlistscreeningentityreviewlist) - List reviews for entity watchlist screenings
* [WatchlistScreeningEntityUpdate](docs/plaid/README.md#watchlistscreeningentityupdate) - Update an entity screening
* [WatchlistScreeningIndividualCreate](docs/plaid/README.md#watchlistscreeningindividualcreate) - Create a watchlist screening for a person
* [WatchlistScreeningIndividualGet](docs/plaid/README.md#watchlistscreeningindividualget) - Retrieve an individual watchlist screening
* [WatchlistScreeningIndividualHistoryList](docs/plaid/README.md#watchlistscreeningindividualhistorylist) - List history for individual watchlist screenings
* [WatchlistScreeningIndividualHitList](docs/plaid/README.md#watchlistscreeningindividualhitlist) - List hits for individual watchlist screening
* [WatchlistScreeningIndividualList](docs/plaid/README.md#watchlistscreeningindividuallist) - List Individual Watchlist Screenings
* [WatchlistScreeningIndividualProgramGet](docs/plaid/README.md#watchlistscreeningindividualprogramget) - Get individual watchlist screening program
* [WatchlistScreeningIndividualProgramList](docs/plaid/README.md#watchlistscreeningindividualprogramlist) - List individual watchlist screening programs
* [WatchlistScreeningIndividualReviewCreate](docs/plaid/README.md#watchlistscreeningindividualreviewcreate) - Create a review for an individual watchlist screening
* [WatchlistScreeningIndividualReviewList](docs/plaid/README.md#watchlistscreeningindividualreviewlist) - List reviews for individual watchlist screenings
* [WatchlistScreeningIndividualUpdate](docs/plaid/README.md#watchlistscreeningindividualupdate) - Update individual watchlist screening
* [WebhookVerificationKeyGet](docs/plaid/README.md#webhookverificationkeyget) - Get webhook verification key
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
