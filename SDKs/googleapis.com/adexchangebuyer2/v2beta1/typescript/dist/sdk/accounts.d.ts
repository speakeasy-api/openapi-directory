import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new client buyer.
     */
    adexchangebuyer2AccountsClientsCreate(req: operations.Adexchangebuyer2AccountsClientsCreateRequest, security: operations.Adexchangebuyer2AccountsClientsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsCreateResponse>;
    /**
     * Gets a client buyer with a given client account ID.
     */
    adexchangebuyer2AccountsClientsGet(req: operations.Adexchangebuyer2AccountsClientsGetRequest, security: operations.Adexchangebuyer2AccountsClientsGetSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsGetResponse>;
    /**
     * Creates and sends out an email invitation to access an Ad Exchange client buyer account.
     */
    adexchangebuyer2AccountsClientsInvitationsCreate(req: operations.Adexchangebuyer2AccountsClientsInvitationsCreateRequest, security: operations.Adexchangebuyer2AccountsClientsInvitationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsInvitationsCreateResponse>;
    /**
     * Retrieves an existing client user invitation.
     */
    adexchangebuyer2AccountsClientsInvitationsGet(req: operations.Adexchangebuyer2AccountsClientsInvitationsGetRequest, security: operations.Adexchangebuyer2AccountsClientsInvitationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsInvitationsGetResponse>;
    /**
     * Lists all the client users invitations for a client with a given account ID.
     */
    adexchangebuyer2AccountsClientsInvitationsList(req: operations.Adexchangebuyer2AccountsClientsInvitationsListRequest, security: operations.Adexchangebuyer2AccountsClientsInvitationsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsInvitationsListResponse>;
    /**
     * Lists all the clients for the current sponsor buyer.
     */
    adexchangebuyer2AccountsClientsList(req: operations.Adexchangebuyer2AccountsClientsListRequest, security: operations.Adexchangebuyer2AccountsClientsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsListResponse>;
    /**
     * Updates an existing client buyer.
     */
    adexchangebuyer2AccountsClientsUpdate(req: operations.Adexchangebuyer2AccountsClientsUpdateRequest, security: operations.Adexchangebuyer2AccountsClientsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsUpdateResponse>;
    /**
     * Retrieves an existing client user.
     */
    adexchangebuyer2AccountsClientsUsersGet(req: operations.Adexchangebuyer2AccountsClientsUsersGetRequest, security: operations.Adexchangebuyer2AccountsClientsUsersGetSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsUsersGetResponse>;
    /**
     * Lists all the known client users for a specified sponsor buyer account ID.
     */
    adexchangebuyer2AccountsClientsUsersList(req: operations.Adexchangebuyer2AccountsClientsUsersListRequest, security: operations.Adexchangebuyer2AccountsClientsUsersListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsUsersListResponse>;
    /**
     * Updates an existing client user. Only the user status can be changed on update.
     */
    adexchangebuyer2AccountsClientsUsersUpdate(req: operations.Adexchangebuyer2AccountsClientsUsersUpdateRequest, security: operations.Adexchangebuyer2AccountsClientsUsersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsUsersUpdateResponse>;
    /**
     * Creates a creative.
     */
    adexchangebuyer2AccountsCreativesCreate(req: operations.Adexchangebuyer2AccountsCreativesCreateRequest, security: operations.Adexchangebuyer2AccountsCreativesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesCreateResponse>;
    /**
     * Associate an existing deal with a creative.
     */
    adexchangebuyer2AccountsCreativesDealAssociationsAdd(req: operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest, security: operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse>;
    /**
     * List all creative-deal associations.
     */
    adexchangebuyer2AccountsCreativesDealAssociationsList(req: operations.Adexchangebuyer2AccountsCreativesDealAssociationsListRequest, security: operations.Adexchangebuyer2AccountsCreativesDealAssociationsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesDealAssociationsListResponse>;
    /**
     * Remove the association between a deal and a creative.
     */
    adexchangebuyer2AccountsCreativesDealAssociationsRemove(req: operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest, security: operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse>;
    /**
     * Gets a creative.
     */
    adexchangebuyer2AccountsCreativesGet(req: operations.Adexchangebuyer2AccountsCreativesGetRequest, security: operations.Adexchangebuyer2AccountsCreativesGetSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesGetResponse>;
    /**
     * Lists creatives.
     */
    adexchangebuyer2AccountsCreativesList(req: operations.Adexchangebuyer2AccountsCreativesListRequest, security: operations.Adexchangebuyer2AccountsCreativesListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesListResponse>;
    /**
     * Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
     */
    adexchangebuyer2AccountsCreativesStopWatching(req: operations.Adexchangebuyer2AccountsCreativesStopWatchingRequest, security: operations.Adexchangebuyer2AccountsCreativesStopWatchingSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesStopWatchingResponse>;
    /**
     * Updates a creative.
     */
    adexchangebuyer2AccountsCreativesUpdate(req: operations.Adexchangebuyer2AccountsCreativesUpdateRequest, security: operations.Adexchangebuyer2AccountsCreativesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesUpdateResponse>;
    /**
     * Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
     */
    adexchangebuyer2AccountsCreativesWatch(req: operations.Adexchangebuyer2AccountsCreativesWatchRequest, security: operations.Adexchangebuyer2AccountsCreativesWatchSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesWatchResponse>;
    /**
     * List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.
     */
    adexchangebuyer2AccountsFinalizedProposalsList(req: operations.Adexchangebuyer2AccountsFinalizedProposalsListRequest, security: operations.Adexchangebuyer2AccountsFinalizedProposalsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsFinalizedProposalsListResponse>;
    /**
     * Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
     */
    adexchangebuyer2AccountsFinalizedProposalsPause(req: operations.Adexchangebuyer2AccountsFinalizedProposalsPauseRequest, security: operations.Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsFinalizedProposalsPauseResponse>;
    /**
     * Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
     */
    adexchangebuyer2AccountsFinalizedProposalsResume(req: operations.Adexchangebuyer2AccountsFinalizedProposalsResumeRequest, security: operations.Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsFinalizedProposalsResumeResponse>;
    /**
     * Gets the requested product by ID.
     */
    adexchangebuyer2AccountsProductsGet(req: operations.Adexchangebuyer2AccountsProductsGetRequest, security: operations.Adexchangebuyer2AccountsProductsGetSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProductsGetResponse>;
    /**
     * List all products visible to the buyer (optionally filtered by the specified PQL query).
     */
    adexchangebuyer2AccountsProductsList(req: operations.Adexchangebuyer2AccountsProductsListRequest, security: operations.Adexchangebuyer2AccountsProductsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProductsListResponse>;
    /**
     * Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.
     */
    adexchangebuyer2AccountsProposalsAccept(req: operations.Adexchangebuyer2AccountsProposalsAcceptRequest, security: operations.Adexchangebuyer2AccountsProposalsAcceptSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsAcceptResponse>;
    /**
     * Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.
     */
    adexchangebuyer2AccountsProposalsAddNote(req: operations.Adexchangebuyer2AccountsProposalsAddNoteRequest, security: operations.Adexchangebuyer2AccountsProposalsAddNoteSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsAddNoteResponse>;
    /**
     * Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.
     */
    adexchangebuyer2AccountsProposalsCancelNegotiation(req: operations.Adexchangebuyer2AccountsProposalsCancelNegotiationRequest, security: operations.Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsCancelNegotiationResponse>;
    /**
     * You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.
     */
    adexchangebuyer2AccountsProposalsCompleteSetup(req: operations.Adexchangebuyer2AccountsProposalsCompleteSetupRequest, security: operations.Adexchangebuyer2AccountsProposalsCompleteSetupSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsCompleteSetupResponse>;
    /**
     * Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.
     */
    adexchangebuyer2AccountsProposalsCreate(req: operations.Adexchangebuyer2AccountsProposalsCreateRequest, security: operations.Adexchangebuyer2AccountsProposalsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsCreateResponse>;
    /**
     * Gets a proposal given its ID. The proposal is returned at its head revision.
     */
    adexchangebuyer2AccountsProposalsGet(req: operations.Adexchangebuyer2AccountsProposalsGetRequest, security: operations.Adexchangebuyer2AccountsProposalsGetSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsGetResponse>;
    /**
     * List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.
     */
    adexchangebuyer2AccountsProposalsList(req: operations.Adexchangebuyer2AccountsProposalsListRequest, security: operations.Adexchangebuyer2AccountsProposalsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsListResponse>;
    /**
     * Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.
     */
    adexchangebuyer2AccountsProposalsPause(req: operations.Adexchangebuyer2AccountsProposalsPauseRequest, security: operations.Adexchangebuyer2AccountsProposalsPauseSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsPauseResponse>;
    /**
     * Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.
     */
    adexchangebuyer2AccountsProposalsResume(req: operations.Adexchangebuyer2AccountsProposalsResumeRequest, security: operations.Adexchangebuyer2AccountsProposalsResumeSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsResumeResponse>;
    /**
     * Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.
     */
    adexchangebuyer2AccountsProposalsUpdate(req: operations.Adexchangebuyer2AccountsProposalsUpdateRequest, security: operations.Adexchangebuyer2AccountsProposalsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsUpdateResponse>;
    /**
     * Gets the requested publisher profile by id.
     */
    adexchangebuyer2AccountsPublisherProfilesGet(req: operations.Adexchangebuyer2AccountsPublisherProfilesGetRequest, security: operations.Adexchangebuyer2AccountsPublisherProfilesGetSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsPublisherProfilesGetResponse>;
    /**
     * List all publisher profiles visible to the buyer
     */
    adexchangebuyer2AccountsPublisherProfilesList(req: operations.Adexchangebuyer2AccountsPublisherProfilesListRequest, security: operations.Adexchangebuyer2AccountsPublisherProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsPublisherProfilesListResponse>;
}
