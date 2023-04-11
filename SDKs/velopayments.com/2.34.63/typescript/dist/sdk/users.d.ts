import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a User
     *
     * @remarks
     * Delete User by Id.
     *
     */
    deleteUserByIdV2(req: operations.DeleteUserByIdV2Request, config?: AxiosRequestConfig): Promise<operations.DeleteUserByIdV2Response>;
    /**
     * Disable a User
     *
     * @remarks
     * <p>If a user is enabled this endpoint will disable them </p>
     * <p>The invoker must have the appropriate permission </p>
     * <p>A user cannot disable themself </p>
     * <p>When a user is disabled any active access tokens will be revoked and the user will not be able to log in</p>
     *
     */
    disableUserV2(req: operations.DisableUserV2Request, config?: AxiosRequestConfig): Promise<operations.DisableUserV2Response>;
    /**
     * Enable a User
     *
     * @remarks
     * <p>If a user has been disabled this endpoints will enable them </p>
     * <p>The invoker must have the appropriate permission </p>
     * <p>A user cannot enable themself </p>
     * <p>If the user is a payor user and the payor is disabled this operation is not allowed</p>
     * <p>If enabling a payor user would breach the limit for master admin payor users the request will be rejected </p>
     *
     */
    enableUserV2(req: operations.EnableUserV2Request, config?: AxiosRequestConfig): Promise<operations.EnableUserV2Response>;
    /**
     * Get Self
     *
     * @remarks
     * Get the user's details
     *
     */
    getSelf(config?: AxiosRequestConfig): Promise<operations.GetSelfResponse>;
    /**
     * Get User
     *
     * @remarks
     * Get a Single User by Id.
     *
     */
    getUserByIdV2(req: operations.GetUserByIdV2Request, config?: AxiosRequestConfig): Promise<operations.GetUserByIdV2Response>;
    /**
     * Invite a User
     *
     * @remarks
     * Create a User and invite them to the system
     *
     */
    inviteUser(req: shared.InviteUserRequest, config?: AxiosRequestConfig): Promise<operations.InviteUserResponse>;
    /**
     * List Users
     *
     * @remarks
     * Get a paginated response listing the Users
     */
    listUsers(req: operations.ListUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListUsersResponse>;
    /**
     * Register SMS Number
     *
     * @remarks
     * <p>Register an Sms number and send an OTP to it </p>
     * <p>Used for manual verification of a user </p>
     * <p>The backoffice user initiates the request to send the OTP to the user's sms </p>
     * <p>The user then reads back the OTP which the backoffice user enters in the verifactionCode property for requests that require it</p>
     *
     */
    registerSms(req: shared.RegisterSmsRequest, config?: AxiosRequestConfig): Promise<operations.RegisterSmsResponse>;
    /**
     * Resend a token
     *
     * @remarks
     * <p>Resend the specified token </p>
     * <p>The token to resend must already exist for the user </p>
     * <p>It will be revoked and a new one issued</p>
     *
     */
    resendToken(req: operations.ResendTokenRequest, config?: AxiosRequestConfig): Promise<operations.ResendTokenResponse>;
    /**
     * Update User Role
     *
     * @remarks
     * <p>Update the user's Role</p>
     *
     */
    roleUpdate(req: operations.RoleUpdateRequest, config?: AxiosRequestConfig): Promise<operations.RoleUpdateResponse>;
    /**
     * Unlock a User
     *
     * @remarks
     * If a user is locked this endpoint will unlock them
     *
     */
    unlockUserV2(req: operations.UnlockUserV2Request, config?: AxiosRequestConfig): Promise<operations.UnlockUserV2Response>;
    /**
     * Unregister MFA for the user
     *
     * @remarks
     * <p>Unregister the MFA device for the user </p>
     * <p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>
     *
     */
    unregisterMFA(req: operations.UnregisterMFARequest, config?: AxiosRequestConfig): Promise<operations.UnregisterMFAResponse>;
    /**
     * Unregister MFA for Self
     *
     * @remarks
     * <p>Unregister the MFA device for the user </p>
     * <p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>
     *
     */
    unregisterMFAForSelf(req: operations.UnregisterMFAForSelfRequest, config?: AxiosRequestConfig): Promise<operations.UnregisterMFAForSelfResponse>;
    /**
     * Update Password for self
     *
     * @remarks
     * Update password for self
     *
     */
    updatePasswordSelf(req: shared.SelfUpdatePasswordRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePasswordSelfResponse>;
    /**
     * Update User Details
     *
     * @remarks
     * <p>Update the profile details for the given user</p>
     * <p>When updating Payor users with the role of payor.master_admin a verificationCode is required</p>
     *
     */
    userDetailsUpdate(req: operations.UserDetailsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.UserDetailsUpdateResponse>;
    /**
     * Update User Details for self
     *
     * @remarks
     * <p>Update the profile details for the given user</p>
     * <p>Only Payee user types are supported</p>
     *
     */
    userDetailsUpdateForSelf(req: shared.PayeeUserSelfUpdateRequest, config?: AxiosRequestConfig): Promise<operations.UserDetailsUpdateForSelfResponse>;
    /**
     * Validate the proposed password
     *
     * @remarks
     * validate the password and return a score
     *
     */
    validatePasswordSelf(req: shared.PasswordRequest, config?: AxiosRequestConfig): Promise<operations.ValidatePasswordSelfResponse>;
}
