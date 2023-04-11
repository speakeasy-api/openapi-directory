import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LifecycleOperations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Activate User
     *
     * @remarks
     * Activate User
     */
    activateUser(req: operations.ActivateUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivateUserResponse>;
    /**
     * Deactivate User
     *
     * @remarks
     * Deactivate User
     */
    deactivateUser(req: operations.DeactivateUserRequest, config?: AxiosRequestConfig): Promise<operations.DeactivateUserResponse>;
    /**
     * Reset Password
     *
     * @remarks
     * Reset Password
     */
    resetPassword(req: operations.ResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetPasswordResponse>;
    /**
     * Set Temp Password
     *
     * @remarks
     * Set Temp Password
     */
    setTempPassword(req: operations.SetTempPasswordRequest, config?: AxiosRequestConfig): Promise<operations.SetTempPasswordResponse>;
    /**
     * Suspend User
     *
     * @remarks
     * Suspend User
     */
    suspendUser(req: operations.SuspendUserRequest, config?: AxiosRequestConfig): Promise<operations.SuspendUserResponse>;
    /**
     * Unlock User
     *
     * @remarks
     * Unlock User
     */
    unlockUser(req: operations.UnlockUserRequest, config?: AxiosRequestConfig): Promise<operations.UnlockUserResponse>;
    /**
     * Unsuspend User
     *
     * @remarks
     * Unsuspend User
     */
    unsuspendUser(req: operations.UnsuspendUserRequest, config?: AxiosRequestConfig): Promise<operations.UnsuspendUserResponse>;
}
