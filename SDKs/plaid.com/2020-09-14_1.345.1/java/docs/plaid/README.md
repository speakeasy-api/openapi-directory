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

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountsBalanceGetResponse;
import org.openapis.openapi.models.shared.AccountsBalanceGetRequest;
import org.openapis.openapi.models.shared.AccountsBalanceGetRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam", "debitis", "ipsa") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AccountsBalanceGetRequest req = new AccountsBalanceGetRequest("delectus") {{
                clientId = "tempora";
                options = new AccountsBalanceGetRequestOptions() {{
                    accountIds = new String[]{{
                        add("molestiae"),
                        add("minus"),
                    }};
                    minLastUpdatedDatetime = OffsetDateTime.parse("2021-05-31T20:38:28.793Z");
                }};;
                secret = "iusto";
            }};            

            AccountsBalanceGetResponse res = sdk.plaid.accountsBalanceGet(req);

            if (res.accountsGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountsGet

The `/accounts/get` endpoint can be used to retrieve a list of accounts associated with any linked Item. Plaid will only return active bank accounts — that is, accounts that are not closed and are capable of carrying a balance.
For items that went through the updated account selection pane, this endpoint only returns accounts that were permissioned by the user when they initially created the Item. If a user creates a new account after the initial link, you can capture this event through the [`NEW_ACCOUNTS_AVAILABLE`](https://plaid.com/docs/api/items/#new_accounts_available) webhook and then use Link's [update mode](https://plaid.com/docs/link/update-mode/) to request that the user share this new account with you.

This endpoint retrieves cached information, rather than extracting fresh information from the institution. As a result, balances returned may not be up-to-date; for realtime balance information, use `/accounts/balance/get` instead. Note that some information is nullable.

</api/accounts/#accountsget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountsGetResponse;
import org.openapis.openapi.models.shared.AccountsGetRequest;
import org.openapis.openapi.models.shared.AccountsGetRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "nisi", "recusandae") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AccountsGetRequest req = new AccountsGetRequest("temporibus") {{
                clientId = "ab";
                options = new AccountsGetRequestOptions() {{
                    accountIds = new String[]{{
                        add("veritatis"),
                        add("deserunt"),
                    }};
                }};;
                secret = "perferendis";
            }};            

            AccountsGetResponse res = sdk.plaid.accountsGet(req);

            if (res.accountsGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## applicationGet

Allows financial institutions to retrieve information about Plaid clients for the purpose of building control-tower experiences

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApplicationGetResponse;
import org.openapis.openapi.models.shared.ApplicationGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam", "repellendus", "sapiente") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApplicationGetRequest req = new ApplicationGetRequest("quo", "odit", "at");            

            ApplicationGetResponse res = sdk.plaid.applicationGet(req);

            if (res.applicationGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assetReportAuditCopyCreate

Plaid can provide an Audit Copy of any Asset Report directly to a participating third party on your behalf. For example, Plaid can supply an Audit Copy directly to Fannie Mae on your behalf if you participate in the Day 1 Certainty™ program. An Audit Copy contains the same underlying data as the Asset Report.

To grant access to an Audit Copy, use the `/asset_report/audit_copy/create` endpoint to create an `audit_copy_token` and then pass that token to the third party who needs access. Each third party has its own `auditor_id`, for example `fannie_mae`. You’ll need to create a separate Audit Copy for each third party to whom you want to grant access to the Report.

</api/products/assets/#asset_reportaudit_copycreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssetReportAuditCopyCreateResponse;
import org.openapis.openapi.models.shared.AssetReportAuditCopyCreateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at", "maiores", "molestiae") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AssetReportAuditCopyCreateRequest req = new AssetReportAuditCopyCreateRequest("quod") {{
                auditorId = "quod";
                clientId = "esse";
                secret = "totam";
            }};            

            AssetReportAuditCopyCreateResponse res = sdk.plaid.assetReportAuditCopyCreate(req);

            if (res.assetReportAuditCopyCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assetReportAuditCopyGet

`/asset_report/audit_copy/get` allows auditors to get a copy of an Asset Report that was previously shared via the `/asset_report/audit_copy/create` endpoint.  The caller of `/asset_report/audit_copy/create` must provide the `audit_copy_token` to the auditor.  This token can then be used to call `/asset_report/audit_copy/create`.

</none/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssetReportAuditCopyGetResponse;
import org.openapis.openapi.models.shared.AssetReportAuditCopyGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro", "dolorum", "dicta") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AssetReportAuditCopyGetRequest req = new AssetReportAuditCopyGetRequest("nam") {{
                clientId = "officia";
                secret = "occaecati";
            }};            

            AssetReportAuditCopyGetResponse res = sdk.plaid.assetReportAuditCopyGet(req);

            if (res.assetReportGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assetReportAuditCopyRemove

The `/asset_report/audit_copy/remove` endpoint allows you to remove an Audit Copy. Removing an Audit Copy invalidates the `audit_copy_token` associated with it, meaning both you and any third parties holding the token will no longer be able to use it to access Report data. Items associated with the Asset Report, the Asset Report itself and other Audit Copies of it are not affected and will remain accessible after removing the given Audit Copy.

</api/products/assets/#asset_reportaudit_copyremove>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssetReportAuditCopyRemoveResponse;
import org.openapis.openapi.models.shared.AssetReportAuditCopyRemoveRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit", "deleniti", "hic") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AssetReportAuditCopyRemoveRequest req = new AssetReportAuditCopyRemoveRequest("optio") {{
                clientId = "totam";
                secret = "beatae";
            }};            

            AssetReportAuditCopyRemoveResponse res = sdk.plaid.assetReportAuditCopyRemove(req);

            if (res.assetReportAuditCopyRemoveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assetReportCreate

The `/asset_report/create` endpoint initiates the process of creating an Asset Report, which can then be retrieved by passing the `asset_report_token` return value to the `/asset_report/get` or `/asset_report/pdf/get` endpoints.

The Asset Report takes some time to be created and is not available immediately after calling `/asset_report/create`. When the Asset Report is ready to be retrieved using `/asset_report/get` or `/asset_report/pdf/get`, Plaid will fire a `PRODUCT_READY` webhook. For full details of the webhook schema, see [Asset Report webhooks](https://plaid.com/docs/api/products/assets/#webhooks).

The `/asset_report/create` endpoint creates an Asset Report at a moment in time. Asset Reports are immutable. To get an updated Asset Report, use the `/asset_report/refresh` endpoint.

</api/products/assets/#asset_reportcreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssetReportCreateResponse;
import org.openapis.openapi.models.shared.AssetReportAddOnsEnum;
import org.openapis.openapi.models.shared.AssetReportCreateRequest;
import org.openapis.openapi.models.shared.AssetReportCreateRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi", "molestiae", "modi") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AssetReportCreateRequest req = new AssetReportCreateRequest(186332L) {{
                accessTokens = new String[]{{
                    add("cum"),
                    add("esse"),
                    add("ipsum"),
                    add("excepturi"),
                }};
                clientId = "aspernatur";
                options = new AssetReportCreateRequestOptions() {{
                    addOns = new org.openapis.openapi.models.shared.AssetReportAddOnsEnum[]{{
                        add(AssetReportAddOnsEnum.INVESTMENTS),
                    }};
                    clientReportId = "natus";
                    includeFastReport = false;
                    products = new String[]{{
                        add("iste"),
                    }};
                    user = new java.util.HashMap<String, Object>() {{
                        put("natus", "laboriosam");
                    }};
                    webhook = "hic";
                }};;
                secret = "saepe";
                userToken = "fuga";
            }};            

            AssetReportCreateResponse res = sdk.plaid.assetReportCreate(req);

            if (res.assetReportCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assetReportFilter

By default, an Asset Report will contain all of the accounts on a given Item. In some cases, you may not want the Asset Report to contain all accounts. For example, you might have the end user choose which accounts are relevant in Link using the Account Select view, which you can enable in the dashboard. Or, you might always exclude certain account types or subtypes, which you can identify by using the `/accounts/get` endpoint. To narrow an Asset Report to only a subset of accounts, use the `/asset_report/filter` endpoint.

To exclude certain Accounts from an Asset Report, first use the `/asset_report/create` endpoint to create the report, then send the `asset_report_token` along with a list of `account_ids` to exclude to the `/asset_report/filter` endpoint, to create a new Asset Report which contains only a subset of the original Asset Report's data.

Because Asset Reports are immutable, calling `/asset_report/filter` does not alter the original Asset Report in any way; rather, `/asset_report/filter` creates a new Asset Report with a new token and id. Asset Reports created via `/asset_report/filter` do not contain new Asset data, and are not billed.

Plaid will fire a [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook once generation of the filtered Asset Report has completed.

</api/products/assets/#asset_reportfilter>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssetReportFilterResponse;
import org.openapis.openapi.models.shared.AssetReportFilterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "corporis", "iste") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AssetReportFilterRequest req = new AssetReportFilterRequest(                new String[]{{
                                add("saepe"),
                                add("quidem"),
                            }}, "architecto") {{
                clientId = "ipsa";
                secret = "reiciendis";
            }};            

            AssetReportFilterResponse res = sdk.plaid.assetReportFilter(req);

            if (res.assetReportFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assetReportGet

The `/asset_report/get` endpoint retrieves the Asset Report in JSON format. Before calling `/asset_report/get`, you must first create the Asset Report using `/asset_report/create` (or filter an Asset Report using `/asset_report/filter`) and then wait for the [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire, indicating that the Report is ready to be retrieved.

By default, an Asset Report includes transaction descriptions as returned by the bank, as opposed to parsed and categorized by Plaid. You can also receive cleaned and categorized transactions, as well as additional insights like merchant name or location information. We call this an Asset Report with Insights. An Asset Report with Insights provides transaction category, location, and merchant information in addition to the transaction strings provided in a standard Asset Report.

If report_type was set to `VERIFICATION_OF_EMPLOYMENT` when the Asset Report was created in asset_report/create, debit transactions and transaction amounts won’t be included in the report.

To retrieve an Asset Report with Insights, call the `/asset_report/get` endpoint with `include_insights` set to `true`.

</api/products/assets/#asset_reportget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssetReportGetResponse;
import org.openapis.openapi.models.shared.AssetReportGetRequest;
import org.openapis.openapi.models.shared.AssetReportGetRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est", "mollitia", "laborum") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AssetReportGetRequest req = new AssetReportGetRequest("dolores") {{
                clientId = "dolorem";
                fastReport = false;
                includeInsights = false;
                options = new AssetReportGetRequestOptions() {{
                    daysToInclude = 358152L;
                }};;
                secret = "explicabo";
            }};            

            AssetReportGetResponse res = sdk.plaid.assetReportGet(req);

            if (res.assetReportGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assetReportPdfGet

The `/asset_report/pdf/get` endpoint retrieves the Asset Report in PDF format. Before calling `/asset_report/pdf/get`, you must first create the Asset Report using `/asset_report/create` (or filter an Asset Report using `/asset_report/filter`) and then wait for the [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire, indicating that the Report is ready to be retrieved.

The response to `/asset_report/pdf/get` is the PDF binary data. The `request_id`  is returned in the `Plaid-Request-ID` header.

If report_type was set to `VERIFICATION_OF_EMPLOYMENT` when the Asset Report was created in asset_report/create, debit transactions and transaction amounts won’t be included in the report.

[View a sample PDF Asset Report](https://plaid.com/documents/sample-asset-report.pdf).

</api/products/assets/#asset_reportpdfget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssetReportPdfGetResponse;
import org.openapis.openapi.models.shared.AssetReportPDFGetRequest;
import org.openapis.openapi.models.shared.AssetReportPDFGetRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis", "enim", "omnis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AssetReportPDFGetRequest req = new AssetReportPDFGetRequest("nemo") {{
                clientId = "minima";
                options = new AssetReportPDFGetRequestOptions() {{
                    daysToInclude = 570197L;
                }};;
                secret = "accusantium";
            }};            

            AssetReportPdfGetResponse res = sdk.plaid.assetReportPdfGet(req);

            if (res.assetReportPDFGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assetReportRefresh

An Asset Report is an immutable snapshot of a user's assets. In order to "refresh" an Asset Report you created previously, you can use the `/asset_report/refresh` endpoint to create a new Asset Report based on the old one, but with the most recent data available.

The new Asset Report will contain the same Items as the original Report, as well as the same filters applied by any call to `/asset_report/filter`. By default, the new Asset Report will also use the same parameters you submitted with your original `/asset_report/create` request, but the original `days_requested` value and the values of any parameters in the `options` object can be overridden with new values. To change these arguments, simply supply new values for them in your request to `/asset_report/refresh`. Submit an empty string ("") for any previously-populated fields you would like set as empty.

</api/products/assets/#asset_reportrefresh>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssetReportRefreshResponse;
import org.openapis.openapi.models.shared.AssetReportRefreshRequest;
import org.openapis.openapi.models.shared.AssetReportRefreshRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "culpa", "doloribus") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AssetReportRefreshRequest req = new AssetReportRefreshRequest("sapiente") {{
                clientId = "architecto";
                daysRequested = 652790L;
                options = new AssetReportRefreshRequestOptions() {{
                    clientReportId = "dolorem";
                    user = new java.util.HashMap<String, Object>() {{
                        put("consequuntur", "repellat");
                        put("mollitia", "occaecati");
                        put("numquam", "commodi");
                    }};
                    webhook = "quam";
                }};;
                secret = "molestiae";
            }};            

            AssetReportRefreshResponse res = sdk.plaid.assetReportRefresh(req);

            if (res.assetReportRefreshResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assetReportRemove

The `/item/remove` endpoint allows you to invalidate an `access_token`, meaning you will not be able to create new Asset Reports with it. Removing an Item does not affect any Asset Reports or Audit Copies you have already created, which will remain accessible until you remove them specifically.

The `/asset_report/remove` endpoint allows you to remove an Asset Report. Removing an Asset Report invalidates its `asset_report_token`, meaning you will no longer be able to use it to access Report data or create new Audit Copies. Removing an Asset Report does not affect the underlying Items, but does invalidate any `audit_copy_tokens` associated with the Asset Report.

</api/products/assets/#asset_reportremove>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssetReportRemoveResponse;
import org.openapis.openapi.models.shared.AssetReportRemoveRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit", "error", "quia") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AssetReportRemoveRequest req = new AssetReportRemoveRequest("quis") {{
                clientId = "vitae";
                secret = "laborum";
            }};            

            AssetReportRemoveResponse res = sdk.plaid.assetReportRemove(req);

            if (res.assetReportRemoveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authGet

The `/auth/get` endpoint returns the bank account and bank identification numbers (such as routing numbers, for US accounts) associated with an Item's checking and savings accounts, along with high-level account data and balances when available.

Note: This request may take some time to complete if `auth` was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the data.

Versioning note: In API version 2017-03-08, the schema of the `numbers` object returned by this endpoint is substantially different. For details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2018-05-22).

</api/products/auth/#authget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthGetResponse;
import org.openapis.openapi.models.shared.AuthGetRequest;
import org.openapis.openapi.models.shared.AuthGetRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi", "enim", "odit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AuthGetRequest req = new AuthGetRequest("quo") {{
                clientId = "sequi";
                options = new AuthGetRequestOptions() {{
                    accountIds = new String[]{{
                        add("ipsam"),
                        add("id"),
                        add("possimus"),
                        add("aut"),
                    }};
                }};;
                secret = "quasi";
            }};            

            AuthGetResponse res = sdk.plaid.authGet(req);

            if (res.authGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bankTransferBalanceGet

Use the `/bank_transfer/balance/get` endpoint to see the available balance in your bank transfer account. Debit transfers increase this balance once their status is posted. Credit transfers decrease this balance when they are created.

The transactable balance shows the amount in your account that you are able to use for transfers, and is essentially your available balance minus your minimum balance.

Note that this endpoint can only be used with FBO accounts, when using Bank Transfers in the Full Service configuration. It cannot be used on your own account when using Bank Transfers in the BTS Platform configuration.

</bank-transfers/reference#bank_transferbalanceget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankTransferBalanceGetResponse;
import org.openapis.openapi.models.shared.BankTransferBalanceGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "temporibus", "laborum") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BankTransferBalanceGetRequest req = new BankTransferBalanceGetRequest() {{
                clientId = "quasi";
                originationAccountId = "reiciendis";
                secret = "voluptatibus";
            }};            

            BankTransferBalanceGetResponse res = sdk.plaid.bankTransferBalanceGet(req);

            if (res.bankTransferBalanceGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bankTransferCancel

Use the `/bank_transfer/cancel` endpoint to cancel a bank transfer.  A transfer is eligible for cancelation if the `cancellable` property returned by `/bank_transfer/get` is `true`.

</bank-transfers/reference#bank_transfercancel>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankTransferCancelResponse;
import org.openapis.openapi.models.shared.BankTransferCancelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero", "nihil", "praesentium") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BankTransferCancelRequest req = new BankTransferCancelRequest("voluptatibus") {{
                clientId = "ipsa";
                secret = "omnis";
            }};            

            BankTransferCancelResponse res = sdk.plaid.bankTransferCancel(req);

            if (res.bankTransferCancelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bankTransferCreate

Use the `/bank_transfer/create` endpoint to initiate a new bank transfer.

</bank-transfers/reference#bank_transfercreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankTransferCreateResponse;
import org.openapis.openapi.models.shared.ACHClassEnum;
import org.openapis.openapi.models.shared.BankTransferCreateRequest;
import org.openapis.openapi.models.shared.BankTransferNetworkEnum;
import org.openapis.openapi.models.shared.BankTransferTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate", "cum", "perferendis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BankTransferCreateRequest req = new BankTransferCreateRequest("doloremque", "reprehenderit", "ut", "maiores", "dicta", "corporis", BankTransferNetworkEnum.ACH, BankTransferTypeEnum.DEBIT,                 new java.util.HashMap<String, Object>() {{
                                put("harum", "enim");
                            }}) {{
                achClass = ACHClassEnum.WEB;
                clientId = "commodi";
                customTag = "repudiandae";
                metadata = new java.util.HashMap<String, String>() {{
                    put("ipsum", "quidem");
                }};
                originationAccountId = "molestias";
                secret = "excepturi";
            }};            

            BankTransferCreateResponse res = sdk.plaid.bankTransferCreate(req);

            if (res.bankTransferCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bankTransferEventList

Use the `/bank_transfer/event/list` endpoint to get a list of Plaid-initiated ACH or bank transfer events based on specified filter criteria. When using Auth with micro-deposit verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits. For more details, see [micro-deposit events](https://plaid.com/docs/auth/coverage/microdeposit-events/).

</api/products/auth#bank_transfereventlist>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankTransferEventListResponse;
import org.openapis.openapi.models.shared.BankTransferEventListBankTransferTypeEnum;
import org.openapis.openapi.models.shared.BankTransferEventListDirectionEnum;
import org.openapis.openapi.models.shared.BankTransferEventListRequest;
import org.openapis.openapi.models.shared.BankTransferEventTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur", "modi", "praesentium") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BankTransferEventListRequest req = new BankTransferEventListRequest() {{
                accountId = "rem";
                bankTransferId = "voluptates";
                bankTransferType = BankTransferEventListBankTransferTypeEnum.DEBIT;
                clientId = "repudiandae";
                count = 575947L;
                direction = BankTransferEventListDirectionEnum.INBOUND;
                endDate = OffsetDateTime.parse("2022-03-02T21:33:21.372Z");
                eventTypes = new org.openapis.openapi.models.shared.BankTransferEventTypeEnum[]{{
                    add(BankTransferEventTypeEnum.PENDING),
                    add(BankTransferEventTypeEnum.POSTED),
                }};
                offset = 842342L;
                originationAccountId = "explicabo";
                secret = "deserunt";
                startDate = OffsetDateTime.parse("2021-04-26T18:54:54.344Z");
            }};            

            BankTransferEventListResponse res = sdk.plaid.bankTransferEventList(req);

            if (res.bankTransferEventListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bankTransferEventSync

`/bank_transfer/event/sync` allows you to request up to the next 25 Plaid-initiated bank transfer events that happened after a specific `event_id`. When using Auth with micro-deposit verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits. For more details, see [micro-deposit events](https://www.plaid.com/docs/auth/coverage/microdeposit-events/).

</api/products/auth/#bank_transfereventsync>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankTransferEventSyncResponse;
import org.openapis.openapi.models.shared.BankTransferEventSyncRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore", "modi", "qui") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BankTransferEventSyncRequest req = new BankTransferEventSyncRequest(397821L) {{
                clientId = "cupiditate";
                count = 552822L;
                secret = "perferendis";
            }};            

            BankTransferEventSyncResponse res = sdk.plaid.bankTransferEventSync(req);

            if (res.bankTransferEventSyncResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bankTransferGet

The `/bank_transfer/get` fetches information about the bank transfer corresponding to the given `bank_transfer_id`.

</bank-transfers/reference#bank_transferget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankTransferGetResponse;
import org.openapis.openapi.models.shared.BankTransferGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni", "assumenda", "ipsam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BankTransferGetRequest req = new BankTransferGetRequest("alias") {{
                clientId = "fugit";
                secret = "dolorum";
            }};            

            BankTransferGetResponse res = sdk.plaid.bankTransferGet(req);

            if (res.bankTransferGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bankTransferList

Use the `/bank_transfer/list` endpoint to see a list of all your bank transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired bank transfers.


</bank-transfers/reference#bank_transferlist>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankTransferListResponse;
import org.openapis.openapi.models.shared.BankTransferDirectionEnum;
import org.openapis.openapi.models.shared.BankTransferListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "tempora", "facilis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BankTransferListRequest req = new BankTransferListRequest() {{
                clientId = "tempore";
                count = 288476L;
                direction = BankTransferDirectionEnum.LESS_THAN_NIL_GREATER_THAN;
                endDate = OffsetDateTime.parse("2022-10-02T04:55:20.234Z");
                offset = 756107L;
                originationAccountId = "sint";
                secret = "aliquid";
                startDate = OffsetDateTime.parse("2021-03-17T21:24:26.606Z");
            }};            

            BankTransferListResponse res = sdk.plaid.bankTransferList(req);

            if (res.bankTransferListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bankTransferMigrateAccount

As an alternative to adding Items via Link, you can also use the `/bank_transfer/migrate_account` endpoint to migrate known account and routing numbers to Plaid Items.  Note that Items created in this way are not compatible with endpoints for other products, such as `/accounts/balance/get`, and can only be used with Bank Transfer endpoints.  If you require access to other endpoints, create the Item through Link instead.  Access to `/bank_transfer/migrate_account` is not enabled by default; to obtain access, contact your Plaid Account Manager.

</bank-transfers/reference#bank_transfermigrate_account>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankTransferMigrateAccountResponse;
import org.openapis.openapi.models.shared.BankTransferMigrateAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint", "officia", "dolor") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BankTransferMigrateAccountRequest req = new BankTransferMigrateAccountRequest("debitis", "a", "dolorum") {{
                clientId = "in";
                secret = "in";
                wireRoutingNumber = "illum";
            }};            

            BankTransferMigrateAccountResponse res = sdk.plaid.bankTransferMigrateAccount(req);

            if (res.bankTransferMigrateAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bankTransferSweepGet

The `/bank_transfer/sweep/get` endpoint fetches information about the sweep corresponding to the given `sweep_id`.

</api/products/transfer/#bank_transfersweepget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankTransferSweepGetResponse;
import org.openapis.openapi.models.shared.BankTransferSweepGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores", "rerum", "dicta") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BankTransferSweepGetRequest req = new BankTransferSweepGetRequest("magnam") {{
                clientId = "cumque";
                secret = "facere";
            }};            

            BankTransferSweepGetResponse res = sdk.plaid.bankTransferSweepGet(req);

            if (res.bankTransferSweepGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bankTransferSweepList

The `/bank_transfer/sweep/list` endpoint fetches information about the sweeps matching the given filters.

</api/products/transfer/#bank_transfersweeplist>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankTransferSweepListResponse;
import org.openapis.openapi.models.shared.BankTransferSweepListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea", "aliquid", "laborum") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BankTransferSweepListRequest req = new BankTransferSweepListRequest() {{
                clientId = "accusamus";
                count = 249796L;
                endTime = OffsetDateTime.parse("2022-05-17T08:24:52.669Z");
                originationAccountId = "accusamus";
                secret = "delectus";
                startTime = OffsetDateTime.parse("2021-10-28T10:05:29.849Z");
            }};            

            BankTransferSweepListResponse res = sdk.plaid.bankTransferSweepList(req);

            if (res.bankTransferSweepListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## categoriesGet

Send a request to the `/categories/get` endpoint to get detailed information on categories returned by Plaid. This endpoint does not require authentication.

</api/products/transactions/#categoriesget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CategoriesGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam", "id", "blanditiis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("sapiente", "amet");
                put("deserunt", "nisi");
                put("vel", "natus");
            }}            

            CategoriesGetResponse res = sdk.plaid.categoriesGet(req);

            if (res.categoriesGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createPaymentToken~~

The `/payment_initiation/payment/token/create` endpoint has been deprecated. New Plaid customers will be unable to use this endpoint, and existing customers are encouraged to migrate to the newer, `link_token`-based flow. The recommended flow is to provide the `payment_id` to `/link/token/create`, which returns a `link_token` used to initialize Link.

The `/payment_initiation/payment/token/create` is used to create a `payment_token`, which can then be used in Link initialization to enter a payment initiation flow. You can only use a `payment_token` once. If this attempt fails, the end user aborts the flow, or the token expires, you will need to create a new payment token. Creating a new payment token does not require end user input.

</link/maintain-legacy-integration/#creating-a-payment-token>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePaymentTokenResponse;
import org.openapis.openapi.models.shared.PaymentInitiationPaymentTokenCreateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis", "molestiae", "perferendis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentInitiationPaymentTokenCreateRequest req = new PaymentInitiationPaymentTokenCreateRequest("nihil") {{
                clientId = "magnam";
                secret = "distinctio";
            }};            

            CreatePaymentTokenResponse res = sdk.plaid.createPaymentToken(req);

            if (res.paymentInitiationPaymentTokenCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditAssetReportFreddieMacGet

The `credit/asset_report/freddie_mac/get` endpoint retrieves the Asset Report in Freddie Mac's JSON format.

</none/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditAssetReportFreddieMacGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id", "labore", "labore") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("natus", "nobis");
                put("eum", "vero");
            }}            

            CreditAssetReportFreddieMacGetResponse res = sdk.plaid.creditAssetReportFreddieMacGet(req);

            if (res.assetReportFreddieGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditAuditCopyTokenCreate

Plaid can create an Audit Copy token of an Asset Report and/or Income Report to share with participating Government Sponsored Entity (GSE). If you participate in the Day 1 Certainty™ program, Plaid can supply an Audit Copy token directly to Fannie Mae on your behalf. An Audit Copy token contains the same underlying data as the Asset Report and/or Income Report (result of /credit/payroll_income/get).

Use the `/credit/audit_copy_token/create` endpoint to create an `audit_copy_token` and then pass that token to the GSE who needs access.

</api/products/income/#creditaudit_copy_tokencreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditAuditCopyTokenCreateResponse;
import org.openapis.openapi.models.shared.CreditAuditCopyTokenCreateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur", "architecto", "magnam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditAuditCopyTokenCreateRequest req = new CreditAuditCopyTokenCreateRequest(                new String[]{{
                                add("excepturi"),
                            }}) {{
                clientId = "ullam";
                secret = "provident";
            }};            

            CreditAuditCopyTokenCreateResponse res = sdk.plaid.creditAuditCopyTokenCreate(req);

            if (res.creditAuditCopyTokenCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditAuditCopyTokenUpdate

The `/credit/audit_copy_token/update` endpoint updates an existing  Audit Copy Token by adding the report tokens in the `report_tokens` field to the `audit_copy_token`. If the Audit Copy Token already contains a report of a certain type, it will be replaced with the token provided in the `report_tokens` field.

</none/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditAuditCopyTokenUpdateResponse;
import org.openapis.openapi.models.shared.CreditAuditCopyTokenUpdateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos", "sint", "accusantium") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditAuditCopyTokenUpdateRequest req = new CreditAuditCopyTokenUpdateRequest("mollitia",                 new String[]{{
                                add("mollitia"),
                                add("ad"),
                                add("eum"),
                                add("dolor"),
                            }}) {{
                clientId = "necessitatibus";
                secret = "odit";
            }};            

            CreditAuditCopyTokenUpdateResponse res = sdk.plaid.creditAuditCopyTokenUpdate(req);

            if (res.creditAuditCopyTokenUpdateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditBankEmploymentGet

`/credit/bank_employment/get` returns the employment report(s) derived from bank transaction data for a specified user.

</api/products/income/#creditbank_employmentget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditBankEmploymentGetResponse;
import org.openapis.openapi.models.shared.CreditBankEmploymentGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo", "quasi", "iure") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditBankEmploymentGetRequest req = new CreditBankEmploymentGetRequest("doloribus") {{
                clientId = "debitis";
                secret = "eius";
            }};            

            CreditBankEmploymentGetResponse res = sdk.plaid.creditBankEmploymentGet(req);

            if (res.creditBankEmploymentGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditBankIncomeGet

`/credit/bank_income/get` returns the bank income report(s) for a specified user.

</api/products/income/#creditbank_incomeget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditBankIncomeGetResponse;
import org.openapis.openapi.models.shared.CreditBankIncomeGetRequest;
import org.openapis.openapi.models.shared.CreditBankIncomeGetRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime", "deleniti", "facilis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditBankIncomeGetRequest req = new CreditBankIncomeGetRequest() {{
                clientId = "in";
                options = new CreditBankIncomeGetRequestOptions() {{
                    count = 100226L;
                }};;
                secret = "architecto";
                userToken = "repudiandae";
            }};            

            CreditBankIncomeGetResponse res = sdk.plaid.creditBankIncomeGet(req);

            if (res.creditBankIncomeGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditBankIncomePdfGet

`/credit/bank_income/pdf/get` returns the most recent bank income report for a specified user in PDF format.

</api/products/income/#creditbank_incomepdfget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditBankIncomePdfGetResponse;
import org.openapis.openapi.models.shared.CreditBankIncomePDFGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam", "expedita", "nihil") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditBankIncomePDFGetRequest req = new CreditBankIncomePDFGetRequest("repellat") {{
                clientId = "quibusdam";
                secret = "sed";
            }};            

            CreditBankIncomePdfGetResponse res = sdk.plaid.creditBankIncomePdfGet(req);

            if (res.creditBankIncomePDFGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditBankIncomeRefresh

`/credit/bank_income/refresh` refreshes the bank income report data for a specific user.

</api/products/income/#creditbank_incomerefresh>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditBankIncomeRefreshResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe", "pariatur", "accusantium") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("praesentium", "natus");
            }}            

            CreditBankIncomeRefreshResponse res = sdk.plaid.creditBankIncomeRefresh(req);

            if (res.creditBankIncomeRefreshResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditEmploymentGet

`/credit/employment/get` returns a list of items with employment information from a user's payroll provider that was verified by an end user.

</api/products/income/#creditemploymentget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditEmploymentGetResponse;
import org.openapis.openapi.models.shared.CreditEmploymentGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni", "sunt", "quo") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditEmploymentGetRequest req = new CreditEmploymentGetRequest("illum") {{
                clientId = "pariatur";
                secret = "maxime";
            }};            

            CreditEmploymentGetResponse res = sdk.plaid.creditEmploymentGet(req);

            if (res.creditEmploymentGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditFreddieMacReportsGet

The `credit/asset_report/freddie_mac/get` endpoint retrieves the Verification of Assets and Verification of Employment reports.

</none/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditFreddieMacReportsGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea", "excepturi", "odit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("accusantium", "ab");
                put("maiores", "quidem");
            }}            

            CreditFreddieMacReportsGetResponse res = sdk.plaid.creditFreddieMacReportsGet(req);

            if (res.creditFreddieMacReportsGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditPayrollIncomeGet

This endpoint gets payroll income information for a specific user, either as a result of the user connecting to their payroll provider or uploading a pay related document.

</api/products/income/#creditpayroll_incomeget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditPayrollIncomeGetResponse;
import org.openapis.openapi.models.shared.CreditPayrollIncomeGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam", "voluptate", "autem") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditPayrollIncomeGetRequest req = new CreditPayrollIncomeGetRequest() {{
                clientId = "nam";
                secret = "eaque";
                userToken = "pariatur";
            }};            

            CreditPayrollIncomeGetResponse res = sdk.plaid.creditPayrollIncomeGet(req);

            if (res.creditPayrollIncomeGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditPayrollIncomePrecheck

`/credit/payroll_income/precheck` is an optional endpoint that can be called before initializing a Link session for income verification. It evaluates whether a given user is supportable by digital income verification. If the user is eligible for digital verification, that information will be associated with the user token, and in this way will generate a Link UI optimized for the end user and their specific employer. If the user cannot be confirmed as eligible, the user can still use the income verification flow, but they may be required to manually upload a paystub to verify their income.

While all request fields are optional, providing `employer` data will increase the chance of receiving a useful result.

When testing in Sandbox, you can control the results by providing special test values in the `employer` and `access_tokens` fields. `employer_good` and `employer_bad` will result in `HIGH` and `LOW` confidence values, respectively. `employer_multi` will result in a `HIGH` confidence with multiple payroll options. Likewise, `access_good` and `access_bad` will result in `HIGH` and `LOW` confidence values, respectively. Any other value for `employer` and `access_tokens` in Sandbox will result in `UNKNOWN` confidence.

</api/products/income/#creditpayroll_incomeprecheck>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditPayrollIncomePrecheckResponse;
import org.openapis.openapi.models.shared.CreditPayrollIncomePrecheckRequest;
import org.openapis.openapi.models.shared.IncomeVerificationPrecheckEmployer;
import org.openapis.openapi.models.shared.IncomeVerificationPrecheckMilitaryInfo;
import org.openapis.openapi.models.shared.IncomeVerificationPrecheckPayrollInstitution;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo", "voluptatibus", "perferendis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditPayrollIncomePrecheckRequest req = new CreditPayrollIncomePrecheckRequest() {{
                accessTokens = new String[]{{
                    add("amet"),
                    add("aut"),
                    add("cumque"),
                    add("corporis"),
                }};
                clientId = "hic";
                employer = new IncomeVerificationPrecheckEmployer() {{
                    address = new java.util.HashMap<String, Object>() {{
                        put("nobis", "dolores");
                        put("quis", "totam");
                        put("dignissimos", "eaque");
                    }};
                    name = "Mr. Robin Daugherty";
                    taxId = "quam";
                    url = "dolor";
                }};;
                payrollInstitution = new IncomeVerificationPrecheckPayrollInstitution() {{
                    name = "Dean Welch";
                }};;
                secret = "facilis";
                usMilitaryInfo = new IncomeVerificationPrecheckMilitaryInfo() {{
                    branch = "perspiciatis";
                    isActiveDuty = false;
                }};;
                userToken = "voluptatem";
            }};            

            CreditPayrollIncomePrecheckResponse res = sdk.plaid.creditPayrollIncomePrecheck(req);

            if (res.creditPayrollIncomePrecheckResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditPayrollIncomeRefresh

`/credit/payroll_income/refresh` refreshes a given digital payroll income verification.

</api/products/income/#creditpayroll_incomerefresh>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditPayrollIncomeRefreshResponse;
import org.openapis.openapi.models.shared.CreditPayrollIncomeRefreshRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro", "consequuntur", "blanditiis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditPayrollIncomeRefreshRequest req = new CreditPayrollIncomeRefreshRequest("error") {{
                clientId = "eaque";
                options = new java.util.HashMap<String, Object>() {{
                    put("rerum", "adipisci");
                    put("asperiores", "earum");
                    put("modi", "iste");
                }};
                secret = "dolorum";
            }};            

            CreditPayrollIncomeRefreshResponse res = sdk.plaid.creditPayrollIncomeRefresh(req);

            if (res.creditPayrollIncomeRefreshResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditRelayCreate

Plaid can share an Asset Report directly with a participating third party on your behalf. The shared Asset Report is the exact same Asset Report originally created in `/asset_report/create`.

To grant a third party access to an Asset Report, use the `/credit/relay/create` endpoint to create a `relay_token` and then pass that token to your third party. Each third party has its own `secondary_client_id`; for example, `ce5bd328dcd34123456`. You'll need to create a separate `relay_token` for each third party that needs access to the report on your behalf.

</api/products/assets/#creditrelaycreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditRelayCreateResponse;
import org.openapis.openapi.models.shared.CreditRelayCreateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti", "pariatur", "provident") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditRelayCreateRequest req = new CreditRelayCreateRequest(                new String[]{{
                                add("libero"),
                                add("delectus"),
                                add("quaerat"),
                                add("quos"),
                            }}, "aliquid") {{
                clientId = "dolorem";
                secret = "dolorem";
                webhook = "dolor";
            }};            

            CreditRelayCreateResponse res = sdk.plaid.creditRelayCreate(req);

            if (res.creditRelayCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditRelayGet

`/credit/relay/get` allows third parties to receive a report that was shared with them, using a `relay_token` that was created by the report owner.

</api/products/assets/#creditrelayget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditRelayGetResponse;
import org.openapis.openapi.models.shared.CreditRelayGetRequest;
import org.openapis.openapi.models.shared.ReportTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui", "ipsum", "hic") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditRelayGetRequest req = new CreditRelayGetRequest("excepturi", ReportTypeEnum.INCOME) {{
                clientId = "voluptate";
                secret = "dignissimos";
            }};            

            CreditRelayGetResponse res = sdk.plaid.creditRelayGet(req);

            if (res.assetReportGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditRelayRefresh

The `/credit/relay/refresh` endpoint allows third parties to refresh a report that was relayed to them, using a `relay_token` that was created by the report owner. A new report will be created with the original report parameters, but with the most recent data available based on the `days_requested` value of the original report.

</api/products/assets/#creditrelayrefresh>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditRelayRefreshResponse;
import org.openapis.openapi.models.shared.CreditRelayRefreshRequest;
import org.openapis.openapi.models.shared.ReportTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis", "amet", "dolorum") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditRelayRefreshRequest req = new CreditRelayRefreshRequest("numquam", ReportTypeEnum.ASSETS) {{
                clientId = "ipsa";
                secret = "ipsa";
                webhook = "iure";
            }};            

            CreditRelayRefreshResponse res = sdk.plaid.creditRelayRefresh(req);

            if (res.creditRelayRefreshResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditRelayRemove

The `/credit/relay/remove` endpoint allows you to invalidate a `relay_token`. The third party holding the token will no longer be able to access or refresh the reports which the `relay_token` gives access to. The original report, associated Items, and other relay tokens that provide access to the same report are not affected and will remain accessible after removing the given `relay_token`.

</api/products/assets/#creditrelayremove>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditRelayRemoveResponse;
import org.openapis.openapi.models.shared.CreditRelayRemoveRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio", "quaerat", "accusamus") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditRelayRemoveRequest req = new CreditRelayRemoveRequest("quidem") {{
                clientId = "voluptatibus";
                secret = "voluptas";
            }};            

            CreditRelayRemoveResponse res = sdk.plaid.creditRelayRemove(req);

            if (res.creditRelayRemoveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditReportAuditCopyRemove

The `/credit/audit_copy_token/remove` endpoint allows you to remove an Audit Copy. Removing an Audit Copy invalidates the `audit_copy_token` associated with it, meaning both you and any third parties holding the token will no longer be able to use it to access Report data. Items associated with the Report data and other Audit Copies of it are not affected and will remain accessible after removing the given Audit Copy.

</api/products/income/#creditaudit_copy_tokenremove>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditReportAuditCopyRemoveResponse;
import org.openapis.openapi.models.shared.CreditAuditCopyTokenRemoveRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus", "eos", "atque") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditAuditCopyTokenRemoveRequest req = new CreditAuditCopyTokenRemoveRequest("sit") {{
                clientId = "fugiat";
                secret = "ab";
            }};            

            CreditReportAuditCopyRemoveResponse res = sdk.plaid.creditReportAuditCopyRemove(req);

            if (res.creditAuditCopyTokenRemoveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditSessionsGet

This endpoint can be used for your end users after they complete the Link flow. This endpoint returns a list of Link sessions that your user completed, where each session includes the results from the Link flow.

These results include details about the Item that was created and some product related metadata (showing, for example, whether the user finished the bank income verification step).

</api/products/income/#creditsessionsget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditSessionsGetResponse;
import org.openapis.openapi.models.shared.CreditSessionsGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta", "dolorum", "iusto") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditSessionsGetRequest req = new CreditSessionsGetRequest("voluptate") {{
                clientId = "dolorum";
                secret = "deleniti";
            }};            

            CreditSessionsGetResponse res = sdk.plaid.creditSessionsGet(req);

            if (res.creditSessionsGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dashboardUserGet

Retrieve information about a dashboard user.

</api/products/monitor/#dashboard_userget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DashboardUserGetResponse;
import org.openapis.openapi.models.shared.DashboardUserGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis", "necessitatibus", "distinctio") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DashboardUserGetRequest req = new DashboardUserGetRequest("54350110fedcbaf01234ffee") {{
                clientId = "asperiores";
                secret = "nihil";
            }};            

            DashboardUserGetResponse res = sdk.plaid.dashboardUserGet(req);

            if (res.dashboardUserGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dashboardUserList

List all dashboard users associated with your account.

</api/products/monitor/#dashboard_userlist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DashboardUserListResponse;
import org.openapis.openapi.models.shared.DashboardUserListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum", "voluptate", "id") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DashboardUserListRequest req = new DashboardUserListRequest() {{
                clientId = "saepe";
                cursor = "eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM";
                secret = "eius";
            }};            

            DashboardUserListResponse res = sdk.plaid.dashboardUserList(req);

            if (res.dashboardUserListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## depositSwitchAltCreate

This endpoint provides an alternative to `/deposit_switch/create` for customers who have not yet fully integrated with Plaid Exchange. Like `/deposit_switch/create`, it creates a deposit switch entity that will be persisted throughout the lifecycle of the switch.

</deposit-switch/reference#deposit_switchaltcreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DepositSwitchAltCreateResponse;
import org.openapis.openapi.models.shared.DepositSwitchAltCreateRequest;
import org.openapis.openapi.models.shared.DepositSwitchAltCreateRequestCountryCodeEnum;
import org.openapis.openapi.models.shared.DepositSwitchCreateRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur", "perferendis", "amet") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DepositSwitchAltCreateRequest req = new DepositSwitchAltCreateRequest(                new java.util.HashMap<String, Object>() {{
                                put("accusamus", "ad");
                                put("saepe", "suscipit");
                                put("deserunt", "provident");
                                put("minima", "repellendus");
                            }},                 new java.util.HashMap<String, Object>() {{
                                put("similique", "alias");
                                put("at", "quaerat");
                                put("tempora", "vel");
                            }}) {{
                clientId = "quod";
                countryCode = DepositSwitchAltCreateRequestCountryCodeEnum.CA;
                options = new DepositSwitchCreateRequestOptions() {{
                    transactionItemAccessTokens = new String[]{{
                        add("dolorum"),
                    }};
                    webhook = "a";
                }};;
                secret = "esse";
            }};            

            DepositSwitchAltCreateResponse res = sdk.plaid.depositSwitchAltCreate(req);

            if (res.depositSwitchAltCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## depositSwitchCreate

This endpoint creates a deposit switch entity that will be persisted throughout the lifecycle of the switch.

</deposit-switch/reference#deposit_switchcreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DepositSwitchCreateResponse;
import org.openapis.openapi.models.shared.DepositSwitchCreateRequest;
import org.openapis.openapi.models.shared.DepositSwitchCreateRequestCountryCodeEnum;
import org.openapis.openapi.models.shared.DepositSwitchCreateRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum", "iusto", "ipsum") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DepositSwitchCreateRequest req = new DepositSwitchCreateRequest("quisquam", "tenetur") {{
                clientId = "amet";
                countryCode = DepositSwitchCreateRequestCountryCodeEnum.CA;
                options = new DepositSwitchCreateRequestOptions() {{
                    transactionItemAccessTokens = new String[]{{
                        add("numquam"),
                        add("enim"),
                        add("dolorem"),
                        add("sapiente"),
                    }};
                    webhook = "totam";
                }};;
                secret = "nihil";
            }};            

            DepositSwitchCreateResponse res = sdk.plaid.depositSwitchCreate(req);

            if (res.depositSwitchCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## depositSwitchGet

This endpoint returns information related to how the user has configured their payroll allocation and the state of the switch. You can use this information to build logic related to the user's direct deposit allocation preferences.

</deposit-switch/reference#deposit_switchget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DepositSwitchGetResponse;
import org.openapis.openapi.models.shared.DepositSwitchGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit", "expedita", "neque") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DepositSwitchGetRequest req = new DepositSwitchGetRequest("sed") {{
                clientId = "vel";
                secret = "libero";
            }};            

            DepositSwitchGetResponse res = sdk.plaid.depositSwitchGet(req);

            if (res.depositSwitchGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## depositSwitchTokenCreate

In order for the end user to take action, you will need to create a public token representing the deposit switch. This token is used to initialize Link. It can be used one time and expires after 30 minutes.


</deposit-switch/reference#deposit_switchtokencreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DepositSwitchTokenCreateResponse;
import org.openapis.openapi.models.shared.DepositSwitchTokenCreateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas", "deserunt", "quam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DepositSwitchTokenCreateRequest req = new DepositSwitchTokenCreateRequest("ipsum") {{
                clientId = "incidunt";
                secret = "qui";
            }};            

            DepositSwitchTokenCreateResponse res = sdk.plaid.depositSwitchTokenCreate(req);

            if (res.depositSwitchTokenCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## employersSearch

`/employers/search` allows you the ability to search Plaid’s database of known employers, for use with Deposit Switch. You can use this endpoint to look up a user's employer in order to confirm that they are supported. Users with non-supported employers can then be routed out of the Deposit Switch flow.

The data in the employer database is currently limited. As the Deposit Switch and Income products progress through their respective beta periods, more employers are being regularly added. Because the employer database is frequently updated, we recommend that you do not cache or store data from this endpoint for more than a day.

</api/employers/#employerssearch>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmployersSearchResponse;
import org.openapis.openapi.models.shared.EmployersSearchRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate", "maxime", "pariatur") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.EmployersSearchRequest req = new EmployersSearchRequest(                new String[]{{
                                add("dicta"),
                                add("laborum"),
                                add("totam"),
                            }}, "incidunt") {{
                clientId = "aspernatur";
                secret = "dolores";
            }};            

            EmployersSearchResponse res = sdk.plaid.employersSearch(req);

            if (res.employersSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~employmentVerificationGet~~

`/employment/verification/get` returns a list of employments through a user payroll that was verified by an end user.

This endpoint has been deprecated; new integrations should use `/credit/employment/get` instead.

</api/products/income/#employmentverificationget>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmploymentVerificationGetResponse;
import org.openapis.openapi.models.shared.EmploymentVerificationGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "facilis", "aliquid") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.EmploymentVerificationGetRequest req = new EmploymentVerificationGetRequest("quam") {{
                clientId = "molestias";
                secret = "temporibus";
            }};            

            EmploymentVerificationGetResponse res = sdk.plaid.employmentVerificationGet(req);

            if (res.employmentVerificationGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fdxNotifications

A generic webhook receiver endpoint for FDX Event Notifications

</api/fdx/notifications/#post>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FdxNotificationsResponse;
import org.openapis.openapi.models.shared.FDXContentTypesEnum;
import org.openapis.openapi.models.shared.FDXFiAttribute;
import org.openapis.openapi.models.shared.FDXHateoasLink;
import org.openapis.openapi.models.shared.FDXHateoasLinkActionEnum;
import org.openapis.openapi.models.shared.FDXNotification;
import org.openapis.openapi.models.shared.FDXNotificationCategoryEnum;
import org.openapis.openapi.models.shared.FDXNotificationPayload;
import org.openapis.openapi.models.shared.FDXNotificationPayloadIdTypeEnum;
import org.openapis.openapi.models.shared.FDXNotificationPriorityEnum;
import org.openapis.openapi.models.shared.FDXNotificationSeverityEnum;
import org.openapis.openapi.models.shared.FDXNotificationTypeEnum;
import org.openapis.openapi.models.shared.FDXParty;
import org.openapis.openapi.models.shared.FDXPartyRegistryEnum;
import org.openapis.openapi.models.shared.FDXPartyTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui", "neque", "fugit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.FDXNotification req = new FDXNotification(FDXNotificationCategoryEnum.SECURITY, "odio",                 new FDXNotificationPayload() {{
                                customFields = new FDXFiAttribute() {{
                                    name = "Marion Reichert DDS";
                                    value = "soluta";
                                }};;
                                id = "b1e31b8b-90f3-4443-a110-8e0adcf4b921";
                                idType = FDXNotificationPayloadIdTypeEnum.PARTY;
                            }};,                 new FDXParty("odio", FDXPartyTypeEnum.INDIVIDUAL) {{
                                homeUri = "https://spicy-swallow.name";
                                logoUri = "http://eager-vivo.info";
                                registeredEntityId = "consectetur";
                                registeredEntityName = "vero";
                                registry = FDXPartyRegistryEnum.PRIVATE_;
                            }};, OffsetDateTime.parse("2021-07-15T14:46:41.375Z"), FDXNotificationTypeEnum.CUSTOM) {{
                priority = FDXNotificationPriorityEnum.LOW;
                severity = FDXNotificationSeverityEnum.NOTICE;
                subscriber = new FDXParty("quod", FDXPartyTypeEnum.DATA_RECIPIENT) {{
                    homeUri = "https://rubbery-surname.info";
                    logoUri = "http://terrible-status.biz";
                    registeredEntityId = "natus";
                    registeredEntityName = "impedit";
                    registry = FDXPartyRegistryEnum.FDX;
                }};;
                url = new FDXHateoasLink("https://api.fi.com/fdx/v4/accounts/12345") {{
                    action = FDXHateoasLinkActionEnum.PUT;
                    rel = "exercitationem";
                    types = new org.openapis.openapi.models.shared.FDXContentTypesEnum[]{{
                        add(FDXContentTypesEnum.APPLICATION_PDF),
                        add(FDXContentTypesEnum.IMAGE_PNG),
                        add(FDXContentTypesEnum.APPLICATION_JSON),
                        add(FDXContentTypesEnum.APPLICATION_JSON),
                    }};
                }};;
            }};            

            FdxNotificationsResponse res = sdk.plaid.fdxNotifications(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identityGet

The `/identity/get` endpoint allows you to retrieve various account holder information on file with the financial institution, including names, emails, phone numbers, and addresses. Only name data is guaranteed to be returned; other fields will be empty arrays if not provided by the institution.

This request may take some time to complete if identity was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the data.

Note: In API versions 2018-05-22 and earlier, the `owners` object is not returned, and instead identity information is returned in the top level `identity` object. For more details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2019-05-29).

</api/products/identity/#identityget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentityGetResponse;
import org.openapis.openapi.models.shared.IdentityGetRequest;
import org.openapis.openapi.models.shared.IdentityGetRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto", "eligendi", "ducimus") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.IdentityGetRequest req = new IdentityGetRequest("alias") {{
                clientId = "officia";
                options = new IdentityGetRequestOptions() {{
                    accountIds = new String[]{{
                        add("ipsam"),
                        add("ea"),
                    }};
                }};;
                secret = "aspernatur";
            }};            

            IdentityGetResponse res = sdk.plaid.identityGet(req);

            if (res.identityGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identityMatch

The `/identity/match` endpoint generates a match score, which indicates how well the provided identity data matches the identity information on file with the account holder's financial institution.

This request may take some time to complete if Identity was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the data.

</api/products/identity/#identitymatch>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentityMatchResponse;
import org.openapis.openapi.models.shared.IdentityMatchRequest;
import org.openapis.openapi.models.shared.IdentityMatchRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "possimus", "magnam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.IdentityMatchRequest req = new IdentityMatchRequest("ratione") {{
                clientId = "ex";
                identityVerificationId = "idv_52xR9LKo77r1Np";
                options = new IdentityMatchRequestOptions() {{
                    accountIds = new String[]{{
                        add("dicta"),
                        add("dolor"),
                        add("maiores"),
                    }};
                }};;
                secret = "quasi";
                user = new java.util.HashMap<String, Object>() {{
                    put("nulla", "excepturi");
                    put("voluptatibus", "nostrum");
                }};
            }};            

            IdentityMatchResponse res = sdk.plaid.identityMatch(req);

            if (res.identityMatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identityVerificationCreate

Create a new Identity Verification for the user specified by the `client_user_id` field. The requirements and behavior of the verification are determined by the `template_id` provided.
If you don't know whether the associated user already has an active Identity Verification, you can specify `"is_idempotent": true` in the request body. With idempotency enabled, a new Identity Verification will only be created if one does not already exist for the associated `client_user_id` and `template_id`. If an Identity Verification is found, it will be returned unmodified with an `200 OK` HTTP status code.


</api/products/identity-verification/#identity_verificationcreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentityVerificationCreateResponse;
import org.openapis.openapi.models.shared.IdentityVerificationCreateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente", "quisquam", "saepe") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.IdentityVerificationCreateRequest req = new IdentityVerificationCreateRequest(true, true, "idvtmp_4FrXJvfQU3zGUR",                 new java.util.HashMap<String, Object>() {{
                                put("impedit", "corporis");
                                put("veniam", "aliquid");
                            }}) {{
                clientId = "inventore";
                isIdempotent = true;
                secret = "magnam";
            }};            

            IdentityVerificationCreateResponse res = sdk.plaid.identityVerificationCreate(req);

            if (res.identityVerificationCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identityVerificationGet

Retrieve a previously created identity verification.

</api/products/identity-verification/#identity_verificationget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentityVerificationGetResponse;
import org.openapis.openapi.models.shared.IdentityVerificationGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea", "quo", "consectetur") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.IdentityVerificationGetRequest req = new IdentityVerificationGetRequest("idv_52xR9LKo77r1Np") {{
                clientId = "recusandae";
                secret = "aspernatur";
            }};            

            IdentityVerificationGetResponse res = sdk.plaid.identityVerificationGet(req);

            if (res.identityVerificationGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identityVerificationList

Filter and list Identity Verifications created by your account

</api/products/identity-verification/#identity_verificationlist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentityVerificationListResponse;
import org.openapis.openapi.models.shared.IdentityVerificationListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima", "eaque", "a") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.IdentityVerificationListRequest req = new IdentityVerificationListRequest("your-db-id-3b24110", "idvtmp_4FrXJvfQU3zGUR") {{
                clientId = "libero";
                cursor = "eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM";
                secret = "aut";
            }};            

            IdentityVerificationListResponse res = sdk.plaid.identityVerificationList(req);

            if (res.identityVerificationListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identityVerificationRetry

Allow a customer to retry their identity verification

</api/products/identity-verification/#identity_verificationretry>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentityVerificationRetryResponse;
import org.openapis.openapi.models.shared.IdentityVerificationRetryRequest;
import org.openapis.openapi.models.shared.IdentityVerificationRetryRequestStepsObject;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StrategyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "deleniti", "impedit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.IdentityVerificationRetryRequest req = new IdentityVerificationRetryRequest("your-db-id-3b24110", StrategyEnum.INCOMPLETE, "idvtmp_4FrXJvfQU3zGUR") {{
                clientId = "fugit";
                secret = "accusamus";
                steps = new IdentityVerificationRetryRequestStepsObject(false, false, false, false);;
            }};            

            IdentityVerificationRetryResponse res = sdk.plaid.identityVerificationRetry(req);

            if (res.identityVerificationRetryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~incomeVerificationCreate~~

`/income/verification/create` begins the income verification process by returning an `income_verification_id`. You can then provide the `income_verification_id` to `/link/token/create` under the `income_verification` parameter in order to create a Link instance that will prompt the user to go through the income verification flow. Plaid will fire an `INCOME` webhook once the user completes the Payroll Income flow, or when the uploaded documents in the Document Income flow have finished processing. 

</api/products/income/#incomeverificationcreate>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IncomeVerificationCreateResponse;
import org.openapis.openapi.models.shared.IncomeVerificationCreateRequest;
import org.openapis.openapi.models.shared.IncomeVerificationCreateRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore", "non", "et") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.IncomeVerificationCreateRequest req = new IncomeVerificationCreateRequest("dolorum") {{
                clientId = "laborum";
                options = new IncomeVerificationCreateRequestOptions() {{
                    accessTokens = new String[]{{
                        add("velit"),
                        add("eum"),
                        add("autem"),
                        add("nobis"),
                    }};
                }};;
                precheckId = "quas";
                secret = "assumenda";
            }};            

            IncomeVerificationCreateResponse res = sdk.plaid.incomeVerificationCreate(req);

            if (res.incomeVerificationCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IncomeVerificationDocumentsDownloadResponse;
import org.openapis.openapi.models.shared.IncomeVerificationDocumentsDownloadRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla", "voluptas", "libero") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.IncomeVerificationDocumentsDownloadRequest req = new IncomeVerificationDocumentsDownloadRequest() {{
                accessToken = "quasi";
                clientId = "tempora";
                documentId = "numquam";
                incomeVerificationId = "explicabo";
                secret = "provident";
            }};            

            IncomeVerificationDocumentsDownloadResponse res = sdk.plaid.incomeVerificationDocumentsDownload(req);

            if (res.incomeVerificationDocumentsDownload200ApplicationZipBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~incomeVerificationPaystubsGet~~

`/income/verification/paystubs/get` returns the information collected from the paystubs that were used to verify an end user's income. It can be called once the status of the verification has been set to `VERIFICATION_STATUS_PROCESSING_COMPLETE`, as reported by the `INCOME: verification_status` webhook. Attempting to call the endpoint before verification has been completed will result in an error.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/get` instead.

</api/products/income/#incomeverificationpaystubsget>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IncomeVerificationPaystubsGetResponse;
import org.openapis.openapi.models.shared.IncomeVerificationPaystubsGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa", "molestiae", "magnam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.IncomeVerificationPaystubsGetRequest req = new IncomeVerificationPaystubsGetRequest() {{
                accessToken = "odio";
                clientId = "eius";
                incomeVerificationId = "esse";
                secret = "esse";
            }};            

            IncomeVerificationPaystubsGetResponse res = sdk.plaid.incomeVerificationPaystubsGet(req);

            if (res.incomeVerificationPaystubsGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~incomeVerificationPrecheck~~

`/income/verification/precheck` is an optional endpoint that can be called before initializing a Link session for income verification. It evaluates whether a given user is supportable by digital income verification and returns a `precheck_id` that can be provided to `/link/token/create`. If the user is eligible for digital verification, providing the `precheck_id` in this way will generate a Link UI optimized for the end user and their specific employer. If the user cannot be confirmed as eligible, the `precheck_id` can still be provided to `/link/token/create` and the user can still use the income verification flow, but they may be required to manually upload a paystub to verify their income.

While all request fields are optional, providing either `employer` or `transactions_access_tokens` data will increase the chance of receiving a useful result.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/precheck` instead.

</api/products/income/#incomeverificationprecheck>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IncomeVerificationPrecheckResponse;
import org.openapis.openapi.models.shared.IncomeVerificationPrecheckEmployer;
import org.openapis.openapi.models.shared.IncomeVerificationPrecheckMilitaryInfo;
import org.openapis.openapi.models.shared.IncomeVerificationPrecheckPayrollInstitution;
import org.openapis.openapi.models.shared.IncomeVerificationPrecheckRequest;
import org.openapis.openapi.models.shared.IncomeVerificationPrecheckUser;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem", "fuga", "reprehenderit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.IncomeVerificationPrecheckRequest req = new IncomeVerificationPrecheckRequest() {{
                clientId = "quidem";
                employer = new IncomeVerificationPrecheckEmployer() {{
                    address = new java.util.HashMap<String, Object>() {{
                        put("ut", "eum");
                        put("suscipit", "assumenda");
                        put("eos", "praesentium");
                        put("quisquam", "veritatis");
                    }};
                    name = "Amelia Predovic";
                    taxId = "illum";
                    url = "quo";
                }};;
                payrollInstitution = new IncomeVerificationPrecheckPayrollInstitution() {{
                    name = "Herbert Daugherty V";
                }};;
                secret = "consequatur";
                transactionsAccessToken = "tempora";
                transactionsAccessTokens = new String[]{{
                    add("ipsam"),
                    add("aspernatur"),
                    add("sequi"),
                    add("quo"),
                }};
                usMilitaryInfo = new IncomeVerificationPrecheckMilitaryInfo() {{
                    branch = "esse";
                    isActiveDuty = false;
                }};;
                user = new IncomeVerificationPrecheckUser() {{
                    emailAddress = "recusandae";
                    firstName = "Alvena";
                    homeAddress = new java.util.HashMap<String, Object>() {{
                        put("quod", "dignissimos");
                        put("inventore", "nihil");
                        put("totam", "accusamus");
                    }};
                    lastName = "Hackett";
                }};;
            }};            

            IncomeVerificationPrecheckResponse res = sdk.plaid.incomeVerificationPrecheck(req);

            if (res.incomeVerificationPrecheckResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~incomeVerificationTaxformsGet~~

`/income/verification/taxforms/get` returns the information collected from forms that were used to verify an end user''s income. It can be called once the status of the verification has been set to `VERIFICATION_STATUS_PROCESSING_COMPLETE`, as reported by the `INCOME: verification_status` webhook. Attempting to call the endpoint before verification has been completed will result in an error.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/get` instead.

</api/products/income/#incomeverificationtaxformsget>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IncomeVerificationTaxformsGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio", "occaecati", "commodi") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("dolores", "deserunt");
                put("molestiae", "accusantium");
                put("porro", "eum");
                put("quas", "praesentium");
            }}            

            IncomeVerificationTaxformsGetResponse res = sdk.plaid.incomeVerificationTaxformsGet(req);

            if (res.incomeVerificationTaxformsGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## institutionsGet

Returns a JSON response containing details on all financial institutions currently supported by Plaid. Because Plaid supports thousands of institutions, results are paginated.

If there is no overlap between an institution’s enabled products and a client’s enabled products, then the institution will be filtered out from the response. As a result, the number of institutions returned may not match the count specified in the call.

</api/institutions/#institutionsget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstitutionsGetResponse;
import org.openapis.openapi.models.shared.CountryCodeEnum;
import org.openapis.openapi.models.shared.InstitutionsGetRequest;
import org.openapis.openapi.models.shared.InstitutionsGetRequestOptions;
import org.openapis.openapi.models.shared.ProductsEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur", "deleniti", "fugit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.InstitutionsGetRequest req = new InstitutionsGetRequest(681393L,                 new org.openapis.openapi.models.shared.CountryCodeEnum[]{{
                                add(CountryCodeEnum.FR),
                                add(CountryCodeEnum.PL),
                                add(CountryCodeEnum.ES),
                            }}, 325685L) {{
                clientId = "nisi";
                options = new InstitutionsGetRequestOptions() {{
                    includeAuthMetadata = false;
                    includeOptionalMetadata = false;
                    includePaymentInitiationMetadata = false;
                    oauth = false;
                    products = new org.openapis.openapi.models.shared.ProductsEnum[]{{
                        add(ProductsEnum.SIGNAL),
                    }};
                    routingNumbers = new String[]{{
                        add("ratione"),
                    }};
                }};;
                secret = "explicabo";
            }};            

            InstitutionsGetResponse res = sdk.plaid.institutionsGet(req);

            if (res.institutionsGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## institutionsGetById

Returns a JSON response containing details on a specified financial institution currently supported by Plaid.

Versioning note: API versions 2019-05-29 and earlier allow use of the `public_key` parameter instead of the `client_id` and `secret` to authenticate to this endpoint. The `public_key` has been deprecated; all customers are encouraged to use `client_id` and `secret` instead.


</api/institutions/#institutionsget_by_id>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstitutionsGetByIdResponse;
import org.openapis.openapi.models.shared.CountryCodeEnum;
import org.openapis.openapi.models.shared.InstitutionsGetByIdRequest;
import org.openapis.openapi.models.shared.InstitutionsGetByIdRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe", "occaecati", "atque") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.InstitutionsGetByIdRequest req = new InstitutionsGetByIdRequest(                new org.openapis.openapi.models.shared.CountryCodeEnum[]{{
                                add(CountryCodeEnum.DE),
                            }}, "eveniet") {{
                clientId = "accusamus";
                options = new InstitutionsGetByIdRequestOptions() {{
                    includeAuthMetadata = false;
                    includeOptionalMetadata = false;
                    includePaymentInitiationMetadata = false;
                    includeStatus = false;
                }};;
                secret = "veritatis";
            }};            

            InstitutionsGetByIdResponse res = sdk.plaid.institutionsGetById(req);

            if (res.institutionsGetByIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## institutionsSearch

Returns a JSON response containing details for institutions that match the query parameters, up to a maximum of ten institutions per query.

Versioning note: API versions 2019-05-29 and earlier allow use of the `public_key` parameter instead of the `client_id` and `secret` parameters to authenticate to this endpoint. The `public_key` parameter has since been deprecated; all customers are encouraged to use `client_id` and `secret` instead.


</api/institutions/#institutionssearch>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstitutionsSearchResponse;
import org.openapis.openapi.models.shared.CountryCodeEnum;
import org.openapis.openapi.models.shared.InstitutionsSearchRequest;
import org.openapis.openapi.models.shared.InstitutionsSearchRequestOptions;
import org.openapis.openapi.models.shared.ProductsEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "quod", "nam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.InstitutionsSearchRequest req = new InstitutionsSearchRequest(                new org.openapis.openapi.models.shared.CountryCodeEnum[]{{
                                add(CountryCodeEnum.CA),
                                add(CountryCodeEnum.GB),
                                add(CountryCodeEnum.LV),
                                add(CountryCodeEnum.DE),
                            }},                 new org.openapis.openapi.models.shared.ProductsEnum[]{{
                                add(ProductsEnum.TRANSACTIONS),
                                add(ProductsEnum.DEPOSIT_SWITCH),
                                add(ProductsEnum.INCOME),
                            }}, "minima") {{
                clientId = "distinctio";
                options = new InstitutionsSearchRequestOptions() {{
                    includeAuthMetadata = false;
                    includeOptionalMetadata = false;
                    includePaymentInitiationMetadata = false;
                    oauth = false;
                    paymentInitiation = new java.util.HashMap<String, Object>() {{
                        put("sit", "culpa");
                        put("tempore", "adipisci");
                        put("cumque", "consequuntur");
                        put("consequatur", "minus");
                    }};
                }};;
                secret = "quaerat";
            }};            

            InstitutionsSearchResponse res = sdk.plaid.institutionsSearch(req);

            if (res.institutionsSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## investmentsHoldingsGet

The `/investments/holdings/get` endpoint allows developers to receive user-authorized stock position data for `investment`-type accounts.

</api/products/investments/#investmentsholdingsget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvestmentsHoldingsGetResponse;
import org.openapis.openapi.models.shared.InvestmentHoldingsGetRequestOptions;
import org.openapis.openapi.models.shared.InvestmentsHoldingsGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente", "consectetur", "esse") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.InvestmentsHoldingsGetRequest req = new InvestmentsHoldingsGetRequest("blanditiis") {{
                clientId = "provident";
                options = new InvestmentHoldingsGetRequestOptions() {{
                    accountIds = new String[]{{
                        add("nulla"),
                        add("quas"),
                        add("esse"),
                        add("quasi"),
                    }};
                }};;
                secret = "a";
            }};            

            InvestmentsHoldingsGetResponse res = sdk.plaid.investmentsHoldingsGet(req);

            if (res.investmentsHoldingsGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## investmentsTransactionsGet

The `/investments/transactions/get` endpoint allows developers to retrieve up to 24 months of user-authorized transaction data for investment accounts.

Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.

Due to the potentially large number of investment transactions associated with an Item, results are paginated. Manipulate the count and offset parameters in conjunction with the `total_investment_transactions` response body field to fetch all available investment transactions.

Note that Investments does not have a webhook to indicate when initial transaction data has loaded. Instead, if transactions data is not ready when `/investments/transactions/get` is first called, Plaid will wait for the data. For this reason, calling `/investments/transactions/get` immediately after Link may take up to one to two minutes to return.

</api/products/investments/#investmentstransactionsget>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvestmentsTransactionsGetResponse;
import org.openapis.openapi.models.shared.InvestmentsTransactionsGetRequest;
import org.openapis.openapi.models.shared.InvestmentsTransactionsGetRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "sint", "pariatur") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.InvestmentsTransactionsGetRequest req = new InvestmentsTransactionsGetRequest("possimus", LocalDate.parse("2022-02-03"), LocalDate.parse("2020-07-22")) {{
                clientId = "veritatis";
                options = new InvestmentsTransactionsGetRequestOptions() {{
                    accountIds = new String[]{{
                        add("quasi"),
                    }};
                    count = 628899L;
                    offset = 633608L;
                }};;
                secret = "aliquid";
            }};            

            InvestmentsTransactionsGetResponse res = sdk.plaid.investmentsTransactionsGet(req);

            if (res.investmentsTransactionsGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemAccessTokenInvalidate

By default, the `access_token` associated with an Item does not expire and should be stored in a persistent, secure manner.

You can use the `/item/access_token/invalidate` endpoint to rotate the `access_token` associated with an Item. The endpoint returns a new `access_token` and immediately invalidates the previous `access_token`.


</api/tokens/#itemaccess_tokeninvalidate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemAccessTokenInvalidateResponse;
import org.openapis.openapi.models.shared.ItemAccessTokenInvalidateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur", "quae", "earum") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ItemAccessTokenInvalidateRequest req = new ItemAccessTokenInvalidateRequest("vel") {{
                clientId = "in";
                secret = "eius";
            }};            

            ItemAccessTokenInvalidateResponse res = sdk.plaid.itemAccessTokenInvalidate(req);

            if (res.itemAccessTokenInvalidateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemActivityList

List a historical log of user consent events

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemActivityListResponse;
import org.openapis.openapi.models.shared.ItemActivityListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero", "illum", "soluta") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ItemActivityListRequest req = new ItemActivityListRequest() {{
                accessToken = "accusantium";
                clientId = "aliquam";
                count = 958983L;
                cursor = "dicta";
                secret = "ullam";
            }};            

            ItemActivityListResponse res = sdk.plaid.itemActivityList(req);

            if (res.itemActivityListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemApplicationList

List a user’s connected applications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemApplicationListResponse;
import org.openapis.openapi.models.shared.ItemApplicationListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit", "ullam", "nisi") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ItemApplicationListRequest req = new ItemApplicationListRequest() {{
                accessToken = "aut";
                clientId = "voluptatum";
                secret = "qui";
            }};            

            ItemApplicationListResponse res = sdk.plaid.itemApplicationList(req);

            if (res.itemApplicationListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemApplicationScopesUpdate

Enable consumers to update product access on selected accounts for an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemApplicationScopesUpdateResponse;
import org.openapis.openapi.models.shared.AccountAccess;
import org.openapis.openapi.models.shared.ItemApplicationScopesUpdateRequest;
import org.openapis.openapi.models.shared.Scopes;
import org.openapis.openapi.models.shared.ScopesContextEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam", "ex", "deleniti") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ItemApplicationScopesUpdateRequest req = new ItemApplicationScopesUpdateRequest("itaque", "dolorum", ScopesContextEnum.ENROLLMENT,                 new Scopes() {{
                                accounts = new org.openapis.openapi.models.shared.AccountAccess[]{{
                                    add(new AccountAccess("iste") {{
                                        accountProductAccess = new java.util.HashMap<String, Object>() {{
                                            put("quasi", "at");
                                            put("et", "voluptate");
                                            put("ipsa", "minima");
                                            put("veritatis", "consectetur");
                                        }};
                                        authorized = false;
                                        uniqueId = "adipisci";
                                    }}),
                                    add(new AccountAccess("voluptatem") {{
                                        accountProductAccess = new java.util.HashMap<String, Object>() {{
                                            put("accusantium", "rem");
                                            put("aut", "laudantium");
                                            put("eum", "mollitia");
                                            put("ab", "corrupti");
                                        }};
                                        authorized = false;
                                        uniqueId = "non";
                                    }}),
                                    add(new AccountAccess("explicabo") {{
                                        accountProductAccess = new java.util.HashMap<String, Object>() {{
                                            put("occaecati", "numquam");
                                        }};
                                        authorized = false;
                                        uniqueId = "impedit";
                                    }}),
                                }};
                                newAccounts = false;
                                productAccess = new java.util.HashMap<String, Object>() {{
                                    put("aut", "dignissimos");
                                    put("dicta", "maiores");
                                }};
                            }};) {{
                clientId = "natus";
                secret = "velit";
                state = "voluptatibus";
            }};            

            ItemApplicationScopesUpdateResponse res = sdk.plaid.itemApplicationScopesUpdate(req);

            if (res.itemApplicationScopesUpdateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemCreatePublicToken

Note: As of July 2020, the `/item/public_token/create` endpoint is deprecated. Instead, use `/link/token/create` with an `access_token` to create a Link token for use with [update mode](https://plaid.com/docs/link/update-mode).

If you need your user to take action to restore or resolve an error associated with an Item, generate a public token with the `/item/public_token/create` endpoint and then initialize Link with that `public_token`.

A `public_token` is one-time use and expires after 30 minutes. You use a `public_token` to initialize Link in [update mode](https://plaid.com/docs/link/update-mode) for a particular Item. You can generate a `public_token` for an Item even if you did not use Link to create the Item originally.

The `/item/public_token/create` endpoint is **not** used to create your initial `public_token`. If you have not already received an `access_token` for a specific Item, use Link to obtain your `public_token` instead. See the [Quickstart](https://plaid.com/docs/quickstart) for more information.

</api/tokens/#itempublic_tokencreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemCreatePublicTokenResponse;
import org.openapis.openapi.models.shared.ItemPublicTokenCreateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas", "asperiores", "aperiam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ItemPublicTokenCreateRequest req = new ItemPublicTokenCreateRequest("ea") {{
                clientId = "quaerat";
                secret = "consequuntur";
            }};            

            ItemCreatePublicTokenResponse res = sdk.plaid.itemCreatePublicToken(req);

            if (res.itemPublicTokenCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemGet

Returns information about the status of an Item.

</api/items/#itemget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemGetResponse;
import org.openapis.openapi.models.shared.ItemGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus", "officia", "maxime") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ItemGetRequest req = new ItemGetRequest("dignissimos") {{
                clientId = "officia";
                secret = "asperiores";
            }};            

            ItemGetResponse res = sdk.plaid.itemGet(req);

            if (res.itemGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemImport

`/item/import` creates an Item via your Plaid Exchange Integration and returns an `access_token`. As part of an `/item/import` request, you will include a User ID (`user_auth.user_id`) and Authentication Token (`user_auth.auth_token`) that enable data aggregation through your Plaid Exchange API endpoints. These authentication principals are to be chosen by you.

Upon creating an Item via `/item/import`, Plaid will automatically begin an extraction of that Item through the Plaid Exchange infrastructure you have already integrated. This will automatically generate the Plaid native account ID for the account the user will switch their direct deposit to (`target_account_id`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemImportResponse;
import org.openapis.openapi.models.shared.ItemImportRequest;
import org.openapis.openapi.models.shared.ItemImportRequestOptions;
import org.openapis.openapi.models.shared.ItemImportRequestUserAuth;
import org.openapis.openapi.models.shared.ProductsEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo", "quae", "quaerat") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ItemImportRequest req = new ItemImportRequest(                new org.openapis.openapi.models.shared.ProductsEnum[]{{
                                add(ProductsEnum.TRANSFER),
                                add(ProductsEnum.LIABILITIES),
                                add(ProductsEnum.AUTH),
                                add(ProductsEnum.INVESTMENTS),
                            }},                 new ItemImportRequestUserAuth("fuga", "id");) {{
                clientId = "suscipit";
                options = new ItemImportRequestOptions() {{
                    webhook = "velit";
                }};;
                secret = "culpa";
            }};            

            ItemImportResponse res = sdk.plaid.itemImport(req);

            if (res.itemImportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemPublicTokenExchange

Exchange a Link `public_token` for an API `access_token`. Link hands off the `public_token` client-side via the `onSuccess` callback once a user has successfully created an Item. The `public_token` is ephemeral and expires after 30 minutes. An `access_token` does not expire, but can be revoked by calling `/item/remove`.

The response also includes an `item_id` that should be stored with the `access_token`. The `item_id` is used to identify an Item in a webhook. The `item_id` can also be retrieved by making an `/item/get` request.

</api/tokens/#itempublic_tokenexchange>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemPublicTokenExchangeResponse;
import org.openapis.openapi.models.shared.ItemPublicTokenExchangeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est", "recusandae", "totam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ItemPublicTokenExchangeRequest req = new ItemPublicTokenExchangeRequest("fugiat") {{
                clientId = "vel";
                secret = "ducimus";
            }};            

            ItemPublicTokenExchangeResponse res = sdk.plaid.itemPublicTokenExchange(req);

            if (res.itemPublicTokenExchangeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemRemove

The `/item/remove` endpoint allows you to remove an Item. Once removed, the `access_token`, as well as any processor tokens or bank account tokens associated with the Item, is no longer valid and cannot be used to access any data that was associated with the Item.

Note that in the Development environment, issuing an `/item/remove`  request will not decrement your live credential count. To increase your credential account in Development, contact Support.

Also note that for certain OAuth-based institutions, an Item removed via `/item/remove` may still show as an active connection in the institution's OAuth permission manager.

API versions 2019-05-29 and earlier return a `removed` boolean as part of the response.

</api/items/#itemremove>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemRemoveResponse;
import org.openapis.openapi.models.shared.ItemRemoveRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos", "vel", "labore") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ItemRemoveRequest req = new ItemRemoveRequest("possimus") {{
                clientId = "facilis";
                secret = "cum";
            }};            

            ItemRemoveResponse res = sdk.plaid.itemRemove(req);

            if (res.itemRemoveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemWebhookUpdate

The POST `/item/webhook/update` allows you to update the webhook URL associated with an Item. This request triggers a [`WEBHOOK_UPDATE_ACKNOWLEDGED`](https://plaid.com/docs/api/items/#webhook_update_acknowledged) webhook to the newly specified webhook URL.

</api/items/#itemwebhookupdate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemWebhookUpdateResponse;
import org.openapis.openapi.models.shared.ItemWebhookUpdateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi", "in", "corporis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ItemWebhookUpdateRequest req = new ItemWebhookUpdateRequest("reiciendis") {{
                clientId = "assumenda";
                secret = "nemo";
                webhook = "recusandae";
            }};            

            ItemWebhookUpdateResponse res = sdk.plaid.itemWebhookUpdate(req);

            if (res.itemWebhookUpdateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## liabilitiesGet

The `/liabilities/get` endpoint returns various details about an Item with loan or credit accounts. Liabilities data is available primarily for US financial institutions, with some limited coverage of Canadian institutions. Currently supported account types are account type `credit` with account subtype `credit card` or `paypal`, and account type `loan` with account subtype `student` or `mortgage`. To limit accounts listed in Link to types and subtypes supported by Liabilities, you can use the `account_filters` parameter when [creating a Link token](https://plaid.com/docs/api/tokens/#linktokencreate).

The types of information returned by Liabilities can include balances and due dates, loan terms, and account details such as original loan amount and guarantor. Data is refreshed approximately once per day; the latest data can be retrieved by calling `/liabilities/get`.

Note: This request may take some time to complete if `liabilities` was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the additional data.

</api/products/liabilities/#liabilitiesget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LiabilitiesGetResponse;
import org.openapis.openapi.models.shared.LiabilitiesGetRequest;
import org.openapis.openapi.models.shared.LiabilitiesGetRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid", "aperiam", "cum") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.LiabilitiesGetRequest req = new LiabilitiesGetRequest("consectetur") {{
                clientId = "in";
                options = new LiabilitiesGetRequestOptions() {{
                    accountIds = new String[]{{
                        add("earum"),
                        add("facere"),
                    }};
                }};;
                secret = "numquam";
            }};            

            LiabilitiesGetResponse res = sdk.plaid.liabilitiesGet(req);

            if (res.liabilitiesGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## linkDeliveryCreate

Use the `/link_delivery/create` endpoint to create a Link Delivery session.

</docs/assets/waitlist/link-delivery/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LinkDeliveryCreateResponse;
import org.openapis.openapi.models.shared.LinkDeliveryCommunicationMethod;
import org.openapis.openapi.models.shared.LinkDeliveryCreateRequest;
import org.openapis.openapi.models.shared.LinkDeliveryDeliveryMethodEnum;
import org.openapis.openapi.models.shared.LinkDeliveryOptions;
import org.openapis.openapi.models.shared.LinkDeliveryRecipient;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus", "suscipit", "reiciendis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.LinkDeliveryCreateRequest req = new LinkDeliveryCreateRequest("quidem") {{
                clientId = "saepe";
                options = new LinkDeliveryOptions() {{
                    recipient = new LinkDeliveryRecipient() {{
                        communicationMethods = new org.openapis.openapi.models.shared.LinkDeliveryCommunicationMethod[]{{
                            add(new LinkDeliveryCommunicationMethod() {{
                                address = "19222 Jena Villages";
                                method = LinkDeliveryDeliveryMethodEnum.EMAIL;
                            }}),
                            add(new LinkDeliveryCommunicationMethod() {{
                                address = "36309 Bruen Trafficway";
                                method = LinkDeliveryDeliveryMethodEnum.EMAIL;
                            }}),
                            add(new LinkDeliveryCommunicationMethod() {{
                                address = "13333 Parisian Ferry";
                                method = LinkDeliveryDeliveryMethodEnum.EMAIL;
                            }}),
                            add(new LinkDeliveryCommunicationMethod() {{
                                address = "54238 Herman Ferry";
                                method = LinkDeliveryDeliveryMethodEnum.EMAIL;
                            }}),
                        }};
                        firstName = "Jimmy";
                    }};;
                }};;
                secret = "quas";
            }};            

            LinkDeliveryCreateResponse res = sdk.plaid.linkDeliveryCreate(req);

            if (res.linkDeliveryCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## linkDeliveryGet

Use the `/link_delivery/get` endpoint to get the status of a Link Delivery session.

</docs/assets/waitlist/link-delivery/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LinkDeliveryGetResponse;
import org.openapis.openapi.models.shared.LinkDeliveryGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic", "nesciunt", "culpa") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.LinkDeliveryGetRequest req = new LinkDeliveryGetRequest("corrupti") {{
                clientId = "pariatur";
                secret = "totam";
            }};            

            LinkDeliveryGetResponse res = sdk.plaid.linkDeliveryGet(req);

            if (res.linkDeliveryGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## linkOauthCorrelationIdExchange

Exchange an OAuth `link_correlation_id` for the corresponding `link_token`. The `link_correlation_id` is only available for 'payment_initiation' products and is provided to the client via the OAuth `redirect_uri` as a query parameter.
The `link_correlation_id` is ephemeral and expires in a brief period, after which it can no longer be exchanged for the 'link_token'.

</api/oauth/#linkcorrelationid>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LinkOauthCorrelationIdExchangeResponse;
import org.openapis.openapi.models.shared.LinkOAuthCorrelationIdExchangeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic", "exercitationem", "nobis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.LinkOAuthCorrelationIdExchangeRequest req = new LinkOAuthCorrelationIdExchangeRequest("sit") {{
                clientId = "rerum";
                secret = "sed";
            }};            

            LinkOauthCorrelationIdExchangeResponse res = sdk.plaid.linkOauthCorrelationIdExchange(req);

            if (res.linkOAuthCorrelationIdExchangeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## linkTokenCreate

The `/link/token/create` endpoint creates a `link_token`, which is required as a parameter when initializing Link. Once Link has been initialized, it returns a `public_token`, which can then be exchanged for an `access_token` via `/item/public_token/exchange` as part of the main Link flow.

A `link_token` generated by `/link/token/create` is also used to initialize other Link flows, such as the update mode flow for tokens with expired credentials, or the Payment Initiation (Europe) flow.

</api/tokens/#linktokencreate>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LinkTokenCreateResponse;
import org.openapis.openapi.models.shared.CountryCodeEnum;
import org.openapis.openapi.models.shared.EmploymentSourceTypeEnum;
import org.openapis.openapi.models.shared.IdentityVerificationRequestUserName;
import org.openapis.openapi.models.shared.IncomeVerificationPayrollFlowTypeEnum;
import org.openapis.openapi.models.shared.IncomeVerificationSourceTypeEnum;
import org.openapis.openapi.models.shared.LinkTokenCreateInstitutionData;
import org.openapis.openapi.models.shared.LinkTokenCreateRequest;
import org.openapis.openapi.models.shared.LinkTokenCreateRequestAuth;
import org.openapis.openapi.models.shared.LinkTokenCreateRequestAuthFlowTypeEnum;
import org.openapis.openapi.models.shared.LinkTokenCreateRequestDepositSwitch;
import org.openapis.openapi.models.shared.LinkTokenCreateRequestEmployment;
import org.openapis.openapi.models.shared.LinkTokenCreateRequestEmploymentBankIncome;
import org.openapis.openapi.models.shared.LinkTokenCreateRequestIdentityVerification;
import org.openapis.openapi.models.shared.LinkTokenCreateRequestIncomeVerification;
import org.openapis.openapi.models.shared.LinkTokenCreateRequestIncomeVerificationBankIncome;
import org.openapis.openapi.models.shared.LinkTokenCreateRequestIncomeVerificationPayrollIncome;
import org.openapis.openapi.models.shared.LinkTokenCreateRequestPaymentInitiation;
import org.openapis.openapi.models.shared.LinkTokenCreateRequestTransfer;
import org.openapis.openapi.models.shared.LinkTokenCreateRequestUpdate;
import org.openapis.openapi.models.shared.LinkTokenCreateRequestUser;
import org.openapis.openapi.models.shared.LinkTokenCreateRequestUserStatedIncomeSource;
import org.openapis.openapi.models.shared.LinkTokenEUConfig;
import org.openapis.openapi.models.shared.LinkTokenInvestments;
import org.openapis.openapi.models.shared.ProductsEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserStatedIncomeSourceCategoryEnum;
import org.openapis.openapi.models.shared.UserStatedIncomeSourceFrequencyEnum;
import org.openapis.openapi.models.shared.UserStatedIncomeSourcePayTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis", "explicabo", "asperiores") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.LinkTokenCreateRequest req = new LinkTokenCreateRequest("facilis",                 new org.openapis.openapi.models.shared.CountryCodeEnum[]{{
                                add(CountryCodeEnum.SE),
                                add(CountryCodeEnum.GB),
                            }}, "iste",                 new LinkTokenCreateRequestUser("dolore") {{
                                address = new java.util.HashMap<String, Object>() {{
                                    put("sed", "in");
                                    put("commodi", "quidem");
                                    put("explicabo", "voluptas");
                                }};
                                dateOfBirth = LocalDate.parse("2022-10-19");
                                emailAddress = "suscipit";
                                emailAddressVerifiedTime = OffsetDateTime.parse("2020-04-25T13:15:32.117Z");
                                idNumber = new java.util.HashMap<String, Object>() {{
                                    put("reiciendis", "perferendis");
                                }};
                                legalName = "corrupti";
                                name = new IdentityVerificationRequestUserName("Knope", "Leslie");;
                                phoneNumber = "maiores";
                                phoneNumberVerifiedTime = OffsetDateTime.parse("2022-11-07T19:19:54.306Z");
                                ssn = "provident";
                            }};) {{
                accessToken = "eius";
                accountFilters = new java.util.HashMap<String, Object>() {{
                    put("ipsum", "ea");
                    put("occaecati", "quos");
                    put("voluptatibus", "tempora");
                    put("tempora", "voluptate");
                }};
                additionalConsentedProducts = new org.openapis.openapi.models.shared.ProductsEnum[]{{
                    add(ProductsEnum.IDENTITY_VERIFICATION),
                    add(ProductsEnum.ASSETS),
                    add(ProductsEnum.INVESTMENTS),
                    add(ProductsEnum.EMPLOYMENT),
                }};
                androidPackageName = "praesentium";
                auth = new LinkTokenCreateRequestAuth() {{
                    authTypeSelectEnabled = false;
                    automatedMicrodepositsEnabled = false;
                    flowType = LinkTokenCreateRequestAuthFlowTypeEnum.FLEXIBLE_AUTH;
                    instantMatchEnabled = false;
                    sameDayMicrodepositsEnabled = false;
                }};;
                clientId = "facilis";
                depositSwitch = new LinkTokenCreateRequestDepositSwitch("quaerat");;
                employment = new LinkTokenCreateRequestEmployment() {{
                    bankEmployment = new LinkTokenCreateRequestEmploymentBankIncome(277773L);;
                    employmentSourceTypes = new org.openapis.openapi.models.shared.EmploymentSourceTypeEnum[]{{
                        add(EmploymentSourceTypeEnum.PAYROLL),
                        add(EmploymentSourceTypeEnum.PAYROLL),
                    }};
                }};;
                euConfig = new LinkTokenEUConfig() {{
                    headless = false;
                }};;
                identityVerification = new LinkTokenCreateRequestIdentityVerification("idvtmp_4FrXJvfQU3zGUR") {{
                    consent = true;
                    gaveConsent = true;
                }};;
                incomeVerification = new LinkTokenCreateRequestIncomeVerification() {{
                    accessTokens = new String[]{{
                        add("nobis"),
                    }};
                    assetReportId = "error";
                    bankIncome = new LinkTokenCreateRequestIncomeVerificationBankIncome(333507L) {{
                        enableMultipleItems = false;
                    }};;
                    incomeSourceTypes = new org.openapis.openapi.models.shared.IncomeVerificationSourceTypeEnum[]{{
                        add(IncomeVerificationSourceTypeEnum.PAYROLL),
                        add(IncomeVerificationSourceTypeEnum.PAYROLL),
                    }};
                    incomeVerificationId = "nulla";
                    payrollIncome = new LinkTokenCreateRequestIncomeVerificationPayrollIncome() {{
                        flowTypes = new org.openapis.openapi.models.shared.IncomeVerificationPayrollFlowTypeEnum[]{{
                            add(IncomeVerificationPayrollFlowTypeEnum.PAYROLL_DIGITAL_INCOME),
                        }};
                        isUpdateMode = false;
                        itemIdToUpdate = "saepe";
                    }};;
                    precheckId = "numquam";
                    statedIncomeSources = new org.openapis.openapi.models.shared.LinkTokenCreateRequestUserStatedIncomeSource[]{{
                        add(new LinkTokenCreateRequestUserStatedIncomeSource() {{
                            category = UserStatedIncomeSourceCategoryEnum.GIG_ECONOMY;
                            employer = "officiis";
                            payAnnual = 1046.27;
                            payFrequency = UserStatedIncomeSourceFrequencyEnum.BIWEEKLY;
                            payPerCycle = 3484.76;
                            payType = UserStatedIncomeSourcePayTypeEnum.GROSS;
                        }}),
                        add(new LinkTokenCreateRequestUserStatedIncomeSource() {{
                            category = UserStatedIncomeSourceCategoryEnum.RETIREMENT;
                            employer = "laboriosam";
                            payAnnual = 6805.15;
                            payFrequency = UserStatedIncomeSourceFrequencyEnum.BIWEEKLY;
                            payPerCycle = 6223.85;
                            payType = UserStatedIncomeSourcePayTypeEnum.NET;
                        }}),
                    }};
                }};;
                institutionData = new LinkTokenCreateInstitutionData() {{
                    routingNumber = "expedita";
                }};;
                institutionId = "debitis";
                investments = new LinkTokenInvestments() {{
                    allowUnverifiedCryptoWallets = false;
                }};;
                linkCustomizationName = "neque";
                paymentInitiation = new LinkTokenCreateRequestPaymentInitiation() {{
                    consentId = "dolorum";
                    paymentId = "nostrum";
                }};;
                products = new org.openapis.openapi.models.shared.ProductsEnum[]{{
                    add(ProductsEnum.DEPOSIT_SWITCH),
                    add(ProductsEnum.CREDIT_DETAILS),
                    add(ProductsEnum.EMPLOYMENT),
                }};
                redirectUri = "tempora";
                secret = "atque";
                transfer = new LinkTokenCreateRequestTransfer() {{
                    intentId = "fugit";
                    paymentProfileToken = "ut";
                }};;
                update = new LinkTokenCreateRequestUpdate() {{
                    accountSelectionEnabled = false;
                }};;
                userToken = "fugiat";
                webhook = "voluptatem";
            }};            

            LinkTokenCreateResponse res = sdk.plaid.linkTokenCreate(req);

            if (res.linkTokenCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## linkTokenGet

The `/link/token/get` endpoint gets information about a previously-created `link_token` using the
`/link/token/create` endpoint. It can be useful for debugging purposes.

</api/tokens/#linktokenget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LinkTokenGetResponse;
import org.openapis.openapi.models.shared.LinkTokenGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa", "expedita", "magnam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.LinkTokenGetRequest req = new LinkTokenGetRequest("consequatur") {{
                clientId = "esse";
                secret = "ipsam";
            }};            

            LinkTokenGetResponse res = sdk.plaid.linkTokenGet(req);

            if (res.linkTokenGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## partnerCustomerCreate

The `/partner/customer/create` endpoint is used by reseller partners to create end customers.

</api/partner/#partnercustomercreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PartnerCustomerCreateResponse;
import org.openapis.openapi.models.shared.PartnerCustomerCreateRequest;
import org.openapis.openapi.models.shared.ProductsEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit", "voluptatum", "quas") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PartnerCustomerCreateRequest req = new PartnerCustomerCreateRequest(                new java.util.HashMap<String, Object>() {{
                                put("corporis", "et");
                                put("blanditiis", "ex");
                                put("sed", "sit");
                                put("vel", "nostrum");
                            }}, "saepe", "error", false, false, "consequatur",                 new org.openapis.openapi.models.shared.ProductsEnum[]{{
                                add(ProductsEnum.SIGNAL),
                                add(ProductsEnum.IDENTITY),
                            }}, "harum") {{
                assetsUnderManagement = new java.util.HashMap<String, Object>() {{
                    put("architecto", "occaecati");
                }};
                billingContact = new java.util.HashMap<String, Object>() {{
                    put("quidem", "atque");
                    put("laborum", "nam");
                }};
                clientId = "tenetur";
                createLinkCustomization = false;
                customerSupportInfo = new java.util.HashMap<String, Object>() {{
                    put("alias", "amet");
                    put("deserunt", "voluptate");
                }};
                logo = "unde";
                redirectUris = new String[]{{
                    add("provident"),
                    add("repellendus"),
                    add("delectus"),
                    add("voluptates"),
                }};
                secret = "perferendis";
                technicalContact = new java.util.HashMap<String, Object>() {{
                    put("quidem", "reprehenderit");
                    put("facere", "fuga");
                    put("praesentium", "mollitia");
                }};
            }};            

            PartnerCustomerCreateResponse res = sdk.plaid.partnerCustomerCreate(req);

            if (res.partnerCustomerCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## partnerCustomerEnable

The `/partner/customer/enable` endpoint is used by reseller partners to enable an end customer in the Production environment.

</api/partner/#partnercustomerenable>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PartnerCustomerEnableResponse;
import org.openapis.openapi.models.shared.PartnerCustomerEnableRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam", "voluptatem", "quisquam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PartnerCustomerEnableRequest req = new PartnerCustomerEnableRequest("repudiandae") {{
                clientId = "quasi";
                secret = "atque";
            }};            

            PartnerCustomerEnableResponse res = sdk.plaid.partnerCustomerEnable(req);

            if (res.partnerCustomerEnableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## partnerCustomerGet

The `/partner/customer/get` endpoint is used by reseller partners to retrieve data about a single end customer.

</api/partner/#partnercustomerget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PartnerCustomerGetResponse;
import org.openapis.openapi.models.shared.PartnerCustomerGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit", "asperiores", "totam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PartnerCustomerGetRequest req = new PartnerCustomerGetRequest("suscipit") {{
                clientId = "quidem";
                secret = "maxime";
            }};            

            PartnerCustomerGetResponse res = sdk.plaid.partnerCustomerGet(req);

            if (res.partnerCustomerGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## partnerCustomerOauthInstitutionsGet

The `/partner/customer/oauth_institutions/get` endpoint is used by reseller partners to retrieve OAuth-institution registration information about a single end customer. To learn how to set up a webhook to listen to status update events, visit the [reseller documentation](https://plaid.com/docs/account/resellers/#enabling-end-customers).

</api/partner/#partnercustomeroauth_institutionsget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PartnerCustomerOauthInstitutionsGetResponse;
import org.openapis.openapi.models.shared.PartnerCustomerOAuthInstitutionsGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et", "esse", "amet") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PartnerCustomerOAuthInstitutionsGetRequest req = new PartnerCustomerOAuthInstitutionsGetRequest("assumenda") {{
                clientId = "ea";
                secret = "atque";
            }};            

            PartnerCustomerOauthInstitutionsGetResponse res = sdk.plaid.partnerCustomerOauthInstitutionsGet(req);

            if (res.partnerCustomerOAuthInstitutionsGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## partnerCustomerRemove

The `/partner/customer/remove` endpoint is used by reseller partners to remove an end customer. Removing an end customer will remove it from view in the Plaid Dashboard and deactivate its API keys. This endpoint can only be used to remove an end customer that has not yet been enabled in Production.

</api/partner/#partnercustomerremove>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PartnerCustomerRemoveResponse;
import org.openapis.openapi.models.shared.PartnerCustomerRemoveRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "officiis", "officiis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PartnerCustomerRemoveRequest req = new PartnerCustomerRemoveRequest("accusamus") {{
                clientId = "natus";
                secret = "minima";
            }};            

            PartnerCustomerRemoveResponse res = sdk.plaid.partnerCustomerRemove(req);

            if (res.partnerCustomerRemoveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentInitiationConsentCreate

The `/payment_initiation/consent/create` endpoint is used to create a payment consent, which can be used to initiate payments on behalf of the user. Payment consents are created with `UNAUTHORISED` status by default and must be authorised by the user before payments can be initiated.

Consents can be limited in time and scope, and have constraints that describe limitations for payments.

</api/products/payment-initiation/#payment_initiationconsentcreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentInitiationConsentCreateResponse;
import org.openapis.openapi.models.shared.PaymentInitiationConsentCreateRequest;
import org.openapis.openapi.models.shared.PaymentInitiationConsentScopeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur", "ex", "maiores") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentInitiationConsentCreateRequest req = new PaymentInitiationConsentCreateRequest(                new java.util.HashMap<String, Object>() {{
                                put("at", "error");
                                put("blanditiis", "suscipit");
                                put("repudiandae", "atque");
                            }}, "atque", "sunt",                 new org.openapis.openapi.models.shared.PaymentInitiationConsentScopeEnum[]{{
                                add(PaymentInitiationConsentScopeEnum.EXTERNAL),
                                add(PaymentInitiationConsentScopeEnum.EXTERNAL),
                                add(PaymentInitiationConsentScopeEnum.ME_TO_ME),
                                add(PaymentInitiationConsentScopeEnum.EXTERNAL),
                            }}) {{
                clientId = "doloremque";
                options = new java.util.HashMap<String, Object>() {{
                    put("dicta", "accusantium");
                    put("beatae", "dolores");
                    put("enim", "laboriosam");
                    put("velit", "a");
                }};
                secret = "molestias";
            }};            

            PaymentInitiationConsentCreateResponse res = sdk.plaid.paymentInitiationConsentCreate(req);

            if (res.paymentInitiationConsentCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentInitiationConsentGet

The `/payment_initiation/consent/get` endpoint can be used to check the status of a payment consent, as well as to receive basic information such as recipient and constraints.

</api/products/payment-initiation/#payment_initiationconsentget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentInitiationConsentGetResponse;
import org.openapis.openapi.models.shared.PaymentInitiationConsentGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam", "saepe", "consequuntur") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentInitiationConsentGetRequest req = new PaymentInitiationConsentGetRequest("occaecati") {{
                clientId = "officiis";
                secret = "perspiciatis";
            }};            

            PaymentInitiationConsentGetResponse res = sdk.plaid.paymentInitiationConsentGet(req);

            if (res.paymentInitiationConsentGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentInitiationConsentPaymentExecute

The `/payment_initiation/consent/payment/execute` endpoint can be used to execute payments using payment consent.

</api/products/payment-initiation/#payment_initiationconsentpaymentexecute>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentInitiationConsentPaymentExecuteResponse;
import org.openapis.openapi.models.shared.PaymentInitiationConsentPaymentExecuteRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "adipisci", "eveniet") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentInitiationConsentPaymentExecuteRequest req = new PaymentInitiationConsentPaymentExecuteRequest(                new java.util.HashMap<String, Object>() {{
                                put("consequuntur", "fugit");
                                put("id", "quis");
                                put("reprehenderit", "error");
                            }}, "illo", "corporis") {{
                clientId = "quidem";
                secret = "eveniet";
            }};            

            PaymentInitiationConsentPaymentExecuteResponse res = sdk.plaid.paymentInitiationConsentPaymentExecute(req);

            if (res.paymentInitiationConsentPaymentExecuteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentInitiationConsentRevoke

The `/payment_initiation/consent/revoke` endpoint can be used to revoke the payment consent. Once the consent is revoked, it is not possible to initiate payments using it.

</api/products/payment-initiation/#payment_initiationconsentrevoke>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentInitiationConsentRevokeResponse;
import org.openapis.openapi.models.shared.PaymentInitiationConsentRevokeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non", "vero", "doloremque") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentInitiationConsentRevokeRequest req = new PaymentInitiationConsentRevokeRequest("iure") {{
                clientId = "ipsa";
                secret = "totam";
            }};            

            PaymentInitiationConsentRevokeResponse res = sdk.plaid.paymentInitiationConsentRevoke(req);

            if (res.paymentInitiationConsentRevokeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentInitiationPaymentCreate

After creating a payment recipient, you can use the `/payment_initiation/payment/create` endpoint to create a payment to that recipient.  Payments can be one-time or standing order (recurring) and can be denominated in either EUR, GBP or other chosen [currency](https://plaid.com/docs/api/products/payment-initiation/#payment_initiation-payment-create-request-amount-currency).  If making domestic GBP-denominated payments, your recipient must have been created with BACS numbers. In general, EUR-denominated payments will be sent via SEPA Credit Transfer, GBP-denominated payments will be sent via the Faster Payments network and for non-Eurozone markets typically via the local payment scheme, but the payment network used will be determined by the institution. Payments sent via Faster Payments will typically arrive immediately, while payments sent via SEPA Credit Transfer or other local payment schemes will typically arrive in one business day.

Standing orders (recurring payments) must be denominated in GBP and can only be sent to recipients in the UK. Once created, standing order payments cannot be modified or canceled via the API. An end user can cancel or modify a standing order directly on their banking application or website, or by contacting the bank. Standing orders will follow the payment rules of the underlying rails (Faster Payments in UK). Payments can be sent Monday to Friday, excluding bank holidays. If the pre-arranged date falls on a weekend or bank holiday, the payment is made on the next working day. It is not possible to guarantee the exact time the payment will reach the recipient’s account, although at least 90% of standing order payments are sent by 6am.

In the Development environment, payments must be below 5 GBP or other chosen [currency](https://plaid.com/docs/api/products/payment-initiation/#payment_initiation-payment-create-request-amount-currency). For details on any payment limits in Production, contact your Plaid Account Manager.

</api/products/payment-initiation/#payment_initiationpaymentcreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentInitiationPaymentCreateResponse;
import org.openapis.openapi.models.shared.PaymentInitiationPaymentCreateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae", "molestiae", "eveniet") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentInitiationPaymentCreateRequest req = new PaymentInitiationPaymentCreateRequest(                new java.util.HashMap<String, Object>() {{
                                put("cum", "iure");
                            }}, "necessitatibus", "ratione") {{
                clientId = "laborum";
                options = new java.util.HashMap<String, Object>() {{
                    put("voluptatum", "rem");
                    put("aliquam", "ad");
                    put("repellat", "alias");
                }};
                schedule = new java.util.HashMap<String, Object>() {{
                    put("perspiciatis", "nihil");
                    put("mollitia", "voluptas");
                }};
                secret = "alias";
            }};            

            PaymentInitiationPaymentCreateResponse res = sdk.plaid.paymentInitiationPaymentCreate(req);

            if (res.paymentInitiationPaymentCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentInitiationPaymentGet

The `/payment_initiation/payment/get` endpoint can be used to check the status of a payment, as well as to receive basic information such as recipient and payment amount. In the case of standing orders, the `/payment_initiation/payment/get` endpoint will provide information about the status of the overall standing order itself; the API cannot be used to retrieve payment status for individual payments within a standing order.

</api/products/payment-initiation/#payment_initiationpaymentget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentInitiationPaymentGetResponse;
import org.openapis.openapi.models.shared.PaymentInitiationPaymentGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores", "reiciendis", "dolores") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentInitiationPaymentGetRequest req = new PaymentInitiationPaymentGetRequest("id") {{
                clientId = "minima";
                secret = "dolore";
            }};            

            PaymentInitiationPaymentGetResponse res = sdk.plaid.paymentInitiationPaymentGet(req);

            if (res.paymentInitiationPaymentGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentInitiationPaymentList

The `/payment_initiation/payment/list` endpoint can be used to retrieve all created payments. By default, the 10 most recent payments are returned. You can request more payments and paginate through the results using the optional `count` and `cursor` parameters.

</api/products/payment-initiation/#payment_initiationpaymentlist>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentInitiationPaymentListResponse;
import org.openapis.openapi.models.shared.PaymentInitiationPaymentListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum", "nesciunt", "quae") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentInitiationPaymentListRequest req = new PaymentInitiationPaymentListRequest() {{
                clientId = "recusandae";
                consentId = "omnis";
                count = 309251L;
                cursor = OffsetDateTime.parse("2022-08-06T19:48:35.360Z");
                secret = "ut";
            }};            

            PaymentInitiationPaymentListResponse res = sdk.plaid.paymentInitiationPaymentList(req);

            if (res.paymentInitiationPaymentListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentInitiationPaymentReverseResponse;
import org.openapis.openapi.models.shared.PaymentInitiationPaymentReverseRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa", "adipisci", "debitis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentInitiationPaymentReverseRequest req = new PaymentInitiationPaymentReverseRequest("laudantium", "eum", "nemo") {{
                amount = new java.util.HashMap<String, Object>() {{
                    put("esse", "provident");
                    put("quis", "eum");
                    put("reiciendis", "provident");
                    put("aspernatur", "ullam");
                }};
                clientId = "quasi";
                secret = "animi";
            }};            

            PaymentInitiationPaymentReverseResponse res = sdk.plaid.paymentInitiationPaymentReverse(req);

            if (res.paymentInitiationPaymentReverseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentInitiationRecipientCreate

Create a payment recipient for payment initiation.  The recipient must be in Europe, within a country that is a member of the Single Euro Payment Area (SEPA) or a non-Eurozone country [supported](https://plaid.com/global) by Plaid. For a standing order (recurring) payment, the recipient must be in the UK.

It is recommended to use `bacs` in the UK and `iban` in EU.

The endpoint is idempotent: if a developer has already made a request with the same payment details, Plaid will return the same `recipient_id`.


</api/products/payment-initiation/#payment_initiationrecipientcreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentInitiationRecipientCreateResponse;
import org.openapis.openapi.models.shared.PaymentInitiationRecipientCreateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum", "mollitia", "provident") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentInitiationRecipientCreateRequest req = new PaymentInitiationRecipientCreateRequest("possimus") {{
                address = new java.util.HashMap<String, Object>() {{
                    put("ex", "aliquid");
                    put("accusantium", "repellat");
                    put("doloribus", "ullam");
                }};
                bacs = new java.util.HashMap<String, Object>() {{
                    put("nam", "earum");
                    put("officia", "laborum");
                }};
                clientId = "placeat";
                iban = "modi";
                secret = "voluptatibus";
            }};            

            PaymentInitiationRecipientCreateResponse res = sdk.plaid.paymentInitiationRecipientCreate(req);

            if (res.paymentInitiationRecipientCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentInitiationRecipientGet

Get details about a payment recipient you have previously created.

</api/products/payment-initiation/#payment_initiationrecipientget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentInitiationRecipientGetResponse;
import org.openapis.openapi.models.shared.PaymentInitiationRecipientGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias", "officiis", "sapiente") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentInitiationRecipientGetRequest req = new PaymentInitiationRecipientGetRequest("cumque") {{
                clientId = "vitae";
                secret = "rerum";
            }};            

            PaymentInitiationRecipientGetResponse res = sdk.plaid.paymentInitiationRecipientGet(req);

            if (res.paymentInitiationRecipientGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentInitiationRecipientList

The `/payment_initiation/recipient/list` endpoint list the payment recipients that you have previously created.

</api/products/payment-initiation/#payment_initiationrecipientlist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentInitiationRecipientListResponse;
import org.openapis.openapi.models.shared.PaymentInitiationRecipientListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora", "quis", "inventore") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentInitiationRecipientListRequest req = new PaymentInitiationRecipientListRequest() {{
                clientId = "fugit";
                secret = "cumque";
            }};            

            PaymentInitiationRecipientListResponse res = sdk.plaid.paymentInitiationRecipientList(req);

            if (res.paymentInitiationRecipientListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentProfileCreate

Use `/payment_profile/create` endpoint to create a new payment profile.
To initiate the account linking experience, call `/link/token/create` and provide the `payment_profile_token` in the `transfer.payment_profile_token` field.
You can then use the `payment_profile_token` when creating transfers using `/transfer/authorization/create` and `/transfer/create`.

</api/products/transfer/#payment_profilecreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentProfileCreateResponse;
import org.openapis.openapi.models.shared.PaymentProfileCreateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae", "perferendis", "velit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentProfileCreateRequest req = new PaymentProfileCreateRequest() {{
                clientId = "aspernatur";
                secret = "eum";
            }};            

            PaymentProfileCreateResponse res = sdk.plaid.paymentProfileCreate(req);

            if (res.paymentProfileCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentProfileGet

Use `/payment_profile/get` endpoint to get the status of a given Payment Profile.

</api/products/transfer/#payment_profileget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentProfileGetResponse;
import org.openapis.openapi.models.shared.PaymentProfileGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius", "rem", "at") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentProfileGetRequest req = new PaymentProfileGetRequest("impedit") {{
                clientId = "eos";
                secret = "sapiente";
            }};            

            PaymentProfileGetResponse res = sdk.plaid.paymentProfileGet(req);

            if (res.paymentProfileGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentProfileRemove

Use the `/payment_profile/remove` endpoint to remove a given Payment Profile. Once it’s removed, it can no longer be used to create transfers.

</api/products/transfer/#payment_profileremove>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentProfileRemoveResponse;
import org.openapis.openapi.models.shared.PaymentProfileRemoveRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum", "dicta", "minima") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentProfileRemoveRequest req = new PaymentProfileRemoveRequest("beatae") {{
                clientId = "cupiditate";
                secret = "provident";
            }};            

            PaymentProfileRemoveResponse res = sdk.plaid.paymentProfileRemove(req);

            if (res.paymentProfileRemoveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## processorApexProcessorTokenCreate

Used to create a token suitable for sending to Apex to enable Plaid-Apex integrations.

</none/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProcessorApexProcessorTokenCreateResponse;
import org.openapis.openapi.models.shared.ProcessorApexProcessorTokenCreateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum", "soluta", "hic") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProcessorApexProcessorTokenCreateRequest req = new ProcessorApexProcessorTokenCreateRequest("illum", "eaque") {{
                clientId = "earum";
                secret = "perspiciatis";
            }};            

            ProcessorApexProcessorTokenCreateResponse res = sdk.plaid.processorApexProcessorTokenCreate(req);

            if (res.processorTokenCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## processorAuthGet

The `/processor/auth/get` endpoint returns the bank account and bank identification number (such as the routing number, for US accounts), for a checking or savings account that''s associated with a given `processor_token`. The endpoint also returns high-level account data and balances when available.

Versioning note: API versions 2019-05-29 and earlier use a different schema for the `numbers` object returned by this endpoint. For details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2020-09-14).


</api/processors/#processorauthget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProcessorAuthGetResponse;
import org.openapis.openapi.models.shared.ProcessorAuthGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores", "debitis", "aliquid") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProcessorAuthGetRequest req = new ProcessorAuthGetRequest("porro") {{
                clientId = "suscipit";
                secret = "dolorem";
            }};            

            ProcessorAuthGetResponse res = sdk.plaid.processorAuthGet(req);

            if (res.processorAuthGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## processorBalanceGet

The `/processor/balance/get` endpoint returns the real-time balance for each of an Item's accounts. While other endpoints may return a balance object, only `/processor/balance/get` forces the available and current balance fields to be refreshed rather than cached. 

</api/processors/#processorbalanceget>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProcessorBalanceGetResponse;
import org.openapis.openapi.models.shared.ProcessorBalanceGetRequest;
import org.openapis.openapi.models.shared.ProcessorBalanceGetRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit", "cumque", "fuga") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProcessorBalanceGetRequest req = new ProcessorBalanceGetRequest("ratione") {{
                clientId = "animi";
                options = new ProcessorBalanceGetRequestOptions() {{
                    minLastUpdatedDatetime = OffsetDateTime.parse("2020-06-01T00:59:41.712Z");
                }};;
                secret = "consequatur";
            }};            

            ProcessorBalanceGetResponse res = sdk.plaid.processorBalanceGet(req);

            if (res.processorBalanceGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## processorBankTransferCreate

Use the `/processor/bank_transfer/create` endpoint to initiate a new bank transfer as a processor

</api/processors/#bank_transfercreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProcessorBankTransferCreateResponse;
import org.openapis.openapi.models.shared.ACHClassEnum;
import org.openapis.openapi.models.shared.BankTransferNetworkEnum;
import org.openapis.openapi.models.shared.BankTransferTypeEnum;
import org.openapis.openapi.models.shared.ProcessorBankTransferCreateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi", "et", "ducimus") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProcessorBankTransferCreateRequest req = new ProcessorBankTransferCreateRequest("natus", "occaecati", "suscipit", "adipisci", BankTransferNetworkEnum.ACH, "magni", BankTransferTypeEnum.CREDIT,                 new java.util.HashMap<String, Object>() {{
                                put("necessitatibus", "ipsa");
                                put("tempora", "nihil");
                                put("molestiae", "dicta");
                                put("iusto", "esse");
                            }}) {{
                achClass = ACHClassEnum.TEL;
                clientId = "maiores";
                customTag = "reiciendis";
                metadata = new java.util.HashMap<String, String>() {{
                    put("architecto", "fugiat");
                    put("doloremque", "dicta");
                }};
                originationAccountId = "odio";
                secret = "tempora";
            }};            

            ProcessorBankTransferCreateResponse res = sdk.plaid.processorBankTransferCreate(req);

            if (res.processorBankTransferCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## processorIdentityGet

The `/processor/identity/get` endpoint allows you to retrieve various account holder information on file with the financial institution, including names, emails, phone numbers, and addresses.

</api/processors/#processoridentityget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProcessorIdentityGetResponse;
import org.openapis.openapi.models.shared.ProcessorIdentityGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "ex", "consectetur") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProcessorIdentityGetRequest req = new ProcessorIdentityGetRequest("aliquid") {{
                clientId = "ipsa";
                secret = "laborum";
            }};            

            ProcessorIdentityGetResponse res = sdk.plaid.processorIdentityGet(req);

            if (res.processorIdentityGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## processorSignalDecisionReport

After calling `/processor/signal/evaluate`, call `/processor/signal/decision/report` to report whether the transaction was initiated. This endpoint will return an [`INVALID_FIELD`](/docs/errors/invalid-request/#invalid_field) error if called a second time with a different value for `initiated`.

</api/processors/#processorsignaldecisionreport>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProcessorSignalDecisionReportResponse;
import org.openapis.openapi.models.shared.ProcessorSignalDecisionReportRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SignalDecisionOutcomeEnum;
import org.openapis.openapi.models.shared.SignalPaymentMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt", "nostrum", "fugiat") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProcessorSignalDecisionReportRequest req = new ProcessorSignalDecisionReportRequest("expedita", false, "aliquid") {{
                amountInstantlyAvailable = 6391.87;
                clientId = "suscipit";
                daysFundsOnHold = 399161L;
                decisionOutcome = SignalDecisionOutcomeEnum.APPROVE;
                paymentMethod = SignalPaymentMethodEnum.STANDARD_ACH;
                secret = "voluptas";
            }};            

            ProcessorSignalDecisionReportResponse res = sdk.plaid.processorSignalDecisionReport(req);

            if (res.processorSignalDecisionReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## processorSignalEvaluate

Use `/processor/signal/evaluate` to evaluate a planned ACH transaction as a processor to get a return risk assessment (such as a risk score and risk tier) and additional risk signals.

In order to obtain a valid score for an ACH transaction, Plaid must have an access token for the account, and the Item must be healthy (receiving product updates) or have recently been in a healthy state. If the transaction does not meet eligibility requirements, an error will be returned corresponding to the underlying cause. If `/processor/signal/evaluate` is called on the same transaction multiple times within a 24-hour period, cached results may be returned. For more information please refer to our error documentation on [item errors](/docs/errors/item/) and [Link in Update Mode](/docs/link/update-mode/).

Note: This request may take some time to complete if Signal is being added to an existing Item. This is because Plaid must communicate directly with the institution when retrieving the data for the first time.

</api/processors/#processorsignalevaluate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProcessorSignalEvaluateResponse;
import org.openapis.openapi.models.shared.ProcessorSignalEvaluateRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SignalDevice;
import org.openapis.openapi.models.shared.SignalPersonName;
import org.openapis.openapi.models.shared.SignalUser;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste", "id", "ab") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProcessorSignalEvaluateRequest req = new ProcessorSignalEvaluateRequest(6253.58, "possimus", "voluptates") {{
                clientId = "mollitia";
                clientUserId = "laborum";
                defaultPaymentMethod = "libero";
                device = new SignalDevice() {{
                    ipAddress = "ad";
                    userAgent = "deleniti";
                }};;
                isRecurring = false;
                secret = "enim";
                user = new SignalUser() {{
                    address = new java.util.HashMap<String, Object>() {{
                        put("repellendus", "ex");
                    }};
                    emailAddress = "quo";
                    name = new SignalPersonName() {{
                        familyName = "ex";
                        givenName = "ut";
                        middleName = "ad";
                        prefix = "expedita";
                        suffix = "voluptatem";
                    }};;
                    phoneNumber = "molestias";
                }};;
                userPresent = false;
            }};            

            ProcessorSignalEvaluateResponse res = sdk.plaid.processorSignalEvaluate(req);

            if (res.processorSignalEvaluateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## processorSignalReturnReport

Call the `/processor/signal/return/report` endpoint to report a returned transaction that was previously sent to the `/processor/signal/evaluate` endpoint. Your feedback will be used by the model to incorporate the latest risk trend in your portfolio.

</api/processors/#processorsignalreturnreport>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProcessorSignalReturnReportResponse;
import org.openapis.openapi.models.shared.ProcessorSignalReturnReportRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum", "aliquid", "beatae") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProcessorSignalReturnReportRequest req = new ProcessorSignalReturnReportRequest("voluptatum", "omnis", "veritatis") {{
                clientId = "rerum";
                returnedAt = OffsetDateTime.parse("2021-09-24T14:32:36.483Z");
                secret = "voluptatem";
            }};            

            ProcessorSignalReturnReportResponse res = sdk.plaid.processorSignalReturnReport(req);

            if (res.processorSignalReturnReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## processorStripeBankAccountTokenCreate


Used to create a token suitable for sending to Stripe to enable Plaid-Stripe integrations. For a detailed guide on integrating Stripe, see [Add Stripe to your app](https://plaid.com/docs/auth/partnerships/stripe/).

Note that the Stripe bank account token is a one-time use token. To store bank account information for later use, you can use a Stripe customer object and create an associated bank account from the token, or you can use a Stripe Custom account and create an associated external bank account from the token. This bank account information should work indefinitely, unless the user's bank account information changes or they revoke Plaid's permissions to access their account. Stripe bank account information cannot be modified once the bank account token has been created. If you ever need to change the bank account details used by Stripe for a specific customer, have the user go through Link again and create a new bank account token from the new `access_token`.

Bank account tokens can also be revoked, using `/item/remove`.'

</api/processors/#processorstripebank_account_tokencreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProcessorStripeBankAccountTokenCreateResponse;
import org.openapis.openapi.models.shared.ProcessorStripeBankAccountTokenCreateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente", "officiis", "architecto") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProcessorStripeBankAccountTokenCreateRequest req = new ProcessorStripeBankAccountTokenCreateRequest("fuga", "pariatur") {{
                clientId = "debitis";
                secret = "voluptatem";
            }};            

            ProcessorStripeBankAccountTokenCreateResponse res = sdk.plaid.processorStripeBankAccountTokenCreate(req);

            if (res.processorStripeBankAccountTokenCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## processorTokenCreate

Used to create a token suitable for sending to one of Plaid's partners to enable integrations. Note that Stripe partnerships use bank account tokens instead; see `/processor/stripe/bank_account_token/create` for creating tokens for use with Stripe integrations. Once created, a processor token for a given Item cannot be modified or updated. If the account must be linked to a new or different partner resource, create a new Item by having the user go through the Link flow again; a new processor token can then be created from the new `access_token`. Processor tokens can also be revoked, using `/item/remove`.

</api/processors/#processortokencreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProcessorTokenCreateResponse;
import org.openapis.openapi.models.shared.ProcessorTokenCreateRequest;
import org.openapis.openapi.models.shared.ProcessorTokenCreateRequestProcessorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias", "deleniti", "earum") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProcessorTokenCreateRequest req = new ProcessorTokenCreateRequest("ex", "sapiente", ProcessorTokenCreateRequestProcessorEnum.ALPACA) {{
                clientId = "minus";
                secret = "nemo";
            }};            

            ProcessorTokenCreateResponse res = sdk.plaid.processorTokenCreate(req);

            if (res.processorTokenCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxBankTransferFireWebhook

Use the `/sandbox/bank_transfer/fire_webhook` endpoint to manually trigger a Bank Transfers webhook in the Sandbox environment.

</bank-transfers/reference/#sandboxbank_transferfire_webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxBankTransferFireWebhookResponse;
import org.openapis.openapi.models.shared.SandboxBankTransferFireWebhookRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores", "ratione", "ullam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxBankTransferFireWebhookRequest req = new SandboxBankTransferFireWebhookRequest("perferendis") {{
                clientId = "illum";
                secret = "totam";
            }};            

            SandboxBankTransferFireWebhookResponse res = sdk.plaid.sandboxBankTransferFireWebhook(req);

            if (res.sandboxBankTransferFireWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxBankTransferSimulate

Use the `/sandbox/bank_transfer/simulate` endpoint to simulate a bank transfer event in the Sandbox environment.  Note that while an event will be simulated and will appear when using endpoints such as `/bank_transfer/event/sync` or `/bank_transfer/event/list`, no transactions will actually take place and funds will not move between accounts, even within the Sandbox.

</bank-transfers/reference/#sandboxbank_transfersimulate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxBankTransferSimulateResponse;
import org.openapis.openapi.models.shared.SandboxBankTransferSimulateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit", "quibusdam", "nam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxBankTransferSimulateRequest req = new SandboxBankTransferSimulateRequest("ipsam", "culpa") {{
                clientId = "dolor";
                failureReason = new java.util.HashMap<String, Object>() {{
                    put("inventore", "deleniti");
                    put("veritatis", "tempora");
                }};
                secret = "dolor";
            }};            

            SandboxBankTransferSimulateResponse res = sdk.plaid.sandboxBankTransferSimulate(req);

            if (res.sandboxBankTransferSimulateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxIncomeFireWebhook

Use the `/sandbox/income/fire_webhook` endpoint to manually trigger an Income webhook in the Sandbox environment.

</api/sandbox/#sandboxincomefire_webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxIncomeFireWebhookResponse;
import org.openapis.openapi.models.shared.SandboxIncomeFireWebhookRequest;
import org.openapis.openapi.models.shared.SandboxIncomeFireWebhookRequestVerificationStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur", "architecto", "sit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxIncomeFireWebhookRequest req = new SandboxIncomeFireWebhookRequest("modi", SandboxIncomeFireWebhookRequestVerificationStatusEnum.VERIFICATION_STATUS_PROCESSING_COMPLETE, "ab") {{
                clientId = "laudantium";
                secret = "quae";
                userId = "dolor";
            }};            

            SandboxIncomeFireWebhookResponse res = sdk.plaid.sandboxIncomeFireWebhook(req);

            if (res.sandboxIncomeFireWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxItemFireWebhookResponse;
import org.openapis.openapi.models.shared.SandboxItemFireWebhookRequest;
import org.openapis.openapi.models.shared.SandboxItemFireWebhookRequestWebhookCodeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WebhookTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat", "ipsam", "consequuntur") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxItemFireWebhookRequest req = new SandboxItemFireWebhookRequest("ipsa", SandboxItemFireWebhookRequestWebhookCodeEnum.AUTH_DATA_UPDATE) {{
                clientId = "eveniet";
                secret = "impedit";
                webhookType = WebhookTypeEnum.TRANSACTIONS;
            }};            

            SandboxItemFireWebhookResponse res = sdk.plaid.sandboxItemFireWebhook(req);

            if (res.sandboxItemFireWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxItemResetLogin

`/sandbox/item/reset_login/` forces an Item into an `ITEM_LOGIN_REQUIRED` state in order to simulate an Item whose login is no longer valid. This makes it easy to test Link's [update mode](https://plaid.com/docs/link/update-mode) flow in the Sandbox environment.  After calling `/sandbox/item/reset_login`, You can then use Plaid Link update mode to restore the Item to a good state. An `ITEM_LOGIN_REQUIRED` webhook will also be fired after a call to this endpoint, if one is associated with the Item.


In the Sandbox, Items will transition to an `ITEM_LOGIN_REQUIRED` error state automatically after 30 days, even if this endpoint is not called.

</api/sandbox/#sandboxitemreset_login>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxItemResetLoginResponse;
import org.openapis.openapi.models.shared.SandboxItemResetLoginRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "necessitatibus", "sed") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxItemResetLoginRequest req = new SandboxItemResetLoginRequest("veniam") {{
                clientId = "nesciunt";
                secret = "expedita";
            }};            

            SandboxItemResetLoginResponse res = sdk.plaid.sandboxItemResetLogin(req);

            if (res.sandboxItemResetLoginResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxItemSetVerificationStatus

The `/sandbox/item/set_verification_status` endpoint can be used to change the verification status of an Item in in the Sandbox in order to simulate the Automated Micro-deposit flow.

Note that not all Plaid developer accounts are enabled for micro-deposit based verification by default. Your account must be enabled for this feature in order to test it in Sandbox. To enable this features or check your status, contact your account manager or [submit a product access Support ticket](https://dashboard.plaid.com/support/new/product-and-development/product-troubleshooting/request-product-access).

For more information on testing Automated Micro-deposits in Sandbox, see [Auth full coverage testing](https://plaid.com/docs/auth/coverage/testing#).

</api/sandbox/#sandboxitemset_verification_status>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxItemSetVerificationStatusResponse;
import org.openapis.openapi.models.shared.SandboxItemSetVerificationStatusRequest;
import org.openapis.openapi.models.shared.SandboxItemSetVerificationStatusRequestVerificationStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum", "vel", "voluptatum") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxItemSetVerificationStatusRequest req = new SandboxItemSetVerificationStatusRequest("magnam", "exercitationem", SandboxItemSetVerificationStatusRequestVerificationStatusEnum.AUTOMATICALLY_VERIFIED) {{
                clientId = "porro";
                secret = "autem";
            }};            

            SandboxItemSetVerificationStatusResponse res = sdk.plaid.sandboxItemSetVerificationStatus(req);

            if (res.sandboxItemSetVerificationStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxOauthSelectAccounts

Save the selected accounts when connecting to the Platypus Oauth institution

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxOauthSelectAccountsResponse;
import org.openapis.openapi.models.shared.SandboxOauthSelectAccountsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis", "laboriosam", "recusandae") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxOauthSelectAccountsRequest req = new SandboxOauthSelectAccountsRequest(                new String[]{{
                                add("voluptatem"),
                            }}, "exercitationem");            

            SandboxOauthSelectAccountsResponse res = sdk.plaid.sandboxOauthSelectAccounts(req);

            if (res.sandboxOauthSelectAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxPaymentProfileResetLogin

`/sandbox/payment_profile/reset_login/` forces a Payment Profile into a state where the login is no longer valid. This makes it easy to test update mode for Payment Profile in the Sandbox environment.

 After calling `/sandbox/payment_profile/reset_login`, calls to the `/transfer/authorization/create` with the Payment Profile will result in a `decision_rationale` `PAYMENT_PROFILE_LOGIN_REQUIRED`. You can then use update mode for Payment Profile to restore it into a good state.

 In order to invoke this endpoint, you must first [create a Payment Profile](https://plaid.com/docs/transfer/add-to-app/#create-a-payment-profile-optional) and [go through the Link flow](https://plaid.com/docs/transfer/add-to-app/#create-a-link-token).

</api/sandbox/#sandboxpayment_profilereset_login>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxPaymentProfileResetLoginResponse;
import org.openapis.openapi.models.shared.SandboxPaymentProfileResetLoginRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus", "quasi", "nisi") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxPaymentProfileResetLoginRequest req = new SandboxPaymentProfileResetLoginRequest("at") {{
                clientId = "vero";
                secret = "est";
            }};            

            SandboxPaymentProfileResetLoginResponse res = sdk.plaid.sandboxPaymentProfileResetLogin(req);

            if (res.sandboxPaymentProfileResetLoginResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxProcessorTokenCreate

Use the `/sandbox/processor_token/create` endpoint to create a valid `processor_token` for an arbitrary institution ID and test credentials. The created `processor_token` corresponds to a new Sandbox Item. You can then use this `processor_token` with the `/processor/` API endpoints in Sandbox. You can also use `/sandbox/processor_token/create` with the [`user_custom` test username](https://plaid.com/docs/sandbox/user-custom) to generate a test account with custom data.

</api/sandbox/#sandboxprocessor_tokencreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxProcessorTokenCreateResponse;
import org.openapis.openapi.models.shared.SandboxProcessorTokenCreateRequest;
import org.openapis.openapi.models.shared.SandboxProcessorTokenCreateRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum", "sequi", "doloribus") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxProcessorTokenCreateRequest req = new SandboxProcessorTokenCreateRequest("repudiandae") {{
                clientId = "optio";
                options = new SandboxProcessorTokenCreateRequestOptions() {{
                    overridePassword = "occaecati";
                    overrideUsername = "nemo";
                }};;
                secret = "voluptate";
            }};            

            SandboxProcessorTokenCreateResponse res = sdk.plaid.sandboxProcessorTokenCreate(req);

            if (res.sandboxProcessorTokenCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxPublicTokenCreate

Use the `/sandbox/public_token/create` endpoint to create a valid `public_token`  for an arbitrary institution ID, initial products, and test credentials. The created `public_token` maps to a new Sandbox Item. You can then call `/item/public_token/exchange` to exchange the `public_token` for an `access_token` and perform all API actions. `/sandbox/public_token/create` can also be used with the [`user_custom` test username](https://plaid.com/docs/sandbox/user-custom) to generate a test account with custom data. `/sandbox/public_token/create` cannot be used with OAuth institutions.

</api/sandbox/#sandboxpublic_tokencreate>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxPublicTokenCreateResponse;
import org.openapis.openapi.models.shared.IncomeVerificationSourceTypeEnum;
import org.openapis.openapi.models.shared.ProductsEnum;
import org.openapis.openapi.models.shared.SandboxPublicTokenCreateRequest;
import org.openapis.openapi.models.shared.SandboxPublicTokenCreateRequestIncomeVerificationBankIncome;
import org.openapis.openapi.models.shared.SandboxPublicTokenCreateRequestOptions;
import org.openapis.openapi.models.shared.SandboxPublicTokenCreateRequestOptionsIncomeVerification;
import org.openapis.openapi.models.shared.SandboxPublicTokenCreateRequestOptionsTransactions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis", "officia", "voluptas") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxPublicTokenCreateRequest req = new SandboxPublicTokenCreateRequest(                new org.openapis.openapi.models.shared.ProductsEnum[]{{
                                add(ProductsEnum.PAYMENT_INITIATION),
                                add(ProductsEnum.CREDIT_DETAILS),
                            }}, "eius") {{
                clientId = "aspernatur";
                options = new SandboxPublicTokenCreateRequestOptions() {{
                    incomeVerification = new SandboxPublicTokenCreateRequestOptionsIncomeVerification() {{
                        bankIncome = new SandboxPublicTokenCreateRequestIncomeVerificationBankIncome() {{
                            daysRequested = 495970L;
                        }};;
                        incomeSourceTypes = new org.openapis.openapi.models.shared.IncomeVerificationSourceTypeEnum[]{{
                            add(IncomeVerificationSourceTypeEnum.PAYROLL),
                        }};
                    }};;
                    overridePassword = "laudantium";
                    overrideUsername = "incidunt";
                    transactions = new SandboxPublicTokenCreateRequestOptionsTransactions() {{
                        endDate = LocalDate.parse("2022-06-23");
                        startDate = LocalDate.parse("2022-08-25");
                    }};;
                    webhook = "nisi";
                }};;
                secret = "consequuntur";
                userToken = "consectetur";
            }};            

            SandboxPublicTokenCreateResponse res = sdk.plaid.sandboxPublicTokenCreate(req);

            if (res.sandboxPublicTokenCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxTransferFireWebhook

Use the `/sandbox/transfer/fire_webhook` endpoint to manually trigger a Transfer webhook in the Sandbox environment.

</api/sandbox/#sandboxtransferfire_webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxTransferFireWebhookResponse;
import org.openapis.openapi.models.shared.SandboxTransferFireWebhookRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam", "cupiditate", "reiciendis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxTransferFireWebhookRequest req = new SandboxTransferFireWebhookRequest("soluta") {{
                clientId = "alias";
                secret = "omnis";
            }};            

            SandboxTransferFireWebhookResponse res = sdk.plaid.sandboxTransferFireWebhook(req);

            if (res.sandboxTransferFireWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxTransferRepaymentSimulate

Use the `/sandbox/transfer/repayment/simulate` endpoint to trigger the creation of a repayment. As a side effect of calling this route, a repayment is created that includes all unreimbursed returns of guaranteed transfers. If there are no such returns, an 400 error is returned.

</api/sandbox/#sandboxtransferrepaymentsimulate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxTransferRepaymentSimulateResponse;
import org.openapis.openapi.models.shared.SandboxTransferRepaymentSimulateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos", "occaecati", "iste") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxTransferRepaymentSimulateRequest req = new SandboxTransferRepaymentSimulateRequest() {{
                clientId = "magni";
                secret = "inventore";
            }};            

            SandboxTransferRepaymentSimulateResponse res = sdk.plaid.sandboxTransferRepaymentSimulate(req);

            if (res.sandboxTransferRepaymentSimulateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxTransferSimulate

Use the `/sandbox/transfer/simulate` endpoint to simulate a transfer event in the Sandbox environment.  Note that while an event will be simulated and will appear when using endpoints such as `/transfer/event/sync` or `/transfer/event/list`, no transactions will actually take place and funds will not move between accounts, even within the Sandbox.

</api/sandbox/#sandboxtransfersimulate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxTransferSimulateResponse;
import org.openapis.openapi.models.shared.SandboxTransferSimulateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga", "accusamus", "voluptatibus") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxTransferSimulateRequest req = new SandboxTransferSimulateRequest("distinctio", "omnis") {{
                clientId = "delectus";
                failureReason = new java.util.HashMap<String, Object>() {{
                    put("praesentium", "maxime");
                    put("magnam", "temporibus");
                }};
                secret = "quos";
            }};            

            SandboxTransferSimulateResponse res = sdk.plaid.sandboxTransferSimulate(req);

            if (res.sandboxTransferSimulateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxTransferSweepSimulate

Use the `/sandbox/transfer/sweep/simulate` endpoint to create a sweep and associated events in the Sandbox environment. Upon calling this endpoint, all `posted` or `pending` transfers with a sweep status of `unswept` will become `swept`, and all `returned` transfers with a sweep status of `swept` will become `return_swept`.

</api/sandbox/#sandboxtransfersweepsimulate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxTransferSweepSimulateResponse;
import org.openapis.openapi.models.shared.SandboxTransferSweepSimulateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi", "itaque", "commodi") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxTransferSweepSimulateRequest req = new SandboxTransferSweepSimulateRequest() {{
                clientId = "totam";
                secret = "earum";
            }};            

            SandboxTransferSweepSimulateResponse res = sdk.plaid.sandboxTransferSweepSimulate(req);

            if (res.sandboxTransferSweepSimulateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxTransferTestClockAdvanceResponse;
import org.openapis.openapi.models.shared.SandboxTransferTestClockAdvanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi", "nam", "vero") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxTransferTestClockAdvanceRequest req = new SandboxTransferTestClockAdvanceRequest(OffsetDateTime.parse("2022-08-18T05:59:29.635Z"), "vel") {{
                clientId = "alias";
                secret = "quasi";
            }};            

            SandboxTransferTestClockAdvanceResponse res = sdk.plaid.sandboxTransferTestClockAdvance(req);

            if (res.sandboxTransferTestClockAdvanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxTransferTestClockCreate

Use the `/sandbox/transfer/test_clock/create` endpoint to create a `test_clock` in the Sandbox environment.

A test clock object represents an independent timeline and has a `virtual_time` field indicating the current timestamp of the timeline. Test clocks are used for testing recurring transfers in Sandbox.

A test clock can be associated with up to 5 recurring transfers.

</api/sandbox/#sandboxtransfertest_clockcreate>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxTransferTestClockCreateResponse;
import org.openapis.openapi.models.shared.SandboxTransferTestClockCreateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non", "maiores", "enim") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxTransferTestClockCreateRequest req = new SandboxTransferTestClockCreateRequest(OffsetDateTime.parse("2021-04-14T02:13:07.391Z")) {{
                clientId = "deserunt";
                secret = "esse";
            }};            

            SandboxTransferTestClockCreateResponse res = sdk.plaid.sandboxTransferTestClockCreate(req);

            if (res.sandboxTransferTestClockCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxTransferTestClockGet

Use the `/sandbox/transfer/test_clock/get` endpoint to get a `test_clock` in the Sandbox environment.

</api/sandbox/#sandboxtransfertest_clockget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxTransferTestClockGetResponse;
import org.openapis.openapi.models.shared.SandboxTransferTestClockGetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo", "reprehenderit", "est") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxTransferTestClockGetRequest req = new SandboxTransferTestClockGetRequest("quis") {{
                clientId = "sint";
                secret = "accusamus";
            }};            

            SandboxTransferTestClockGetResponse res = sdk.plaid.sandboxTransferTestClockGet(req);

            if (res.sandboxTransferTestClockGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sandboxTransferTestClockList

Use the `/sandbox/transfer/test_clock/list` endpoint to see a list of all your test clocks in the Sandbox environment, by ascending `virtual_time`. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired test clocks.

</api/sandbox/#sandboxtransfertest_clocklist>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SandboxTransferTestClockListResponse;
import org.openapis.openapi.models.shared.SandboxTransferTestClockListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit", "hic", "necessitatibus") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SandboxTransferTestClockListRequest req = new SandboxTransferTestClockListRequest() {{
                clientId = "asperiores";
                count = 404306L;
                endVirtualTime = OffsetDateTime.parse("2022-02-08T04:46:36.382Z");
                offset = 966148L;
                secret = "quae";
                startVirtualTime = OffsetDateTime.parse("2020-12-11T09:39:15.481Z");
            }};            

            SandboxTransferTestClockListResponse res = sdk.plaid.sandboxTransferTestClockList(req);

            if (res.sandboxTransferTestClockListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signalDecisionReport

After calling `/signal/evaluate`, call `/signal/decision/report` to report whether the transaction was initiated. This endpoint will return an [`INVALID_FIELD`](/docs/errors/invalid-request/#invalid_field) error if called a second time with a different value for `initiated`.

</api/products/signal#signaldecisionreport>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignalDecisionReportResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SignalDecisionOutcomeEnum;
import org.openapis.openapi.models.shared.SignalDecisionReportRequest;
import org.openapis.openapi.models.shared.SignalPaymentMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum", "consectetur", "velit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SignalDecisionReportRequest req = new SignalDecisionReportRequest("atque", false) {{
                amountInstantlyAvailable = 2164.57;
                clientId = "impedit";
                daysFundsOnHold = 166047L;
                decisionOutcome = SignalDecisionOutcomeEnum.TAKE_OTHER_RISK_MEASURES;
                paymentMethod = SignalPaymentMethodEnum.MULTIPLE_PAYMENT_METHODS;
                secret = "nam";
            }};            

            SignalDecisionReportResponse res = sdk.plaid.signalDecisionReport(req);

            if (res.signalDecisionReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signalEvaluate

Use `/signal/evaluate` to evaluate a planned ACH transaction to get a return risk assessment (such as a risk score and risk tier) and additional risk signals.

In order to obtain a valid score for an ACH transaction, Plaid must have an access token for the account, and the Item must be healthy (receiving product updates) or have recently been in a healthy state. If the transaction does not meet eligibility requirements, an error will be returned corresponding to the underlying cause. If `/signal/evaluate` is called on the same transaction multiple times within a 24-hour period, cached results may be returned. For more information please refer to the error documentation on [Item errors](/docs/errors/item/) and [Link in Update Mode](/docs/link/update-mode/).

Note: This request may take some time to complete if Signal is being added to an existing Item. This is because Plaid must communicate directly with the institution when retrieving the data for the first time.

</api/products/signal#signalevaluate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignalEvaluateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SignalDevice;
import org.openapis.openapi.models.shared.SignalEvaluateRequest;
import org.openapis.openapi.models.shared.SignalPersonName;
import org.openapis.openapi.models.shared.SignalUser;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore", "iusto", "voluptate") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SignalEvaluateRequest req = new SignalEvaluateRequest("sequi", "dignissimos", 2055.66, "quo") {{
                clientId = "deleniti";
                clientUserId = "quibusdam";
                defaultPaymentMethod = "iure";
                device = new SignalDevice() {{
                    ipAddress = "odit";
                    userAgent = "voluptatibus";
                }};;
                isRecurring = false;
                secret = "vel";
                user = new SignalUser() {{
                    address = new java.util.HashMap<String, Object>() {{
                        put("quibusdam", "inventore");
                        put("facere", "libero");
                    }};
                    emailAddress = "architecto";
                    name = new SignalPersonName() {{
                        familyName = "voluptatibus";
                        givenName = "quia";
                        middleName = "porro";
                        prefix = "aliquam";
                        suffix = "velit";
                    }};;
                    phoneNumber = "illo";
                }};;
                userPresent = false;
            }};            

            SignalEvaluateResponse res = sdk.plaid.signalEvaluate(req);

            if (res.signalEvaluateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signalPrepare

When Link is not initialized with Signal, call `/signal/prepare` to opt-in that Item to the Signal data collection process, developing a Signal score.

If you are using other Plaid products after Link, e.g. Identity or Assets, call `/signal/prepare` after those product calls are complete.

Example flow: Link is initialized with Auth, call `/auth/get` for the account and routing number, call `/identity/get` to retrieve bank ownership details, then call `/signal/prepare` to begin Signal data collection. Later, once you have obtained details about the proposed transaction from the user, call `/signal/evaluate` for a Signal score. For more information please see [Recommendations for initializing Link with specific product combinations](https://www.plaid.com/docs/link/initializing-products/#recommendations-for-initializing-link-with-specific-product-combinations).

</api/products/signal#signalprepare>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignalPrepareResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SignalPrepareRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium", "vel", "ea") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SignalPrepareRequest req = new SignalPrepareRequest("beatae") {{
                clientId = "vero";
                secret = "excepturi";
            }};            

            SignalPrepareResponse res = sdk.plaid.signalPrepare(req);

            if (res.signalPrepareResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signalReturnReport

Call the `/signal/return/report` endpoint to report a returned transaction that was previously sent to the `/signal/evaluate` endpoint. Your feedback will be used by the model to incorporate the latest risk trend in your portfolio.

</api/products/signal#signalreturnreport>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignalReturnReportResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SignalReturnReportRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum", "velit", "ut") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SignalReturnReportRequest req = new SignalReturnReportRequest("perspiciatis", "earum") {{
                clientId = "dicta";
                returnedAt = OffsetDateTime.parse("2020-01-28T09:46:18.788Z");
                secret = "iste";
            }};            

            SignalReturnReportResponse res = sdk.plaid.signalReturnReport(req);

            if (res.signalReturnReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transactionsEnhance

The `/beta/transactions/v1/enhance` endpoint enriches raw transaction data provided directly by clients.

The product is currently in beta.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransactionsEnhanceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransactionsEnhanceGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque", "alias", "nisi") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransactionsEnhanceGetRequest req = new TransactionsEnhanceGetRequest("itaque",                 new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("non", "dolor");
                                    put("iusto", "sit");
                                    put("doloremque", "consequatur");
                                }}),
                            }}) {{
                clientId = "officia";
                secret = "recusandae";
            }};            

            TransactionsEnhanceResponse res = sdk.plaid.transactionsEnhance(req);

            if (res.transactionsEnhanceGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transactionsEnrich

The `/transactions/enrich` endpoint enriches raw transaction data generated by your own banking products or retrieved from other non-Plaid sources.

To request access to Enrich, reach out to your Plaid point of contact or send a note to enrich-feedback@plaid.com

</api/products/enrich/#transactionsenrich>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransactionsEnrichResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransactionsEnrichGetRequest;
import org.openapis.openapi.models.shared.TransactionsEnrichRequestOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea", "quidem", "voluptas") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransactionsEnrichGetRequest req = new TransactionsEnrichGetRequest("facilis",                 new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("expedita", "deleniti");
                                    put("a", "voluptate");
                                    put("ullam", "unde");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("animi", "impedit");
                                    put("ipsam", "corporis");
                                    put("est", "error");
                                    put("esse", "labore");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("vero", "consectetur");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("inventore", "dolorem");
                                }}),
                            }}) {{
                clientId = "ad";
                options = new TransactionsEnrichRequestOptions() {{
                    includeLegacyCategory = false;
                }};;
                secret = "qui";
            }};            

            TransactionsEnrichResponse res = sdk.plaid.transactionsEnrich(req);

            if (res.transactionsEnrichGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransactionsGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransactionsGetRequest;
import org.openapis.openapi.models.shared.TransactionsGetRequestOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste", "ex", "nemo") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransactionsGetRequest req = new TransactionsGetRequest("soluta", LocalDate.parse("2021-12-12"), LocalDate.parse("2022-01-09")) {{
                clientId = "fugit";
                options = new TransactionsGetRequestOptions() {{
                    accountIds = new String[]{{
                        add("magni"),
                    }};
                    count = 425402L;
                    includeLogoAndCounterpartyBeta = false;
                    includeOriginalDescription = false;
                    includePersonalFinanceCategory = false;
                    includePersonalFinanceCategoryBeta = false;
                    offset = 64435L;
                }};;
                secret = "quae";
            }};            

            TransactionsGetResponse res = sdk.plaid.transactionsGet(req);

            if (res.transactionsGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transactionsRecurringGet

The `/transactions/recurring/get` endpoint allows developers to receive a summary of the recurring outflow and inflow streams (expenses and deposits) from a user’s checking, savings or credit card accounts. Additionally, Plaid provides key insights about each recurring stream including the category, merchant, last amount, and more. Developers can use these insights to build tools and experiences that help their users better manage cash flow, monitor subscriptions, reduce spend, and stay on track with bill payments.

This endpoint is offered as an add-on to Transactions. To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.

This endpoint can only be called on an Item that has already been initialized with Transactions (either during Link, by specifying it in `/link/token/create`; or after Link, by calling `/transactions/get` or `/transactions/sync`). Once all historical transactions have been fetched, call `/transactions/recurring/get` to receive the Recurring Transactions streams and subscribe to the [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update) webhook. To know when historical transactions have been fetched, if you are using `/transactions/sync` listen for the [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#SyncUpdatesAvailableWebhook-historical-update-complete) webhook and check that the `historical_update_complete` field in the payload is `true`. If using `/transactions/get`, listen for the [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#historical_update) webhook.

After the initial call, you can call `/transactions/recurring/get` endpoint at any point in the future to retrieve the latest summary of recurring streams. Listen to the [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update) webhook to be notified when new updates are available.

</api/products/transactions/#transactionsrecurringget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransactionsRecurringGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransactionsRecurringGetRequest;
import org.openapis.openapi.models.shared.TransactionsRecurringGetRequestOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi", "neque", "exercitationem") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransactionsRecurringGetRequest req = new TransactionsRecurringGetRequest("itaque",                 new String[]{{
                                add("ipsum"),
                            }}) {{
                clientId = "unde";
                options = new TransactionsRecurringGetRequestOptions() {{
                    includePersonalFinanceCategory = false;
                }};;
                secret = "nulla";
            }};            

            TransactionsRecurringGetResponse res = sdk.plaid.transactionsRecurringGet(req);

            if (res.transactionsRecurringGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transactionsRefresh

`/transactions/refresh` is an optional endpoint for users of the Transactions product. It initiates an on-demand extraction to fetch the newest transactions for an Item. This on-demand extraction takes place in addition to the periodic extractions that automatically occur multiple times a day for any Transactions-enabled Item. If changes to transactions are discovered after calling `/transactions/refresh`, Plaid will fire a webhook: for `/transactions/sync` users, [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available) will be fired if there are any transactions updated, added, or removed. For users of both `/transactions/sync` and `/transactions/get`, [`TRANSACTIONS_REMOVED`](https://plaid.com/docs/api/products/transactions/#transactions_removed) will be fired if any removed transactions are detected, and [`DEFAULT_UPDATE`](https://plaid.com/docs/api/products/transactions/#default_update) will be fired if any new transactions are detected. New transactions can be fetched by calling `/transactions/get` or `/transactions/sync`. Note that the `/transactions/refresh` endpoint is not supported for Capital One (`ins_128026`) and will result in a `PRODUCT_NOT_SUPPORTED` error if called on an Item from that institution.

`/transactions/refresh` is offered as an add-on to Transactions and has a separate [fee model](/docs/account/billing/#per-request-flat-fee). To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.

</api/products/transactions/#transactionsrefresh>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransactionsRefreshResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransactionsRefreshRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "maxime", "quia") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransactionsRefreshRequest req = new TransactionsRefreshRequest("quia") {{
                clientId = "nostrum";
                secret = "omnis";
            }};            

            TransactionsRefreshResponse res = sdk.plaid.transactionsRefresh(req);

            if (res.transactionsRefreshResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transactionsRulesCreate

The `/transactions/rules/v1/create` endpoint creates transaction categorization rules.

Rules will be applied on the Item's transactions returned in `/transactions/get` response.

The product is currently in beta. To request access, contact transactions-feedback@plaid.com.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransactionsRulesCreateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransactionsRuleDetails;
import org.openapis.openapi.models.shared.TransactionsRuleFieldEnum;
import org.openapis.openapi.models.shared.TransactionsRuleTypeEnum;
import org.openapis.openapi.models.shared.TransactionsRulesCreateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero", "dicta", "id") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransactionsRulesCreateRequest req = new TransactionsRulesCreateRequest("libero", "fugiat",                 new TransactionsRuleDetails(TransactionsRuleFieldEnum.NAME, "quos", TransactionsRuleTypeEnum.SUBSTRING_MATCH);) {{
                clientId = "sit";
                secret = "iusto";
            }};            

            TransactionsRulesCreateResponse res = sdk.plaid.transactionsRulesCreate(req);

            if (res.transactionsRulesCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transactionsRulesList

The `/transactions/rules/v1/list` returns a list of transaction rules created for the Item associated with the access token.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransactionsRulesListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransactionsRulesListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa", "voluptates", "inventore") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransactionsRulesListRequest req = new TransactionsRulesListRequest("aperiam") {{
                clientId = "totam";
                secret = "dolore";
            }};            

            TransactionsRulesListResponse res = sdk.plaid.transactionsRulesList(req);

            if (res.transactionsRulesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transactionsRulesRemove

The `/transactions/rules/v1/remove` endpoint is used to remove a transaction rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransactionsRulesRemoveResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransactionsRulesRemoveRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi", "distinctio", "voluptatem") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransactionsRulesRemoveRequest req = new TransactionsRulesRemoveRequest("autem", "esse") {{
                clientId = "dolores";
                secret = "assumenda";
            }};            

            TransactionsRulesRemoveResponse res = sdk.plaid.transactionsRulesRemove(req);

            if (res.transactionsRulesRemoveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransactionsSyncResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransactionsSyncRequest;
import org.openapis.openapi.models.shared.TransactionsSyncRequestOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae", "est", "facere") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransactionsSyncRequest req = new TransactionsSyncRequest("corrupti") {{
                clientId = "molestiae";
                count = 588812L;
                cursor = "accusamus";
                options = new TransactionsSyncRequestOptions() {{
                    includeLogoAndCounterpartyBeta = false;
                    includeOriginalDescription = false;
                    includePersonalFinanceCategory = false;
                }};;
                secret = "necessitatibus";
            }};            

            TransactionsSyncResponse res = sdk.plaid.transactionsSync(req);

            if (res.transactionsSyncResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferAuthorizationCreateResponse;
import org.openapis.openapi.models.shared.ACHClassEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferAuthorizationCreateRequest;
import org.openapis.openapi.models.shared.TransferNetworkEnum;
import org.openapis.openapi.models.shared.TransferTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore", "sint", "ea") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferAuthorizationCreateRequest req = new TransferAuthorizationCreateRequest("autem", TransferNetworkEnum.SAME_DAY_ACH, TransferTypeEnum.CREDIT,                 new java.util.HashMap<String, Object>() {{
                                put("corporis", "officiis");
                                put("voluptatibus", "cum");
                                put("at", "alias");
                            }}) {{
                accessToken = "quia";
                accountId = "quidem";
                achClass = ACHClassEnum.TEL;
                beaconSessionId = "repudiandae";
                clientId = "accusantium";
                device = new java.util.HashMap<String, Object>() {{
                    put("officiis", "eos");
                    put("quibusdam", "odio");
                    put("praesentium", "odit");
                }};
                fundingAccountId = "explicabo";
                idempotencyKey = "corporis";
                isoCurrencyCode = "error";
                originationAccountId = "earum";
                originatorClientId = "adipisci";
                paymentProfileToken = "recusandae";
                secret = "similique";
                userPresent = false;
                withGuarantee = false;
            }};            

            TransferAuthorizationCreateResponse res = sdk.plaid.transferAuthorizationCreate(req);

            if (res.transferAuthorizationCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferCancel

Use the `/transfer/cancel` endpoint to cancel a transfer.  A transfer is eligible for cancellation if the `cancellable` property returned by `/transfer/get` is `true`.

</api/products/transfer/#transfercancel>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferCancelResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferCancelRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut", "quidem", "quis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferCancelRequest req = new TransferCancelRequest("beatae") {{
                clientId = "unde";
                originatorClientId = "molestiae";
                secret = "delectus";
            }};            

            TransferCancelResponse res = sdk.plaid.transferCancel(req);

            if (res.transferCancelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferCapabilitiesGet

Use the `/transfer/capabilities/get` endpoint to determine the RTP eligibility information of a transfer.

</api/products/transfer/#transfercapabilitiesget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferCapabilitiesGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferCapabilitiesGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate", "fugit", "numquam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferCapabilitiesGetRequest req = new TransferCapabilitiesGetRequest() {{
                accessToken = "numquam";
                accountId = "nesciunt";
                clientId = "at";
                paymentProfileToken = "officia";
                secret = "dignissimos";
            }};            

            TransferCapabilitiesGetResponse res = sdk.plaid.transferCapabilitiesGet(req);

            if (res.transferCapabilitiesGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferConfigurationGet

Use the `/transfer/configuration/get` endpoint to view your transfer product configurations.

</api/products/transfer/#transferconfigurationget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferConfigurationGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferConfigurationGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio", "necessitatibus", "corporis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferConfigurationGetRequest req = new TransferConfigurationGetRequest() {{
                clientId = "qui";
                originatorClientId = "expedita";
                secret = "voluptatum";
            }};            

            TransferConfigurationGetResponse res = sdk.plaid.transferConfigurationGet(req);

            if (res.transferConfigurationGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferCreate

Use the `/transfer/create` endpoint to initiate a new transfer.

</api/products/transfer/#transfercreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferCreateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferCreateRequest;
import org.openapis.openapi.models.shared.TransferCreateRequestACHClassEnum;
import org.openapis.openapi.models.shared.TransferCreateRequestTransferNetworkEnum;
import org.openapis.openapi.models.shared.TransferCreateRequestTransferTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate", "minima", "placeat") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferCreateRequest req = new TransferCreateRequest("enim", "neque") {{
                accessToken = "in";
                accountId = "minus";
                achClass = TransferCreateRequestACHClassEnum.PPD;
                amount = "modi";
                clientId = "corporis";
                idempotencyKey = "magnam";
                isoCurrencyCode = "voluptates";
                metadata = new java.util.HashMap<String, String>() {{
                    put("tempore", "aperiam");
                    put("libero", "ratione");
                    put("labore", "totam");
                    put("occaecati", "voluptas");
                }};
                network = TransferCreateRequestTransferNetworkEnum.RTP;
                originationAccountId = "velit";
                paymentProfileToken = "minus";
                secret = "fuga";
                type = TransferCreateRequestTransferTypeEnum.DEBIT;
                user = new java.util.HashMap<String, Object>() {{
                    put("impedit", "delectus");
                    put("tempore", "vero");
                    put("odit", "repellat");
                }};
            }};            

            TransferCreateResponse res = sdk.plaid.transferCreate(req);

            if (res.transferCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferEventList

Use the `/transfer/event/list` endpoint to get a list of transfer events based on specified filter criteria.

</api/products/transfer/#transfereventlist>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferEventListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferEventListRequest;
import org.openapis.openapi.models.shared.TransferEventListTransferTypeEnum;
import org.openapis.openapi.models.shared.TransferEventTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur", "nemo", "reprehenderit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferEventListRequest req = new TransferEventListRequest() {{
                accountId = "aperiam";
                clientId = "odio";
                count = 325297L;
                endDate = OffsetDateTime.parse("2022-07-03T15:01:36.008Z");
                eventTypes = new org.openapis.openapi.models.shared.TransferEventTypeEnum[]{{
                    add(TransferEventTypeEnum.CANCELLED),
                    add(TransferEventTypeEnum.RETURNED),
                    add(TransferEventTypeEnum.PENDING),
                }};
                fundingAccountId = "ducimus";
                offset = 452729L;
                originationAccountId = "pariatur";
                originatorClientId = "itaque";
                secret = "similique";
                startDate = OffsetDateTime.parse("2021-10-18T10:28:23.665Z");
                sweepId = "quaerat";
                transferId = "commodi";
                transferType = TransferEventListTransferTypeEnum.LESS_THAN_NIL_GREATER_THAN;
            }};            

            TransferEventListResponse res = sdk.plaid.transferEventList(req);

            if (res.transferEventListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferEventSync

`/transfer/event/sync` allows you to request up to the next 25 transfer events that happened after a specific `event_id`. Use the `/transfer/event/sync` endpoint to guarantee you have seen all transfer events. When using Auth with micro-deposit verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits. For more details, see [micro-deposit events](https://www.plaid.com/docs/auth/coverage/microdeposit-events/).

</api/products/transfer/#transfereventsync>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferEventSyncResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferEventSyncRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat", "quidem", "exercitationem") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferEventSyncRequest req = new TransferEventSyncRequest(463344L) {{
                clientId = "dolorem";
                count = 264619L;
                secret = "ipsa";
            }};            

            TransferEventSyncResponse res = sdk.plaid.transferEventSync(req);

            if (res.transferEventSyncResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferGet

The `/transfer/get` endpoint fetches information about the transfer corresponding to the given `transfer_id`.

</api/products/transfer/#transferget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint", "vero", "sequi") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferGetRequest req = new TransferGetRequest("repudiandae") {{
                clientId = "cum";
                originatorClientId = "dicta";
                secret = "earum";
            }};            

            TransferGetResponse res = sdk.plaid.transferGet(req);

            if (res.transferGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferIntentCreate

Use the `/transfer/intent/create` endpoint to generate a transfer intent object and invoke the Transfer UI.

</api/products/transfer/#transferintentcreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferIntentCreateResponse;
import org.openapis.openapi.models.shared.ACHClassEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferIntentCreateModeEnum;
import org.openapis.openapi.models.shared.TransferIntentCreateNetworkEnum;
import org.openapis.openapi.models.shared.TransferIntentCreateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam", "animi", "dolores") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferIntentCreateRequest req = new TransferIntentCreateRequest("nam", "dicta", TransferIntentCreateModeEnum.PAYMENT,                 new java.util.HashMap<String, Object>() {{
                                put("nobis", "ipsa");
                                put("ducimus", "maiores");
                                put("veritatis", "quasi");
                                put("laboriosam", "pariatur");
                            }}) {{
                accountId = "libero";
                achClass = ACHClassEnum.TEL;
                clientId = "occaecati";
                fundingAccountId = "nemo";
                isoCurrencyCode = "aliquam";
                metadata = new java.util.HashMap<String, String>() {{
                    put("doloribus", "eligendi");
                    put("sint", "enim");
                }};
                network = TransferIntentCreateNetworkEnum.SAME_DAY_ACH;
                originationAccountId = "animi";
                requireGuarantee = false;
                secret = "quas";
            }};            

            TransferIntentCreateResponse res = sdk.plaid.transferIntentCreate(req);

            if (res.transferIntentCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferIntentGet

Use the `/transfer/intent/get` endpoint to retrieve more information about a transfer intent.

</api/products/transfer/#transferintentget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferIntentGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam", "molestias", "odio") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("saepe", "architecto");
            }}            

            TransferIntentGetResponse res = sdk.plaid.transferIntentGet(req);

            if (res.transferIntentGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferList

Use the `/transfer/list` endpoint to see a list of all your transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired transfers.


</api/products/transfer/#transferlist>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos", "iste", "assumenda") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferListRequest req = new TransferListRequest() {{
                clientId = "tempore";
                count = 725574L;
                endDate = OffsetDateTime.parse("2022-12-17T22:14:17.851Z");
                fundingAccountId = "delectus";
                offset = 773110L;
                originationAccountId = "cum";
                originatorClientId = "ipsum";
                secret = "adipisci";
                startDate = OffsetDateTime.parse("2021-01-25T08:38:05.276Z");
            }};            

            TransferListResponse res = sdk.plaid.transferList(req);

            if (res.transferListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferMetricsGet

Use the `/transfer/metrics/get` endpoint to view your transfer product usage metrics.

</api/products/transfer/#transfermetricsget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferMetricsGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferMetricsGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque", "quis", "veniam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferMetricsGetRequest req = new TransferMetricsGetRequest() {{
                clientId = "libero";
                originatorClientId = "architecto";
                secret = "cupiditate";
            }};            

            TransferMetricsGetResponse res = sdk.plaid.transferMetricsGet(req);

            if (res.transferMetricsGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferMigrateAccount

As an alternative to adding Items via Link, you can also use the `/transfer/migrate_account` endpoint to migrate known account and routing numbers to Plaid Items.  Note that Items created in this way are not compatible with endpoints for other products, such as `/accounts/balance/get`, and can only be used with Transfer endpoints.  If you require access to other endpoints, create the Item through Link instead.  Access to `/transfer/migrate_account` is not enabled by default; to obtain access, contact your Plaid Account Manager.

</api/products/transfer/#transfermigrate_account>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferMigrateAccountResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferMigrateAccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae", "eligendi", "possimus") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferMigrateAccountRequest req = new TransferMigrateAccountRequest("non", "magnam", "itaque") {{
                clientId = "sed";
                secret = "asperiores";
                wireRoutingNumber = "veniam";
            }};            

            TransferMigrateAccountResponse res = sdk.plaid.transferMigrateAccount(req);

            if (res.transferMigrateAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferOriginatorCreate

Use the `/transfer/originator/create` endpoint to create a new originator and return an `originator_client_id`.

</api/products/transfer/#transferoriginatorcreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferOriginatorCreateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferOriginatorCreateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur", "facere", "laudantium") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferOriginatorCreateRequest req = new TransferOriginatorCreateRequest("odit") {{
                clientId = "pariatur";
                secret = "amet";
            }};            

            TransferOriginatorCreateResponse res = sdk.plaid.transferOriginatorCreate(req);

            if (res.transferOriginatorCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferOriginatorGetJson

The `/transfer/originator/get` endpoint gets status updates for an originator's onboarding process. This information is also available via the Transfer page on the Plaid dashboard.

</api/products/transfer/#transferoriginatorget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferOriginatorGetJsonResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferOriginatorGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem", "ab", "velit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferOriginatorGetRequest req = new TransferOriginatorGetRequest("facilis") {{
                clientId = "tempore";
                secret = "nisi";
            }};            

            TransferOriginatorGetJsonResponse res = sdk.plaid.transferOriginatorGetJson(req);

            if (res.transferOriginatorGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferOriginatorGetRaw

The `/transfer/originator/get` endpoint gets status updates for an originator's onboarding process. This information is also available via the Transfer page on the Plaid dashboard.

</api/products/transfer/#transferoriginatorget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferOriginatorGetRawResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus", "quaerat", "blanditiis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = "distinctio".getBytes()            

            TransferOriginatorGetRawResponse res = sdk.plaid.transferOriginatorGetRaw(req);

            if (res.transferOriginatorGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferOriginatorList

The `/transfer/originator/list` endpoint gets status updates for all of your originators' onboarding. This information is also available via the Plaid dashboard.

</api/products/transfer/#transferoriginatorlist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferOriginatorListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferOriginatorListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi", "quis", "nisi") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferOriginatorListRequest req = new TransferOriginatorListRequest() {{
                clientId = "libero";
                count = 794507L;
                offset = 815200L;
                secret = "facilis";
            }};            

            TransferOriginatorListResponse res = sdk.plaid.transferOriginatorList(req);

            if (res.transferOriginatorListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferQuestionnaireCreate

The `/transfer/questionnaire/create` endpoint generates a Plaid-hosted onboarding UI URL. Redirect the originator to this URL to provide their due diligence information and agree to Plaid’s terms for ACH money movement.

</api/products/transfer/#transferquestionnairecreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferQuestionnaireCreateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferQuestionnaireCreateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum", "ad", "voluptatibus") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferQuestionnaireCreateRequest req = new TransferQuestionnaireCreateRequest("voluptatibus", "consequuntur") {{
                clientId = "debitis";
                secret = "labore";
            }};            

            TransferQuestionnaireCreateResponse res = sdk.plaid.transferQuestionnaireCreate(req);

            if (res.transferQuestionnaireCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferRecurringCancel

Use the `/transfer/recurring/cancel` endpoint to cancel a recurring transfer.  Scheduled transfer that hasn't been submitted to bank will be cancelled.

</api/products/transfer/#transferrecurringcancel>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferRecurringCancelResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferRecurringCancelRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum", "eos", "reprehenderit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferRecurringCancelRequest req = new TransferRecurringCancelRequest("nostrum") {{
                clientId = "neque";
                secret = "iusto";
            }};            

            TransferRecurringCancelResponse res = sdk.plaid.transferRecurringCancel(req);

            if (res.transferRecurringCancelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferRecurringCreate

Use the `/transfer/recurring/create` endpoint to initiate a new recurring transfer.

</api/products/transfer/#transferrecurringcreate>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferRecurringCreateResponse;
import org.openapis.openapi.models.shared.ACHClassEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferNetworkEnum;
import org.openapis.openapi.models.shared.TransferRecurringCreateRequest;
import org.openapis.openapi.models.shared.TransferRecurringSchedule;
import org.openapis.openapi.models.shared.TransferScheduleIntervalUnitEnum;
import org.openapis.openapi.models.shared.TransferTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est", "rem", "eligendi") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferRecurringCreateRequest req = new TransferRecurringCreateRequest("fugiat", "unde", "officiis", "ducimus",                 new java.util.HashMap<String, Object>() {{
                                put("dicta", "error");
                            }}, "porro", TransferNetworkEnum.ACH,                 new TransferRecurringSchedule(491591L, 458970L, TransferScheduleIntervalUnitEnum.MONTH, LocalDate.parse("2022-11-12")) {{
                                endDate = LocalDate.parse("2022-01-13");
                            }};, TransferTypeEnum.DEBIT,                 new java.util.HashMap<String, Object>() {{
                                put("libero", "illo");
                                put("ab", "incidunt");
                            }}, false) {{
                achClass = ACHClassEnum.WEB;
                clientId = "saepe";
                fundingAccountId = "tempore";
                isoCurrencyCode = "veniam";
                secret = "eos";
                testClockId = "reiciendis";
            }};            

            TransferRecurringCreateResponse res = sdk.plaid.transferRecurringCreate(req);

            if (res.transferRecurringCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferRecurringGet

The `/transfer/recurring/get` fetches information about the recurring transfer corresponding to the given `recurring_transfer_id`.

</api/products/transfer/#transferrecurringget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferRecurringGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferRecurringGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum", "reprehenderit", "praesentium") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferRecurringGetRequest req = new TransferRecurringGetRequest("nemo") {{
                clientId = "repellat";
                secret = "quisquam";
            }};            

            TransferRecurringGetResponse res = sdk.plaid.transferRecurringGet(req);

            if (res.transferRecurringGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferRecurringList

Use the `/transfer/recurring/list` endpoint to see a list of all your recurring transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired recurring transfers.


</api/products/transfer/#transferrecurringlist>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferRecurringListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferRecurringListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi", "nihil", "deleniti") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferRecurringListRequest req = new TransferRecurringListRequest() {{
                clientId = "illo";
                count = 290248L;
                endTime = OffsetDateTime.parse("2022-02-01T22:19:07.437Z");
                fundingAccountId = "quisquam";
                offset = 591065L;
                secret = "laudantium";
                startTime = OffsetDateTime.parse("2022-12-21T09:31:19.686Z");
            }};            

            TransferRecurringListResponse res = sdk.plaid.transferRecurringList(req);

            if (res.transferRecurringListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferRefundCancel

Use the `/transfer/refund/cancel` endpoint to cancel a refund.  A refund is eligible for cancellation if it has not yet been submitted to the payment network.

</api/products/transfer/#transferrefundcancel>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferRefundCancelResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferRefundCancelRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime", "aspernatur", "nam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferRefundCancelRequest req = new TransferRefundCancelRequest("expedita") {{
                clientId = "quas";
                secret = "provident";
            }};            

            TransferRefundCancelResponse res = sdk.plaid.transferRefundCancel(req);

            if (res.transferRefundCancelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferRefundCreate

Use the `/transfer/refund/create` endpoint to create a refund for a transfer. A transfer can be refunded if the transfer was initiated in the past 180 days.

Processing of the refund will not occur until at least 3 business days following the transfer's settlement date, plus any hold/settlement delays. This 3-day window helps better protect your business from regular ACH returns. Consumer initiated returns (unauthorized returns) could still happen for about 60 days from the settlement date. If the original transfer is canceled, returned or failed, all pending refunds will automatically be canceled. Processed refunds cannot be revoked.

</api/products/transfer/#transferrefundcreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferRefundCreateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferRefundCreateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae", "rerum", "dignissimos") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferRefundCreateRequest req = new TransferRefundCreateRequest("corporis", "vero", "similique") {{
                clientId = "repellendus";
                secret = "iure";
            }};            

            TransferRefundCreateResponse res = sdk.plaid.transferRefundCreate(req);

            if (res.transferRefundCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferRefundGet

The `/transfer/refund/get` endpoint fetches information about the refund corresponding to the given `refund_id`.

</api/products/transfer/#transferrefundget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferRefundGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferRefundGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem", "commodi", "impedit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferRefundGetRequest req = new TransferRefundGetRequest("commodi") {{
                clientId = "aut";
                secret = "voluptatem";
            }};            

            TransferRefundGetResponse res = sdk.plaid.transferRefundGet(req);

            if (res.transferRefundGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferRepaymentList

The `/transfer/repayment/list` endpoint fetches repayments matching the given filters. Repayments are returned in reverse-chronological order (most recent first) starting at the given `start_time`.

</api/products/transfer/#transferrepaymentlist>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferRepaymentListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferRepaymentListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad", "quae", "amet") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferRepaymentListRequest req = new TransferRepaymentListRequest() {{
                clientId = "illum";
                count = 506863L;
                endDate = OffsetDateTime.parse("2021-07-12T02:19:57.085Z");
                offset = 230411L;
                secret = "quasi";
                startDate = OffsetDateTime.parse("2022-06-27T01:16:52.839Z");
            }};            

            TransferRepaymentListResponse res = sdk.plaid.transferRepaymentList(req);

            if (res.transferRepaymentListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferRepaymentReturnList

The `/transfer/repayment/return/list` endpoint retrieves the set of returns that were batched together into the specified repayment. The sum of amounts of returns retrieved by this request equals the amount of the repayment.

</api/products/transfer/#transferrepaymentreturnlist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferRepaymentReturnListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferRepaymentReturnListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque", "earum", "iusto") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferRepaymentReturnListRequest req = new TransferRepaymentReturnListRequest("amet") {{
                clientId = "provident";
                count = 677141L;
                offset = 897956L;
                secret = "provident";
            }};            

            TransferRepaymentReturnListResponse res = sdk.plaid.transferRepaymentReturnList(req);

            if (res.transferRepaymentReturnListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferSweepGet

The `/transfer/sweep/get` endpoint fetches a sweep corresponding to the given `sweep_id`.

</api/products/transfer/#transfersweepget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferSweepGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferSweepGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae", "consequatur", "nemo") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferSweepGetRequest req = new TransferSweepGetRequest("molestiae") {{
                clientId = "itaque";
                secret = "facilis";
            }};            

            TransferSweepGetResponse res = sdk.plaid.transferSweepGet(req);

            if (res.transferSweepGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferSweepList

The `/transfer/sweep/list` endpoint fetches sweeps matching the given filters.

</api/products/transfer/#transfersweeplist>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferSweepListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferSweepListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "aperiam", "sint") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TransferSweepListRequest req = new TransferSweepListRequest() {{
                clientId = "accusamus";
                count = 178635L;
                endDate = OffsetDateTime.parse("2022-10-08T10:06:25.237Z");
                fundingAccountId = "voluptatem";
                offset = 244376L;
                originatorClientId = "dolor";
                secret = "sunt";
                startDate = OffsetDateTime.parse("2022-05-01T11:53:41.043Z");
            }};            

            TransferSweepListResponse res = sdk.plaid.transferSweepList(req);

            if (res.transferSweepListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCreate

This endpoint should be called for each of your end users before they begin a Plaid income flow. This provides you a single token to access all income data associated with the user. You should only create one per end user.

If you call the endpoint multiple times with the same `client_user_id`, the first creation call will succeed and the rest will fail with an error message indicating that the user has been created for the given `client_user_id`.

Ensure that you store the `user_token` along with your user's identifier in your database, as it is not possible to retrieve a previously created `user_token`.

</api/products/income/#usercreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCreateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserCreateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "atque", "beatae") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.UserCreateRequest req = new UserCreateRequest("at") {{
                clientId = "labore";
                secret = "minus";
            }};            

            UserCreateResponse res = sdk.plaid.userCreate(req);

            if (res.userCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## walletCreate

Create an e-wallet. The response is the newly created e-wallet object.

</api/products/virtual-accounts/#walletcreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WalletCreateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WalletCreateRequest;
import org.openapis.openapi.models.shared.WalletISOCurrencyCodeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "voluptatem", "perferendis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WalletCreateRequest req = new WalletCreateRequest(WalletISOCurrencyCodeEnum.EUR) {{
                clientId = "ea";
                secret = "aperiam";
            }};            

            WalletCreateResponse res = sdk.plaid.walletCreate(req);

            if (res.walletCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## walletGet

Fetch an e-wallet. The response includes the current balance.

</api/products/virtual-accounts/#walletget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WalletGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WalletGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos", "repellat", "velit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WalletGetRequest req = new WalletGetRequest("porro") {{
                clientId = "provident";
                secret = "consectetur";
            }};            

            WalletGetResponse res = sdk.plaid.walletGet(req);

            if (res.walletGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## walletList

This endpoint lists all e-wallets in descending order of creation.

</api/products/virtual-accounts/#walletlist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WalletListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WalletISOCurrencyCodeEnum;
import org.openapis.openapi.models.shared.WalletListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi", "dignissimos", "consectetur") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WalletListRequest req = new WalletListRequest() {{
                clientId = "soluta";
                count = 620500L;
                cursor = "temporibus";
                isoCurrencyCode = WalletISOCurrencyCodeEnum.EUR;
                secret = "amet";
            }};            

            WalletListResponse res = sdk.plaid.walletList(req);

            if (res.walletListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## walletTransactionExecute

Execute a transaction using the specified e-wallet.
Specify the e-wallet to debit from, the counterparty to credit to, the idempotency key to prevent duplicate transactions, the amount and reference for the transaction.
Transactions will settle in seconds to several days, depending on the underlying payment rail.

</api/products/virtual-accounts/#wallettransactionexecute>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WalletTransactionExecuteResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WalletTransactionExecuteRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur", "aspernatur", "quo") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WalletTransactionExecuteRequest req = new WalletTransactionExecuteRequest(                new java.util.HashMap<String, Object>() {{
                                put("illum", "laborum");
                                put("dignissimos", "vero");
                                put("qui", "consectetur");
                                put("repellat", "explicabo");
                            }},                 new java.util.HashMap<String, Object>() {{
                                put("exercitationem", "nihil");
                            }}, "non", "ab", "illo") {{
                clientId = "hic";
                secret = "deserunt";
            }};            

            WalletTransactionExecuteResponse res = sdk.plaid.walletTransactionExecute(req);

            if (res.walletTransactionExecuteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## walletTransactionGet

Fetch a specific e-wallet transaction

</api/products/virtual-accounts/#wallettransactionget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WalletTransactionGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WalletTransactionGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus", "non", "distinctio") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WalletTransactionGetRequest req = new WalletTransactionGetRequest("in") {{
                clientId = "exercitationem";
                secret = "labore";
            }};            

            WalletTransactionGetResponse res = sdk.plaid.walletTransactionGet(req);

            if (res.walletTransactionGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## walletTransactionList

This endpoint lists the latest transactions of the specified e-wallet. Transactions are returned in descending order by the `created_at` time.

</api/products/virtual-accounts/#wallettransactionlist>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WalletTransactionListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WalletTransactionListRequest;
import org.openapis.openapi.models.shared.WalletTransactionListRequestOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam", "repudiandae", "modi") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WalletTransactionListRequest req = new WalletTransactionListRequest("in") {{
                clientId = "explicabo";
                count = 879857L;
                cursor = "rem";
                options = new WalletTransactionListRequestOptions() {{
                    endTime = OffsetDateTime.parse("2022-11-10T05:40:49.537Z");
                    startTime = OffsetDateTime.parse("2022-05-14T18:52:42.885Z");
                }};;
                secret = "voluptate";
            }};            

            WalletTransactionListResponse res = sdk.plaid.walletTransactionList(req);

            if (res.walletTransactionListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningEntityCreate

Create a new entity watchlist screening to check your customer against watchlists defined in the associated entity watchlist program. If your associated program has ongoing screening enabled, this is the profile information that will be used to monitor your customer over time.

</api/products/monitor/#watchlist_screeningentitycreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningEntityCreateResponse;
import org.openapis.openapi.models.shared.EntityWatchlistSearchTerms;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningEntityCreateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique", "minima", "libero") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningEntityCreateRequest req = new WatchlistScreeningEntityCreateRequest(                new EntityWatchlistSearchTerms("entprg_2eRPsDnL66rZ7H", "Al-Qaida") {{
                                country = "US";
                                documentNumber = "C31195855";
                                emailAddress = "user@example.com";
                                phoneNumber = "+14025671234";
                                url = "https://example.com";
                            }};) {{
                clientId = "magnam";
                clientUserId = "your-db-id-3b24110";
                secret = "sit";
            }};            

            WatchlistScreeningEntityCreateResponse res = sdk.plaid.watchlistScreeningEntityCreate(req);

            if (res.watchlistScreeningEntityCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningEntityGet

Retrieve an entity watchlist screening.

</api/products/monitor/#watchlist_screeningentityget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningEntityGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningEntityGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi", "eum", "nesciunt") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningEntityGetRequest req = new WatchlistScreeningEntityGetRequest("entscr_52xR9LKo77r1Np") {{
                clientId = "mollitia";
                secret = "dignissimos";
            }};            

            WatchlistScreeningEntityGetResponse res = sdk.plaid.watchlistScreeningEntityGet(req);

            if (res.watchlistScreeningEntityGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningEntityHistoryList

List all changes to the entity watchlist screening in reverse-chronological order. If the watchlist screening has not been edited, no history will be returned.

</api/products/monitor/#watchlist_screeningentityhistorylist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningEntityHistoryListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningEntityHistoryListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat", "nostrum", "molestiae") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningEntityHistoryListRequest req = new WatchlistScreeningEntityHistoryListRequest("entscr_52xR9LKo77r1Np") {{
                clientId = "veniam";
                cursor = "eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM";
                secret = "reiciendis";
            }};            

            WatchlistScreeningEntityHistoryListResponse res = sdk.plaid.watchlistScreeningEntityHistoryList(req);

            if (res.watchlistScreeningEntityHistoryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningEntityHitList

List all hits for the entity watchlist screening.

</api/products/monitor/#watchlist_screeningentityhitlist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningEntityHitListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningEntityHitListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab", "modi", "aut") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningEntityHitListRequest req = new WatchlistScreeningEntityHitListRequest("entscr_52xR9LKo77r1Np") {{
                clientId = "aut";
                cursor = "eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM";
                secret = "eveniet";
            }};            

            WatchlistScreeningEntityHitListResponse res = sdk.plaid.watchlistScreeningEntityHitList(req);

            if (res.watchlistScreeningEntityHitListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningEntityList

List all entity screenings.

</api/products/monitor/#watchlist_screeningentitylist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningEntityListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningEntityListRequest;
import org.openapis.openapi.models.shared.WatchlistScreeningStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio", "commodi", "numquam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningEntityListRequest req = new WatchlistScreeningEntityListRequest("entprg_2eRPsDnL66rZ7H") {{
                assignee = "54350110fedcbaf01234ffee";
                clientId = "dolorum";
                clientUserId = "your-db-id-3b24110";
                cursor = "eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM";
                secret = "possimus";
                status = WatchlistScreeningStatusEnum.CLEARED;
            }};            

            WatchlistScreeningEntityListResponse res = sdk.plaid.watchlistScreeningEntityList(req);

            if (res.watchlistScreeningEntityListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningEntityProgramGet

Get an entity watchlist screening program

</api/products/monitor/#watchlist_screeningentityprogramget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningEntityProgramGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningEntityProgramGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate", "consectetur", "nesciunt") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningEntityProgramGetRequest req = new WatchlistScreeningEntityProgramGetRequest("entprg_2eRPsDnL66rZ7H") {{
                clientId = "quaerat";
                secret = "itaque";
            }};            

            WatchlistScreeningEntityProgramGetResponse res = sdk.plaid.watchlistScreeningEntityProgramGet(req);

            if (res.watchlistScreeningEntityProgramGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningEntityProgramList

List all entity watchlist screening programs

</api/products/monitor/#watchlist_screeningentityprogramlist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningEntityProgramListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningEntityProgramListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus", "sunt", "distinctio") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningEntityProgramListRequest req = new WatchlistScreeningEntityProgramListRequest() {{
                clientId = "iusto";
                cursor = "eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM";
                secret = "quas";
            }};            

            WatchlistScreeningEntityProgramListResponse res = sdk.plaid.watchlistScreeningEntityProgramList(req);

            if (res.watchlistScreeningEntityProgramListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningEntityReviewCreate

Create a review for an entity watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.

</api/products/monitor/#watchlist_screeningentityreviewcreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningEntityReviewCreateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningEntityReviewCreateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et", "facilis", "amet") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningEntityReviewCreateRequest req = new WatchlistScreeningEntityReviewCreateRequest(                new String[]{{
                                add("enthit_52xR9LKo77r1Np"),
                                add("enthit_52xR9LKo77r1Np"),
                            }},                 new String[]{{
                                add("enthit_52xR9LKo77r1Np"),
                                add("enthit_52xR9LKo77r1Np"),
                                add("enthit_52xR9LKo77r1Np"),
                            }}, "entscr_52xR9LKo77r1Np") {{
                clientId = "alias";
                comment = "These look like legitimate matches, rejecting the customer.";
                secret = "rem";
            }};            

            WatchlistScreeningEntityReviewCreateResponse res = sdk.plaid.watchlistScreeningEntityReviewCreate(req);

            if (res.watchlistScreeningEntityReviewCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningEntityReviewList

List all reviews for a particular entity watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.

</api/products/monitor/#watchlist_screeningentityreviewlist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningEntityReviewListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningEntityReviewListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "quos", "laudantium") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningEntityReviewListRequest req = new WatchlistScreeningEntityReviewListRequest("entscr_52xR9LKo77r1Np") {{
                clientId = "repellendus";
                cursor = "eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM";
                secret = "veritatis";
            }};            

            WatchlistScreeningEntityReviewListResponse res = sdk.plaid.watchlistScreeningEntityReviewList(req);

            if (res.watchlistScreeningEntityReviewListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningEntityUpdate

Update an entity watchlist screening.

</api/products/monitor/#watchlist_screeningentityupdate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningEntityUpdateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEntityScreeningRequestSearchTerms;
import org.openapis.openapi.models.shared.WatchlistScreeningEntityUpdateRequest;
import org.openapis.openapi.models.shared.WatchlistScreeningEntityUpdateRequestResettableFieldEnum;
import org.openapis.openapi.models.shared.WatchlistScreeningStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae", "eaque", "saepe") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningEntityUpdateRequest req = new WatchlistScreeningEntityUpdateRequest("entscr_52xR9LKo77r1Np") {{
                assignee = "54350110fedcbaf01234ffee";
                clientId = "delectus";
                clientUserId = "your-db-id-3b24110";
                resetFields = new org.openapis.openapi.models.shared.WatchlistScreeningEntityUpdateRequestResettableFieldEnum[]{{
                    add(WatchlistScreeningEntityUpdateRequestResettableFieldEnum.ASSIGNEE),
                    add(WatchlistScreeningEntityUpdateRequestResettableFieldEnum.ASSIGNEE),
                    add(WatchlistScreeningEntityUpdateRequestResettableFieldEnum.ASSIGNEE),
                }};
                searchTerms = new UpdateEntityScreeningRequestSearchTerms("entprg_2eRPsDnL66rZ7H") {{
                    country = "US";
                    documentNumber = "C31195855";
                    emailAddress = "user@example.com";
                    legalName = "Al-Qaida";
                    phoneNumber = "+14025671234";
                    url = "https://example.com";
                }};;
                secret = "nulla";
                status = WatchlistScreeningStatusEnum.CLEARED;
            }};            

            WatchlistScreeningEntityUpdateResponse res = sdk.plaid.watchlistScreeningEntityUpdate(req);

            if (res.watchlistScreeningEntityUpdateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningIndividualCreate

Create a new Watchlist Screening to check your customer against watchlists defined in the associated Watchlist Program. If your associated program has ongoing screening enabled, this is the profile information that will be used to monitor your customer over time.

</api/products/monitor/#watchlist_screeningindividualcreate>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningIndividualCreateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningIndividualCreateRequest;
import org.openapis.openapi.models.shared.WatchlistScreeningRequestSearchTerms;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia", "sed", "voluptatem") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningIndividualCreateRequest req = new WatchlistScreeningIndividualCreateRequest(                new WatchlistScreeningRequestSearchTerms("Aleksey Potemkin", "prg_2eRPsDnL66rZ7H") {{
                                country = "US";
                                dateOfBirth = LocalDate.parse("1990-05-29");
                                documentNumber = "C31195855";
                            }};) {{
                clientId = "alias";
                clientUserId = "your-db-id-3b24110";
                secret = "eveniet";
            }};            

            WatchlistScreeningIndividualCreateResponse res = sdk.plaid.watchlistScreeningIndividualCreate(req);

            if (res.watchlistScreeningIndividualCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningIndividualGet

Retrieve a previously created individual watchlist screening

</api/products/monitor/#watchlist_screeningindividualget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningIndividualGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningIndividualGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic", "voluptatem", "incidunt") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningIndividualGetRequest req = new WatchlistScreeningIndividualGetRequest("scr_52xR9LKo77r1Np") {{
                clientId = "qui";
                secret = "qui";
            }};            

            WatchlistScreeningIndividualGetResponse res = sdk.plaid.watchlistScreeningIndividualGet(req);

            if (res.watchlistScreeningIndividualGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningIndividualHistoryList

List all changes to the individual watchlist screening in reverse-chronological order. If the watchlist screening has not been edited, no history will be returned.

</api/products/monitor/#watchlist_screeningindividualhistorylist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningIndividualHistoryListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningIndividualHistoryListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus", "harum", "explicabo") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningIndividualHistoryListRequest req = new WatchlistScreeningIndividualHistoryListRequest("scr_52xR9LKo77r1Np") {{
                clientId = "beatae";
                cursor = "eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM";
                secret = "aliquid";
            }};            

            WatchlistScreeningIndividualHistoryListResponse res = sdk.plaid.watchlistScreeningIndividualHistoryList(req);

            if (res.watchlistScreeningIndividualHistoryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningIndividualHitList

List all hits found by Plaid for a particular individual watchlist screening.

</api/products/monitor/#watchlist_screeningindividualhitlist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningIndividualHitListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningIndividualHitListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi", "optio", "voluptatibus") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningIndividualHitListRequest req = new WatchlistScreeningIndividualHitListRequest("scr_52xR9LKo77r1Np") {{
                clientId = "molestias";
                cursor = "eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM";
                secret = "officia";
            }};            

            WatchlistScreeningIndividualHitListResponse res = sdk.plaid.watchlistScreeningIndividualHitList(req);

            if (res.watchlistScreeningIndividualHitListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningIndividualList

List previously created watchlist screenings for individuals

</api/products/monitor/#watchlist_screeningindividuallist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningIndividualListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningIndividualListRequest;
import org.openapis.openapi.models.shared.WatchlistScreeningStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero", "totam", "sequi") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningIndividualListRequest req = new WatchlistScreeningIndividualListRequest("prg_2eRPsDnL66rZ7H") {{
                assignee = "54350110fedcbaf01234ffee";
                clientId = "aliquid";
                clientUserId = "your-db-id-3b24110";
                cursor = "eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM";
                secret = "ea";
                status = WatchlistScreeningStatusEnum.CLEARED;
            }};            

            WatchlistScreeningIndividualListResponse res = sdk.plaid.watchlistScreeningIndividualList(req);

            if (res.watchlistScreeningIndividualListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningIndividualProgramGet

Get an individual watchlist screening program

</api/products/monitor/#watchlist_screeningindividualprogramget>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningIndividualProgramGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningIndividualProgramGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit", "ducimus", "odit") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningIndividualProgramGetRequest req = new WatchlistScreeningIndividualProgramGetRequest("prg_2eRPsDnL66rZ7H") {{
                clientId = "velit";
                secret = "reiciendis";
            }};            

            WatchlistScreeningIndividualProgramGetResponse res = sdk.plaid.watchlistScreeningIndividualProgramGet(req);

            if (res.watchlistScreeningIndividualProgramGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningIndividualProgramList

List all individual watchlist screening programs

</api/products/monitor/#watchlist_screeningindividualprogramlist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningIndividualProgramListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningIndividualProgramListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat", "nulla", "laborum") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningIndividualProgramListRequest req = new WatchlistScreeningIndividualProgramListRequest() {{
                clientId = "natus";
                cursor = "eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM";
                secret = "accusamus";
            }};            

            WatchlistScreeningIndividualProgramListResponse res = sdk.plaid.watchlistScreeningIndividualProgramList(req);

            if (res.watchlistScreeningIndividualProgramListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningIndividualReviewCreate

Create a review for the individual watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.

</api/products/monitor/#watchlist_screeningindividualreviewcreate>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningIndividualReviewCreateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningIndividualReviewCreateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque", "nisi", "rerum") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningIndividualReviewCreateRequest req = new WatchlistScreeningIndividualReviewCreateRequest(                new String[]{{
                                add("scrhit_52xR9LKo77r1Np"),
                                add("scrhit_52xR9LKo77r1Np"),
                                add("scrhit_52xR9LKo77r1Np"),
                                add("scrhit_52xR9LKo77r1Np"),
                            }},                 new String[]{{
                                add("scrhit_52xR9LKo77r1Np"),
                                add("scrhit_52xR9LKo77r1Np"),
                                add("scrhit_52xR9LKo77r1Np"),
                                add("scrhit_52xR9LKo77r1Np"),
                            }}, "scr_52xR9LKo77r1Np") {{
                clientId = "non";
                comment = "These look like legitimate matches, rejecting the customer.";
                secret = "rem";
            }};            

            WatchlistScreeningIndividualReviewCreateResponse res = sdk.plaid.watchlistScreeningIndividualReviewCreate(req);

            if (res.watchlistScreeningIndividualReviewCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningIndividualReviewList

List all reviews for the individual watchlist screening.

</api/products/monitor/#watchlist_screeningindividualreviewlist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningIndividualReviewListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WatchlistScreeningIndividualReviewListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia", "ullam", "quisquam") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningIndividualReviewListRequest req = new WatchlistScreeningIndividualReviewListRequest("scr_52xR9LKo77r1Np") {{
                clientId = "dicta";
                cursor = "eyJkaXJlY3Rpb24iOiJuZXh0Iiwib2Zmc2V0IjoiMTU5NDM";
                secret = "voluptatibus";
            }};            

            WatchlistScreeningIndividualReviewListResponse res = sdk.plaid.watchlistScreeningIndividualReviewList(req);

            if (res.watchlistScreeningIndividualReviewListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistScreeningIndividualUpdate

Update a specific individual watchlist screening. This endpoint can be used to add additional customer information, correct outdated information, add a reference id, assign the individual to a reviewer, and update which program it is associated with. Please note that you may not update `search_terms` and `status` at the same time since editing `search_terms` may trigger an automatic `status` change.

</api/products/monitor/#watchlist_screeningindividualupdate>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistScreeningIndividualUpdateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateIndividualScreeningRequestSearchTerms;
import org.openapis.openapi.models.shared.WatchlistScreeningIndividualUpdateRequest;
import org.openapis.openapi.models.shared.WatchlistScreeningIndividualUpdateRequestResettableFieldEnum;
import org.openapis.openapi.models.shared.WatchlistScreeningStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi", "quae", "officiis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WatchlistScreeningIndividualUpdateRequest req = new WatchlistScreeningIndividualUpdateRequest("scr_52xR9LKo77r1Np") {{
                assignee = "54350110fedcbaf01234ffee";
                clientId = "architecto";
                clientUserId = "your-db-id-3b24110";
                resetFields = new org.openapis.openapi.models.shared.WatchlistScreeningIndividualUpdateRequestResettableFieldEnum[]{{
                    add(WatchlistScreeningIndividualUpdateRequestResettableFieldEnum.ASSIGNEE),
                }};
                searchTerms = new UpdateIndividualScreeningRequestSearchTerms() {{
                    country = "US";
                    dateOfBirth = LocalDate.parse("1990-05-29");
                    documentNumber = "C31195855";
                    legalName = "Aleksey Potemkin";
                    watchlistProgramId = "prg_2eRPsDnL66rZ7H";
                }};;
                secret = "enim";
                status = WatchlistScreeningStatusEnum.CLEARED;
            }};            

            WatchlistScreeningIndividualUpdateResponse res = sdk.plaid.watchlistScreeningIndividualUpdate(req);

            if (res.watchlistScreeningIndividualUpdateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webhookVerificationKeyGet

Plaid signs all outgoing webhooks and provides JSON Web Tokens (JWTs) so that you can verify the authenticity of any incoming webhooks to your application. A message signature is included in the `Plaid-Verification` header.

The `/webhook_verification_key/get` endpoint provides a JSON Web Key (JWK) that can be used to verify a JWT.

</api/webhooks/webhook-verification/#get-webhook-verification-key>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebhookVerificationKeyGetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WebhookVerificationKeyGetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio", "rem", "perferendis") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WebhookVerificationKeyGetRequest req = new WebhookVerificationKeyGetRequest("facilis") {{
                clientId = "reiciendis";
                secret = "a";
            }};            

            WebhookVerificationKeyGetResponse res = sdk.plaid.webhookVerificationKeyGet(req);

            if (res.webhookVerificationKeyGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
