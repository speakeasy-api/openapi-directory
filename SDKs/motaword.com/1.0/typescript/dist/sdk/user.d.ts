import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    approveVendorApplication(req: operations.ApproveVendorApplicationRequest, security: operations.ApproveVendorApplicationSecurity, config?: AxiosRequestConfig): Promise<operations.ApproveVendorApplicationResponse>;
    /**
     * Create a new user
     *
     * @remarks
     * Create a new platform user
     */
    createUser(req: operations.CreateUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     * Delete your account
     *
     * @remarks
     * Delete your MotaWord account. Be careful; once deleted, you will not have access to MotaWord via API or your dashboards.
     */
    deleteAccount(config?: AxiosRequestConfig): Promise<operations.DeleteAccountResponse>;
    /**
     * Delete requester account
     */
    deleteUserAccount(req: operations.DeleteUserAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserAccountResponse>;
    downgradeProofreader(config?: AxiosRequestConfig): Promise<operations.DowngradeProofreaderResponse>;
    downgradeUserProofreader(req: operations.DowngradeUserProofreaderRequest, security: operations.DowngradeUserProofreaderSecurity, config?: AxiosRequestConfig): Promise<operations.DowngradeUserProofreaderResponse>;
    /**
     * Freeze account
     *
     * @remarks
     * Freeze your account temporarily, especially to stop receiving project notifications.
     */
    freezeAccount(config?: AxiosRequestConfig): Promise<operations.FreezeAccountResponse>;
    /**
     * Freeze requester account for project notifications
     */
    freezeUserAccount(req: operations.FreezeUserAccountRequest, config?: AxiosRequestConfig): Promise<operations.FreezeUserAccountResponse>;
    /**
     * Returns all vendor tags for vendors filter
     *
     * @remarks
     * Returns all vendor tags for vendors filter
     */
    getAllVendorTags(config?: AxiosRequestConfig): Promise<operations.GetAllVendorTagsResponse>;
    /**
     * View your vendor earnings
     *
     * @remarks
     * View your vendor earnings from your translation activites. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects, as well as total earnings and string edits.
     */
    getEarnings(config?: AxiosRequestConfig): Promise<operations.GetEarningsResponse>;
    /**
     * Filter vendors based on provided parameters
     *
     * @remarks
     * Get a list of vendors available for the criteria given
     */
    getFilteredVendors(req: operations.GetFilteredVendorsRequest, config?: AxiosRequestConfig): Promise<operations.GetFilteredVendorsResponse>;
    /**
     * View your account info
     *
     * @remarks
     * Get your user information, including client, corporate account and vendor account information.
     */
    getMe(config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
    /**
     * View your payment and billing info
     *
     * @remarks
     * Returns billing and saved credit card information for user, and their corporate account if present & allowed.
     */
    getPaymentInfo(config?: AxiosRequestConfig): Promise<operations.GetPaymentInfoResponse>;
    /**
     * View your permissions
     *
     * @remarks
     * View a list of permissions that your user account is authorized for, configured either by default, or by your account administator.
     */
    getPermissions(config?: AxiosRequestConfig): Promise<operations.GetPermissionsResponse>;
    /**
     * View your vendor responsiveness
     *
     * @remarks
     * View your statistical analysis of responsiveness to our translation projects, invitations, notifications and such.
     */
    getResponsivity(req: operations.GetResponsivityRequest, config?: AxiosRequestConfig): Promise<operations.GetResponsivityResponse>;
    /**
     * View your account statistics
     *
     * @remarks
     * View your client and vendor statistics.
     */
    getStats(config?: AxiosRequestConfig): Promise<operations.GetStatsResponse>;
    /**
     * Returns a list of user groups that this user belongs to.
     */
    getThisUserGroups(req: operations.GetThisUserGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetThisUserGroupsResponse>;
    /**
     * Get user information, including client or vendor specific info.
     */
    getUser(req: operations.GetUserRequest, security: operations.GetUserSecurity, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
     */
    getUserEarnings(req: operations.GetUserEarningsRequest, security: operations.GetUserEarningsSecurity, config?: AxiosRequestConfig): Promise<operations.GetUserEarningsResponse>;
    /**
     * View your user groups
     *
     * @remarks
     * View the user groups that your user account belongs to. This is typically configured by your account administator's dashboard.
     */
    getUserGroups(config?: AxiosRequestConfig): Promise<operations.GetUserGroupsResponse>;
    /**
     * View user's payment and billing info
     *
     * @remarks
     * Returns billing and saved credit card information for user, and their corporate account if present & allowed.
     */
    getUserPaymentInfo(req: operations.GetUserPaymentInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPaymentInfoResponse>;
    /**
     * Returns a list of permissions that this user is authorized for.
     */
    getUserPermissions(req: operations.GetUserPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPermissionsResponse>;
    /**
     * Returns the language pairs that the user has ordered most.
     */
    getUserPopularPairs(req: operations.GetUserPopularPairsRequest, security: operations.GetUserPopularPairsSecurity, config?: AxiosRequestConfig): Promise<operations.GetUserPopularPairsResponse>;
    /**
     * Returns a user's project statistics.
     */
    getUserProjectStats(req: operations.GetUserProjectStatsRequest, security: operations.GetUserProjectStatsSecurity, config?: AxiosRequestConfig): Promise<operations.GetUserProjectStatsResponse>;
    /**
     * Returns a user's vendor responsivity stats
     */
    getUserResponsivity(req: operations.GetUserResponsivityRequest, security: operations.GetUserResponsivitySecurity, config?: AxiosRequestConfig): Promise<operations.GetUserResponsivityResponse>;
    /**
     * Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).
     */
    getUserStats(req: operations.GetUserStatsRequest, security: operations.GetUserStatsSecurity, config?: AxiosRequestConfig): Promise<operations.GetUserStatsResponse>;
    /**
     * Get a list of platform users
     *
     * @remarks
     * Get a list of platform users
     */
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.
     */
    logLocation(req: shared.LocationUpdateContent, config?: AxiosRequestConfig): Promise<operations.LogLocationResponse>;
    makeProofreader(config?: AxiosRequestConfig): Promise<operations.MakeProofreaderResponse>;
    makeUserProofreader(req: operations.MakeUserProofreaderRequest, security: operations.MakeUserProofreaderSecurity, config?: AxiosRequestConfig): Promise<operations.MakeUserProofreaderResponse>;
    rejectVendorApplication(req: operations.RejectVendorApplicationRequest, security: operations.RejectVendorApplicationSecurity, config?: AxiosRequestConfig): Promise<operations.RejectVendorApplicationResponse>;
    /**
     * Sends email confirmation email for current user
     */
    sendEmailConfirmation(config?: AxiosRequestConfig): Promise<operations.SendEmailConfirmationResponse>;
    /**
     * Sends password reset email to the user's registered email address
     */
    sendPasswordReminder(req: shared.Email, config?: AxiosRequestConfig): Promise<operations.SendPasswordReminderResponse>;
    /**
     * Sends email confirmation email for a user
     */
    sendUserEmailConfirmation(req: operations.SendUserEmailConfirmationRequest, security: operations.SendUserEmailConfirmationSecurity, config?: AxiosRequestConfig): Promise<operations.SendUserEmailConfirmationResponse>;
    /**
     * Subscribe to push notifications
     *
     * @remarks
     * Subscribe to push notifications to receive project and platform notifications.
     */
    subscribeNotification(req: shared.NotificationSubscription, config?: AxiosRequestConfig): Promise<operations.SubscribeNotificationResponse>;
    subscribeUserNotification(req: operations.SubscribeUserNotificationRequest, security: operations.SubscribeUserNotificationSecurity, config?: AxiosRequestConfig): Promise<operations.SubscribeUserNotificationResponse>;
    suspendUser(req: operations.SuspendUserRequest, security: operations.SuspendUserSecurity, config?: AxiosRequestConfig): Promise<operations.SuspendUserResponse>;
    /**
     * Defreeze your account
     *
     * @remarks
     * Reactive your account to start receiving notifications.
     */
    unfreezeAccount(config?: AxiosRequestConfig): Promise<operations.UnfreezeAccountResponse>;
    /**
     * Unfreeze requester account for project notifications
     */
    unfreezeUserAccount(req: operations.UnfreezeUserAccountRequest, config?: AxiosRequestConfig): Promise<operations.UnfreezeUserAccountResponse>;
    unsubscribeNotification(req: shared.NotificationSubscription, config?: AxiosRequestConfig): Promise<operations.UnsubscribeNotificationResponse>;
    unsubscribeUserNotification(req: operations.UnsubscribeUserNotificationRequest, security: operations.UnsubscribeUserNotificationSecurity, config?: AxiosRequestConfig): Promise<operations.UnsubscribeUserNotificationResponse>;
    /**
     * Update your account info
     */
    updateMe(req: shared.UserUpdateContent, config?: AxiosRequestConfig): Promise<operations.UpdateMeResponse>;
    /**
     * Update your account password
     *
     * @remarks
     * Password should contain at least one uppercase, lowercase character and one number
     */
    updatePassword(req: shared.PasswordUpdateContent, config?: AxiosRequestConfig): Promise<operations.UpdatePasswordResponse>;
    /**
     * Update payment info
     *
     * @remarks
     * Update your billing and saved credit card information
     */
    updatePaymentInfo(req: shared.UpdatePaymentInfo, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentInfoResponse>;
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
    updateUserGroup(req: operations.UpdateUserGroupRequest, security: operations.UpdateUserGroupSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateUserGroupResponse>;
    /**
     * Update user payment info
     *
     * @remarks
     * Update user's billing and saved credit card information
     */
    updateUserPaymentInfo(req: operations.UpdateUserPaymentInfoRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserPaymentInfoResponse>;
    /**
     * Upload profile picture
     *
     * @remarks
     * Upload a profile picture on your account. This is used where your profile is mentioned throughout the platform. Your picture is not used publicly.
     */
    uploadProfilePictureJson(req: shared.ProfilePictureUpload, config?: AxiosRequestConfig): Promise<operations.UploadProfilePictureJsonResponse>;
    /**
     * Upload profile picture
     *
     * @remarks
     * Upload a profile picture on your account. This is used where your profile is mentioned throughout the platform. Your picture is not used publicly.
     */
    uploadProfilePictureMultipart(req: shared.ProfilePictureUpload1, config?: AxiosRequestConfig): Promise<operations.UploadProfilePictureMultipartResponse>;
    uploadUserProfilePictureJson(req: operations.UploadUserProfilePictureJsonRequest, security: operations.UploadUserProfilePictureJsonSecurity, config?: AxiosRequestConfig): Promise<operations.UploadUserProfilePictureJsonResponse>;
    uploadUserProfilePictureMultipart(req: operations.UploadUserProfilePictureMultipartRequest, security: operations.UploadUserProfilePictureMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.UploadUserProfilePictureMultipartResponse>;
}
