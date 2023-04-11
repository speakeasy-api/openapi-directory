import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccessControlLists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the access control lists for a MS network
     *
     * @remarks
     * Return the access control lists for a MS network
     */
    getNetworkSwitchAccessControlLists(req: operations.GetNetworkSwitchAccessControlListsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessControlListsResponse>;
    /**
     * Update the access control lists for a MS network
     *
     * @remarks
     * Update the access control lists for a MS network
     */
    updateNetworkSwitchAccessControlLists(req: operations.UpdateNetworkSwitchAccessControlListsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAccessControlListsResponse>;
}
