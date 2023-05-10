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
use \OpenAPI\OpenAPI\Models\Shared\AccountsBalanceGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountsBalanceGetRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountsBalanceGetRequest();
    $request->accessToken = 'corrupti';
    $request->clientId = 'provident';
    $request->options = new AccountsBalanceGetRequestOptions();
    $request->options->accountIds = [
        'quibusdam',
        'unde',
        'nulla',
    ];
    $request->options->minLastUpdatedDatetime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-22T12:08:58.275Z');
    $request->secret = 'vel';

    $response = $sdk->plaid->accountsBalanceGet($request);

    if ($response->accountsGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [plaid](docs/plaid/README.md)

* [accountsBalanceGet](docs/plaid/README.md#accountsbalanceget) - Retrieve real-time balance data
* [accountsGet](docs/plaid/README.md#accountsget) - Retrieve accounts
* [applicationGet](docs/plaid/README.md#applicationget) - Retrieve information about a Plaid application
* [assetReportAuditCopyCreate](docs/plaid/README.md#assetreportauditcopycreate) - Create Asset Report Audit Copy
* [assetReportAuditCopyGet](docs/plaid/README.md#assetreportauditcopyget) - Retrieve an Asset Report Audit Copy
* [assetReportAuditCopyRemove](docs/plaid/README.md#assetreportauditcopyremove) - Remove Asset Report Audit Copy
* [assetReportCreate](docs/plaid/README.md#assetreportcreate) - Create an Asset Report
* [assetReportFilter](docs/plaid/README.md#assetreportfilter) - Filter Asset Report
* [assetReportGet](docs/plaid/README.md#assetreportget) - Retrieve an Asset Report
* [assetReportPdfGet](docs/plaid/README.md#assetreportpdfget) - Retrieve a PDF Asset Report
* [assetReportRefresh](docs/plaid/README.md#assetreportrefresh) - Refresh an Asset Report
* [assetReportRemove](docs/plaid/README.md#assetreportremove) - Delete an Asset Report
* [authGet](docs/plaid/README.md#authget) - Retrieve auth data
* [bankTransferBalanceGet](docs/plaid/README.md#banktransferbalanceget) - Get balance of your Bank Transfer account
* [bankTransferCancel](docs/plaid/README.md#banktransfercancel) - Cancel a bank transfer
* [bankTransferCreate](docs/plaid/README.md#banktransfercreate) - Create a bank transfer
* [bankTransferEventList](docs/plaid/README.md#banktransfereventlist) - List bank transfer events
* [bankTransferEventSync](docs/plaid/README.md#banktransfereventsync) - Sync bank transfer events
* [bankTransferGet](docs/plaid/README.md#banktransferget) - Retrieve a bank transfer
* [bankTransferList](docs/plaid/README.md#banktransferlist) - List bank transfers
* [bankTransferMigrateAccount](docs/plaid/README.md#banktransfermigrateaccount) - Migrate account into Bank Transfers
* [bankTransferSweepGet](docs/plaid/README.md#banktransfersweepget) - Retrieve a sweep
* [bankTransferSweepList](docs/plaid/README.md#banktransfersweeplist) - List sweeps
* [categoriesGet](docs/plaid/README.md#categoriesget) - Get Categories
* [~~createPaymentToken~~](docs/plaid/README.md#createpaymenttoken) - Create payment token :warning: **Deprecated**
* [creditAssetReportFreddieMacGet](docs/plaid/README.md#creditassetreportfreddiemacget) - Retrieve an Asset Report with Freddie Mac format. Only Freddie Mac can use this endpoint.
* [creditAuditCopyTokenCreate](docs/plaid/README.md#creditauditcopytokencreate) - Create Asset or Income Report Audit Copy Token
* [creditAuditCopyTokenUpdate](docs/plaid/README.md#creditauditcopytokenupdate) - Update an Audit Copy Token
* [creditBankEmploymentGet](docs/plaid/README.md#creditbankemploymentget) - Retrieve information from the bank accounts used for employment verification
* [creditBankIncomeGet](docs/plaid/README.md#creditbankincomeget) - Retrieve information from the bank accounts used for income verification
* [creditBankIncomePdfGet](docs/plaid/README.md#creditbankincomepdfget) - Retrieve information from the bank accounts used for income verification in PDF format
* [creditBankIncomeRefresh](docs/plaid/README.md#creditbankincomerefresh) - Refresh a user's bank income information
* [creditEmploymentGet](docs/plaid/README.md#creditemploymentget) - Retrieve a summary of an individual's employment information
* [creditFreddieMacReportsGet](docs/plaid/README.md#creditfreddiemacreportsget) - Retrieve an Asset Report with Freddie Mac format (aka VOA - Verification Of Assets), and a Verification Of Employment (VOE) report if this one is available. Only Freddie Mac can use this endpoint.
* [creditPayrollIncomeGet](docs/plaid/README.md#creditpayrollincomeget) - Retrieve a user's payroll information
* [creditPayrollIncomePrecheck](docs/plaid/README.md#creditpayrollincomeprecheck) - Check income verification eligibility and optimize conversion
* [creditPayrollIncomeRefresh](docs/plaid/README.md#creditpayrollincomerefresh) - Refresh a digital payroll income verification
* [creditRelayCreate](docs/plaid/README.md#creditrelaycreate) - Create a relay token to share an Asset Report with a partner client (beta)
* [creditRelayGet](docs/plaid/README.md#creditrelayget) - Retrieve the reports associated with a relay token that was shared with you (beta)
* [creditRelayRefresh](docs/plaid/README.md#creditrelayrefresh) - Refresh a report of a relay token (beta)
* [creditRelayRemove](docs/plaid/README.md#creditrelayremove) - Remove relay token (beta)
* [creditReportAuditCopyRemove](docs/plaid/README.md#creditreportauditcopyremove) - Remove an Audit Copy token
* [creditSessionsGet](docs/plaid/README.md#creditsessionsget) - Retrieve Link sessions for your user
* [dashboardUserGet](docs/plaid/README.md#dashboarduserget) - Retrieve a dashboard user
* [dashboardUserList](docs/plaid/README.md#dashboarduserlist) - List dashboard users
* [depositSwitchAltCreate](docs/plaid/README.md#depositswitchaltcreate) - Create a deposit switch without using Plaid Exchange
* [depositSwitchCreate](docs/plaid/README.md#depositswitchcreate) - Create a deposit switch
* [depositSwitchGet](docs/plaid/README.md#depositswitchget) - Retrieve a deposit switch
* [depositSwitchTokenCreate](docs/plaid/README.md#depositswitchtokencreate) - Create a deposit switch token
* [employersSearch](docs/plaid/README.md#employerssearch) - Search employer database
* [~~employmentVerificationGet~~](docs/plaid/README.md#employmentverificationget) - (Deprecated) Retrieve a summary of an individual's employment information :warning: **Deprecated**
* [fdxNotifications](docs/plaid/README.md#fdxnotifications) - Webhook receiver for fdx notifications
* [identityGet](docs/plaid/README.md#identityget) - Retrieve identity data
* [identityMatch](docs/plaid/README.md#identitymatch) - Retrieve identity match score
* [identityVerificationCreate](docs/plaid/README.md#identityverificationcreate) - Create a new identity verification
* [identityVerificationGet](docs/plaid/README.md#identityverificationget) - Retrieve Identity Verification
* [identityVerificationList](docs/plaid/README.md#identityverificationlist) - List Identity Verifications
* [identityVerificationRetry](docs/plaid/README.md#identityverificationretry) - Retry an Identity Verification
* [~~incomeVerificationCreate~~](docs/plaid/README.md#incomeverificationcreate) - (Deprecated) Create an income verification instance :warning: **Deprecated**
* [~~incomeVerificationDocumentsDownload~~](docs/plaid/README.md#incomeverificationdocumentsdownload) - (Deprecated) Download the original documents used for income verification :warning: **Deprecated**
* [~~incomeVerificationPaystubsGet~~](docs/plaid/README.md#incomeverificationpaystubsget) - (Deprecated) Retrieve information from the paystubs used for income verification :warning: **Deprecated**
* [~~incomeVerificationPrecheck~~](docs/plaid/README.md#incomeverificationprecheck) - (Deprecated) Check digital income verification eligibility and optimize conversion :warning: **Deprecated**
* [~~incomeVerificationTaxformsGet~~](docs/plaid/README.md#incomeverificationtaxformsget) - (Deprecated) Retrieve information from the tax documents used for income verification :warning: **Deprecated**
* [institutionsGet](docs/plaid/README.md#institutionsget) - Get details of all supported institutions
* [institutionsGetById](docs/plaid/README.md#institutionsgetbyid) - Get details of an institution
* [institutionsSearch](docs/plaid/README.md#institutionssearch) - Search institutions
* [investmentsHoldingsGet](docs/plaid/README.md#investmentsholdingsget) - Get Investment holdings
* [investmentsTransactionsGet](docs/plaid/README.md#investmentstransactionsget) - Get investment transactions
* [itemAccessTokenInvalidate](docs/plaid/README.md#itemaccesstokeninvalidate) - Invalidate access_token
* [itemActivityList](docs/plaid/README.md#itemactivitylist) - List a historical log of user consent events
* [itemApplicationList](docs/plaid/README.md#itemapplicationlist) - List a user’s connected applications
* [itemApplicationScopesUpdate](docs/plaid/README.md#itemapplicationscopesupdate) - Update the scopes of access for a particular application
* [itemCreatePublicToken](docs/plaid/README.md#itemcreatepublictoken) - Create public token
* [itemGet](docs/plaid/README.md#itemget) - Retrieve an Item
* [itemImport](docs/plaid/README.md#itemimport) - Import Item
* [itemPublicTokenExchange](docs/plaid/README.md#itempublictokenexchange) - Exchange public token for an access token
* [itemRemove](docs/plaid/README.md#itemremove) - Remove an Item
* [itemWebhookUpdate](docs/plaid/README.md#itemwebhookupdate) - Update Webhook URL
* [liabilitiesGet](docs/plaid/README.md#liabilitiesget) - Retrieve Liabilities data
* [linkDeliveryCreate](docs/plaid/README.md#linkdeliverycreate) - Create Link Delivery session
* [linkDeliveryGet](docs/plaid/README.md#linkdeliveryget) - Get Link Delivery session
* [linkOauthCorrelationIdExchange](docs/plaid/README.md#linkoauthcorrelationidexchange) - Exchange the Link Correlation Id for a Link Token
* [linkTokenCreate](docs/plaid/README.md#linktokencreate) - Create Link Token
* [linkTokenGet](docs/plaid/README.md#linktokenget) - Get Link Token
* [partnerCustomerCreate](docs/plaid/README.md#partnercustomercreate) - Creates a new end customer for a Plaid reseller.
* [partnerCustomerEnable](docs/plaid/README.md#partnercustomerenable) - Enables a Plaid reseller's end customer in the Production environment.
* [partnerCustomerGet](docs/plaid/README.md#partnercustomerget) - Returns a Plaid reseller's end customer.
* [partnerCustomerOauthInstitutionsGet](docs/plaid/README.md#partnercustomeroauthinstitutionsget) - Returns OAuth-institution registration information for a given end customer.
* [partnerCustomerRemove](docs/plaid/README.md#partnercustomerremove) - Removes a Plaid reseller's end customer.
* [paymentInitiationConsentCreate](docs/plaid/README.md#paymentinitiationconsentcreate) - Create payment consent
* [paymentInitiationConsentGet](docs/plaid/README.md#paymentinitiationconsentget) - Get payment consent
* [paymentInitiationConsentPaymentExecute](docs/plaid/README.md#paymentinitiationconsentpaymentexecute) - Execute a single payment using consent
* [paymentInitiationConsentRevoke](docs/plaid/README.md#paymentinitiationconsentrevoke) - Revoke payment consent
* [paymentInitiationPaymentCreate](docs/plaid/README.md#paymentinitiationpaymentcreate) - Create a payment
* [paymentInitiationPaymentGet](docs/plaid/README.md#paymentinitiationpaymentget) - Get payment details
* [paymentInitiationPaymentList](docs/plaid/README.md#paymentinitiationpaymentlist) - List payments
* [paymentInitiationPaymentReverse](docs/plaid/README.md#paymentinitiationpaymentreverse) - Reverse an existing payment
* [paymentInitiationRecipientCreate](docs/plaid/README.md#paymentinitiationrecipientcreate) - Create payment recipient
* [paymentInitiationRecipientGet](docs/plaid/README.md#paymentinitiationrecipientget) - Get payment recipient
* [paymentInitiationRecipientList](docs/plaid/README.md#paymentinitiationrecipientlist) - List payment recipients
* [paymentProfileCreate](docs/plaid/README.md#paymentprofilecreate) - Create payment profile
* [paymentProfileGet](docs/plaid/README.md#paymentprofileget) - Get payment profile
* [paymentProfileRemove](docs/plaid/README.md#paymentprofileremove) - Remove payment profile
* [processorApexProcessorTokenCreate](docs/plaid/README.md#processorapexprocessortokencreate) - Create Apex bank account token
* [processorAuthGet](docs/plaid/README.md#processorauthget) - Retrieve Auth data
* [processorBalanceGet](docs/plaid/README.md#processorbalanceget) - Retrieve Balance data
* [processorBankTransferCreate](docs/plaid/README.md#processorbanktransfercreate) - Create a bank transfer as a processor
* [processorIdentityGet](docs/plaid/README.md#processoridentityget) - Retrieve Identity data
* [processorSignalDecisionReport](docs/plaid/README.md#processorsignaldecisionreport) - Report whether you initiated an ACH transaction
* [processorSignalEvaluate](docs/plaid/README.md#processorsignalevaluate) - Evaluate a planned ACH transaction
* [processorSignalReturnReport](docs/plaid/README.md#processorsignalreturnreport) - Report a return for an ACH transaction
* [processorStripeBankAccountTokenCreate](docs/plaid/README.md#processorstripebankaccounttokencreate) - Create Stripe bank account token
* [processorTokenCreate](docs/plaid/README.md#processortokencreate) - Create processor token
* [sandboxBankTransferFireWebhook](docs/plaid/README.md#sandboxbanktransferfirewebhook) - Manually fire a Bank Transfer webhook
* [sandboxBankTransferSimulate](docs/plaid/README.md#sandboxbanktransfersimulate) - Simulate a bank transfer event in Sandbox
* [sandboxIncomeFireWebhook](docs/plaid/README.md#sandboxincomefirewebhook) - Manually fire an Income webhook
* [sandboxItemFireWebhook](docs/plaid/README.md#sandboxitemfirewebhook) - Fire a test webhook
* [sandboxItemResetLogin](docs/plaid/README.md#sandboxitemresetlogin) - Force a Sandbox Item into an error state
* [sandboxItemSetVerificationStatus](docs/plaid/README.md#sandboxitemsetverificationstatus) - Set verification status for Sandbox account
* [sandboxOauthSelectAccounts](docs/plaid/README.md#sandboxoauthselectaccounts) - Save the selected accounts when connecting to the Platypus Oauth institution
* [sandboxPaymentProfileResetLogin](docs/plaid/README.md#sandboxpaymentprofileresetlogin) - Reset the login of a Payment Profile
* [sandboxProcessorTokenCreate](docs/plaid/README.md#sandboxprocessortokencreate) - Create a test Item and processor token
* [sandboxPublicTokenCreate](docs/plaid/README.md#sandboxpublictokencreate) - Create a test Item
* [sandboxTransferFireWebhook](docs/plaid/README.md#sandboxtransferfirewebhook) - Manually fire a Transfer webhook
* [sandboxTransferRepaymentSimulate](docs/plaid/README.md#sandboxtransferrepaymentsimulate) - Trigger the creation of a repayment
* [sandboxTransferSimulate](docs/plaid/README.md#sandboxtransfersimulate) - Simulate a transfer event in Sandbox
* [sandboxTransferSweepSimulate](docs/plaid/README.md#sandboxtransfersweepsimulate) - Simulate creating a sweep
* [sandboxTransferTestClockAdvance](docs/plaid/README.md#sandboxtransfertestclockadvance) - Advance a test clock
* [sandboxTransferTestClockCreate](docs/plaid/README.md#sandboxtransfertestclockcreate) - Create a test clock
* [sandboxTransferTestClockGet](docs/plaid/README.md#sandboxtransfertestclockget) - Get a test clock
* [sandboxTransferTestClockList](docs/plaid/README.md#sandboxtransfertestclocklist) - List test clocks
* [signalDecisionReport](docs/plaid/README.md#signaldecisionreport) - Report whether you initiated an ACH transaction
* [signalEvaluate](docs/plaid/README.md#signalevaluate) - Evaluate a planned ACH transaction
* [signalPrepare](docs/plaid/README.md#signalprepare) - Opt-in an Item to Signal
* [signalReturnReport](docs/plaid/README.md#signalreturnreport) - Report a return for an ACH transaction
* [transactionsEnhance](docs/plaid/README.md#transactionsenhance) - enhance locally-held transaction data
* [transactionsEnrich](docs/plaid/README.md#transactionsenrich) - Enrich locally-held transaction data
* [transactionsGet](docs/plaid/README.md#transactionsget) - Get transaction data
* [transactionsRecurringGet](docs/plaid/README.md#transactionsrecurringget) - Fetch recurring transaction streams
* [transactionsRefresh](docs/plaid/README.md#transactionsrefresh) - Refresh transaction data
* [transactionsRulesCreate](docs/plaid/README.md#transactionsrulescreate) - Create transaction category rule
* [transactionsRulesList](docs/plaid/README.md#transactionsruleslist) - Return a list of rules created for the Item associated with the access token.
* [transactionsRulesRemove](docs/plaid/README.md#transactionsrulesremove) - Remove transaction rule
* [transactionsSync](docs/plaid/README.md#transactionssync) - Get incremental transaction updates on an Item
* [transferAuthorizationCreate](docs/plaid/README.md#transferauthorizationcreate) - Create a transfer authorization
* [transferCancel](docs/plaid/README.md#transfercancel) - Cancel a transfer
* [transferCapabilitiesGet](docs/plaid/README.md#transfercapabilitiesget) - Get RTP eligibility information of a transfer
* [transferConfigurationGet](docs/plaid/README.md#transferconfigurationget) - Get transfer product configuration
* [transferCreate](docs/plaid/README.md#transfercreate) - Create a transfer
* [transferEventList](docs/plaid/README.md#transfereventlist) - List transfer events
* [transferEventSync](docs/plaid/README.md#transfereventsync) - Sync transfer events
* [transferGet](docs/plaid/README.md#transferget) - Retrieve a transfer
* [transferIntentCreate](docs/plaid/README.md#transferintentcreate) - Create a transfer intent object to invoke the Transfer UI
* [transferIntentGet](docs/plaid/README.md#transferintentget) - Retrieve more information about a transfer intent
* [transferList](docs/plaid/README.md#transferlist) - List transfers
* [transferMetricsGet](docs/plaid/README.md#transfermetricsget) - Get transfer product usage metrics
* [transferMigrateAccount](docs/plaid/README.md#transfermigrateaccount) - Migrate account into Transfers
* [transferOriginatorCreate](docs/plaid/README.md#transferoriginatorcreate) - Create a new originator
* [transferOriginatorGetJson](docs/plaid/README.md#transferoriginatorgetjson) - Get status of an originator's onboarding
* [transferOriginatorGetRaw](docs/plaid/README.md#transferoriginatorgetraw) - Get status of an originator's onboarding
* [transferOriginatorList](docs/plaid/README.md#transferoriginatorlist) - Get status of all originators' onboarding
* [transferQuestionnaireCreate](docs/plaid/README.md#transferquestionnairecreate) - Generate a Plaid-hosted onboarding UI URL.
* [transferRecurringCancel](docs/plaid/README.md#transferrecurringcancel) - Cancel a recurring transfer.
* [transferRecurringCreate](docs/plaid/README.md#transferrecurringcreate) - Create a recurring transfer
* [transferRecurringGet](docs/plaid/README.md#transferrecurringget) - Retrieve a recurring transfer
* [transferRecurringList](docs/plaid/README.md#transferrecurringlist) - List recurring transfers
* [transferRefundCancel](docs/plaid/README.md#transferrefundcancel) - Cancel a refund
* [transferRefundCreate](docs/plaid/README.md#transferrefundcreate) - Create a refund
* [transferRefundGet](docs/plaid/README.md#transferrefundget) - Retrieve a refund
* [transferRepaymentList](docs/plaid/README.md#transferrepaymentlist) - Lists historical repayments
* [transferRepaymentReturnList](docs/plaid/README.md#transferrepaymentreturnlist) - List the returns included in a repayment
* [transferSweepGet](docs/plaid/README.md#transfersweepget) - Retrieve a sweep
* [transferSweepList](docs/plaid/README.md#transfersweeplist) - List sweeps
* [userCreate](docs/plaid/README.md#usercreate) - Create user
* [walletCreate](docs/plaid/README.md#walletcreate) - Create an e-wallet
* [walletGet](docs/plaid/README.md#walletget) - Fetch an e-wallet
* [walletList](docs/plaid/README.md#walletlist) - Fetch a list of e-wallets
* [walletTransactionExecute](docs/plaid/README.md#wallettransactionexecute) - Execute a transaction using an e-wallet
* [walletTransactionGet](docs/plaid/README.md#wallettransactionget) - Fetch an e-wallet transaction
* [walletTransactionList](docs/plaid/README.md#wallettransactionlist) - List e-wallet transactions
* [watchlistScreeningEntityCreate](docs/plaid/README.md#watchlistscreeningentitycreate) - Create a watchlist screening for an entity
* [watchlistScreeningEntityGet](docs/plaid/README.md#watchlistscreeningentityget) - Get an entity screening
* [watchlistScreeningEntityHistoryList](docs/plaid/README.md#watchlistscreeningentityhistorylist) - List history for entity watchlist screenings
* [watchlistScreeningEntityHitList](docs/plaid/README.md#watchlistscreeningentityhitlist) - List hits for entity watchlist screenings
* [watchlistScreeningEntityList](docs/plaid/README.md#watchlistscreeningentitylist) - List entity watchlist screenings
* [watchlistScreeningEntityProgramGet](docs/plaid/README.md#watchlistscreeningentityprogramget) - Get entity watchlist screening program
* [watchlistScreeningEntityProgramList](docs/plaid/README.md#watchlistscreeningentityprogramlist) - List entity watchlist screening programs
* [watchlistScreeningEntityReviewCreate](docs/plaid/README.md#watchlistscreeningentityreviewcreate) - Create a review for an entity watchlist screening
* [watchlistScreeningEntityReviewList](docs/plaid/README.md#watchlistscreeningentityreviewlist) - List reviews for entity watchlist screenings
* [watchlistScreeningEntityUpdate](docs/plaid/README.md#watchlistscreeningentityupdate) - Update an entity screening
* [watchlistScreeningIndividualCreate](docs/plaid/README.md#watchlistscreeningindividualcreate) - Create a watchlist screening for a person
* [watchlistScreeningIndividualGet](docs/plaid/README.md#watchlistscreeningindividualget) - Retrieve an individual watchlist screening
* [watchlistScreeningIndividualHistoryList](docs/plaid/README.md#watchlistscreeningindividualhistorylist) - List history for individual watchlist screenings
* [watchlistScreeningIndividualHitList](docs/plaid/README.md#watchlistscreeningindividualhitlist) - List hits for individual watchlist screening
* [watchlistScreeningIndividualList](docs/plaid/README.md#watchlistscreeningindividuallist) - List Individual Watchlist Screenings
* [watchlistScreeningIndividualProgramGet](docs/plaid/README.md#watchlistscreeningindividualprogramget) - Get individual watchlist screening program
* [watchlistScreeningIndividualProgramList](docs/plaid/README.md#watchlistscreeningindividualprogramlist) - List individual watchlist screening programs
* [watchlistScreeningIndividualReviewCreate](docs/plaid/README.md#watchlistscreeningindividualreviewcreate) - Create a review for an individual watchlist screening
* [watchlistScreeningIndividualReviewList](docs/plaid/README.md#watchlistscreeningindividualreviewlist) - List reviews for individual watchlist screenings
* [watchlistScreeningIndividualUpdate](docs/plaid/README.md#watchlistscreeningindividualupdate) - Update individual watchlist screening
* [webhookVerificationKeyGet](docs/plaid/README.md#webhookverificationkeyget) - Get webhook verification key
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
