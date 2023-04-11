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
     * Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.
     */
    mybusinessAccountsCreate(req: operations.MybusinessAccountsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsCreateResponse>;
    /**
     * Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.
     */
    mybusinessAccountsGenerateAccountNumber(req: operations.MybusinessAccountsGenerateAccountNumberRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsGenerateAccountNumberResponse>;
    /**
     * Accepts the specified invitation.
     */
    mybusinessAccountsInvitationsAccept(req: operations.MybusinessAccountsInvitationsAcceptRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsInvitationsAcceptResponse>;
    /**
     * Declines the specified invitation.
     */
    mybusinessAccountsInvitationsDecline(req: operations.MybusinessAccountsInvitationsDeclineRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsInvitationsDeclineResponse>;
    /**
     * Lists pending invitations for the specified account.
     */
    mybusinessAccountsInvitationsList(req: operations.MybusinessAccountsInvitationsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsInvitationsListResponse>;
    /**
     * Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.
     */
    mybusinessAccountsList(req: operations.MybusinessAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsListResponse>;
    /**
     * List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.
     */
    mybusinessAccountsListRecommendGoogleLocations(req: operations.MybusinessAccountsListRecommendGoogleLocationsRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsListRecommendGoogleLocationsResponse>;
    /**
     * Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
     */
    mybusinessAccountsLocationsAdminsCreate(req: operations.MybusinessAccountsLocationsAdminsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsAdminsCreateResponse>;
    /**
     * Lists all of the admins for the specified location.
     */
    mybusinessAccountsLocationsAdminsList(req: operations.MybusinessAccountsLocationsAdminsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsAdminsListResponse>;
    /**
     * Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.
     */
    mybusinessAccountsLocationsAssociate(req: operations.MybusinessAccountsLocationsAssociateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsAssociateResponse>;
    /**
     * Gets all of the specified locations in the given account.
     */
    mybusinessAccountsLocationsBatchGet(req: operations.MybusinessAccountsLocationsBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsBatchGetResponse>;
    /**
     * Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.
     */
    mybusinessAccountsLocationsBatchGetReviews(req: operations.MybusinessAccountsLocationsBatchGetReviewsRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsBatchGetReviewsResponse>;
    /**
     * Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
     */
    mybusinessAccountsLocationsClearAssociation(req: operations.MybusinessAccountsLocationsClearAssociationRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsClearAssociationResponse>;
    /**
     * Creates a new location owned by the specified account, and returns it.
     */
    mybusinessAccountsLocationsCreate(req: operations.MybusinessAccountsLocationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsCreateResponse>;
    /**
     * Reports all eligible verification options for a location in a specific language.
     */
    mybusinessAccountsLocationsFetchVerificationOptions(req: operations.MybusinessAccountsLocationsFetchVerificationOptionsRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsFetchVerificationOptionsResponse>;
    /**
     * Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.
     */
    mybusinessAccountsLocationsFindMatches(req: operations.MybusinessAccountsLocationsFindMatchesRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsFindMatchesResponse>;
    /**
     * Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.
     */
    mybusinessAccountsLocationsGetGoogleUpdated(req: operations.MybusinessAccountsLocationsGetGoogleUpdatedRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsGetGoogleUpdatedResponse>;
    /**
     * Returns a list of all insurance networks supported by Google.
     */
    mybusinessAccountsLocationsInsuranceNetworksList(req: operations.MybusinessAccountsLocationsInsuranceNetworksListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsInsuranceNetworksListResponse>;
    /**
     * Lists the locations for the specified account.
     */
    mybusinessAccountsLocationsList(req: operations.MybusinessAccountsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsListResponse>;
    /**
     * Creates a new local post associated with the specified location, and returns it.
     */
    mybusinessAccountsLocationsLocalPostsCreate(req: operations.MybusinessAccountsLocationsLocalPostsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsLocalPostsCreateResponse>;
    /**
     * Returns a list of local posts associated with a location.
     */
    mybusinessAccountsLocationsLocalPostsList(req: operations.MybusinessAccountsLocationsLocalPostsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsLocalPostsListResponse>;
    /**
     * Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.
     */
    mybusinessAccountsLocationsLocalPostsReportInsights(req: operations.MybusinessAccountsLocationsLocalPostsReportInsightsRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsLocalPostsReportInsightsResponse>;
    /**
     * Returns the Google updated Lodging of a specific location.
     */
    mybusinessAccountsLocationsLodgingGetGoogleUpdated(req: operations.MybusinessAccountsLocationsLodgingGetGoogleUpdatedRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsLodgingGetGoogleUpdatedResponse>;
    /**
     * Creates a new media item for the location.
     */
    mybusinessAccountsLocationsMediaCreate(req: operations.MybusinessAccountsLocationsMediaCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsMediaCreateResponse>;
    /**
     * Returns a list of media items associated with a location that have been contributed by customers.
     */
    mybusinessAccountsLocationsMediaCustomersList(req: operations.MybusinessAccountsLocationsMediaCustomersListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsMediaCustomersListResponse>;
    /**
     * Returns a list of media items associated with a location.
     */
    mybusinessAccountsLocationsMediaList(req: operations.MybusinessAccountsLocationsMediaListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsMediaListResponse>;
    /**
     * Generates a `MediaItemDataRef` for media item uploading.
     */
    mybusinessAccountsLocationsMediaStartUpload(req: operations.MybusinessAccountsLocationsMediaStartUploadRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsMediaStartUploadResponse>;
    /**
     * Deletes the answer written by the current user to a question.
     */
    mybusinessAccountsLocationsQuestionsAnswersDelete(req: operations.MybusinessAccountsLocationsQuestionsAnswersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsQuestionsAnswersDeleteResponse>;
    /**
     * Returns the paginated list of answers for a specified question.
     */
    mybusinessAccountsLocationsQuestionsAnswersList(req: operations.MybusinessAccountsLocationsQuestionsAnswersListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsQuestionsAnswersListResponse>;
    /**
     * Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.
     */
    mybusinessAccountsLocationsQuestionsAnswersUpsert(req: operations.MybusinessAccountsLocationsQuestionsAnswersUpsertRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsQuestionsAnswersUpsertResponse>;
    /**
     * Adds a question for the specified location.
     */
    mybusinessAccountsLocationsQuestionsCreate(req: operations.MybusinessAccountsLocationsQuestionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsQuestionsCreateResponse>;
    /**
     * Deletes a specific question written by the current user.
     */
    mybusinessAccountsLocationsQuestionsDelete(req: operations.MybusinessAccountsLocationsQuestionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsQuestionsDeleteResponse>;
    /**
     * Returns the paginated list of questions and some of its answers for a specified location.
     */
    mybusinessAccountsLocationsQuestionsList(req: operations.MybusinessAccountsLocationsQuestionsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsQuestionsListResponse>;
    /**
     * Updates a specific question written by the current user.
     */
    mybusinessAccountsLocationsQuestionsPatch(req: operations.MybusinessAccountsLocationsQuestionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsQuestionsPatchResponse>;
    /**
     * Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.
     */
    mybusinessAccountsLocationsReportInsights(req: operations.MybusinessAccountsLocationsReportInsightsRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsReportInsightsResponse>;
    /**
     * Deletes the response to the specified review. This operation is only valid if the specified location is verified.
     */
    mybusinessAccountsLocationsReviewsDeleteReply(req: operations.MybusinessAccountsLocationsReviewsDeleteReplyRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsReviewsDeleteReplyResponse>;
    /**
     * Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.
     */
    mybusinessAccountsLocationsReviewsList(req: operations.MybusinessAccountsLocationsReviewsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsReviewsListResponse>;
    /**
     * Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.
     */
    mybusinessAccountsLocationsReviewsUpdateReply(req: operations.MybusinessAccountsLocationsReviewsUpdateReplyRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsReviewsUpdateReplyResponse>;
    /**
     * Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.
     */
    mybusinessAccountsLocationsTransfer(req: operations.MybusinessAccountsLocationsTransferRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsTransferResponse>;
    /**
     * Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
     */
    mybusinessAccountsLocationsVerificationsComplete(req: operations.MybusinessAccountsLocationsVerificationsCompleteRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsVerificationsCompleteResponse>;
    /**
     * List verifications of a location, ordered by create time.
     */
    mybusinessAccountsLocationsVerificationsList(req: operations.MybusinessAccountsLocationsVerificationsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsVerificationsListResponse>;
    /**
     * Starts the verification process for a location.
     */
    mybusinessAccountsLocationsVerify(req: operations.MybusinessAccountsLocationsVerifyRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsLocationsVerifyResponse>;
    /**
     * Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.
     */
    mybusinessAccountsUpdateNotifications(req: operations.MybusinessAccountsUpdateNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAccountsUpdateNotificationsResponse>;
}
