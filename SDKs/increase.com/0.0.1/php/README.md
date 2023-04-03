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

### SDK SDK

* `actionARealTimeDecision` - Action a Real-Time Decision
* `approveACheckTransfer` - Approve a Check Transfer
* `approveAWireTransfer` - Approve a Wire Transfer
* `approveAnAccountTransfer` - Approve an Account Transfer
* `approveAnAchTransfer` - Approve an ACH Transfer
* `cancelAPendingAchTransfer` - Cancel a pending ACH Transfer
* `cancelAPendingCheckTransfer` - Cancel a pending Check Transfer
* `cancelAPendingWireTransfer` - Cancel a pending Wire Transfer
* `cancelAnAccountTransfer` - Cancel an Account Transfer
* `closeAnAccount` - Close an Account
* `completeASandboxAccountTransfer` - Complete a Sandbox Account Transfer
* `createACard` - Create a Card
* `createACardDispute` - Create a Card Dispute
* `createACardProfile` - Create a Card Profile
* `createACheckDeposit` - Create a Check Deposit
* `createACheckTransfer` - Create a Check Transfer
* `createAFile` - Create a File
* `createALimit` - Create a Limit
* `createASupplementalDocumentForAnEntity` - Create a supplemental document for an Entity
* `createAWireDrawdownRequest` - Create a Wire Drawdown Request
* `createAWireTransfer` - Create a Wire Transfer
* `createAnAccount` - Create an Account
* `createAnAccountNumber` - Create an Account Number
* `createAnAccountTransfer` - Create an Account Transfer
* `createAnAchPrenotification` - Create an ACH Prenotification
* `createAnAchReturn` - Create an ACH Return
* `createAnAchTransfer` - Create an ACH Transfer
* `createAnEntity` - Create an Entity
* `createAnEventSubscription` - Create an Event Subscription
* `createAnExternalAccount` - Create an External Account
* `depositASandboxCheckTransfer` - Deposit a Sandbox Check Transfer
* `listAccountNumbers` - List Account Numbers
* `listAccountStatements` - List Account Statements
* `listAccountTransfers` - List Account Transfers
* `listAccounts` - List Accounts
* `listAchPrenotifications` - List ACH Prenotifications
* `listAchTransfers` - List ACH Transfers
* `listCardDisputes` - List Card Disputes
* `listCardProfiles` - List Card Profiles
* `listCards` - List Cards
* `listCheckDeposits` - List Check Deposits
* `listCheckTransfers` - List Check Transfers
* `listDeclinedTransactions` - List Declined Transactions
* `listDigitalWalletTokens` - List Digital Wallet Tokens
* `listDocuments` - List Documents
* `listEntities` - List Entities
* `listEventSubscriptions` - List Event Subscriptions
* `listEvents` - List Events
* `listExternalAccounts` - List External Accounts
* `listFiles` - List Files
* `listInboundAchTransferReturns` - List Inbound ACH Transfer Returns
* `listInboundWireDrawdownRequests` - List Inbound Wire Drawdown Requests
* `listLimits` - List Limits
* `listOauthConnections` - List OAuth Connections
* `listPendingTransactions` - List Pending Transactions
* `listRoutingNumbers` - List Routing Numbers
* `listTransactions` - List Transactions
* `listWireDrawdownRequests` - List Wire Drawdown Requests
* `listWireTransfers` - List Wire Transfers
* `mailASandboxCheckTransfer` - Mail a Sandbox Check Transfer
* `rejectASandboxCheckDeposit` - Reject a Sandbox Check Deposit
* `requestAStopPaymentOnACheckTransfer` - Request a stop payment on a Check Transfer
* `retrieveACard` - Retrieve a Card
* `retrieveACardDispute` - Retrieve a Card Dispute
* `retrieveACardProfile` - Retrieve a Card Profile
* `retrieveACheckDeposit` - Retrieve a Check Deposit
* `retrieveACheckTransfer` - Retrieve a Check Transfer
* `retrieveADeclinedTransaction` - Retrieve a Declined Transaction
* `retrieveADigitalWalletToken` - Retrieve a Digital Wallet Token
* `retrieveADocument` - Retrieve a Document
* `retrieveAFile` - Retrieve a File
* `retrieveALimit` - Retrieve a Limit
* `retrieveAPendingTransaction` - Retrieve a Pending Transaction
* `retrieveARealTimeDecision` - Retrieve a Real-Time Decision
* `retrieveATransaction` - Retrieve a Transaction
* `retrieveAWireDrawdownRequest` - Retrieve a Wire Drawdown Request
* `retrieveAWireTransfer` - Retrieve a Wire Transfer
* `retrieveAnAccount` - Retrieve an Account
* `retrieveAnAccountNumber` - Retrieve an Account Number
* `retrieveAnAccountStatement` - Retrieve an Account Statement
* `retrieveAnAccountTransfer` - Retrieve an Account Transfer
* `retrieveAnAchPrenotification` - Retrieve an ACH Prenotification
* `retrieveAnAchTransfer` - Retrieve an ACH Transfer
* `retrieveAnEntity` - Retrieve an Entity
* `retrieveAnEvent` - Retrieve an Event
* `retrieveAnEventSubscription` - Retrieve an Event Subscription
* `retrieveAnExternalAccount` - Retrieve an External Account
* `retrieveAnInboundAchTransferReturn` - Retrieve an Inbound ACH Transfer Return
* `retrieveAnInboundWireDrawdownRequest` - Retrieve an Inbound Wire Drawdown Request
* `retrieveAnOauthConnection` - Retrieve an OAuth Connection
* `retrieveGroupDetails` - Retrieve Group details
* `retrieveSensitiveDetailsForACard` - Retrieve sensitive details for a Card
* `returnASandboxAchTransfer` - Return a Sandbox ACH Transfer
* `returnASandboxCheckDeposit` - Return a Sandbox Check Deposit
* `reverseASandboxWireTransfer` - Reverse a Sandbox Wire Transfer
* `simulateARealTimePaymentsTransferToYourAccount` - Simulate a Real Time Payments Transfer to your account
* `simulateARefundOnACard` - Simulate a refund on a card
* `simulateATaxDocumentBeingCreated` - Simulate a tax document being created
* `simulateAWireTransferToYourAccount` - Simulate a Wire Transfer to your account
* `simulateAnAccountStatementBeingCreated` - Simulate an Account Statement being created
* `simulateAnAchTransferToYourAccount` - Simulate an ACH Transfer to your account
* `simulateAnAuthorizationOnACard` - Simulate an authorization on a Card
* `simulateAnInboundWireDrawdownRequestBeingCreated` - Simulate an Inbound Wire Drawdown request being created
* `simulateDigitalWalletProvisioningForACard` - Simulate digital wallet provisioning for a card
* `simulateSettlingACardAuthorization` - Simulate settling a card authorization
* `simulatesAdvancingTheStateOfACardDispute` - Simulates advancing the state of a card dispute
* `submitASandboxAchTransfer` - Submit a Sandbox ACH Transfer
* `submitASandboxCheckDeposit` - Submit a Sandbox Check Deposit
* `submitASandboxWireTransfer` - Submit a Sandbox Wire Transfer
* `updateACard` - Update a Card
* `updateALimit` - Update a Limit
* `updateAnAccount` - Update an Account
* `updateAnAccountNumber` - Update an Account Number
* `updateAnEventSubscription` - Update an Event Subscription
* `updateAnExternalAccount` - Update an External Account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
