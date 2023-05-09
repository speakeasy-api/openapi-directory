# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/increase.com/0.0.1/go
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
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ActionARealTimeDecision(ctx, operations.ActionARealTimeDecisionRequest{
        ActionARealTimeDecisionParameters: shared.ActionARealTimeDecisionParameters{
            CardAuthorization: &shared.ActionARealTimeDecisionParametersCardAuthorization{
                Decision: shared.ActionARealTimeDecisionParametersCardAuthorizationDecisionEnumDecline,
            },
            DigitalWalletAuthentication: &shared.ActionARealTimeDecisionParametersDigitalWalletAuthentication{
                Result: shared.ActionARealTimeDecisionParametersDigitalWalletAuthenticationResultEnumFailure,
            },
            DigitalWalletToken: &shared.ActionARealTimeDecisionParametersDigitalWalletToken{
                Approval: &shared.ActionARealTimeDecisionParametersDigitalWalletTokenApproval{
                    CardProfileID: "distinctio",
                    Email: sdk.String("Leda_Stiedemann@hotmail.com"),
                    Phone: sdk.String("1-663-528-0923 x478"),
                },
                Decline: &shared.ActionARealTimeDecisionParametersDigitalWalletTokenDecline{
                    Reason: sdk.String("voluptatum"),
                },
            },
        },
        RealTimeDecisionID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RealTimeDecision != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [ActionARealTimeDecision](docs/sdk/README.md#actionarealtimedecision) - Action a Real-Time Decision
* [ApproveACheckTransfer](docs/sdk/README.md#approveachecktransfer) - Approve a Check Transfer
* [ApproveAWireTransfer](docs/sdk/README.md#approveawiretransfer) - Approve a Wire Transfer
* [ApproveAnAccountTransfer](docs/sdk/README.md#approveanaccounttransfer) - Approve an Account Transfer
* [ApproveAnAchTransfer](docs/sdk/README.md#approveanachtransfer) - Approve an ACH Transfer
* [CancelAPendingAchTransfer](docs/sdk/README.md#cancelapendingachtransfer) - Cancel a pending ACH Transfer
* [CancelAPendingCheckTransfer](docs/sdk/README.md#cancelapendingchecktransfer) - Cancel a pending Check Transfer
* [CancelAPendingWireTransfer](docs/sdk/README.md#cancelapendingwiretransfer) - Cancel a pending Wire Transfer
* [CancelAnAccountTransfer](docs/sdk/README.md#cancelanaccounttransfer) - Cancel an Account Transfer
* [CloseAnAccount](docs/sdk/README.md#closeanaccount) - Close an Account
* [CompleteASandboxAccountTransfer](docs/sdk/README.md#completeasandboxaccounttransfer) - Complete a Sandbox Account Transfer
* [CompleteASandboxRealTimePaymentsTransfer](docs/sdk/README.md#completeasandboxrealtimepaymentstransfer) - Complete a Sandbox Real Time Payments Transfer
* [CreateABookkeepingAccount](docs/sdk/README.md#createabookkeepingaccount) - Create a Bookkeeping Account
* [CreateABookkeepingEntrySet](docs/sdk/README.md#createabookkeepingentryset) - Create a Bookkeeping Entry Set
* [CreateACard](docs/sdk/README.md#createacard) - Create a Card
* [CreateACardDispute](docs/sdk/README.md#createacarddispute) - Create a Card Dispute
* [CreateACardProfile](docs/sdk/README.md#createacardprofile) - Create a Card Profile
* [CreateACheckDeposit](docs/sdk/README.md#createacheckdeposit) - Create a Check Deposit
* [CreateACheckTransfer](docs/sdk/README.md#createachecktransfer) - Create a Check Transfer
* [CreateAFile](docs/sdk/README.md#createafile) - Create a File
* [CreateALimit](docs/sdk/README.md#createalimit) - Create a Limit
* [CreateARealTimePaymentsTransfer](docs/sdk/README.md#createarealtimepaymentstransfer) - Create a Real Time Payments Transfer
* [CreateASupplementalDocumentForAnEntity](docs/sdk/README.md#createasupplementaldocumentforanentity) - Create a supplemental document for an Entity
* [CreateAWireDrawdownRequest](docs/sdk/README.md#createawiredrawdownrequest) - Create a Wire Drawdown Request
* [CreateAWireTransfer](docs/sdk/README.md#createawiretransfer) - Create a Wire Transfer
* [CreateAnAccount](docs/sdk/README.md#createanaccount) - Create an Account
* [CreateAnAccountNumber](docs/sdk/README.md#createanaccountnumber) - Create an Account Number
* [CreateAnAccountTransfer](docs/sdk/README.md#createanaccounttransfer) - Create an Account Transfer
* [CreateAnAchPrenotification](docs/sdk/README.md#createanachprenotification) - Create an ACH Prenotification
* [CreateAnAchReturn](docs/sdk/README.md#createanachreturn) - Create an ACH Return
* [CreateAnAchTransfer](docs/sdk/README.md#createanachtransfer) - Create an ACH Transfer
* [CreateAnEntity](docs/sdk/README.md#createanentity) - Create an Entity
* [CreateAnEventSubscription](docs/sdk/README.md#createaneventsubscription) - Create an Event Subscription
* [CreateAnExport](docs/sdk/README.md#createanexport) - Create an Export
* [CreateAnExternalAccount](docs/sdk/README.md#createanexternalaccount) - Create an External Account
* [DepositASandboxCheckTransfer](docs/sdk/README.md#depositasandboxchecktransfer) - Deposit a Sandbox Check Transfer
* [ListAccountNumbers](docs/sdk/README.md#listaccountnumbers) - List Account Numbers
* [ListAccountStatements](docs/sdk/README.md#listaccountstatements) - List Account Statements
* [ListAccountTransfers](docs/sdk/README.md#listaccounttransfers) - List Account Transfers
* [ListAccounts](docs/sdk/README.md#listaccounts) - List Accounts
* [ListAchPrenotifications](docs/sdk/README.md#listachprenotifications) - List ACH Prenotifications
* [ListAchTransfers](docs/sdk/README.md#listachtransfers) - List ACH Transfers
* [ListBookkeepingAccounts](docs/sdk/README.md#listbookkeepingaccounts) - List Bookkeeping Accounts
* [ListBookkeepingEntries](docs/sdk/README.md#listbookkeepingentries) - List Bookkeeping Entries
* [ListCardDisputes](docs/sdk/README.md#listcarddisputes) - List Card Disputes
* [ListCardProfiles](docs/sdk/README.md#listcardprofiles) - List Card Profiles
* [ListCards](docs/sdk/README.md#listcards) - List Cards
* [ListCheckDeposits](docs/sdk/README.md#listcheckdeposits) - List Check Deposits
* [ListCheckTransfers](docs/sdk/README.md#listchecktransfers) - List Check Transfers
* [ListDeclinedTransactions](docs/sdk/README.md#listdeclinedtransactions) - List Declined Transactions
* [ListDigitalWalletTokens](docs/sdk/README.md#listdigitalwallettokens) - List Digital Wallet Tokens
* [ListDocuments](docs/sdk/README.md#listdocuments) - List Documents
* [ListEntities](docs/sdk/README.md#listentities) - List Entities
* [ListEventSubscriptions](docs/sdk/README.md#listeventsubscriptions) - List Event Subscriptions
* [ListEvents](docs/sdk/README.md#listevents) - List Events
* [ListExports](docs/sdk/README.md#listexports) - List Exports
* [ListExternalAccounts](docs/sdk/README.md#listexternalaccounts) - List External Accounts
* [ListFiles](docs/sdk/README.md#listfiles) - List Files
* [ListInboundAchTransferReturns](docs/sdk/README.md#listinboundachtransferreturns) - List Inbound ACH Transfer Returns
* [ListInboundWireDrawdownRequests](docs/sdk/README.md#listinboundwiredrawdownrequests) - List Inbound Wire Drawdown Requests
* [ListLimits](docs/sdk/README.md#listlimits) - List Limits
* [ListOauthConnections](docs/sdk/README.md#listoauthconnections) - List OAuth Connections
* [ListPendingTransactions](docs/sdk/README.md#listpendingtransactions) - List Pending Transactions
* [ListPrograms](docs/sdk/README.md#listprograms) - List Programs
* [ListRealTimePaymentsTransfers](docs/sdk/README.md#listrealtimepaymentstransfers) - List Real Time Payments Transfers
* [ListRoutingNumbers](docs/sdk/README.md#listroutingnumbers) - List Routing Numbers
* [ListTransactions](docs/sdk/README.md#listtransactions) - List Transactions
* [ListWireDrawdownRequests](docs/sdk/README.md#listwiredrawdownrequests) - List Wire Drawdown Requests
* [ListWireTransfers](docs/sdk/README.md#listwiretransfers) - List Wire Transfers
* [LookUpTheBalanceForAnAccount](docs/sdk/README.md#lookupthebalanceforanaccount) - Look up the balance for an Account
* [MailASandboxCheckTransfer](docs/sdk/README.md#mailasandboxchecktransfer) - Mail a Sandbox Check Transfer
* [RejectASandboxCheckDeposit](docs/sdk/README.md#rejectasandboxcheckdeposit) - Reject a Sandbox Check Deposit
* [RequestAStopPaymentOnACheckTransfer](docs/sdk/README.md#requestastoppaymentonachecktransfer) - Request a stop payment on a Check Transfer
* [RetrieveACard](docs/sdk/README.md#retrieveacard) - Retrieve a Card
* [RetrieveACardDispute](docs/sdk/README.md#retrieveacarddispute) - Retrieve a Card Dispute
* [RetrieveACardProfile](docs/sdk/README.md#retrieveacardprofile) - Retrieve a Card Profile
* [RetrieveACheckDeposit](docs/sdk/README.md#retrieveacheckdeposit) - Retrieve a Check Deposit
* [RetrieveACheckTransfer](docs/sdk/README.md#retrieveachecktransfer) - Retrieve a Check Transfer
* [RetrieveADeclinedTransaction](docs/sdk/README.md#retrieveadeclinedtransaction) - Retrieve a Declined Transaction
* [RetrieveADigitalWalletToken](docs/sdk/README.md#retrieveadigitalwallettoken) - Retrieve a Digital Wallet Token
* [RetrieveADocument](docs/sdk/README.md#retrieveadocument) - Retrieve a Document
* [RetrieveAFile](docs/sdk/README.md#retrieveafile) - Retrieve a File
* [RetrieveALimit](docs/sdk/README.md#retrievealimit) - Retrieve a Limit
* [RetrieveAPendingTransaction](docs/sdk/README.md#retrieveapendingtransaction) - Retrieve a Pending Transaction
* [RetrieveAProgram](docs/sdk/README.md#retrieveaprogram) - Retrieve a Program
* [RetrieveARealTimeDecision](docs/sdk/README.md#retrievearealtimedecision) - Retrieve a Real-Time Decision
* [RetrieveARealTimePaymentsTransfer](docs/sdk/README.md#retrievearealtimepaymentstransfer) - Retrieve a Real Time Payments Transfer
* [RetrieveATransaction](docs/sdk/README.md#retrieveatransaction) - Retrieve a Transaction
* [RetrieveAWireDrawdownRequest](docs/sdk/README.md#retrieveawiredrawdownrequest) - Retrieve a Wire Drawdown Request
* [RetrieveAWireTransfer](docs/sdk/README.md#retrieveawiretransfer) - Retrieve a Wire Transfer
* [RetrieveAnAccount](docs/sdk/README.md#retrieveanaccount) - Retrieve an Account
* [RetrieveAnAccountNumber](docs/sdk/README.md#retrieveanaccountnumber) - Retrieve an Account Number
* [RetrieveAnAccountStatement](docs/sdk/README.md#retrieveanaccountstatement) - Retrieve an Account Statement
* [RetrieveAnAccountTransfer](docs/sdk/README.md#retrieveanaccounttransfer) - Retrieve an Account Transfer
* [RetrieveAnAchPrenotification](docs/sdk/README.md#retrieveanachprenotification) - Retrieve an ACH Prenotification
* [RetrieveAnAchTransfer](docs/sdk/README.md#retrieveanachtransfer) - Retrieve an ACH Transfer
* [RetrieveAnEntity](docs/sdk/README.md#retrieveanentity) - Retrieve an Entity
* [RetrieveAnEvent](docs/sdk/README.md#retrieveanevent) - Retrieve an Event
* [RetrieveAnEventSubscription](docs/sdk/README.md#retrieveaneventsubscription) - Retrieve an Event Subscription
* [RetrieveAnExport](docs/sdk/README.md#retrieveanexport) - Retrieve an Export
* [RetrieveAnExternalAccount](docs/sdk/README.md#retrieveanexternalaccount) - Retrieve an External Account
* [RetrieveAnInboundAchTransferReturn](docs/sdk/README.md#retrieveaninboundachtransferreturn) - Retrieve an Inbound ACH Transfer Return
* [RetrieveAnInboundWireDrawdownRequest](docs/sdk/README.md#retrieveaninboundwiredrawdownrequest) - Retrieve an Inbound Wire Drawdown Request
* [RetrieveAnOauthConnection](docs/sdk/README.md#retrieveanoauthconnection) - Retrieve an OAuth Connection
* [RetrieveGroupDetails](docs/sdk/README.md#retrievegroupdetails) - Retrieve Group details
* [RetrieveSensitiveDetailsForACard](docs/sdk/README.md#retrievesensitivedetailsforacard) - Retrieve sensitive details for a Card
* [ReturnASandboxAchTransfer](docs/sdk/README.md#returnasandboxachtransfer) - Return a Sandbox ACH Transfer
* [ReturnASandboxCheckDeposit](docs/sdk/README.md#returnasandboxcheckdeposit) - Return a Sandbox Check Deposit
* [ReturnASandboxCheckTransfer](docs/sdk/README.md#returnasandboxchecktransfer) - Return a Sandbox Check Transfer
* [ReverseASandboxWireTransfer](docs/sdk/README.md#reverseasandboxwiretransfer) - Reverse a Sandbox Wire Transfer
* [SimulateARealTimePaymentsTransferToYourAccount](docs/sdk/README.md#simulatearealtimepaymentstransfertoyouraccount) - Simulate a Real Time Payments Transfer to your account
* [SimulateARefundOnACard](docs/sdk/README.md#simulatearefundonacard) - Simulate a refund on a card
* [SimulateATaxDocumentBeingCreated](docs/sdk/README.md#simulateataxdocumentbeingcreated) - Simulate a tax document being created
* [SimulateAWireTransferToYourAccount](docs/sdk/README.md#simulateawiretransfertoyouraccount) - Simulate a Wire Transfer to your account
* [SimulateAnAccountStatementBeingCreated](docs/sdk/README.md#simulateanaccountstatementbeingcreated) - Simulate an Account Statement being created
* [SimulateAnAchTransferToYourAccount](docs/sdk/README.md#simulateanachtransfertoyouraccount) - Simulate an ACH Transfer to your account
* [SimulateAnAuthorizationOnACard](docs/sdk/README.md#simulateanauthorizationonacard) - Simulate an authorization on a Card
* [SimulateAnInboundWireDrawdownRequestBeingCreated](docs/sdk/README.md#simulateaninboundwiredrawdownrequestbeingcreated) - Simulate an Inbound Wire Drawdown request being created
* [SimulateAnInterestPaymentToYourAccount](docs/sdk/README.md#simulateaninterestpaymenttoyouraccount) - Simulate an Interest Payment to your account
* [SimulateDigitalWalletProvisioningForACard](docs/sdk/README.md#simulatedigitalwalletprovisioningforacard) - Simulate digital wallet provisioning for a card
* [SimulateSettlingACardAuthorization](docs/sdk/README.md#simulatesettlingacardauthorization) - Simulate settling a card authorization
* [SimulatesAdvancingTheStateOfACardDispute](docs/sdk/README.md#simulatesadvancingthestateofacarddispute) - Simulates advancing the state of a card dispute
* [SubmitASandboxAchTransfer](docs/sdk/README.md#submitasandboxachtransfer) - Submit a Sandbox ACH Transfer
* [SubmitASandboxCheckDeposit](docs/sdk/README.md#submitasandboxcheckdeposit) - Submit a Sandbox Check Deposit
* [SubmitASandboxWireTransfer](docs/sdk/README.md#submitasandboxwiretransfer) - Submit a Sandbox Wire Transfer
* [UpdateACard](docs/sdk/README.md#updateacard) - Update a Card
* [UpdateALimit](docs/sdk/README.md#updatealimit) - Update a Limit
* [UpdateAnAccount](docs/sdk/README.md#updateanaccount) - Update an Account
* [UpdateAnAccountNumber](docs/sdk/README.md#updateanaccountnumber) - Update an Account Number
* [UpdateAnEventSubscription](docs/sdk/README.md#updateaneventsubscription) - Update an Event Subscription
* [UpdateAnExternalAccount](docs/sdk/README.md#updateanexternalaccount) - Update an External Account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
