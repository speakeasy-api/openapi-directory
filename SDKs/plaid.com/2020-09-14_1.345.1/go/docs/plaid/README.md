# Plaid

## Overview

The Plaid API

### Available Operations

* [AccountsBalanceGet](#accountsbalanceget) - Retrieve real-time balance data
* [AccountsGet](#accountsget) - Retrieve accounts
* [ApplicationGet](#applicationget) - Retrieve information about a Plaid application
* [AssetReportAuditCopyCreate](#assetreportauditcopycreate) - Create Asset Report Audit Copy
* [AssetReportAuditCopyGet](#assetreportauditcopyget) - Retrieve an Asset Report Audit Copy
* [AssetReportAuditCopyRemove](#assetreportauditcopyremove) - Remove Asset Report Audit Copy
* [AssetReportCreate](#assetreportcreate) - Create an Asset Report
* [AssetReportFilter](#assetreportfilter) - Filter Asset Report
* [AssetReportGet](#assetreportget) - Retrieve an Asset Report
* [AssetReportPdfGet](#assetreportpdfget) - Retrieve a PDF Asset Report
* [AssetReportRefresh](#assetreportrefresh) - Refresh an Asset Report
* [AssetReportRemove](#assetreportremove) - Delete an Asset Report
* [AuthGet](#authget) - Retrieve auth data
* [BankTransferBalanceGet](#banktransferbalanceget) - Get balance of your Bank Transfer account
* [BankTransferCancel](#banktransfercancel) - Cancel a bank transfer
* [BankTransferCreate](#banktransfercreate) - Create a bank transfer
* [BankTransferEventList](#banktransfereventlist) - List bank transfer events
* [BankTransferEventSync](#banktransfereventsync) - Sync bank transfer events
* [BankTransferGet](#banktransferget) - Retrieve a bank transfer
* [BankTransferList](#banktransferlist) - List bank transfers
* [BankTransferMigrateAccount](#banktransfermigrateaccount) - Migrate account into Bank Transfers
* [BankTransferSweepGet](#banktransfersweepget) - Retrieve a sweep
* [BankTransferSweepList](#banktransfersweeplist) - List sweeps
* [CategoriesGet](#categoriesget) - Get Categories
* [~~CreatePaymentToken~~](#createpaymenttoken) - Create payment token :warning: **Deprecated**
* [CreditAssetReportFreddieMacGet](#creditassetreportfreddiemacget) - Retrieve an Asset Report with Freddie Mac format. Only Freddie Mac can use this endpoint.
* [CreditAuditCopyTokenCreate](#creditauditcopytokencreate) - Create Asset or Income Report Audit Copy Token
* [CreditAuditCopyTokenUpdate](#creditauditcopytokenupdate) - Update an Audit Copy Token
* [CreditBankEmploymentGet](#creditbankemploymentget) - Retrieve information from the bank accounts used for employment verification
* [CreditBankIncomeGet](#creditbankincomeget) - Retrieve information from the bank accounts used for income verification
* [CreditBankIncomePdfGet](#creditbankincomepdfget) - Retrieve information from the bank accounts used for income verification in PDF format
* [CreditBankIncomeRefresh](#creditbankincomerefresh) - Refresh a user's bank income information
* [CreditEmploymentGet](#creditemploymentget) - Retrieve a summary of an individual's employment information
* [CreditFreddieMacReportsGet](#creditfreddiemacreportsget) - Retrieve an Asset Report with Freddie Mac format (aka VOA - Verification Of Assets), and a Verification Of Employment (VOE) report if this one is available. Only Freddie Mac can use this endpoint.
* [CreditPayrollIncomeGet](#creditpayrollincomeget) - Retrieve a user's payroll information
* [CreditPayrollIncomePrecheck](#creditpayrollincomeprecheck) - Check income verification eligibility and optimize conversion
* [CreditPayrollIncomeRefresh](#creditpayrollincomerefresh) - Refresh a digital payroll income verification
* [CreditRelayCreate](#creditrelaycreate) - Create a relay token to share an Asset Report with a partner client (beta)
* [CreditRelayGet](#creditrelayget) - Retrieve the reports associated with a relay token that was shared with you (beta)
* [CreditRelayRefresh](#creditrelayrefresh) - Refresh a report of a relay token (beta)
* [CreditRelayRemove](#creditrelayremove) - Remove relay token (beta)
* [CreditReportAuditCopyRemove](#creditreportauditcopyremove) - Remove an Audit Copy token
* [CreditSessionsGet](#creditsessionsget) - Retrieve Link sessions for your user
* [DashboardUserGet](#dashboarduserget) - Retrieve a dashboard user
* [DashboardUserList](#dashboarduserlist) - List dashboard users
* [DepositSwitchAltCreate](#depositswitchaltcreate) - Create a deposit switch without using Plaid Exchange
* [DepositSwitchCreate](#depositswitchcreate) - Create a deposit switch
* [DepositSwitchGet](#depositswitchget) - Retrieve a deposit switch
* [DepositSwitchTokenCreate](#depositswitchtokencreate) - Create a deposit switch token
* [EmployersSearch](#employerssearch) - Search employer database
* [~~EmploymentVerificationGet~~](#employmentverificationget) - (Deprecated) Retrieve a summary of an individual's employment information :warning: **Deprecated**
* [FdxNotifications](#fdxnotifications) - Webhook receiver for fdx notifications
* [IdentityGet](#identityget) - Retrieve identity data
* [IdentityMatch](#identitymatch) - Retrieve identity match score
* [IdentityVerificationCreate](#identityverificationcreate) - Create a new identity verification
* [IdentityVerificationGet](#identityverificationget) - Retrieve Identity Verification
* [IdentityVerificationList](#identityverificationlist) - List Identity Verifications
* [IdentityVerificationRetry](#identityverificationretry) - Retry an Identity Verification
* [~~IncomeVerificationCreate~~](#incomeverificationcreate) - (Deprecated) Create an income verification instance :warning: **Deprecated**
* [~~IncomeVerificationDocumentsDownload~~](#incomeverificationdocumentsdownload) - (Deprecated) Download the original documents used for income verification :warning: **Deprecated**
* [~~IncomeVerificationPaystubsGet~~](#incomeverificationpaystubsget) - (Deprecated) Retrieve information from the paystubs used for income verification :warning: **Deprecated**
* [~~IncomeVerificationPrecheck~~](#incomeverificationprecheck) - (Deprecated) Check digital income verification eligibility and optimize conversion :warning: **Deprecated**
* [~~IncomeVerificationTaxformsGet~~](#incomeverificationtaxformsget) - (Deprecated) Retrieve information from the tax documents used for income verification :warning: **Deprecated**
* [InstitutionsGet](#institutionsget) - Get details of all supported institutions
* [InstitutionsGetByID](#institutionsgetbyid) - Get details of an institution
* [InstitutionsSearch](#institutionssearch) - Search institutions
* [InvestmentsHoldingsGet](#investmentsholdingsget) - Get Investment holdings
* [InvestmentsTransactionsGet](#investmentstransactionsget) - Get investment transactions
* [ItemAccessTokenInvalidate](#itemaccesstokeninvalidate) - Invalidate access_token
* [ItemActivityList](#itemactivitylist) - List a historical log of user consent events
* [ItemApplicationList](#itemapplicationlist) - List a user’s connected applications
* [ItemApplicationScopesUpdate](#itemapplicationscopesupdate) - Update the scopes of access for a particular application
* [ItemCreatePublicToken](#itemcreatepublictoken) - Create public token
* [ItemGet](#itemget) - Retrieve an Item
* [ItemImport](#itemimport) - Import Item
* [ItemPublicTokenExchange](#itempublictokenexchange) - Exchange public token for an access token
* [ItemRemove](#itemremove) - Remove an Item
* [ItemWebhookUpdate](#itemwebhookupdate) - Update Webhook URL
* [LiabilitiesGet](#liabilitiesget) - Retrieve Liabilities data
* [LinkDeliveryCreate](#linkdeliverycreate) - Create Link Delivery session
* [LinkDeliveryGet](#linkdeliveryget) - Get Link Delivery session
* [LinkOauthCorrelationIDExchange](#linkoauthcorrelationidexchange) - Exchange the Link Correlation Id for a Link Token
* [LinkTokenCreate](#linktokencreate) - Create Link Token
* [LinkTokenGet](#linktokenget) - Get Link Token
* [PartnerCustomerCreate](#partnercustomercreate) - Creates a new end customer for a Plaid reseller.
* [PartnerCustomerEnable](#partnercustomerenable) - Enables a Plaid reseller's end customer in the Production environment.
* [PartnerCustomerGet](#partnercustomerget) - Returns a Plaid reseller's end customer.
* [PartnerCustomerOauthInstitutionsGet](#partnercustomeroauthinstitutionsget) - Returns OAuth-institution registration information for a given end customer.
* [PartnerCustomerRemove](#partnercustomerremove) - Removes a Plaid reseller's end customer.
* [PaymentInitiationConsentCreate](#paymentinitiationconsentcreate) - Create payment consent
* [PaymentInitiationConsentGet](#paymentinitiationconsentget) - Get payment consent
* [PaymentInitiationConsentPaymentExecute](#paymentinitiationconsentpaymentexecute) - Execute a single payment using consent
* [PaymentInitiationConsentRevoke](#paymentinitiationconsentrevoke) - Revoke payment consent
* [PaymentInitiationPaymentCreate](#paymentinitiationpaymentcreate) - Create a payment
* [PaymentInitiationPaymentGet](#paymentinitiationpaymentget) - Get payment details
* [PaymentInitiationPaymentList](#paymentinitiationpaymentlist) - List payments
* [PaymentInitiationPaymentReverse](#paymentinitiationpaymentreverse) - Reverse an existing payment
* [PaymentInitiationRecipientCreate](#paymentinitiationrecipientcreate) - Create payment recipient
* [PaymentInitiationRecipientGet](#paymentinitiationrecipientget) - Get payment recipient
* [PaymentInitiationRecipientList](#paymentinitiationrecipientlist) - List payment recipients
* [PaymentProfileCreate](#paymentprofilecreate) - Create payment profile
* [PaymentProfileGet](#paymentprofileget) - Get payment profile
* [PaymentProfileRemove](#paymentprofileremove) - Remove payment profile
* [ProcessorApexProcessorTokenCreate](#processorapexprocessortokencreate) - Create Apex bank account token
* [ProcessorAuthGet](#processorauthget) - Retrieve Auth data
* [ProcessorBalanceGet](#processorbalanceget) - Retrieve Balance data
* [ProcessorBankTransferCreate](#processorbanktransfercreate) - Create a bank transfer as a processor
* [ProcessorIdentityGet](#processoridentityget) - Retrieve Identity data
* [ProcessorSignalDecisionReport](#processorsignaldecisionreport) - Report whether you initiated an ACH transaction
* [ProcessorSignalEvaluate](#processorsignalevaluate) - Evaluate a planned ACH transaction
* [ProcessorSignalReturnReport](#processorsignalreturnreport) - Report a return for an ACH transaction
* [ProcessorStripeBankAccountTokenCreate](#processorstripebankaccounttokencreate) - Create Stripe bank account token
* [ProcessorTokenCreate](#processortokencreate) - Create processor token
* [SandboxBankTransferFireWebhook](#sandboxbanktransferfirewebhook) - Manually fire a Bank Transfer webhook
* [SandboxBankTransferSimulate](#sandboxbanktransfersimulate) - Simulate a bank transfer event in Sandbox
* [SandboxIncomeFireWebhook](#sandboxincomefirewebhook) - Manually fire an Income webhook
* [SandboxItemFireWebhook](#sandboxitemfirewebhook) - Fire a test webhook
* [SandboxItemResetLogin](#sandboxitemresetlogin) - Force a Sandbox Item into an error state
* [SandboxItemSetVerificationStatus](#sandboxitemsetverificationstatus) - Set verification status for Sandbox account
* [SandboxOauthSelectAccounts](#sandboxoauthselectaccounts) - Save the selected accounts when connecting to the Platypus Oauth institution
* [SandboxPaymentProfileResetLogin](#sandboxpaymentprofileresetlogin) - Reset the login of a Payment Profile
* [SandboxProcessorTokenCreate](#sandboxprocessortokencreate) - Create a test Item and processor token
* [SandboxPublicTokenCreate](#sandboxpublictokencreate) - Create a test Item
* [SandboxTransferFireWebhook](#sandboxtransferfirewebhook) - Manually fire a Transfer webhook
* [SandboxTransferRepaymentSimulate](#sandboxtransferrepaymentsimulate) - Trigger the creation of a repayment
* [SandboxTransferSimulate](#sandboxtransfersimulate) - Simulate a transfer event in Sandbox
* [SandboxTransferSweepSimulate](#sandboxtransfersweepsimulate) - Simulate creating a sweep
* [SandboxTransferTestClockAdvance](#sandboxtransfertestclockadvance) - Advance a test clock
* [SandboxTransferTestClockCreate](#sandboxtransfertestclockcreate) - Create a test clock
* [SandboxTransferTestClockGet](#sandboxtransfertestclockget) - Get a test clock
* [SandboxTransferTestClockList](#sandboxtransfertestclocklist) - List test clocks
* [SignalDecisionReport](#signaldecisionreport) - Report whether you initiated an ACH transaction
* [SignalEvaluate](#signalevaluate) - Evaluate a planned ACH transaction
* [SignalPrepare](#signalprepare) - Opt-in an Item to Signal
* [SignalReturnReport](#signalreturnreport) - Report a return for an ACH transaction
* [TransactionsEnhance](#transactionsenhance) - enhance locally-held transaction data
* [TransactionsEnrich](#transactionsenrich) - Enrich locally-held transaction data
* [TransactionsGet](#transactionsget) - Get transaction data
* [TransactionsRecurringGet](#transactionsrecurringget) - Fetch recurring transaction streams
* [TransactionsRefresh](#transactionsrefresh) - Refresh transaction data
* [TransactionsRulesCreate](#transactionsrulescreate) - Create transaction category rule
* [TransactionsRulesList](#transactionsruleslist) - Return a list of rules created for the Item associated with the access token.
* [TransactionsRulesRemove](#transactionsrulesremove) - Remove transaction rule
* [TransactionsSync](#transactionssync) - Get incremental transaction updates on an Item
* [TransferAuthorizationCreate](#transferauthorizationcreate) - Create a transfer authorization
* [TransferCancel](#transfercancel) - Cancel a transfer
* [TransferCapabilitiesGet](#transfercapabilitiesget) - Get RTP eligibility information of a transfer
* [TransferConfigurationGet](#transferconfigurationget) - Get transfer product configuration
* [TransferCreate](#transfercreate) - Create a transfer
* [TransferEventList](#transfereventlist) - List transfer events
* [TransferEventSync](#transfereventsync) - Sync transfer events
* [TransferGet](#transferget) - Retrieve a transfer
* [TransferIntentCreate](#transferintentcreate) - Create a transfer intent object to invoke the Transfer UI
* [TransferIntentGet](#transferintentget) - Retrieve more information about a transfer intent
* [TransferList](#transferlist) - List transfers
* [TransferMetricsGet](#transfermetricsget) - Get transfer product usage metrics
* [TransferMigrateAccount](#transfermigrateaccount) - Migrate account into Transfers
* [TransferOriginatorCreate](#transferoriginatorcreate) - Create a new originator
* [TransferOriginatorGetJSON](#transferoriginatorgetjson) - Get status of an originator's onboarding
* [TransferOriginatorGetRaw](#transferoriginatorgetraw) - Get status of an originator's onboarding
* [TransferOriginatorList](#transferoriginatorlist) - Get status of all originators' onboarding
* [TransferQuestionnaireCreate](#transferquestionnairecreate) - Generate a Plaid-hosted onboarding UI URL.
* [TransferRecurringCancel](#transferrecurringcancel) - Cancel a recurring transfer.
* [TransferRecurringCreate](#transferrecurringcreate) - Create a recurring transfer
* [TransferRecurringGet](#transferrecurringget) - Retrieve a recurring transfer
* [TransferRecurringList](#transferrecurringlist) - List recurring transfers
* [TransferRefundCancel](#transferrefundcancel) - Cancel a refund
* [TransferRefundCreate](#transferrefundcreate) - Create a refund
* [TransferRefundGet](#transferrefundget) - Retrieve a refund
* [TransferRepaymentList](#transferrepaymentlist) - Lists historical repayments
* [TransferRepaymentReturnList](#transferrepaymentreturnlist) - List the returns included in a repayment
* [TransferSweepGet](#transfersweepget) - Retrieve a sweep
* [TransferSweepList](#transfersweeplist) - List sweeps
* [UserCreate](#usercreate) - Create user
* [WalletCreate](#walletcreate) - Create an e-wallet
* [WalletGet](#walletget) - Fetch an e-wallet
* [WalletList](#walletlist) - Fetch a list of e-wallets
* [WalletTransactionExecute](#wallettransactionexecute) - Execute a transaction using an e-wallet
* [WalletTransactionGet](#wallettransactionget) - Fetch an e-wallet transaction
* [WalletTransactionList](#wallettransactionlist) - List e-wallet transactions
* [WatchlistScreeningEntityCreate](#watchlistscreeningentitycreate) - Create a watchlist screening for an entity
* [WatchlistScreeningEntityGet](#watchlistscreeningentityget) - Get an entity screening
* [WatchlistScreeningEntityHistoryList](#watchlistscreeningentityhistorylist) - List history for entity watchlist screenings
* [WatchlistScreeningEntityHitList](#watchlistscreeningentityhitlist) - List hits for entity watchlist screenings
* [WatchlistScreeningEntityList](#watchlistscreeningentitylist) - List entity watchlist screenings
* [WatchlistScreeningEntityProgramGet](#watchlistscreeningentityprogramget) - Get entity watchlist screening program
* [WatchlistScreeningEntityProgramList](#watchlistscreeningentityprogramlist) - List entity watchlist screening programs
* [WatchlistScreeningEntityReviewCreate](#watchlistscreeningentityreviewcreate) - Create a review for an entity watchlist screening
* [WatchlistScreeningEntityReviewList](#watchlistscreeningentityreviewlist) - List reviews for entity watchlist screenings
* [WatchlistScreeningEntityUpdate](#watchlistscreeningentityupdate) - Update an entity screening
* [WatchlistScreeningIndividualCreate](#watchlistscreeningindividualcreate) - Create a watchlist screening for a person
* [WatchlistScreeningIndividualGet](#watchlistscreeningindividualget) - Retrieve an individual watchlist screening
* [WatchlistScreeningIndividualHistoryList](#watchlistscreeningindividualhistorylist) - List history for individual watchlist screenings
* [WatchlistScreeningIndividualHitList](#watchlistscreeningindividualhitlist) - List hits for individual watchlist screening
* [WatchlistScreeningIndividualList](#watchlistscreeningindividuallist) - List Individual Watchlist Screenings
* [WatchlistScreeningIndividualProgramGet](#watchlistscreeningindividualprogramget) - Get individual watchlist screening program
* [WatchlistScreeningIndividualProgramList](#watchlistscreeningindividualprogramlist) - List individual watchlist screening programs
* [WatchlistScreeningIndividualReviewCreate](#watchlistscreeningindividualreviewcreate) - Create a review for an individual watchlist screening
* [WatchlistScreeningIndividualReviewList](#watchlistscreeningindividualreviewlist) - List reviews for individual watchlist screenings
* [WatchlistScreeningIndividualUpdate](#watchlistscreeningindividualupdate) - Update individual watchlist screening
* [WebhookVerificationKeyGet](#webhookverificationkeyget) - Get webhook verification key

## AccountsBalanceGet

The `/accounts/balance/get` endpoint returns the real-time balance for each of an Item's accounts. While other endpoints may return a balance object, only `/accounts/balance/get` forces the available and current balance fields to be refreshed rather than cached. This endpoint can be used for existing Items that were added via any of Plaid’s other products. This endpoint can be used as long as Link has been initialized with any other product, `balance` itself is not a product that can be used to initialize Link. As this endpoint triggers a synchronous request for fresh data, latency may be higher than for other Plaid endpoints; if you encounter errors, you may find it necessary to adjust your timeout period when making requests.

</api/products/balance/#accountsbalanceget>

### Example Usage

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
        AccessToken: "error",
        ClientID: sdk.String("deserunt"),
        Options: &shared.AccountsBalanceGetRequestOptions{
            AccountIds: []string{
                "iure",
                "magnam",
            },
            MinLastUpdatedDatetime: types.MustTimeFromString("2022-10-30T21:34:57.850Z"),
        },
        Secret: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsGetResponse != nil {
        // handle response
    }
}
```

## AccountsGet

The `/accounts/get` endpoint can be used to retrieve a list of accounts associated with any linked Item. Plaid will only return active bank accounts — that is, accounts that are not closed and are capable of carrying a balance.
For items that went through the updated account selection pane, this endpoint only returns accounts that were permissioned by the user when they initially created the Item. If a user creates a new account after the initial link, you can capture this event through the [`NEW_ACCOUNTS_AVAILABLE`](https://plaid.com/docs/api/items/#new_accounts_available) webhook and then use Link's [update mode](https://plaid.com/docs/link/update-mode/) to request that the user share this new account with you.

This endpoint retrieves cached information, rather than extracting fresh information from the institution. As a result, balances returned may not be up-to-date; for realtime balance information, use `/accounts/balance/get` instead. Note that some information is nullable.

</api/accounts/#accountsget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.AccountsGet(ctx, shared.AccountsGetRequest{
        AccessToken: "tempora",
        ClientID: sdk.String("suscipit"),
        Options: &shared.AccountsGetRequestOptions{
            AccountIds: []string{
                "minus",
                "placeat",
            },
        },
        Secret: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsGetResponse != nil {
        // handle response
    }
}
```

## ApplicationGet

Allows financial institutions to retrieve information about Plaid clients for the purpose of building control-tower experiences

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ApplicationGet(ctx, shared.ApplicationGetRequest{
        ApplicationID: "iusto",
        ClientID: "excepturi",
        Secret: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationGetResponse != nil {
        // handle response
    }
}
```

## AssetReportAuditCopyCreate

Plaid can provide an Audit Copy of any Asset Report directly to a participating third party on your behalf. For example, Plaid can supply an Audit Copy directly to Fannie Mae on your behalf if you participate in the Day 1 Certainty™ program. An Audit Copy contains the same underlying data as the Asset Report.

To grant access to an Audit Copy, use the `/asset_report/audit_copy/create` endpoint to create an `audit_copy_token` and then pass that token to the third party who needs access. Each third party has its own `auditor_id`, for example `fannie_mae`. You’ll need to create a separate Audit Copy for each third party to whom you want to grant access to the Report.

</api/products/assets/#asset_reportaudit_copycreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.AssetReportAuditCopyCreate(ctx, shared.AssetReportAuditCopyCreateRequest{
        AssetReportToken: "recusandae",
        AuditorID: sdk.String("temporibus"),
        ClientID: sdk.String("ab"),
        Secret: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetReportAuditCopyCreateResponse != nil {
        // handle response
    }
}
```

## AssetReportAuditCopyGet

`/asset_report/audit_copy/get` allows auditors to get a copy of an Asset Report that was previously shared via the `/asset_report/audit_copy/create` endpoint.  The caller of `/asset_report/audit_copy/create` must provide the `audit_copy_token` to the auditor.  This token can then be used to call `/asset_report/audit_copy/create`.

</none/>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.AssetReportAuditCopyGet(ctx, shared.AssetReportAuditCopyGetRequest{
        AuditCopyToken: "veritatis",
        ClientID: sdk.String("deserunt"),
        Secret: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetReportGetResponse != nil {
        // handle response
    }
}
```

## AssetReportAuditCopyRemove

The `/asset_report/audit_copy/remove` endpoint allows you to remove an Audit Copy. Removing an Audit Copy invalidates the `audit_copy_token` associated with it, meaning both you and any third parties holding the token will no longer be able to use it to access Report data. Items associated with the Asset Report, the Asset Report itself and other Audit Copies of it are not affected and will remain accessible after removing the given Audit Copy.

</api/products/assets/#asset_reportaudit_copyremove>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.AssetReportAuditCopyRemove(ctx, shared.AssetReportAuditCopyRemoveRequest{
        AuditCopyToken: "ipsam",
        ClientID: sdk.String("repellendus"),
        Secret: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetReportAuditCopyRemoveResponse != nil {
        // handle response
    }
}
```

## AssetReportCreate

The `/asset_report/create` endpoint initiates the process of creating an Asset Report, which can then be retrieved by passing the `asset_report_token` return value to the `/asset_report/get` or `/asset_report/pdf/get` endpoints.

The Asset Report takes some time to be created and is not available immediately after calling `/asset_report/create`. When the Asset Report is ready to be retrieved using `/asset_report/get` or `/asset_report/pdf/get`, Plaid will fire a `PRODUCT_READY` webhook. For full details of the webhook schema, see [Asset Report webhooks](https://plaid.com/docs/api/products/assets/#webhooks).

The `/asset_report/create` endpoint creates an Asset Report at a moment in time. Asset Reports are immutable. To get an updated Asset Report, use the `/asset_report/refresh` endpoint.

</api/products/assets/#asset_reportcreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.AssetReportCreate(ctx, shared.AssetReportCreateRequest{
        AccessTokens: []string{
            "odit",
            "at",
            "at",
            "maiores",
        },
        ClientID: sdk.String("molestiae"),
        DaysRequested: 799159,
        Options: &shared.AssetReportCreateRequestOptions{
            AddOns: []shared.AssetReportAddOnsEnum{
                shared.AssetReportAddOnsEnumInvestments,
                shared.AssetReportAddOnsEnumFastAssets,
                shared.AssetReportAddOnsEnumFastAssets,
                shared.AssetReportAddOnsEnumFastAssets,
            },
            ClientReportID: sdk.String("dicta"),
            IncludeFastReport: sdk.Bool(false),
            Products: []string{
                "officia",
                "occaecati",
                "fugit",
            },
            User: map[string]interface{}{
                "hic": "optio",
                "totam": "beatae",
                "commodi": "molestiae",
            },
            Webhook: sdk.String("modi"),
        },
        Secret: sdk.String("qui"),
        UserToken: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetReportCreateResponse != nil {
        // handle response
    }
}
```

## AssetReportFilter

By default, an Asset Report will contain all of the accounts on a given Item. In some cases, you may not want the Asset Report to contain all accounts. For example, you might have the end user choose which accounts are relevant in Link using the Account Select view, which you can enable in the dashboard. Or, you might always exclude certain account types or subtypes, which you can identify by using the `/accounts/get` endpoint. To narrow an Asset Report to only a subset of accounts, use the `/asset_report/filter` endpoint.

To exclude certain Accounts from an Asset Report, first use the `/asset_report/create` endpoint to create the report, then send the `asset_report_token` along with a list of `account_ids` to exclude to the `/asset_report/filter` endpoint, to create a new Asset Report which contains only a subset of the original Asset Report's data.

Because Asset Reports are immutable, calling `/asset_report/filter` does not alter the original Asset Report in any way; rather, `/asset_report/filter` creates a new Asset Report with a new token and id. Asset Reports created via `/asset_report/filter` do not contain new Asset data, and are not billed.

Plaid will fire a [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook once generation of the filtered Asset Report has completed.

</api/products/assets/#asset_reportfilter>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.AssetReportFilter(ctx, shared.AssetReportFilterRequest{
        AccountIdsToExclude: []string{
            "esse",
            "ipsum",
            "excepturi",
        },
        AssetReportToken: "aspernatur",
        ClientID: sdk.String("perferendis"),
        Secret: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetReportFilterResponse != nil {
        // handle response
    }
}
```

## AssetReportGet

The `/asset_report/get` endpoint retrieves the Asset Report in JSON format. Before calling `/asset_report/get`, you must first create the Asset Report using `/asset_report/create` (or filter an Asset Report using `/asset_report/filter`) and then wait for the [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire, indicating that the Report is ready to be retrieved.

By default, an Asset Report includes transaction descriptions as returned by the bank, as opposed to parsed and categorized by Plaid. You can also receive cleaned and categorized transactions, as well as additional insights like merchant name or location information. We call this an Asset Report with Insights. An Asset Report with Insights provides transaction category, location, and merchant information in addition to the transaction strings provided in a standard Asset Report.

If report_type was set to `VERIFICATION_OF_EMPLOYMENT` when the Asset Report was created in asset_report/create, debit transactions and transaction amounts won’t be included in the report.

To retrieve an Asset Report with Insights, call the `/asset_report/get` endpoint with `include_insights` set to `true`.

</api/products/assets/#asset_reportget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.AssetReportGet(ctx, shared.AssetReportGetRequest{
        AssetReportToken: "natus",
        ClientID: sdk.String("sed"),
        FastReport: sdk.Bool(false),
        IncludeInsights: sdk.Bool(false),
        Options: &shared.AssetReportGetRequestOptions{
            DaysToInclude: sdk.Int64(612096),
        },
        Secret: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetReportGetResponse != nil {
        // handle response
    }
}
```

## AssetReportPdfGet

The `/asset_report/pdf/get` endpoint retrieves the Asset Report in PDF format. Before calling `/asset_report/pdf/get`, you must first create the Asset Report using `/asset_report/create` (or filter an Asset Report using `/asset_report/filter`) and then wait for the [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire, indicating that the Report is ready to be retrieved.

The response to `/asset_report/pdf/get` is the PDF binary data. The `request_id`  is returned in the `Plaid-Request-ID` header.

If report_type was set to `VERIFICATION_OF_EMPLOYMENT` when the Asset Report was created in asset_report/create, debit transactions and transaction amounts won’t be included in the report.

[View a sample PDF Asset Report](https://plaid.com/documents/sample-asset-report.pdf).

</api/products/assets/#asset_reportpdfget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.AssetReportPdfGet(ctx, shared.AssetReportPDFGetRequest{
        AssetReportToken: "natus",
        ClientID: sdk.String("laboriosam"),
        Options: &shared.AssetReportPDFGetRequestOptions{
            DaysToInclude: sdk.Int64(943749),
        },
        Secret: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetReportPDFGetResponse != nil {
        // handle response
    }
}
```

## AssetReportRefresh

An Asset Report is an immutable snapshot of a user's assets. In order to "refresh" an Asset Report you created previously, you can use the `/asset_report/refresh` endpoint to create a new Asset Report based on the old one, but with the most recent data available.

The new Asset Report will contain the same Items as the original Report, as well as the same filters applied by any call to `/asset_report/filter`. By default, the new Asset Report will also use the same parameters you submitted with your original `/asset_report/create` request, but the original `days_requested` value and the values of any parameters in the `options` object can be overridden with new values. To change these arguments, simply supply new values for them in your request to `/asset_report/refresh`. Submit an empty string ("") for any previously-populated fields you would like set as empty.

</api/products/assets/#asset_reportrefresh>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.AssetReportRefresh(ctx, shared.AssetReportRefreshRequest{
        AssetReportToken: "fuga",
        ClientID: sdk.String("in"),
        DaysRequested: sdk.Int64(359508),
        Options: &shared.AssetReportRefreshRequestOptions{
            ClientReportID: sdk.String("iste"),
            User: map[string]interface{}{
                "saepe": "quidem",
                "architecto": "ipsa",
            },
            Webhook: sdk.String("reiciendis"),
        },
        Secret: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetReportRefreshResponse != nil {
        // handle response
    }
}
```

## AssetReportRemove

The `/item/remove` endpoint allows you to invalidate an `access_token`, meaning you will not be able to create new Asset Reports with it. Removing an Item does not affect any Asset Reports or Audit Copies you have already created, which will remain accessible until you remove them specifically.

The `/asset_report/remove` endpoint allows you to remove an Asset Report. Removing an Asset Report invalidates its `asset_report_token`, meaning you will no longer be able to use it to access Report data or create new Audit Copies. Removing an Asset Report does not affect the underlying Items, but does invalidate any `audit_copy_tokens` associated with the Asset Report.

</api/products/assets/#asset_reportremove>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.AssetReportRemove(ctx, shared.AssetReportRemoveRequest{
        AssetReportToken: "mollitia",
        ClientID: sdk.String("laborum"),
        Secret: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetReportRemoveResponse != nil {
        // handle response
    }
}
```

## AuthGet

The `/auth/get` endpoint returns the bank account and bank identification numbers (such as routing numbers, for US accounts) associated with an Item's checking and savings accounts, along with high-level account data and balances when available.

Note: This request may take some time to complete if `auth` was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the data.

Versioning note: In API version 2017-03-08, the schema of the `numbers` object returned by this endpoint is substantially different. For details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2018-05-22).

</api/products/auth/#authget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.AuthGet(ctx, shared.AuthGetRequest{
        AccessToken: "dolorem",
        ClientID: sdk.String("corporis"),
        Options: &shared.AuthGetRequestOptions{
            AccountIds: []string{
                "nobis",
            },
        },
        Secret: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthGetResponse != nil {
        // handle response
    }
}
```

## BankTransferBalanceGet

Use the `/bank_transfer/balance/get` endpoint to see the available balance in your bank transfer account. Debit transfers increase this balance once their status is posted. Credit transfers decrease this balance when they are created.

The transactable balance shows the amount in your account that you are able to use for transfers, and is essentially your available balance minus your minimum balance.

Note that this endpoint can only be used with FBO accounts, when using Bank Transfers in the Full Service configuration. It cannot be used on your own account when using Bank Transfers in the BTS Platform configuration.

</bank-transfers/reference#bank_transferbalanceget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.BankTransferBalanceGet(ctx, shared.BankTransferBalanceGetRequest{
        ClientID: sdk.String("omnis"),
        OriginationAccountID: sdk.String("nemo"),
        Secret: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankTransferBalanceGetResponse != nil {
        // handle response
    }
}
```

## BankTransferCancel

Use the `/bank_transfer/cancel` endpoint to cancel a bank transfer.  A transfer is eligible for cancelation if the `cancellable` property returned by `/bank_transfer/get` is `true`.

</bank-transfers/reference#bank_transfercancel>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.BankTransferCancel(ctx, shared.BankTransferCancelRequest{
        BankTransferID: "excepturi",
        ClientID: sdk.String("accusantium"),
        Secret: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankTransferCancelResponse != nil {
        // handle response
    }
}
```

## BankTransferCreate

Use the `/bank_transfer/create` endpoint to initiate a new bank transfer.

</bank-transfers/reference#bank_transfercreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.BankTransferCreate(ctx, shared.BankTransferCreateRequest{
        AccessToken: "culpa",
        AccountID: "doloribus",
        AchClass: shared.ACHClassEnumWeb.ToPointer(),
        Amount: "architecto",
        ClientID: sdk.String("mollitia"),
        CustomTag: sdk.String("dolorem"),
        Description: "culpa",
        IdempotencyKey: "consequuntur",
        IsoCurrencyCode: "repellat",
        Metadata: map[string]string{
            "occaecati": "numquam",
            "commodi": "quam",
            "molestiae": "velit",
        },
        Network: shared.BankTransferNetworkEnumSameDayAch,
        OriginationAccountID: sdk.String("quia"),
        Secret: sdk.String("quis"),
        Type: shared.BankTransferTypeEnumDebit,
        User: map[string]interface{}{
            "animi": "enim",
            "odit": "quo",
            "sequi": "tenetur",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankTransferCreateResponse != nil {
        // handle response
    }
}
```

## BankTransferEventList

Use the `/bank_transfer/event/list` endpoint to get a list of Plaid-initiated ACH or bank transfer events based on specified filter criteria. When using Auth with micro-deposit verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits. For more details, see [micro-deposit events](https://plaid.com/docs/auth/coverage/microdeposit-events/).

</api/products/auth#bank_transfereventlist>

### Example Usage

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
    res, err := s.Plaid.BankTransferEventList(ctx, shared.BankTransferEventListRequest{
        AccountID: sdk.String("ipsam"),
        BankTransferID: sdk.String("id"),
        BankTransferType: shared.BankTransferEventListBankTransferTypeEnumLessThanNilGreaterThan.ToPointer(),
        ClientID: sdk.String("aut"),
        Count: sdk.Int64(97101),
        Direction: shared.BankTransferEventListDirectionEnumOutbound.ToPointer(),
        EndDate: types.MustTimeFromString("2020-12-24T08:13:29.299Z"),
        EventTypes: []shared.BankTransferEventTypeEnum{
            shared.BankTransferEventTypeEnumReversed,
        },
        Offset: sdk.Int64(976460),
        OriginationAccountID: sdk.String("vero"),
        Secret: sdk.String("nihil"),
        StartDate: types.MustTimeFromString("2021-01-17T23:08:44.457Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankTransferEventListResponse != nil {
        // handle response
    }
}
```

## BankTransferEventSync

`/bank_transfer/event/sync` allows you to request up to the next 25 Plaid-initiated bank transfer events that happened after a specific `event_id`. When using Auth with micro-deposit verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits. For more details, see [micro-deposit events](https://www.plaid.com/docs/auth/coverage/microdeposit-events/).

</api/products/auth/#bank_transfereventsync>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.BankTransferEventSync(ctx, shared.BankTransferEventSyncRequest{
        AfterID: 55714,
        ClientID: sdk.String("omnis"),
        Count: sdk.Int64(451159),
        Secret: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankTransferEventSyncResponse != nil {
        // handle response
    }
}
```

## BankTransferGet

The `/bank_transfer/get` fetches information about the bank transfer corresponding to the given `bank_transfer_id`.

</bank-transfers/reference#bank_transferget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.BankTransferGet(ctx, shared.BankTransferGetRequest{
        BankTransferID: "perferendis",
        ClientID: sdk.String("doloremque"),
        Secret: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankTransferGetResponse != nil {
        // handle response
    }
}
```

## BankTransferList

Use the `/bank_transfer/list` endpoint to see a list of all your bank transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired bank transfers.


</bank-transfers/reference#bank_transferlist>

### Example Usage

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
    res, err := s.Plaid.BankTransferList(ctx, shared.BankTransferListRequest{
        ClientID: sdk.String("ut"),
        Count: sdk.Int64(979587),
        Direction: shared.BankTransferDirectionEnumOutbound.ToPointer(),
        EndDate: types.MustTimeFromString("2022-09-14T21:48:41.971Z"),
        Offset: sdk.Int64(480894),
        OriginationAccountID: sdk.String("dicta"),
        Secret: sdk.String("harum"),
        StartDate: types.MustTimeFromString("2022-02-13T15:01:52.114Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankTransferListResponse != nil {
        // handle response
    }
}
```

## BankTransferMigrateAccount

As an alternative to adding Items via Link, you can also use the `/bank_transfer/migrate_account` endpoint to migrate known account and routing numbers to Plaid Items.  Note that Items created in this way are not compatible with endpoints for other products, such as `/accounts/balance/get`, and can only be used with Bank Transfer endpoints.  If you require access to other endpoints, create the Item through Link instead.  Access to `/bank_transfer/migrate_account` is not enabled by default; to obtain access, contact your Plaid Account Manager.

</bank-transfers/reference#bank_transfermigrate_account>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.BankTransferMigrateAccount(ctx, shared.BankTransferMigrateAccountRequest{
        AccountNumber: "commodi",
        AccountType: "repudiandae",
        ClientID: sdk.String("quae"),
        RoutingNumber: "ipsum",
        Secret: sdk.String("quidem"),
        WireRoutingNumber: sdk.String("molestias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankTransferMigrateAccountResponse != nil {
        // handle response
    }
}
```

## BankTransferSweepGet

The `/bank_transfer/sweep/get` endpoint fetches information about the sweep corresponding to the given `sweep_id`.

</api/products/transfer/#bank_transfersweepget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.BankTransferSweepGet(ctx, shared.BankTransferSweepGetRequest{
        ClientID: sdk.String("excepturi"),
        Secret: sdk.String("pariatur"),
        SweepID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankTransferSweepGetResponse != nil {
        // handle response
    }
}
```

## BankTransferSweepList

The `/bank_transfer/sweep/list` endpoint fetches information about the sweeps matching the given filters.

</api/products/transfer/#bank_transfersweeplist>

### Example Usage

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
    res, err := s.Plaid.BankTransferSweepList(ctx, shared.BankTransferSweepListRequest{
        ClientID: sdk.String("praesentium"),
        Count: sdk.Int64(523248),
        EndTime: types.MustTimeFromString("2022-09-20T03:14:35.704Z"),
        OriginationAccountID: sdk.String("repudiandae"),
        Secret: sdk.String("sint"),
        StartTime: types.MustTimeFromString("2022-01-26T19:21:55.034Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankTransferSweepListResponse != nil {
        // handle response
    }
}
```

## CategoriesGet

Send a request to the `/categories/get` endpoint to get detailed information on categories returned by Plaid. This endpoint does not require authentication.

</api/products/transactions/#categoriesget>

### Example Usage

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
            ClientID: "YOUR_API_KEY_HERE",
            PlaidVersion: "YOUR_API_KEY_HERE",
            Secret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Plaid.CategoriesGet(ctx, map[string]interface{}{
        "enim": "consequatur",
        "est": "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CategoriesGetResponse != nil {
        // handle response
    }
}
```

## ~~CreatePaymentToken~~

The `/payment_initiation/payment/token/create` endpoint has been deprecated. New Plaid customers will be unable to use this endpoint, and existing customers are encouraged to migrate to the newer, `link_token`-based flow. The recommended flow is to provide the `payment_id` to `/link/token/create`, which returns a `link_token` used to initialize Link.

The `/payment_initiation/payment/token/create` is used to create a `payment_token`, which can then be used in Link initialization to enter a payment initiation flow. You can only use a `payment_token` once. If this attempt fails, the end user aborts the flow, or the token expires, you will need to create a new payment token. Creating a new payment token does not require end user input.

</link/maintain-legacy-integration/#creating-a-payment-token>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreatePaymentToken(ctx, shared.PaymentInitiationPaymentTokenCreateRequest{
        ClientID: sdk.String("explicabo"),
        PaymentID: "deserunt",
        Secret: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitiationPaymentTokenCreateResponse != nil {
        // handle response
    }
}
```

## CreditAssetReportFreddieMacGet

The `credit/asset_report/freddie_mac/get` endpoint retrieves the Asset Report in Freddie Mac's JSON format.

</none/>

### Example Usage

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
            ClientID: "YOUR_API_KEY_HERE",
            PlaidVersion: "YOUR_API_KEY_HERE",
            Secret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Plaid.CreditAssetReportFreddieMacGet(ctx, map[string]interface{}{
        "labore": "modi",
        "qui": "aliquid",
        "cupiditate": "quos",
        "perferendis": "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetReportFreddieGetResponse != nil {
        // handle response
    }
}
```

## CreditAuditCopyTokenCreate

Plaid can create an Audit Copy token of an Asset Report and/or Income Report to share with participating Government Sponsored Entity (GSE). If you participate in the Day 1 Certainty™ program, Plaid can supply an Audit Copy token directly to Fannie Mae on your behalf. An Audit Copy token contains the same underlying data as the Asset Report and/or Income Report (result of /credit/payroll_income/get).

Use the `/credit/audit_copy_token/create` endpoint to create an `audit_copy_token` and then pass that token to the GSE who needs access.

</api/products/income/#creditaudit_copy_tokencreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditAuditCopyTokenCreate(ctx, shared.CreditAuditCopyTokenCreateRequest{
        ClientID: sdk.String("assumenda"),
        ReportTokens: []string{
            "alias",
            "fugit",
        },
        Secret: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditAuditCopyTokenCreateResponse != nil {
        // handle response
    }
}
```

## CreditAuditCopyTokenUpdate

The `/credit/audit_copy_token/update` endpoint updates an existing  Audit Copy Token by adding the report tokens in the `report_tokens` field to the `audit_copy_token`. If the Audit Copy Token already contains a report of a certain type, it will be replaced with the token provided in the `report_tokens` field.

</none/>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditAuditCopyTokenUpdate(ctx, shared.CreditAuditCopyTokenUpdateRequest{
        AuditCopyToken: "excepturi",
        ClientID: sdk.String("tempora"),
        ReportTokens: []string{
            "tempore",
            "labore",
            "delectus",
        },
        Secret: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditAuditCopyTokenUpdateResponse != nil {
        // handle response
    }
}
```

## CreditBankEmploymentGet

`/credit/bank_employment/get` returns the employment report(s) derived from bank transaction data for a specified user.

</api/products/income/#creditbank_employmentget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditBankEmploymentGet(ctx, shared.CreditBankEmploymentGetRequest{
        ClientID: sdk.String("non"),
        Secret: sdk.String("eligendi"),
        UserToken: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditBankEmploymentGetResponse != nil {
        // handle response
    }
}
```

## CreditBankIncomeGet

`/credit/bank_income/get` returns the bank income report(s) for a specified user.

</api/products/income/#creditbank_incomeget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditBankIncomeGet(ctx, shared.CreditBankIncomeGetRequest{
        ClientID: sdk.String("aliquid"),
        Options: &shared.CreditBankIncomeGetRequestOptions{
            Count: sdk.Int64(592042),
        },
        Secret: sdk.String("necessitatibus"),
        UserToken: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditBankIncomeGetResponse != nil {
        // handle response
    }
}
```

## CreditBankIncomePdfGet

`/credit/bank_income/pdf/get` returns the most recent bank income report for a specified user in PDF format.

</api/products/income/#creditbank_incomepdfget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditBankIncomePdfGet(ctx, shared.CreditBankIncomePDFGetRequest{
        ClientID: sdk.String("officia"),
        Secret: sdk.String("dolor"),
        UserToken: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditBankIncomePDFGetResponse != nil {
        // handle response
    }
}
```

## CreditBankIncomeRefresh

`/credit/bank_income/refresh` refreshes the bank income report data for a specific user.

</api/products/income/#creditbank_incomerefresh>

### Example Usage

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
            ClientID: "YOUR_API_KEY_HERE",
            PlaidVersion: "YOUR_API_KEY_HERE",
            Secret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Plaid.CreditBankIncomeRefresh(ctx, map[string]interface{}{
        "dolorum": "in",
        "in": "illum",
        "maiores": "rerum",
        "dicta": "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditBankIncomeRefreshResponse != nil {
        // handle response
    }
}
```

## CreditEmploymentGet

`/credit/employment/get` returns a list of items with employment information from a user's payroll provider that was verified by an end user.

</api/products/income/#creditemploymentget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditEmploymentGet(ctx, shared.CreditEmploymentGetRequest{
        ClientID: sdk.String("cumque"),
        Secret: sdk.String("facere"),
        UserToken: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditEmploymentGetResponse != nil {
        // handle response
    }
}
```

## CreditFreddieMacReportsGet

The `credit/asset_report/freddie_mac/get` endpoint retrieves the Verification of Assets and Verification of Employment reports.

</none/>

### Example Usage

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
            ClientID: "YOUR_API_KEY_HERE",
            PlaidVersion: "YOUR_API_KEY_HERE",
            Secret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Plaid.CreditFreddieMacReportsGet(ctx, map[string]interface{}{
        "laborum": "accusamus",
        "non": "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditFreddieMacReportsGetResponse != nil {
        // handle response
    }
}
```

## CreditPayrollIncomeGet

This endpoint gets payroll income information for a specific user, either as a result of the user connecting to their payroll provider or uploading a pay related document.

</api/products/income/#creditpayroll_incomeget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditPayrollIncomeGet(ctx, shared.CreditPayrollIncomeGetRequest{
        ClientID: sdk.String("enim"),
        Secret: sdk.String("accusamus"),
        UserToken: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditPayrollIncomeGetResponse != nil {
        // handle response
    }
}
```

## CreditPayrollIncomePrecheck

`/credit/payroll_income/precheck` is an optional endpoint that can be called before initializing a Link session for income verification. It evaluates whether a given user is supportable by digital income verification. If the user is eligible for digital verification, that information will be associated with the user token, and in this way will generate a Link UI optimized for the end user and their specific employer. If the user cannot be confirmed as eligible, the user can still use the income verification flow, but they may be required to manually upload a paystub to verify their income.

While all request fields are optional, providing `employer` data will increase the chance of receiving a useful result.

When testing in Sandbox, you can control the results by providing special test values in the `employer` and `access_tokens` fields. `employer_good` and `employer_bad` will result in `HIGH` and `LOW` confidence values, respectively. `employer_multi` will result in a `HIGH` confidence with multiple payroll options. Likewise, `access_good` and `access_bad` will result in `HIGH` and `LOW` confidence values, respectively. Any other value for `employer` and `access_tokens` in Sandbox will result in `UNKNOWN` confidence.

</api/products/income/#creditpayroll_incomeprecheck>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditPayrollIncomePrecheck(ctx, shared.CreditPayrollIncomePrecheckRequest{
        AccessTokens: []string{
            "provident",
            "nam",
            "id",
        },
        ClientID: sdk.String("blanditiis"),
        Employer: &shared.IncomeVerificationPrecheckEmployer{
            Address: map[string]interface{}{
                "sapiente": "amet",
                "deserunt": "nisi",
                "vel": "natus",
            },
            Name: sdk.String("Fernando Aufderhar"),
            TaxID: sdk.String("distinctio"),
            URL: sdk.String("id"),
        },
        PayrollInstitution: &shared.IncomeVerificationPrecheckPayrollInstitution{
            Name: sdk.String("Jamie Hoppe"),
        },
        Secret: sdk.String("eum"),
        UsMilitaryInfo: &shared.IncomeVerificationPrecheckMilitaryInfo{
            Branch: sdk.String("vero"),
            IsActiveDuty: sdk.Bool(false),
        },
        UserToken: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditPayrollIncomePrecheckResponse != nil {
        // handle response
    }
}
```

## CreditPayrollIncomeRefresh

`/credit/payroll_income/refresh` refreshes a given digital payroll income verification.

</api/products/income/#creditpayroll_incomerefresh>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditPayrollIncomeRefresh(ctx, shared.CreditPayrollIncomeRefreshRequest{
        ClientID: sdk.String("architecto"),
        Options: map[string]interface{}{
            "et": "excepturi",
            "ullam": "provident",
        },
        Secret: sdk.String("quos"),
        UserToken: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditPayrollIncomeRefreshResponse != nil {
        // handle response
    }
}
```

## CreditRelayCreate

Plaid can share an Asset Report directly with a participating third party on your behalf. The shared Asset Report is the exact same Asset Report originally created in `/asset_report/create`.

To grant a third party access to an Asset Report, use the `/credit/relay/create` endpoint to create a `relay_token` and then pass that token to your third party. Each third party has its own `secondary_client_id`; for example, `ce5bd328dcd34123456`. You'll need to create a separate `relay_token` for each third party that needs access to the report on your behalf.

</api/products/assets/#creditrelaycreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditRelayCreate(ctx, shared.CreditRelayCreateRequest{
        ClientID: sdk.String("accusantium"),
        ReportTokens: []string{
            "reiciendis",
            "mollitia",
            "ad",
        },
        SecondaryClientID: "eum",
        Secret: sdk.String("dolor"),
        Webhook: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditRelayCreateResponse != nil {
        // handle response
    }
}
```

## CreditRelayGet

`/credit/relay/get` allows third parties to receive a report that was shared with them, using a `relay_token` that was created by the report owner.

</api/products/assets/#creditrelayget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditRelayGet(ctx, shared.CreditRelayGetRequest{
        ClientID: sdk.String("odit"),
        RelayToken: "nemo",
        ReportType: shared.ReportTypeEnumAssets,
        Secret: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetReportGetResponse != nil {
        // handle response
    }
}
```

## CreditRelayRefresh

The `/credit/relay/refresh` endpoint allows third parties to refresh a report that was relayed to them, using a `relay_token` that was created by the report owner. A new report will be created with the original report parameters, but with the most recent data available based on the `days_requested` value of the original report.

</api/products/assets/#creditrelayrefresh>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditRelayRefresh(ctx, shared.CreditRelayRefreshRequest{
        ClientID: sdk.String("doloribus"),
        RelayToken: "debitis",
        ReportType: shared.ReportTypeEnumAssets,
        Secret: sdk.String("maxime"),
        Webhook: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditRelayRefreshResponse != nil {
        // handle response
    }
}
```

## CreditRelayRemove

The `/credit/relay/remove` endpoint allows you to invalidate a `relay_token`. The third party holding the token will no longer be able to access or refresh the reports which the `relay_token` gives access to. The original report, associated Items, and other relay tokens that provide access to the same report are not affected and will remain accessible after removing the given `relay_token`.

</api/products/assets/#creditrelayremove>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditRelayRemove(ctx, shared.CreditRelayRemoveRequest{
        ClientID: sdk.String("facilis"),
        RelayToken: "in",
        Secret: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditRelayRemoveResponse != nil {
        // handle response
    }
}
```

## CreditReportAuditCopyRemove

The `/credit/audit_copy_token/remove` endpoint allows you to remove an Audit Copy. Removing an Audit Copy invalidates the `audit_copy_token` associated with it, meaning both you and any third parties holding the token will no longer be able to use it to access Report data. Items associated with the Report data and other Audit Copies of it are not affected and will remain accessible after removing the given Audit Copy.

</api/products/income/#creditaudit_copy_tokenremove>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditReportAuditCopyRemove(ctx, shared.CreditAuditCopyTokenRemoveRequest{
        AuditCopyToken: "architecto",
        ClientID: sdk.String("repudiandae"),
        Secret: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditAuditCopyTokenRemoveResponse != nil {
        // handle response
    }
}
```

## CreditSessionsGet

This endpoint can be used for your end users after they complete the Link flow. This endpoint returns a list of Link sessions that your user completed, where each session includes the results from the Link flow.

These results include details about the Item that was created and some product related metadata (showing, for example, whether the user finished the bank income verification step).

</api/products/income/#creditsessionsget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.CreditSessionsGet(ctx, shared.CreditSessionsGetRequest{
        ClientID: sdk.String("expedita"),
        Secret: sdk.String("nihil"),
        UserToken: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditSessionsGetResponse != nil {
        // handle response
    }
}
```

## DashboardUserGet

Retrieve information about a dashboard user.

</api/products/monitor/#dashboard_userget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.DashboardUserGet(ctx, shared.DashboardUserGetRequest{
        ClientID: sdk.String("quibusdam"),
        DashboardUserID: "54350110fedcbaf01234ffee",
        Secret: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DashboardUserGetResponse != nil {
        // handle response
    }
}
```

## DashboardUserList

List all dashboard users associated with your account.

</api/products/monitor/#dashboard_userlist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.DashboardUserList(ctx, shared.DashboardUserListRequest{
        ClientID: sdk.String("saepe"),
        Cursor: sdk.String("eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM"),
        Secret: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DashboardUserListResponse != nil {
        // handle response
    }
}
```

## DepositSwitchAltCreate

This endpoint provides an alternative to `/deposit_switch/create` for customers who have not yet fully integrated with Plaid Exchange. Like `/deposit_switch/create`, it creates a deposit switch entity that will be persisted throughout the lifecycle of the switch.

</deposit-switch/reference#deposit_switchaltcreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.DepositSwitchAltCreate(ctx, shared.DepositSwitchAltCreateRequest{
        ClientID: sdk.String("accusantium"),
        CountryCode: shared.DepositSwitchAltCreateRequestCountryCodeEnumUs.ToPointer(),
        Options: &shared.DepositSwitchCreateRequestOptions{
            TransactionItemAccessTokens: []string{
                "natus",
                "magni",
                "sunt",
            },
            Webhook: sdk.String("quo"),
        },
        Secret: sdk.String("illum"),
        TargetAccount: map[string]interface{}{
            "maxime": "ea",
            "excepturi": "odit",
            "ea": "accusantium",
            "ab": "maiores",
        },
        TargetUser: map[string]interface{}{
            "ipsam": "voluptate",
            "autem": "nam",
            "eaque": "pariatur",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DepositSwitchAltCreateResponse != nil {
        // handle response
    }
}
```

## DepositSwitchCreate

This endpoint creates a deposit switch entity that will be persisted throughout the lifecycle of the switch.

</deposit-switch/reference#deposit_switchcreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.DepositSwitchCreate(ctx, shared.DepositSwitchCreateRequest{
        ClientID: sdk.String("nemo"),
        CountryCode: shared.DepositSwitchCreateRequestCountryCodeEnumCa.ToPointer(),
        Options: &shared.DepositSwitchCreateRequestOptions{
            TransactionItemAccessTokens: []string{
                "fugiat",
            },
            Webhook: sdk.String("amet"),
        },
        Secret: sdk.String("aut"),
        TargetAccessToken: "cumque",
        TargetAccountID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DepositSwitchCreateResponse != nil {
        // handle response
    }
}
```

## DepositSwitchGet

This endpoint returns information related to how the user has configured their payroll allocation and the state of the switch. You can use this information to build logic related to the user's direct deposit allocation preferences.

</deposit-switch/reference#deposit_switchget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.DepositSwitchGet(ctx, shared.DepositSwitchGetRequest{
        ClientID: sdk.String("hic"),
        DepositSwitchID: "libero",
        Secret: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DepositSwitchGetResponse != nil {
        // handle response
    }
}
```

## DepositSwitchTokenCreate

In order for the end user to take action, you will need to create a public token representing the deposit switch. This token is used to initialize Link. It can be used one time and expires after 30 minutes.


</deposit-switch/reference#deposit_switchtokencreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.DepositSwitchTokenCreate(ctx, shared.DepositSwitchTokenCreateRequest{
        ClientID: sdk.String("dolores"),
        DepositSwitchID: "quis",
        Secret: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DepositSwitchTokenCreateResponse != nil {
        // handle response
    }
}
```

## EmployersSearch

`/employers/search` allows you the ability to search Plaid’s database of known employers, for use with Deposit Switch. You can use this endpoint to look up a user's employer in order to confirm that they are supported. Users with non-supported employers can then be routed out of the Deposit Switch flow.

The data in the employer database is currently limited. As the Deposit Switch and Income products progress through their respective beta periods, more employers are being regularly added. Because the employer database is frequently updated, we recommend that you do not cache or store data from this endpoint for more than a day.

</api/employers/#employerssearch>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.EmployersSearch(ctx, shared.EmployersSearchRequest{
        ClientID: sdk.String("dignissimos"),
        Products: []string{
            "quis",
        },
        Query: "nesciunt",
        Secret: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployersSearchResponse != nil {
        // handle response
    }
}
```

## ~~EmploymentVerificationGet~~

`/employment/verification/get` returns a list of employments through a user payroll that was verified by an end user.

This endpoint has been deprecated; new integrations should use `/credit/employment/get` instead.

</api/products/income/#employmentverificationget>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.EmploymentVerificationGet(ctx, shared.EmploymentVerificationGetRequest{
        AccessToken: "perferendis",
        ClientID: sdk.String("dolores"),
        Secret: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmploymentVerificationGetResponse != nil {
        // handle response
    }
}
```

## FdxNotifications

A generic webhook receiver endpoint for FDX Event Notifications

</api/fdx/notifications/#post>

### Example Usage

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
    res, err := s.Plaid.FdxNotifications(ctx, shared.FDXNotification{
        Category: shared.FDXNotificationCategoryEnumFraud,
        NotificationID: "dolor",
        NotificationPayload: shared.FDXNotificationPayload{
            CustomFields: &shared.FDXFiAttribute{
                Name: sdk.String("Dean Welch"),
                Value: sdk.String("facilis"),
            },
            ID: sdk.String("90c28909-b3fe-449a-8d9c-bf48633323f9"),
            IDType: shared.FDXNotificationPayloadIDTypeEnumMaintenance.ToPointer(),
        },
        Priority: shared.FDXNotificationPriorityEnumMedium.ToPointer(),
        Publisher: shared.FDXParty{
            HomeURI: sdk.String("http://wild-crumb.net"),
            LogoURI: sdk.String("http://both-background.com"),
            Name: "Viola Hahn",
            RegisteredEntityID: sdk.String("voluptatibus"),
            RegisteredEntityName: sdk.String("voluptas"),
            Registry: shared.FDXPartyRegistryEnumIcann.ToPointer(),
            Type: shared.FDXPartyTypeEnumDataProvider,
        },
        SentOn: types.MustTimeFromString("2021-07-15T14:46:41.375Z"),
        Severity: shared.FDXNotificationSeverityEnumWarning.ToPointer(),
        Subscriber: &shared.FDXParty{
            HomeURI: sdk.String("http://thoughtful-barracks.net"),
            LogoURI: sdk.String("https://late-in-laws.net"),
            Name: "Arturo Treutel",
            RegisteredEntityID: sdk.String("nihil"),
            RegisteredEntityName: sdk.String("ipsum"),
            Registry: shared.FDXPartyRegistryEnumGleif.ToPointer(),
            Type: shared.FDXPartyTypeEnumIndividual,
        },
        Type: shared.FDXNotificationTypeEnumPlannedOutage,
        URL: &shared.FDXHateoasLink{
            Action: shared.FDXHateoasLinkActionEnumPost.ToPointer(),
            Href: "https://api.fi.com/fdx/v4/accounts/12345",
            Rel: sdk.String("aspernatur"),
            Types: []shared.FDXContentTypesEnum{
                shared.FDXContentTypesEnumImageGif,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IdentityGet

The `/identity/get` endpoint allows you to retrieve various account holder information on file with the financial institution, including names, emails, phone numbers, and addresses. Only name data is guaranteed to be returned; other fields will be empty arrays if not provided by the institution.

This request may take some time to complete if identity was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the data.

Note: In API versions 2018-05-22 and earlier, the `owners` object is not returned, and instead identity information is returned in the top level `identity` object. For more details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2019-05-29).

</api/products/identity/#identityget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.IdentityGet(ctx, shared.IdentityGetRequest{
        AccessToken: "optio",
        ClientID: sdk.String("accusamus"),
        Options: &shared.IdentityGetRequestOptions{
            AccountIds: []string{
                "saepe",
                "suscipit",
            },
        },
        Secret: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityGetResponse != nil {
        // handle response
    }
}
```

## IdentityMatch

The `/identity/match` endpoint generates a match score, which indicates how well the provided identity data matches the identity information on file with the account holder's financial institution.

This request may take some time to complete if Identity was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the data.

</api/products/identity/#identitymatch>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.IdentityMatch(ctx, shared.IdentityMatchRequest{
        AccessToken: "provident",
        ClientID: sdk.String("minima"),
        IdentityVerificationID: sdk.String("idv_52xR9LKo77r1Np"),
        Options: &shared.IdentityMatchRequestOptions{
            AccountIds: []string{
                "totam",
                "similique",
                "alias",
                "at",
            },
        },
        Secret: sdk.String("quaerat"),
        User: map[string]interface{}{
            "vel": "quod",
            "officiis": "qui",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityMatchResponse != nil {
        // handle response
    }
}
```

## IdentityVerificationCreate

Create a new Identity Verification for the user specified by the `client_user_id` field. The requirements and behavior of the verification are determined by the `template_id` provided.
If you don't know whether the associated user already has an active Identity Verification, you can specify `"is_idempotent": true` in the request body. With idempotency enabled, a new Identity Verification will only be created if one does not already exist for the associated `client_user_id` and `template_id`. If an Identity Verification is found, it will be returned unmodified with an `200 OK` HTTP status code.


</api/products/identity-verification/#identity_verificationcreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.IdentityVerificationCreate(ctx, shared.IdentityVerificationCreateRequest{
        ClientID: sdk.String("dolorum"),
        GaveConsent: true,
        IsIdempotent: sdk.Bool(true),
        IsShareable: true,
        Secret: sdk.String("a"),
        TemplateID: "idvtmp_4FrXJvfQU3zGUR",
        User: map[string]interface{}{
            "harum": "iusto",
            "ipsum": "quisquam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityVerificationCreateResponse != nil {
        // handle response
    }
}
```

## IdentityVerificationGet

Retrieve a previously created identity verification.

</api/products/identity-verification/#identity_verificationget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.IdentityVerificationGet(ctx, shared.IdentityVerificationGetRequest{
        ClientID: sdk.String("tenetur"),
        IdentityVerificationID: "idv_52xR9LKo77r1Np",
        Secret: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityVerificationGetResponse != nil {
        // handle response
    }
}
```

## IdentityVerificationList

Filter and list Identity Verifications created by your account

</api/products/identity-verification/#identity_verificationlist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.IdentityVerificationList(ctx, shared.IdentityVerificationListRequest{
        ClientID: sdk.String("tempore"),
        ClientUserID: "your-db-id-3b24110",
        Cursor: sdk.String("eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM"),
        Secret: sdk.String("accusamus"),
        TemplateID: "idvtmp_4FrXJvfQU3zGUR",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityVerificationListResponse != nil {
        // handle response
    }
}
```

## IdentityVerificationRetry

Allow a customer to retry their identity verification

</api/products/identity-verification/#identity_verificationretry>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.IdentityVerificationRetry(ctx, shared.IdentityVerificationRetryRequest{
        ClientID: sdk.String("numquam"),
        ClientUserID: "your-db-id-3b24110",
        Secret: sdk.String("enim"),
        Steps: &shared.IdentityVerificationRetryRequestStepsObject{
            DocumentaryVerification: false,
            KycCheck: false,
            SelfieCheck: false,
            VerifySms: false,
        },
        Strategy: shared.StrategyEnumReset,
        TemplateID: "idvtmp_4FrXJvfQU3zGUR",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityVerificationRetryResponse != nil {
        // handle response
    }
}
```

## ~~IncomeVerificationCreate~~

`/income/verification/create` begins the income verification process by returning an `income_verification_id`. You can then provide the `income_verification_id` to `/link/token/create` under the `income_verification` parameter in order to create a Link instance that will prompt the user to go through the income verification flow. Plaid will fire an `INCOME` webhook once the user completes the Payroll Income flow, or when the uploaded documents in the Document Income flow have finished processing. 

</api/products/income/#incomeverificationcreate>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.IncomeVerificationCreate(ctx, shared.IncomeVerificationCreateRequest{
        ClientID: sdk.String("sapiente"),
        Options: &shared.IncomeVerificationCreateRequestOptions{
            AccessTokens: []string{
                "nihil",
                "sit",
                "expedita",
            },
        },
        PrecheckID: sdk.String("neque"),
        Secret: sdk.String("sed"),
        Webhook: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IncomeVerificationCreateResponse != nil {
        // handle response
    }
}
```

## ~~IncomeVerificationDocumentsDownload~~

`/income/verification/documents/download` provides the ability to download the source documents associated with the verification.

If Document Income was used, the documents will be those the user provided in Link. For Payroll Income, the most recent files available
for download from the payroll provider will be available from this endpoint.

The response to `/income/verification/documents/download` is a ZIP file in binary data. If a `document_id` is passed, a single document will be contained in this file.
If not, the response will contain all documents associated with the verification.

The `request_id` is returned in the `Plaid-Request-ID` header.

</api/products/income/#incomeverificationdocumentsdownload>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.IncomeVerificationDocumentsDownload(ctx, shared.IncomeVerificationDocumentsDownloadRequest{
        AccessToken: sdk.String("libero"),
        ClientID: sdk.String("voluptas"),
        DocumentID: sdk.String("deserunt"),
        IncomeVerificationID: sdk.String("quam"),
        Secret: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IncomeVerificationDocumentsDownload200ApplicationZipBinaryString != nil {
        // handle response
    }
}
```

## ~~IncomeVerificationPaystubsGet~~

`/income/verification/paystubs/get` returns the information collected from the paystubs that were used to verify an end user's income. It can be called once the status of the verification has been set to `VERIFICATION_STATUS_PROCESSING_COMPLETE`, as reported by the `INCOME: verification_status` webhook. Attempting to call the endpoint before verification has been completed will result in an error.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/get` instead.

</api/products/income/#incomeverificationpaystubsget>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.IncomeVerificationPaystubsGet(ctx, shared.IncomeVerificationPaystubsGetRequest{
        AccessToken: sdk.String("incidunt"),
        ClientID: sdk.String("qui"),
        IncomeVerificationID: sdk.String("cupiditate"),
        Secret: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IncomeVerificationPaystubsGetResponse != nil {
        // handle response
    }
}
```

## ~~IncomeVerificationPrecheck~~

`/income/verification/precheck` is an optional endpoint that can be called before initializing a Link session for income verification. It evaluates whether a given user is supportable by digital income verification and returns a `precheck_id` that can be provided to `/link/token/create`. If the user is eligible for digital verification, providing the `precheck_id` in this way will generate a Link UI optimized for the end user and their specific employer. If the user cannot be confirmed as eligible, the `precheck_id` can still be provided to `/link/token/create` and the user can still use the income verification flow, but they may be required to manually upload a paystub to verify their income.

While all request fields are optional, providing either `employer` or `transactions_access_tokens` data will increase the chance of receiving a useful result.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/precheck` instead.

</api/products/income/#incomeverificationprecheck>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.IncomeVerificationPrecheck(ctx, shared.IncomeVerificationPrecheckRequest{
        ClientID: sdk.String("pariatur"),
        Employer: &shared.IncomeVerificationPrecheckEmployer{
            Address: map[string]interface{}{
                "dicta": "laborum",
                "totam": "incidunt",
                "aspernatur": "dolores",
            },
            Name: sdk.String("Cesar Hyatt"),
            TaxID: sdk.String("temporibus"),
            URL: sdk.String("qui"),
        },
        PayrollInstitution: &shared.IncomeVerificationPrecheckPayrollInstitution{
            Name: sdk.String("Beverly Cummerata II"),
        },
        Secret: sdk.String("nam"),
        TransactionsAccessToken: sdk.String("hic"),
        TransactionsAccessTokens: []string{
            "cumque",
        },
        UsMilitaryInfo: &shared.IncomeVerificationPrecheckMilitaryInfo{
            Branch: sdk.String("soluta"),
            IsActiveDuty: sdk.Bool(false),
        },
        User: &shared.IncomeVerificationPrecheckUser{
            EmailAddress: sdk.String("nobis"),
            FirstName: sdk.String("August"),
            HomeAddress: map[string]interface{}{
                "ipsum": "veritatis",
                "nobis": "quos",
                "tempore": "cupiditate",
                "aperiam": "delectus",
            },
            LastName: sdk.String("Durgan"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IncomeVerificationPrecheckResponse != nil {
        // handle response
    }
}
```

## ~~IncomeVerificationTaxformsGet~~

`/income/verification/taxforms/get` returns the information collected from forms that were used to verify an end user''s income. It can be called once the status of the verification has been set to `VERIFICATION_STATUS_PROCESSING_COMPLETE`, as reported by the `INCOME: verification_status` webhook. Attempting to call the endpoint before verification has been completed will result in an error.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/get` instead.

</api/products/income/#incomeverificationtaxformsget>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

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
            ClientID: "YOUR_API_KEY_HERE",
            PlaidVersion: "YOUR_API_KEY_HERE",
            Secret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Plaid.IncomeVerificationTaxformsGet(ctx, map[string]interface{}{
        "labore": "adipisci",
        "dolorum": "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IncomeVerificationTaxformsGetResponse != nil {
        // handle response
    }
}
```

## InstitutionsGet

Returns a JSON response containing details on all financial institutions currently supported by Plaid. Because Plaid supports thousands of institutions, results are paginated.

If there is no overlap between an institution’s enabled products and a client’s enabled products, then the institution will be filtered out from the response. As a result, the number of institutions returned may not match the count specified in the call.

</api/institutions/#institutionsget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.InstitutionsGet(ctx, shared.InstitutionsGetRequest{
        ClientID: sdk.String("quae"),
        Count: 16429,
        CountryCodes: []shared.CountryCodeEnum{
            shared.CountryCodeEnumLv,
            shared.CountryCodeEnumUs,
            shared.CountryCodeEnumNo,
        },
        Offset: 833038,
        Options: &shared.InstitutionsGetRequestOptions{
            IncludeAuthMetadata: sdk.Bool(false),
            IncludeOptionalMetadata: sdk.Bool(false),
            IncludePaymentInitiationMetadata: sdk.Bool(false),
            Oauth: sdk.Bool(false),
            Products: []shared.ProductsEnum{
                shared.ProductsEnumSignal,
                shared.ProductsEnumLiabilities,
                shared.ProductsEnumDepositSwitch,
                shared.ProductsEnumIncome,
            },
            RoutingNumbers: []string{
                "quae",
            },
        },
        Secret: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstitutionsGetResponse != nil {
        // handle response
    }
}
```

## InstitutionsGetByID

Returns a JSON response containing details on a specified financial institution currently supported by Plaid.

Versioning note: API versions 2019-05-29 and earlier allow use of the `public_key` parameter instead of the `client_id` and `secret` to authenticate to this endpoint. The `public_key` has been deprecated; all customers are encouraged to use `client_id` and `secret` instead.


</api/institutions/#institutionsget_by_id>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.InstitutionsGetByID(ctx, shared.InstitutionsGetByIDRequest{
        ClientID: sdk.String("odio"),
        CountryCodes: []shared.CountryCodeEnum{
            shared.CountryCodeEnumPt,
            shared.CountryCodeEnumEe,
            shared.CountryCodeEnumLt,
        },
        InstitutionID: "omnis",
        Options: &shared.InstitutionsGetByIDRequestOptions{
            IncludeAuthMetadata: sdk.Bool(false),
            IncludeOptionalMetadata: sdk.Bool(false),
            IncludePaymentInitiationMetadata: sdk.Bool(false),
            IncludeStatus: sdk.Bool(false),
        },
        Secret: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstitutionsGetByIDResponse != nil {
        // handle response
    }
}
```

## InstitutionsSearch

Returns a JSON response containing details for institutions that match the query parameters, up to a maximum of ten institutions per query.

Versioning note: API versions 2019-05-29 and earlier allow use of the `public_key` parameter instead of the `client_id` and `secret` parameters to authenticate to this endpoint. The `public_key` parameter has since been deprecated; all customers are encouraged to use `client_id` and `secret` instead.


</api/institutions/#institutionssearch>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.InstitutionsSearch(ctx, shared.InstitutionsSearchRequest{
        ClientID: sdk.String("ipsum"),
        CountryCodes: []shared.CountryCodeEnum{
            shared.CountryCodeEnumDe,
            shared.CountryCodeEnumNl,
            shared.CountryCodeEnumLt,
            shared.CountryCodeEnumPt,
        },
        Options: &shared.InstitutionsSearchRequestOptions{
            IncludeAuthMetadata: sdk.Bool(false),
            IncludeOptionalMetadata: sdk.Bool(false),
            IncludePaymentInitiationMetadata: sdk.Bool(false),
            Oauth: sdk.Bool(false),
            PaymentInitiation: map[string]interface{}{
                "hic": "distinctio",
                "quod": "odio",
            },
        },
        Products: []shared.ProductsEnum{
            shared.ProductsEnumDepositSwitch,
            shared.ProductsEnumEmployment,
            shared.ProductsEnumTransactions,
        },
        Query: "dolore",
        Secret: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstitutionsSearchResponse != nil {
        // handle response
    }
}
```

## InvestmentsHoldingsGet

The `/investments/holdings/get` endpoint allows developers to receive user-authorized stock position data for `investment`-type accounts.

</api/products/investments/#investmentsholdingsget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.InvestmentsHoldingsGet(ctx, shared.InvestmentsHoldingsGetRequest{
        AccessToken: "illum",
        ClientID: sdk.String("sequi"),
        Options: &shared.InvestmentHoldingsGetRequestOptions{
            AccountIds: []string{
                "impedit",
                "aut",
                "voluptatibus",
            },
        },
        Secret: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvestmentsHoldingsGetResponse != nil {
        // handle response
    }
}
```

## InvestmentsTransactionsGet

The `/investments/transactions/get` endpoint allows developers to retrieve up to 24 months of user-authorized transaction data for investment accounts.

Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.

Due to the potentially large number of investment transactions associated with an Item, results are paginated. Manipulate the count and offset parameters in conjunction with the `total_investment_transactions` response body field to fetch all available investment transactions.

Note that Investments does not have a webhook to indicate when initial transaction data has loaded. Instead, if transactions data is not ready when `/investments/transactions/get` is first called, Plaid will wait for the data. For this reason, calling `/investments/transactions/get` immediately after Link may take up to one to two minutes to return.

</api/products/investments/#investmentstransactionsget>

### Example Usage

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
    res, err := s.Plaid.InvestmentsTransactionsGet(ctx, shared.InvestmentsTransactionsGetRequest{
        AccessToken: "nulla",
        ClientID: sdk.String("fugit"),
        EndDate: types.MustDateFromString("2020-01-21"),
        Options: &shared.InvestmentsTransactionsGetRequestOptions{
            AccountIds: []string{
                "iusto",
                "eligendi",
                "ducimus",
                "alias",
            },
            Count: sdk.Int64(639473),
            Offset: sdk.Int64(269479),
        },
        Secret: sdk.String("ipsam"),
        StartDate: types.MustDateFromString("2022-11-12"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvestmentsTransactionsGetResponse != nil {
        // handle response
    }
}
```

## ItemAccessTokenInvalidate

By default, the `access_token` associated with an Item does not expire and should be stored in a persistent, secure manner.

You can use the `/item/access_token/invalidate` endpoint to rotate the `access_token` associated with an Item. The endpoint returns a new `access_token` and immediately invalidates the previous `access_token`.


</api/tokens/#itemaccess_tokeninvalidate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ItemAccessTokenInvalidate(ctx, shared.ItemAccessTokenInvalidateRequest{
        AccessToken: "vel",
        ClientID: sdk.String("possimus"),
        Secret: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemAccessTokenInvalidateResponse != nil {
        // handle response
    }
}
```

## ItemActivityList

List a historical log of user consent events

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ItemActivityList(ctx, shared.ItemActivityListRequest{
        AccessToken: sdk.String("ratione"),
        ClientID: sdk.String("ex"),
        Count: sdk.Int64(511319),
        Cursor: sdk.String("dicta"),
        Secret: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemActivityListResponse != nil {
        // handle response
    }
}
```

## ItemApplicationList

List a user’s connected applications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ItemApplicationList(ctx, shared.ItemApplicationListRequest{
        AccessToken: sdk.String("maiores"),
        ClientID: sdk.String("quasi"),
        Secret: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemApplicationListResponse != nil {
        // handle response
    }
}
```

## ItemApplicationScopesUpdate

Enable consumers to update product access on selected accounts for an application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ItemApplicationScopesUpdate(ctx, shared.ItemApplicationScopesUpdateRequest{
        AccessToken: "nulla",
        ApplicationID: "excepturi",
        ClientID: sdk.String("voluptatibus"),
        Context: shared.ScopesContextEnumEnrollment,
        Scopes: shared.Scopes{
            Accounts: []shared.AccountAccess{
                shared.AccountAccess{
                    AccountProductAccess: map[string]interface{}{
                        "saepe": "ea",
                        "impedit": "corporis",
                        "veniam": "aliquid",
                        "inventore": "magnam",
                    },
                    Authorized: sdk.Bool(false),
                    UniqueID: "ea",
                },
                shared.AccountAccess{
                    AccountProductAccess: map[string]interface{}{
                        "consectetur": "recusandae",
                        "aspernatur": "minima",
                        "eaque": "a",
                        "libero": "aut",
                    },
                    Authorized: sdk.Bool(false),
                    UniqueID: "aut",
                },
                shared.AccountAccess{
                    AccountProductAccess: map[string]interface{}{
                        "impedit": "aliquam",
                        "fugit": "accusamus",
                        "inventore": "non",
                    },
                    Authorized: sdk.Bool(false),
                    UniqueID: "et",
                },
                shared.AccountAccess{
                    AccountProductAccess: map[string]interface{}{
                        "laborum": "placeat",
                        "velit": "eum",
                        "autem": "nobis",
                    },
                    Authorized: sdk.Bool(false),
                    UniqueID: "quas",
                },
            },
            NewAccounts: sdk.Bool(false),
            ProductAccess: map[string]interface{}{
                "nulla": "voluptas",
                "libero": "quasi",
                "tempora": "numquam",
                "explicabo": "provident",
            },
        },
        Secret: sdk.String("ipsa"),
        State: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemApplicationScopesUpdateResponse != nil {
        // handle response
    }
}
```

## ItemCreatePublicToken

Note: As of July 2020, the `/item/public_token/create` endpoint is deprecated. Instead, use `/link/token/create` with an `access_token` to create a Link token for use with [update mode](https://plaid.com/docs/link/update-mode).

If you need your user to take action to restore or resolve an error associated with an Item, generate a public token with the `/item/public_token/create` endpoint and then initialize Link with that `public_token`.

A `public_token` is one-time use and expires after 30 minutes. You use a `public_token` to initialize Link in [update mode](https://plaid.com/docs/link/update-mode) for a particular Item. You can generate a `public_token` for an Item even if you did not use Link to create the Item originally.

The `/item/public_token/create` endpoint is **not** used to create your initial `public_token`. If you have not already received an `access_token` for a specific Item, use Link to obtain your `public_token` instead. See the [Quickstart](https://plaid.com/docs/quickstart) for more information.

</api/tokens/#itempublic_tokencreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ItemCreatePublicToken(ctx, shared.ItemPublicTokenCreateRequest{
        AccessToken: "magnam",
        ClientID: sdk.String("odio"),
        Secret: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemPublicTokenCreateResponse != nil {
        // handle response
    }
}
```

## ItemGet

Returns information about the status of an Item.

</api/items/#itemget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ItemGet(ctx, shared.ItemGetRequest{
        AccessToken: "esse",
        ClientID: sdk.String("esse"),
        Secret: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemGetResponse != nil {
        // handle response
    }
}
```

## ItemImport

`/item/import` creates an Item via your Plaid Exchange Integration and returns an `access_token`. As part of an `/item/import` request, you will include a User ID (`user_auth.user_id`) and Authentication Token (`user_auth.auth_token`) that enable data aggregation through your Plaid Exchange API endpoints. These authentication principals are to be chosen by you.

Upon creating an Item via `/item/import`, Plaid will automatically begin an extraction of that Item through the Plaid Exchange infrastructure you have already integrated. This will automatically generate the Plaid native account ID for the account the user will switch their direct deposit to (`target_account_id`).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ItemImport(ctx, shared.ItemImportRequest{
        ClientID: sdk.String("fuga"),
        Options: &shared.ItemImportRequestOptions{
            Webhook: sdk.String("reprehenderit"),
        },
        Products: []shared.ProductsEnum{
            shared.ProductsEnumEmployment,
            shared.ProductsEnumLiabilities,
            shared.ProductsEnumIdentityVerification,
        },
        Secret: sdk.String("suscipit"),
        UserAuth: shared.ItemImportRequestUserAuth{
            AuthToken: "assumenda",
            UserID: "eos",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemImportResponse != nil {
        // handle response
    }
}
```

## ItemPublicTokenExchange

Exchange a Link `public_token` for an API `access_token`. Link hands off the `public_token` client-side via the `onSuccess` callback once a user has successfully created an Item. The `public_token` is ephemeral and expires after 30 minutes. An `access_token` does not expire, but can be revoked by calling `/item/remove`.

The response also includes an `item_id` that should be stored with the `access_token`. The `item_id` is used to identify an Item in a webhook. The `item_id` can also be retrieved by making an `/item/get` request.

</api/tokens/#itempublic_tokenexchange>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ItemPublicTokenExchange(ctx, shared.ItemPublicTokenExchangeRequest{
        ClientID: sdk.String("praesentium"),
        PublicToken: "quisquam",
        Secret: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemPublicTokenExchangeResponse != nil {
        // handle response
    }
}
```

## ItemRemove

The `/item/remove` endpoint allows you to remove an Item. Once removed, the `access_token`, as well as any processor tokens or bank account tokens associated with the Item, is no longer valid and cannot be used to access any data that was associated with the Item.

Note that in the Development environment, issuing an `/item/remove`  request will not decrement your live credential count. To increase your credential account in Development, contact Support.

Also note that for certain OAuth-based institutions, an Item removed via `/item/remove` may still show as an active connection in the institution's OAuth permission manager.

API versions 2019-05-29 and earlier return a `removed` boolean as part of the response.

</api/items/#itemremove>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ItemRemove(ctx, shared.ItemRemoveRequest{
        AccessToken: "ipsa",
        ClientID: sdk.String("id"),
        Secret: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemRemoveResponse != nil {
        // handle response
    }
}
```

## ItemWebhookUpdate

The POST `/item/webhook/update` allows you to update the webhook URL associated with an Item. This request triggers a [`WEBHOOK_UPDATE_ACKNOWLEDGED`](https://plaid.com/docs/api/items/#webhook_update_acknowledged) webhook to the newly specified webhook URL.

</api/items/#itemwebhookupdate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ItemWebhookUpdate(ctx, shared.ItemWebhookUpdateRequest{
        AccessToken: "neque",
        ClientID: sdk.String("quo"),
        Secret: sdk.String("illum"),
        Webhook: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemWebhookUpdateResponse != nil {
        // handle response
    }
}
```

## LiabilitiesGet

The `/liabilities/get` endpoint returns various details about an Item with loan or credit accounts. Liabilities data is available primarily for US financial institutions, with some limited coverage of Canadian institutions. Currently supported account types are account type `credit` with account subtype `credit card` or `paypal`, and account type `loan` with account subtype `student` or `mortgage`. To limit accounts listed in Link to types and subtypes supported by Liabilities, you can use the `account_filters` parameter when [creating a Link token](https://plaid.com/docs/api/tokens/#linktokencreate).

The types of information returned by Liabilities can include balances and due dates, loan terms, and account details such as original loan amount and guarantor. Data is refreshed approximately once per day; the latest data can be retrieved by calling `/liabilities/get`.

Note: This request may take some time to complete if `liabilities` was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the additional data.

</api/products/liabilities/#liabilitiesget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.LiabilitiesGet(ctx, shared.LiabilitiesGetRequest{
        AccessToken: "fuga",
        ClientID: sdk.String("eius"),
        Options: &shared.LiabilitiesGetRequestOptions{
            AccountIds: []string{
                "voluptas",
            },
        },
        Secret: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiabilitiesGetResponse != nil {
        // handle response
    }
}
```

## LinkDeliveryCreate

Use the `/link_delivery/create` endpoint to create a Link Delivery session.

</docs/assets/waitlist/link-delivery/>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.LinkDeliveryCreate(ctx, shared.LinkDeliveryCreateRequest{
        ClientID: sdk.String("cupiditate"),
        LinkToken: "consequatur",
        Options: &shared.LinkDeliveryOptions{
            Recipient: &shared.LinkDeliveryRecipient{
                CommunicationMethods: []shared.LinkDeliveryCommunicationMethod{
                    shared.LinkDeliveryCommunicationMethod{
                        Address: sdk.String("311 Koelpin Via"),
                        Method: shared.LinkDeliveryDeliveryMethodEnumSms.ToPointer(),
                    },
                    shared.LinkDeliveryCommunicationMethod{
                        Address: sdk.String("740 Josiah Trail"),
                        Method: shared.LinkDeliveryDeliveryMethodEnumSms.ToPointer(),
                    },
                },
                FirstName: sdk.String("Jeffery"),
            },
        },
        Secret: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkDeliveryCreateResponse != nil {
        // handle response
    }
}
```

## LinkDeliveryGet

Use the `/link_delivery/get` endpoint to get the status of a Link Delivery session.

</docs/assets/waitlist/link-delivery/>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.LinkDeliveryGet(ctx, shared.LinkDeliveryGetRequest{
        ClientID: sdk.String("commodi"),
        LinkDeliverySessionID: "sapiente",
        Secret: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkDeliveryGetResponse != nil {
        // handle response
    }
}
```

## LinkOauthCorrelationIDExchange

Exchange an OAuth `link_correlation_id` for the corresponding `link_token`. The `link_correlation_id` is only available for 'payment_initiation' products and is provided to the client via the OAuth `redirect_uri` as a query parameter.
The `link_correlation_id` is ephemeral and expires in a brief period, after which it can no longer be exchanged for the 'link_token'.

</api/oauth/#linkcorrelationid>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.LinkOauthCorrelationIDExchange(ctx, shared.LinkOAuthCorrelationIDExchangeRequest{
        ClientID: sdk.String("deserunt"),
        LinkCorrelationID: "molestiae",
        Secret: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkOAuthCorrelationIDExchangeResponse != nil {
        // handle response
    }
}
```

## LinkTokenCreate

The `/link/token/create` endpoint creates a `link_token`, which is required as a parameter when initializing Link. Once Link has been initialized, it returns a `public_token`, which can then be exchanged for an `access_token` via `/item/public_token/exchange` as part of the main Link flow.

A `link_token` generated by `/link/token/create` is also used to initialize other Link flows, such as the update mode flow for tokens with expired credentials, or the Payment Initiation (Europe) flow.

</api/tokens/#linktokencreate>

### Example Usage

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
    res, err := s.Plaid.LinkTokenCreate(ctx, shared.LinkTokenCreateRequest{
        AccessToken: sdk.String("porro"),
        AccountFilters: map[string]interface{}{
            "quas": "praesentium",
            "consequuntur": "deleniti",
        },
        AdditionalConsentedProducts: []shared.ProductsEnum{
            shared.ProductsEnumDepositSwitch,
        },
        AndroidPackageName: sdk.String("mollitia"),
        Auth: &shared.LinkTokenCreateRequestAuth{
            AuthTypeSelectEnabled: sdk.Bool(false),
            AutomatedMicrodepositsEnabled: sdk.Bool(false),
            FlowType: shared.LinkTokenCreateRequestAuthFlowTypeEnumFlexibleAuth.ToPointer(),
            InstantMatchEnabled: sdk.Bool(false),
            SameDayMicrodepositsEnabled: sdk.Bool(false),
        },
        ClientID: sdk.String("incidunt"),
        ClientName: "atque",
        CountryCodes: []shared.CountryCodeEnum{
            shared.CountryCodeEnumIe,
        },
        DepositSwitch: &shared.LinkTokenCreateRequestDepositSwitch{
            DepositSwitchID: "nisi",
        },
        Employment: &shared.LinkTokenCreateRequestEmployment{
            BankEmployment: &shared.LinkTokenCreateRequestEmploymentBankIncome{
                DaysRequested: 147014,
            },
            EmploymentSourceTypes: []shared.EmploymentSourceTypeEnum{
                shared.EmploymentSourceTypeEnumBank,
                shared.EmploymentSourceTypeEnumBank,
                shared.EmploymentSourceTypeEnumBank,
                shared.EmploymentSourceTypeEnumPayroll,
            },
        },
        EuConfig: &shared.LinkTokenEUConfig{
            Headless: sdk.Bool(false),
        },
        IdentityVerification: &shared.LinkTokenCreateRequestIdentityVerification{
            Consent: sdk.Bool(true),
            GaveConsent: sdk.Bool(true),
            TemplateID: "idvtmp_4FrXJvfQU3zGUR",
        },
        IncomeVerification: &shared.LinkTokenCreateRequestIncomeVerification{
            AccessTokens: []string{
                "atque",
                "et",
                "esse",
            },
            AssetReportID: sdk.String("eveniet"),
            BankIncome: &shared.LinkTokenCreateRequestIncomeVerificationBankIncome{
                DaysRequested: 882042,
                EnableMultipleItems: sdk.Bool(false),
            },
            IncomeSourceTypes: []shared.IncomeVerificationSourceTypeEnum{
                shared.IncomeVerificationSourceTypeEnumBank,
            },
            IncomeVerificationID: sdk.String("quod"),
            PayrollIncome: &shared.LinkTokenCreateRequestIncomeVerificationPayrollIncome{
                FlowTypes: []shared.IncomeVerificationPayrollFlowTypeEnum{
                    shared.IncomeVerificationPayrollFlowTypeEnumPayrollDocumentIncome,
                    shared.IncomeVerificationPayrollFlowTypeEnumPayrollDigitalIncome,
                    shared.IncomeVerificationPayrollFlowTypeEnumPayrollDigitalIncome,
                },
                IsUpdateMode: sdk.Bool(false),
                ItemIDToUpdate: sdk.String("saepe"),
            },
            PrecheckID: sdk.String("vel"),
            StatedIncomeSources: []shared.LinkTokenCreateRequestUserStatedIncomeSource{
                shared.LinkTokenCreateRequestUserStatedIncomeSource{
                    Category: shared.UserStatedIncomeSourceCategoryEnumRental.ToPointer(),
                    Employer: sdk.String("rerum"),
                    PayAnnual: sdk.Float64(5801.97),
                    PayFrequency: shared.UserStatedIncomeSourceFrequencyEnumWeekly.ToPointer(),
                    PayPerCycle: sdk.Float64(7162.44),
                    PayType: shared.UserStatedIncomeSourcePayTypeEnumNet.ToPointer(),
                },
                shared.LinkTokenCreateRequestUserStatedIncomeSource{
                    Category: shared.UserStatedIncomeSourceCategoryEnumOther.ToPointer(),
                    Employer: sdk.String("culpa"),
                    PayAnnual: sdk.Float64(7313.98),
                    PayFrequency: shared.UserStatedIncomeSourceFrequencyEnumWeekly.ToPointer(),
                    PayPerCycle: sdk.Float64(7669.64),
                    PayType: shared.UserStatedIncomeSourcePayTypeEnumUnknown.ToPointer(),
                },
                shared.LinkTokenCreateRequestUserStatedIncomeSource{
                    Category: shared.UserStatedIncomeSourceCategoryEnumOther.ToPointer(),
                    Employer: sdk.String("minus"),
                    PayAnnual: sdk.Float64(3082.86),
                    PayFrequency: shared.UserStatedIncomeSourceFrequencyEnumMonthly.ToPointer(),
                    PayPerCycle: sdk.Float64(2328.65),
                    PayType: shared.UserStatedIncomeSourcePayTypeEnumGross.ToPointer(),
                },
            },
        },
        InstitutionData: &shared.LinkTokenCreateInstitutionData{
            RoutingNumber: sdk.String("blanditiis"),
        },
        InstitutionID: sdk.String("provident"),
        Investments: &shared.LinkTokenInvestments{
            AllowUnverifiedCryptoWallets: sdk.Bool(false),
        },
        Language: "a",
        LinkCustomizationName: sdk.String("nulla"),
        PaymentInitiation: &shared.LinkTokenCreateRequestPaymentInitiation{
            ConsentID: sdk.String("quas"),
            PaymentID: sdk.String("esse"),
        },
        Products: []shared.ProductsEnum{
            shared.ProductsEnumSignal,
        },
        RedirectURI: sdk.String("error"),
        Secret: sdk.String("sint"),
        Transfer: &shared.LinkTokenCreateRequestTransfer{
            IntentID: sdk.String("pariatur"),
            PaymentProfileToken: sdk.String("possimus"),
        },
        Update: &shared.LinkTokenCreateRequestUpdate{
            AccountSelectionEnabled: sdk.Bool(false),
        },
        User: shared.LinkTokenCreateRequestUser{
            Address: map[string]interface{}{
                "eveniet": "asperiores",
            },
            ClientUserID: "facere",
            DateOfBirth: types.MustDateFromString("2022-11-03"),
            EmailAddress: sdk.String("quasi"),
            EmailAddressVerifiedTime: types.MustTimeFromString("2021-09-25T11:11:22.943Z"),
            IDNumber: map[string]interface{}{
                "tenetur": "quae",
                "earum": "vel",
            },
            LegalName: sdk.String("in"),
            Name: &shared.IdentityVerificationRequestUserName{
                FamilyName: "Knope",
                GivenName: "Leslie",
            },
            PhoneNumber: sdk.String("eius"),
            PhoneNumberVerifiedTime: types.MustTimeFromString("2021-04-21T04:50:55.832Z"),
            Ssn: sdk.String("soluta"),
        },
        UserToken: sdk.String("accusantium"),
        Webhook: sdk.String("aliquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkTokenCreateResponse != nil {
        // handle response
    }
}
```

## LinkTokenGet

The `/link/token/get` endpoint gets information about a previously-created `link_token` using the
`/link/token/create` endpoint. It can be useful for debugging purposes.

</api/tokens/#linktokenget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.LinkTokenGet(ctx, shared.LinkTokenGetRequest{
        ClientID: sdk.String("sapiente"),
        LinkToken: "dicta",
        Secret: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkTokenGetResponse != nil {
        // handle response
    }
}
```

## PartnerCustomerCreate

The `/partner/customer/create` endpoint is used by reseller partners to create end customers.

</api/partner/#partnercustomercreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PartnerCustomerCreate(ctx, shared.PartnerCustomerCreateRequest{
        Address: map[string]interface{}{
            "ullam": "nisi",
            "aut": "voluptatum",
        },
        ApplicationName: "qui",
        AssetsUnderManagement: map[string]interface{}{
            "ex": "deleniti",
            "itaque": "dolorum",
            "architecto": "omnis",
            "tenetur": "quasi",
        },
        BillingContact: map[string]interface{}{
            "et": "voluptate",
            "ipsa": "minima",
            "veritatis": "consectetur",
            "adipisci": "iste",
        },
        ClientID: sdk.String("temporibus"),
        CompanyName: "accusantium",
        CreateLinkCustomization: sdk.Bool(false),
        CustomerSupportInfo: map[string]interface{}{
            "aut": "laudantium",
            "eum": "mollitia",
            "ab": "corrupti",
        },
        IsBankAddendumCompleted: false,
        IsDiligenceAttested: false,
        LegalEntityName: "non",
        Logo: sdk.String("voluptatem"),
        Products: []shared.ProductsEnum{
            shared.ProductsEnumIncome,
        },
        RedirectUris: []string{
            "impedit",
            "explicabo",
        },
        Secret: sdk.String("voluptas"),
        TechnicalContact: map[string]interface{}{
            "dignissimos": "dicta",
        },
        Website: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartnerCustomerCreateResponse != nil {
        // handle response
    }
}
```

## PartnerCustomerEnable

The `/partner/customer/enable` endpoint is used by reseller partners to enable an end customer in the Production environment.

</api/partner/#partnercustomerenable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PartnerCustomerEnable(ctx, shared.PartnerCustomerEnableRequest{
        ClientID: sdk.String("natus"),
        EndCustomerClientID: "velit",
        Secret: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartnerCustomerEnableResponse != nil {
        // handle response
    }
}
```

## PartnerCustomerGet

The `/partner/customer/get` endpoint is used by reseller partners to retrieve data about a single end customer.

</api/partner/#partnercustomerget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PartnerCustomerGet(ctx, shared.PartnerCustomerGetRequest{
        ClientID: sdk.String("voluptas"),
        EndCustomerClientID: "asperiores",
        Secret: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartnerCustomerGetResponse != nil {
        // handle response
    }
}
```

## PartnerCustomerOauthInstitutionsGet

The `/partner/customer/oauth_institutions/get` endpoint is used by reseller partners to retrieve OAuth-institution registration information about a single end customer. To learn how to set up a webhook to listen to status update events, visit the [reseller documentation](https://plaid.com/docs/account/resellers/#enabling-end-customers).

</api/partner/#partnercustomeroauth_institutionsget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PartnerCustomerOauthInstitutionsGet(ctx, shared.PartnerCustomerOAuthInstitutionsGetRequest{
        ClientID: sdk.String("ea"),
        EndCustomerClientID: "quaerat",
        Secret: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartnerCustomerOAuthInstitutionsGetResponse != nil {
        // handle response
    }
}
```

## PartnerCustomerRemove

The `/partner/customer/remove` endpoint is used by reseller partners to remove an end customer. Removing an end customer will remove it from view in the Plaid Dashboard and deactivate its API keys. This endpoint can only be used to remove an end customer that has not yet been enabled in Production.

</api/partner/#partnercustomerremove>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PartnerCustomerRemove(ctx, shared.PartnerCustomerRemoveRequest{
        ClientID: sdk.String("repellendus"),
        EndCustomerClientID: "officia",
        Secret: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartnerCustomerRemoveResponse != nil {
        // handle response
    }
}
```

## PaymentInitiationConsentCreate

The `/payment_initiation/consent/create` endpoint is used to create a payment consent, which can be used to initiate payments on behalf of the user. Payment consents are created with `UNAUTHORISED` status by default and must be authorised by the user before payments can be initiated.

Consents can be limited in time and scope, and have constraints that describe limitations for payments.

</api/products/payment-initiation/#payment_initiationconsentcreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PaymentInitiationConsentCreate(ctx, shared.PaymentInitiationConsentCreateRequest{
        ClientID: sdk.String("dignissimos"),
        Constraints: map[string]interface{}{
            "asperiores": "nemo",
            "quae": "quaerat",
            "porro": "quod",
        },
        Options: map[string]interface{}{
            "ab": "adipisci",
            "fuga": "id",
        },
        RecipientID: "suscipit",
        Reference: "velit",
        Scopes: []shared.PaymentInitiationConsentScopeEnum{
            shared.PaymentInitiationConsentScopeEnumExternal,
            shared.PaymentInitiationConsentScopeEnumExternal,
            shared.PaymentInitiationConsentScopeEnumExternal,
        },
        Secret: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitiationConsentCreateResponse != nil {
        // handle response
    }
}
```

## PaymentInitiationConsentGet

The `/payment_initiation/consent/get` endpoint can be used to check the status of a payment consent, as well as to receive basic information such as recipient and constraints.

</api/products/payment-initiation/#payment_initiationconsentget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PaymentInitiationConsentGet(ctx, shared.PaymentInitiationConsentGetRequest{
        ClientID: sdk.String("vel"),
        ConsentID: "ducimus",
        Secret: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitiationConsentGetResponse != nil {
        // handle response
    }
}
```

## PaymentInitiationConsentPaymentExecute

The `/payment_initiation/consent/payment/execute` endpoint can be used to execute payments using payment consent.

</api/products/payment-initiation/#payment_initiationconsentpaymentexecute>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PaymentInitiationConsentPaymentExecute(ctx, shared.PaymentInitiationConsentPaymentExecuteRequest{
        Amount: map[string]interface{}{
            "labore": "possimus",
            "facilis": "cum",
        },
        ClientID: sdk.String("commodi"),
        ConsentID: "in",
        IdempotencyKey: "corporis",
        Secret: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitiationConsentPaymentExecuteResponse != nil {
        // handle response
    }
}
```

## PaymentInitiationConsentRevoke

The `/payment_initiation/consent/revoke` endpoint can be used to revoke the payment consent. Once the consent is revoked, it is not possible to initiate payments using it.

</api/products/payment-initiation/#payment_initiationconsentrevoke>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PaymentInitiationConsentRevoke(ctx, shared.PaymentInitiationConsentRevokeRequest{
        ClientID: sdk.String("assumenda"),
        ConsentID: "nemo",
        Secret: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitiationConsentRevokeResponse != nil {
        // handle response
    }
}
```

## PaymentInitiationPaymentCreate

After creating a payment recipient, you can use the `/payment_initiation/payment/create` endpoint to create a payment to that recipient.  Payments can be one-time or standing order (recurring) and can be denominated in either EUR, GBP or other chosen [currency](https://plaid.com/docs/api/products/payment-initiation/#payment_initiation-payment-create-request-amount-currency).  If making domestic GBP-denominated payments, your recipient must have been created with BACS numbers. In general, EUR-denominated payments will be sent via SEPA Credit Transfer, GBP-denominated payments will be sent via the Faster Payments network and for non-Eurozone markets typically via the local payment scheme, but the payment network used will be determined by the institution. Payments sent via Faster Payments will typically arrive immediately, while payments sent via SEPA Credit Transfer or other local payment schemes will typically arrive in one business day.

Standing orders (recurring payments) must be denominated in GBP and can only be sent to recipients in the UK. Once created, standing order payments cannot be modified or canceled via the API. An end user can cancel or modify a standing order directly on their banking application or website, or by contacting the bank. Standing orders will follow the payment rules of the underlying rails (Faster Payments in UK). Payments can be sent Monday to Friday, excluding bank holidays. If the pre-arranged date falls on a weekend or bank holiday, the payment is made on the next working day. It is not possible to guarantee the exact time the payment will reach the recipient’s account, although at least 90% of standing order payments are sent by 6am.

In the Development environment, payments must be below 5 GBP or other chosen [currency](https://plaid.com/docs/api/products/payment-initiation/#payment_initiation-payment-create-request-amount-currency). For details on any payment limits in Production, contact your Plaid Account Manager.

</api/products/payment-initiation/#payment_initiationpaymentcreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PaymentInitiationPaymentCreate(ctx, shared.PaymentInitiationPaymentCreateRequest{
        Amount: map[string]interface{}{
            "aperiam": "cum",
            "consectetur": "in",
        },
        ClientID: sdk.String("exercitationem"),
        Options: map[string]interface{}{
            "facere": "numquam",
            "doloribus": "suscipit",
            "reiciendis": "quidem",
            "saepe": "necessitatibus",
        },
        RecipientID: "dolore",
        Reference: "sunt",
        Schedule: map[string]interface{}{
            "adipisci": "non",
            "amet": "beatae",
            "dignissimos": "a",
            "debitis": "consectetur",
        },
        Secret: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitiationPaymentCreateResponse != nil {
        // handle response
    }
}
```

## PaymentInitiationPaymentGet

The `/payment_initiation/payment/get` endpoint can be used to check the status of a payment, as well as to receive basic information such as recipient and payment amount. In the case of standing orders, the `/payment_initiation/payment/get` endpoint will provide information about the status of the overall standing order itself; the API cannot be used to retrieve payment status for individual payments within a standing order.

</api/products/payment-initiation/#payment_initiationpaymentget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PaymentInitiationPaymentGet(ctx, shared.PaymentInitiationPaymentGetRequest{
        ClientID: sdk.String("harum"),
        PaymentID: "laboriosam",
        Secret: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitiationPaymentGetResponse != nil {
        // handle response
    }
}
```

## PaymentInitiationPaymentList

The `/payment_initiation/payment/list` endpoint can be used to retrieve all created payments. By default, the 10 most recent payments are returned. You can request more payments and paginate through the results using the optional `count` and `cursor` parameters.

</api/products/payment-initiation/#payment_initiationpaymentlist>

### Example Usage

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
    res, err := s.Plaid.PaymentInitiationPaymentList(ctx, shared.PaymentInitiationPaymentListRequest{
        ClientID: sdk.String("voluptates"),
        ConsentID: sdk.String("libero"),
        Count: sdk.Int64(113816),
        Cursor: types.MustTimeFromString("2021-02-08T22:01:14.035Z"),
        Secret: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitiationPaymentListResponse != nil {
        // handle response
    }
}
```

## PaymentInitiationPaymentReverse

Reverse a settled payment from a Plaid virtual account.

The original payment must be in a settled state to be refunded.
To refund partially, specify the amount as part of the request.
If the amount is not specified, the refund amount will be equal to all
of the remaining payment amount that has not been refunded yet.

The refund will go back to the source account that initiated the payment.
The original payment must have been initiated to a Plaid virtual account
so that this account can be used to initiate the refund.


</api/products/payment-initiation/#payment_initiationpaymentreverse>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PaymentInitiationPaymentReverse(ctx, shared.PaymentInitiationPaymentReverseRequest{
        Amount: map[string]interface{}{
            "voluptas": "voluptas",
        },
        ClientID: sdk.String("voluptas"),
        IdempotencyKey: "minima",
        PaymentID: "nobis",
        Reference: "dolorum",
        Secret: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitiationPaymentReverseResponse != nil {
        // handle response
    }
}
```

## PaymentInitiationRecipientCreate

Create a payment recipient for payment initiation.  The recipient must be in Europe, within a country that is a member of the Single Euro Payment Area (SEPA) or a non-Eurozone country [supported](https://plaid.com/global) by Plaid. For a standing order (recurring) payment, the recipient must be in the UK.

It is recommended to use `bacs` in the UK and `iban` in EU.

The endpoint is idempotent: if a developer has already made a request with the same payment details, Plaid will return the same `recipient_id`.


</api/products/payment-initiation/#payment_initiationrecipientcreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PaymentInitiationRecipientCreate(ctx, shared.PaymentInitiationRecipientCreateRequest{
        Address: map[string]interface{}{
            "dolores": "blanditiis",
            "in": "dolore",
            "aliquam": "officiis",
            "temporibus": "ullam",
        },
        Bacs: map[string]interface{}{
            "cum": "blanditiis",
        },
        ClientID: sdk.String("quas"),
        Iban: sdk.String("hic"),
        Name: "Molly Lowe",
        Secret: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitiationRecipientCreateResponse != nil {
        // handle response
    }
}
```

## PaymentInitiationRecipientGet

Get details about a payment recipient you have previously created.

</api/products/payment-initiation/#payment_initiationrecipientget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PaymentInitiationRecipientGet(ctx, shared.PaymentInitiationRecipientGetRequest{
        ClientID: sdk.String("exercitationem"),
        RecipientID: "nobis",
        Secret: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitiationRecipientGetResponse != nil {
        // handle response
    }
}
```

## PaymentInitiationRecipientList

The `/payment_initiation/recipient/list` endpoint list the payment recipients that you have previously created.

</api/products/payment-initiation/#payment_initiationrecipientlist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PaymentInitiationRecipientList(ctx, shared.PaymentInitiationRecipientListRequest{
        ClientID: sdk.String("rerum"),
        Secret: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitiationRecipientListResponse != nil {
        // handle response
    }
}
```

## PaymentProfileCreate

Use `/payment_profile/create` endpoint to create a new payment profile.
To initiate the account linking experience, call `/link/token/create` and provide the `payment_profile_token` in the `transfer.payment_profile_token` field.
You can then use the `payment_profile_token` when creating transfers using `/transfer/authorization/create` and `/transfer/create`.

</api/products/transfer/#payment_profilecreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PaymentProfileCreate(ctx, shared.PaymentProfileCreateRequest{
        ClientID: sdk.String("reiciendis"),
        Secret: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentProfileCreateResponse != nil {
        // handle response
    }
}
```

## PaymentProfileGet

Use `/payment_profile/get` endpoint to get the status of a given Payment Profile.

</api/products/transfer/#payment_profileget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PaymentProfileGet(ctx, shared.PaymentProfileGetRequest{
        ClientID: sdk.String("asperiores"),
        PaymentProfileToken: "facilis",
        Secret: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentProfileGetResponse != nil {
        // handle response
    }
}
```

## PaymentProfileRemove

Use the `/payment_profile/remove` endpoint to remove a given Payment Profile. Once it’s removed, it can no longer be used to create transfers.

</api/products/transfer/#payment_profileremove>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.PaymentProfileRemove(ctx, shared.PaymentProfileRemoveRequest{
        ClientID: sdk.String("expedita"),
        PaymentProfileToken: "ab",
        Secret: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentProfileRemoveResponse != nil {
        // handle response
    }
}
```

## ProcessorApexProcessorTokenCreate

Used to create a token suitable for sending to Apex to enable Plaid-Apex integrations.

</none/>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ProcessorApexProcessorTokenCreate(ctx, shared.ProcessorApexProcessorTokenCreateRequest{
        AccessToken: "dolore",
        AccountID: "laborum",
        ClientID: sdk.String("sed"),
        Secret: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProcessorTokenCreateResponse != nil {
        // handle response
    }
}
```

## ProcessorAuthGet

The `/processor/auth/get` endpoint returns the bank account and bank identification number (such as the routing number, for US accounts), for a checking or savings account that''s associated with a given `processor_token`. The endpoint also returns high-level account data and balances when available.

Versioning note: API versions 2019-05-29 and earlier use a different schema for the `numbers` object returned by this endpoint. For details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2020-09-14).


</api/processors/#processorauthget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ProcessorAuthGet(ctx, shared.ProcessorAuthGetRequest{
        ClientID: sdk.String("commodi"),
        ProcessorToken: "quidem",
        Secret: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProcessorAuthGetResponse != nil {
        // handle response
    }
}
```

## ProcessorBalanceGet

The `/processor/balance/get` endpoint returns the real-time balance for each of an Item's accounts. While other endpoints may return a balance object, only `/processor/balance/get` forces the available and current balance fields to be refreshed rather than cached. 

</api/processors/#processorbalanceget>

### Example Usage

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
    res, err := s.Plaid.ProcessorBalanceGet(ctx, shared.ProcessorBalanceGetRequest{
        ClientID: sdk.String("voluptas"),
        Options: &shared.ProcessorBalanceGetRequestOptions{
            MinLastUpdatedDatetime: types.MustTimeFromString("2022-10-19T23:26:17.500Z"),
        },
        ProcessorToken: "suscipit",
        Secret: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProcessorBalanceGetResponse != nil {
        // handle response
    }
}
```

## ProcessorBankTransferCreate

Use the `/processor/bank_transfer/create` endpoint to initiate a new bank transfer as a processor

</api/processors/#bank_transfercreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ProcessorBankTransferCreate(ctx, shared.ProcessorBankTransferCreateRequest{
        AchClass: shared.ACHClassEnumWeb.ToPointer(),
        Amount: "illo",
        ClientID: sdk.String("reiciendis"),
        CustomTag: sdk.String("perferendis"),
        Description: "corrupti",
        IdempotencyKey: "maiores",
        IsoCurrencyCode: "incidunt",
        Metadata: map[string]string{
            "provident": "eius",
        },
        Network: shared.BankTransferNetworkEnumWire,
        OriginationAccountID: sdk.String("ipsum"),
        ProcessorToken: "ea",
        Secret: sdk.String("occaecati"),
        Type: shared.BankTransferTypeEnumCredit,
        User: map[string]interface{}{
            "tempora": "tempora",
            "voluptate": "reiciendis",
            "ex": "sit",
            "non": "officiis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProcessorBankTransferCreateResponse != nil {
        // handle response
    }
}
```

## ProcessorIdentityGet

The `/processor/identity/get` endpoint allows you to retrieve various account holder information on file with the financial institution, including names, emails, phone numbers, and addresses.

</api/processors/#processoridentityget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ProcessorIdentityGet(ctx, shared.ProcessorIdentityGetRequest{
        ClientID: sdk.String("praesentium"),
        ProcessorToken: "facilis",
        Secret: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProcessorIdentityGetResponse != nil {
        // handle response
    }
}
```

## ProcessorSignalDecisionReport

After calling `/processor/signal/evaluate`, call `/processor/signal/decision/report` to report whether the transaction was initiated. This endpoint will return an [`INVALID_FIELD`](/docs/errors/invalid-request/#invalid_field) error if called a second time with a different value for `initiated`.

</api/processors/#processorsignaldecisionreport>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ProcessorSignalDecisionReport(ctx, shared.ProcessorSignalDecisionReportRequest{
        AmountInstantlyAvailable: sdk.Float64(2777.73),
        ClientID: sdk.String("ipsam"),
        ClientTransactionID: "debitis",
        DaysFundsOnHold: sdk.Int64(524970),
        DecisionOutcome: shared.SignalDecisionOutcomeEnumApprove.ToPointer(),
        Initiated: false,
        PaymentMethod: shared.SignalPaymentMethodEnumDebitCard.ToPointer(),
        ProcessorToken: "error",
        Secret: sdk.String("veniam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProcessorSignalDecisionReportResponse != nil {
        // handle response
    }
}
```

## ProcessorSignalEvaluate

Use `/processor/signal/evaluate` to evaluate a planned ACH transaction as a processor to get a return risk assessment (such as a risk score and risk tier) and additional risk signals.

In order to obtain a valid score for an ACH transaction, Plaid must have an access token for the account, and the Item must be healthy (receiving product updates) or have recently been in a healthy state. If the transaction does not meet eligibility requirements, an error will be returned corresponding to the underlying cause. If `/processor/signal/evaluate` is called on the same transaction multiple times within a 24-hour period, cached results may be returned. For more information please refer to our error documentation on [item errors](/docs/errors/item/) and [Link in Update Mode](/docs/link/update-mode/).

Note: This request may take some time to complete if Signal is being added to an existing Item. This is because Plaid must communicate directly with the institution when retrieving the data for the first time.

</api/processors/#processorsignalevaluate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ProcessorSignalEvaluate(ctx, shared.ProcessorSignalEvaluateRequest{
        Amount: 3295.43,
        ClientID: sdk.String("recusandae"),
        ClientTransactionID: "reiciendis",
        ClientUserID: sdk.String("nulla"),
        DefaultPaymentMethod: sdk.String("magni"),
        Device: &shared.SignalDevice{
            IPAddress: sdk.String("aperiam"),
            UserAgent: sdk.String("saepe"),
        },
        IsRecurring: sdk.Bool(false),
        ProcessorToken: "numquam",
        Secret: sdk.String("veniam"),
        User: &shared.SignalUser{
            Address: map[string]interface{}{
                "officiis": "beatae",
                "laudantium": "exercitationem",
            },
            EmailAddress: sdk.String("praesentium"),
            Name: &shared.SignalPersonName{
                FamilyName: sdk.String("cum"),
                GivenName: sdk.String("laboriosam"),
                MiddleName: sdk.String("dolorum"),
                Prefix: sdk.String("voluptatum"),
                Suffix: sdk.String("error"),
            },
            PhoneNumber: sdk.String("hic"),
        },
        UserPresent: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProcessorSignalEvaluateResponse != nil {
        // handle response
    }
}
```

## ProcessorSignalReturnReport

Call the `/processor/signal/return/report` endpoint to report a returned transaction that was previously sent to the `/processor/signal/evaluate` endpoint. Your feedback will be used by the model to incorporate the latest risk trend in your portfolio.

</api/processors/#processorsignalreturnreport>

### Example Usage

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
    res, err := s.Plaid.ProcessorSignalReturnReport(ctx, shared.ProcessorSignalReturnReportRequest{
        ClientID: sdk.String("expedita"),
        ClientTransactionID: "debitis",
        ProcessorToken: "neque",
        ReturnCode: "dolorum",
        ReturnedAt: types.MustTimeFromString("2022-05-12T18:07:12.039Z"),
        Secret: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProcessorSignalReturnReportResponse != nil {
        // handle response
    }
}
```

## ProcessorStripeBankAccountTokenCreate


Used to create a token suitable for sending to Stripe to enable Plaid-Stripe integrations. For a detailed guide on integrating Stripe, see [Add Stripe to your app](https://plaid.com/docs/auth/partnerships/stripe/).

Note that the Stripe bank account token is a one-time use token. To store bank account information for later use, you can use a Stripe customer object and create an associated bank account from the token, or you can use a Stripe Custom account and create an associated external bank account from the token. This bank account information should work indefinitely, unless the user's bank account information changes or they revoke Plaid's permissions to access their account. Stripe bank account information cannot be modified once the bank account token has been created. If you ever need to change the bank account details used by Stripe for a specific customer, have the user go through Link again and create a new bank account token from the new `access_token`.

Bank account tokens can also be revoked, using `/item/remove`.'

</api/processors/#processorstripebank_account_tokencreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ProcessorStripeBankAccountTokenCreate(ctx, shared.ProcessorStripeBankAccountTokenCreateRequest{
        AccessToken: "corrupti",
        AccountID: "accusamus",
        ClientID: sdk.String("tempora"),
        Secret: sdk.String("atque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProcessorStripeBankAccountTokenCreateResponse != nil {
        // handle response
    }
}
```

## ProcessorTokenCreate

Used to create a token suitable for sending to one of Plaid's partners to enable integrations. Note that Stripe partnerships use bank account tokens instead; see `/processor/stripe/bank_account_token/create` for creating tokens for use with Stripe integrations. Once created, a processor token for a given Item cannot be modified or updated. If the account must be linked to a new or different partner resource, create a new Item by having the user go through the Link flow again; a new processor token can then be created from the new `access_token`. Processor tokens can also be revoked, using `/item/remove`.

</api/processors/#processortokencreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.ProcessorTokenCreate(ctx, shared.ProcessorTokenCreateRequest{
        AccessToken: "fugit",
        AccountID: "ut",
        ClientID: sdk.String("fugiat"),
        Processor: shared.ProcessorTokenCreateRequestProcessorEnumGalileo,
        Secret: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProcessorTokenCreateResponse != nil {
        // handle response
    }
}
```

## SandboxBankTransferFireWebhook

Use the `/sandbox/bank_transfer/fire_webhook` endpoint to manually trigger a Bank Transfers webhook in the Sandbox environment.

</bank-transfers/reference/#sandboxbank_transferfire_webhook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SandboxBankTransferFireWebhook(ctx, shared.SandboxBankTransferFireWebhookRequest{
        ClientID: sdk.String("expedita"),
        Secret: sdk.String("magnam"),
        Webhook: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxBankTransferFireWebhookResponse != nil {
        // handle response
    }
}
```

## SandboxBankTransferSimulate

Use the `/sandbox/bank_transfer/simulate` endpoint to simulate a bank transfer event in the Sandbox environment.  Note that while an event will be simulated and will appear when using endpoints such as `/bank_transfer/event/sync` or `/bank_transfer/event/list`, no transactions will actually take place and funds will not move between accounts, even within the Sandbox.

</bank-transfers/reference/#sandboxbank_transfersimulate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SandboxBankTransferSimulate(ctx, shared.SandboxBankTransferSimulateRequest{
        BankTransferID: "esse",
        ClientID: sdk.String("ipsam"),
        EventType: "sit",
        FailureReason: map[string]interface{}{
            "quas": "repudiandae",
            "corporis": "et",
            "blanditiis": "ex",
        },
        Secret: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxBankTransferSimulateResponse != nil {
        // handle response
    }
}
```

## SandboxIncomeFireWebhook

Use the `/sandbox/income/fire_webhook` endpoint to manually trigger an Income webhook in the Sandbox environment.

</api/sandbox/#sandboxincomefire_webhook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SandboxIncomeFireWebhook(ctx, shared.SandboxIncomeFireWebhookRequest{
        ClientID: sdk.String("sit"),
        ItemID: "vel",
        Secret: sdk.String("nostrum"),
        UserID: sdk.String("saepe"),
        VerificationStatus: shared.SandboxIncomeFireWebhookRequestVerificationStatusEnumVerificationStatusProcessingFailed,
        Webhook: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxIncomeFireWebhookResponse != nil {
        // handle response
    }
}
```

## SandboxItemFireWebhook

The `/sandbox/item/fire_webhook` endpoint is used to test that code correctly handles webhooks. This endpoint can trigger the following webhooks:

`DEFAULT_UPDATE`: Transactions update webhook to be fired for a given Sandbox Item. If the Item does not support Transactions, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

`NEW_ACCOUNTS_AVAILABLE`: Webhook to be fired for a given Sandbox Item created with Account Select v2.

`AUTH_DATA_UPDATE`: Webhook to be fired for a given Sandbox Item created with Auth as an enabled product.

`RECURRING_TRANSACTIONS_UPDATE`: Recurring Transactions webhook to be fired for a given Sandbox Item. If the Item does not support Recurring Transactions, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

`SYNC_UPDATES_AVAILABLE`: Transactions webhook to be fired for a given Sandbox Item.  If the Item does not support Transactions, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

Note that this endpoint is provided for developer ease-of-use and is not required for testing webhooks; webhooks will also fire in Sandbox under the same conditions that they would in Production or Development.

</api/sandbox/#sandboxitemfire_webhook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SandboxItemFireWebhook(ctx, shared.SandboxItemFireWebhookRequest{
        AccessToken: "incidunt",
        ClientID: sdk.String("reiciendis"),
        Secret: sdk.String("dolorem"),
        WebhookCode: shared.SandboxItemFireWebhookRequestWebhookCodeEnumRecurringTransactionsUpdate,
        WebhookType: shared.WebhookTypeEnumAuth.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxItemFireWebhookResponse != nil {
        // handle response
    }
}
```

## SandboxItemResetLogin

`/sandbox/item/reset_login/` forces an Item into an `ITEM_LOGIN_REQUIRED` state in order to simulate an Item whose login is no longer valid. This makes it easy to test Link's [update mode](https://plaid.com/docs/link/update-mode) flow in the Sandbox environment.  After calling `/sandbox/item/reset_login`, You can then use Plaid Link update mode to restore the Item to a good state. An `ITEM_LOGIN_REQUIRED` webhook will also be fired after a call to this endpoint, if one is associated with the Item.


In the Sandbox, Items will transition to an `ITEM_LOGIN_REQUIRED` error state automatically after 30 days, even if this endpoint is not called.

</api/sandbox/#sandboxitemreset_login>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SandboxItemResetLogin(ctx, shared.SandboxItemResetLoginRequest{
        AccessToken: "architecto",
        ClientID: sdk.String("occaecati"),
        Secret: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxItemResetLoginResponse != nil {
        // handle response
    }
}
```

## SandboxItemSetVerificationStatus

The `/sandbox/item/set_verification_status` endpoint can be used to change the verification status of an Item in in the Sandbox in order to simulate the Automated Micro-deposit flow.

Note that not all Plaid developer accounts are enabled for micro-deposit based verification by default. Your account must be enabled for this feature in order to test it in Sandbox. To enable this features or check your status, contact your account manager or [submit a product access Support ticket](https://dashboard.plaid.com/support/new/product-and-development/product-troubleshooting/request-product-access).

For more information on testing Automated Micro-deposits in Sandbox, see [Auth full coverage testing](https://plaid.com/docs/auth/coverage/testing#).

</api/sandbox/#sandboxitemset_verification_status>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SandboxItemSetVerificationStatus(ctx, shared.SandboxItemSetVerificationStatusRequest{
        AccessToken: "quidem",
        AccountID: "atque",
        ClientID: sdk.String("laborum"),
        Secret: sdk.String("nam"),
        VerificationStatus: shared.SandboxItemSetVerificationStatusRequestVerificationStatusEnumVerificationExpired,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxItemSetVerificationStatusResponse != nil {
        // handle response
    }
}
```

## SandboxOauthSelectAccounts

Save the selected accounts when connecting to the Platypus Oauth institution

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SandboxOauthSelectAccounts(ctx, shared.SandboxOauthSelectAccountsRequest{
        Accounts: []string{
            "alias",
            "amet",
        },
        OauthStateID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxOauthSelectAccountsResponse != nil {
        // handle response
    }
}
```

## SandboxPaymentProfileResetLogin

`/sandbox/payment_profile/reset_login/` forces a Payment Profile into a state where the login is no longer valid. This makes it easy to test update mode for Payment Profile in the Sandbox environment.

 After calling `/sandbox/payment_profile/reset_login`, calls to the `/transfer/authorization/create` with the Payment Profile will result in a `decision_rationale` `PAYMENT_PROFILE_LOGIN_REQUIRED`. You can then use update mode for Payment Profile to restore it into a good state.

 In order to invoke this endpoint, you must first [create a Payment Profile](https://plaid.com/docs/transfer/add-to-app/#create-a-payment-profile-optional) and [go through the Link flow](https://plaid.com/docs/transfer/add-to-app/#create-a-link-token).

</api/sandbox/#sandboxpayment_profilereset_login>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SandboxPaymentProfileResetLogin(ctx, shared.SandboxPaymentProfileResetLoginRequest{
        ClientID: sdk.String("voluptate"),
        PaymentProfileToken: "unde",
        Secret: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxPaymentProfileResetLoginResponse != nil {
        // handle response
    }
}
```

## SandboxProcessorTokenCreate

Use the `/sandbox/processor_token/create` endpoint to create a valid `processor_token` for an arbitrary institution ID and test credentials. The created `processor_token` corresponds to a new Sandbox Item. You can then use this `processor_token` with the `/processor/` API endpoints in Sandbox. You can also use `/sandbox/processor_token/create` with the [`user_custom` test username](https://plaid.com/docs/sandbox/user-custom) to generate a test account with custom data.

</api/sandbox/#sandboxprocessor_tokencreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SandboxProcessorTokenCreate(ctx, shared.SandboxProcessorTokenCreateRequest{
        ClientID: sdk.String("provident"),
        InstitutionID: "repellendus",
        Options: &shared.SandboxProcessorTokenCreateRequestOptions{
            OverridePassword: sdk.String("delectus"),
            OverrideUsername: sdk.String("voluptates"),
        },
        Secret: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxProcessorTokenCreateResponse != nil {
        // handle response
    }
}
```

## SandboxPublicTokenCreate

Use the `/sandbox/public_token/create` endpoint to create a valid `public_token`  for an arbitrary institution ID, initial products, and test credentials. The created `public_token` maps to a new Sandbox Item. You can then call `/item/public_token/exchange` to exchange the `public_token` for an `access_token` and perform all API actions. `/sandbox/public_token/create` can also be used with the [`user_custom` test username](https://plaid.com/docs/sandbox/user-custom) to generate a test account with custom data. `/sandbox/public_token/create` cannot be used with OAuth institutions.

</api/sandbox/#sandboxpublic_tokencreate>

### Example Usage

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
    res, err := s.Plaid.SandboxPublicTokenCreate(ctx, shared.SandboxPublicTokenCreateRequest{
        ClientID: sdk.String("est"),
        InitialProducts: []shared.ProductsEnum{
            shared.ProductsEnumIdentityVerification,
            shared.ProductsEnumTransfer,
            shared.ProductsEnumDepositSwitch,
        },
        InstitutionID: "praesentium",
        Options: &shared.SandboxPublicTokenCreateRequestOptions{
            IncomeVerification: &shared.SandboxPublicTokenCreateRequestOptionsIncomeVerification{
                BankIncome: &shared.SandboxPublicTokenCreateRequestIncomeVerificationBankIncome{
                    DaysRequested: sdk.Int64(648598),
                },
                IncomeSourceTypes: []shared.IncomeVerificationSourceTypeEnum{
                    shared.IncomeVerificationSourceTypeEnumBank,
                    shared.IncomeVerificationSourceTypeEnumPayroll,
                },
            },
            OverridePassword: sdk.String("repudiandae"),
            OverrideUsername: sdk.String("quasi"),
            Transactions: &shared.SandboxPublicTokenCreateRequestOptionsTransactions{
                EndDate: types.MustDateFromString("2022-02-12"),
                StartDate: types.MustDateFromString("2021-06-10"),
            },
            Webhook: sdk.String("suscipit"),
        },
        Secret: sdk.String("quidem"),
        UserToken: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxPublicTokenCreateResponse != nil {
        // handle response
    }
}
```

## SandboxTransferFireWebhook

Use the `/sandbox/transfer/fire_webhook` endpoint to manually trigger a Transfer webhook in the Sandbox environment.

</api/sandbox/#sandboxtransferfire_webhook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SandboxTransferFireWebhook(ctx, shared.SandboxTransferFireWebhookRequest{
        ClientID: sdk.String("et"),
        Secret: sdk.String("esse"),
        Webhook: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxTransferFireWebhookResponse != nil {
        // handle response
    }
}
```

## SandboxTransferRepaymentSimulate

Use the `/sandbox/transfer/repayment/simulate` endpoint to trigger the creation of a repayment. As a side effect of calling this route, a repayment is created that includes all unreimbursed returns of guaranteed transfers. If there are no such returns, an 400 error is returned.

</api/sandbox/#sandboxtransferrepaymentsimulate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SandboxTransferRepaymentSimulate(ctx, shared.SandboxTransferRepaymentSimulateRequest{
        ClientID: sdk.String("assumenda"),
        Secret: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxTransferRepaymentSimulateResponse != nil {
        // handle response
    }
}
```

## SandboxTransferSimulate

Use the `/sandbox/transfer/simulate` endpoint to simulate a transfer event in the Sandbox environment.  Note that while an event will be simulated and will appear when using endpoints such as `/transfer/event/sync` or `/transfer/event/list`, no transactions will actually take place and funds will not move between accounts, even within the Sandbox.

</api/sandbox/#sandboxtransfersimulate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SandboxTransferSimulate(ctx, shared.SandboxTransferSimulateRequest{
        ClientID: sdk.String("atque"),
        EventType: "error",
        FailureReason: map[string]interface{}{
            "officiis": "accusamus",
            "natus": "minima",
            "aspernatur": "ex",
            "maiores": "corrupti",
        },
        Secret: sdk.String("at"),
        TransferID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxTransferSimulateResponse != nil {
        // handle response
    }
}
```

## SandboxTransferSweepSimulate

Use the `/sandbox/transfer/sweep/simulate` endpoint to create a sweep and associated events in the Sandbox environment. Upon calling this endpoint, all `posted` or `pending` transfers with a sweep status of `unswept` will become `swept`, and all `returned` transfers with a sweep status of `swept` will become `return_swept`.

</api/sandbox/#sandboxtransfersweepsimulate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SandboxTransferSweepSimulate(ctx, shared.SandboxTransferSweepSimulateRequest{
        ClientID: sdk.String("blanditiis"),
        Secret: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxTransferSweepSimulateResponse != nil {
        // handle response
    }
}
```

## SandboxTransferTestClockAdvance

Use the `/sandbox/transfer/test_clock/advance` endpoint to advance a `test_clock` in the Sandbox environment.

A test clock object represents an independent timeline and has a `virtual_time` field indicating the current timestamp of the timeline. A test clock can be advanced by incrementing `virtual_time`, but may never go back to a lower `virtual_time`.

If a test clock is advanced, we will simulate the changes that ought to occur during the time that elapsed.
For instance, a client creates a weekly recurring transfer with a test clock set at t. When the client advances the test clock by setting `virtual_time` = t + 15 days, 2 new originations should be created, along with the webhook events.

The advancement of the test clock from its current `virtual_time` should be limited such that there are no more than 20 originations resulting from the advance operation on each `recurring_transfer` associated with the `test_clock`.
For instance, if the recurring transfer associated with this test clock originates once every 4 weeks, you can advance the `virtual_time` up to 80 weeks on each API call.

</api/sandbox/#sandboxtransfertest_clockadvance>

### Example Usage

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
    res, err := s.Plaid.SandboxTransferTestClockAdvance(ctx, shared.SandboxTransferTestClockAdvanceRequest{
        ClientID: sdk.String("repudiandae"),
        NewVirtualTime: types.MustTimeFromString("2021-12-01T19:00:30.130Z"),
        Secret: sdk.String("sunt"),
        TestClockID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxTransferTestClockAdvanceResponse != nil {
        // handle response
    }
}
```

## SandboxTransferTestClockCreate

Use the `/sandbox/transfer/test_clock/create` endpoint to create a `test_clock` in the Sandbox environment.

A test clock object represents an independent timeline and has a `virtual_time` field indicating the current timestamp of the timeline. Test clocks are used for testing recurring transfers in Sandbox.

A test clock can be associated with up to 5 recurring transfers.

</api/sandbox/#sandboxtransfertest_clockcreate>

### Example Usage

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
    res, err := s.Plaid.SandboxTransferTestClockCreate(ctx, shared.SandboxTransferTestClockCreateRequest{
        ClientID: sdk.String("dolorum"),
        Secret: sdk.String("repellendus"),
        VirtualTime: types.MustTimeFromString("2022-01-12T13:48:39.596Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxTransferTestClockCreateResponse != nil {
        // handle response
    }
}
```

## SandboxTransferTestClockGet

Use the `/sandbox/transfer/test_clock/get` endpoint to get a `test_clock` in the Sandbox environment.

</api/sandbox/#sandboxtransfertest_clockget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SandboxTransferTestClockGet(ctx, shared.SandboxTransferTestClockGetRequest{
        ClientID: sdk.String("doloremque"),
        Secret: sdk.String("repudiandae"),
        TestClockID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxTransferTestClockGetResponse != nil {
        // handle response
    }
}
```

## SandboxTransferTestClockList

Use the `/sandbox/transfer/test_clock/list` endpoint to see a list of all your test clocks in the Sandbox environment, by ascending `virtual_time`. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired test clocks.

</api/sandbox/#sandboxtransfertest_clocklist>

### Example Usage

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
    res, err := s.Plaid.SandboxTransferTestClockList(ctx, shared.SandboxTransferTestClockListRequest{
        ClientID: sdk.String("accusantium"),
        Count: sdk.Int64(106429),
        EndVirtualTime: types.MustTimeFromString("2022-09-07T11:33:56.286Z"),
        Offset: sdk.Int64(389135),
        Secret: sdk.String("velit"),
        StartVirtualTime: types.MustTimeFromString("2021-04-24T18:03:33.752Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SandboxTransferTestClockListResponse != nil {
        // handle response
    }
}
```

## SignalDecisionReport

After calling `/signal/evaluate`, call `/signal/decision/report` to report whether the transaction was initiated. This endpoint will return an [`INVALID_FIELD`](/docs/errors/invalid-request/#invalid_field) error if called a second time with a different value for `initiated`.

</api/products/signal#signaldecisionreport>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SignalDecisionReport(ctx, shared.SignalDecisionReportRequest{
        AmountInstantlyAvailable: sdk.Float64(3000.29),
        ClientID: sdk.String("saepe"),
        ClientTransactionID: "consequuntur",
        DaysFundsOnHold: sdk.Int64(580107),
        DecisionOutcome: shared.SignalDecisionOutcomeEnumNotEvaluated.ToPointer(),
        Initiated: false,
        PaymentMethod: shared.SignalPaymentMethodEnumRealTimePayments.ToPointer(),
        Secret: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignalDecisionReportResponse != nil {
        // handle response
    }
}
```

## SignalEvaluate

Use `/signal/evaluate` to evaluate a planned ACH transaction to get a return risk assessment (such as a risk score and risk tier) and additional risk signals.

In order to obtain a valid score for an ACH transaction, Plaid must have an access token for the account, and the Item must be healthy (receiving product updates) or have recently been in a healthy state. If the transaction does not meet eligibility requirements, an error will be returned corresponding to the underlying cause. If `/signal/evaluate` is called on the same transaction multiple times within a 24-hour period, cached results may be returned. For more information please refer to the error documentation on [Item errors](/docs/errors/item/) and [Link in Update Mode](/docs/link/update-mode/).

Note: This request may take some time to complete if Signal is being added to an existing Item. This is because Plaid must communicate directly with the institution when retrieving the data for the first time.

</api/products/signal#signalevaluate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SignalEvaluate(ctx, shared.SignalEvaluateRequest{
        AccessToken: "adipisci",
        AccountID: "eveniet",
        Amount: 5808.87,
        ClientID: sdk.String("consequuntur"),
        ClientTransactionID: "fugit",
        ClientUserID: sdk.String("id"),
        DefaultPaymentMethod: sdk.String("quis"),
        Device: &shared.SignalDevice{
            IPAddress: sdk.String("reprehenderit"),
            UserAgent: sdk.String("error"),
        },
        IsRecurring: sdk.Bool(false),
        Secret: sdk.String("illo"),
        User: &shared.SignalUser{
            Address: map[string]interface{}{
                "quidem": "eveniet",
                "non": "vero",
            },
            EmailAddress: sdk.String("doloremque"),
            Name: &shared.SignalPersonName{
                FamilyName: sdk.String("iure"),
                GivenName: sdk.String("ipsa"),
                MiddleName: sdk.String("totam"),
                Prefix: sdk.String("quae"),
                Suffix: sdk.String("molestiae"),
            },
            PhoneNumber: sdk.String("eveniet"),
        },
        UserPresent: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignalEvaluateResponse != nil {
        // handle response
    }
}
```

## SignalPrepare

When Link is not initialized with Signal, call `/signal/prepare` to opt-in that Item to the Signal data collection process, developing a Signal score.

If you are using other Plaid products after Link, e.g. Identity or Assets, call `/signal/prepare` after those product calls are complete.

Example flow: Link is initialized with Auth, call `/auth/get` for the account and routing number, call `/identity/get` to retrieve bank ownership details, then call `/signal/prepare` to begin Signal data collection. Later, once you have obtained details about the proposed transaction from the user, call `/signal/evaluate` for a Signal score. For more information please see [Recommendations for initializing Link with specific product combinations](https://www.plaid.com/docs/link/initializing-products/#recommendations-for-initializing-link-with-specific-product-combinations).

</api/products/signal#signalprepare>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.SignalPrepare(ctx, shared.SignalPrepareRequest{
        AccessToken: "qui",
        ClientID: sdk.String("cum"),
        Secret: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignalPrepareResponse != nil {
        // handle response
    }
}
```

## SignalReturnReport

Call the `/signal/return/report` endpoint to report a returned transaction that was previously sent to the `/signal/evaluate` endpoint. Your feedback will be used by the model to incorporate the latest risk trend in your portfolio.

</api/products/signal#signalreturnreport>

### Example Usage

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
    res, err := s.Plaid.SignalReturnReport(ctx, shared.SignalReturnReportRequest{
        ClientID: sdk.String("necessitatibus"),
        ClientTransactionID: "ratione",
        ReturnCode: "laborum",
        ReturnedAt: types.MustTimeFromString("2021-12-10T20:58:20.380Z"),
        Secret: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignalReturnReportResponse != nil {
        // handle response
    }
}
```

## TransactionsEnhance

The `/beta/transactions/v1/enhance` endpoint enriches raw transaction data provided directly by clients.

The product is currently in beta.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransactionsEnhance(ctx, shared.TransactionsEnhanceGetRequest{
        AccountType: "aliquam",
        ClientID: sdk.String("ad"),
        Secret: sdk.String("repellat"),
        Transactions: []map[string]interface{}{
            map[string]interface{}{
                "perspiciatis": "nihil",
                "mollitia": "voluptas",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionsEnhanceGetResponse != nil {
        // handle response
    }
}
```

## TransactionsEnrich

The `/transactions/enrich` endpoint enriches raw transaction data generated by your own banking products or retrieved from other non-Plaid sources.

To request access to Enrich, reach out to your Plaid point of contact or send a note to enrich-feedback@plaid.com

</api/products/enrich/#transactionsenrich>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransactionsEnrich(ctx, shared.TransactionsEnrichGetRequest{
        AccountType: "alias",
        ClientID: sdk.String("maiores"),
        Options: &shared.TransactionsEnrichRequestOptions{
            IncludeLegacyCategory: sdk.Bool(false),
        },
        Secret: sdk.String("reiciendis"),
        Transactions: []map[string]interface{}{
            map[string]interface{}{
                "minima": "dolore",
                "dolorum": "nesciunt",
                "quae": "recusandae",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionsEnrichGetResponse != nil {
        // handle response
    }
}
```

## TransactionsGet

The `/transactions/get` endpoint allows developers to receive user-authorized transaction data for credit, depository, and some loan-type accounts (only those with account subtype `student`; coverage may be limited). For transaction history from investments accounts, use the [Investments endpoint](https://plaid.com/docs/api/products/investments/) instead. Transaction data is standardized across financial institutions, and in many cases transactions are linked to a clean name, entity type, location, and category. Similarly, account data is standardized and returned with a clean name, number, balance, and other meta information where available.

Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.  Transactions are not immutable and can also be removed altogether by the institution; a removed transaction will no longer appear in `/transactions/get`.  For more details, see [Pending and posted transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).

Due to the potentially large number of transactions associated with an Item, results are paginated. Manipulate the `count` and `offset` parameters in conjunction with the `total_transactions` response body field to fetch all available transactions.

Data returned by `/transactions/get` will be the data available for the Item as of the most recent successful check for new transactions. Plaid typically checks for new data multiple times a day, but these checks may occur less frequently, such as once a day, depending on the institution. An Item's `status.transactions.last_successful_update` field will show the timestamp of the most recent successful update. To force Plaid to check for new transactions, you can use the `/transactions/refresh` endpoint.

Note that data may not be immediately available to `/transactions/get`. Plaid will begin to prepare transactions data upon Item link, if Link was initialized with `transactions`, or upon the first call to `/transactions/get`, if it wasn't. To be alerted when transaction data is ready to be fetched, listen for the [`INITIAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#initial_update) and [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#historical_update) webhooks. If no transaction history is ready when `/transactions/get` is called, it will return a `PRODUCT_NOT_READY` error.

</api/products/transactions/#transactionsget>

### Example Usage

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
    res, err := s.Plaid.TransactionsGet(ctx, shared.TransactionsGetRequest{
        AccessToken: "omnis",
        ClientID: sdk.String("quaerat"),
        EndDate: types.MustDateFromString("2022-08-06"),
        Options: &shared.TransactionsGetRequestOptions{
            AccountIds: []string{
                "culpa",
                "adipisci",
            },
            Count: sdk.Int64(890653),
            IncludeLogoAndCounterpartyBeta: sdk.Bool(false),
            IncludeOriginalDescription: sdk.Bool(false),
            IncludePersonalFinanceCategory: sdk.Bool(false),
            IncludePersonalFinanceCategoryBeta: sdk.Bool(false),
            Offset: sdk.Int64(514513),
        },
        Secret: sdk.String("eum"),
        StartDate: types.MustDateFromString("2022-01-27"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionsGetResponse != nil {
        // handle response
    }
}
```

## TransactionsRecurringGet

The `/transactions/recurring/get` endpoint allows developers to receive a summary of the recurring outflow and inflow streams (expenses and deposits) from a user’s checking, savings or credit card accounts. Additionally, Plaid provides key insights about each recurring stream including the category, merchant, last amount, and more. Developers can use these insights to build tools and experiences that help their users better manage cash flow, monitor subscriptions, reduce spend, and stay on track with bill payments.

This endpoint is offered as an add-on to Transactions. To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.

This endpoint can only be called on an Item that has already been initialized with Transactions (either during Link, by specifying it in `/link/token/create`; or after Link, by calling `/transactions/get` or `/transactions/sync`). Once all historical transactions have been fetched, call `/transactions/recurring/get` to receive the Recurring Transactions streams and subscribe to the [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update) webhook. To know when historical transactions have been fetched, if you are using `/transactions/sync` listen for the [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#SyncUpdatesAvailableWebhook-historical-update-complete) webhook and check that the `historical_update_complete` field in the payload is `true`. If using `/transactions/get`, listen for the [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#historical_update) webhook.

After the initial call, you can call `/transactions/recurring/get` endpoint at any point in the future to retrieve the latest summary of recurring streams. Listen to the [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update) webhook to be notified when new updates are available.

</api/products/transactions/#transactionsrecurringget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransactionsRecurringGet(ctx, shared.TransactionsRecurringGetRequest{
        AccessToken: "esse",
        AccountIds: []string{
            "quis",
            "eum",
            "reiciendis",
        },
        ClientID: sdk.String("provident"),
        Options: &shared.TransactionsRecurringGetRequestOptions{
            IncludePersonalFinanceCategory: sdk.Bool(false),
        },
        Secret: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionsRecurringGetResponse != nil {
        // handle response
    }
}
```

## TransactionsRefresh

`/transactions/refresh` is an optional endpoint for users of the Transactions product. It initiates an on-demand extraction to fetch the newest transactions for an Item. This on-demand extraction takes place in addition to the periodic extractions that automatically occur multiple times a day for any Transactions-enabled Item. If changes to transactions are discovered after calling `/transactions/refresh`, Plaid will fire a webhook: for `/transactions/sync` users, [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available) will be fired if there are any transactions updated, added, or removed. For users of both `/transactions/sync` and `/transactions/get`, [`TRANSACTIONS_REMOVED`](https://plaid.com/docs/api/products/transactions/#transactions_removed) will be fired if any removed transactions are detected, and [`DEFAULT_UPDATE`](https://plaid.com/docs/api/products/transactions/#default_update) will be fired if any new transactions are detected. New transactions can be fetched by calling `/transactions/get` or `/transactions/sync`. Note that the `/transactions/refresh` endpoint is not supported for Capital One (`ins_128026`) and will result in a `PRODUCT_NOT_SUPPORTED` error if called on an Item from that institution.

`/transactions/refresh` is offered as an add-on to Transactions and has a separate [fee model](/docs/account/billing/#per-request-flat-fee). To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.

</api/products/transactions/#transactionsrefresh>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransactionsRefresh(ctx, shared.TransactionsRefreshRequest{
        AccessToken: "ullam",
        ClientID: sdk.String("quasi"),
        Secret: sdk.String("animi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionsRefreshResponse != nil {
        // handle response
    }
}
```

## TransactionsRulesCreate

The `/transactions/rules/v1/create` endpoint creates transaction categorization rules.

Rules will be applied on the Item's transactions returned in `/transactions/get` response.

The product is currently in beta. To request access, contact transactions-feedback@plaid.com.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransactionsRulesCreate(ctx, shared.TransactionsRulesCreateRequest{
        AccessToken: "nostrum",
        ClientID: sdk.String("mollitia"),
        PersonalFinanceCategory: "provident",
        RuleDetails: shared.TransactionsRuleDetails{
            Field: shared.TransactionsRuleFieldEnumName,
            Query: "animi",
            Type: shared.TransactionsRuleTypeEnumExactMatch,
        },
        Secret: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionsRulesCreateResponse != nil {
        // handle response
    }
}
```

## TransactionsRulesList

The `/transactions/rules/v1/list` returns a list of transaction rules created for the Item associated with the access token.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransactionsRulesList(ctx, shared.TransactionsRulesListRequest{
        AccessToken: "accusantium",
        ClientID: sdk.String("repellat"),
        Secret: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionsRulesListResponse != nil {
        // handle response
    }
}
```

## TransactionsRulesRemove

The `/transactions/rules/v1/remove` endpoint is used to remove a transaction rule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransactionsRulesRemove(ctx, shared.TransactionsRulesRemoveRequest{
        AccessToken: "ullam",
        ClientID: sdk.String("in"),
        RuleID: "nam",
        Secret: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionsRulesRemoveResponse != nil {
        // handle response
    }
}
```

## TransactionsSync

This endpoint replaces `/transactions/get` and its associated webhooks for most common use-cases.

The `/transactions/sync` endpoint allows developers to subscribe to all transactions associated with an Item and get updates synchronously in a stream-like manner, using a cursor to track which updates have already been seen. `/transactions/sync` provides the same functionality as `/transactions/get` and can be used instead of `/transactions/get` to simplify the process of tracking transactions updates.

This endpoint provides user-authorized transaction data for `credit`, `depository`, and some loan-type accounts (only those with account subtype `student`; coverage may be limited). For transaction history from `investments` accounts, use `/investments/transactions/get` instead.

Returned transactions data is grouped into three types of update, indicating whether the transaction was added, removed, or modified since the last call to the API.

In the first call to `/transactions/sync` for an Item, the endpoint will return all historical transactions data associated with that Item up until the time of the API call (as "adds"), which then generates a `next_cursor` for that Item. In subsequent calls, send the `next_cursor` to receive only the changes that have occurred since the previous call.

Due to the potentially large number of transactions associated with an Item, results are paginated. The `has_more` field specifies if additional calls are necessary to fetch all available transaction updates. Call `/transactions/sync` with the new cursor, pulling all updates, until `has_more` is `false`.

When retrieving paginated updates, track both the `next_cursor` from the latest response and the original cursor from the first call in which `has_more` was `true`; if a call to `/transactions/sync` fails when retrieving a paginated update, which can occur as a result of the [`TRANSACTIONS_SYNC_MUTATION_DURING_PAGINATION`](https://plaid.com/docs/errors/transactions/#transactions_sync_mutation_during_pagination) error, the entire pagination request loop must be restarted beginning with the cursor for the first page of the update, rather than retrying only the single request that failed.

Whenever new or updated transaction data becomes available, `/transactions/sync` will provide these updates. Plaid typically checks for new data multiple times a day, but these checks may occur less frequently, such as once a day, depending on the institution. An Item's `status.transactions.last_successful_update` field will show the timestamp of the most recent successful update. To force Plaid to check for new transactions, use the `/transactions/refresh` endpoint.

Note that for newly created Items, data may not be immediately available to `/transactions/sync`. Plaid begins preparing transactions data when the Item is created, but the process can take anywhere from a few seconds to several minutes to complete, depending on the number of transactions available.

To be alerted when new data is available, listen for the [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available) webhook.

</api/products/transactions/#transactionssync>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransactionsSync(ctx, shared.TransactionsSyncRequest{
        AccessToken: "officia",
        ClientID: sdk.String("laborum"),
        Count: sdk.Int64(813054),
        Cursor: sdk.String("modi"),
        Options: &shared.TransactionsSyncRequestOptions{
            IncludeLogoAndCounterpartyBeta: sdk.Bool(false),
            IncludeOriginalDescription: sdk.Bool(false),
            IncludePersonalFinanceCategory: sdk.Bool(false),
        },
        Secret: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionsSyncResponse != nil {
        // handle response
    }
}
```

## TransferAuthorizationCreate

Use the `/transfer/authorization/create` endpoint to determine transfer failure risk.

In Plaid's Sandbox environment the decisions will be returned as follows:

  - To approve a transfer with null rationale code, make an authorization request with an `amount` less than the available balance in the account.

  - To approve a transfer with the rationale code `MANUALLY_VERIFIED_ITEM`, create an Item in Link through the [Same Day Micro-deposits flow](https://plaid.com/docs/auth/coverage/testing/#testing-same-day-micro-deposits).

  - To approve a transfer with the rationale code `ITEM_LOGIN_REQUIRED`, [reset the login for an Item](https://plaid.com/docs/sandbox/#item_login_required).

  - To decline a transfer with the rationale code `NSF`, the available balance on the account must be less than the authorization `amount`. See [Create Sandbox test data](https://plaid.com/docs/sandbox/user-custom/) for details on how to customize data in Sandbox.

  - To decline a transfer with the rationale code `RISK`, the available balance on the account must be exactly $0. See [Create Sandbox test data](https://plaid.com/docs/sandbox/user-custom/) for details on how to customize data in Sandbox.

`device.ip_address`, `device.user_agent` are required fields.

For [Guarantee](https://www.plaid.com/docs//transfer/guarantee/), the following fields are required : `idempotency_key`, `user.phone_number` (optional if `email_address` provided), `user.email_address` (optional if `phone_number` provided), `device.ip_address`, `device.user_agent`, and `user_present`.

</api/products/transfer/#transferauthorizationcreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferAuthorizationCreate(ctx, shared.TransferAuthorizationCreateRequest{
        AccessToken: sdk.String("molestias"),
        AccountID: sdk.String("officiis"),
        AchClass: shared.ACHClassEnumWeb.ToPointer(),
        Amount: "cumque",
        BeaconSessionID: sdk.String("vitae"),
        ClientID: sdk.String("rerum"),
        Device: map[string]interface{}{
            "quis": "inventore",
            "fugit": "cumque",
        },
        FundingAccountID: sdk.String("quae"),
        IdempotencyKey: sdk.String("perferendis"),
        IsoCurrencyCode: sdk.String("velit"),
        Network: shared.TransferNetworkEnumAch,
        OriginationAccountID: sdk.String("eum"),
        OriginatorClientID: sdk.String("eius"),
        PaymentProfileToken: sdk.String("rem"),
        Secret: sdk.String("at"),
        Type: shared.TransferTypeEnumCredit,
        User: map[string]interface{}{
            "sapiente": "eum",
        },
        UserPresent: sdk.Bool(false),
        WithGuarantee: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferAuthorizationCreateResponse != nil {
        // handle response
    }
}
```

## TransferCancel

Use the `/transfer/cancel` endpoint to cancel a transfer.  A transfer is eligible for cancellation if the `cancellable` property returned by `/transfer/get` is `true`.

</api/products/transfer/#transfercancel>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferCancel(ctx, shared.TransferCancelRequest{
        ClientID: sdk.String("dicta"),
        OriginatorClientID: sdk.String("minima"),
        Secret: sdk.String("beatae"),
        TransferID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferCancelResponse != nil {
        // handle response
    }
}
```

## TransferCapabilitiesGet

Use the `/transfer/capabilities/get` endpoint to determine the RTP eligibility information of a transfer.

</api/products/transfer/#transfercapabilitiesget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferCapabilitiesGet(ctx, shared.TransferCapabilitiesGetRequest{
        AccessToken: sdk.String("provident"),
        AccountID: sdk.String("earum"),
        ClientID: sdk.String("soluta"),
        PaymentProfileToken: sdk.String("hic"),
        Secret: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferCapabilitiesGetResponse != nil {
        // handle response
    }
}
```

## TransferConfigurationGet

Use the `/transfer/configuration/get` endpoint to view your transfer product configurations.

</api/products/transfer/#transferconfigurationget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferConfigurationGet(ctx, shared.TransferConfigurationGetRequest{
        ClientID: sdk.String("eaque"),
        OriginatorClientID: sdk.String("earum"),
        Secret: sdk.String("perspiciatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferConfigurationGetResponse != nil {
        // handle response
    }
}
```

## TransferCreate

Use the `/transfer/create` endpoint to initiate a new transfer.

</api/products/transfer/#transfercreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferCreate(ctx, shared.TransferCreateRequest{
        AccessToken: sdk.String("maiores"),
        AccountID: sdk.String("debitis"),
        AchClass: shared.TransferCreateRequestACHClassEnumPpd.ToPointer(),
        Amount: sdk.String("porro"),
        AuthorizationID: "suscipit",
        ClientID: sdk.String("dolorem"),
        Description: "fugit",
        IdempotencyKey: sdk.String("cumque"),
        IsoCurrencyCode: sdk.String("fuga"),
        Metadata: map[string]string{
            "animi": "necessitatibus",
        },
        Network: shared.TransferCreateRequestTransferNetworkEnumRtp.ToPointer(),
        OriginationAccountID: sdk.String("consequatur"),
        PaymentProfileToken: sdk.String("quasi"),
        Secret: sdk.String("et"),
        Type: shared.TransferCreateRequestTransferTypeEnumDebit.ToPointer(),
        User: map[string]interface{}{
            "occaecati": "suscipit",
            "adipisci": "quasi",
            "magni": "doloribus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferCreateResponse != nil {
        // handle response
    }
}
```

## TransferEventList

Use the `/transfer/event/list` endpoint to get a list of transfer events based on specified filter criteria.

</api/products/transfer/#transfereventlist>

### Example Usage

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
    res, err := s.Plaid.TransferEventList(ctx, shared.TransferEventListRequest{
        AccountID: sdk.String("nulla"),
        ClientID: sdk.String("necessitatibus"),
        Count: sdk.Int64(58534),
        EndDate: types.MustTimeFromString("2022-07-13T05:21:38.727Z"),
        EventTypes: []shared.TransferEventTypeEnum{
            shared.TransferEventTypeEnumCancelled,
            shared.TransferEventTypeEnumSettled,
        },
        FundingAccountID: sdk.String("esse"),
        Offset: sdk.Int64(508390),
        OriginationAccountID: sdk.String("maiores"),
        OriginatorClientID: sdk.String("reiciendis"),
        Secret: sdk.String("vel"),
        StartDate: types.MustTimeFromString("2022-02-22T03:35:08.438Z"),
        SweepID: sdk.String("doloremque"),
        TransferID: sdk.String("dicta"),
        TransferType: shared.TransferEventListTransferTypeEnumCredit.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferEventListResponse != nil {
        // handle response
    }
}
```

## TransferEventSync

`/transfer/event/sync` allows you to request up to the next 25 transfer events that happened after a specific `event_id`. Use the `/transfer/event/sync` endpoint to guarantee you have seen all transfer events. When using Auth with micro-deposit verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits. For more details, see [micro-deposit events](https://www.plaid.com/docs/auth/coverage/microdeposit-events/).

</api/products/transfer/#transfereventsync>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferEventSync(ctx, shared.TransferEventSyncRequest{
        AfterID: 271252,
        ClientID: sdk.String("esse"),
        Count: sdk.Int64(403793),
        Secret: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferEventSyncResponse != nil {
        // handle response
    }
}
```

## TransferGet

The `/transfer/get` endpoint fetches information about the transfer corresponding to the given `transfer_id`.

</api/products/transfer/#transferget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferGet(ctx, shared.TransferGetRequest{
        ClientID: sdk.String("aliquid"),
        OriginatorClientID: sdk.String("ipsa"),
        Secret: sdk.String("laborum"),
        TransferID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferGetResponse != nil {
        // handle response
    }
}
```

## TransferIntentCreate

Use the `/transfer/intent/create` endpoint to generate a transfer intent object and invoke the Transfer UI.

</api/products/transfer/#transferintentcreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferIntentCreate(ctx, shared.TransferIntentCreateRequest{
        AccountID: sdk.String("nostrum"),
        AchClass: shared.ACHClassEnumWeb.ToPointer(),
        Amount: "expedita",
        ClientID: sdk.String("aliquid"),
        Description: "officia",
        FundingAccountID: sdk.String("suscipit"),
        IsoCurrencyCode: sdk.String("aliquid"),
        Metadata: map[string]string{
            "eum": "voluptas",
        },
        Mode: shared.TransferIntentCreateModeEnumDisbursement,
        Network: shared.TransferIntentCreateNetworkEnumSameDayAch.ToPointer(),
        OriginationAccountID: sdk.String("ab"),
        RequireGuarantee: sdk.Bool(false),
        Secret: sdk.String("error"),
        User: map[string]interface{}{
            "voluptates": "mollitia",
            "laborum": "libero",
            "ad": "deleniti",
            "enim": "vitae",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferIntentCreateResponse != nil {
        // handle response
    }
}
```

## TransferIntentGet

Use the `/transfer/intent/get` endpoint to retrieve more information about a transfer intent.

</api/products/transfer/#transferintentget>

### Example Usage

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
            ClientID: "YOUR_API_KEY_HERE",
            PlaidVersion: "YOUR_API_KEY_HERE",
            Secret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Plaid.TransferIntentGet(ctx, map[string]interface{}{
        "ex": "quo",
        "ex": "ut",
        "ad": "expedita",
        "voluptatem": "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferIntentGetResponse != nil {
        // handle response
    }
}
```

## TransferList

Use the `/transfer/list` endpoint to see a list of all your transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired transfers.


</api/products/transfer/#transferlist>

### Example Usage

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
    res, err := s.Plaid.TransferList(ctx, shared.TransferListRequest{
        ClientID: sdk.String("cum"),
        Count: sdk.Int64(399660),
        EndDate: types.MustTimeFromString("2022-06-21T05:39:54.582Z"),
        FundingAccountID: sdk.String("omnis"),
        Offset: sdk.Int64(85233),
        OriginationAccountID: sdk.String("rerum"),
        OriginatorClientID: sdk.String("est"),
        Secret: sdk.String("culpa"),
        StartDate: types.MustTimeFromString("2022-01-15T21:54:49.962Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferListResponse != nil {
        // handle response
    }
}
```

## TransferMetricsGet

Use the `/transfer/metrics/get` endpoint to view your transfer product usage metrics.

</api/products/transfer/#transfermetricsget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferMetricsGet(ctx, shared.TransferMetricsGetRequest{
        ClientID: sdk.String("officiis"),
        OriginatorClientID: sdk.String("architecto"),
        Secret: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferMetricsGetResponse != nil {
        // handle response
    }
}
```

## TransferMigrateAccount

As an alternative to adding Items via Link, you can also use the `/transfer/migrate_account` endpoint to migrate known account and routing numbers to Plaid Items.  Note that Items created in this way are not compatible with endpoints for other products, such as `/accounts/balance/get`, and can only be used with Transfer endpoints.  If you require access to other endpoints, create the Item through Link instead.  Access to `/transfer/migrate_account` is not enabled by default; to obtain access, contact your Plaid Account Manager.

</api/products/transfer/#transfermigrate_account>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferMigrateAccount(ctx, shared.TransferMigrateAccountRequest{
        AccountNumber: "pariatur",
        AccountType: "debitis",
        ClientID: sdk.String("voluptatem"),
        RoutingNumber: "alias",
        Secret: sdk.String("deleniti"),
        WireRoutingNumber: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferMigrateAccountResponse != nil {
        // handle response
    }
}
```

## TransferOriginatorCreate

Use the `/transfer/originator/create` endpoint to create a new originator and return an `originator_client_id`.

</api/products/transfer/#transferoriginatorcreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferOriginatorCreate(ctx, shared.TransferOriginatorCreateRequest{
        ClientID: sdk.String("ex"),
        CompanyName: "sapiente",
        Secret: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferOriginatorCreateResponse != nil {
        // handle response
    }
}
```

## TransferOriginatorGetJSON

The `/transfer/originator/get` endpoint gets status updates for an originator's onboarding process. This information is also available via the Transfer page on the Plaid dashboard.

</api/products/transfer/#transferoriginatorget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferOriginatorGetJSON(ctx, shared.TransferOriginatorGetRequest{
        ClientID: sdk.String("minus"),
        OriginatorClientID: "nemo",
        Secret: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferOriginatorGetResponse != nil {
        // handle response
    }
}
```

## TransferOriginatorGetRaw

The `/transfer/originator/get` endpoint gets status updates for an originator's onboarding process. This information is also available via the Transfer page on the Plaid dashboard.

</api/products/transfer/#transferoriginatorget>

### Example Usage

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
            ClientID: "YOUR_API_KEY_HERE",
            PlaidVersion: "YOUR_API_KEY_HERE",
            Secret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Plaid.TransferOriginatorGetRaw(ctx, []byte("ratione"))
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferOriginatorGetResponse != nil {
        // handle response
    }
}
```

## TransferOriginatorList

The `/transfer/originator/list` endpoint gets status updates for all of your originators' onboarding. This information is also available via the Plaid dashboard.

</api/products/transfer/#transferoriginatorlist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferOriginatorList(ctx, shared.TransferOriginatorListRequest{
        ClientID: sdk.String("ullam"),
        Count: sdk.Int64(19122),
        Offset: sdk.Int64(848341),
        Secret: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferOriginatorListResponse != nil {
        // handle response
    }
}
```

## TransferQuestionnaireCreate

The `/transfer/questionnaire/create` endpoint generates a Plaid-hosted onboarding UI URL. Redirect the originator to this URL to provide their due diligence information and agree to Plaid’s terms for ACH money movement.

</api/products/transfer/#transferquestionnairecreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferQuestionnaireCreate(ctx, shared.TransferQuestionnaireCreateRequest{
        ClientID: sdk.String("impedit"),
        OriginatorClientID: "quibusdam",
        RedirectURI: "nam",
        Secret: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferQuestionnaireCreateResponse != nil {
        // handle response
    }
}
```

## TransferRecurringCancel

Use the `/transfer/recurring/cancel` endpoint to cancel a recurring transfer.  Scheduled transfer that hasn't been submitted to bank will be cancelled.

</api/products/transfer/#transferrecurringcancel>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferRecurringCancel(ctx, shared.TransferRecurringCancelRequest{
        ClientID: sdk.String("culpa"),
        RecurringTransferID: "dolor",
        Secret: sdk.String("aliquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferRecurringCancelResponse != nil {
        // handle response
    }
}
```

## TransferRecurringCreate

Use the `/transfer/recurring/create` endpoint to initiate a new recurring transfer.

</api/products/transfer/#transferrecurringcreate>

### Example Usage

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
    res, err := s.Plaid.TransferRecurringCreate(ctx, shared.TransferRecurringCreateRequest{
        AccessToken: "inventore",
        AccountID: "deleniti",
        AchClass: shared.ACHClassEnumCcd.ToPointer(),
        Amount: "tempora",
        ClientID: sdk.String("dolor"),
        Description: "consequatur",
        Device: map[string]interface{}{
            "sit": "modi",
        },
        FundingAccountID: sdk.String("fugit"),
        IdempotencyKey: "ab",
        IsoCurrencyCode: sdk.String("laudantium"),
        Network: shared.TransferNetworkEnumAch,
        Schedule: shared.TransferRecurringSchedule{
            EndDate: types.MustDateFromString("2022-02-22"),
            IntervalCount: 369490,
            IntervalExecutionDay: 162120,
            IntervalUnit: shared.TransferScheduleIntervalUnitEnumWeek,
            StartDate: types.MustDateFromString("2021-03-06"),
        },
        Secret: sdk.String("impedit"),
        TestClockID: sdk.String("officiis"),
        Type: shared.TransferTypeEnumDebit,
        User: map[string]interface{}{
            "sed": "veniam",
            "nesciunt": "expedita",
            "eum": "vel",
            "voluptatum": "magnam",
        },
        UserPresent: false,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferRecurringCreateResponse != nil {
        // handle response
    }
}
```

## TransferRecurringGet

The `/transfer/recurring/get` fetches information about the recurring transfer corresponding to the given `recurring_transfer_id`.

</api/products/transfer/#transferrecurringget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferRecurringGet(ctx, shared.TransferRecurringGetRequest{
        ClientID: sdk.String("exercitationem"),
        RecurringTransferID: "ab",
        Secret: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferRecurringGetResponse != nil {
        // handle response
    }
}
```

## TransferRecurringList

Use the `/transfer/recurring/list` endpoint to see a list of all your recurring transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired recurring transfers.


</api/products/transfer/#transferrecurringlist>

### Example Usage

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
    res, err := s.Plaid.TransferRecurringList(ctx, shared.TransferRecurringListRequest{
        ClientID: sdk.String("autem"),
        Count: sdk.Int64(751022),
        EndTime: types.MustTimeFromString("2022-01-27T13:37:28.253Z"),
        FundingAccountID: sdk.String("consequuntur"),
        Offset: sdk.Int64(28952),
        Secret: sdk.String("exercitationem"),
        StartTime: types.MustTimeFromString("2022-09-18T07:06:33.190Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferRecurringListResponse != nil {
        // handle response
    }
}
```

## TransferRefundCancel

Use the `/transfer/refund/cancel` endpoint to cancel a refund.  A refund is eligible for cancellation if it has not yet been submitted to the payment network.

</api/products/transfer/#transferrefundcancel>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferRefundCancel(ctx, shared.TransferRefundCancelRequest{
        ClientID: sdk.String("nisi"),
        RefundID: "at",
        Secret: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferRefundCancelResponse != nil {
        // handle response
    }
}
```

## TransferRefundCreate

Use the `/transfer/refund/create` endpoint to create a refund for a transfer. A transfer can be refunded if the transfer was initiated in the past 180 days.

Processing of the refund will not occur until at least 3 business days following the transfer's settlement date, plus any hold/settlement delays. This 3-day window helps better protect your business from regular ACH returns. Consumer initiated returns (unauthorized returns) could still happen for about 60 days from the settlement date. If the original transfer is canceled, returned or failed, all pending refunds will automatically be canceled. Processed refunds cannot be revoked.

</api/products/transfer/#transferrefundcreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferRefundCreate(ctx, shared.TransferRefundCreateRequest{
        Amount: "est",
        ClientID: sdk.String("harum"),
        IdempotencyKey: "sequi",
        Secret: sdk.String("doloribus"),
        TransferID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferRefundCreateResponse != nil {
        // handle response
    }
}
```

## TransferRefundGet

The `/transfer/refund/get` endpoint fetches information about the refund corresponding to the given `refund_id`.

</api/products/transfer/#transferrefundget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferRefundGet(ctx, shared.TransferRefundGetRequest{
        ClientID: sdk.String("optio"),
        RefundID: "occaecati",
        Secret: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferRefundGetResponse != nil {
        // handle response
    }
}
```

## TransferRepaymentList

The `/transfer/repayment/list` endpoint fetches repayments matching the given filters. Repayments are returned in reverse-chronological order (most recent first) starting at the given `start_time`.

</api/products/transfer/#transferrepaymentlist>

### Example Usage

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
    res, err := s.Plaid.TransferRepaymentList(ctx, shared.TransferRepaymentListRequest{
        ClientID: sdk.String("voluptate"),
        Count: sdk.Int64(501063),
        EndDate: types.MustTimeFromString("2022-04-01T05:39:42.685Z"),
        Offset: sdk.Int64(254025),
        Secret: sdk.String("nemo"),
        StartDate: types.MustTimeFromString("2022-06-24T12:57:10.621Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferRepaymentListResponse != nil {
        // handle response
    }
}
```

## TransferRepaymentReturnList

The `/transfer/repayment/return/list` endpoint retrieves the set of returns that were batched together into the specified repayment. The sum of amounts of returns retrieved by this request equals the amount of the repayment.

</api/products/transfer/#transferrepaymentreturnlist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferRepaymentReturnList(ctx, shared.TransferRepaymentReturnListRequest{
        ClientID: sdk.String("aspernatur"),
        Count: sdk.Int64(495970),
        Offset: sdk.Int64(200516),
        RepaymentID: "fuga",
        Secret: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferRepaymentReturnListResponse != nil {
        // handle response
    }
}
```

## TransferSweepGet

The `/transfer/sweep/get` endpoint fetches a sweep corresponding to the given `sweep_id`.

</api/products/transfer/#transfersweepget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.TransferSweepGet(ctx, shared.TransferSweepGetRequest{
        ClientID: sdk.String("incidunt"),
        Secret: sdk.String("quasi"),
        SweepID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferSweepGetResponse != nil {
        // handle response
    }
}
```

## TransferSweepList

The `/transfer/sweep/list` endpoint fetches sweeps matching the given filters.

</api/products/transfer/#transfersweeplist>

### Example Usage

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
    res, err := s.Plaid.TransferSweepList(ctx, shared.TransferSweepListRequest{
        ClientID: sdk.String("fugiat"),
        Count: sdk.Int64(117380),
        EndDate: types.MustTimeFromString("2022-11-03T15:45:18.212Z"),
        FundingAccountID: sdk.String("consectetur"),
        Offset: sdk.Int64(46806),
        OriginatorClientID: sdk.String("cupiditate"),
        Secret: sdk.String("reiciendis"),
        StartDate: types.MustTimeFromString("2022-12-29T04:21:58.833Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferSweepListResponse != nil {
        // handle response
    }
}
```

## UserCreate

This endpoint should be called for each of your end users before they begin a Plaid income flow. This provides you a single token to access all income data associated with the user. You should only create one per end user.

If you call the endpoint multiple times with the same `client_user_id`, the first creation call will succeed and the rest will fail with an error message indicating that the user has been created for the given `client_user_id`.

Ensure that you store the `user_token` along with your user's identifier in your database, as it is not possible to retrieve a previously created `user_token`.

</api/products/income/#usercreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.UserCreate(ctx, shared.UserCreateRequest{
        ClientID: sdk.String("omnis"),
        ClientUserID: "eos",
        Secret: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserCreateResponse != nil {
        // handle response
    }
}
```

## WalletCreate

Create an e-wallet. The response is the newly created e-wallet object.

</api/products/virtual-accounts/#walletcreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WalletCreate(ctx, shared.WalletCreateRequest{
        ClientID: sdk.String("iste"),
        IsoCurrencyCode: shared.WalletISOCurrencyCodeEnumGbp,
        Secret: sdk.String("inventore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WalletCreateResponse != nil {
        // handle response
    }
}
```

## WalletGet

Fetch an e-wallet. The response includes the current balance.

</api/products/virtual-accounts/#walletget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WalletGet(ctx, shared.WalletGetRequest{
        ClientID: sdk.String("fuga"),
        Secret: sdk.String("accusamus"),
        WalletID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WalletGetResponse != nil {
        // handle response
    }
}
```

## WalletList

This endpoint lists all e-wallets in descending order of creation.

</api/products/virtual-accounts/#walletlist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WalletList(ctx, shared.WalletListRequest{
        ClientID: sdk.String("distinctio"),
        Count: sdk.Int64(608593),
        Cursor: sdk.String("delectus"),
        IsoCurrencyCode: shared.WalletISOCurrencyCodeEnumGbp.ToPointer(),
        Secret: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WalletListResponse != nil {
        // handle response
    }
}
```

## WalletTransactionExecute

Execute a transaction using the specified e-wallet.
Specify the e-wallet to debit from, the counterparty to credit to, the idempotency key to prevent duplicate transactions, the amount and reference for the transaction.
Transactions will settle in seconds to several days, depending on the underlying payment rail.

</api/products/virtual-accounts/#wallettransactionexecute>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WalletTransactionExecute(ctx, shared.WalletTransactionExecuteRequest{
        Amount: map[string]interface{}{
            "magnam": "temporibus",
            "quos": "commodi",
            "itaque": "commodi",
            "totam": "earum",
        },
        ClientID: sdk.String("modi"),
        Counterparty: map[string]interface{}{
            "vero": "voluptatem",
            "ipsam": "vel",
            "alias": "quasi",
        },
        IdempotencyKey: "non",
        Reference: "maiores",
        Secret: sdk.String("enim"),
        WalletID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WalletTransactionExecuteResponse != nil {
        // handle response
    }
}
```

## WalletTransactionGet

Fetch a specific e-wallet transaction

</api/products/virtual-accounts/#wallettransactionget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WalletTransactionGet(ctx, shared.WalletTransactionGetRequest{
        ClientID: sdk.String("nulla"),
        Secret: sdk.String("deserunt"),
        TransactionID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WalletTransactionGetResponse != nil {
        // handle response
    }
}
```

## WalletTransactionList

This endpoint lists the latest transactions of the specified e-wallet. Transactions are returned in descending order by the `created_at` time.

</api/products/virtual-accounts/#wallettransactionlist>

### Example Usage

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
    res, err := s.Plaid.WalletTransactionList(ctx, shared.WalletTransactionListRequest{
        ClientID: sdk.String("nemo"),
        Count: sdk.Int64(444587),
        Cursor: sdk.String("est"),
        Options: &shared.WalletTransactionListRequestOptions{
            EndTime: types.MustTimeFromString("2022-06-06T06:38:58.719Z"),
            StartTime: types.MustTimeFromString("2020-09-04T17:19:05.591Z"),
        },
        Secret: sdk.String("hic"),
        WalletID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WalletTransactionListResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningEntityCreate

Create a new entity watchlist screening to check your customer against watchlists defined in the associated entity watchlist program. If your associated program has ongoing screening enabled, this is the profile information that will be used to monitor your customer over time.

</api/products/monitor/#watchlist_screeningentitycreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningEntityCreate(ctx, shared.WatchlistScreeningEntityCreateRequest{
        ClientID: sdk.String("asperiores"),
        ClientUserID: sdk.String("your-db-id-3b24110"),
        SearchTerms: shared.EntityWatchlistSearchTerms{
            Country: sdk.String("US"),
            DocumentNumber: sdk.String("C31195855"),
            EmailAddress: sdk.String("user@example.com"),
            EntityWatchlistProgramID: "entprg_2eRPsDnL66rZ7H",
            LegalName: "Al-Qaida",
            PhoneNumber: sdk.String("+14025671234"),
            URL: sdk.String("https://example.com"),
        },
        Secret: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningEntityCreateResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningEntityGet

Retrieve an entity watchlist screening.

</api/products/monitor/#watchlist_screeningentityget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningEntityGet(ctx, shared.WatchlistScreeningEntityGetRequest{
        ClientID: sdk.String("voluptas"),
        EntityWatchlistScreeningID: "entscr_52xR9LKo77r1Np",
        Secret: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningEntityGetResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningEntityHistoryList

List all changes to the entity watchlist screening in reverse-chronological order. If the watchlist screening has not been edited, no history will be returned.

</api/products/monitor/#watchlist_screeningentityhistorylist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningEntityHistoryList(ctx, shared.WatchlistScreeningEntityHistoryListRequest{
        ClientID: sdk.String("delectus"),
        Cursor: sdk.String("eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM"),
        EntityWatchlistScreeningID: "entscr_52xR9LKo77r1Np",
        Secret: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningEntityHistoryListResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningEntityHitList

List all hits for the entity watchlist screening.

</api/products/monitor/#watchlist_screeningentityhitlist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningEntityHitList(ctx, shared.WatchlistScreeningEntityHitListRequest{
        ClientID: sdk.String("minus"),
        Cursor: sdk.String("eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM"),
        EntityWatchlistScreeningID: "entscr_52xR9LKo77r1Np",
        Secret: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningEntityHitListResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningEntityList

List all entity screenings.

</api/products/monitor/#watchlist_screeningentitylist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningEntityList(ctx, shared.WatchlistScreeningEntityListRequest{
        Assignee: sdk.String("54350110fedcbaf01234ffee"),
        ClientID: sdk.String("laborum"),
        ClientUserID: sdk.String("your-db-id-3b24110"),
        Cursor: sdk.String("eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM"),
        EntityWatchlistProgramID: "entprg_2eRPsDnL66rZ7H",
        Secret: sdk.String("consectetur"),
        Status: shared.WatchlistScreeningStatusEnumCleared.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningEntityListResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningEntityProgramGet

Get an entity watchlist screening program

</api/products/monitor/#watchlist_screeningentityprogramget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningEntityProgramGet(ctx, shared.WatchlistScreeningEntityProgramGetRequest{
        ClientID: sdk.String("velit"),
        EntityWatchlistProgramID: "entprg_2eRPsDnL66rZ7H",
        Secret: sdk.String("atque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningEntityProgramGetResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningEntityProgramList

List all entity watchlist screening programs

</api/products/monitor/#watchlist_screeningentityprogramlist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningEntityProgramList(ctx, shared.WatchlistScreeningEntityProgramListRequest{
        ClientID: sdk.String("ipsum"),
        Cursor: sdk.String("eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM"),
        Secret: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningEntityProgramListResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningEntityReviewCreate

Create a review for an entity watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.

</api/products/monitor/#watchlist_screeningentityreviewcreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningEntityReviewCreate(ctx, shared.WatchlistScreeningEntityReviewCreateRequest{
        ClientID: sdk.String("magni"),
        Comment: sdk.String("These look like legitimate matches, rejecting the customer."),
        ConfirmedHits: []string{
            "enthit_52xR9LKo77r1Np",
            "enthit_52xR9LKo77r1Np",
            "enthit_52xR9LKo77r1Np",
        },
        DismissedHits: []string{
            "enthit_52xR9LKo77r1Np",
            "enthit_52xR9LKo77r1Np",
            "enthit_52xR9LKo77r1Np",
            "enthit_52xR9LKo77r1Np",
        },
        EntityWatchlistScreeningID: "entscr_52xR9LKo77r1Np",
        Secret: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningEntityReviewCreateResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningEntityReviewList

List all reviews for a particular entity watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.

</api/products/monitor/#watchlist_screeningentityreviewlist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningEntityReviewList(ctx, shared.WatchlistScreeningEntityReviewListRequest{
        ClientID: sdk.String("dolore"),
        Cursor: sdk.String("eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM"),
        EntityWatchlistScreeningID: "entscr_52xR9LKo77r1Np",
        Secret: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningEntityReviewListResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningEntityUpdate

Update an entity watchlist screening.

</api/products/monitor/#watchlist_screeningentityupdate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningEntityUpdate(ctx, shared.WatchlistScreeningEntityUpdateRequest{
        Assignee: sdk.String("54350110fedcbaf01234ffee"),
        ClientID: sdk.String("voluptate"),
        ClientUserID: sdk.String("your-db-id-3b24110"),
        EntityWatchlistScreeningID: "entscr_52xR9LKo77r1Np",
        ResetFields: []shared.WatchlistScreeningEntityUpdateRequestResettableFieldEnum{
            shared.WatchlistScreeningEntityUpdateRequestResettableFieldEnumAssignee,
        },
        SearchTerms: &shared.UpdateEntityScreeningRequestSearchTerms{
            Country: sdk.String("US"),
            DocumentNumber: sdk.String("C31195855"),
            EmailAddress: sdk.String("user@example.com"),
            EntityWatchlistProgramID: "entprg_2eRPsDnL66rZ7H",
            LegalName: sdk.String("Al-Qaida"),
            PhoneNumber: sdk.String("+14025671234"),
            URL: sdk.String("https://example.com"),
        },
        Secret: sdk.String("dignissimos"),
        Status: shared.WatchlistScreeningStatusEnumCleared.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningEntityUpdateResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningIndividualCreate

Create a new Watchlist Screening to check your customer against watchlists defined in the associated Watchlist Program. If your associated program has ongoing screening enabled, this is the profile information that will be used to monitor your customer over time.

</api/products/monitor/#watchlist_screeningindividualcreate>

### Example Usage

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
    res, err := s.Plaid.WatchlistScreeningIndividualCreate(ctx, shared.WatchlistScreeningIndividualCreateRequest{
        ClientID: sdk.String("neque"),
        ClientUserID: sdk.String("your-db-id-3b24110"),
        SearchTerms: shared.WatchlistScreeningRequestSearchTerms{
            Country: sdk.String("US"),
            DateOfBirth: types.MustDateFromString("1990-05-29"),
            DocumentNumber: sdk.String("C31195855"),
            LegalName: "Aleksey Potemkin",
            WatchlistProgramID: "prg_2eRPsDnL66rZ7H",
        },
        Secret: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningIndividualCreateResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningIndividualGet

Retrieve a previously created individual watchlist screening

</api/products/monitor/#watchlist_screeningindividualget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningIndividualGet(ctx, shared.WatchlistScreeningIndividualGetRequest{
        ClientID: sdk.String("deleniti"),
        Secret: sdk.String("quibusdam"),
        WatchlistScreeningID: "scr_52xR9LKo77r1Np",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningIndividualGetResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningIndividualHistoryList

List all changes to the individual watchlist screening in reverse-chronological order. If the watchlist screening has not been edited, no history will be returned.

</api/products/monitor/#watchlist_screeningindividualhistorylist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningIndividualHistoryList(ctx, shared.WatchlistScreeningIndividualHistoryListRequest{
        ClientID: sdk.String("iure"),
        Cursor: sdk.String("eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM"),
        Secret: sdk.String("odit"),
        WatchlistScreeningID: "scr_52xR9LKo77r1Np",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningIndividualHistoryListResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningIndividualHitList

List all hits found by Plaid for a particular individual watchlist screening.

</api/products/monitor/#watchlist_screeningindividualhitlist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningIndividualHitList(ctx, shared.WatchlistScreeningIndividualHitListRequest{
        ClientID: sdk.String("voluptatibus"),
        Cursor: sdk.String("eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM"),
        Secret: sdk.String("vel"),
        WatchlistScreeningID: "scr_52xR9LKo77r1Np",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningIndividualHitListResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningIndividualList

List previously created watchlist screenings for individuals

</api/products/monitor/#watchlist_screeningindividuallist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningIndividualList(ctx, shared.WatchlistScreeningIndividualListRequest{
        Assignee: sdk.String("54350110fedcbaf01234ffee"),
        ClientID: sdk.String("magnam"),
        ClientUserID: sdk.String("your-db-id-3b24110"),
        Cursor: sdk.String("eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM"),
        Secret: sdk.String("quibusdam"),
        Status: shared.WatchlistScreeningStatusEnumCleared.ToPointer(),
        WatchlistProgramID: "prg_2eRPsDnL66rZ7H",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningIndividualListResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningIndividualProgramGet

Get an individual watchlist screening program

</api/products/monitor/#watchlist_screeningindividualprogramget>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningIndividualProgramGet(ctx, shared.WatchlistScreeningIndividualProgramGetRequest{
        ClientID: sdk.String("inventore"),
        Secret: sdk.String("facere"),
        WatchlistProgramID: "prg_2eRPsDnL66rZ7H",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningIndividualProgramGetResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningIndividualProgramList

List all individual watchlist screening programs

</api/products/monitor/#watchlist_screeningindividualprogramlist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningIndividualProgramList(ctx, shared.WatchlistScreeningIndividualProgramListRequest{
        ClientID: sdk.String("libero"),
        Cursor: sdk.String("eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM"),
        Secret: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningIndividualProgramListResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningIndividualReviewCreate

Create a review for the individual watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.

</api/products/monitor/#watchlist_screeningindividualreviewcreate>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningIndividualReviewCreate(ctx, shared.WatchlistScreeningIndividualReviewCreateRequest{
        ClientID: sdk.String("voluptatibus"),
        Comment: sdk.String("These look like legitimate matches, rejecting the customer."),
        ConfirmedHits: []string{
            "scrhit_52xR9LKo77r1Np",
        },
        DismissedHits: []string{
            "scrhit_52xR9LKo77r1Np",
            "scrhit_52xR9LKo77r1Np",
            "scrhit_52xR9LKo77r1Np",
            "scrhit_52xR9LKo77r1Np",
        },
        Secret: sdk.String("aliquam"),
        WatchlistScreeningID: "scr_52xR9LKo77r1Np",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningIndividualReviewCreateResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningIndividualReviewList

List all reviews for the individual watchlist screening.

</api/products/monitor/#watchlist_screeningindividualreviewlist>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WatchlistScreeningIndividualReviewList(ctx, shared.WatchlistScreeningIndividualReviewListRequest{
        ClientID: sdk.String("velit"),
        Cursor: sdk.String("eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM"),
        Secret: sdk.String("illo"),
        WatchlistScreeningID: "scr_52xR9LKo77r1Np",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningIndividualReviewListResponse != nil {
        // handle response
    }
}
```

## WatchlistScreeningIndividualUpdate

Update a specific individual watchlist screening. This endpoint can be used to add additional customer information, correct outdated information, add a reference id, assign the individual to a reviewer, and update which program it is associated with. Please note that you may not update `search_terms` and `status` at the same time since editing `search_terms` may trigger an automatic `status` change.

</api/products/monitor/#watchlist_screeningindividualupdate>

### Example Usage

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
    res, err := s.Plaid.WatchlistScreeningIndividualUpdate(ctx, shared.WatchlistScreeningIndividualUpdateRequest{
        Assignee: sdk.String("54350110fedcbaf01234ffee"),
        ClientID: sdk.String("accusantium"),
        ClientUserID: sdk.String("your-db-id-3b24110"),
        ResetFields: []shared.WatchlistScreeningIndividualUpdateRequestResettableFieldEnum{
            shared.WatchlistScreeningIndividualUpdateRequestResettableFieldEnumAssignee,
            shared.WatchlistScreeningIndividualUpdateRequestResettableFieldEnumAssignee,
        },
        SearchTerms: &shared.UpdateIndividualScreeningRequestSearchTerms{
            Country: sdk.String("US"),
            DateOfBirth: types.MustDateFromString("1990-05-29"),
            DocumentNumber: sdk.String("C31195855"),
            LegalName: sdk.String("Aleksey Potemkin"),
            WatchlistProgramID: sdk.String("prg_2eRPsDnL66rZ7H"),
        },
        Secret: sdk.String("ea"),
        Status: shared.WatchlistScreeningStatusEnumCleared.ToPointer(),
        WatchlistScreeningID: "scr_52xR9LKo77r1Np",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchlistScreeningIndividualUpdateResponse != nil {
        // handle response
    }
}
```

## WebhookVerificationKeyGet

Plaid signs all outgoing webhooks and provides JSON Web Tokens (JWTs) so that you can verify the authenticity of any incoming webhooks to your application. A message signature is included in the `Plaid-Verification` header.

The `/webhook_verification_key/get` endpoint provides a JSON Web Key (JWK) that can be used to verify a JWT.

</api/webhooks/webhook-verification/#get-webhook-verification-key>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.Plaid.WebhookVerificationKeyGet(ctx, shared.WebhookVerificationKeyGetRequest{
        ClientID: sdk.String("beatae"),
        KeyID: "vero",
        Secret: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookVerificationKeyGetResponse != nil {
        // handle response
    }
}
```
