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
            BearerAuth: shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        }),
    )

    req := operations.ActionARealTimeDecisionRequest{
        PathParams: operations.ActionARealTimeDecisionPathParams{
            RealTimeDecisionID: "corrupti",
        },
        Request: shared.ActionARealTimeDecisionParameters{
            CardAuthorization: &shared.ActionARealTimeDecisionParametersCardAuthorization{
                Decision: "decline",
            },
            DigitalWalletAuthentication: &shared.ActionARealTimeDecisionParametersDigitalWalletAuthentication{
                Result: "failure",
            },
            DigitalWalletToken: &shared.ActionARealTimeDecisionParametersDigitalWalletToken{
                Approval: &shared.ActionARealTimeDecisionParametersDigitalWalletTokenApproval{
                    CardProfileID: "quibusdam",
                    Email: "Ryan.Little62@yahoo.com",
                    Phone: "1-542-909-2347 x8545",
                },
                Decline: &shared.ActionARealTimeDecisionParametersDigitalWalletTokenDecline{
                    Reason: "nisi",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.ActionARealTimeDecision(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `ActionARealTimeDecision` - Action a Real-Time Decision
* `ApproveACheckTransfer` - Approve a Check Transfer
* `ApproveAWireTransfer` - Approve a Wire Transfer
* `ApproveAnAccountTransfer` - Approve an Account Transfer
* `ApproveAnAchTransfer` - Approve an ACH Transfer
* `CancelAPendingAchTransfer` - Cancel a pending ACH Transfer
* `CancelAPendingCheckTransfer` - Cancel a pending Check Transfer
* `CancelAPendingWireTransfer` - Cancel a pending Wire Transfer
* `CancelAnAccountTransfer` - Cancel an Account Transfer
* `CloseAnAccount` - Close an Account
* `CompleteASandboxAccountTransfer` - Complete a Sandbox Account Transfer
* `CreateACard` - Create a Card
* `CreateACardDispute` - Create a Card Dispute
* `CreateACardProfile` - Create a Card Profile
* `CreateACheckDeposit` - Create a Check Deposit
* `CreateACheckTransfer` - Create a Check Transfer
* `CreateAFile` - Create a File
* `CreateALimit` - Create a Limit
* `CreateASupplementalDocumentForAnEntity` - Create a supplemental document for an Entity
* `CreateAWireDrawdownRequest` - Create a Wire Drawdown Request
* `CreateAWireTransfer` - Create a Wire Transfer
* `CreateAnAccount` - Create an Account
* `CreateAnAccountNumber` - Create an Account Number
* `CreateAnAccountTransfer` - Create an Account Transfer
* `CreateAnAchPrenotification` - Create an ACH Prenotification
* `CreateAnAchReturn` - Create an ACH Return
* `CreateAnAchTransfer` - Create an ACH Transfer
* `CreateAnEntity` - Create an Entity
* `CreateAnEventSubscription` - Create an Event Subscription
* `CreateAnExternalAccount` - Create an External Account
* `DepositASandboxCheckTransfer` - Deposit a Sandbox Check Transfer
* `ListAccountNumbers` - List Account Numbers
* `ListAccountStatements` - List Account Statements
* `ListAccountTransfers` - List Account Transfers
* `ListAccounts` - List Accounts
* `ListAchPrenotifications` - List ACH Prenotifications
* `ListAchTransfers` - List ACH Transfers
* `ListCardDisputes` - List Card Disputes
* `ListCardProfiles` - List Card Profiles
* `ListCards` - List Cards
* `ListCheckDeposits` - List Check Deposits
* `ListCheckTransfers` - List Check Transfers
* `ListDeclinedTransactions` - List Declined Transactions
* `ListDigitalWalletTokens` - List Digital Wallet Tokens
* `ListDocuments` - List Documents
* `ListEntities` - List Entities
* `ListEventSubscriptions` - List Event Subscriptions
* `ListEvents` - List Events
* `ListExternalAccounts` - List External Accounts
* `ListFiles` - List Files
* `ListInboundAchTransferReturns` - List Inbound ACH Transfer Returns
* `ListInboundWireDrawdownRequests` - List Inbound Wire Drawdown Requests
* `ListLimits` - List Limits
* `ListOauthConnections` - List OAuth Connections
* `ListPendingTransactions` - List Pending Transactions
* `ListRoutingNumbers` - List Routing Numbers
* `ListTransactions` - List Transactions
* `ListWireDrawdownRequests` - List Wire Drawdown Requests
* `ListWireTransfers` - List Wire Transfers
* `MailASandboxCheckTransfer` - Mail a Sandbox Check Transfer
* `RejectASandboxCheckDeposit` - Reject a Sandbox Check Deposit
* `RequestAStopPaymentOnACheckTransfer` - Request a stop payment on a Check Transfer
* `RetrieveACard` - Retrieve a Card
* `RetrieveACardDispute` - Retrieve a Card Dispute
* `RetrieveACardProfile` - Retrieve a Card Profile
* `RetrieveACheckDeposit` - Retrieve a Check Deposit
* `RetrieveACheckTransfer` - Retrieve a Check Transfer
* `RetrieveADeclinedTransaction` - Retrieve a Declined Transaction
* `RetrieveADigitalWalletToken` - Retrieve a Digital Wallet Token
* `RetrieveADocument` - Retrieve a Document
* `RetrieveAFile` - Retrieve a File
* `RetrieveALimit` - Retrieve a Limit
* `RetrieveAPendingTransaction` - Retrieve a Pending Transaction
* `RetrieveARealTimeDecision` - Retrieve a Real-Time Decision
* `RetrieveATransaction` - Retrieve a Transaction
* `RetrieveAWireDrawdownRequest` - Retrieve a Wire Drawdown Request
* `RetrieveAWireTransfer` - Retrieve a Wire Transfer
* `RetrieveAnAccount` - Retrieve an Account
* `RetrieveAnAccountNumber` - Retrieve an Account Number
* `RetrieveAnAccountStatement` - Retrieve an Account Statement
* `RetrieveAnAccountTransfer` - Retrieve an Account Transfer
* `RetrieveAnAchPrenotification` - Retrieve an ACH Prenotification
* `RetrieveAnAchTransfer` - Retrieve an ACH Transfer
* `RetrieveAnEntity` - Retrieve an Entity
* `RetrieveAnEvent` - Retrieve an Event
* `RetrieveAnEventSubscription` - Retrieve an Event Subscription
* `RetrieveAnExternalAccount` - Retrieve an External Account
* `RetrieveAnInboundAchTransferReturn` - Retrieve an Inbound ACH Transfer Return
* `RetrieveAnInboundWireDrawdownRequest` - Retrieve an Inbound Wire Drawdown Request
* `RetrieveAnOauthConnection` - Retrieve an OAuth Connection
* `RetrieveGroupDetails` - Retrieve Group details
* `RetrieveSensitiveDetailsForACard` - Retrieve sensitive details for a Card
* `ReturnASandboxAchTransfer` - Return a Sandbox ACH Transfer
* `ReturnASandboxCheckDeposit` - Return a Sandbox Check Deposit
* `ReverseASandboxWireTransfer` - Reverse a Sandbox Wire Transfer
* `SimulateARealTimePaymentsTransferToYourAccount` - Simulate a Real Time Payments Transfer to your account
* `SimulateARefundOnACard` - Simulate a refund on a card
* `SimulateATaxDocumentBeingCreated` - Simulate a tax document being created
* `SimulateAWireTransferToYourAccount` - Simulate a Wire Transfer to your account
* `SimulateAnAccountStatementBeingCreated` - Simulate an Account Statement being created
* `SimulateAnAchTransferToYourAccount` - Simulate an ACH Transfer to your account
* `SimulateAnAuthorizationOnACard` - Simulate an authorization on a Card
* `SimulateAnInboundWireDrawdownRequestBeingCreated` - Simulate an Inbound Wire Drawdown request being created
* `SimulateDigitalWalletProvisioningForACard` - Simulate digital wallet provisioning for a card
* `SimulateSettlingACardAuthorization` - Simulate settling a card authorization
* `SimulatesAdvancingTheStateOfACardDispute` - Simulates advancing the state of a card dispute
* `SubmitASandboxAchTransfer` - Submit a Sandbox ACH Transfer
* `SubmitASandboxCheckDeposit` - Submit a Sandbox Check Deposit
* `SubmitASandboxWireTransfer` - Submit a Sandbox Wire Transfer
* `UpdateACard` - Update a Card
* `UpdateALimit` - Update a Limit
* `UpdateAnAccount` - Update an Account
* `UpdateAnAccountNumber` - Update an Account Number
* `UpdateAnEventSubscription` - Update an Event Subscription
* `UpdateAnExternalAccount` - Update an External Account
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
