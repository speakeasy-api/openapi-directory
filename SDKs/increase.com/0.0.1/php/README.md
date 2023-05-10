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
use \OpenAPI\OpenAPI\Models\Operations\ActionARealTimeDecisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParameters;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParametersCardAuthorization;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParametersCardAuthorizationDecisionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParametersDigitalWalletAuthentication;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParametersDigitalWalletAuthenticationResultEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParametersDigitalWalletToken;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParametersDigitalWalletTokenApproval;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParametersDigitalWalletTokenDecline;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionARealTimeDecisionRequest();
    $request->actionARealTimeDecisionParameters = new ActionARealTimeDecisionParameters();
    $request->actionARealTimeDecisionParameters->cardAuthorization = new ActionARealTimeDecisionParametersCardAuthorization();
    $request->actionARealTimeDecisionParameters->cardAuthorization->decision = ActionARealTimeDecisionParametersCardAuthorizationDecisionEnum::DECLINE;
    $request->actionARealTimeDecisionParameters->digitalWalletAuthentication = new ActionARealTimeDecisionParametersDigitalWalletAuthentication();
    $request->actionARealTimeDecisionParameters->digitalWalletAuthentication->result = ActionARealTimeDecisionParametersDigitalWalletAuthenticationResultEnum::FAILURE;
    $request->actionARealTimeDecisionParameters->digitalWalletToken = new ActionARealTimeDecisionParametersDigitalWalletToken();
    $request->actionARealTimeDecisionParameters->digitalWalletToken->approval = new ActionARealTimeDecisionParametersDigitalWalletTokenApproval();
    $request->actionARealTimeDecisionParameters->digitalWalletToken->approval->cardProfileId = 'distinctio';
    $request->actionARealTimeDecisionParameters->digitalWalletToken->approval->email = 'Leda_Stiedemann@hotmail.com';
    $request->actionARealTimeDecisionParameters->digitalWalletToken->approval->phone = '1-663-528-0923 x478';
    $request->actionARealTimeDecisionParameters->digitalWalletToken->decline = new ActionARealTimeDecisionParametersDigitalWalletTokenDecline();
    $request->actionARealTimeDecisionParameters->digitalWalletToken->decline->reason = 'voluptatum';
    $request->realTimeDecisionId = 'iusto';

    $response = $sdk->actionARealTimeDecision($request);

    if ($response->realTimeDecision !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [actionARealTimeDecision](docs/sdk/README.md#actionarealtimedecision) - Action a Real-Time Decision
* [approveACheckTransfer](docs/sdk/README.md#approveachecktransfer) - Approve a Check Transfer
* [approveAWireTransfer](docs/sdk/README.md#approveawiretransfer) - Approve a Wire Transfer
* [approveAnAccountTransfer](docs/sdk/README.md#approveanaccounttransfer) - Approve an Account Transfer
* [approveAnAchTransfer](docs/sdk/README.md#approveanachtransfer) - Approve an ACH Transfer
* [cancelAPendingAchTransfer](docs/sdk/README.md#cancelapendingachtransfer) - Cancel a pending ACH Transfer
* [cancelAPendingCheckTransfer](docs/sdk/README.md#cancelapendingchecktransfer) - Cancel a pending Check Transfer
* [cancelAPendingWireTransfer](docs/sdk/README.md#cancelapendingwiretransfer) - Cancel a pending Wire Transfer
* [cancelAnAccountTransfer](docs/sdk/README.md#cancelanaccounttransfer) - Cancel an Account Transfer
* [closeAnAccount](docs/sdk/README.md#closeanaccount) - Close an Account
* [completeASandboxAccountTransfer](docs/sdk/README.md#completeasandboxaccounttransfer) - Complete a Sandbox Account Transfer
* [completeASandboxRealTimePaymentsTransfer](docs/sdk/README.md#completeasandboxrealtimepaymentstransfer) - Complete a Sandbox Real Time Payments Transfer
* [createABookkeepingAccount](docs/sdk/README.md#createabookkeepingaccount) - Create a Bookkeeping Account
* [createABookkeepingEntrySet](docs/sdk/README.md#createabookkeepingentryset) - Create a Bookkeeping Entry Set
* [createACard](docs/sdk/README.md#createacard) - Create a Card
* [createACardDispute](docs/sdk/README.md#createacarddispute) - Create a Card Dispute
* [createACardProfile](docs/sdk/README.md#createacardprofile) - Create a Card Profile
* [createACheckDeposit](docs/sdk/README.md#createacheckdeposit) - Create a Check Deposit
* [createACheckTransfer](docs/sdk/README.md#createachecktransfer) - Create a Check Transfer
* [createAFile](docs/sdk/README.md#createafile) - Create a File
* [createALimit](docs/sdk/README.md#createalimit) - Create a Limit
* [createARealTimePaymentsTransfer](docs/sdk/README.md#createarealtimepaymentstransfer) - Create a Real Time Payments Transfer
* [createASupplementalDocumentForAnEntity](docs/sdk/README.md#createasupplementaldocumentforanentity) - Create a supplemental document for an Entity
* [createAWireDrawdownRequest](docs/sdk/README.md#createawiredrawdownrequest) - Create a Wire Drawdown Request
* [createAWireTransfer](docs/sdk/README.md#createawiretransfer) - Create a Wire Transfer
* [createAnAccount](docs/sdk/README.md#createanaccount) - Create an Account
* [createAnAccountNumber](docs/sdk/README.md#createanaccountnumber) - Create an Account Number
* [createAnAccountTransfer](docs/sdk/README.md#createanaccounttransfer) - Create an Account Transfer
* [createAnAchPrenotification](docs/sdk/README.md#createanachprenotification) - Create an ACH Prenotification
* [createAnAchReturn](docs/sdk/README.md#createanachreturn) - Create an ACH Return
* [createAnAchTransfer](docs/sdk/README.md#createanachtransfer) - Create an ACH Transfer
* [createAnEntity](docs/sdk/README.md#createanentity) - Create an Entity
* [createAnEventSubscription](docs/sdk/README.md#createaneventsubscription) - Create an Event Subscription
* [createAnExport](docs/sdk/README.md#createanexport) - Create an Export
* [createAnExternalAccount](docs/sdk/README.md#createanexternalaccount) - Create an External Account
* [depositASandboxCheckTransfer](docs/sdk/README.md#depositasandboxchecktransfer) - Deposit a Sandbox Check Transfer
* [listAccountNumbers](docs/sdk/README.md#listaccountnumbers) - List Account Numbers
* [listAccountStatements](docs/sdk/README.md#listaccountstatements) - List Account Statements
* [listAccountTransfers](docs/sdk/README.md#listaccounttransfers) - List Account Transfers
* [listAccounts](docs/sdk/README.md#listaccounts) - List Accounts
* [listAchPrenotifications](docs/sdk/README.md#listachprenotifications) - List ACH Prenotifications
* [listAchTransfers](docs/sdk/README.md#listachtransfers) - List ACH Transfers
* [listBookkeepingAccounts](docs/sdk/README.md#listbookkeepingaccounts) - List Bookkeeping Accounts
* [listBookkeepingEntries](docs/sdk/README.md#listbookkeepingentries) - List Bookkeeping Entries
* [listCardDisputes](docs/sdk/README.md#listcarddisputes) - List Card Disputes
* [listCardProfiles](docs/sdk/README.md#listcardprofiles) - List Card Profiles
* [listCards](docs/sdk/README.md#listcards) - List Cards
* [listCheckDeposits](docs/sdk/README.md#listcheckdeposits) - List Check Deposits
* [listCheckTransfers](docs/sdk/README.md#listchecktransfers) - List Check Transfers
* [listDeclinedTransactions](docs/sdk/README.md#listdeclinedtransactions) - List Declined Transactions
* [listDigitalWalletTokens](docs/sdk/README.md#listdigitalwallettokens) - List Digital Wallet Tokens
* [listDocuments](docs/sdk/README.md#listdocuments) - List Documents
* [listEntities](docs/sdk/README.md#listentities) - List Entities
* [listEventSubscriptions](docs/sdk/README.md#listeventsubscriptions) - List Event Subscriptions
* [listEvents](docs/sdk/README.md#listevents) - List Events
* [listExports](docs/sdk/README.md#listexports) - List Exports
* [listExternalAccounts](docs/sdk/README.md#listexternalaccounts) - List External Accounts
* [listFiles](docs/sdk/README.md#listfiles) - List Files
* [listInboundAchTransferReturns](docs/sdk/README.md#listinboundachtransferreturns) - List Inbound ACH Transfer Returns
* [listInboundWireDrawdownRequests](docs/sdk/README.md#listinboundwiredrawdownrequests) - List Inbound Wire Drawdown Requests
* [listLimits](docs/sdk/README.md#listlimits) - List Limits
* [listOauthConnections](docs/sdk/README.md#listoauthconnections) - List OAuth Connections
* [listPendingTransactions](docs/sdk/README.md#listpendingtransactions) - List Pending Transactions
* [listPrograms](docs/sdk/README.md#listprograms) - List Programs
* [listRealTimePaymentsTransfers](docs/sdk/README.md#listrealtimepaymentstransfers) - List Real Time Payments Transfers
* [listRoutingNumbers](docs/sdk/README.md#listroutingnumbers) - List Routing Numbers
* [listTransactions](docs/sdk/README.md#listtransactions) - List Transactions
* [listWireDrawdownRequests](docs/sdk/README.md#listwiredrawdownrequests) - List Wire Drawdown Requests
* [listWireTransfers](docs/sdk/README.md#listwiretransfers) - List Wire Transfers
* [lookUpTheBalanceForAnAccount](docs/sdk/README.md#lookupthebalanceforanaccount) - Look up the balance for an Account
* [mailASandboxCheckTransfer](docs/sdk/README.md#mailasandboxchecktransfer) - Mail a Sandbox Check Transfer
* [rejectASandboxCheckDeposit](docs/sdk/README.md#rejectasandboxcheckdeposit) - Reject a Sandbox Check Deposit
* [requestAStopPaymentOnACheckTransfer](docs/sdk/README.md#requestastoppaymentonachecktransfer) - Request a stop payment on a Check Transfer
* [retrieveACard](docs/sdk/README.md#retrieveacard) - Retrieve a Card
* [retrieveACardDispute](docs/sdk/README.md#retrieveacarddispute) - Retrieve a Card Dispute
* [retrieveACardProfile](docs/sdk/README.md#retrieveacardprofile) - Retrieve a Card Profile
* [retrieveACheckDeposit](docs/sdk/README.md#retrieveacheckdeposit) - Retrieve a Check Deposit
* [retrieveACheckTransfer](docs/sdk/README.md#retrieveachecktransfer) - Retrieve a Check Transfer
* [retrieveADeclinedTransaction](docs/sdk/README.md#retrieveadeclinedtransaction) - Retrieve a Declined Transaction
* [retrieveADigitalWalletToken](docs/sdk/README.md#retrieveadigitalwallettoken) - Retrieve a Digital Wallet Token
* [retrieveADocument](docs/sdk/README.md#retrieveadocument) - Retrieve a Document
* [retrieveAFile](docs/sdk/README.md#retrieveafile) - Retrieve a File
* [retrieveALimit](docs/sdk/README.md#retrievealimit) - Retrieve a Limit
* [retrieveAPendingTransaction](docs/sdk/README.md#retrieveapendingtransaction) - Retrieve a Pending Transaction
* [retrieveAProgram](docs/sdk/README.md#retrieveaprogram) - Retrieve a Program
* [retrieveARealTimeDecision](docs/sdk/README.md#retrievearealtimedecision) - Retrieve a Real-Time Decision
* [retrieveARealTimePaymentsTransfer](docs/sdk/README.md#retrievearealtimepaymentstransfer) - Retrieve a Real Time Payments Transfer
* [retrieveATransaction](docs/sdk/README.md#retrieveatransaction) - Retrieve a Transaction
* [retrieveAWireDrawdownRequest](docs/sdk/README.md#retrieveawiredrawdownrequest) - Retrieve a Wire Drawdown Request
* [retrieveAWireTransfer](docs/sdk/README.md#retrieveawiretransfer) - Retrieve a Wire Transfer
* [retrieveAnAccount](docs/sdk/README.md#retrieveanaccount) - Retrieve an Account
* [retrieveAnAccountNumber](docs/sdk/README.md#retrieveanaccountnumber) - Retrieve an Account Number
* [retrieveAnAccountStatement](docs/sdk/README.md#retrieveanaccountstatement) - Retrieve an Account Statement
* [retrieveAnAccountTransfer](docs/sdk/README.md#retrieveanaccounttransfer) - Retrieve an Account Transfer
* [retrieveAnAchPrenotification](docs/sdk/README.md#retrieveanachprenotification) - Retrieve an ACH Prenotification
* [retrieveAnAchTransfer](docs/sdk/README.md#retrieveanachtransfer) - Retrieve an ACH Transfer
* [retrieveAnEntity](docs/sdk/README.md#retrieveanentity) - Retrieve an Entity
* [retrieveAnEvent](docs/sdk/README.md#retrieveanevent) - Retrieve an Event
* [retrieveAnEventSubscription](docs/sdk/README.md#retrieveaneventsubscription) - Retrieve an Event Subscription
* [retrieveAnExport](docs/sdk/README.md#retrieveanexport) - Retrieve an Export
* [retrieveAnExternalAccount](docs/sdk/README.md#retrieveanexternalaccount) - Retrieve an External Account
* [retrieveAnInboundAchTransferReturn](docs/sdk/README.md#retrieveaninboundachtransferreturn) - Retrieve an Inbound ACH Transfer Return
* [retrieveAnInboundWireDrawdownRequest](docs/sdk/README.md#retrieveaninboundwiredrawdownrequest) - Retrieve an Inbound Wire Drawdown Request
* [retrieveAnOauthConnection](docs/sdk/README.md#retrieveanoauthconnection) - Retrieve an OAuth Connection
* [retrieveGroupDetails](docs/sdk/README.md#retrievegroupdetails) - Retrieve Group details
* [retrieveSensitiveDetailsForACard](docs/sdk/README.md#retrievesensitivedetailsforacard) - Retrieve sensitive details for a Card
* [returnASandboxAchTransfer](docs/sdk/README.md#returnasandboxachtransfer) - Return a Sandbox ACH Transfer
* [returnASandboxCheckDeposit](docs/sdk/README.md#returnasandboxcheckdeposit) - Return a Sandbox Check Deposit
* [returnASandboxCheckTransfer](docs/sdk/README.md#returnasandboxchecktransfer) - Return a Sandbox Check Transfer
* [reverseASandboxWireTransfer](docs/sdk/README.md#reverseasandboxwiretransfer) - Reverse a Sandbox Wire Transfer
* [simulateARealTimePaymentsTransferToYourAccount](docs/sdk/README.md#simulatearealtimepaymentstransfertoyouraccount) - Simulate a Real Time Payments Transfer to your account
* [simulateARefundOnACard](docs/sdk/README.md#simulatearefundonacard) - Simulate a refund on a card
* [simulateATaxDocumentBeingCreated](docs/sdk/README.md#simulateataxdocumentbeingcreated) - Simulate a tax document being created
* [simulateAWireTransferToYourAccount](docs/sdk/README.md#simulateawiretransfertoyouraccount) - Simulate a Wire Transfer to your account
* [simulateAnAccountStatementBeingCreated](docs/sdk/README.md#simulateanaccountstatementbeingcreated) - Simulate an Account Statement being created
* [simulateAnAchTransferToYourAccount](docs/sdk/README.md#simulateanachtransfertoyouraccount) - Simulate an ACH Transfer to your account
* [simulateAnAuthorizationOnACard](docs/sdk/README.md#simulateanauthorizationonacard) - Simulate an authorization on a Card
* [simulateAnInboundWireDrawdownRequestBeingCreated](docs/sdk/README.md#simulateaninboundwiredrawdownrequestbeingcreated) - Simulate an Inbound Wire Drawdown request being created
* [simulateAnInterestPaymentToYourAccount](docs/sdk/README.md#simulateaninterestpaymenttoyouraccount) - Simulate an Interest Payment to your account
* [simulateDigitalWalletProvisioningForACard](docs/sdk/README.md#simulatedigitalwalletprovisioningforacard) - Simulate digital wallet provisioning for a card
* [simulateSettlingACardAuthorization](docs/sdk/README.md#simulatesettlingacardauthorization) - Simulate settling a card authorization
* [simulatesAdvancingTheStateOfACardDispute](docs/sdk/README.md#simulatesadvancingthestateofacarddispute) - Simulates advancing the state of a card dispute
* [submitASandboxAchTransfer](docs/sdk/README.md#submitasandboxachtransfer) - Submit a Sandbox ACH Transfer
* [submitASandboxCheckDeposit](docs/sdk/README.md#submitasandboxcheckdeposit) - Submit a Sandbox Check Deposit
* [submitASandboxWireTransfer](docs/sdk/README.md#submitasandboxwiretransfer) - Submit a Sandbox Wire Transfer
* [updateACard](docs/sdk/README.md#updateacard) - Update a Card
* [updateALimit](docs/sdk/README.md#updatealimit) - Update a Limit
* [updateAnAccount](docs/sdk/README.md#updateanaccount) - Update an Account
* [updateAnAccountNumber](docs/sdk/README.md#updateanaccountnumber) - Update an Account Number
* [updateAnEventSubscription](docs/sdk/README.md#updateaneventsubscription) - Update an Event Subscription
* [updateAnExternalAccount](docs/sdk/README.md#updateanexternalaccount) - Update an External Account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
