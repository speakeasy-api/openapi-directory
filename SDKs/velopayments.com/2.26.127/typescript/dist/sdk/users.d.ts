import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUserByIdV2 - Delete a User
     *
     * Delete User by Id.
     *
    **/
    deleteUserByIdV2(req: operations.DeleteUserByIdV2Request, config?: AxiosRequestConfig): Promise<operations.DeleteUserByIdV2Response>;
    /**
     * disableUserV2 - Disable a User
     *
     * <p>If a user is enabled this endpoint will disable them </p>
     * <p>The invoker must have the appropriate permission </p>
     * <p>A user cannot disable themself </p>
     * <p>When a user is disabled any active access tokens will be revoked and the user will not be able to log in</p>
     *
    **/
    disableUserV2(req: operations.DisableUserV2Request, config?: AxiosRequestConfig): Promise<operations.DisableUserV2Response>;
    /**
     * enableUserV2 - Enable a User
     *
     * <p>If a user has been disabled this endpoints will enable them </p>
     * <p>The invoker must have the appropriate permission </p>
     * <p>A user cannot enable themself </p>
     * <p>If the user is a payor user and the payor is disabled this operation is not allowed</p>
     * <p>If enabling a payor user would breach the limit for master admin payor users the request will be rejected </p>
     *
    **/
    enableUserV2(req: operations.EnableUserV2Request, config?: AxiosRequestConfig): Promise<operations.EnableUserV2Response>;
    /**
     * getSelf - Get Self
     *
     * Get the user's details
     *
    **/
    getSelf(config?: AxiosRequestConfig): Promise<operations.GetSelfResponse>;
    /**
     * getUserByIdV2 - Get User
     *
     * Get a Single User by Id.
     *
    **/
    getUserByIdV2(req: operations.GetUserByIdV2Request, config?: AxiosRequestConfig): Promise<operations.GetUserByIdV2Response>;
    /**
     * inviteUser - Invite a User
     *
     * Create a User and invite them to the system
     *
    **/
    inviteUser(req: operations.InviteUserRequest, config?: AxiosRequestConfig): Promise<operations.InviteUserResponse>;
    /**
     * listUsers - List Users
     *
     * Get a paginated response listing the Users
    **/
    listUsers(req: operations.ListUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListUsersResponse>;
    /**
     * registerSms - Register SMS Number
     *
     * <p>Register an Sms number and send an OTP to it </p>
     * <p>Used for manual verification of a user </p>
     * <p>The backoffice user initiates the request to send the OTP to the user's sms </p>
     * <p>The user then reads back the OTP which the backoffice user enters in the verifactionCode property for requests that require it</p>
     *
    **/
    registerSms(req: operations.RegisterSmsRequest, config?: AxiosRequestConfig): Promise<operations.RegisterSmsResponse>;
    /**
     * resendToken - Resend a token
     *
     * <p>Resend the specified token </p>
     * <p>The token to resend must already exist for the user </p>
     * <p>It will be revoked and a new one issued</p>
     *
    **/
    resendToken(req: operations.ResendTokenRequest, config?: AxiosRequestConfig): Promise<operations.ResendTokenResponse>;
    /**
     * roleUpdate - Update User Role
     *
     * <p>Update the user's Role</p>
     *
    **/
    roleUpdate(req: operations.RoleUpdateRequest, config?: AxiosRequestConfig): Promise<operations.RoleUpdateResponse>;
    /**
     * unlockUserV2 - Unlock a User
     *
     * If a user is locked this endpoint will unlock them
     *
    **/
    unlockUserV2(req: operations.UnlockUserV2Request, config?: AxiosRequestConfig): Promise<operations.UnlockUserV2Response>;
    /**
     * unregisterMfa - Unregister MFA for the user
     *
     * <p>Unregister the MFA device for the user </p>
     * <p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>
     *
    **/
    unregisterMfa(req: operations.UnregisterMfaRequest, config?: AxiosRequestConfig): Promise<operations.UnregisterMfaResponse>;
    /**
     * unregisterMfaForSelf - Unregister MFA for Self
     *
     * <p>Unregister the MFA device for the user </p>
     * <p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>
     *
    **/
    unregisterMfaForSelf(req: operations.UnregisterMfaForSelfRequest, config?: AxiosRequestConfig): Promise<operations.UnregisterMfaForSelfResponse>;
    /**
     * updatePasswordSelf - Update Password for self
     *
     * Update password for self
     *
    **/
    updatePasswordSelf(req: operations.UpdatePasswordSelfRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePasswordSelfResponse>;
    /**
     * userDetailsUpdate - Update User Details
     *
     * <p>Update the profile details for the given user</p>
     * <p>When updating Payor users with the role of payor.master_admin a verificationCode is required</p>
     *
    **/
    userDetailsUpdate(req: operations.UserDetailsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.UserDetailsUpdateResponse>;
    /**
     * userDetailsUpdateForSelf - Update User Details for self
     *
     * <p>Update the profile details for the given user</p>
     * <p>Only Payee user types are supported</p>
     *
    **/
    userDetailsUpdateForSelf(req: operations.UserDetailsUpdateForSelfRequest, config?: AxiosRequestConfig): Promise<operations.UserDetailsUpdateForSelfResponse>;
    /**
     * validatePasswordSelf - Validate the proposed password
     *
     * validate the password and return a score
     *
    **/
    validatePasswordSelf(req: operations.ValidatePasswordSelfRequest, config?: AxiosRequestConfig): Promise<operations.ValidatePasswordSelfResponse>;
}
