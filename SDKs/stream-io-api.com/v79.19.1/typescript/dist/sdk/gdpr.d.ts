import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Gdpr {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deactivate users
     *
     * @remarks
     * Deactivate users in batches
     */
    deactivateUsers(req: shared.DeactivateUsersRequest, config?: AxiosRequestConfig): Promise<operations.DeactivateUsersResponse>;
    /**
     * Deletes channels asynchronously
     *
     * @remarks
     * Allows to delete several channels at once asynchronously
     */
    deleteChannels(req: shared.DeleteChannelsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChannelsResponse>;
    /**
     * Delete Users
     *
     * @remarks
     * Deletes users and optionally all their belongings asynchronously.
     */
    deleteUsers(req: shared.DeleteUsersRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersResponse>;
    /**
     * Reactivate users
     *
     * @remarks
     * Reactivate users in batches
     */
    reactivateUsers(req: shared.ReactivateUsersRequest, config?: AxiosRequestConfig): Promise<operations.ReactivateUsersResponse>;
}
