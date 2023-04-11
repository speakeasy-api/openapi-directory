import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MerakiAuthUsers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
     *
     * @remarks
     * Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
     */
    createNetworkMerakiAuthUser(req: operations.CreateNetworkMerakiAuthUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkMerakiAuthUserResponse>;
    /**
     * Deauthorize a user
     *
     * @remarks
     * Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)
     */
    deleteNetworkMerakiAuthUser(req: operations.DeleteNetworkMerakiAuthUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkMerakiAuthUserResponse>;
    /**
     * Return the Meraki Auth splash guest, RADIUS, or client VPN user
     *
     * @remarks
     * Return the Meraki Auth splash guest, RADIUS, or client VPN user
     */
    getNetworkMerakiAuthUser(req: operations.GetNetworkMerakiAuthUserRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkMerakiAuthUserResponse>;
    /**
     * List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
     *
     * @remarks
     * List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
     */
    getNetworkMerakiAuthUsers(req: operations.GetNetworkMerakiAuthUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkMerakiAuthUsersResponse>;
    /**
     * Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
     *
     * @remarks
     * Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
     */
    updateNetworkMerakiAuthUser(req: operations.UpdateNetworkMerakiAuthUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkMerakiAuthUserResponse>;
}
