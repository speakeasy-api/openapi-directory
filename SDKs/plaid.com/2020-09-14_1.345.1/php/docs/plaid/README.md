# plaid

## Overview

The Plaid API

### Available Operations

* [accountsBalanceGet](#accountsbalanceget) - Retrieve real-time balance data
* [accountsGet](#accountsget) - Retrieve accounts
* [applicationGet](#applicationget) - Retrieve information about a Plaid application
* [assetReportAuditCopyCreate](#assetreportauditcopycreate) - Create Asset Report Audit Copy
* [assetReportAuditCopyGet](#assetreportauditcopyget) - Retrieve an Asset Report Audit Copy
* [assetReportAuditCopyRemove](#assetreportauditcopyremove) - Remove Asset Report Audit Copy
* [assetReportCreate](#assetreportcreate) - Create an Asset Report
* [assetReportFilter](#assetreportfilter) - Filter Asset Report
* [assetReportGet](#assetreportget) - Retrieve an Asset Report
* [assetReportPdfGet](#assetreportpdfget) - Retrieve a PDF Asset Report
* [assetReportRefresh](#assetreportrefresh) - Refresh an Asset Report
* [assetReportRemove](#assetreportremove) - Delete an Asset Report
* [authGet](#authget) - Retrieve auth data
* [bankTransferBalanceGet](#banktransferbalanceget) - Get balance of your Bank Transfer account
* [bankTransferCancel](#banktransfercancel) - Cancel a bank transfer
* [bankTransferCreate](#banktransfercreate) - Create a bank transfer
* [bankTransferEventList](#banktransfereventlist) - List bank transfer events
* [bankTransferEventSync](#banktransfereventsync) - Sync bank transfer events
* [bankTransferGet](#banktransferget) - Retrieve a bank transfer
* [bankTransferList](#banktransferlist) - List bank transfers
* [bankTransferMigrateAccount](#banktransfermigrateaccount) - Migrate account into Bank Transfers
* [bankTransferSweepGet](#banktransfersweepget) - Retrieve a sweep
* [bankTransferSweepList](#banktransfersweeplist) - List sweeps
* [categoriesGet](#categoriesget) - Get Categories
* [~~createPaymentToken~~](#createpaymenttoken) - Create payment token :warning: **Deprecated**
* [creditAssetReportFreddieMacGet](#creditassetreportfreddiemacget) - Retrieve an Asset Report with Freddie Mac format. Only Freddie Mac can use this endpoint.
* [creditAuditCopyTokenCreate](#creditauditcopytokencreate) - Create Asset or Income Report Audit Copy Token
* [creditAuditCopyTokenUpdate](#creditauditcopytokenupdate) - Update an Audit Copy Token
* [creditBankEmploymentGet](#creditbankemploymentget) - Retrieve information from the bank accounts used for employment verification
* [creditBankIncomeGet](#creditbankincomeget) - Retrieve information from the bank accounts used for income verification
* [creditBankIncomePdfGet](#creditbankincomepdfget) - Retrieve information from the bank accounts used for income verification in PDF format
* [creditBankIncomeRefresh](#creditbankincomerefresh) - Refresh a user's bank income information
* [creditEmploymentGet](#creditemploymentget) - Retrieve a summary of an individual's employment information
* [creditFreddieMacReportsGet](#creditfreddiemacreportsget) - Retrieve an Asset Report with Freddie Mac format (aka VOA - Verification Of Assets), and a Verification Of Employment (VOE) report if this one is available. Only Freddie Mac can use this endpoint.
* [creditPayrollIncomeGet](#creditpayrollincomeget) - Retrieve a user's payroll information
* [creditPayrollIncomePrecheck](#creditpayrollincomeprecheck) - Check income verification eligibility and optimize conversion
* [creditPayrollIncomeRefresh](#creditpayrollincomerefresh) - Refresh a digital payroll income verification
* [creditRelayCreate](#creditrelaycreate) - Create a relay token to share an Asset Report with a partner client (beta)
* [creditRelayGet](#creditrelayget) - Retrieve the reports associated with a relay token that was shared with you (beta)
* [creditRelayRefresh](#creditrelayrefresh) - Refresh a report of a relay token (beta)
* [creditRelayRemove](#creditrelayremove) - Remove relay token (beta)
* [creditReportAuditCopyRemove](#creditreportauditcopyremove) - Remove an Audit Copy token
* [creditSessionsGet](#creditsessionsget) - Retrieve Link sessions for your user
* [dashboardUserGet](#dashboarduserget) - Retrieve a dashboard user
* [dashboardUserList](#dashboarduserlist) - List dashboard users
* [depositSwitchAltCreate](#depositswitchaltcreate) - Create a deposit switch without using Plaid Exchange
* [depositSwitchCreate](#depositswitchcreate) - Create a deposit switch
* [depositSwitchGet](#depositswitchget) - Retrieve a deposit switch
* [depositSwitchTokenCreate](#depositswitchtokencreate) - Create a deposit switch token
* [employersSearch](#employerssearch) - Search employer database
* [~~employmentVerificationGet~~](#employmentverificationget) - (Deprecated) Retrieve a summary of an individual's employment information :warning: **Deprecated**
* [fdxNotifications](#fdxnotifications) - Webhook receiver for fdx notifications
* [identityGet](#identityget) - Retrieve identity data
* [identityMatch](#identitymatch) - Retrieve identity match score
* [identityVerificationCreate](#identityverificationcreate) - Create a new identity verification
* [identityVerificationGet](#identityverificationget) - Retrieve Identity Verification
* [identityVerificationList](#identityverificationlist) - List Identity Verifications
* [identityVerificationRetry](#identityverificationretry) - Retry an Identity Verification
* [~~incomeVerificationCreate~~](#incomeverificationcreate) - (Deprecated) Create an income verification instance :warning: **Deprecated**
* [~~incomeVerificationDocumentsDownload~~](#incomeverificationdocumentsdownload) - (Deprecated) Download the original documents used for income verification :warning: **Deprecated**
* [~~incomeVerificationPaystubsGet~~](#incomeverificationpaystubsget) - (Deprecated) Retrieve information from the paystubs used for income verification :warning: **Deprecated**
* [~~incomeVerificationPrecheck~~](#incomeverificationprecheck) - (Deprecated) Check digital income verification eligibility and optimize conversion :warning: **Deprecated**
* [~~incomeVerificationTaxformsGet~~](#incomeverificationtaxformsget) - (Deprecated) Retrieve information from the tax documents used for income verification :warning: **Deprecated**
* [institutionsGet](#institutionsget) - Get details of all supported institutions
* [institutionsGetById](#institutionsgetbyid) - Get details of an institution
* [institutionsSearch](#institutionssearch) - Search institutions
* [investmentsHoldingsGet](#investmentsholdingsget) - Get Investment holdings
* [investmentsTransactionsGet](#investmentstransactionsget) - Get investment transactions
* [itemAccessTokenInvalidate](#itemaccesstokeninvalidate) - Invalidate access_token
* [itemActivityList](#itemactivitylist) - List a historical log of user consent events
* [itemApplicationList](#itemapplicationlist) - List a user’s connected applications
* [itemApplicationScopesUpdate](#itemapplicationscopesupdate) - Update the scopes of access for a particular application
* [itemCreatePublicToken](#itemcreatepublictoken) - Create public token
* [itemGet](#itemget) - Retrieve an Item
* [itemImport](#itemimport) - Import Item
* [itemPublicTokenExchange](#itempublictokenexchange) - Exchange public token for an access token
* [itemRemove](#itemremove) - Remove an Item
* [itemWebhookUpdate](#itemwebhookupdate) - Update Webhook URL
* [liabilitiesGet](#liabilitiesget) - Retrieve Liabilities data
* [linkDeliveryCreate](#linkdeliverycreate) - Create Link Delivery session
* [linkDeliveryGet](#linkdeliveryget) - Get Link Delivery session
* [linkOauthCorrelationIdExchange](#linkoauthcorrelationidexchange) - Exchange the Link Correlation Id for a Link Token
* [linkTokenCreate](#linktokencreate) - Create Link Token
* [linkTokenGet](#linktokenget) - Get Link Token
* [partnerCustomerCreate](#partnercustomercreate) - Creates a new end customer for a Plaid reseller.
* [partnerCustomerEnable](#partnercustomerenable) - Enables a Plaid reseller's end customer in the Production environment.
* [partnerCustomerGet](#partnercustomerget) - Returns a Plaid reseller's end customer.
* [partnerCustomerOauthInstitutionsGet](#partnercustomeroauthinstitutionsget) - Returns OAuth-institution registration information for a given end customer.
* [partnerCustomerRemove](#partnercustomerremove) - Removes a Plaid reseller's end customer.
* [paymentInitiationConsentCreate](#paymentinitiationconsentcreate) - Create payment consent
* [paymentInitiationConsentGet](#paymentinitiationconsentget) - Get payment consent
* [paymentInitiationConsentPaymentExecute](#paymentinitiationconsentpaymentexecute) - Execute a single payment using consent
* [paymentInitiationConsentRevoke](#paymentinitiationconsentrevoke) - Revoke payment consent
* [paymentInitiationPaymentCreate](#paymentinitiationpaymentcreate) - Create a payment
* [paymentInitiationPaymentGet](#paymentinitiationpaymentget) - Get payment details
* [paymentInitiationPaymentList](#paymentinitiationpaymentlist) - List payments
* [paymentInitiationPaymentReverse](#paymentinitiationpaymentreverse) - Reverse an existing payment
* [paymentInitiationRecipientCreate](#paymentinitiationrecipientcreate) - Create payment recipient
* [paymentInitiationRecipientGet](#paymentinitiationrecipientget) - Get payment recipient
* [paymentInitiationRecipientList](#paymentinitiationrecipientlist) - List payment recipients
* [paymentProfileCreate](#paymentprofilecreate) - Create payment profile
* [paymentProfileGet](#paymentprofileget) - Get payment profile
* [paymentProfileRemove](#paymentprofileremove) - Remove payment profile
* [processorApexProcessorTokenCreate](#processorapexprocessortokencreate) - Create Apex bank account token
* [processorAuthGet](#processorauthget) - Retrieve Auth data
* [processorBalanceGet](#processorbalanceget) - Retrieve Balance data
* [processorBankTransferCreate](#processorbanktransfercreate) - Create a bank transfer as a processor
* [processorIdentityGet](#processoridentityget) - Retrieve Identity data
* [processorSignalDecisionReport](#processorsignaldecisionreport) - Report whether you initiated an ACH transaction
* [processorSignalEvaluate](#processorsignalevaluate) - Evaluate a planned ACH transaction
* [processorSignalReturnReport](#processorsignalreturnreport) - Report a return for an ACH transaction
* [processorStripeBankAccountTokenCreate](#processorstripebankaccounttokencreate) - Create Stripe bank account token
* [processorTokenCreate](#processortokencreate) - Create processor token
* [sandboxBankTransferFireWebhook](#sandboxbanktransferfirewebhook) - Manually fire a Bank Transfer webhook
* [sandboxBankTransferSimulate](#sandboxbanktransfersimulate) - Simulate a bank transfer event in Sandbox
* [sandboxIncomeFireWebhook](#sandboxincomefirewebhook) - Manually fire an Income webhook
* [sandboxItemFireWebhook](#sandboxitemfirewebhook) - Fire a test webhook
* [sandboxItemResetLogin](#sandboxitemresetlogin) - Force a Sandbox Item into an error state
* [sandboxItemSetVerificationStatus](#sandboxitemsetverificationstatus) - Set verification status for Sandbox account
* [sandboxOauthSelectAccounts](#sandboxoauthselectaccounts) - Save the selected accounts when connecting to the Platypus Oauth institution
* [sandboxPaymentProfileResetLogin](#sandboxpaymentprofileresetlogin) - Reset the login of a Payment Profile
* [sandboxProcessorTokenCreate](#sandboxprocessortokencreate) - Create a test Item and processor token
* [sandboxPublicTokenCreate](#sandboxpublictokencreate) - Create a test Item
* [sandboxTransferFireWebhook](#sandboxtransferfirewebhook) - Manually fire a Transfer webhook
* [sandboxTransferRepaymentSimulate](#sandboxtransferrepaymentsimulate) - Trigger the creation of a repayment
* [sandboxTransferSimulate](#sandboxtransfersimulate) - Simulate a transfer event in Sandbox
* [sandboxTransferSweepSimulate](#sandboxtransfersweepsimulate) - Simulate creating a sweep
* [sandboxTransferTestClockAdvance](#sandboxtransfertestclockadvance) - Advance a test clock
* [sandboxTransferTestClockCreate](#sandboxtransfertestclockcreate) - Create a test clock
* [sandboxTransferTestClockGet](#sandboxtransfertestclockget) - Get a test clock
* [sandboxTransferTestClockList](#sandboxtransfertestclocklist) - List test clocks
* [signalDecisionReport](#signaldecisionreport) - Report whether you initiated an ACH transaction
* [signalEvaluate](#signalevaluate) - Evaluate a planned ACH transaction
* [signalPrepare](#signalprepare) - Opt-in an Item to Signal
* [signalReturnReport](#signalreturnreport) - Report a return for an ACH transaction
* [transactionsEnhance](#transactionsenhance) - enhance locally-held transaction data
* [transactionsEnrich](#transactionsenrich) - Enrich locally-held transaction data
* [transactionsGet](#transactionsget) - Get transaction data
* [transactionsRecurringGet](#transactionsrecurringget) - Fetch recurring transaction streams
* [transactionsRefresh](#transactionsrefresh) - Refresh transaction data
* [transactionsRulesCreate](#transactionsrulescreate) - Create transaction category rule
* [transactionsRulesList](#transactionsruleslist) - Return a list of rules created for the Item associated with the access token.
* [transactionsRulesRemove](#transactionsrulesremove) - Remove transaction rule
* [transactionsSync](#transactionssync) - Get incremental transaction updates on an Item
* [transferAuthorizationCreate](#transferauthorizationcreate) - Create a transfer authorization
* [transferCancel](#transfercancel) - Cancel a transfer
* [transferCapabilitiesGet](#transfercapabilitiesget) - Get RTP eligibility information of a transfer
* [transferConfigurationGet](#transferconfigurationget) - Get transfer product configuration
* [transferCreate](#transfercreate) - Create a transfer
* [transferEventList](#transfereventlist) - List transfer events
* [transferEventSync](#transfereventsync) - Sync transfer events
* [transferGet](#transferget) - Retrieve a transfer
* [transferIntentCreate](#transferintentcreate) - Create a transfer intent object to invoke the Transfer UI
* [transferIntentGet](#transferintentget) - Retrieve more information about a transfer intent
* [transferList](#transferlist) - List transfers
* [transferMetricsGet](#transfermetricsget) - Get transfer product usage metrics
* [transferMigrateAccount](#transfermigrateaccount) - Migrate account into Transfers
* [transferOriginatorCreate](#transferoriginatorcreate) - Create a new originator
* [transferOriginatorGetJson](#transferoriginatorgetjson) - Get status of an originator's onboarding
* [transferOriginatorGetRaw](#transferoriginatorgetraw) - Get status of an originator's onboarding
* [transferOriginatorList](#transferoriginatorlist) - Get status of all originators' onboarding
* [transferQuestionnaireCreate](#transferquestionnairecreate) - Generate a Plaid-hosted onboarding UI URL.
* [transferRecurringCancel](#transferrecurringcancel) - Cancel a recurring transfer.
* [transferRecurringCreate](#transferrecurringcreate) - Create a recurring transfer
* [transferRecurringGet](#transferrecurringget) - Retrieve a recurring transfer
* [transferRecurringList](#transferrecurringlist) - List recurring transfers
* [transferRefundCancel](#transferrefundcancel) - Cancel a refund
* [transferRefundCreate](#transferrefundcreate) - Create a refund
* [transferRefundGet](#transferrefundget) - Retrieve a refund
* [transferRepaymentList](#transferrepaymentlist) - Lists historical repayments
* [transferRepaymentReturnList](#transferrepaymentreturnlist) - List the returns included in a repayment
* [transferSweepGet](#transfersweepget) - Retrieve a sweep
* [transferSweepList](#transfersweeplist) - List sweeps
* [userCreate](#usercreate) - Create user
* [walletCreate](#walletcreate) - Create an e-wallet
* [walletGet](#walletget) - Fetch an e-wallet
* [walletList](#walletlist) - Fetch a list of e-wallets
* [walletTransactionExecute](#wallettransactionexecute) - Execute a transaction using an e-wallet
* [walletTransactionGet](#wallettransactionget) - Fetch an e-wallet transaction
* [walletTransactionList](#wallettransactionlist) - List e-wallet transactions
* [watchlistScreeningEntityCreate](#watchlistscreeningentitycreate) - Create a watchlist screening for an entity
* [watchlistScreeningEntityGet](#watchlistscreeningentityget) - Get an entity screening
* [watchlistScreeningEntityHistoryList](#watchlistscreeningentityhistorylist) - List history for entity watchlist screenings
* [watchlistScreeningEntityHitList](#watchlistscreeningentityhitlist) - List hits for entity watchlist screenings
* [watchlistScreeningEntityList](#watchlistscreeningentitylist) - List entity watchlist screenings
* [watchlistScreeningEntityProgramGet](#watchlistscreeningentityprogramget) - Get entity watchlist screening program
* [watchlistScreeningEntityProgramList](#watchlistscreeningentityprogramlist) - List entity watchlist screening programs
* [watchlistScreeningEntityReviewCreate](#watchlistscreeningentityreviewcreate) - Create a review for an entity watchlist screening
* [watchlistScreeningEntityReviewList](#watchlistscreeningentityreviewlist) - List reviews for entity watchlist screenings
* [watchlistScreeningEntityUpdate](#watchlistscreeningentityupdate) - Update an entity screening
* [watchlistScreeningIndividualCreate](#watchlistscreeningindividualcreate) - Create a watchlist screening for a person
* [watchlistScreeningIndividualGet](#watchlistscreeningindividualget) - Retrieve an individual watchlist screening
* [watchlistScreeningIndividualHistoryList](#watchlistscreeningindividualhistorylist) - List history for individual watchlist screenings
* [watchlistScreeningIndividualHitList](#watchlistscreeningindividualhitlist) - List hits for individual watchlist screening
* [watchlistScreeningIndividualList](#watchlistscreeningindividuallist) - List Individual Watchlist Screenings
* [watchlistScreeningIndividualProgramGet](#watchlistscreeningindividualprogramget) - Get individual watchlist screening program
* [watchlistScreeningIndividualProgramList](#watchlistscreeningindividualprogramlist) - List individual watchlist screening programs
* [watchlistScreeningIndividualReviewCreate](#watchlistscreeningindividualreviewcreate) - Create a review for an individual watchlist screening
* [watchlistScreeningIndividualReviewList](#watchlistscreeningindividualreviewlist) - List reviews for individual watchlist screenings
* [watchlistScreeningIndividualUpdate](#watchlistscreeningindividualupdate) - Update individual watchlist screening
* [webhookVerificationKeyGet](#webhookverificationkeyget) - Get webhook verification key

## accountsBalanceGet

The `/accounts/balance/get` endpoint returns the real-time balance for each of an Item's accounts. While other endpoints may return a balance object, only `/accounts/balance/get` forces the available and current balance fields to be refreshed rather than cached. This endpoint can be used for existing Items that were added via any of Plaid’s other products. This endpoint can be used as long as Link has been initialized with any other product, `balance` itself is not a product that can be used to initialize Link. As this endpoint triggers a synchronous request for fresh data, latency may be higher than for other Plaid endpoints; if you encounter errors, you may find it necessary to adjust your timeout period when making requests.

</api/products/balance/#accountsbalanceget>

### Example Usage

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
    $request->accessToken = 'error';
    $request->clientId = 'deserunt';
    $request->options = new AccountsBalanceGetRequestOptions();
    $request->options->accountIds = [
        'iure',
        'magnam',
    ];
    $request->options->minLastUpdatedDatetime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-30T21:34:57.850Z');
    $request->secret = 'delectus';

    $response = $sdk->plaid->accountsBalanceGet($request);

    if ($response->accountsGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountsGet

The `/accounts/get` endpoint can be used to retrieve a list of accounts associated with any linked Item. Plaid will only return active bank accounts — that is, accounts that are not closed and are capable of carrying a balance.
For items that went through the updated account selection pane, this endpoint only returns accounts that were permissioned by the user when they initially created the Item. If a user creates a new account after the initial link, you can capture this event through the [`NEW_ACCOUNTS_AVAILABLE`](https://plaid.com/docs/api/items/#new_accounts_available) webhook and then use Link's [update mode](https://plaid.com/docs/link/update-mode/) to request that the user share this new account with you.

This endpoint retrieves cached information, rather than extracting fresh information from the institution. As a result, balances returned may not be up-to-date; for realtime balance information, use `/accounts/balance/get` instead. Note that some information is nullable.

</api/accounts/#accountsget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AccountsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountsGetRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountsGetRequest();
    $request->accessToken = 'tempora';
    $request->clientId = 'suscipit';
    $request->options = new AccountsGetRequestOptions();
    $request->options->accountIds = [
        'minus',
        'placeat',
    ];
    $request->secret = 'voluptatum';

    $response = $sdk->plaid->accountsGet($request);

    if ($response->accountsGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## applicationGet

Allows financial institutions to retrieve information about Plaid clients for the purpose of building control-tower experiences

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplicationGetRequest();
    $request->applicationId = 'iusto';
    $request->clientId = 'excepturi';
    $request->secret = 'nisi';

    $response = $sdk->plaid->applicationGet($request);

    if ($response->applicationGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assetReportAuditCopyCreate

Plaid can provide an Audit Copy of any Asset Report directly to a participating third party on your behalf. For example, Plaid can supply an Audit Copy directly to Fannie Mae on your behalf if you participate in the Day 1 Certainty™ program. An Audit Copy contains the same underlying data as the Asset Report.

To grant access to an Audit Copy, use the `/asset_report/audit_copy/create` endpoint to create an `audit_copy_token` and then pass that token to the third party who needs access. Each third party has its own `auditor_id`, for example `fannie_mae`. You’ll need to create a separate Audit Copy for each third party to whom you want to grant access to the Report.

</api/products/assets/#asset_reportaudit_copycreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AssetReportAuditCopyCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssetReportAuditCopyCreateRequest();
    $request->assetReportToken = 'recusandae';
    $request->auditorId = 'temporibus';
    $request->clientId = 'ab';
    $request->secret = 'quis';

    $response = $sdk->plaid->assetReportAuditCopyCreate($request);

    if ($response->assetReportAuditCopyCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assetReportAuditCopyGet

`/asset_report/audit_copy/get` allows auditors to get a copy of an Asset Report that was previously shared via the `/asset_report/audit_copy/create` endpoint.  The caller of `/asset_report/audit_copy/create` must provide the `audit_copy_token` to the auditor.  This token can then be used to call `/asset_report/audit_copy/create`.

</none/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AssetReportAuditCopyGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssetReportAuditCopyGetRequest();
    $request->auditCopyToken = 'veritatis';
    $request->clientId = 'deserunt';
    $request->secret = 'perferendis';

    $response = $sdk->plaid->assetReportAuditCopyGet($request);

    if ($response->assetReportGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assetReportAuditCopyRemove

The `/asset_report/audit_copy/remove` endpoint allows you to remove an Audit Copy. Removing an Audit Copy invalidates the `audit_copy_token` associated with it, meaning both you and any third parties holding the token will no longer be able to use it to access Report data. Items associated with the Asset Report, the Asset Report itself and other Audit Copies of it are not affected and will remain accessible after removing the given Audit Copy.

</api/products/assets/#asset_reportaudit_copyremove>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AssetReportAuditCopyRemoveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssetReportAuditCopyRemoveRequest();
    $request->auditCopyToken = 'ipsam';
    $request->clientId = 'repellendus';
    $request->secret = 'sapiente';

    $response = $sdk->plaid->assetReportAuditCopyRemove($request);

    if ($response->assetReportAuditCopyRemoveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assetReportCreate

The `/asset_report/create` endpoint initiates the process of creating an Asset Report, which can then be retrieved by passing the `asset_report_token` return value to the `/asset_report/get` or `/asset_report/pdf/get` endpoints.

The Asset Report takes some time to be created and is not available immediately after calling `/asset_report/create`. When the Asset Report is ready to be retrieved using `/asset_report/get` or `/asset_report/pdf/get`, Plaid will fire a `PRODUCT_READY` webhook. For full details of the webhook schema, see [Asset Report webhooks](https://plaid.com/docs/api/products/assets/#webhooks).

The `/asset_report/create` endpoint creates an Asset Report at a moment in time. Asset Reports are immutable. To get an updated Asset Report, use the `/asset_report/refresh` endpoint.

</api/products/assets/#asset_reportcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AssetReportCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssetReportCreateRequestOptions;
use \OpenAPI\OpenAPI\Models\Shared\AssetReportAddOnsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssetReportCreateRequest();
    $request->accessTokens = [
        'odit',
        'at',
        'at',
        'maiores',
    ];
    $request->clientId = 'molestiae';
    $request->daysRequested = 799159;
    $request->options = new AssetReportCreateRequestOptions();
    $request->options->addOns = [
        AssetReportAddOnsEnum::INVESTMENTS,
        AssetReportAddOnsEnum::FAST_ASSETS,
        AssetReportAddOnsEnum::FAST_ASSETS,
        AssetReportAddOnsEnum::FAST_ASSETS,
    ];
    $request->options->clientReportId = 'dicta';
    $request->options->includeFastReport = false;
    $request->options->products = [
        'officia',
        'occaecati',
        'fugit',
    ];
    $request->options->user = [
        'hic' => 'optio',
        'totam' => 'beatae',
        'commodi' => 'molestiae',
    ];
    $request->options->webhook = 'modi';
    $request->secret = 'qui';
    $request->userToken = 'impedit';

    $response = $sdk->plaid->assetReportCreate($request);

    if ($response->assetReportCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assetReportFilter

By default, an Asset Report will contain all of the accounts on a given Item. In some cases, you may not want the Asset Report to contain all accounts. For example, you might have the end user choose which accounts are relevant in Link using the Account Select view, which you can enable in the dashboard. Or, you might always exclude certain account types or subtypes, which you can identify by using the `/accounts/get` endpoint. To narrow an Asset Report to only a subset of accounts, use the `/asset_report/filter` endpoint.

To exclude certain Accounts from an Asset Report, first use the `/asset_report/create` endpoint to create the report, then send the `asset_report_token` along with a list of `account_ids` to exclude to the `/asset_report/filter` endpoint, to create a new Asset Report which contains only a subset of the original Asset Report's data.

Because Asset Reports are immutable, calling `/asset_report/filter` does not alter the original Asset Report in any way; rather, `/asset_report/filter` creates a new Asset Report with a new token and id. Asset Reports created via `/asset_report/filter` do not contain new Asset data, and are not billed.

Plaid will fire a [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook once generation of the filtered Asset Report has completed.

</api/products/assets/#asset_reportfilter>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AssetReportFilterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssetReportFilterRequest();
    $request->accountIdsToExclude = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->assetReportToken = 'aspernatur';
    $request->clientId = 'perferendis';
    $request->secret = 'ad';

    $response = $sdk->plaid->assetReportFilter($request);

    if ($response->assetReportFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assetReportGet

The `/asset_report/get` endpoint retrieves the Asset Report in JSON format. Before calling `/asset_report/get`, you must first create the Asset Report using `/asset_report/create` (or filter an Asset Report using `/asset_report/filter`) and then wait for the [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire, indicating that the Report is ready to be retrieved.

By default, an Asset Report includes transaction descriptions as returned by the bank, as opposed to parsed and categorized by Plaid. You can also receive cleaned and categorized transactions, as well as additional insights like merchant name or location information. We call this an Asset Report with Insights. An Asset Report with Insights provides transaction category, location, and merchant information in addition to the transaction strings provided in a standard Asset Report.

If report_type was set to `VERIFICATION_OF_EMPLOYMENT` when the Asset Report was created in asset_report/create, debit transactions and transaction amounts won’t be included in the report.

To retrieve an Asset Report with Insights, call the `/asset_report/get` endpoint with `include_insights` set to `true`.

</api/products/assets/#asset_reportget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AssetReportGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssetReportGetRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssetReportGetRequest();
    $request->assetReportToken = 'natus';
    $request->clientId = 'sed';
    $request->fastReport = false;
    $request->includeInsights = false;
    $request->options = new AssetReportGetRequestOptions();
    $request->options->daysToInclude = 612096;
    $request->secret = 'dolor';

    $response = $sdk->plaid->assetReportGet($request);

    if ($response->assetReportGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assetReportPdfGet

The `/asset_report/pdf/get` endpoint retrieves the Asset Report in PDF format. Before calling `/asset_report/pdf/get`, you must first create the Asset Report using `/asset_report/create` (or filter an Asset Report using `/asset_report/filter`) and then wait for the [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire, indicating that the Report is ready to be retrieved.

The response to `/asset_report/pdf/get` is the PDF binary data. The `request_id`  is returned in the `Plaid-Request-ID` header.

If report_type was set to `VERIFICATION_OF_EMPLOYMENT` when the Asset Report was created in asset_report/create, debit transactions and transaction amounts won’t be included in the report.

[View a sample PDF Asset Report](https://plaid.com/documents/sample-asset-report.pdf).

</api/products/assets/#asset_reportpdfget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AssetReportPDFGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssetReportPDFGetRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssetReportPDFGetRequest();
    $request->assetReportToken = 'natus';
    $request->clientId = 'laboriosam';
    $request->options = new AssetReportPDFGetRequestOptions();
    $request->options->daysToInclude = 943749;
    $request->secret = 'saepe';

    $response = $sdk->plaid->assetReportPdfGet($request);

    if ($response->assetReportPDFGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assetReportRefresh

An Asset Report is an immutable snapshot of a user's assets. In order to "refresh" an Asset Report you created previously, you can use the `/asset_report/refresh` endpoint to create a new Asset Report based on the old one, but with the most recent data available.

The new Asset Report will contain the same Items as the original Report, as well as the same filters applied by any call to `/asset_report/filter`. By default, the new Asset Report will also use the same parameters you submitted with your original `/asset_report/create` request, but the original `days_requested` value and the values of any parameters in the `options` object can be overridden with new values. To change these arguments, simply supply new values for them in your request to `/asset_report/refresh`. Submit an empty string ("") for any previously-populated fields you would like set as empty.

</api/products/assets/#asset_reportrefresh>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AssetReportRefreshRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssetReportRefreshRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssetReportRefreshRequest();
    $request->assetReportToken = 'fuga';
    $request->clientId = 'in';
    $request->daysRequested = 359508;
    $request->options = new AssetReportRefreshRequestOptions();
    $request->options->clientReportId = 'iste';
    $request->options->user = [
        'saepe' => 'quidem',
        'architecto' => 'ipsa',
    ];
    $request->options->webhook = 'reiciendis';
    $request->secret = 'est';

    $response = $sdk->plaid->assetReportRefresh($request);

    if ($response->assetReportRefreshResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assetReportRemove

The `/item/remove` endpoint allows you to invalidate an `access_token`, meaning you will not be able to create new Asset Reports with it. Removing an Item does not affect any Asset Reports or Audit Copies you have already created, which will remain accessible until you remove them specifically.

The `/asset_report/remove` endpoint allows you to remove an Asset Report. Removing an Asset Report invalidates its `asset_report_token`, meaning you will no longer be able to use it to access Report data or create new Audit Copies. Removing an Asset Report does not affect the underlying Items, but does invalidate any `audit_copy_tokens` associated with the Asset Report.

</api/products/assets/#asset_reportremove>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AssetReportRemoveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssetReportRemoveRequest();
    $request->assetReportToken = 'mollitia';
    $request->clientId = 'laborum';
    $request->secret = 'dolores';

    $response = $sdk->plaid->assetReportRemove($request);

    if ($response->assetReportRemoveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authGet

The `/auth/get` endpoint returns the bank account and bank identification numbers (such as routing numbers, for US accounts) associated with an Item's checking and savings accounts, along with high-level account data and balances when available.

Note: This request may take some time to complete if `auth` was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the data.

Versioning note: In API version 2017-03-08, the schema of the `numbers` object returned by this endpoint is substantially different. For details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2018-05-22).

</api/products/auth/#authget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AuthGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthGetRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthGetRequest();
    $request->accessToken = 'dolorem';
    $request->clientId = 'corporis';
    $request->options = new AuthGetRequestOptions();
    $request->options->accountIds = [
        'nobis',
    ];
    $request->secret = 'enim';

    $response = $sdk->plaid->authGet($request);

    if ($response->authGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bankTransferBalanceGet

Use the `/bank_transfer/balance/get` endpoint to see the available balance in your bank transfer account. Debit transfers increase this balance once their status is posted. Credit transfers decrease this balance when they are created.

The transactable balance shows the amount in your account that you are able to use for transfers, and is essentially your available balance minus your minimum balance.

Note that this endpoint can only be used with FBO accounts, when using Bank Transfers in the Full Service configuration. It cannot be used on your own account when using Bank Transfers in the BTS Platform configuration.

</bank-transfers/reference#bank_transferbalanceget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferBalanceGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankTransferBalanceGetRequest();
    $request->clientId = 'omnis';
    $request->originationAccountId = 'nemo';
    $request->secret = 'minima';

    $response = $sdk->plaid->bankTransferBalanceGet($request);

    if ($response->bankTransferBalanceGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bankTransferCancel

Use the `/bank_transfer/cancel` endpoint to cancel a bank transfer.  A transfer is eligible for cancelation if the `cancellable` property returned by `/bank_transfer/get` is `true`.

</bank-transfers/reference#bank_transfercancel>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferCancelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankTransferCancelRequest();
    $request->bankTransferId = 'excepturi';
    $request->clientId = 'accusantium';
    $request->secret = 'iure';

    $response = $sdk->plaid->bankTransferCancel($request);

    if ($response->bankTransferCancelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bankTransferCreate

Use the `/bank_transfer/create` endpoint to initiate a new bank transfer.

</bank-transfers/reference#bank_transfercreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ACHClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferNetworkEnum;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankTransferCreateRequest();
    $request->accessToken = 'culpa';
    $request->accountId = 'doloribus';
    $request->achClass = ACHClassEnum::WEB;
    $request->amount = 'architecto';
    $request->clientId = 'mollitia';
    $request->customTag = 'dolorem';
    $request->description = 'culpa';
    $request->idempotencyKey = 'consequuntur';
    $request->isoCurrencyCode = 'repellat';
    $request->metadata = [
        'occaecati' => 'numquam',
        'commodi' => 'quam',
        'molestiae' => 'velit',
    ];
    $request->network = BankTransferNetworkEnum::SAME_DAY_ACH;
    $request->originationAccountId = 'quia';
    $request->secret = 'quis';
    $request->type = BankTransferTypeEnum::DEBIT;
    $request->user = [
        'animi' => 'enim',
        'odit' => 'quo',
        'sequi' => 'tenetur',
    ];

    $response = $sdk->plaid->bankTransferCreate($request);

    if ($response->bankTransferCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bankTransferEventList

Use the `/bank_transfer/event/list` endpoint to get a list of Plaid-initiated ACH or bank transfer events based on specified filter criteria. When using Auth with micro-deposit verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits. For more details, see [micro-deposit events](https://plaid.com/docs/auth/coverage/microdeposit-events/).

</api/products/auth#bank_transfereventlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferEventListRequest;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferEventListBankTransferTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferEventListDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferEventTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankTransferEventListRequest();
    $request->accountId = 'ipsam';
    $request->bankTransferId = 'id';
    $request->bankTransferType = BankTransferEventListBankTransferTypeEnum::LESS_THAN_NIL_GREATER_THAN;
    $request->clientId = 'aut';
    $request->count = 97101;
    $request->direction = BankTransferEventListDirectionEnum::OUTBOUND;
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-24T08:13:29.299Z');
    $request->eventTypes = [
        BankTransferEventTypeEnum::REVERSED,
    ];
    $request->offset = 976460;
    $request->originationAccountId = 'vero';
    $request->secret = 'nihil';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-17T23:08:44.457Z');

    $response = $sdk->plaid->bankTransferEventList($request);

    if ($response->bankTransferEventListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bankTransferEventSync

`/bank_transfer/event/sync` allows you to request up to the next 25 Plaid-initiated bank transfer events that happened after a specific `event_id`. When using Auth with micro-deposit verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits. For more details, see [micro-deposit events](https://www.plaid.com/docs/auth/coverage/microdeposit-events/).

</api/products/auth/#bank_transfereventsync>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferEventSyncRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankTransferEventSyncRequest();
    $request->afterId = 55714;
    $request->clientId = 'omnis';
    $request->count = 451159;
    $request->secret = 'cum';

    $response = $sdk->plaid->bankTransferEventSync($request);

    if ($response->bankTransferEventSyncResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bankTransferGet

The `/bank_transfer/get` fetches information about the bank transfer corresponding to the given `bank_transfer_id`.

</bank-transfers/reference#bank_transferget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankTransferGetRequest();
    $request->bankTransferId = 'perferendis';
    $request->clientId = 'doloremque';
    $request->secret = 'reprehenderit';

    $response = $sdk->plaid->bankTransferGet($request);

    if ($response->bankTransferGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bankTransferList

Use the `/bank_transfer/list` endpoint to see a list of all your bank transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired bank transfers.


</bank-transfers/reference#bank_transferlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferListRequest;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankTransferListRequest();
    $request->clientId = 'ut';
    $request->count = 979587;
    $request->direction = BankTransferDirectionEnum::OUTBOUND;
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T21:48:41.971Z');
    $request->offset = 480894;
    $request->originationAccountId = 'dicta';
    $request->secret = 'harum';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T15:01:52.114Z');

    $response = $sdk->plaid->bankTransferList($request);

    if ($response->bankTransferListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bankTransferMigrateAccount

As an alternative to adding Items via Link, you can also use the `/bank_transfer/migrate_account` endpoint to migrate known account and routing numbers to Plaid Items.  Note that Items created in this way are not compatible with endpoints for other products, such as `/accounts/balance/get`, and can only be used with Bank Transfer endpoints.  If you require access to other endpoints, create the Item through Link instead.  Access to `/bank_transfer/migrate_account` is not enabled by default; to obtain access, contact your Plaid Account Manager.

</bank-transfers/reference#bank_transfermigrate_account>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferMigrateAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankTransferMigrateAccountRequest();
    $request->accountNumber = 'commodi';
    $request->accountType = 'repudiandae';
    $request->clientId = 'quae';
    $request->routingNumber = 'ipsum';
    $request->secret = 'quidem';
    $request->wireRoutingNumber = 'molestias';

    $response = $sdk->plaid->bankTransferMigrateAccount($request);

    if ($response->bankTransferMigrateAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bankTransferSweepGet

The `/bank_transfer/sweep/get` endpoint fetches information about the sweep corresponding to the given `sweep_id`.

</api/products/transfer/#bank_transfersweepget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferSweepGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankTransferSweepGetRequest();
    $request->clientId = 'excepturi';
    $request->secret = 'pariatur';
    $request->sweepId = 'modi';

    $response = $sdk->plaid->bankTransferSweepGet($request);

    if ($response->bankTransferSweepGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bankTransferSweepList

The `/bank_transfer/sweep/list` endpoint fetches information about the sweeps matching the given filters.

</api/products/transfer/#bank_transfersweeplist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferSweepListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankTransferSweepListRequest();
    $request->clientId = 'praesentium';
    $request->count = 523248;
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-20T03:14:35.704Z');
    $request->originationAccountId = 'repudiandae';
    $request->secret = 'sint';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-26T19:21:55.034Z');

    $response = $sdk->plaid->bankTransferSweepList($request);

    if ($response->bankTransferSweepListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## categoriesGet

Send a request to the `/categories/get` endpoint to get detailed information on categories returned by Plaid. This endpoint does not require authentication.

</api/products/transactions/#categoriesget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'enim' => 'consequatur',
        'est' => 'quibusdam',
    ]

    $response = $sdk->plaid->categoriesGet($request);

    if ($response->categoriesGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~createPaymentToken~~

The `/payment_initiation/payment/token/create` endpoint has been deprecated. New Plaid customers will be unable to use this endpoint, and existing customers are encouraged to migrate to the newer, `link_token`-based flow. The recommended flow is to provide the `payment_id` to `/link/token/create`, which returns a `link_token` used to initialize Link.

The `/payment_initiation/payment/token/create` is used to create a `payment_token`, which can then be used in Link initialization to enter a payment initiation flow. You can only use a `payment_token` once. If this attempt fails, the end user aborts the flow, or the token expires, you will need to create a new payment token. Creating a new payment token does not require end user input.

</link/maintain-legacy-integration/#creating-a-payment-token>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInitiationPaymentTokenCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentInitiationPaymentTokenCreateRequest();
    $request->clientId = 'explicabo';
    $request->paymentId = 'deserunt';
    $request->secret = 'distinctio';

    $response = $sdk->plaid->createPaymentToken($request);

    if ($response->paymentInitiationPaymentTokenCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditAssetReportFreddieMacGet

The `credit/asset_report/freddie_mac/get` endpoint retrieves the Asset Report in Freddie Mac's JSON format.

</none/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'labore' => 'modi',
        'qui' => 'aliquid',
        'cupiditate' => 'quos',
        'perferendis' => 'magni',
    ]

    $response = $sdk->plaid->creditAssetReportFreddieMacGet($request);

    if ($response->assetReportFreddieGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditAuditCopyTokenCreate

Plaid can create an Audit Copy token of an Asset Report and/or Income Report to share with participating Government Sponsored Entity (GSE). If you participate in the Day 1 Certainty™ program, Plaid can supply an Audit Copy token directly to Fannie Mae on your behalf. An Audit Copy token contains the same underlying data as the Asset Report and/or Income Report (result of /credit/payroll_income/get).

Use the `/credit/audit_copy_token/create` endpoint to create an `audit_copy_token` and then pass that token to the GSE who needs access.

</api/products/income/#creditaudit_copy_tokencreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditAuditCopyTokenCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditAuditCopyTokenCreateRequest();
    $request->clientId = 'assumenda';
    $request->reportTokens = [
        'alias',
        'fugit',
    ];
    $request->secret = 'dolorum';

    $response = $sdk->plaid->creditAuditCopyTokenCreate($request);

    if ($response->creditAuditCopyTokenCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditAuditCopyTokenUpdate

The `/credit/audit_copy_token/update` endpoint updates an existing  Audit Copy Token by adding the report tokens in the `report_tokens` field to the `audit_copy_token`. If the Audit Copy Token already contains a report of a certain type, it will be replaced with the token provided in the `report_tokens` field.

</none/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditAuditCopyTokenUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditAuditCopyTokenUpdateRequest();
    $request->auditCopyToken = 'excepturi';
    $request->clientId = 'tempora';
    $request->reportTokens = [
        'tempore',
        'labore',
        'delectus',
    ];
    $request->secret = 'eum';

    $response = $sdk->plaid->creditAuditCopyTokenUpdate($request);

    if ($response->creditAuditCopyTokenUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditBankEmploymentGet

`/credit/bank_employment/get` returns the employment report(s) derived from bank transaction data for a specified user.

</api/products/income/#creditbank_employmentget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditBankEmploymentGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditBankEmploymentGetRequest();
    $request->clientId = 'non';
    $request->secret = 'eligendi';
    $request->userToken = 'sint';

    $response = $sdk->plaid->creditBankEmploymentGet($request);

    if ($response->creditBankEmploymentGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditBankIncomeGet

`/credit/bank_income/get` returns the bank income report(s) for a specified user.

</api/products/income/#creditbank_incomeget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditBankIncomeGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreditBankIncomeGetRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditBankIncomeGetRequest();
    $request->clientId = 'aliquid';
    $request->options = new CreditBankIncomeGetRequestOptions();
    $request->options->count = 592042;
    $request->secret = 'necessitatibus';
    $request->userToken = 'sint';

    $response = $sdk->plaid->creditBankIncomeGet($request);

    if ($response->creditBankIncomeGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditBankIncomePdfGet

`/credit/bank_income/pdf/get` returns the most recent bank income report for a specified user in PDF format.

</api/products/income/#creditbank_incomepdfget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditBankIncomePDFGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditBankIncomePDFGetRequest();
    $request->clientId = 'officia';
    $request->secret = 'dolor';
    $request->userToken = 'debitis';

    $response = $sdk->plaid->creditBankIncomePdfGet($request);

    if ($response->creditBankIncomePDFGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditBankIncomeRefresh

`/credit/bank_income/refresh` refreshes the bank income report data for a specific user.

</api/products/income/#creditbank_incomerefresh>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'dolorum' => 'in',
        'in' => 'illum',
        'maiores' => 'rerum',
        'dicta' => 'magnam',
    ]

    $response = $sdk->plaid->creditBankIncomeRefresh($request);

    if ($response->creditBankIncomeRefreshResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditEmploymentGet

`/credit/employment/get` returns a list of items with employment information from a user's payroll provider that was verified by an end user.

</api/products/income/#creditemploymentget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditEmploymentGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditEmploymentGetRequest();
    $request->clientId = 'cumque';
    $request->secret = 'facere';
    $request->userToken = 'ea';

    $response = $sdk->plaid->creditEmploymentGet($request);

    if ($response->creditEmploymentGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditFreddieMacReportsGet

The `credit/asset_report/freddie_mac/get` endpoint retrieves the Verification of Assets and Verification of Employment reports.

</none/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'laborum' => 'accusamus',
        'non' => 'occaecati',
    ]

    $response = $sdk->plaid->creditFreddieMacReportsGet($request);

    if ($response->creditFreddieMacReportsGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditPayrollIncomeGet

This endpoint gets payroll income information for a specific user, either as a result of the user connecting to their payroll provider or uploading a pay related document.

</api/products/income/#creditpayroll_incomeget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditPayrollIncomeGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditPayrollIncomeGetRequest();
    $request->clientId = 'enim';
    $request->secret = 'accusamus';
    $request->userToken = 'delectus';

    $response = $sdk->plaid->creditPayrollIncomeGet($request);

    if ($response->creditPayrollIncomeGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditPayrollIncomePrecheck

`/credit/payroll_income/precheck` is an optional endpoint that can be called before initializing a Link session for income verification. It evaluates whether a given user is supportable by digital income verification. If the user is eligible for digital verification, that information will be associated with the user token, and in this way will generate a Link UI optimized for the end user and their specific employer. If the user cannot be confirmed as eligible, the user can still use the income verification flow, but they may be required to manually upload a paystub to verify their income.

While all request fields are optional, providing `employer` data will increase the chance of receiving a useful result.

When testing in Sandbox, you can control the results by providing special test values in the `employer` and `access_tokens` fields. `employer_good` and `employer_bad` will result in `HIGH` and `LOW` confidence values, respectively. `employer_multi` will result in a `HIGH` confidence with multiple payroll options. Likewise, `access_good` and `access_bad` will result in `HIGH` and `LOW` confidence values, respectively. Any other value for `employer` and `access_tokens` in Sandbox will result in `UNKNOWN` confidence.

</api/products/income/#creditpayroll_incomeprecheck>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditPayrollIncomePrecheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationPrecheckEmployer;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationPrecheckPayrollInstitution;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationPrecheckMilitaryInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditPayrollIncomePrecheckRequest();
    $request->accessTokens = [
        'provident',
        'nam',
        'id',
    ];
    $request->clientId = 'blanditiis';
    $request->employer = new IncomeVerificationPrecheckEmployer();
    $request->employer->address = [
        'sapiente' => 'amet',
        'deserunt' => 'nisi',
        'vel' => 'natus',
    ];
    $request->employer->name = 'Fernando Aufderhar';
    $request->employer->taxId = 'distinctio';
    $request->employer->url = 'id';
    $request->payrollInstitution = new IncomeVerificationPrecheckPayrollInstitution();
    $request->payrollInstitution->name = 'Jamie Hoppe';
    $request->secret = 'eum';
    $request->usMilitaryInfo = new IncomeVerificationPrecheckMilitaryInfo();
    $request->usMilitaryInfo->branch = 'vero';
    $request->usMilitaryInfo->isActiveDuty = false;
    $request->userToken = 'aspernatur';

    $response = $sdk->plaid->creditPayrollIncomePrecheck($request);

    if ($response->creditPayrollIncomePrecheckResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditPayrollIncomeRefresh

`/credit/payroll_income/refresh` refreshes a given digital payroll income verification.

</api/products/income/#creditpayroll_incomerefresh>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditPayrollIncomeRefreshRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditPayrollIncomeRefreshRequest();
    $request->clientId = 'architecto';
    $request->options = [
        'et' => 'excepturi',
        'ullam' => 'provident',
    ];
    $request->secret = 'quos';
    $request->userToken = 'sint';

    $response = $sdk->plaid->creditPayrollIncomeRefresh($request);

    if ($response->creditPayrollIncomeRefreshResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditRelayCreate

Plaid can share an Asset Report directly with a participating third party on your behalf. The shared Asset Report is the exact same Asset Report originally created in `/asset_report/create`.

To grant a third party access to an Asset Report, use the `/credit/relay/create` endpoint to create a `relay_token` and then pass that token to your third party. Each third party has its own `secondary_client_id`; for example, `ce5bd328dcd34123456`. You'll need to create a separate `relay_token` for each third party that needs access to the report on your behalf.

</api/products/assets/#creditrelaycreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditRelayCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditRelayCreateRequest();
    $request->clientId = 'accusantium';
    $request->reportTokens = [
        'reiciendis',
        'mollitia',
        'ad',
    ];
    $request->secondaryClientId = 'eum';
    $request->secret = 'dolor';
    $request->webhook = 'necessitatibus';

    $response = $sdk->plaid->creditRelayCreate($request);

    if ($response->creditRelayCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditRelayGet

`/credit/relay/get` allows third parties to receive a report that was shared with them, using a `relay_token` that was created by the report owner.

</api/products/assets/#creditrelayget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditRelayGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditRelayGetRequest();
    $request->clientId = 'odit';
    $request->relayToken = 'nemo';
    $request->reportType = ReportTypeEnum::ASSETS;
    $request->secret = 'iure';

    $response = $sdk->plaid->creditRelayGet($request);

    if ($response->assetReportGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditRelayRefresh

The `/credit/relay/refresh` endpoint allows third parties to refresh a report that was relayed to them, using a `relay_token` that was created by the report owner. A new report will be created with the original report parameters, but with the most recent data available based on the `days_requested` value of the original report.

</api/products/assets/#creditrelayrefresh>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditRelayRefreshRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditRelayRefreshRequest();
    $request->clientId = 'doloribus';
    $request->relayToken = 'debitis';
    $request->reportType = ReportTypeEnum::ASSETS;
    $request->secret = 'maxime';
    $request->webhook = 'deleniti';

    $response = $sdk->plaid->creditRelayRefresh($request);

    if ($response->creditRelayRefreshResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditRelayRemove

The `/credit/relay/remove` endpoint allows you to invalidate a `relay_token`. The third party holding the token will no longer be able to access or refresh the reports which the `relay_token` gives access to. The original report, associated Items, and other relay tokens that provide access to the same report are not affected and will remain accessible after removing the given `relay_token`.

</api/products/assets/#creditrelayremove>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditRelayRemoveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditRelayRemoveRequest();
    $request->clientId = 'facilis';
    $request->relayToken = 'in';
    $request->secret = 'architecto';

    $response = $sdk->plaid->creditRelayRemove($request);

    if ($response->creditRelayRemoveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditReportAuditCopyRemove

The `/credit/audit_copy_token/remove` endpoint allows you to remove an Audit Copy. Removing an Audit Copy invalidates the `audit_copy_token` associated with it, meaning both you and any third parties holding the token will no longer be able to use it to access Report data. Items associated with the Report data and other Audit Copies of it are not affected and will remain accessible after removing the given Audit Copy.

</api/products/income/#creditaudit_copy_tokenremove>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditAuditCopyTokenRemoveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditAuditCopyTokenRemoveRequest();
    $request->auditCopyToken = 'architecto';
    $request->clientId = 'repudiandae';
    $request->secret = 'ullam';

    $response = $sdk->plaid->creditReportAuditCopyRemove($request);

    if ($response->creditAuditCopyTokenRemoveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditSessionsGet

This endpoint can be used for your end users after they complete the Link flow. This endpoint returns a list of Link sessions that your user completed, where each session includes the results from the Link flow.

These results include details about the Item that was created and some product related metadata (showing, for example, whether the user finished the bank income verification step).

</api/products/income/#creditsessionsget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreditSessionsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditSessionsGetRequest();
    $request->clientId = 'expedita';
    $request->secret = 'nihil';
    $request->userToken = 'repellat';

    $response = $sdk->plaid->creditSessionsGet($request);

    if ($response->creditSessionsGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dashboardUserGet

Retrieve information about a dashboard user.

</api/products/monitor/#dashboard_userget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\DashboardUserGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DashboardUserGetRequest();
    $request->clientId = 'quibusdam';
    $request->dashboardUserId = '54350110fedcbaf01234ffee';
    $request->secret = 'sed';

    $response = $sdk->plaid->dashboardUserGet($request);

    if ($response->dashboardUserGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dashboardUserList

List all dashboard users associated with your account.

</api/products/monitor/#dashboard_userlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\DashboardUserListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DashboardUserListRequest();
    $request->clientId = 'saepe';
    $request->cursor = 'eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM';
    $request->secret = 'pariatur';

    $response = $sdk->plaid->dashboardUserList($request);

    if ($response->dashboardUserListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## depositSwitchAltCreate

This endpoint provides an alternative to `/deposit_switch/create` for customers who have not yet fully integrated with Plaid Exchange. Like `/deposit_switch/create`, it creates a deposit switch entity that will be persisted throughout the lifecycle of the switch.

</deposit-switch/reference#deposit_switchaltcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\DepositSwitchAltCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DepositSwitchAltCreateRequestCountryCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DepositSwitchCreateRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DepositSwitchAltCreateRequest();
    $request->clientId = 'accusantium';
    $request->countryCode = DepositSwitchAltCreateRequestCountryCodeEnum::US;
    $request->options = new DepositSwitchCreateRequestOptions();
    $request->options->transactionItemAccessTokens = [
        'natus',
        'magni',
        'sunt',
    ];
    $request->options->webhook = 'quo';
    $request->secret = 'illum';
    $request->targetAccount = [
        'maxime' => 'ea',
        'excepturi' => 'odit',
        'ea' => 'accusantium',
        'ab' => 'maiores',
    ];
    $request->targetUser = [
        'ipsam' => 'voluptate',
        'autem' => 'nam',
        'eaque' => 'pariatur',
    ];

    $response = $sdk->plaid->depositSwitchAltCreate($request);

    if ($response->depositSwitchAltCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## depositSwitchCreate

This endpoint creates a deposit switch entity that will be persisted throughout the lifecycle of the switch.

</deposit-switch/reference#deposit_switchcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\DepositSwitchCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DepositSwitchCreateRequestCountryCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DepositSwitchCreateRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DepositSwitchCreateRequest();
    $request->clientId = 'nemo';
    $request->countryCode = DepositSwitchCreateRequestCountryCodeEnum::CA;
    $request->options = new DepositSwitchCreateRequestOptions();
    $request->options->transactionItemAccessTokens = [
        'fugiat',
    ];
    $request->options->webhook = 'amet';
    $request->secret = 'aut';
    $request->targetAccessToken = 'cumque';
    $request->targetAccountId = 'corporis';

    $response = $sdk->plaid->depositSwitchCreate($request);

    if ($response->depositSwitchCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## depositSwitchGet

This endpoint returns information related to how the user has configured their payroll allocation and the state of the switch. You can use this information to build logic related to the user's direct deposit allocation preferences.

</deposit-switch/reference#deposit_switchget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\DepositSwitchGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DepositSwitchGetRequest();
    $request->clientId = 'hic';
    $request->depositSwitchId = 'libero';
    $request->secret = 'nobis';

    $response = $sdk->plaid->depositSwitchGet($request);

    if ($response->depositSwitchGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## depositSwitchTokenCreate

In order for the end user to take action, you will need to create a public token representing the deposit switch. This token is used to initialize Link. It can be used one time and expires after 30 minutes.


</deposit-switch/reference#deposit_switchtokencreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\DepositSwitchTokenCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DepositSwitchTokenCreateRequest();
    $request->clientId = 'dolores';
    $request->depositSwitchId = 'quis';
    $request->secret = 'totam';

    $response = $sdk->plaid->depositSwitchTokenCreate($request);

    if ($response->depositSwitchTokenCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## employersSearch

`/employers/search` allows you the ability to search Plaid’s database of known employers, for use with Deposit Switch. You can use this endpoint to look up a user's employer in order to confirm that they are supported. Users with non-supported employers can then be routed out of the Deposit Switch flow.

The data in the employer database is currently limited. As the Deposit Switch and Income products progress through their respective beta periods, more employers are being regularly added. Because the employer database is frequently updated, we recommend that you do not cache or store data from this endpoint for more than a day.

</api/employers/#employerssearch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\EmployersSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmployersSearchRequest();
    $request->clientId = 'dignissimos';
    $request->products = [
        'quis',
    ];
    $request->query = 'nesciunt';
    $request->secret = 'eos';

    $response = $sdk->plaid->employersSearch($request);

    if ($response->employersSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~employmentVerificationGet~~

`/employment/verification/get` returns a list of employments through a user payroll that was verified by an end user.

This endpoint has been deprecated; new integrations should use `/credit/employment/get` instead.

</api/products/income/#employmentverificationget>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\EmploymentVerificationGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmploymentVerificationGetRequest();
    $request->accessToken = 'perferendis';
    $request->clientId = 'dolores';
    $request->secret = 'minus';

    $response = $sdk->plaid->employmentVerificationGet($request);

    if ($response->employmentVerificationGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fdxNotifications

A generic webhook receiver endpoint for FDX Event Notifications

</api/fdx/notifications/#post>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\FDXNotification;
use \OpenAPI\OpenAPI\Models\Shared\FDXNotificationCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\FDXNotificationPayload;
use \OpenAPI\OpenAPI\Models\Shared\FDXFiAttribute;
use \OpenAPI\OpenAPI\Models\Shared\FDXNotificationPayloadIdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FDXNotificationPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\FDXParty;
use \OpenAPI\OpenAPI\Models\Shared\FDXPartyRegistryEnum;
use \OpenAPI\OpenAPI\Models\Shared\FDXPartyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FDXNotificationSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\FDXNotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FDXHateoasLink;
use \OpenAPI\OpenAPI\Models\Shared\FDXHateoasLinkActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FDXContentTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FDXNotification();
    $request->category = FDXNotificationCategoryEnum::FRAUD;
    $request->notificationId = 'dolor';
    $request->notificationPayload = new FDXNotificationPayload();
    $request->notificationPayload->customFields = new FDXFiAttribute();
    $request->notificationPayload->customFields->name = 'Dean Welch';
    $request->notificationPayload->customFields->value = 'facilis';
    $request->notificationPayload->id = '90c28909-b3fe-449a-8d9c-bf48633323f9';
    $request->notificationPayload->idType = FDXNotificationPayloadIdTypeEnum::MAINTENANCE;
    $request->priority = FDXNotificationPriorityEnum::MEDIUM;
    $request->publisher = new FDXParty();
    $request->publisher->homeUri = 'http://wild-crumb.net';
    $request->publisher->logoUri = 'http://both-background.com';
    $request->publisher->name = 'Viola Hahn';
    $request->publisher->registeredEntityId = 'voluptatibus';
    $request->publisher->registeredEntityName = 'voluptas';
    $request->publisher->registry = FDXPartyRegistryEnum::ICANN;
    $request->publisher->type = FDXPartyTypeEnum::DATA_PROVIDER;
    $request->sentOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-15T14:46:41.375Z');
    $request->severity = FDXNotificationSeverityEnum::WARNING;
    $request->subscriber = new FDXParty();
    $request->subscriber->homeUri = 'http://thoughtful-barracks.net';
    $request->subscriber->logoUri = 'https://late-in-laws.net';
    $request->subscriber->name = 'Arturo Treutel';
    $request->subscriber->registeredEntityId = 'nihil';
    $request->subscriber->registeredEntityName = 'ipsum';
    $request->subscriber->registry = FDXPartyRegistryEnum::GLEIF;
    $request->subscriber->type = FDXPartyTypeEnum::INDIVIDUAL;
    $request->type = FDXNotificationTypeEnum::PLANNED_OUTAGE;
    $request->url = new FDXHateoasLink();
    $request->url->action = FDXHateoasLinkActionEnum::POST;
    $request->url->href = 'https://api.fi.com/fdx/v4/accounts/12345';
    $request->url->rel = 'aspernatur';
    $request->url->types = [
        FDXContentTypesEnum::IMAGE_GIF,
    ];

    $response = $sdk->plaid->fdxNotifications($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identityGet

The `/identity/get` endpoint allows you to retrieve various account holder information on file with the financial institution, including names, emails, phone numbers, and addresses. Only name data is guaranteed to be returned; other fields will be empty arrays if not provided by the institution.

This request may take some time to complete if identity was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the data.

Note: In API versions 2018-05-22 and earlier, the `owners` object is not returned, and instead identity information is returned in the top level `identity` object. For more details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2019-05-29).

</api/products/identity/#identityget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\IdentityGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentityGetRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentityGetRequest();
    $request->accessToken = 'optio';
    $request->clientId = 'accusamus';
    $request->options = new IdentityGetRequestOptions();
    $request->options->accountIds = [
        'saepe',
        'suscipit',
    ];
    $request->secret = 'deserunt';

    $response = $sdk->plaid->identityGet($request);

    if ($response->identityGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identityMatch

The `/identity/match` endpoint generates a match score, which indicates how well the provided identity data matches the identity information on file with the account holder's financial institution.

This request may take some time to complete if Identity was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the data.

</api/products/identity/#identitymatch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\IdentityMatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentityMatchRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentityMatchRequest();
    $request->accessToken = 'provident';
    $request->clientId = 'minima';
    $request->identityVerificationId = 'idv_52xR9LKo77r1Np';
    $request->options = new IdentityMatchRequestOptions();
    $request->options->accountIds = [
        'totam',
        'similique',
        'alias',
        'at',
    ];
    $request->secret = 'quaerat';
    $request->user = [
        'vel' => 'quod',
        'officiis' => 'qui',
    ];

    $response = $sdk->plaid->identityMatch($request);

    if ($response->identityMatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identityVerificationCreate

Create a new Identity Verification for the user specified by the `client_user_id` field. The requirements and behavior of the verification are determined by the `template_id` provided.
If you don't know whether the associated user already has an active Identity Verification, you can specify `"is_idempotent": true` in the request body. With idempotency enabled, a new Identity Verification will only be created if one does not already exist for the associated `client_user_id` and `template_id`. If an Identity Verification is found, it will be returned unmodified with an `200 OK` HTTP status code.


</api/products/identity-verification/#identity_verificationcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\IdentityVerificationCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentityVerificationCreateRequest();
    $request->clientId = 'dolorum';
    $request->gaveConsent = true;
    $request->isIdempotent = true;
    $request->isShareable = true;
    $request->secret = 'a';
    $request->templateId = 'idvtmp_4FrXJvfQU3zGUR';
    $request->user = [
        'harum' => 'iusto',
        'ipsum' => 'quisquam',
    ];

    $response = $sdk->plaid->identityVerificationCreate($request);

    if ($response->identityVerificationCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identityVerificationGet

Retrieve a previously created identity verification.

</api/products/identity-verification/#identity_verificationget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\IdentityVerificationGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentityVerificationGetRequest();
    $request->clientId = 'tenetur';
    $request->identityVerificationId = 'idv_52xR9LKo77r1Np';
    $request->secret = 'amet';

    $response = $sdk->plaid->identityVerificationGet($request);

    if ($response->identityVerificationGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identityVerificationList

Filter and list Identity Verifications created by your account

</api/products/identity-verification/#identity_verificationlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\IdentityVerificationListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentityVerificationListRequest();
    $request->clientId = 'tempore';
    $request->clientUserId = 'your-db-id-3b24110';
    $request->cursor = 'eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM';
    $request->secret = 'accusamus';
    $request->templateId = 'idvtmp_4FrXJvfQU3zGUR';

    $response = $sdk->plaid->identityVerificationList($request);

    if ($response->identityVerificationListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identityVerificationRetry

Allow a customer to retry their identity verification

</api/products/identity-verification/#identity_verificationretry>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\IdentityVerificationRetryRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentityVerificationRetryRequestStepsObject;
use \OpenAPI\OpenAPI\Models\Shared\StrategyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentityVerificationRetryRequest();
    $request->clientId = 'numquam';
    $request->clientUserId = 'your-db-id-3b24110';
    $request->secret = 'enim';
    $request->steps = new IdentityVerificationRetryRequestStepsObject();
    $request->steps->documentaryVerification = false;
    $request->steps->kycCheck = false;
    $request->steps->selfieCheck = false;
    $request->steps->verifySms = false;
    $request->strategy = StrategyEnum::RESET;
    $request->templateId = 'idvtmp_4FrXJvfQU3zGUR';

    $response = $sdk->plaid->identityVerificationRetry($request);

    if ($response->identityVerificationRetryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~incomeVerificationCreate~~

`/income/verification/create` begins the income verification process by returning an `income_verification_id`. You can then provide the `income_verification_id` to `/link/token/create` under the `income_verification` parameter in order to create a Link instance that will prompt the user to go through the income verification flow. Plaid will fire an `INCOME` webhook once the user completes the Payroll Income flow, or when the uploaded documents in the Document Income flow have finished processing. 

</api/products/income/#incomeverificationcreate>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationCreateRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IncomeVerificationCreateRequest();
    $request->clientId = 'sapiente';
    $request->options = new IncomeVerificationCreateRequestOptions();
    $request->options->accessTokens = [
        'nihil',
        'sit',
        'expedita',
    ];
    $request->precheckId = 'neque';
    $request->secret = 'sed';
    $request->webhook = 'vel';

    $response = $sdk->plaid->incomeVerificationCreate($request);

    if ($response->incomeVerificationCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~incomeVerificationDocumentsDownload~~

`/income/verification/documents/download` provides the ability to download the source documents associated with the verification.

If Document Income was used, the documents will be those the user provided in Link. For Payroll Income, the most recent files available
for download from the payroll provider will be available from this endpoint.

The response to `/income/verification/documents/download` is a ZIP file in binary data. If a `document_id` is passed, a single document will be contained in this file.
If not, the response will contain all documents associated with the verification.

The `request_id` is returned in the `Plaid-Request-ID` header.

</api/products/income/#incomeverificationdocumentsdownload>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationDocumentsDownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IncomeVerificationDocumentsDownloadRequest();
    $request->accessToken = 'libero';
    $request->clientId = 'voluptas';
    $request->documentId = 'deserunt';
    $request->incomeVerificationId = 'quam';
    $request->secret = 'ipsum';

    $response = $sdk->plaid->incomeVerificationDocumentsDownload($request);

    if ($response->incomeVerificationDocumentsDownload200ApplicationZipBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~incomeVerificationPaystubsGet~~

`/income/verification/paystubs/get` returns the information collected from the paystubs that were used to verify an end user's income. It can be called once the status of the verification has been set to `VERIFICATION_STATUS_PROCESSING_COMPLETE`, as reported by the `INCOME: verification_status` webhook. Attempting to call the endpoint before verification has been completed will result in an error.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/get` instead.

</api/products/income/#incomeverificationpaystubsget>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationPaystubsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IncomeVerificationPaystubsGetRequest();
    $request->accessToken = 'incidunt';
    $request->clientId = 'qui';
    $request->incomeVerificationId = 'cupiditate';
    $request->secret = 'maxime';

    $response = $sdk->plaid->incomeVerificationPaystubsGet($request);

    if ($response->incomeVerificationPaystubsGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~incomeVerificationPrecheck~~

`/income/verification/precheck` is an optional endpoint that can be called before initializing a Link session for income verification. It evaluates whether a given user is supportable by digital income verification and returns a `precheck_id` that can be provided to `/link/token/create`. If the user is eligible for digital verification, providing the `precheck_id` in this way will generate a Link UI optimized for the end user and their specific employer. If the user cannot be confirmed as eligible, the `precheck_id` can still be provided to `/link/token/create` and the user can still use the income verification flow, but they may be required to manually upload a paystub to verify their income.

While all request fields are optional, providing either `employer` or `transactions_access_tokens` data will increase the chance of receiving a useful result.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/precheck` instead.

</api/products/income/#incomeverificationprecheck>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationPrecheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationPrecheckEmployer;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationPrecheckPayrollInstitution;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationPrecheckMilitaryInfo;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationPrecheckUser;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IncomeVerificationPrecheckRequest();
    $request->clientId = 'pariatur';
    $request->employer = new IncomeVerificationPrecheckEmployer();
    $request->employer->address = [
        'dicta' => 'laborum',
        'totam' => 'incidunt',
        'aspernatur' => 'dolores',
    ];
    $request->employer->name = 'Cesar Hyatt';
    $request->employer->taxId = 'temporibus';
    $request->employer->url = 'qui';
    $request->payrollInstitution = new IncomeVerificationPrecheckPayrollInstitution();
    $request->payrollInstitution->name = 'Beverly Cummerata II';
    $request->secret = 'nam';
    $request->transactionsAccessToken = 'hic';
    $request->transactionsAccessTokens = [
        'cumque',
    ];
    $request->usMilitaryInfo = new IncomeVerificationPrecheckMilitaryInfo();
    $request->usMilitaryInfo->branch = 'soluta';
    $request->usMilitaryInfo->isActiveDuty = false;
    $request->user = new IncomeVerificationPrecheckUser();
    $request->user->emailAddress = 'nobis';
    $request->user->firstName = 'August';
    $request->user->homeAddress = [
        'ipsum' => 'veritatis',
        'nobis' => 'quos',
        'tempore' => 'cupiditate',
        'aperiam' => 'delectus',
    ];
    $request->user->lastName = 'Durgan';

    $response = $sdk->plaid->incomeVerificationPrecheck($request);

    if ($response->incomeVerificationPrecheckResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~incomeVerificationTaxformsGet~~

`/income/verification/taxforms/get` returns the information collected from forms that were used to verify an end user''s income. It can be called once the status of the verification has been set to `VERIFICATION_STATUS_PROCESSING_COMPLETE`, as reported by the `INCOME: verification_status` webhook. Attempting to call the endpoint before verification has been completed will result in an error.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/get` instead.

</api/products/income/#incomeverificationtaxformsget>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'labore' => 'adipisci',
        'dolorum' => 'architecto',
    ]

    $response = $sdk->plaid->incomeVerificationTaxformsGet($request);

    if ($response->incomeVerificationTaxformsGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## institutionsGet

Returns a JSON response containing details on all financial institutions currently supported by Plaid. Because Plaid supports thousands of institutions, results are paginated.

If there is no overlap between an institution’s enabled products and a client’s enabled products, then the institution will be filtered out from the response. As a result, the number of institutions returned may not match the count specified in the call.

</api/institutions/#institutionsget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\InstitutionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CountryCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstitutionsGetRequestOptions;
use \OpenAPI\OpenAPI\Models\Shared\ProductsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InstitutionsGetRequest();
    $request->clientId = 'quae';
    $request->count = 16429;
    $request->countryCodes = [
        CountryCodeEnum::LV,
        CountryCodeEnum::US,
        CountryCodeEnum::NO,
    ];
    $request->offset = 833038;
    $request->options = new InstitutionsGetRequestOptions();
    $request->options->includeAuthMetadata = false;
    $request->options->includeOptionalMetadata = false;
    $request->options->includePaymentInitiationMetadata = false;
    $request->options->oauth = false;
    $request->options->products = [
        ProductsEnum::SIGNAL,
        ProductsEnum::LIABILITIES,
        ProductsEnum::DEPOSIT_SWITCH,
        ProductsEnum::INCOME,
    ];
    $request->options->routingNumbers = [
        'quae',
    ];
    $request->secret = 'laudantium';

    $response = $sdk->plaid->institutionsGet($request);

    if ($response->institutionsGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## institutionsGetById

Returns a JSON response containing details on a specified financial institution currently supported by Plaid.

Versioning note: API versions 2019-05-29 and earlier allow use of the `public_key` parameter instead of the `client_id` and `secret` to authenticate to this endpoint. The `public_key` has been deprecated; all customers are encouraged to use `client_id` and `secret` instead.


</api/institutions/#institutionsget_by_id>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\InstitutionsGetByIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\CountryCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstitutionsGetByIdRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InstitutionsGetByIdRequest();
    $request->clientId = 'odio';
    $request->countryCodes = [
        CountryCodeEnum::PT,
        CountryCodeEnum::EE,
        CountryCodeEnum::LT,
    ];
    $request->institutionId = 'omnis';
    $request->options = new InstitutionsGetByIdRequestOptions();
    $request->options->includeAuthMetadata = false;
    $request->options->includeOptionalMetadata = false;
    $request->options->includePaymentInitiationMetadata = false;
    $request->options->includeStatus = false;
    $request->secret = 'quis';

    $response = $sdk->plaid->institutionsGetById($request);

    if ($response->institutionsGetByIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## institutionsSearch

Returns a JSON response containing details for institutions that match the query parameters, up to a maximum of ten institutions per query.

Versioning note: API versions 2019-05-29 and earlier allow use of the `public_key` parameter instead of the `client_id` and `secret` parameters to authenticate to this endpoint. The `public_key` parameter has since been deprecated; all customers are encouraged to use `client_id` and `secret` instead.


</api/institutions/#institutionssearch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\InstitutionsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\CountryCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstitutionsSearchRequestOptions;
use \OpenAPI\OpenAPI\Models\Shared\ProductsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InstitutionsSearchRequest();
    $request->clientId = 'ipsum';
    $request->countryCodes = [
        CountryCodeEnum::DE,
        CountryCodeEnum::NL,
        CountryCodeEnum::LT,
        CountryCodeEnum::PT,
    ];
    $request->options = new InstitutionsSearchRequestOptions();
    $request->options->includeAuthMetadata = false;
    $request->options->includeOptionalMetadata = false;
    $request->options->includePaymentInitiationMetadata = false;
    $request->options->oauth = false;
    $request->options->paymentInitiation = [
        'hic' => 'distinctio',
        'quod' => 'odio',
    ];
    $request->products = [
        ProductsEnum::DEPOSIT_SWITCH,
        ProductsEnum::EMPLOYMENT,
        ProductsEnum::TRANSACTIONS,
    ];
    $request->query = 'dolore';
    $request->secret = 'quibusdam';

    $response = $sdk->plaid->institutionsSearch($request);

    if ($response->institutionsSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## investmentsHoldingsGet

The `/investments/holdings/get` endpoint allows developers to receive user-authorized stock position data for `investment`-type accounts.

</api/products/investments/#investmentsholdingsget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\InvestmentsHoldingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvestmentHoldingsGetRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvestmentsHoldingsGetRequest();
    $request->accessToken = 'illum';
    $request->clientId = 'sequi';
    $request->options = new InvestmentHoldingsGetRequestOptions();
    $request->options->accountIds = [
        'impedit',
        'aut',
        'voluptatibus',
    ];
    $request->secret = 'exercitationem';

    $response = $sdk->plaid->investmentsHoldingsGet($request);

    if ($response->investmentsHoldingsGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## investmentsTransactionsGet

The `/investments/transactions/get` endpoint allows developers to retrieve up to 24 months of user-authorized transaction data for investment accounts.

Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.

Due to the potentially large number of investment transactions associated with an Item, results are paginated. Manipulate the count and offset parameters in conjunction with the `total_investment_transactions` response body field to fetch all available investment transactions.

Note that Investments does not have a webhook to indicate when initial transaction data has loaded. Instead, if transactions data is not ready when `/investments/transactions/get` is first called, Plaid will wait for the data. For this reason, calling `/investments/transactions/get` immediately after Link may take up to one to two minutes to return.

</api/products/investments/#investmentstransactionsget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\InvestmentsTransactionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvestmentsTransactionsGetRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvestmentsTransactionsGetRequest();
    $request->accessToken = 'nulla';
    $request->clientId = 'fugit';
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2020-01-21');
    $request->options = new InvestmentsTransactionsGetRequestOptions();
    $request->options->accountIds = [
        'iusto',
        'eligendi',
        'ducimus',
        'alias',
    ];
    $request->options->count = 639473;
    $request->options->offset = 269479;
    $request->secret = 'ipsam';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-11-12');

    $response = $sdk->plaid->investmentsTransactionsGet($request);

    if ($response->investmentsTransactionsGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemAccessTokenInvalidate

By default, the `access_token` associated with an Item does not expire and should be stored in a persistent, secure manner.

You can use the `/item/access_token/invalidate` endpoint to rotate the `access_token` associated with an Item. The endpoint returns a new `access_token` and immediately invalidates the previous `access_token`.


</api/tokens/#itemaccess_tokeninvalidate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ItemAccessTokenInvalidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemAccessTokenInvalidateRequest();
    $request->accessToken = 'vel';
    $request->clientId = 'possimus';
    $request->secret = 'magnam';

    $response = $sdk->plaid->itemAccessTokenInvalidate($request);

    if ($response->itemAccessTokenInvalidateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemActivityList

List a historical log of user consent events

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ItemActivityListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemActivityListRequest();
    $request->accessToken = 'ratione';
    $request->clientId = 'ex';
    $request->count = 511319;
    $request->cursor = 'dicta';
    $request->secret = 'dolor';

    $response = $sdk->plaid->itemActivityList($request);

    if ($response->itemActivityListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemApplicationList

List a user’s connected applications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ItemApplicationListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemApplicationListRequest();
    $request->accessToken = 'maiores';
    $request->clientId = 'quasi';
    $request->secret = 'ex';

    $response = $sdk->plaid->itemApplicationList($request);

    if ($response->itemApplicationListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemApplicationScopesUpdate

Enable consumers to update product access on selected accounts for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ItemApplicationScopesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScopesContextEnum;
use \OpenAPI\OpenAPI\Models\Shared\Scopes;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccess;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemApplicationScopesUpdateRequest();
    $request->accessToken = 'nulla';
    $request->applicationId = 'excepturi';
    $request->clientId = 'voluptatibus';
    $request->context = ScopesContextEnum::ENROLLMENT;
    $request->scopes = new Scopes();
    $request->scopes->accounts = [
        new AccountAccess(),
        new AccountAccess(),
        new AccountAccess(),
        new AccountAccess(),
    ];
    $request->scopes->newAccounts = false;
    $request->scopes->productAccess = [
        'saepe' => 'ea',
        'impedit' => 'corporis',
        'veniam' => 'aliquid',
        'inventore' => 'magnam',
    ];
    $request->secret = 'ea';
    $request->state = 'quo';

    $response = $sdk->plaid->itemApplicationScopesUpdate($request);

    if ($response->itemApplicationScopesUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemCreatePublicToken

Note: As of July 2020, the `/item/public_token/create` endpoint is deprecated. Instead, use `/link/token/create` with an `access_token` to create a Link token for use with [update mode](https://plaid.com/docs/link/update-mode).

If you need your user to take action to restore or resolve an error associated with an Item, generate a public token with the `/item/public_token/create` endpoint and then initialize Link with that `public_token`.

A `public_token` is one-time use and expires after 30 minutes. You use a `public_token` to initialize Link in [update mode](https://plaid.com/docs/link/update-mode) for a particular Item. You can generate a `public_token` for an Item even if you did not use Link to create the Item originally.

The `/item/public_token/create` endpoint is **not** used to create your initial `public_token`. If you have not already received an `access_token` for a specific Item, use Link to obtain your `public_token` instead. See the [Quickstart](https://plaid.com/docs/quickstart) for more information.

</api/tokens/#itempublic_tokencreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ItemPublicTokenCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemPublicTokenCreateRequest();
    $request->accessToken = 'consectetur';
    $request->clientId = 'recusandae';
    $request->secret = 'aspernatur';

    $response = $sdk->plaid->itemCreatePublicToken($request);

    if ($response->itemPublicTokenCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemGet

Returns information about the status of an Item.

</api/items/#itemget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ItemGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemGetRequest();
    $request->accessToken = 'minima';
    $request->clientId = 'eaque';
    $request->secret = 'a';

    $response = $sdk->plaid->itemGet($request);

    if ($response->itemGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemImport

`/item/import` creates an Item via your Plaid Exchange Integration and returns an `access_token`. As part of an `/item/import` request, you will include a User ID (`user_auth.user_id`) and Authentication Token (`user_auth.auth_token`) that enable data aggregation through your Plaid Exchange API endpoints. These authentication principals are to be chosen by you.

Upon creating an Item via `/item/import`, Plaid will automatically begin an extraction of that Item through the Plaid Exchange infrastructure you have already integrated. This will automatically generate the Plaid native account ID for the account the user will switch their direct deposit to (`target_account_id`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ItemImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItemImportRequestOptions;
use \OpenAPI\OpenAPI\Models\Shared\ProductsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemImportRequestUserAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemImportRequest();
    $request->clientId = 'libero';
    $request->options = new ItemImportRequestOptions();
    $request->options->webhook = 'aut';
    $request->products = [
        ProductsEnum::CREDIT_DETAILS,
    ];
    $request->secret = 'impedit';
    $request->userAuth = new ItemImportRequestUserAuth();
    $request->userAuth->authToken = 'aliquam';
    $request->userAuth->userId = 'fugit';

    $response = $sdk->plaid->itemImport($request);

    if ($response->itemImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemPublicTokenExchange

Exchange a Link `public_token` for an API `access_token`. Link hands off the `public_token` client-side via the `onSuccess` callback once a user has successfully created an Item. The `public_token` is ephemeral and expires after 30 minutes. An `access_token` does not expire, but can be revoked by calling `/item/remove`.

The response also includes an `item_id` that should be stored with the `access_token`. The `item_id` is used to identify an Item in a webhook. The `item_id` can also be retrieved by making an `/item/get` request.

</api/tokens/#itempublic_tokenexchange>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ItemPublicTokenExchangeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemPublicTokenExchangeRequest();
    $request->clientId = 'accusamus';
    $request->publicToken = 'inventore';
    $request->secret = 'non';

    $response = $sdk->plaid->itemPublicTokenExchange($request);

    if ($response->itemPublicTokenExchangeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemRemove

The `/item/remove` endpoint allows you to remove an Item. Once removed, the `access_token`, as well as any processor tokens or bank account tokens associated with the Item, is no longer valid and cannot be used to access any data that was associated with the Item.

Note that in the Development environment, issuing an `/item/remove`  request will not decrement your live credential count. To increase your credential account in Development, contact Support.

Also note that for certain OAuth-based institutions, an Item removed via `/item/remove` may still show as an active connection in the institution's OAuth permission manager.

API versions 2019-05-29 and earlier return a `removed` boolean as part of the response.

</api/items/#itemremove>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ItemRemoveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemRemoveRequest();
    $request->accessToken = 'et';
    $request->clientId = 'dolorum';
    $request->secret = 'laborum';

    $response = $sdk->plaid->itemRemove($request);

    if ($response->itemRemoveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemWebhookUpdate

The POST `/item/webhook/update` allows you to update the webhook URL associated with an Item. This request triggers a [`WEBHOOK_UPDATE_ACKNOWLEDGED`](https://plaid.com/docs/api/items/#webhook_update_acknowledged) webhook to the newly specified webhook URL.

</api/items/#itemwebhookupdate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ItemWebhookUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemWebhookUpdateRequest();
    $request->accessToken = 'placeat';
    $request->clientId = 'velit';
    $request->secret = 'eum';
    $request->webhook = 'autem';

    $response = $sdk->plaid->itemWebhookUpdate($request);

    if ($response->itemWebhookUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## liabilitiesGet

The `/liabilities/get` endpoint returns various details about an Item with loan or credit accounts. Liabilities data is available primarily for US financial institutions, with some limited coverage of Canadian institutions. Currently supported account types are account type `credit` with account subtype `credit card` or `paypal`, and account type `loan` with account subtype `student` or `mortgage`. To limit accounts listed in Link to types and subtypes supported by Liabilities, you can use the `account_filters` parameter when [creating a Link token](https://plaid.com/docs/api/tokens/#linktokencreate).

The types of information returned by Liabilities can include balances and due dates, loan terms, and account details such as original loan amount and guarantor. Data is refreshed approximately once per day; the latest data can be retrieved by calling `/liabilities/get`.

Note: This request may take some time to complete if `liabilities` was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the additional data.

</api/products/liabilities/#liabilitiesget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\LiabilitiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\LiabilitiesGetRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LiabilitiesGetRequest();
    $request->accessToken = 'nobis';
    $request->clientId = 'quas';
    $request->options = new LiabilitiesGetRequestOptions();
    $request->options->accountIds = [
        'nulla',
        'voluptas',
        'libero',
        'quasi',
    ];
    $request->secret = 'tempora';

    $response = $sdk->plaid->liabilitiesGet($request);

    if ($response->liabilitiesGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## linkDeliveryCreate

Use the `/link_delivery/create` endpoint to create a Link Delivery session.

</docs/assets/waitlist/link-delivery/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\LinkDeliveryCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\LinkDeliveryOptions;
use \OpenAPI\OpenAPI\Models\Shared\LinkDeliveryRecipient;
use \OpenAPI\OpenAPI\Models\Shared\LinkDeliveryCommunicationMethod;
use \OpenAPI\OpenAPI\Models\Shared\LinkDeliveryDeliveryMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LinkDeliveryCreateRequest();
    $request->clientId = 'numquam';
    $request->linkToken = 'explicabo';
    $request->options = new LinkDeliveryOptions();
    $request->options->recipient = new LinkDeliveryRecipient();
    $request->options->recipient->communicationMethods = [
        new LinkDeliveryCommunicationMethod(),
        new LinkDeliveryCommunicationMethod(),
        new LinkDeliveryCommunicationMethod(),
    ];
    $request->options->recipient->firstName = 'Amya';
    $request->secret = 'molestiae';

    $response = $sdk->plaid->linkDeliveryCreate($request);

    if ($response->linkDeliveryCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## linkDeliveryGet

Use the `/link_delivery/get` endpoint to get the status of a Link Delivery session.

</docs/assets/waitlist/link-delivery/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\LinkDeliveryGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LinkDeliveryGetRequest();
    $request->clientId = 'magnam';
    $request->linkDeliverySessionId = 'odio';
    $request->secret = 'eius';

    $response = $sdk->plaid->linkDeliveryGet($request);

    if ($response->linkDeliveryGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## linkOauthCorrelationIdExchange

Exchange an OAuth `link_correlation_id` for the corresponding `link_token`. The `link_correlation_id` is only available for 'payment_initiation' products and is provided to the client via the OAuth `redirect_uri` as a query parameter.
The `link_correlation_id` is ephemeral and expires in a brief period, after which it can no longer be exchanged for the 'link_token'.

</api/oauth/#linkcorrelationid>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\LinkOAuthCorrelationIdExchangeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LinkOAuthCorrelationIdExchangeRequest();
    $request->clientId = 'esse';
    $request->linkCorrelationId = 'esse';
    $request->secret = 'rem';

    $response = $sdk->plaid->linkOauthCorrelationIdExchange($request);

    if ($response->linkOAuthCorrelationIdExchangeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## linkTokenCreate

The `/link/token/create` endpoint creates a `link_token`, which is required as a parameter when initializing Link. Once Link has been initialized, it returns a `public_token`, which can then be exchanged for an `access_token` via `/item/public_token/exchange` as part of the main Link flow.

A `link_token` generated by `/link/token/create` is also used to initialize other Link flows, such as the update mode flow for tokens with expired credentials, or the Payment Initiation (Europe) flow.

</api/tokens/#linktokencreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductsEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequestAuth;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequestAuthFlowTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CountryCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequestDepositSwitch;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequestEmployment;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequestEmploymentBankIncome;
use \OpenAPI\OpenAPI\Models\Shared\EmploymentSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenEUConfig;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequestIdentityVerification;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequestIncomeVerification;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequestIncomeVerificationBankIncome;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequestIncomeVerificationPayrollIncome;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationPayrollFlowTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequestUserStatedIncomeSource;
use \OpenAPI\OpenAPI\Models\Shared\UserStatedIncomeSourceCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserStatedIncomeSourceFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserStatedIncomeSourcePayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateInstitutionData;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenInvestments;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequestPaymentInitiation;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequestTransfer;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequestUpdate;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenCreateRequestUser;
use \OpenAPI\OpenAPI\Models\Shared\IdentityVerificationRequestUserName;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LinkTokenCreateRequest();
    $request->accessToken = 'fuga';
    $request->accountFilters = [
        'quidem' => 'fugiat',
        'ut' => 'eum',
    ];
    $request->additionalConsentedProducts = [
        ProductsEnum::TRANSFER,
        ProductsEnum::IDENTITY,
    ];
    $request->androidPackageName = 'praesentium';
    $request->auth = new LinkTokenCreateRequestAuth();
    $request->auth->authTypeSelectEnabled = false;
    $request->auth->automatedMicrodepositsEnabled = false;
    $request->auth->flowType = LinkTokenCreateRequestAuthFlowTypeEnum::FLEXIBLE_AUTH;
    $request->auth->instantMatchEnabled = false;
    $request->auth->sameDayMicrodepositsEnabled = false;
    $request->clientId = 'quisquam';
    $request->clientName = 'veritatis';
    $request->countryCodes = [
        CountryCodeEnum::NO,
    ];
    $request->depositSwitch = new LinkTokenCreateRequestDepositSwitch();
    $request->depositSwitch->depositSwitchId = 'quidem';
    $request->employment = new LinkTokenCreateRequestEmployment();
    $request->employment->bankEmployment = new LinkTokenCreateRequestEmploymentBankIncome();
    $request->employment->bankEmployment->daysRequested = 206594;
    $request->employment->employmentSourceTypes = [
        EmploymentSourceTypeEnum::PAYROLL,
        EmploymentSourceTypeEnum::PAYROLL,
        EmploymentSourceTypeEnum::PAYROLL,
        EmploymentSourceTypeEnum::BANK,
    ];
    $request->euConfig = new LinkTokenEUConfig();
    $request->euConfig->headless = false;
    $request->identityVerification = new LinkTokenCreateRequestIdentityVerification();
    $request->identityVerification->consent = true;
    $request->identityVerification->gaveConsent = true;
    $request->identityVerification->templateId = 'idvtmp_4FrXJvfQU3zGUR';
    $request->incomeVerification = new LinkTokenCreateRequestIncomeVerification();
    $request->incomeVerification->accessTokens = [
        'voluptas',
    ];
    $request->incomeVerification->assetReportId = 'ab';
    $request->incomeVerification->bankIncome = new LinkTokenCreateRequestIncomeVerificationBankIncome();
    $request->incomeVerification->bankIncome->daysRequested = 587600;
    $request->incomeVerification->bankIncome->enableMultipleItems = false;
    $request->incomeVerification->incomeSourceTypes = [
        IncomeVerificationSourceTypeEnum::BANK,
    ];
    $request->incomeVerification->incomeVerificationId = 'debitis';
    $request->incomeVerification->payrollIncome = new LinkTokenCreateRequestIncomeVerificationPayrollIncome();
    $request->incomeVerification->payrollIncome->flowTypes = [
        IncomeVerificationPayrollFlowTypeEnum::PAYROLL_DIGITAL_INCOME,
        IncomeVerificationPayrollFlowTypeEnum::PAYROLL_DIGITAL_INCOME,
    ];
    $request->incomeVerification->payrollIncome->isUpdateMode = false;
    $request->incomeVerification->payrollIncome->itemIdToUpdate = 'quo';
    $request->incomeVerification->precheckId = 'esse';
    $request->incomeVerification->statedIncomeSources = [
        new LinkTokenCreateRequestUserStatedIncomeSource(),
        new LinkTokenCreateRequestUserStatedIncomeSource(),
        new LinkTokenCreateRequestUserStatedIncomeSource(),
        new LinkTokenCreateRequestUserStatedIncomeSource(),
    ];
    $request->institutionData = new LinkTokenCreateInstitutionData();
    $request->institutionData->routingNumber = 'aperiam';
    $request->institutionId = 'distinctio';
    $request->investments = new LinkTokenInvestments();
    $request->investments->allowUnverifiedCryptoWallets = false;
    $request->language = 'quod';
    $request->linkCustomizationName = 'dignissimos';
    $request->paymentInitiation = new LinkTokenCreateRequestPaymentInitiation();
    $request->paymentInitiation->consentId = 'inventore';
    $request->paymentInitiation->paymentId = 'nihil';
    $request->products = [
        ProductsEnum::EMPLOYMENT,
        ProductsEnum::LIABILITIES,
        ProductsEnum::TRANSACTIONS,
    ];
    $request->redirectUri = 'occaecati';
    $request->secret = 'commodi';
    $request->transfer = new LinkTokenCreateRequestTransfer();
    $request->transfer->intentId = 'sapiente';
    $request->transfer->paymentProfileToken = 'dolores';
    $request->update = new LinkTokenCreateRequestUpdate();
    $request->update->accountSelectionEnabled = false;
    $request->user = new LinkTokenCreateRequestUser();
    $request->user->address = [
        'molestiae' => 'accusantium',
        'porro' => 'eum',
        'quas' => 'praesentium',
    ];
    $request->user->clientUserId = 'consequuntur';
    $request->user->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2022-09-18');
    $request->user->emailAddress = 'fuga';
    $request->user->emailAddressVerifiedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T08:30:58.411Z');
    $request->user->idNumber = [
        'explicabo' => 'minima',
        'nisi' => 'fugit',
        'sapiente' => 'consequuntur',
    ];
    $request->user->legalName = 'ratione';
    $request->user->name = new IdentityVerificationRequestUserName();
    $request->user->name->familyName = 'Knope';
    $request->user->name->givenName = 'Leslie';
    $request->user->phoneNumber = 'explicabo';
    $request->user->phoneNumberVerifiedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-07T01:55:10.347Z');
    $request->user->ssn = 'atque';
    $request->userToken = 'et';
    $request->webhook = 'esse';

    $response = $sdk->plaid->linkTokenCreate($request);

    if ($response->linkTokenCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## linkTokenGet

The `/link/token/get` endpoint gets information about a previously-created `link_token` using the
`/link/token/create` endpoint. It can be useful for debugging purposes.

</api/tokens/#linktokenget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\LinkTokenGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LinkTokenGetRequest();
    $request->clientId = 'eveniet';
    $request->linkToken = 'accusamus';
    $request->secret = 'veritatis';

    $response = $sdk->plaid->linkTokenGet($request);

    if ($response->linkTokenGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## partnerCustomerCreate

The `/partner/customer/create` endpoint is used by reseller partners to create end customers.

</api/partner/#partnercustomercreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCustomerCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PartnerCustomerCreateRequest();
    $request->address = [
        'quod' => 'nam',
        'vero' => 'aliquid',
    ];
    $request->applicationName = 'quasi';
    $request->assetsUnderManagement = [
        'vel' => 'harum',
        'molestiae' => 'rerum',
        'occaecati' => 'minima',
        'distinctio' => 'eligendi',
    ];
    $request->billingContact = [
        'culpa' => 'tempore',
    ];
    $request->clientId = 'adipisci';
    $request->companyName = 'cumque';
    $request->createLinkCustomization = false;
    $request->customerSupportInfo = [
        'consequatur' => 'minus',
    ];
    $request->isBankAddendumCompleted = false;
    $request->isDiligenceAttested = false;
    $request->legalEntityName = 'quaerat';
    $request->logo = 'sapiente';
    $request->products = [
        ProductsEnum::TRANSACTIONS,
    ];
    $request->redirectUris = [
        'provident',
        'a',
        'nulla',
    ];
    $request->secret = 'quas';
    $request->technicalContact = [
        'quasi' => 'a',
        'error' => 'sint',
    ];
    $request->website = 'pariatur';

    $response = $sdk->plaid->partnerCustomerCreate($request);

    if ($response->partnerCustomerCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## partnerCustomerEnable

The `/partner/customer/enable` endpoint is used by reseller partners to enable an end customer in the Production environment.

</api/partner/#partnercustomerenable>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCustomerEnableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PartnerCustomerEnableRequest();
    $request->clientId = 'possimus';
    $request->endCustomerClientId = 'quia';
    $request->secret = 'eveniet';

    $response = $sdk->plaid->partnerCustomerEnable($request);

    if ($response->partnerCustomerEnableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## partnerCustomerGet

The `/partner/customer/get` endpoint is used by reseller partners to retrieve data about a single end customer.

</api/partner/#partnercustomerget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCustomerGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PartnerCustomerGetRequest();
    $request->clientId = 'asperiores';
    $request->endCustomerClientId = 'facere';
    $request->secret = 'veritatis';

    $response = $sdk->plaid->partnerCustomerGet($request);

    if ($response->partnerCustomerGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## partnerCustomerOauthInstitutionsGet

The `/partner/customer/oauth_institutions/get` endpoint is used by reseller partners to retrieve OAuth-institution registration information about a single end customer. To learn how to set up a webhook to listen to status update events, visit the [reseller documentation](https://plaid.com/docs/account/resellers/#enabling-end-customers).

</api/partner/#partnercustomeroauth_institutionsget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCustomerOAuthInstitutionsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PartnerCustomerOAuthInstitutionsGetRequest();
    $request->clientId = 'consequuntur';
    $request->endCustomerClientId = 'quasi';
    $request->secret = 'similique';

    $response = $sdk->plaid->partnerCustomerOauthInstitutionsGet($request);

    if ($response->partnerCustomerOAuthInstitutionsGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## partnerCustomerRemove

The `/partner/customer/remove` endpoint is used by reseller partners to remove an end customer. Removing an end customer will remove it from view in the Plaid Dashboard and deactivate its API keys. This endpoint can only be used to remove an end customer that has not yet been enabled in Production.

</api/partner/#partnercustomerremove>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCustomerRemoveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PartnerCustomerRemoveRequest();
    $request->clientId = 'culpa';
    $request->endCustomerClientId = 'aliquid';
    $request->secret = 'tenetur';

    $response = $sdk->plaid->partnerCustomerRemove($request);

    if ($response->partnerCustomerRemoveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentInitiationConsentCreate

The `/payment_initiation/consent/create` endpoint is used to create a payment consent, which can be used to initiate payments on behalf of the user. Payment consents are created with `UNAUTHORISED` status by default and must be authorised by the user before payments can be initiated.

Consents can be limited in time and scope, and have constraints that describe limitations for payments.

</api/products/payment-initiation/#payment_initiationconsentcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInitiationConsentCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInitiationConsentScopeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentInitiationConsentCreateRequest();
    $request->clientId = 'quae';
    $request->constraints = [
        'vel' => 'in',
        'eius' => 'libero',
        'illum' => 'soluta',
        'accusantium' => 'aliquam',
    ];
    $request->options = [
        'dicta' => 'ullam',
        'reprehenderit' => 'ullam',
        'nisi' => 'aut',
        'voluptatum' => 'qui',
    ];
    $request->recipientId = 'quibusdam';
    $request->reference = 'ex';
    $request->scopes = [
        PaymentInitiationConsentScopeEnum::EXTERNAL,
        PaymentInitiationConsentScopeEnum::EXTERNAL,
        PaymentInitiationConsentScopeEnum::ME_TO_ME,
    ];
    $request->secret = 'omnis';

    $response = $sdk->plaid->paymentInitiationConsentCreate($request);

    if ($response->paymentInitiationConsentCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentInitiationConsentGet

The `/payment_initiation/consent/get` endpoint can be used to check the status of a payment consent, as well as to receive basic information such as recipient and constraints.

</api/products/payment-initiation/#payment_initiationconsentget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInitiationConsentGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentInitiationConsentGetRequest();
    $request->clientId = 'tenetur';
    $request->consentId = 'quasi';
    $request->secret = 'at';

    $response = $sdk->plaid->paymentInitiationConsentGet($request);

    if ($response->paymentInitiationConsentGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentInitiationConsentPaymentExecute

The `/payment_initiation/consent/payment/execute` endpoint can be used to execute payments using payment consent.

</api/products/payment-initiation/#payment_initiationconsentpaymentexecute>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInitiationConsentPaymentExecuteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentInitiationConsentPaymentExecuteRequest();
    $request->amount = [
        'voluptate' => 'ipsa',
    ];
    $request->clientId = 'minima';
    $request->consentId = 'veritatis';
    $request->idempotencyKey = 'consectetur';
    $request->secret = 'adipisci';

    $response = $sdk->plaid->paymentInitiationConsentPaymentExecute($request);

    if ($response->paymentInitiationConsentPaymentExecuteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentInitiationConsentRevoke

The `/payment_initiation/consent/revoke` endpoint can be used to revoke the payment consent. Once the consent is revoked, it is not possible to initiate payments using it.

</api/products/payment-initiation/#payment_initiationconsentrevoke>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInitiationConsentRevokeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentInitiationConsentRevokeRequest();
    $request->clientId = 'iste';
    $request->consentId = 'temporibus';
    $request->secret = 'accusantium';

    $response = $sdk->plaid->paymentInitiationConsentRevoke($request);

    if ($response->paymentInitiationConsentRevokeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentInitiationPaymentCreate

After creating a payment recipient, you can use the `/payment_initiation/payment/create` endpoint to create a payment to that recipient.  Payments can be one-time or standing order (recurring) and can be denominated in either EUR, GBP or other chosen [currency](https://plaid.com/docs/api/products/payment-initiation/#payment_initiation-payment-create-request-amount-currency).  If making domestic GBP-denominated payments, your recipient must have been created with BACS numbers. In general, EUR-denominated payments will be sent via SEPA Credit Transfer, GBP-denominated payments will be sent via the Faster Payments network and for non-Eurozone markets typically via the local payment scheme, but the payment network used will be determined by the institution. Payments sent via Faster Payments will typically arrive immediately, while payments sent via SEPA Credit Transfer or other local payment schemes will typically arrive in one business day.

Standing orders (recurring payments) must be denominated in GBP and can only be sent to recipients in the UK. Once created, standing order payments cannot be modified or canceled via the API. An end user can cancel or modify a standing order directly on their banking application or website, or by contacting the bank. Standing orders will follow the payment rules of the underlying rails (Faster Payments in UK). Payments can be sent Monday to Friday, excluding bank holidays. If the pre-arranged date falls on a weekend or bank holiday, the payment is made on the next working day. It is not possible to guarantee the exact time the payment will reach the recipient’s account, although at least 90% of standing order payments are sent by 6am.

In the Development environment, payments must be below 5 GBP or other chosen [currency](https://plaid.com/docs/api/products/payment-initiation/#payment_initiation-payment-create-request-amount-currency). For details on any payment limits in Production, contact your Plaid Account Manager.

</api/products/payment-initiation/#payment_initiationpaymentcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInitiationPaymentCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentInitiationPaymentCreateRequest();
    $request->amount = [
        'aut' => 'laudantium',
        'eum' => 'mollitia',
        'ab' => 'corrupti',
    ];
    $request->clientId = 'non';
    $request->options = [
        'dolor' => 'occaecati',
    ];
    $request->recipientId = 'numquam';
    $request->reference = 'impedit';
    $request->schedule = [
        'voluptas' => 'aut',
    ];
    $request->secret = 'dignissimos';

    $response = $sdk->plaid->paymentInitiationPaymentCreate($request);

    if ($response->paymentInitiationPaymentCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentInitiationPaymentGet

The `/payment_initiation/payment/get` endpoint can be used to check the status of a payment, as well as to receive basic information such as recipient and payment amount. In the case of standing orders, the `/payment_initiation/payment/get` endpoint will provide information about the status of the overall standing order itself; the API cannot be used to retrieve payment status for individual payments within a standing order.

</api/products/payment-initiation/#payment_initiationpaymentget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInitiationPaymentGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentInitiationPaymentGetRequest();
    $request->clientId = 'dicta';
    $request->paymentId = 'maiores';
    $request->secret = 'natus';

    $response = $sdk->plaid->paymentInitiationPaymentGet($request);

    if ($response->paymentInitiationPaymentGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentInitiationPaymentList

The `/payment_initiation/payment/list` endpoint can be used to retrieve all created payments. By default, the 10 most recent payments are returned. You can request more payments and paginate through the results using the optional `count` and `cursor` parameters.

</api/products/payment-initiation/#payment_initiationpaymentlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInitiationPaymentListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentInitiationPaymentListRequest();
    $request->clientId = 'velit';
    $request->consentId = 'voluptatibus';
    $request->count = 374323;
    $request->cursor = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-12T00:03:51.639Z');
    $request->secret = 'ea';

    $response = $sdk->plaid->paymentInitiationPaymentList($request);

    if ($response->paymentInitiationPaymentListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentInitiationPaymentReverse

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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInitiationPaymentReverseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentInitiationPaymentReverseRequest();
    $request->amount = [
        'consequuntur' => 'repellendus',
        'officia' => 'maxime',
    ];
    $request->clientId = 'dignissimos';
    $request->idempotencyKey = 'officia';
    $request->paymentId = 'asperiores';
    $request->reference = 'nemo';
    $request->secret = 'quae';

    $response = $sdk->plaid->paymentInitiationPaymentReverse($request);

    if ($response->paymentInitiationPaymentReverseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentInitiationRecipientCreate

Create a payment recipient for payment initiation.  The recipient must be in Europe, within a country that is a member of the Single Euro Payment Area (SEPA) or a non-Eurozone country [supported](https://plaid.com/global) by Plaid. For a standing order (recurring) payment, the recipient must be in the UK.

It is recommended to use `bacs` in the UK and `iban` in EU.

The endpoint is idempotent: if a developer has already made a request with the same payment details, Plaid will return the same `recipient_id`.


</api/products/payment-initiation/#payment_initiationrecipientcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInitiationRecipientCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentInitiationRecipientCreateRequest();
    $request->address = [
        'porro' => 'quod',
        'labore' => 'ab',
    ];
    $request->bacs = [
        'fuga' => 'id',
    ];
    $request->clientId = 'suscipit';
    $request->iban = 'velit';
    $request->name = 'Rex Walter';
    $request->secret = 'vel';

    $response = $sdk->plaid->paymentInitiationRecipientCreate($request);

    if ($response->paymentInitiationRecipientCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentInitiationRecipientGet

Get details about a payment recipient you have previously created.

</api/products/payment-initiation/#payment_initiationrecipientget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInitiationRecipientGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentInitiationRecipientGetRequest();
    $request->clientId = 'ducimus';
    $request->recipientId = 'quos';
    $request->secret = 'vel';

    $response = $sdk->plaid->paymentInitiationRecipientGet($request);

    if ($response->paymentInitiationRecipientGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentInitiationRecipientList

The `/payment_initiation/recipient/list` endpoint list the payment recipients that you have previously created.

</api/products/payment-initiation/#payment_initiationrecipientlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInitiationRecipientListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentInitiationRecipientListRequest();
    $request->clientId = 'labore';
    $request->secret = 'possimus';

    $response = $sdk->plaid->paymentInitiationRecipientList($request);

    if ($response->paymentInitiationRecipientListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentProfileCreate

Use `/payment_profile/create` endpoint to create a new payment profile.
To initiate the account linking experience, call `/link/token/create` and provide the `payment_profile_token` in the `transfer.payment_profile_token` field.
You can then use the `payment_profile_token` when creating transfers using `/transfer/authorization/create` and `/transfer/create`.

</api/products/transfer/#payment_profilecreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProfileCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentProfileCreateRequest();
    $request->clientId = 'facilis';
    $request->secret = 'cum';

    $response = $sdk->plaid->paymentProfileCreate($request);

    if ($response->paymentProfileCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentProfileGet

Use `/payment_profile/get` endpoint to get the status of a given Payment Profile.

</api/products/transfer/#payment_profileget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProfileGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentProfileGetRequest();
    $request->clientId = 'commodi';
    $request->paymentProfileToken = 'in';
    $request->secret = 'corporis';

    $response = $sdk->plaid->paymentProfileGet($request);

    if ($response->paymentProfileGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentProfileRemove

Use the `/payment_profile/remove` endpoint to remove a given Payment Profile. Once it’s removed, it can no longer be used to create transfers.

</api/products/transfer/#payment_profileremove>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProfileRemoveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentProfileRemoveRequest();
    $request->clientId = 'reiciendis';
    $request->paymentProfileToken = 'assumenda';
    $request->secret = 'nemo';

    $response = $sdk->plaid->paymentProfileRemove($request);

    if ($response->paymentProfileRemoveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## processorApexProcessorTokenCreate

Used to create a token suitable for sending to Apex to enable Plaid-Apex integrations.

</none/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorApexProcessorTokenCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProcessorApexProcessorTokenCreateRequest();
    $request->accessToken = 'recusandae';
    $request->accountId = 'aliquid';
    $request->clientId = 'aperiam';
    $request->secret = 'cum';

    $response = $sdk->plaid->processorApexProcessorTokenCreate($request);

    if ($response->processorTokenCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## processorAuthGet

The `/processor/auth/get` endpoint returns the bank account and bank identification number (such as the routing number, for US accounts), for a checking or savings account that''s associated with a given `processor_token`. The endpoint also returns high-level account data and balances when available.

Versioning note: API versions 2019-05-29 and earlier use a different schema for the `numbers` object returned by this endpoint. For details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2020-09-14).


</api/processors/#processorauthget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorAuthGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProcessorAuthGetRequest();
    $request->clientId = 'consectetur';
    $request->processorToken = 'in';
    $request->secret = 'exercitationem';

    $response = $sdk->plaid->processorAuthGet($request);

    if ($response->processorAuthGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## processorBalanceGet

The `/processor/balance/get` endpoint returns the real-time balance for each of an Item's accounts. While other endpoints may return a balance object, only `/processor/balance/get` forces the available and current balance fields to be refreshed rather than cached. 

</api/processors/#processorbalanceget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorBalanceGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorBalanceGetRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProcessorBalanceGetRequest();
    $request->clientId = 'earum';
    $request->options = new ProcessorBalanceGetRequestOptions();
    $request->options->minLastUpdatedDatetime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-25T07:54:13.852Z');
    $request->processorToken = 'doloribus';
    $request->secret = 'suscipit';

    $response = $sdk->plaid->processorBalanceGet($request);

    if ($response->processorBalanceGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## processorBankTransferCreate

Use the `/processor/bank_transfer/create` endpoint to initiate a new bank transfer as a processor

</api/processors/#bank_transfercreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorBankTransferCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ACHClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferNetworkEnum;
use \OpenAPI\OpenAPI\Models\Shared\BankTransferTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProcessorBankTransferCreateRequest();
    $request->achClass = ACHClassEnum::WEB;
    $request->amount = 'quidem';
    $request->clientId = 'saepe';
    $request->customTag = 'necessitatibus';
    $request->description = 'dolore';
    $request->idempotencyKey = 'sunt';
    $request->isoCurrencyCode = 'asperiores';
    $request->metadata = [
        'non' => 'amet',
    ];
    $request->network = BankTransferNetworkEnum::ACH;
    $request->originationAccountId = 'dignissimos';
    $request->processorToken = 'a';
    $request->secret = 'debitis';
    $request->type = BankTransferTypeEnum::DEBIT;
    $request->user = [
        'harum' => 'laboriosam',
        'ipsa' => 'voluptates',
    ];

    $response = $sdk->plaid->processorBankTransferCreate($request);

    if ($response->processorBankTransferCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## processorIdentityGet

The `/processor/identity/get` endpoint allows you to retrieve various account holder information on file with the financial institution, including names, emails, phone numbers, and addresses.

</api/processors/#processoridentityget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorIdentityGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProcessorIdentityGetRequest();
    $request->clientId = 'libero';
    $request->processorToken = 'vitae';
    $request->secret = 'accusamus';

    $response = $sdk->plaid->processorIdentityGet($request);

    if ($response->processorIdentityGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## processorSignalDecisionReport

After calling `/processor/signal/evaluate`, call `/processor/signal/decision/report` to report whether the transaction was initiated. This endpoint will return an [`INVALID_FIELD`](/docs/errors/invalid-request/#invalid_field) error if called a second time with a different value for `initiated`.

</api/processors/#processorsignaldecisionreport>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorSignalDecisionReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\SignalDecisionOutcomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SignalPaymentMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProcessorSignalDecisionReportRequest();
    $request->amountInstantlyAvailable = 6311.26;
    $request->clientId = 'tempora';
    $request->clientTransactionId = 'aspernatur';
    $request->daysFundsOnHold = 379057;
    $request->decisionOutcome = SignalDecisionOutcomeEnum::REVIEW;
    $request->initiated = false;
    $request->paymentMethod = SignalPaymentMethodEnum::STANDARD_ACH;
    $request->processorToken = 'minima';
    $request->secret = 'nobis';

    $response = $sdk->plaid->processorSignalDecisionReport($request);

    if ($response->processorSignalDecisionReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## processorSignalEvaluate

Use `/processor/signal/evaluate` to evaluate a planned ACH transaction as a processor to get a return risk assessment (such as a risk score and risk tier) and additional risk signals.

In order to obtain a valid score for an ACH transaction, Plaid must have an access token for the account, and the Item must be healthy (receiving product updates) or have recently been in a healthy state. If the transaction does not meet eligibility requirements, an error will be returned corresponding to the underlying cause. If `/processor/signal/evaluate` is called on the same transaction multiple times within a 24-hour period, cached results may be returned. For more information please refer to our error documentation on [item errors](/docs/errors/item/) and [Link in Update Mode](/docs/link/update-mode/).

Note: This request may take some time to complete if Signal is being added to an existing Item. This is because Plaid must communicate directly with the institution when retrieving the data for the first time.

</api/processors/#processorsignalevaluate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorSignalEvaluateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SignalDevice;
use \OpenAPI\OpenAPI\Models\Shared\SignalUser;
use \OpenAPI\OpenAPI\Models\Shared\SignalPersonName;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProcessorSignalEvaluateRequest();
    $request->amount = 6801.16;
    $request->clientId = 'adipisci';
    $request->clientTransactionId = 'minus';
    $request->clientUserId = 'dolores';
    $request->defaultPaymentMethod = 'blanditiis';
    $request->device = new SignalDevice();
    $request->device->ipAddress = 'in';
    $request->device->userAgent = 'dolore';
    $request->isRecurring = false;
    $request->processorToken = 'aliquam';
    $request->secret = 'officiis';
    $request->user = new SignalUser();
    $request->user->address = [
        'ullam' => 'adipisci',
        'cum' => 'blanditiis',
        'quas' => 'hic',
        'nesciunt' => 'culpa',
    ];
    $request->user->emailAddress = 'corrupti';
    $request->user->name = new SignalPersonName();
    $request->user->name->familyName = 'pariatur';
    $request->user->name->givenName = 'totam';
    $request->user->name->middleName = 'hic';
    $request->user->name->prefix = 'exercitationem';
    $request->user->name->suffix = 'nobis';
    $request->user->phoneNumber = 'sit';
    $request->userPresent = false;

    $response = $sdk->plaid->processorSignalEvaluate($request);

    if ($response->processorSignalEvaluateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## processorSignalReturnReport

Call the `/processor/signal/return/report` endpoint to report a returned transaction that was previously sent to the `/processor/signal/evaluate` endpoint. Your feedback will be used by the model to incorporate the latest risk trend in your portfolio.

</api/processors/#processorsignalreturnreport>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorSignalReturnReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProcessorSignalReturnReportRequest();
    $request->clientId = 'rerum';
    $request->clientTransactionId = 'sed';
    $request->processorToken = 'reiciendis';
    $request->returnCode = 'explicabo';
    $request->returnedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-16T19:55:44.497Z');
    $request->secret = 'voluptate';

    $response = $sdk->plaid->processorSignalReturnReport($request);

    if ($response->processorSignalReturnReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## processorStripeBankAccountTokenCreate


Used to create a token suitable for sending to Stripe to enable Plaid-Stripe integrations. For a detailed guide on integrating Stripe, see [Add Stripe to your app](https://plaid.com/docs/auth/partnerships/stripe/).

Note that the Stripe bank account token is a one-time use token. To store bank account information for later use, you can use a Stripe customer object and create an associated bank account from the token, or you can use a Stripe Custom account and create an associated external bank account from the token. This bank account information should work indefinitely, unless the user's bank account information changes or they revoke Plaid's permissions to access their account. Stripe bank account information cannot be modified once the bank account token has been created. If you ever need to change the bank account details used by Stripe for a specific customer, have the user go through Link again and create a new bank account token from the new `access_token`.

Bank account tokens can also be revoked, using `/item/remove`.'

</api/processors/#processorstripebank_account_tokencreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorStripeBankAccountTokenCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProcessorStripeBankAccountTokenCreateRequest();
    $request->accessToken = 'expedita';
    $request->accountId = 'ab';
    $request->clientId = 'iste';
    $request->secret = 'dolore';

    $response = $sdk->plaid->processorStripeBankAccountTokenCreate($request);

    if ($response->processorStripeBankAccountTokenCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## processorTokenCreate

Used to create a token suitable for sending to one of Plaid's partners to enable integrations. Note that Stripe partnerships use bank account tokens instead; see `/processor/stripe/bank_account_token/create` for creating tokens for use with Stripe integrations. Once created, a processor token for a given Item cannot be modified or updated. If the account must be linked to a new or different partner resource, create a new Item by having the user go through the Link flow again; a new processor token can then be created from the new `access_token`. Processor tokens can also be revoked, using `/item/remove`.

</api/processors/#processortokencreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorTokenCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorTokenCreateRequestProcessorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProcessorTokenCreateRequest();
    $request->accessToken = 'laborum';
    $request->accountId = 'sed';
    $request->clientId = 'in';
    $request->processor = ProcessorTokenCreateRequestProcessorEnum::UNIT;
    $request->secret = 'quidem';

    $response = $sdk->plaid->processorTokenCreate($request);

    if ($response->processorTokenCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxBankTransferFireWebhook

Use the `/sandbox/bank_transfer/fire_webhook` endpoint to manually trigger a Bank Transfers webhook in the Sandbox environment.

</bank-transfers/reference/#sandboxbank_transferfire_webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxBankTransferFireWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxBankTransferFireWebhookRequest();
    $request->clientId = 'explicabo';
    $request->secret = 'voluptas';
    $request->webhook = 'unde';

    $response = $sdk->plaid->sandboxBankTransferFireWebhook($request);

    if ($response->sandboxBankTransferFireWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxBankTransferSimulate

Use the `/sandbox/bank_transfer/simulate` endpoint to simulate a bank transfer event in the Sandbox environment.  Note that while an event will be simulated and will appear when using endpoints such as `/bank_transfer/event/sync` or `/bank_transfer/event/list`, no transactions will actually take place and funds will not move between accounts, even within the Sandbox.

</bank-transfers/reference/#sandboxbank_transfersimulate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxBankTransferSimulateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxBankTransferSimulateRequest();
    $request->bankTransferId = 'architecto';
    $request->clientId = 'suscipit';
    $request->eventType = 'sapiente';
    $request->failureReason = [
        'illo' => 'reiciendis',
        'perferendis' => 'corrupti',
        'maiores' => 'incidunt',
        'sed' => 'provident',
    ];
    $request->secret = 'eius';

    $response = $sdk->plaid->sandboxBankTransferSimulate($request);

    if ($response->sandboxBankTransferSimulateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxIncomeFireWebhook

Use the `/sandbox/income/fire_webhook` endpoint to manually trigger an Income webhook in the Sandbox environment.

</api/sandbox/#sandboxincomefire_webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxIncomeFireWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\SandboxIncomeFireWebhookRequestVerificationStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxIncomeFireWebhookRequest();
    $request->clientId = 'necessitatibus';
    $request->itemId = 'ipsum';
    $request->secret = 'ea';
    $request->userId = 'occaecati';
    $request->verificationStatus = SandboxIncomeFireWebhookRequestVerificationStatusEnum::VERIFICATION_STATUS_PROCESSING_FAILED;
    $request->webhook = 'voluptatibus';

    $response = $sdk->plaid->sandboxIncomeFireWebhook($request);

    if ($response->sandboxIncomeFireWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxItemFireWebhook

The `/sandbox/item/fire_webhook` endpoint is used to test that code correctly handles webhooks. This endpoint can trigger the following webhooks:

`DEFAULT_UPDATE`: Transactions update webhook to be fired for a given Sandbox Item. If the Item does not support Transactions, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

`NEW_ACCOUNTS_AVAILABLE`: Webhook to be fired for a given Sandbox Item created with Account Select v2.

`AUTH_DATA_UPDATE`: Webhook to be fired for a given Sandbox Item created with Auth as an enabled product.

`RECURRING_TRANSACTIONS_UPDATE`: Recurring Transactions webhook to be fired for a given Sandbox Item. If the Item does not support Recurring Transactions, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

`SYNC_UPDATES_AVAILABLE`: Transactions webhook to be fired for a given Sandbox Item.  If the Item does not support Transactions, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

Note that this endpoint is provided for developer ease-of-use and is not required for testing webhooks; webhooks will also fire in Sandbox under the same conditions that they would in Production or Development.

</api/sandbox/#sandboxitemfire_webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxItemFireWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\SandboxItemFireWebhookRequestWebhookCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebhookTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxItemFireWebhookRequest();
    $request->accessToken = 'tempora';
    $request->clientId = 'tempora';
    $request->secret = 'voluptate';
    $request->webhookCode = SandboxItemFireWebhookRequestWebhookCodeEnum::SYNC_UPDATES_AVAILABLE;
    $request->webhookType = WebhookTypeEnum::INVESTMENTS_TRANSACTIONS;

    $response = $sdk->plaid->sandboxItemFireWebhook($request);

    if ($response->sandboxItemFireWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxItemResetLogin

`/sandbox/item/reset_login/` forces an Item into an `ITEM_LOGIN_REQUIRED` state in order to simulate an Item whose login is no longer valid. This makes it easy to test Link's [update mode](https://plaid.com/docs/link/update-mode) flow in the Sandbox environment.  After calling `/sandbox/item/reset_login`, You can then use Plaid Link update mode to restore the Item to a good state. An `ITEM_LOGIN_REQUIRED` webhook will also be fired after a call to this endpoint, if one is associated with the Item.


In the Sandbox, Items will transition to an `ITEM_LOGIN_REQUIRED` error state automatically after 30 days, even if this endpoint is not called.

</api/sandbox/#sandboxitemreset_login>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxItemResetLoginRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxItemResetLoginRequest();
    $request->accessToken = 'sit';
    $request->clientId = 'non';
    $request->secret = 'officiis';

    $response = $sdk->plaid->sandboxItemResetLogin($request);

    if ($response->sandboxItemResetLoginResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxItemSetVerificationStatus

The `/sandbox/item/set_verification_status` endpoint can be used to change the verification status of an Item in in the Sandbox in order to simulate the Automated Micro-deposit flow.

Note that not all Plaid developer accounts are enabled for micro-deposit based verification by default. Your account must be enabled for this feature in order to test it in Sandbox. To enable this features or check your status, contact your account manager or [submit a product access Support ticket](https://dashboard.plaid.com/support/new/product-and-development/product-troubleshooting/request-product-access).

For more information on testing Automated Micro-deposits in Sandbox, see [Auth full coverage testing](https://plaid.com/docs/auth/coverage/testing#).

</api/sandbox/#sandboxitemset_verification_status>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxItemSetVerificationStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\SandboxItemSetVerificationStatusRequestVerificationStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxItemSetVerificationStatusRequest();
    $request->accessToken = 'praesentium';
    $request->accountId = 'facilis';
    $request->clientId = 'quaerat';
    $request->secret = 'incidunt';
    $request->verificationStatus = SandboxItemSetVerificationStatusRequestVerificationStatusEnum::AUTOMATICALLY_VERIFIED;

    $response = $sdk->plaid->sandboxItemSetVerificationStatus($request);

    if ($response->sandboxItemSetVerificationStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxOauthSelectAccounts

Save the selected accounts when connecting to the Platypus Oauth institution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxOauthSelectAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxOauthSelectAccountsRequest();
    $request->accounts = [
        'rem',
        'sit',
        'nobis',
        'error',
    ];
    $request->oauthStateId = 'veniam';

    $response = $sdk->plaid->sandboxOauthSelectAccounts($request);

    if ($response->sandboxOauthSelectAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxPaymentProfileResetLogin

`/sandbox/payment_profile/reset_login/` forces a Payment Profile into a state where the login is no longer valid. This makes it easy to test update mode for Payment Profile in the Sandbox environment.

 After calling `/sandbox/payment_profile/reset_login`, calls to the `/transfer/authorization/create` with the Payment Profile will result in a `decision_rationale` `PAYMENT_PROFILE_LOGIN_REQUIRED`. You can then use update mode for Payment Profile to restore it into a good state.

 In order to invoke this endpoint, you must first [create a Payment Profile](https://plaid.com/docs/transfer/add-to-app/#create-a-payment-profile-optional) and [go through the Link flow](https://plaid.com/docs/transfer/add-to-app/#create-a-link-token).

</api/sandbox/#sandboxpayment_profilereset_login>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxPaymentProfileResetLoginRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxPaymentProfileResetLoginRequest();
    $request->clientId = 'minima';
    $request->paymentProfileToken = 'recusandae';
    $request->secret = 'reiciendis';

    $response = $sdk->plaid->sandboxPaymentProfileResetLogin($request);

    if ($response->sandboxPaymentProfileResetLoginResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxProcessorTokenCreate

Use the `/sandbox/processor_token/create` endpoint to create a valid `processor_token` for an arbitrary institution ID and test credentials. The created `processor_token` corresponds to a new Sandbox Item. You can then use this `processor_token` with the `/processor/` API endpoints in Sandbox. You can also use `/sandbox/processor_token/create` with the [`user_custom` test username](https://plaid.com/docs/sandbox/user-custom) to generate a test account with custom data.

</api/sandbox/#sandboxprocessor_tokencreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxProcessorTokenCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SandboxProcessorTokenCreateRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxProcessorTokenCreateRequest();
    $request->clientId = 'nulla';
    $request->institutionId = 'magni';
    $request->options = new SandboxProcessorTokenCreateRequestOptions();
    $request->options->overridePassword = 'aperiam';
    $request->options->overrideUsername = 'saepe';
    $request->secret = 'numquam';

    $response = $sdk->plaid->sandboxProcessorTokenCreate($request);

    if ($response->sandboxProcessorTokenCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxPublicTokenCreate

Use the `/sandbox/public_token/create` endpoint to create a valid `public_token`  for an arbitrary institution ID, initial products, and test credentials. The created `public_token` maps to a new Sandbox Item. You can then call `/item/public_token/exchange` to exchange the `public_token` for an `access_token` and perform all API actions. `/sandbox/public_token/create` can also be used with the [`user_custom` test username](https://plaid.com/docs/sandbox/user-custom) to generate a test account with custom data. `/sandbox/public_token/create` cannot be used with OAuth institutions.

</api/sandbox/#sandboxpublic_tokencreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxPublicTokenCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductsEnum;
use \OpenAPI\OpenAPI\Models\Shared\SandboxPublicTokenCreateRequestOptions;
use \OpenAPI\OpenAPI\Models\Shared\SandboxPublicTokenCreateRequestOptionsIncomeVerification;
use \OpenAPI\OpenAPI\Models\Shared\SandboxPublicTokenCreateRequestIncomeVerificationBankIncome;
use \OpenAPI\OpenAPI\Models\Shared\IncomeVerificationSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SandboxPublicTokenCreateRequestOptionsTransactions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxPublicTokenCreateRequest();
    $request->clientId = 'veniam';
    $request->initialProducts = [
        ProductsEnum::RECURRING_TRANSACTIONS,
        ProductsEnum::AUTH,
    ];
    $request->institutionId = 'laudantium';
    $request->options = new SandboxPublicTokenCreateRequestOptions();
    $request->options->incomeVerification = new SandboxPublicTokenCreateRequestOptionsIncomeVerification();
    $request->options->incomeVerification->bankIncome = new SandboxPublicTokenCreateRequestIncomeVerificationBankIncome();
    $request->options->incomeVerification->bankIncome->daysRequested = 348476;
    $request->options->incomeVerification->incomeSourceTypes = [
        IncomeVerificationSourceTypeEnum::PAYROLL,
        IncomeVerificationSourceTypeEnum::BANK,
        IncomeVerificationSourceTypeEnum::PAYROLL,
    ];
    $request->options->overridePassword = 'voluptatum';
    $request->options->overrideUsername = 'error';
    $request->options->transactions = new SandboxPublicTokenCreateRequestOptionsTransactions();
    $request->options->transactions->endDate = DateTime::createFromFormat('Y-m-d', '2020-11-13');
    $request->options->transactions->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-21');
    $request->options->webhook = 'dolorum';
    $request->secret = 'nostrum';
    $request->userToken = 'officia';

    $response = $sdk->plaid->sandboxPublicTokenCreate($request);

    if ($response->sandboxPublicTokenCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxTransferFireWebhook

Use the `/sandbox/transfer/fire_webhook` endpoint to manually trigger a Transfer webhook in the Sandbox environment.

</api/sandbox/#sandboxtransferfire_webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxTransferFireWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxTransferFireWebhookRequest();
    $request->clientId = 'dolorum';
    $request->secret = 'corrupti';
    $request->webhook = 'accusamus';

    $response = $sdk->plaid->sandboxTransferFireWebhook($request);

    if ($response->sandboxTransferFireWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxTransferRepaymentSimulate

Use the `/sandbox/transfer/repayment/simulate` endpoint to trigger the creation of a repayment. As a side effect of calling this route, a repayment is created that includes all unreimbursed returns of guaranteed transfers. If there are no such returns, an 400 error is returned.

</api/sandbox/#sandboxtransferrepaymentsimulate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxTransferRepaymentSimulateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxTransferRepaymentSimulateRequest();
    $request->clientId = 'tempora';
    $request->secret = 'atque';

    $response = $sdk->plaid->sandboxTransferRepaymentSimulate($request);

    if ($response->sandboxTransferRepaymentSimulateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxTransferSimulate

Use the `/sandbox/transfer/simulate` endpoint to simulate a transfer event in the Sandbox environment.  Note that while an event will be simulated and will appear when using endpoints such as `/transfer/event/sync` or `/transfer/event/list`, no transactions will actually take place and funds will not move between accounts, even within the Sandbox.

</api/sandbox/#sandboxtransfersimulate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxTransferSimulateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxTransferSimulateRequest();
    $request->clientId = 'fugit';
    $request->eventType = 'ut';
    $request->failureReason = [
        'voluptatem' => 'culpa',
        'expedita' => 'magnam',
        'consequatur' => 'esse',
        'ipsam' => 'sit',
    ];
    $request->secret = 'voluptatum';
    $request->transferId = 'quas';

    $response = $sdk->plaid->sandboxTransferSimulate($request);

    if ($response->sandboxTransferSimulateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxTransferSweepSimulate

Use the `/sandbox/transfer/sweep/simulate` endpoint to create a sweep and associated events in the Sandbox environment. Upon calling this endpoint, all `posted` or `pending` transfers with a sweep status of `unswept` will become `swept`, and all `returned` transfers with a sweep status of `swept` will become `return_swept`.

</api/sandbox/#sandboxtransfersweepsimulate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxTransferSweepSimulateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxTransferSweepSimulateRequest();
    $request->clientId = 'repudiandae';
    $request->secret = 'corporis';

    $response = $sdk->plaid->sandboxTransferSweepSimulate($request);

    if ($response->sandboxTransferSweepSimulateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxTransferTestClockAdvance

Use the `/sandbox/transfer/test_clock/advance` endpoint to advance a `test_clock` in the Sandbox environment.

A test clock object represents an independent timeline and has a `virtual_time` field indicating the current timestamp of the timeline. A test clock can be advanced by incrementing `virtual_time`, but may never go back to a lower `virtual_time`.

If a test clock is advanced, we will simulate the changes that ought to occur during the time that elapsed.
For instance, a client creates a weekly recurring transfer with a test clock set at t. When the client advances the test clock by setting `virtual_time` = t + 15 days, 2 new originations should be created, along with the webhook events.

The advancement of the test clock from its current `virtual_time` should be limited such that there are no more than 20 originations resulting from the advance operation on each `recurring_transfer` associated with the `test_clock`.
For instance, if the recurring transfer associated with this test clock originates once every 4 weeks, you can advance the `virtual_time` up to 80 weeks on each API call.

</api/sandbox/#sandboxtransfertest_clockadvance>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxTransferTestClockAdvanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxTransferTestClockAdvanceRequest();
    $request->clientId = 'et';
    $request->newVirtualTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-10T15:53:25.215Z');
    $request->secret = 'sed';
    $request->testClockId = 'sit';

    $response = $sdk->plaid->sandboxTransferTestClockAdvance($request);

    if ($response->sandboxTransferTestClockAdvanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxTransferTestClockCreate

Use the `/sandbox/transfer/test_clock/create` endpoint to create a `test_clock` in the Sandbox environment.

A test clock object represents an independent timeline and has a `virtual_time` field indicating the current timestamp of the timeline. Test clocks are used for testing recurring transfers in Sandbox.

A test clock can be associated with up to 5 recurring transfers.

</api/sandbox/#sandboxtransfertest_clockcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxTransferTestClockCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxTransferTestClockCreateRequest();
    $request->clientId = 'vel';
    $request->secret = 'nostrum';
    $request->virtualTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-18T15:46:03.371Z');

    $response = $sdk->plaid->sandboxTransferTestClockCreate($request);

    if ($response->sandboxTransferTestClockCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxTransferTestClockGet

Use the `/sandbox/transfer/test_clock/get` endpoint to get a `test_clock` in the Sandbox environment.

</api/sandbox/#sandboxtransfertest_clockget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxTransferTestClockGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxTransferTestClockGetRequest();
    $request->clientId = 'consequatur';
    $request->secret = 'incidunt';
    $request->testClockId = 'reiciendis';

    $response = $sdk->plaid->sandboxTransferTestClockGet($request);

    if ($response->sandboxTransferTestClockGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sandboxTransferTestClockList

Use the `/sandbox/transfer/test_clock/list` endpoint to see a list of all your test clocks in the Sandbox environment, by ascending `virtual_time`. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired test clocks.

</api/sandbox/#sandboxtransfertest_clocklist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SandboxTransferTestClockListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxTransferTestClockListRequest();
    $request->clientId = 'dolorem';
    $request->count = 690894;
    $request->endVirtualTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T17:06:43.735Z');
    $request->offset = 577140;
    $request->secret = 'labore';
    $request->startVirtualTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-03T11:25:52.746Z');

    $response = $sdk->plaid->sandboxTransferTestClockList($request);

    if ($response->sandboxTransferTestClockListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signalDecisionReport

After calling `/signal/evaluate`, call `/signal/decision/report` to report whether the transaction was initiated. This endpoint will return an [`INVALID_FIELD`](/docs/errors/invalid-request/#invalid_field) error if called a second time with a different value for `initiated`.

</api/products/signal#signaldecisionreport>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SignalDecisionReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\SignalDecisionOutcomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SignalPaymentMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignalDecisionReportRequest();
    $request->amountInstantlyAvailable = 6719.57;
    $request->clientId = 'nam';
    $request->clientTransactionId = 'tenetur';
    $request->daysFundsOnHold = 388867;
    $request->decisionOutcome = SignalDecisionOutcomeEnum::APPROVE;
    $request->initiated = false;
    $request->paymentMethod = SignalPaymentMethodEnum::NEXT_DAY_ACH;
    $request->secret = 'deserunt';

    $response = $sdk->plaid->signalDecisionReport($request);

    if ($response->signalDecisionReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signalEvaluate

Use `/signal/evaluate` to evaluate a planned ACH transaction to get a return risk assessment (such as a risk score and risk tier) and additional risk signals.

In order to obtain a valid score for an ACH transaction, Plaid must have an access token for the account, and the Item must be healthy (receiving product updates) or have recently been in a healthy state. If the transaction does not meet eligibility requirements, an error will be returned corresponding to the underlying cause. If `/signal/evaluate` is called on the same transaction multiple times within a 24-hour period, cached results may be returned. For more information please refer to the error documentation on [Item errors](/docs/errors/item/) and [Link in Update Mode](/docs/link/update-mode/).

Note: This request may take some time to complete if Signal is being added to an existing Item. This is because Plaid must communicate directly with the institution when retrieving the data for the first time.

</api/products/signal#signalevaluate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SignalEvaluateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SignalDevice;
use \OpenAPI\OpenAPI\Models\Shared\SignalUser;
use \OpenAPI\OpenAPI\Models\Shared\SignalPersonName;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignalEvaluateRequest();
    $request->accessToken = 'voluptate';
    $request->accountId = 'unde';
    $request->amount = 9720.83;
    $request->clientId = 'provident';
    $request->clientTransactionId = 'repellendus';
    $request->clientUserId = 'delectus';
    $request->defaultPaymentMethod = 'voluptates';
    $request->device = new SignalDevice();
    $request->device->ipAddress = 'perferendis';
    $request->device->userAgent = 'est';
    $request->isRecurring = false;
    $request->secret = 'quidem';
    $request->user = new SignalUser();
    $request->user->address = [
        'facere' => 'fuga',
        'praesentium' => 'mollitia',
    ];
    $request->user->emailAddress = 'veniam';
    $request->user->name = new SignalPersonName();
    $request->user->name->familyName = 'voluptatem';
    $request->user->name->givenName = 'quisquam';
    $request->user->name->middleName = 'repudiandae';
    $request->user->name->prefix = 'quasi';
    $request->user->name->suffix = 'atque';
    $request->user->phoneNumber = 'reprehenderit';
    $request->userPresent = false;

    $response = $sdk->plaid->signalEvaluate($request);

    if ($response->signalEvaluateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signalPrepare

When Link is not initialized with Signal, call `/signal/prepare` to opt-in that Item to the Signal data collection process, developing a Signal score.

If you are using other Plaid products after Link, e.g. Identity or Assets, call `/signal/prepare` after those product calls are complete.

Example flow: Link is initialized with Auth, call `/auth/get` for the account and routing number, call `/identity/get` to retrieve bank ownership details, then call `/signal/prepare` to begin Signal data collection. Later, once you have obtained details about the proposed transaction from the user, call `/signal/evaluate` for a Signal score. For more information please see [Recommendations for initializing Link with specific product combinations](https://www.plaid.com/docs/link/initializing-products/#recommendations-for-initializing-link-with-specific-product-combinations).

</api/products/signal#signalprepare>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SignalPrepareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignalPrepareRequest();
    $request->accessToken = 'asperiores';
    $request->clientId = 'totam';
    $request->secret = 'suscipit';

    $response = $sdk->plaid->signalPrepare($request);

    if ($response->signalPrepareResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signalReturnReport

Call the `/signal/return/report` endpoint to report a returned transaction that was previously sent to the `/signal/evaluate` endpoint. Your feedback will be used by the model to incorporate the latest risk trend in your portfolio.

</api/products/signal#signalreturnreport>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SignalReturnReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignalReturnReportRequest();
    $request->clientId = 'quidem';
    $request->clientTransactionId = 'maxime';
    $request->returnCode = 'et';
    $request->returnedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-09T20:49:35.642Z');
    $request->secret = 'assumenda';

    $response = $sdk->plaid->signalReturnReport($request);

    if ($response->signalReturnReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactionsEnhance

The `/beta/transactions/v1/enhance` endpoint enriches raw transaction data provided directly by clients.

The product is currently in beta.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsEnhanceGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactionsEnhanceGetRequest();
    $request->accountType = 'ea';
    $request->clientId = 'atque';
    $request->secret = 'error';
    $request->transactions = [
        [
            'accusamus' => 'natus',
            'minima' => 'aspernatur',
            'ex' => 'maiores',
            'corrupti' => 'at',
        ],
        [
            'blanditiis' => 'suscipit',
            'repudiandae' => 'atque',
            'atque' => 'sunt',
        ],
        [
            'dolorum' => 'repellendus',
            'labore' => 'reiciendis',
            'doloremque' => 'repudiandae',
            'dicta' => 'accusantium',
        ],
        [
            'dolores' => 'enim',
        ],
    ];

    $response = $sdk->plaid->transactionsEnhance($request);

    if ($response->transactionsEnhanceGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactionsEnrich

The `/transactions/enrich` endpoint enriches raw transaction data generated by your own banking products or retrieved from other non-Plaid sources.

To request access to Enrich, reach out to your Plaid point of contact or send a note to enrich-feedback@plaid.com

</api/products/enrich/#transactionsenrich>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsEnrichGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsEnrichRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactionsEnrichGetRequest();
    $request->accountType = 'laboriosam';
    $request->clientId = 'velit';
    $request->options = new TransactionsEnrichRequestOptions();
    $request->options->includeLegacyCategory = false;
    $request->secret = 'a';
    $request->transactions = [
        [
            'saepe' => 'consequuntur',
            'occaecati' => 'officiis',
        ],
        [
            'in' => 'adipisci',
            'eveniet' => 'occaecati',
            'consequuntur' => 'fugit',
        ],
        [
            'quis' => 'reprehenderit',
            'error' => 'illo',
            'corporis' => 'quidem',
        ],
    ];

    $response = $sdk->plaid->transactionsEnrich($request);

    if ($response->transactionsEnrichGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactionsGet

The `/transactions/get` endpoint allows developers to receive user-authorized transaction data for credit, depository, and some loan-type accounts (only those with account subtype `student`; coverage may be limited). For transaction history from investments accounts, use the [Investments endpoint](https://plaid.com/docs/api/products/investments/) instead. Transaction data is standardized across financial institutions, and in many cases transactions are linked to a clean name, entity type, location, and category. Similarly, account data is standardized and returned with a clean name, number, balance, and other meta information where available.

Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.  Transactions are not immutable and can also be removed altogether by the institution; a removed transaction will no longer appear in `/transactions/get`.  For more details, see [Pending and posted transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).

Due to the potentially large number of transactions associated with an Item, results are paginated. Manipulate the `count` and `offset` parameters in conjunction with the `total_transactions` response body field to fetch all available transactions.

Data returned by `/transactions/get` will be the data available for the Item as of the most recent successful check for new transactions. Plaid typically checks for new data multiple times a day, but these checks may occur less frequently, such as once a day, depending on the institution. An Item's `status.transactions.last_successful_update` field will show the timestamp of the most recent successful update. To force Plaid to check for new transactions, you can use the `/transactions/refresh` endpoint.

Note that data may not be immediately available to `/transactions/get`. Plaid will begin to prepare transactions data upon Item link, if Link was initialized with `transactions`, or upon the first call to `/transactions/get`, if it wasn't. To be alerted when transaction data is ready to be fetched, listen for the [`INITIAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#initial_update) and [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#historical_update) webhooks. If no transaction history is ready when `/transactions/get` is called, it will return a `PRODUCT_NOT_READY` error.

</api/products/transactions/#transactionsget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsGetRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactionsGetRequest();
    $request->accessToken = 'eveniet';
    $request->clientId = 'non';
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-11-18');
    $request->options = new TransactionsGetRequestOptions();
    $request->options->accountIds = [
        'ipsa',
        'totam',
    ];
    $request->options->count = 61078;
    $request->options->includeLogoAndCounterpartyBeta = false;
    $request->options->includeOriginalDescription = false;
    $request->options->includePersonalFinanceCategory = false;
    $request->options->includePersonalFinanceCategoryBeta = false;
    $request->options->offset = 474668;
    $request->secret = 'eveniet';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-04-05');

    $response = $sdk->plaid->transactionsGet($request);

    if ($response->transactionsGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactionsRecurringGet

The `/transactions/recurring/get` endpoint allows developers to receive a summary of the recurring outflow and inflow streams (expenses and deposits) from a user’s checking, savings or credit card accounts. Additionally, Plaid provides key insights about each recurring stream including the category, merchant, last amount, and more. Developers can use these insights to build tools and experiences that help their users better manage cash flow, monitor subscriptions, reduce spend, and stay on track with bill payments.

This endpoint is offered as an add-on to Transactions. To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.

This endpoint can only be called on an Item that has already been initialized with Transactions (either during Link, by specifying it in `/link/token/create`; or after Link, by calling `/transactions/get` or `/transactions/sync`). Once all historical transactions have been fetched, call `/transactions/recurring/get` to receive the Recurring Transactions streams and subscribe to the [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update) webhook. To know when historical transactions have been fetched, if you are using `/transactions/sync` listen for the [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#SyncUpdatesAvailableWebhook-historical-update-complete) webhook and check that the `historical_update_complete` field in the payload is `true`. If using `/transactions/get`, listen for the [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#historical_update) webhook.

After the initial call, you can call `/transactions/recurring/get` endpoint at any point in the future to retrieve the latest summary of recurring streams. Listen to the [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update) webhook to be notified when new updates are available.

</api/products/transactions/#transactionsrecurringget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsRecurringGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsRecurringGetRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactionsRecurringGetRequest();
    $request->accessToken = 'iure';
    $request->accountIds = [
        'ratione',
        'laborum',
        'distinctio',
        'voluptatum',
    ];
    $request->clientId = 'rem';
    $request->options = new TransactionsRecurringGetRequestOptions();
    $request->options->includePersonalFinanceCategory = false;
    $request->secret = 'aliquam';

    $response = $sdk->plaid->transactionsRecurringGet($request);

    if ($response->transactionsRecurringGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactionsRefresh

`/transactions/refresh` is an optional endpoint for users of the Transactions product. It initiates an on-demand extraction to fetch the newest transactions for an Item. This on-demand extraction takes place in addition to the periodic extractions that automatically occur multiple times a day for any Transactions-enabled Item. If changes to transactions are discovered after calling `/transactions/refresh`, Plaid will fire a webhook: for `/transactions/sync` users, [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available) will be fired if there are any transactions updated, added, or removed. For users of both `/transactions/sync` and `/transactions/get`, [`TRANSACTIONS_REMOVED`](https://plaid.com/docs/api/products/transactions/#transactions_removed) will be fired if any removed transactions are detected, and [`DEFAULT_UPDATE`](https://plaid.com/docs/api/products/transactions/#default_update) will be fired if any new transactions are detected. New transactions can be fetched by calling `/transactions/get` or `/transactions/sync`. Note that the `/transactions/refresh` endpoint is not supported for Capital One (`ins_128026`) and will result in a `PRODUCT_NOT_SUPPORTED` error if called on an Item from that institution.

`/transactions/refresh` is offered as an add-on to Transactions and has a separate [fee model](/docs/account/billing/#per-request-flat-fee). To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.

</api/products/transactions/#transactionsrefresh>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsRefreshRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactionsRefreshRequest();
    $request->accessToken = 'ad';
    $request->clientId = 'repellat';
    $request->secret = 'alias';

    $response = $sdk->plaid->transactionsRefresh($request);

    if ($response->transactionsRefreshResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactionsRulesCreate

The `/transactions/rules/v1/create` endpoint creates transaction categorization rules.

Rules will be applied on the Item's transactions returned in `/transactions/get` response.

The product is currently in beta. To request access, contact transactions-feedback@plaid.com.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsRulesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsRuleDetails;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsRuleFieldEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsRuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactionsRulesCreateRequest();
    $request->accessToken = 'corporis';
    $request->clientId = 'perspiciatis';
    $request->personalFinanceCategory = 'nihil';
    $request->ruleDetails = new TransactionsRuleDetails();
    $request->ruleDetails->field = TransactionsRuleFieldEnum::NAME;
    $request->ruleDetails->query = 'voluptas';
    $request->ruleDetails->type = TransactionsRuleTypeEnum::EXACT_MATCH;
    $request->secret = 'maiores';

    $response = $sdk->plaid->transactionsRulesCreate($request);

    if ($response->transactionsRulesCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactionsRulesList

The `/transactions/rules/v1/list` returns a list of transaction rules created for the Item associated with the access token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsRulesListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactionsRulesListRequest();
    $request->accessToken = 'reiciendis';
    $request->clientId = 'dolores';
    $request->secret = 'id';

    $response = $sdk->plaid->transactionsRulesList($request);

    if ($response->transactionsRulesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactionsRulesRemove

The `/transactions/rules/v1/remove` endpoint is used to remove a transaction rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsRulesRemoveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactionsRulesRemoveRequest();
    $request->accessToken = 'minima';
    $request->clientId = 'dolore';
    $request->ruleId = 'dolorum';
    $request->secret = 'nesciunt';

    $response = $sdk->plaid->transactionsRulesRemove($request);

    if ($response->transactionsRulesRemoveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactionsSync

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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactionsSyncRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactionsSyncRequest();
    $request->accessToken = 'quae';
    $request->clientId = 'recusandae';
    $request->count = 607249;
    $request->cursor = 'quaerat';
    $request->options = new TransactionsSyncRequestOptions();
    $request->options->includeLogoAndCounterpartyBeta = false;
    $request->options->includeOriginalDescription = false;
    $request->options->includePersonalFinanceCategory = false;
    $request->secret = 'molestiae';

    $response = $sdk->plaid->transactionsSync($request);

    if ($response->transactionsSyncResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferAuthorizationCreate

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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferAuthorizationCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ACHClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferNetworkEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferAuthorizationCreateRequest();
    $request->accessToken = 'ex';
    $request->accountId = 'ut';
    $request->achClass = ACHClassEnum::TEL;
    $request->amount = 'adipisci';
    $request->beaconSessionId = 'debitis';
    $request->clientId = 'laudantium';
    $request->device = [
        'nemo' => 'recusandae',
        'esse' => 'provident',
    ];
    $request->fundingAccountId = 'quis';
    $request->idempotencyKey = 'eum';
    $request->isoCurrencyCode = 'reiciendis';
    $request->network = TransferNetworkEnum::SAME_DAY_ACH;
    $request->originationAccountId = 'aspernatur';
    $request->originatorClientId = 'ullam';
    $request->paymentProfileToken = 'quasi';
    $request->secret = 'animi';
    $request->type = TransferTypeEnum::DEBIT;
    $request->user = [
        'provident' => 'possimus',
        'animi' => 'ex',
        'aliquid' => 'accusantium',
    ];
    $request->userPresent = false;
    $request->withGuarantee = false;

    $response = $sdk->plaid->transferAuthorizationCreate($request);

    if ($response->transferAuthorizationCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferCancel

Use the `/transfer/cancel` endpoint to cancel a transfer.  A transfer is eligible for cancellation if the `cancellable` property returned by `/transfer/get` is `true`.

</api/products/transfer/#transfercancel>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferCancelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferCancelRequest();
    $request->clientId = 'repellat';
    $request->originatorClientId = 'doloribus';
    $request->secret = 'ullam';
    $request->transferId = 'in';

    $response = $sdk->plaid->transferCancel($request);

    if ($response->transferCancelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferCapabilitiesGet

Use the `/transfer/capabilities/get` endpoint to determine the RTP eligibility information of a transfer.

</api/products/transfer/#transfercapabilitiesget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferCapabilitiesGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferCapabilitiesGetRequest();
    $request->accessToken = 'nam';
    $request->accountId = 'earum';
    $request->clientId = 'officia';
    $request->paymentProfileToken = 'laborum';
    $request->secret = 'placeat';

    $response = $sdk->plaid->transferCapabilitiesGet($request);

    if ($response->transferCapabilitiesGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferConfigurationGet

Use the `/transfer/configuration/get` endpoint to view your transfer product configurations.

</api/products/transfer/#transferconfigurationget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferConfigurationGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferConfigurationGetRequest();
    $request->clientId = 'modi';
    $request->originatorClientId = 'voluptatibus';
    $request->secret = 'molestias';

    $response = $sdk->plaid->transferConfigurationGet($request);

    if ($response->transferConfigurationGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferCreate

Use the `/transfer/create` endpoint to initiate a new transfer.

</api/products/transfer/#transfercreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransferCreateRequestACHClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferCreateRequestTransferNetworkEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferCreateRequestTransferTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferCreateRequest();
    $request->accessToken = 'officiis';
    $request->accountId = 'sapiente';
    $request->achClass = TransferCreateRequestACHClassEnum::WEB;
    $request->amount = 'vitae';
    $request->authorizationId = 'rerum';
    $request->clientId = 'tempora';
    $request->description = 'quis';
    $request->idempotencyKey = 'inventore';
    $request->isoCurrencyCode = 'fugit';
    $request->metadata = [
        'quae' => 'perferendis',
        'velit' => 'aspernatur',
        'eum' => 'eius',
        'rem' => 'at',
    ];
    $request->network = TransferCreateRequestTransferNetworkEnum::RTP;
    $request->originationAccountId = 'eos';
    $request->paymentProfileToken = 'sapiente';
    $request->secret = 'eum';
    $request->type = TransferCreateRequestTransferTypeEnum::DEBIT;
    $request->user = [
        'beatae' => 'cupiditate',
        'provident' => 'earum',
    ];

    $response = $sdk->plaid->transferCreate($request);

    if ($response->transferCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferEventList

Use the `/transfer/event/list` endpoint to get a list of transfer events based on specified filter criteria.

</api/products/transfer/#transfereventlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferEventListRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransferEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferEventListTransferTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferEventListRequest();
    $request->accountId = 'soluta';
    $request->clientId = 'hic';
    $request->count = 848151;
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-24T10:06:39.484Z');
    $request->eventTypes = [
        TransferEventTypeEnum::RETURN_SWEPT,
        TransferEventTypeEnum::RETURN_SWEPT,
        TransferEventTypeEnum::POSTED,
    ];
    $request->fundingAccountId = 'porro';
    $request->offset = 380335;
    $request->originationAccountId = 'dolorem';
    $request->originatorClientId = 'fugit';
    $request->secret = 'cumque';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-15T23:37:19.342Z');
    $request->sweepId = 'animi';
    $request->transferId = 'necessitatibus';
    $request->transferType = TransferEventListTransferTypeEnum::LESS_THAN_NIL_GREATER_THAN;

    $response = $sdk->plaid->transferEventList($request);

    if ($response->transferEventListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferEventSync

`/transfer/event/sync` allows you to request up to the next 25 transfer events that happened after a specific `event_id`. Use the `/transfer/event/sync` endpoint to guarantee you have seen all transfer events. When using Auth with micro-deposit verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits. For more details, see [micro-deposit events](https://www.plaid.com/docs/auth/coverage/microdeposit-events/).

</api/products/transfer/#transfereventsync>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferEventSyncRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferEventSyncRequest();
    $request->afterId = 8931;
    $request->clientId = 'quasi';
    $request->count = 90233;
    $request->secret = 'ducimus';

    $response = $sdk->plaid->transferEventSync($request);

    if ($response->transferEventSyncResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferGet

The `/transfer/get` endpoint fetches information about the transfer corresponding to the given `transfer_id`.

</api/products/transfer/#transferget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferGetRequest();
    $request->clientId = 'natus';
    $request->originatorClientId = 'occaecati';
    $request->secret = 'suscipit';
    $request->transferId = 'adipisci';

    $response = $sdk->plaid->transferGet($request);

    if ($response->transferGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferIntentCreate

Use the `/transfer/intent/create` endpoint to generate a transfer intent object and invoke the Transfer UI.

</api/products/transfer/#transferintentcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferIntentCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ACHClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferIntentCreateModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferIntentCreateNetworkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferIntentCreateRequest();
    $request->accountId = 'quasi';
    $request->achClass = ACHClassEnum::CCD;
    $request->amount = 'doloribus';
    $request->clientId = 'nulla';
    $request->description = 'necessitatibus';
    $request->fundingAccountId = 'ipsa';
    $request->isoCurrencyCode = 'tempora';
    $request->metadata = [
        'molestiae' => 'dicta',
        'iusto' => 'esse',
    ];
    $request->mode = TransferIntentCreateModeEnum::DISBURSEMENT;
    $request->network = TransferIntentCreateNetworkEnum::SAME_DAY_ACH;
    $request->originationAccountId = 'reiciendis';
    $request->requireGuarantee = false;
    $request->secret = 'vel';
    $request->user = [
        'fugiat' => 'doloremque',
    ];

    $response = $sdk->plaid->transferIntentCreate($request);

    if ($response->transferIntentCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferIntentGet

Use the `/transfer/intent/get` endpoint to retrieve more information about a transfer intent.

</api/products/transfer/#transferintentget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'odio' => 'tempora',
    ]

    $response = $sdk->plaid->transferIntentGet($request);

    if ($response->transferIntentGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferList

Use the `/transfer/list` endpoint to see a list of all your transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired transfers.


</api/products/transfer/#transferlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferListRequest();
    $request->clientId = 'esse';
    $request->count = 403793;
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-08T01:38:43.693Z');
    $request->fundingAccountId = 'ipsa';
    $request->offset = 671384;
    $request->originationAccountId = 'sunt';
    $request->originatorClientId = 'nostrum';
    $request->secret = 'fugiat';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-15T05:49:38.899Z');

    $response = $sdk->plaid->transferList($request);

    if ($response->transferListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferMetricsGet

Use the `/transfer/metrics/get` endpoint to view your transfer product usage metrics.

</api/products/transfer/#transfermetricsget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferMetricsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferMetricsGetRequest();
    $request->clientId = 'officia';
    $request->originatorClientId = 'suscipit';
    $request->secret = 'aliquid';

    $response = $sdk->plaid->transferMetricsGet($request);

    if ($response->transferMetricsGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferMigrateAccount

As an alternative to adding Items via Link, you can also use the `/transfer/migrate_account` endpoint to migrate known account and routing numbers to Plaid Items.  Note that Items created in this way are not compatible with endpoints for other products, such as `/accounts/balance/get`, and can only be used with Transfer endpoints.  If you require access to other endpoints, create the Item through Link instead.  Access to `/transfer/migrate_account` is not enabled by default; to obtain access, contact your Plaid Account Manager.

</api/products/transfer/#transfermigrate_account>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferMigrateAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferMigrateAccountRequest();
    $request->accountNumber = 'perferendis';
    $request->accountType = 'eum';
    $request->clientId = 'voluptas';
    $request->routingNumber = 'iste';
    $request->secret = 'id';
    $request->wireRoutingNumber = 'ab';

    $response = $sdk->plaid->transferMigrateAccount($request);

    if ($response->transferMigrateAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferOriginatorCreate

Use the `/transfer/originator/create` endpoint to create a new originator and return an `originator_client_id`.

</api/products/transfer/#transferoriginatorcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferOriginatorCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferOriginatorCreateRequest();
    $request->clientId = 'error';
    $request->companyName = 'possimus';
    $request->secret = 'voluptates';

    $response = $sdk->plaid->transferOriginatorCreate($request);

    if ($response->transferOriginatorCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferOriginatorGetJson

The `/transfer/originator/get` endpoint gets status updates for an originator's onboarding process. This information is also available via the Transfer page on the Plaid dashboard.

</api/products/transfer/#transferoriginatorget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferOriginatorGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferOriginatorGetRequest();
    $request->clientId = 'mollitia';
    $request->originatorClientId = 'laborum';
    $request->secret = 'libero';

    $response = $sdk->plaid->transferOriginatorGetJson($request);

    if ($response->transferOriginatorGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferOriginatorGetRaw

The `/transfer/originator/get` endpoint gets status updates for an originator's onboarding process. This information is also available via the Transfer page on the Plaid dashboard.

</api/products/transfer/#transferoriginatorget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
'ad'

    $response = $sdk->plaid->transferOriginatorGetRaw($request);

    if ($response->transferOriginatorGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferOriginatorList

The `/transfer/originator/list` endpoint gets status updates for all of your originators' onboarding. This information is also available via the Plaid dashboard.

</api/products/transfer/#transferoriginatorlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferOriginatorListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferOriginatorListRequest();
    $request->clientId = 'deleniti';
    $request->count = 316220;
    $request->offset = 110477;
    $request->secret = 'repellendus';

    $response = $sdk->plaid->transferOriginatorList($request);

    if ($response->transferOriginatorListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferQuestionnaireCreate

The `/transfer/questionnaire/create` endpoint generates a Plaid-hosted onboarding UI URL. Redirect the originator to this URL to provide their due diligence information and agree to Plaid’s terms for ACH money movement.

</api/products/transfer/#transferquestionnairecreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferQuestionnaireCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferQuestionnaireCreateRequest();
    $request->clientId = 'ex';
    $request->originatorClientId = 'quo';
    $request->redirectUri = 'ex';
    $request->secret = 'ut';

    $response = $sdk->plaid->transferQuestionnaireCreate($request);

    if ($response->transferQuestionnaireCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferRecurringCancel

Use the `/transfer/recurring/cancel` endpoint to cancel a recurring transfer.  Scheduled transfer that hasn't been submitted to bank will be cancelled.

</api/products/transfer/#transferrecurringcancel>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferRecurringCancelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferRecurringCancelRequest();
    $request->clientId = 'ad';
    $request->recurringTransferId = 'expedita';
    $request->secret = 'voluptatem';

    $response = $sdk->plaid->transferRecurringCancel($request);

    if ($response->transferRecurringCancelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferRecurringCreate

Use the `/transfer/recurring/create` endpoint to initiate a new recurring transfer.

</api/products/transfer/#transferrecurringcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferRecurringCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ACHClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferNetworkEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferRecurringSchedule;
use \OpenAPI\OpenAPI\Models\Shared\TransferScheduleIntervalUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferRecurringCreateRequest();
    $request->accessToken = 'molestias';
    $request->accountId = 'cum';
    $request->achClass = ACHClassEnum::PPD;
    $request->amount = 'beatae';
    $request->clientId = 'voluptatum';
    $request->description = 'omnis';
    $request->device = [
        'rerum' => 'est',
    ];
    $request->fundingAccountId = 'culpa';
    $request->idempotencyKey = 'voluptatem';
    $request->isoCurrencyCode = 'sapiente';
    $request->network = TransferNetworkEnum::RTP;
    $request->schedule = new TransferRecurringSchedule();
    $request->schedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-04-27');
    $request->schedule->intervalCount = 867168;
    $request->schedule->intervalExecutionDay = 891315;
    $request->schedule->intervalUnit = TransferScheduleIntervalUnitEnum::WEEK;
    $request->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-19');
    $request->secret = 'earum';
    $request->testClockId = 'ex';
    $request->type = TransferTypeEnum::CREDIT;
    $request->user = [
        'minus' => 'nemo',
        'asperiores' => 'ratione',
        'ullam' => 'perferendis',
    ];
    $request->userPresent = false;

    $response = $sdk->plaid->transferRecurringCreate($request);

    if ($response->transferRecurringCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferRecurringGet

The `/transfer/recurring/get` fetches information about the recurring transfer corresponding to the given `recurring_transfer_id`.

</api/products/transfer/#transferrecurringget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferRecurringGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferRecurringGetRequest();
    $request->clientId = 'illum';
    $request->recurringTransferId = 'totam';
    $request->secret = 'impedit';

    $response = $sdk->plaid->transferRecurringGet($request);

    if ($response->transferRecurringGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferRecurringList

Use the `/transfer/recurring/list` endpoint to see a list of all your recurring transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired recurring transfers.


</api/products/transfer/#transferrecurringlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferRecurringListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferRecurringListRequest();
    $request->clientId = 'quibusdam';
    $request->count = 720528;
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-14T19:17:09.662Z');
    $request->fundingAccountId = 'dolor';
    $request->offset = 307376;
    $request->secret = 'inventore';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-30T17:21:08.305Z');

    $response = $sdk->plaid->transferRecurringList($request);

    if ($response->transferRecurringListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferRefundCancel

Use the `/transfer/refund/cancel` endpoint to cancel a refund.  A refund is eligible for cancellation if it has not yet been submitted to the payment network.

</api/products/transfer/#transferrefundcancel>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferRefundCancelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferRefundCancelRequest();
    $request->clientId = 'tempora';
    $request->refundId = 'dolor';
    $request->secret = 'consequatur';

    $response = $sdk->plaid->transferRefundCancel($request);

    if ($response->transferRefundCancelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferRefundCreate

Use the `/transfer/refund/create` endpoint to create a refund for a transfer. A transfer can be refunded if the transfer was initiated in the past 180 days.

Processing of the refund will not occur until at least 3 business days following the transfer's settlement date, plus any hold/settlement delays. This 3-day window helps better protect your business from regular ACH returns. Consumer initiated returns (unauthorized returns) could still happen for about 60 days from the settlement date. If the original transfer is canceled, returned or failed, all pending refunds will automatically be canceled. Processed refunds cannot be revoked.

</api/products/transfer/#transferrefundcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferRefundCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferRefundCreateRequest();
    $request->amount = 'architecto';
    $request->clientId = 'sit';
    $request->idempotencyKey = 'modi';
    $request->secret = 'fugit';
    $request->transferId = 'ab';

    $response = $sdk->plaid->transferRefundCreate($request);

    if ($response->transferRefundCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferRefundGet

The `/transfer/refund/get` endpoint fetches information about the refund corresponding to the given `refund_id`.

</api/products/transfer/#transferrefundget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferRefundGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferRefundGetRequest();
    $request->clientId = 'laudantium';
    $request->refundId = 'quae';
    $request->secret = 'dolor';

    $response = $sdk->plaid->transferRefundGet($request);

    if ($response->transferRefundGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferRepaymentList

The `/transfer/repayment/list` endpoint fetches repayments matching the given filters. Repayments are returned in reverse-chronological order (most recent first) starting at the given `start_time`.

</api/products/transfer/#transferrepaymentlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferRepaymentListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferRepaymentListRequest();
    $request->clientId = 'fugiat';
    $request->count = 369490;
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-11T21:15:35.891Z');
    $request->offset = 559682;
    $request->secret = 'eveniet';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-06T23:27:50.905Z');

    $response = $sdk->plaid->transferRepaymentList($request);

    if ($response->transferRepaymentListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferRepaymentReturnList

The `/transfer/repayment/return/list` endpoint retrieves the set of returns that were batched together into the specified repayment. The sum of amounts of returns retrieved by this request equals the amount of the repayment.

</api/products/transfer/#transferrepaymentreturnlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferRepaymentReturnListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferRepaymentReturnListRequest();
    $request->clientId = 'esse';
    $request->count = 897277;
    $request->offset = 153369;
    $request->repaymentId = 'veniam';
    $request->secret = 'nesciunt';

    $response = $sdk->plaid->transferRepaymentReturnList($request);

    if ($response->transferRepaymentReturnListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferSweepGet

The `/transfer/sweep/get` endpoint fetches a sweep corresponding to the given `sweep_id`.

</api/products/transfer/#transfersweepget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferSweepGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferSweepGetRequest();
    $request->clientId = 'expedita';
    $request->secret = 'eum';
    $request->sweepId = 'vel';

    $response = $sdk->plaid->transferSweepGet($request);

    if ($response->transferSweepGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferSweepList

The `/transfer/sweep/list` endpoint fetches sweeps matching the given filters.

</api/products/transfer/#transfersweeplist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferSweepListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferSweepListRequest();
    $request->clientId = 'voluptatum';
    $request->count = 301692;
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-06T07:12:03.115Z');
    $request->fundingAccountId = 'porro';
    $request->offset = 421844;
    $request->originatorClientId = 'nobis';
    $request->secret = 'laboriosam';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T08:51:26.881Z');

    $response = $sdk->plaid->transferSweepList($request);

    if ($response->transferSweepListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userCreate

This endpoint should be called for each of your end users before they begin a Plaid income flow. This provides you a single token to access all income data associated with the user. You should only create one per end user.

If you call the endpoint multiple times with the same `client_user_id`, the first creation call will succeed and the rest will fail with an error message indicating that the user has been created for the given `client_user_id`.

Ensure that you store the `user_token` along with your user's identifier in your database, as it is not possible to retrieve a previously created `user_token`.

</api/products/income/#usercreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\UserCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserCreateRequest();
    $request->clientId = 'voluptatem';
    $request->clientUserId = 'exercitationem';
    $request->secret = 'necessitatibus';

    $response = $sdk->plaid->userCreate($request);

    if ($response->userCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## walletCreate

Create an e-wallet. The response is the newly created e-wallet object.

</api/products/virtual-accounts/#walletcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WalletCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\WalletISOCurrencyCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WalletCreateRequest();
    $request->clientId = 'quasi';
    $request->isoCurrencyCode = WalletISOCurrencyCodeEnum::GBP;
    $request->secret = 'at';

    $response = $sdk->plaid->walletCreate($request);

    if ($response->walletCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## walletGet

Fetch an e-wallet. The response includes the current balance.

</api/products/virtual-accounts/#walletget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WalletGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WalletGetRequest();
    $request->clientId = 'vero';
    $request->secret = 'est';
    $request->walletId = 'harum';

    $response = $sdk->plaid->walletGet($request);

    if ($response->walletGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## walletList

This endpoint lists all e-wallets in descending order of creation.

</api/products/virtual-accounts/#walletlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WalletListRequest;
use \OpenAPI\OpenAPI\Models\Shared\WalletISOCurrencyCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WalletListRequest();
    $request->clientId = 'sequi';
    $request->count = 987349;
    $request->cursor = 'repudiandae';
    $request->isoCurrencyCode = WalletISOCurrencyCodeEnum::EUR;
    $request->secret = 'occaecati';

    $response = $sdk->plaid->walletList($request);

    if ($response->walletListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## walletTransactionExecute

Execute a transaction using the specified e-wallet.
Specify the e-wallet to debit from, the counterparty to credit to, the idempotency key to prevent duplicate transactions, the amount and reference for the transaction.
Transactions will settle in seconds to several days, depending on the underlying payment rail.

</api/products/virtual-accounts/#wallettransactionexecute>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WalletTransactionExecuteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WalletTransactionExecuteRequest();
    $request->amount = [
        'voluptate' => 'blanditiis',
        'officia' => 'voluptas',
    ];
    $request->clientId = 'numquam';
    $request->counterparty = [
        'quos' => 'eius',
        'aspernatur' => 'ducimus',
    ];
    $request->idempotencyKey = 'nesciunt';
    $request->reference = 'fuga';
    $request->secret = 'laudantium';
    $request->walletId = 'incidunt';

    $response = $sdk->plaid->walletTransactionExecute($request);

    if ($response->walletTransactionExecuteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## walletTransactionGet

Fetch a specific e-wallet transaction

</api/products/virtual-accounts/#wallettransactionget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WalletTransactionGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WalletTransactionGetRequest();
    $request->clientId = 'quasi';
    $request->secret = 'rem';
    $request->transactionId = 'fugiat';

    $response = $sdk->plaid->walletTransactionGet($request);

    if ($response->walletTransactionGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## walletTransactionList

This endpoint lists the latest transactions of the specified e-wallet. Transactions are returned in descending order by the `created_at` time.

</api/products/virtual-accounts/#wallettransactionlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WalletTransactionListRequest;
use \OpenAPI\OpenAPI\Models\Shared\WalletTransactionListRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WalletTransactionListRequest();
    $request->clientId = 'dicta';
    $request->count = 395544;
    $request->cursor = 'consequuntur';
    $request->options = new WalletTransactionListRequestOptions();
    $request->options->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-14T21:58:33.872Z');
    $request->options->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-22T08:47:06.543Z');
    $request->secret = 'soluta';
    $request->walletId = 'alias';

    $response = $sdk->plaid->walletTransactionList($request);

    if ($response->walletTransactionListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningEntityCreate

Create a new entity watchlist screening to check your customer against watchlists defined in the associated entity watchlist program. If your associated program has ongoing screening enabled, this is the profile information that will be used to monitor your customer over time.

</api/products/monitor/#watchlist_screeningentitycreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningEntityCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityWatchlistSearchTerms;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningEntityCreateRequest();
    $request->clientId = 'omnis';
    $request->clientUserId = 'your-db-id-3b24110';
    $request->searchTerms = new EntityWatchlistSearchTerms();
    $request->searchTerms->country = 'US';
    $request->searchTerms->documentNumber = 'C31195855';
    $request->searchTerms->emailAddress = 'user@example.com';
    $request->searchTerms->entityWatchlistProgramId = 'entprg_2eRPsDnL66rZ7H';
    $request->searchTerms->legalName = 'Al-Qaida';
    $request->searchTerms->phoneNumber = '+14025671234';
    $request->searchTerms->url = 'https://example.com';
    $request->secret = 'eos';

    $response = $sdk->plaid->watchlistScreeningEntityCreate($request);

    if ($response->watchlistScreeningEntityCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningEntityGet

Retrieve an entity watchlist screening.

</api/products/monitor/#watchlist_screeningentityget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningEntityGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningEntityGetRequest();
    $request->clientId = 'occaecati';
    $request->entityWatchlistScreeningId = 'entscr_52xR9LKo77r1Np';
    $request->secret = 'iste';

    $response = $sdk->plaid->watchlistScreeningEntityGet($request);

    if ($response->watchlistScreeningEntityGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningEntityHistoryList

List all changes to the entity watchlist screening in reverse-chronological order. If the watchlist screening has not been edited, no history will be returned.

</api/products/monitor/#watchlist_screeningentityhistorylist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningEntityHistoryListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningEntityHistoryListRequest();
    $request->clientId = 'magni';
    $request->cursor = 'eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM';
    $request->entityWatchlistScreeningId = 'entscr_52xR9LKo77r1Np';
    $request->secret = 'inventore';

    $response = $sdk->plaid->watchlistScreeningEntityHistoryList($request);

    if ($response->watchlistScreeningEntityHistoryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningEntityHitList

List all hits for the entity watchlist screening.

</api/products/monitor/#watchlist_screeningentityhitlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningEntityHitListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningEntityHitListRequest();
    $request->clientId = 'fuga';
    $request->cursor = 'eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM';
    $request->entityWatchlistScreeningId = 'entscr_52xR9LKo77r1Np';
    $request->secret = 'accusamus';

    $response = $sdk->plaid->watchlistScreeningEntityHitList($request);

    if ($response->watchlistScreeningEntityHitListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningEntityList

List all entity screenings.

</api/products/monitor/#watchlist_screeningentitylist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningEntityListRequest;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningEntityListRequest();
    $request->assignee = '54350110fedcbaf01234ffee';
    $request->clientId = 'voluptatibus';
    $request->clientUserId = 'your-db-id-3b24110';
    $request->cursor = 'eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM';
    $request->entityWatchlistProgramId = 'entprg_2eRPsDnL66rZ7H';
    $request->secret = 'distinctio';
    $request->status = WatchlistScreeningStatusEnum::CLEARED;

    $response = $sdk->plaid->watchlistScreeningEntityList($request);

    if ($response->watchlistScreeningEntityListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningEntityProgramGet

Get an entity watchlist screening program

</api/products/monitor/#watchlist_screeningentityprogramget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningEntityProgramGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningEntityProgramGetRequest();
    $request->clientId = 'omnis';
    $request->entityWatchlistProgramId = 'entprg_2eRPsDnL66rZ7H';
    $request->secret = 'delectus';

    $response = $sdk->plaid->watchlistScreeningEntityProgramGet($request);

    if ($response->watchlistScreeningEntityProgramGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningEntityProgramList

List all entity watchlist screening programs

</api/products/monitor/#watchlist_screeningentityprogramlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningEntityProgramListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningEntityProgramListRequest();
    $request->clientId = 'minima';
    $request->cursor = 'eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM';
    $request->secret = 'praesentium';

    $response = $sdk->plaid->watchlistScreeningEntityProgramList($request);

    if ($response->watchlistScreeningEntityProgramListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningEntityReviewCreate

Create a review for an entity watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.

</api/products/monitor/#watchlist_screeningentityreviewcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningEntityReviewCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningEntityReviewCreateRequest();
    $request->clientId = 'maxime';
    $request->comment = 'These look like legitimate matches, rejecting the customer.';
    $request->confirmedHits = [
        'enthit_52xR9LKo77r1Np',
        'enthit_52xR9LKo77r1Np',
    ];
    $request->dismissedHits = [
        'enthit_52xR9LKo77r1Np',
        'enthit_52xR9LKo77r1Np',
        'enthit_52xR9LKo77r1Np',
        'enthit_52xR9LKo77r1Np',
    ];
    $request->entityWatchlistScreeningId = 'entscr_52xR9LKo77r1Np';
    $request->secret = 'quos';

    $response = $sdk->plaid->watchlistScreeningEntityReviewCreate($request);

    if ($response->watchlistScreeningEntityReviewCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningEntityReviewList

List all reviews for a particular entity watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.

</api/products/monitor/#watchlist_screeningentityreviewlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningEntityReviewListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningEntityReviewListRequest();
    $request->clientId = 'commodi';
    $request->cursor = 'eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM';
    $request->entityWatchlistScreeningId = 'entscr_52xR9LKo77r1Np';
    $request->secret = 'itaque';

    $response = $sdk->plaid->watchlistScreeningEntityReviewList($request);

    if ($response->watchlistScreeningEntityReviewListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningEntityUpdate

Update an entity watchlist screening.

</api/products/monitor/#watchlist_screeningentityupdate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningEntityUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningEntityUpdateRequestResettableFieldEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEntityScreeningRequestSearchTerms;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningEntityUpdateRequest();
    $request->assignee = '54350110fedcbaf01234ffee';
    $request->clientId = 'commodi';
    $request->clientUserId = 'your-db-id-3b24110';
    $request->entityWatchlistScreeningId = 'entscr_52xR9LKo77r1Np';
    $request->resetFields = [
        WatchlistScreeningEntityUpdateRequestResettableFieldEnum::ASSIGNEE,
        WatchlistScreeningEntityUpdateRequestResettableFieldEnum::ASSIGNEE,
        WatchlistScreeningEntityUpdateRequestResettableFieldEnum::ASSIGNEE,
    ];
    $request->searchTerms = new UpdateEntityScreeningRequestSearchTerms();
    $request->searchTerms->country = 'US';
    $request->searchTerms->documentNumber = 'C31195855';
    $request->searchTerms->emailAddress = 'user@example.com';
    $request->searchTerms->entityWatchlistProgramId = 'entprg_2eRPsDnL66rZ7H';
    $request->searchTerms->legalName = 'Al-Qaida';
    $request->searchTerms->phoneNumber = '+14025671234';
    $request->searchTerms->url = 'https://example.com';
    $request->secret = 'earum';
    $request->status = WatchlistScreeningStatusEnum::CLEARED;

    $response = $sdk->plaid->watchlistScreeningEntityUpdate($request);

    if ($response->watchlistScreeningEntityUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningIndividualCreate

Create a new Watchlist Screening to check your customer against watchlists defined in the associated Watchlist Program. If your associated program has ongoing screening enabled, this is the profile information that will be used to monitor your customer over time.

</api/products/monitor/#watchlist_screeningindividualcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningIndividualCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningRequestSearchTerms;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningIndividualCreateRequest();
    $request->clientId = 'modi';
    $request->clientUserId = 'your-db-id-3b24110';
    $request->searchTerms = new WatchlistScreeningRequestSearchTerms();
    $request->searchTerms->country = 'US';
    $request->searchTerms->dateOfBirth = DateTime::createFromFormat('Y-m-d', '1990-05-29');
    $request->searchTerms->documentNumber = 'C31195855';
    $request->searchTerms->legalName = 'Aleksey Potemkin';
    $request->searchTerms->watchlistProgramId = 'prg_2eRPsDnL66rZ7H';
    $request->secret = 'nam';

    $response = $sdk->plaid->watchlistScreeningIndividualCreate($request);

    if ($response->watchlistScreeningIndividualCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningIndividualGet

Retrieve a previously created individual watchlist screening

</api/products/monitor/#watchlist_screeningindividualget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningIndividualGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningIndividualGetRequest();
    $request->clientId = 'vero';
    $request->secret = 'voluptatem';
    $request->watchlistScreeningId = 'scr_52xR9LKo77r1Np';

    $response = $sdk->plaid->watchlistScreeningIndividualGet($request);

    if ($response->watchlistScreeningIndividualGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningIndividualHistoryList

List all changes to the individual watchlist screening in reverse-chronological order. If the watchlist screening has not been edited, no history will be returned.

</api/products/monitor/#watchlist_screeningindividualhistorylist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningIndividualHistoryListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningIndividualHistoryListRequest();
    $request->clientId = 'ipsam';
    $request->cursor = 'eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM';
    $request->secret = 'vel';
    $request->watchlistScreeningId = 'scr_52xR9LKo77r1Np';

    $response = $sdk->plaid->watchlistScreeningIndividualHistoryList($request);

    if ($response->watchlistScreeningIndividualHistoryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningIndividualHitList

List all hits found by Plaid for a particular individual watchlist screening.

</api/products/monitor/#watchlist_screeningindividualhitlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningIndividualHitListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningIndividualHitListRequest();
    $request->clientId = 'alias';
    $request->cursor = 'eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM';
    $request->secret = 'quasi';
    $request->watchlistScreeningId = 'scr_52xR9LKo77r1Np';

    $response = $sdk->plaid->watchlistScreeningIndividualHitList($request);

    if ($response->watchlistScreeningIndividualHitListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningIndividualList

List previously created watchlist screenings for individuals

</api/products/monitor/#watchlist_screeningindividuallist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningIndividualListRequest;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningIndividualListRequest();
    $request->assignee = '54350110fedcbaf01234ffee';
    $request->clientId = 'non';
    $request->clientUserId = 'your-db-id-3b24110';
    $request->cursor = 'eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM';
    $request->secret = 'maiores';
    $request->status = WatchlistScreeningStatusEnum::CLEARED;
    $request->watchlistProgramId = 'prg_2eRPsDnL66rZ7H';

    $response = $sdk->plaid->watchlistScreeningIndividualList($request);

    if ($response->watchlistScreeningIndividualListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningIndividualProgramGet

Get an individual watchlist screening program

</api/products/monitor/#watchlist_screeningindividualprogramget>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningIndividualProgramGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningIndividualProgramGetRequest();
    $request->clientId = 'enim';
    $request->secret = 'sint';
    $request->watchlistProgramId = 'prg_2eRPsDnL66rZ7H';

    $response = $sdk->plaid->watchlistScreeningIndividualProgramGet($request);

    if ($response->watchlistScreeningIndividualProgramGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningIndividualProgramList

List all individual watchlist screening programs

</api/products/monitor/#watchlist_screeningindividualprogramlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningIndividualProgramListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningIndividualProgramListRequest();
    $request->clientId = 'nulla';
    $request->cursor = 'eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM';
    $request->secret = 'deserunt';

    $response = $sdk->plaid->watchlistScreeningIndividualProgramList($request);

    if ($response->watchlistScreeningIndividualProgramListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningIndividualReviewCreate

Create a review for the individual watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.

</api/products/monitor/#watchlist_screeningindividualreviewcreate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningIndividualReviewCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningIndividualReviewCreateRequest();
    $request->clientId = 'esse';
    $request->comment = 'These look like legitimate matches, rejecting the customer.';
    $request->confirmedHits = [
        'scrhit_52xR9LKo77r1Np',
        'scrhit_52xR9LKo77r1Np',
    ];
    $request->dismissedHits = [
        'scrhit_52xR9LKo77r1Np',
        'scrhit_52xR9LKo77r1Np',
    ];
    $request->secret = 'est';
    $request->watchlistScreeningId = 'scr_52xR9LKo77r1Np';

    $response = $sdk->plaid->watchlistScreeningIndividualReviewCreate($request);

    if ($response->watchlistScreeningIndividualReviewCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningIndividualReviewList

List all reviews for the individual watchlist screening.

</api/products/monitor/#watchlist_screeningindividualreviewlist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningIndividualReviewListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningIndividualReviewListRequest();
    $request->clientId = 'quis';
    $request->cursor = 'eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM';
    $request->secret = 'sint';
    $request->watchlistScreeningId = 'scr_52xR9LKo77r1Np';

    $response = $sdk->plaid->watchlistScreeningIndividualReviewList($request);

    if ($response->watchlistScreeningIndividualReviewListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistScreeningIndividualUpdate

Update a specific individual watchlist screening. This endpoint can be used to add additional customer information, correct outdated information, add a reference id, assign the individual to a reviewer, and update which program it is associated with. Please note that you may not update `search_terms` and `status` at the same time since editing `search_terms` may trigger an automatic `status` change.

</api/products/monitor/#watchlist_screeningindividualupdate>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningIndividualUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningIndividualUpdateRequestResettableFieldEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateIndividualScreeningRequestSearchTerms;
use \OpenAPI\OpenAPI\Models\Shared\WatchlistScreeningStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistScreeningIndividualUpdateRequest();
    $request->assignee = '54350110fedcbaf01234ffee';
    $request->clientId = 'accusamus';
    $request->clientUserId = 'your-db-id-3b24110';
    $request->resetFields = [
        WatchlistScreeningIndividualUpdateRequestResettableFieldEnum::ASSIGNEE,
        WatchlistScreeningIndividualUpdateRequestResettableFieldEnum::ASSIGNEE,
        WatchlistScreeningIndividualUpdateRequestResettableFieldEnum::ASSIGNEE,
        WatchlistScreeningIndividualUpdateRequestResettableFieldEnum::ASSIGNEE,
    ];
    $request->searchTerms = new UpdateIndividualScreeningRequestSearchTerms();
    $request->searchTerms->country = 'US';
    $request->searchTerms->dateOfBirth = DateTime::createFromFormat('Y-m-d', '1990-05-29');
    $request->searchTerms->documentNumber = 'C31195855';
    $request->searchTerms->legalName = 'Aleksey Potemkin';
    $request->searchTerms->watchlistProgramId = 'prg_2eRPsDnL66rZ7H';
    $request->secret = 'hic';
    $request->status = WatchlistScreeningStatusEnum::CLEARED;
    $request->watchlistScreeningId = 'scr_52xR9LKo77r1Np';

    $response = $sdk->plaid->watchlistScreeningIndividualUpdate($request);

    if ($response->watchlistScreeningIndividualUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webhookVerificationKeyGet

Plaid signs all outgoing webhooks and provides JSON Web Tokens (JWTs) so that you can verify the authenticity of any incoming webhooks to your application. A message signature is included in the `Plaid-Verification` header.

The `/webhook_verification_key/get` endpoint provides a JSON Web Key (JWK) that can be used to verify a JWT.

</api/webhooks/webhook-verification/#get-webhook-verification-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WebhookVerificationKeyGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhookVerificationKeyGetRequest();
    $request->clientId = 'necessitatibus';
    $request->keyId = 'asperiores';
    $request->secret = 'ex';

    $response = $sdk->plaid->webhookVerificationKeyGet($request);

    if ($response->webhookVerificationKeyGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
