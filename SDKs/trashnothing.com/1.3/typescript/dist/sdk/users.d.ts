import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Retrieve and update user data.
 */
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Change email address
     *
     * @remarks
     * Change the users' current email address.  A verification link will be emailed to the new email address to verify that the email account belongs to the user.  The email change will not take effect until the user clicks the link in the verification email.
     *
     */
    changeEmail(req: operations.ChangeEmailRequestBody, config?: AxiosRequestConfig): Promise<operations.ChangeEmailResponse>;
    /**
     * Create an email alert
     */
    createAlert(req: operations.CreateAlertRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateAlertResponse>;
    /**
     * Delete an email alert
     */
    deleteAlert(req: operations.DeleteAlertRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlertResponse>;
    /**
     * List current users' email alerts
     */
    getAlerts(config?: AxiosRequestConfig): Promise<operations.GetAlertsResponse>;
    /**
     * Retrieve current user
     */
    getCurrentUser(config?: AxiosRequestConfig): Promise<operations.GetCurrentUserResponse>;
    /**
     * List current users' groups
     */
    getCurrentUserGroups(req: operations.GetCurrentUserGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetCurrentUserGroupsResponse>;
    /**
     * List current users' posts
     *
     * @remarks
     * NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.
     *
     */
    getCurrentUserPosts(req: operations.GetCurrentUserPostsRequest, config?: AxiosRequestConfig): Promise<operations.GetCurrentUserPostsResponse>;
    /**
     * List current users' post locations
     *
     * @remarks
     * Only the most recent 3 post locations are returned.
     */
    getPostLocations(config?: AxiosRequestConfig): Promise<operations.GetPostLocationsResponse>;
    /**
     * Retrieve a users' profile image
     *
     * @remarks
     * This is designed to be used as the src attribute of an HTML &lt;img&gt; tag to show the profile image of the given user.
     *
     */
    getProfileImageFile(req: operations.GetProfileImageFileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileImageFileResponse>;
    /**
     * List current users' profile images
     */
    getProfileImages(config?: AxiosRequestConfig): Promise<operations.GetProfileImagesResponse>;
    /**
     * Retrieve a user
     */
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * Retrieve user display info
     *
     * @remarks
     * Retrieve a user and information related to the user (eg. recent posts) that is useful for displaying a more detailed view of the user.
     *
     */
    getUserAndRelatedData(req: operations.GetUserAndRelatedDataRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAndRelatedDataResponse>;
    /**
     * List current users' group notices
     */
    getUserGroupNotices(req: operations.GetUserGroupNoticesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserGroupNoticesResponse>;
    /**
     * List posts by a user
     *
     * @remarks
     * NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.
     *
     */
    getUserPosts(req: operations.GetUserPostsRequest, security: operations.GetUserPostsSecurity, config?: AxiosRequestConfig): Promise<operations.GetUserPostsResponse>;
    /**
     * Remove feedback on a user
     *
     * @remarks
     * Allows the current user to remove feedback that they left on a user.
     *
     */
    removeUserFeedback(req: operations.RemoveUserFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.RemoveUserFeedbackResponse>;
    /**
     * Report a user
     */
    reportUser(req: operations.ReportUserRequestBody, config?: AxiosRequestConfig): Promise<operations.ReportUserResponse>;
    /**
     * Resend account verification email
     */
    resendAccountVerificationEmail(config?: AxiosRequestConfig): Promise<operations.ResendAccountVerificationEmailResponse>;
    /**
     * Save a post location for the current user
     *
     * @remarks
     * Creates or updates a post location for the current user. Updates will happen when the name of the post location matches a previous post location.
     *
     */
    savePostLocation(req: operations.SavePostLocationRequestBody, config?: AxiosRequestConfig): Promise<operations.SavePostLocationResponse>;
    /**
     * Search current users' posts
     *
     * @remarks
     * Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
     *
     */
    searchCurrentUserPosts(req: operations.SearchCurrentUserPostsRequest, config?: AxiosRequestConfig): Promise<operations.SearchCurrentUserPostsResponse>;
    /**
     * Search posts by a user
     *
     * @remarks
     * Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
     *
     */
    searchUserPosts(req: operations.SearchUserPostsRequest, security: operations.SearchUserPostsSecurity, config?: AxiosRequestConfig): Promise<operations.SearchUserPostsResponse>;
    /**
     * Send password reset email
     */
    sendPasswordResetEmail(config?: AxiosRequestConfig): Promise<operations.SendPasswordResetEmailResponse>;
    /**
     * Set users' email address as not bouncing
     *
     * @remarks
     * Resets an email address bouncing state to false.  The users' email address may be automatically marked as bouncing again if further emails sent to it are bounced.
     *
     */
    setEmailNotBouncing(config?: AxiosRequestConfig): Promise<operations.SetEmailNotBouncingResponse>;
    /**
     * Set a profile image
     *
     * @remarks
     * Profile images must be at least 90 pixels wide and tall.  And if the image used is not square it will be automatically cropped to be square.
     *
     */
    setProfileImage(req: operations.SetProfileImageRequestBody, config?: AxiosRequestConfig): Promise<operations.SetProfileImageResponse>;
    /**
     * Submit feedback on a user
     *
     * @remarks
     * Allows the current user to submit feedback on a user.  The current user can only leave feedback on a user if the feedback allowed property on that user is set to true (see User definition for more details). And the system will only store the most recent feedback submission that the current user has submitted on a user. If the current user submits feedback multiple times, the newest feedback will overwrite the older feedback. This allows users to update their feedback as long as the feedback allowed property allows it.
     *
     */
    submitUserFeedback(req: operations.SubmitUserFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.SubmitUserFeedbackResponse>;
    /**
     * Update current user
     *
     * @remarks
     * Update the current user.  All fields are optional so requests can update just one or multiple user properties at a time.
     *
     */
    updateCurrentUser(req: operations.UpdateCurrentUserRequestBody, config?: AxiosRequestConfig): Promise<operations.UpdateCurrentUserResponse>;
    /**
     * Update location
     *
     * @remarks
     * Update the current users' location. The location is used to determine which posts are shown to the user (both public posts and group posts).
     *
     */
    updateLocation(req: operations.UpdateLocationRequestBody, config?: AxiosRequestConfig): Promise<operations.UpdateLocationResponse>;
}
