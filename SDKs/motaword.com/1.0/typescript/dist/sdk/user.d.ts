import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    approveVendorApplication(req: operations.ApproveVendorApplicationRequest, config?: AxiosRequestConfig): Promise<operations.ApproveVendorApplicationResponse>;
    /**
     * deleteAccount - Delete requester account
    **/
    deleteAccount(config?: AxiosRequestConfig): Promise<operations.DeleteAccountResponse>;
    /**
     * deleteUserAccount - Delete requester account
    **/
    deleteUserAccount(req: operations.DeleteUserAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserAccountResponse>;
    downgradeProofreader(config?: AxiosRequestConfig): Promise<operations.DowngradeProofreaderResponse>;
    downgradeUserProofreader(req: operations.DowngradeUserProofreaderRequest, config?: AxiosRequestConfig): Promise<operations.DowngradeUserProofreaderResponse>;
    /**
     * freezeAccount - Freeze requester account for project notifications
    **/
    freezeAccount(config?: AxiosRequestConfig): Promise<operations.FreezeAccountResponse>;
    /**
     * freezeUserAccount - Freeze requester account for project notifications
    **/
    freezeUserAccount(req: operations.FreezeUserAccountRequest, config?: AxiosRequestConfig): Promise<operations.FreezeUserAccountResponse>;
    /**
     * getEarnings - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
    **/
    getEarnings(config?: AxiosRequestConfig): Promise<operations.GetEarningsResponse>;
    /**
     * getMe - Get your user information, including client or vendor specific info.
    **/
    getMe(config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
    /**
     * getPaymentInfo - Get your payment Info
    **/
    getPaymentInfo(config?: AxiosRequestConfig): Promise<operations.GetPaymentInfoResponse>;
    /**
     * getPermissions - Returns a list of permissions that this user is authorized for.
    **/
    getPermissions(config?: AxiosRequestConfig): Promise<operations.GetPermissionsResponse>;
    /**
     * getResponsivity - Returns your vendor responsivity stats
    **/
    getResponsivity(req: operations.GetResponsivityRequest, config?: AxiosRequestConfig): Promise<operations.GetResponsivityResponse>;
    /**
     * getStats - Returns your client and vendor statistics. This used to be called "summary" (\@deprecated).
    **/
    getStats(config?: AxiosRequestConfig): Promise<operations.GetStatsResponse>;
    /**
     * getThisUserGroups - Returns a list of user groups that this user belongs to.
    **/
    getThisUserGroups(req: operations.GetThisUserGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetThisUserGroupsResponse>;
    /**
     * getUser - Get user information, including client or vendor specific info.
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUserEarnings - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
    **/
    getUserEarnings(req: operations.GetUserEarningsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserEarningsResponse>;
    /**
     * getUserGroups - Returns a list of user groups that this user belongs to.
    **/
    getUserGroups(config?: AxiosRequestConfig): Promise<operations.GetUserGroupsResponse>;
    /**
     * getUserPaymentInfo - Get user payment Info
    **/
    getUserPaymentInfo(req: operations.GetUserPaymentInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPaymentInfoResponse>;
    /**
     * getUserPermissions - Returns a list of permissions that this user is authorized for.
    **/
    getUserPermissions(req: operations.GetUserPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPermissionsResponse>;
    /**
     * getUserPopularPairs - Returns the language pairs that the user has ordered most.
    **/
    getUserPopularPairs(req: operations.GetUserPopularPairsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPopularPairsResponse>;
    /**
     * getUserProjectStats - Returns a user's project statistics.
    **/
    getUserProjectStats(req: operations.GetUserProjectStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserProjectStatsResponse>;
    /**
     * getUserResponsivity - Returns a user's vendor responsivity stats
    **/
    getUserResponsivity(req: operations.GetUserResponsivityRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponsivityResponse>;
    /**
     * getUserStats - Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).
    **/
    getUserStats(req: operations.GetUserStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserStatsResponse>;
    /**
     * getUsers - Get a list of platform users
     *
     * Get a list of platform users
    **/
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * logLocation - Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.
    **/
    logLocation(req: operations.LogLocationRequest, config?: AxiosRequestConfig): Promise<operations.LogLocationResponse>;
    makeProofreader(config?: AxiosRequestConfig): Promise<operations.MakeProofreaderResponse>;
    makeUserProofreader(req: operations.MakeUserProofreaderRequest, config?: AxiosRequestConfig): Promise<operations.MakeUserProofreaderResponse>;
    rejectVendorApplication(req: operations.RejectVendorApplicationRequest, config?: AxiosRequestConfig): Promise<operations.RejectVendorApplicationResponse>;
    /**
     * sendEmailConfirmation - Sends email confirmation email for current user
    **/
    sendEmailConfirmation(config?: AxiosRequestConfig): Promise<operations.SendEmailConfirmationResponse>;
    /**
     * sendPasswordReminder - Sends password reset email to the user's registered email address
    **/
    sendPasswordReminder(req: operations.SendPasswordReminderRequest, config?: AxiosRequestConfig): Promise<operations.SendPasswordReminderResponse>;
    /**
     * sendUserEmailConfirmation - Sends email confirmation email for a user
    **/
    sendUserEmailConfirmation(req: operations.SendUserEmailConfirmationRequest, config?: AxiosRequestConfig): Promise<operations.SendUserEmailConfirmationResponse>;
    subscribeNotification(req: operations.SubscribeNotificationRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeNotificationResponse>;
    subscribeUserNotification(req: operations.SubscribeUserNotificationRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeUserNotificationResponse>;
    suspendUser(req: operations.SuspendUserRequest, config?: AxiosRequestConfig): Promise<operations.SuspendUserResponse>;
    /**
     * unfreezeAccount - Unfreeze requester account for project notifications
    **/
    unfreezeAccount(config?: AxiosRequestConfig): Promise<operations.UnfreezeAccountResponse>;
    /**
     * unfreezeUserAccount - Unfreeze requester account for project notifications
    **/
    unfreezeUserAccount(req: operations.UnfreezeUserAccountRequest, config?: AxiosRequestConfig): Promise<operations.UnfreezeUserAccountResponse>;
    unsubscribeNotification(req: operations.UnsubscribeNotificationRequest, config?: AxiosRequestConfig): Promise<operations.UnsubscribeNotificationResponse>;
    unsubscribeUserNotification(req: operations.UnsubscribeUserNotificationRequest, config?: AxiosRequestConfig): Promise<operations.UnsubscribeUserNotificationResponse>;
    /**
     * updateMe - Update your user information.
    **/
    updateMe(req: operations.UpdateMeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMeResponse>;
    /**
     * updatePassword - Update user password. Password should contain at least one uppercase, lowercase character and one number
    **/
    updatePassword(req: operations.UpdatePasswordRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePasswordResponse>;
    /**
     * updatePaymentInfo - Update payment info
    **/
    updatePaymentInfo(req: operations.UpdatePaymentInfoRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentInfoResponse>;
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
    /**
     * updateUserPaymentInfo - Update user payment info
    **/
    updateUserPaymentInfo(req: operations.UpdateUserPaymentInfoRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserPaymentInfoResponse>;
    uploadProfilePicture(req: operations.UploadProfilePictureRequest, config?: AxiosRequestConfig): Promise<operations.UploadProfilePictureResponse>;
    uploadUserProfilePicture(req: operations.UploadUserProfilePictureRequest, config?: AxiosRequestConfig): Promise<operations.UploadUserProfilePictureResponse>;
}
