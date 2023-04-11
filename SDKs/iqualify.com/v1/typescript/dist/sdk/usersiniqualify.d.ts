import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UsersInIQualify {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Find user by email
     *
     * @remarks
     * Responds with a user matching the specified email.
     */
    getUsersUserEmail(req: operations.GetUsersUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserEmailResponse>;
    /**
     * Find user's offerings
     *
     * @remarks
     * Responds with all offerings that the user in.
     */
    getUsersUserEmailOfferings(req: operations.GetUsersUserEmailOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserEmailOfferingsResponse>;
    /**
     * Update user
     *
     * @remarks
     * Updates the specified user by email.
     */
    patchUsersUserEmail(req: operations.PatchUsersUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.PatchUsersUserEmailResponse>;
    /**
     * Add new user
     *
     * @remarks
     * Creates a new user.
     */
    postUsers(req: shared.User, config?: AxiosRequestConfig): Promise<operations.PostUsersResponse>;
    /**
     * Resend invitation email
     *
     * @remarks
     * Re-sends an invitation e-mail to the specified user.
     */
    postUsersUserEmailInviteEmail(req: operations.PostUsersUserEmailInviteEmailRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserEmailInviteEmailResponse>;
    /**
     * Adds the user to the specified offerings as a learner
     *
     * @remarks
     * Adds a user to an array of offerings by offeringId.
     */
    postUsersUserEmailOfferings(req: operations.PostUsersUserEmailOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserEmailOfferingsResponse>;
    /**
     * Add permission to user
     *
     * @remarks
     * Adds additional permissions to the specified user.
     */
    postUsersUserEmailPermissionsPermissionName(req: operations.PostUsersUserEmailPermissionsPermissionNameRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserEmailPermissionsPermissionNameResponse>;
    /**
     * Suspend user
     *
     * @remarks
     * Suspends the specified user's account.
     */
    putUsersUserEmailSuspend(req: operations.PutUsersUserEmailSuspendRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersUserEmailSuspendResponse>;
}
