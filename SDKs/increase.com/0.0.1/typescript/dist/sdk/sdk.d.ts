import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.increase.com", "https://sandbox.increase.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Action a Real-Time Decision
     */
    actionARealTimeDecision(req: operations.ActionARealTimeDecisionRequest, config?: AxiosRequestConfig): Promise<operations.ActionARealTimeDecisionResponse>;
    /**
     * Approve a Check Transfer
     */
    approveACheckTransfer(req: operations.ApproveACheckTransferRequest, config?: AxiosRequestConfig): Promise<operations.ApproveACheckTransferResponse>;
    /**
     * Approve a Wire Transfer
     */
    approveAWireTransfer(req: operations.ApproveAWireTransferRequest, config?: AxiosRequestConfig): Promise<operations.ApproveAWireTransferResponse>;
    /**
     * Approve an Account Transfer
     */
    approveAnAccountTransfer(req: operations.ApproveAnAccountTransferRequest, config?: AxiosRequestConfig): Promise<operations.ApproveAnAccountTransferResponse>;
    /**
     * Approve an ACH Transfer
     *
     * @remarks
     * Approves an ACH Transfer in a pending_approval state.
     */
    approveAnAchTransfer(req: operations.ApproveAnAchTransferRequest, config?: AxiosRequestConfig): Promise<operations.ApproveAnAchTransferResponse>;
    /**
     * Cancel a pending ACH Transfer
     *
     * @remarks
     * Cancels an ACH Transfer in a pending_approval state.
     */
    cancelAPendingAchTransfer(req: operations.CancelAPendingAchTransferRequest, config?: AxiosRequestConfig): Promise<operations.CancelAPendingAchTransferResponse>;
    /**
     * Cancel a pending Check Transfer
     */
    cancelAPendingCheckTransfer(req: operations.CancelAPendingCheckTransferRequest, config?: AxiosRequestConfig): Promise<operations.CancelAPendingCheckTransferResponse>;
    /**
     * Cancel a pending Wire Transfer
     */
    cancelAPendingWireTransfer(req: operations.CancelAPendingWireTransferRequest, config?: AxiosRequestConfig): Promise<operations.CancelAPendingWireTransferResponse>;
    /**
     * Cancel an Account Transfer
     */
    cancelAnAccountTransfer(req: operations.CancelAnAccountTransferRequest, config?: AxiosRequestConfig): Promise<operations.CancelAnAccountTransferResponse>;
    /**
     * Close an Account
     */
    closeAnAccount(req: operations.CloseAnAccountRequest, config?: AxiosRequestConfig): Promise<operations.CloseAnAccountResponse>;
    /**
     * Complete a Sandbox Account Transfer
     *
     * @remarks
     * If your account is configured to require approval for each transfer, this endpoint simulates the approval of an [Account Transfer](#account-transfers). You can also approve sandbox Account Transfers in the dashboard. This transfer must first have a `status` of `pending_approval`.
     */
    completeASandboxAccountTransfer(req: operations.CompleteASandboxAccountTransferRequest, config?: AxiosRequestConfig): Promise<operations.CompleteASandboxAccountTransferResponse>;
    /**
     * Create a Card
     */
    createACard(req: shared.CreateACardParameters, config?: AxiosRequestConfig): Promise<operations.CreateACardResponse>;
    /**
     * Create a Card Dispute
     */
    createACardDispute(req: shared.CreateACardDisputeParameters, config?: AxiosRequestConfig): Promise<operations.CreateACardDisputeResponse>;
    /**
     * Create a Card Profile
     */
    createACardProfile(req: shared.CreateACardProfileParameters, config?: AxiosRequestConfig): Promise<operations.CreateACardProfileResponse>;
    /**
     * Create a Check Deposit
     */
    createACheckDeposit(req: shared.CreateACheckDepositParameters, config?: AxiosRequestConfig): Promise<operations.CreateACheckDepositResponse>;
    /**
     * Create a Check Transfer
     */
    createACheckTransfer(req: shared.CreateACheckTransferParameters, config?: AxiosRequestConfig): Promise<operations.CreateACheckTransferResponse>;
    /**
     * Create a File
     *
     * @remarks
     * To upload a file to Increase, you'll need to send a request of Content-Type `multipart/form-data`. The request should contain the file you would like to upload, as well as the parameters for creating a file.
     */
    createAFile(req: shared.CreateAFileParameters, config?: AxiosRequestConfig): Promise<operations.CreateAFileResponse>;
    /**
     * Create a Limit
     */
    createALimit(req: shared.CreateALimitParameters, config?: AxiosRequestConfig): Promise<operations.CreateALimitResponse>;
    /**
     * Create a supplemental document for an Entity
     */
    createASupplementalDocumentForAnEntity(req: operations.CreateASupplementalDocumentForAnEntityRequest, config?: AxiosRequestConfig): Promise<operations.CreateASupplementalDocumentForAnEntityResponse>;
    /**
     * Create a Wire Drawdown Request
     */
    createAWireDrawdownRequest(req: shared.CreateAWireDrawdownRequestParameters, config?: AxiosRequestConfig): Promise<operations.CreateAWireDrawdownRequestResponse>;
    /**
     * Create a Wire Transfer
     */
    createAWireTransfer(req: shared.CreateAWireTransferParameters, config?: AxiosRequestConfig): Promise<operations.CreateAWireTransferResponse>;
    /**
     * Create an Account
     */
    createAnAccount(req: shared.CreateAnAccountParameters, config?: AxiosRequestConfig): Promise<operations.CreateAnAccountResponse>;
    /**
     * Create an Account Number
     */
    createAnAccountNumber(req: shared.CreateAnAccountNumberParameters, config?: AxiosRequestConfig): Promise<operations.CreateAnAccountNumberResponse>;
    /**
     * Create an Account Transfer
     */
    createAnAccountTransfer(req: shared.CreateAnAccountTransferParameters, config?: AxiosRequestConfig): Promise<operations.CreateAnAccountTransferResponse>;
    /**
     * Create an ACH Prenotification
     */
    createAnAchPrenotification(req: shared.CreateAnAchPrenotificationParameters, config?: AxiosRequestConfig): Promise<operations.CreateAnAchPrenotificationResponse>;
    /**
     * Create an ACH Return
     */
    createAnAchReturn(req: shared.CreateAnAchReturnParameters, config?: AxiosRequestConfig): Promise<operations.CreateAnAchReturnResponse>;
    /**
     * Create an ACH Transfer
     */
    createAnAchTransfer(req: shared.CreateAnAchTransferParameters, config?: AxiosRequestConfig): Promise<operations.CreateAnAchTransferResponse>;
    /**
     * Create an Entity
     */
    createAnEntity(req: shared.CreateAnEntityParameters, config?: AxiosRequestConfig): Promise<operations.CreateAnEntityResponse>;
    /**
     * Create an Event Subscription
     */
    createAnEventSubscription(req: shared.CreateAnEventSubscriptionParameters, config?: AxiosRequestConfig): Promise<operations.CreateAnEventSubscriptionResponse>;
    /**
     * Create an External Account
     */
    createAnExternalAccount(req: shared.CreateAnExternalAccountParameters, config?: AxiosRequestConfig): Promise<operations.CreateAnExternalAccountResponse>;
    /**
     * Deposit a Sandbox Check Transfer
     *
     * @remarks
     * Simulates a [Check Transfer](#check-transfers) being deposited at a bank. This transfer must first have a `status` of `mailed`.
     */
    depositASandboxCheckTransfer(req: operations.DepositASandboxCheckTransferRequest, config?: AxiosRequestConfig): Promise<operations.DepositASandboxCheckTransferResponse>;
    /**
     * List Account Numbers
     */
    listAccountNumbers(req: operations.ListAccountNumbersRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountNumbersResponse>;
    /**
     * List Account Statements
     */
    listAccountStatements(req: operations.ListAccountStatementsRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountStatementsResponse>;
    /**
     * List Account Transfers
     */
    listAccountTransfers(req: operations.ListAccountTransfersRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountTransfersResponse>;
    /**
     * List Accounts
     */
    listAccounts(req: operations.ListAccountsRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountsResponse>;
    /**
     * List ACH Prenotifications
     */
    listAchPrenotifications(req: operations.ListAchPrenotificationsRequest, config?: AxiosRequestConfig): Promise<operations.ListAchPrenotificationsResponse>;
    /**
     * List ACH Transfers
     */
    listAchTransfers(req: operations.ListAchTransfersRequest, config?: AxiosRequestConfig): Promise<operations.ListAchTransfersResponse>;
    /**
     * List Card Disputes
     */
    listCardDisputes(req: operations.ListCardDisputesRequest, config?: AxiosRequestConfig): Promise<operations.ListCardDisputesResponse>;
    /**
     * List Card Profiles
     */
    listCardProfiles(req: operations.ListCardProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ListCardProfilesResponse>;
    /**
     * List Cards
     */
    listCards(req: operations.ListCardsRequest, config?: AxiosRequestConfig): Promise<operations.ListCardsResponse>;
    /**
     * List Check Deposits
     */
    listCheckDeposits(req: operations.ListCheckDepositsRequest, config?: AxiosRequestConfig): Promise<operations.ListCheckDepositsResponse>;
    /**
     * List Check Transfers
     */
    listCheckTransfers(req: operations.ListCheckTransfersRequest, config?: AxiosRequestConfig): Promise<operations.ListCheckTransfersResponse>;
    /**
     * List Declined Transactions
     */
    listDeclinedTransactions(req: operations.ListDeclinedTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeclinedTransactionsResponse>;
    /**
     * List Digital Wallet Tokens
     */
    listDigitalWalletTokens(req: operations.ListDigitalWalletTokensRequest, config?: AxiosRequestConfig): Promise<operations.ListDigitalWalletTokensResponse>;
    /**
     * List Documents
     */
    listDocuments(req: operations.ListDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.ListDocumentsResponse>;
    /**
     * List Entities
     */
    listEntities(req: operations.ListEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.ListEntitiesResponse>;
    /**
     * List Event Subscriptions
     */
    listEventSubscriptions(req: operations.ListEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventSubscriptionsResponse>;
    /**
     * List Events
     */
    listEvents(req: operations.ListEventsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventsResponse>;
    /**
     * List External Accounts
     */
    listExternalAccounts(req: operations.ListExternalAccountsRequest, config?: AxiosRequestConfig): Promise<operations.ListExternalAccountsResponse>;
    /**
     * List Files
     */
    listFiles(req: operations.ListFilesRequest, config?: AxiosRequestConfig): Promise<operations.ListFilesResponse>;
    /**
     * List Inbound ACH Transfer Returns
     */
    listInboundAchTransferReturns(req: operations.ListInboundAchTransferReturnsRequest, config?: AxiosRequestConfig): Promise<operations.ListInboundAchTransferReturnsResponse>;
    /**
     * List Inbound Wire Drawdown Requests
     */
    listInboundWireDrawdownRequests(req: operations.ListInboundWireDrawdownRequestsRequest, config?: AxiosRequestConfig): Promise<operations.ListInboundWireDrawdownRequestsResponse>;
    /**
     * List Limits
     */
    listLimits(req: operations.ListLimitsRequest, config?: AxiosRequestConfig): Promise<operations.ListLimitsResponse>;
    /**
     * List OAuth Connections
     */
    listOauthConnections(req: operations.ListOauthConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListOauthConnectionsResponse>;
    /**
     * List Pending Transactions
     */
    listPendingTransactions(req: operations.ListPendingTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.ListPendingTransactionsResponse>;
    /**
     * List Routing Numbers
     *
     * @remarks
     * You can use this API to confirm if a routing number is valid, such as when a user is providing you with bank account details. Since routing numbers uniquely identify a bank, this will always return 0 or 1 entry. In Sandbox, the only valid routing number for this method is 110000000.
     */
    listRoutingNumbers(req: operations.ListRoutingNumbersRequest, config?: AxiosRequestConfig): Promise<operations.ListRoutingNumbersResponse>;
    /**
     * List Transactions
     */
    listTransactions(req: operations.ListTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.ListTransactionsResponse>;
    /**
     * List Wire Drawdown Requests
     */
    listWireDrawdownRequests(req: operations.ListWireDrawdownRequestsRequest, config?: AxiosRequestConfig): Promise<operations.ListWireDrawdownRequestsResponse>;
    /**
     * List Wire Transfers
     */
    listWireTransfers(req: operations.ListWireTransfersRequest, config?: AxiosRequestConfig): Promise<operations.ListWireTransfersResponse>;
    /**
     * Mail a Sandbox Check Transfer
     *
     * @remarks
     * Simulates the mailing of a [Check Transfer](#check-transfers), which happens once per weekday in production but can be sped up in sandbox. This transfer must first have a `status` of `pending_approval` or `pending_submission`.
     */
    mailASandboxCheckTransfer(req: operations.MailASandboxCheckTransferRequest, config?: AxiosRequestConfig): Promise<operations.MailASandboxCheckTransferResponse>;
    /**
     * Reject a Sandbox Check Deposit
     *
     * @remarks
     * Simulates the rejection of a [Check Deposit](#check-deposits) by Increase due to factors like poor image quality. This Check Deposit must first have a `status` of `pending`.
     */
    rejectASandboxCheckDeposit(req: operations.RejectASandboxCheckDepositRequest, config?: AxiosRequestConfig): Promise<operations.RejectASandboxCheckDepositResponse>;
    /**
     * Request a stop payment on a Check Transfer
     */
    requestAStopPaymentOnACheckTransfer(req: operations.RequestAStopPaymentOnACheckTransferRequest, config?: AxiosRequestConfig): Promise<operations.RequestAStopPaymentOnACheckTransferResponse>;
    /**
     * Retrieve a Card
     */
    retrieveACard(req: operations.RetrieveACardRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveACardResponse>;
    /**
     * Retrieve a Card Dispute
     */
    retrieveACardDispute(req: operations.RetrieveACardDisputeRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveACardDisputeResponse>;
    /**
     * Retrieve a Card Profile
     */
    retrieveACardProfile(req: operations.RetrieveACardProfileRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveACardProfileResponse>;
    /**
     * Retrieve a Check Deposit
     */
    retrieveACheckDeposit(req: operations.RetrieveACheckDepositRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveACheckDepositResponse>;
    /**
     * Retrieve a Check Transfer
     */
    retrieveACheckTransfer(req: operations.RetrieveACheckTransferRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveACheckTransferResponse>;
    /**
     * Retrieve a Declined Transaction
     */
    retrieveADeclinedTransaction(req: operations.RetrieveADeclinedTransactionRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveADeclinedTransactionResponse>;
    /**
     * Retrieve a Digital Wallet Token
     */
    retrieveADigitalWalletToken(req: operations.RetrieveADigitalWalletTokenRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveADigitalWalletTokenResponse>;
    /**
     * Retrieve a Document
     */
    retrieveADocument(req: operations.RetrieveADocumentRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveADocumentResponse>;
    /**
     * Retrieve a File
     */
    retrieveAFile(req: operations.RetrieveAFileRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAFileResponse>;
    /**
     * Retrieve a Limit
     */
    retrieveALimit(req: operations.RetrieveALimitRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveALimitResponse>;
    /**
     * Retrieve a Pending Transaction
     */
    retrieveAPendingTransaction(req: operations.RetrieveAPendingTransactionRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAPendingTransactionResponse>;
    /**
     * Retrieve a Real-Time Decision
     */
    retrieveARealTimeDecision(req: operations.RetrieveARealTimeDecisionRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveARealTimeDecisionResponse>;
    /**
     * Retrieve a Transaction
     */
    retrieveATransaction(req: operations.RetrieveATransactionRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveATransactionResponse>;
    /**
     * Retrieve a Wire Drawdown Request
     */
    retrieveAWireDrawdownRequest(req: operations.RetrieveAWireDrawdownRequestRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAWireDrawdownRequestResponse>;
    /**
     * Retrieve a Wire Transfer
     */
    retrieveAWireTransfer(req: operations.RetrieveAWireTransferRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAWireTransferResponse>;
    /**
     * Retrieve an Account
     */
    retrieveAnAccount(req: operations.RetrieveAnAccountRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAnAccountResponse>;
    /**
     * Retrieve an Account Number
     */
    retrieveAnAccountNumber(req: operations.RetrieveAnAccountNumberRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAnAccountNumberResponse>;
    /**
     * Retrieve an Account Statement
     */
    retrieveAnAccountStatement(req: operations.RetrieveAnAccountStatementRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAnAccountStatementResponse>;
    /**
     * Retrieve an Account Transfer
     */
    retrieveAnAccountTransfer(req: operations.RetrieveAnAccountTransferRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAnAccountTransferResponse>;
    /**
     * Retrieve an ACH Prenotification
     */
    retrieveAnAchPrenotification(req: operations.RetrieveAnAchPrenotificationRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAnAchPrenotificationResponse>;
    /**
     * Retrieve an ACH Transfer
     */
    retrieveAnAchTransfer(req: operations.RetrieveAnAchTransferRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAnAchTransferResponse>;
    /**
     * Retrieve an Entity
     */
    retrieveAnEntity(req: operations.RetrieveAnEntityRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAnEntityResponse>;
    /**
     * Retrieve an Event
     */
    retrieveAnEvent(req: operations.RetrieveAnEventRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAnEventResponse>;
    /**
     * Retrieve an Event Subscription
     */
    retrieveAnEventSubscription(req: operations.RetrieveAnEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAnEventSubscriptionResponse>;
    /**
     * Retrieve an External Account
     */
    retrieveAnExternalAccount(req: operations.RetrieveAnExternalAccountRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAnExternalAccountResponse>;
    /**
     * Retrieve an Inbound ACH Transfer Return
     */
    retrieveAnInboundAchTransferReturn(req: operations.RetrieveAnInboundAchTransferReturnRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAnInboundAchTransferReturnResponse>;
    /**
     * Retrieve an Inbound Wire Drawdown Request
     */
    retrieveAnInboundWireDrawdownRequest(req: operations.RetrieveAnInboundWireDrawdownRequestRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAnInboundWireDrawdownRequestResponse>;
    /**
     * Retrieve an OAuth Connection
     */
    retrieveAnOauthConnection(req: operations.RetrieveAnOauthConnectionRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAnOauthConnectionResponse>;
    /**
     * Retrieve Group details
     *
     * @remarks
     * Returns details for the currently authenticated Group.
     */
    retrieveGroupDetails(config?: AxiosRequestConfig): Promise<operations.RetrieveGroupDetailsResponse>;
    /**
     * Retrieve sensitive details for a Card
     */
    retrieveSensitiveDetailsForACard(req: operations.RetrieveSensitiveDetailsForACardRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveSensitiveDetailsForACardResponse>;
    /**
     * Return a Sandbox ACH Transfer
     *
     * @remarks
     * Simulates the return of an [ACH Transfer](#ach-transfers) by the Federal Reserve due to an error condition. This will also create a Transaction to account for the returned funds. This transfer must first have a `status` of `submitted`.
     */
    returnASandboxAchTransfer(req: operations.ReturnASandboxAchTransferRequest, config?: AxiosRequestConfig): Promise<operations.ReturnASandboxAchTransferResponse>;
    /**
     * Return a Sandbox Check Deposit
     *
     * @remarks
     * Simulates the return of a [Check Deposit](#check-deposits). This Check Deposit must first have a `status` of `submitted`.
     */
    returnASandboxCheckDeposit(req: operations.ReturnASandboxCheckDepositRequest, config?: AxiosRequestConfig): Promise<operations.ReturnASandboxCheckDepositResponse>;
    /**
     * Reverse a Sandbox Wire Transfer
     *
     * @remarks
     * Simulates the reversal of a [Wire Transfer](#wire-transfers) by the Federal Reserve due to error conditions. This will also create a [Transaction](#transaction) to account for the returned funds. This Wire Transfer must first have a `status` of `complete`.'
     */
    reverseASandboxWireTransfer(req: operations.ReverseASandboxWireTransferRequest, config?: AxiosRequestConfig): Promise<operations.ReverseASandboxWireTransferResponse>;
    /**
     * Simulate a Real Time Payments Transfer to your account
     *
     * @remarks
     * Simulates an inbound Real Time Payments transfer to your account. Real Time Payments are a beta feature.
     */
    simulateARealTimePaymentsTransferToYourAccount(req: shared.SimulateARealTimePaymentsTransferToYourAccountParameters, config?: AxiosRequestConfig): Promise<operations.SimulateARealTimePaymentsTransferToYourAccountResponse>;
    /**
     * Simulate a refund on a card
     *
     * @remarks
     * Simulates refunding a card transaction. The full value of the original sandbox transaction is refunded.
     */
    simulateARefundOnACard(req: shared.SimulateARefundOnACardParameters, config?: AxiosRequestConfig): Promise<operations.SimulateARefundOnACardResponse>;
    /**
     * Simulate a tax document being created
     *
     * @remarks
     * Simulates an tax document being created for an account.
     */
    simulateATaxDocumentBeingCreated(req: shared.SimulateATaxDocumentBeingCreatedParameters, config?: AxiosRequestConfig): Promise<operations.SimulateATaxDocumentBeingCreatedResponse>;
    /**
     * Simulate a Wire Transfer to your account
     *
     * @remarks
     * Simulates an inbound Wire Transfer to your account.
     */
    simulateAWireTransferToYourAccount(req: shared.SimulateAWireTransferToYourAccountParameters, config?: AxiosRequestConfig): Promise<operations.SimulateAWireTransferToYourAccountResponse>;
    /**
     * Simulate an Account Statement being created
     *
     * @remarks
     * Simulates an [Account Statement](#account-statements) being created for an account. In production, Account Statements are generated once per month.
     */
    simulateAnAccountStatementBeingCreated(req: shared.SimulateAnAccountStatementBeingCreatedParameters, config?: AxiosRequestConfig): Promise<operations.SimulateAnAccountStatementBeingCreatedResponse>;
    /**
     * Simulate an ACH Transfer to your account
     *
     * @remarks
     * Simulates an inbound ACH transfer to your account. This imitates initiating a transaction to an Increase account from a different financial institution. The transfer may be either a credit or a debit depending on if the `amount` is positive or negative. The result of calling this API will be either a [Transaction](#transactions) or a [Declined Transaction](#declined-transactions) depending on whether or not the transfer is allowed.
     */
    simulateAnAchTransferToYourAccount(req: shared.SimulateAnAchTransferToYourAccountParameters, config?: AxiosRequestConfig): Promise<operations.SimulateAnAchTransferToYourAccountResponse>;
    /**
     * Simulate an authorization on a Card
     *
     * @remarks
     * Simulates a purchase authorization on a [Card](#cards). Depending on the balance available to the card and the `amount` submitted, the authorization activity will result in a [Pending Transaction](#pending-transactions) of type `card_authorization` or a [Declined Transaction](#declined-transactions) of type `card_decline`. You can pass either a Card id or a [Digital Wallet Token](#digital-wallet-tokens) id to simulate the two different ways purchases can be made.
     */
    simulateAnAuthorizationOnACard(req: shared.SimulateAnAuthorizationOnACardParameters, config?: AxiosRequestConfig): Promise<operations.SimulateAnAuthorizationOnACardResponse>;
    /**
     * Simulate an Inbound Wire Drawdown request being created
     *
     * @remarks
     * Simulates the receival of an [Inbound Wire Drawdown Request](#inbound-wire-drawdown-requests).
     */
    simulateAnInboundWireDrawdownRequestBeingCreated(req: shared.SimulateAnInboundWireDrawdownRequestBeingCreatedParameters, config?: AxiosRequestConfig): Promise<operations.SimulateAnInboundWireDrawdownRequestBeingCreatedResponse>;
    /**
     * Simulate digital wallet provisioning for a card
     *
     * @remarks
     * Simulates a user attempting add a [Card](#cards) to a digital wallet such as Apple Pay.
     */
    simulateDigitalWalletProvisioningForACard(req: shared.SimulateDigitalWalletProvisioningForACardParameters, config?: AxiosRequestConfig): Promise<operations.SimulateDigitalWalletProvisioningForACardResponse>;
    /**
     * Simulate settling a card authorization
     *
     * @remarks
     * Simulates the settlement of an authorization by a card acquirer. After a card authorization is created, the merchant will eventually send a settlement. This simulates that event, which may occur many days after the purchase in production. The amount settled can be different from the amount originally authorized, for example, when adding a tip to a restaurant bill.
     */
    simulateSettlingACardAuthorization(req: shared.SimulateSettlingACardAuthorizationParameters, config?: AxiosRequestConfig): Promise<operations.SimulateSettlingACardAuthorizationResponse>;
    /**
     * Simulates advancing the state of a card dispute
     *
     * @remarks
     * After a [Card Dispute](#card-disputes) is created in production, the dispute will be reviewed. Since no review happens in sandbox, this endpoint simulates moving a Card Dispute into a rejected or accepted state. A Card Dispute can only be actioned one time and must have a status of `pending_reviewing`.
     */
    simulatesAdvancingTheStateOfACardDispute(req: operations.SimulatesAdvancingTheStateOfACardDisputeRequest, config?: AxiosRequestConfig): Promise<operations.SimulatesAdvancingTheStateOfACardDisputeResponse>;
    /**
     * Submit a Sandbox ACH Transfer
     *
     * @remarks
     * Simulates the submission of an [ACH Transfer](#ach-transfers) to the Federal Reserve. This transfer must first have a `status` of `pending_approval` or `pending_submission`. In production, Increase submits ACH Transfers to the Federal Reserve three times per day on weekdays. Since sandbox ACH Transfers are not submitted to the Federal Reserve, this endpoint allows you to skip that delay and transition the ACH Transfer to a status of `submitted`.
     */
    submitASandboxAchTransfer(req: operations.SubmitASandboxAchTransferRequest, config?: AxiosRequestConfig): Promise<operations.SubmitASandboxAchTransferResponse>;
    /**
     * Submit a Sandbox Check Deposit
     *
     * @remarks
     * Simulates the submission of a [Check Deposit](#check-deposits) to the Federal Reserve. This Check Deposit must first have a `status` of `pending`.
     */
    submitASandboxCheckDeposit(req: operations.SubmitASandboxCheckDepositRequest, config?: AxiosRequestConfig): Promise<operations.SubmitASandboxCheckDepositResponse>;
    /**
     * Submit a Sandbox Wire Transfer
     *
     * @remarks
     * Simulates the submission of a [Wire Transfer](#wire-transfers) to the Federal Reserve. This transfer must first have a `status` of `pending_approval` or `pending_creating`.
     */
    submitASandboxWireTransfer(req: operations.SubmitASandboxWireTransferRequest, config?: AxiosRequestConfig): Promise<operations.SubmitASandboxWireTransferResponse>;
    /**
     * Update a Card
     */
    updateACard(req: operations.UpdateACardRequest, config?: AxiosRequestConfig): Promise<operations.UpdateACardResponse>;
    /**
     * Update a Limit
     */
    updateALimit(req: operations.UpdateALimitRequest, config?: AxiosRequestConfig): Promise<operations.UpdateALimitResponse>;
    /**
     * Update an Account
     */
    updateAnAccount(req: operations.UpdateAnAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAnAccountResponse>;
    /**
     * Update an Account Number
     */
    updateAnAccountNumber(req: operations.UpdateAnAccountNumberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAnAccountNumberResponse>;
    /**
     * Update an Event Subscription
     */
    updateAnEventSubscription(req: operations.UpdateAnEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAnEventSubscriptionResponse>;
    /**
     * Update an External Account
     */
    updateAnExternalAccount(req: operations.UpdateAnExternalAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAnExternalAccountResponse>;
}
