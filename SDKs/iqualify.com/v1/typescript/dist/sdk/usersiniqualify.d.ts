import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UsersInIQualify {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUsersUserEmail - Find user by email
     *
     * Responds with a user matching the specified email.
    **/
    getUsersUserEmail(req: operations.GetUsersUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserEmailResponse>;
    /**
     * getUsersUserEmailOfferings - Find user's offerings
     *
     * Responds with all offerings that the user in.
    **/
    getUsersUserEmailOfferings(req: operations.GetUsersUserEmailOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserEmailOfferingsResponse>;
    /**
     * patchUsersUserEmail - Update user
     *
     * Updates the specified user by email.
    **/
    patchUsersUserEmail(req: operations.PatchUsersUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.PatchUsersUserEmailResponse>;
    /**
     * postUsers - Add new user
     *
     * Creates a new user.
    **/
    postUsers(req: operations.PostUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersResponse>;
    /**
     * postUsersUserEmailInviteEmail - Resend invitation email
     *
     * Re-sends an invitation e-mail to the specified user.
    **/
    postUsersUserEmailInviteEmail(req: operations.PostUsersUserEmailInviteEmailRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserEmailInviteEmailResponse>;
    /**
     * postUsersUserEmailOfferings - Adds the user to the specified offerings as a learner
     *
     * Adds a user to an array of offerings by offeringId.
    **/
    postUsersUserEmailOfferings(req: operations.PostUsersUserEmailOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserEmailOfferingsResponse>;
    /**
     * postUsersUserEmailPermissionsPermissionName - Add permission to user
     *
     * Adds additional permissions to the specified user.
    **/
    postUsersUserEmailPermissionsPermissionName(req: operations.PostUsersUserEmailPermissionsPermissionNameRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserEmailPermissionsPermissionNameResponse>;
    /**
     * putUsersUserEmailSuspend - Suspend user
     *
     * Suspends the specified user's account.
    **/
    putUsersUserEmailSuspend(req: operations.PutUsersUserEmailSuspendRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersUserEmailSuspendResponse>;
}
