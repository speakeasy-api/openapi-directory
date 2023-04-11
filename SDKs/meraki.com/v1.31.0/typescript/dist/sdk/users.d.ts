import * as operations from "./models/operations";
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
     * Delete a user and all of its authentication methods.
     *
     * @remarks
     * Delete a user and all of its authentication methods.
     */
    deleteOrganizationUser(req: operations.DeleteOrganizationUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationUserResponse>;
    /**
     * Get the profiles associated with a user
     *
     * @remarks
     * Get the profiles associated with a user
     */
    getNetworkSmUserDeviceProfiles(req: operations.GetNetworkSmUserDeviceProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUserDeviceProfilesResponse>;
    /**
     * Get a list of softwares associated with a user
     *
     * @remarks
     * Get a list of softwares associated with a user
     */
    getNetworkSmUserSoftwares(req: operations.GetNetworkSmUserSoftwaresRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUserSoftwaresResponse>;
    /**
     * List the owners in an SM network with various specified fields and filters
     *
     * @remarks
     * List the owners in an SM network with various specified fields and filters
     */
    getNetworkSmUsers(req: operations.GetNetworkSmUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUsersResponse>;
}
