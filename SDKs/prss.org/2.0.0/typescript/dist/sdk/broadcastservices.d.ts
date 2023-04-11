import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Broadcast services can subscribe to content for multiple destinations.
 */
export declare class BroadcastServices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets broadcast services matching the given criteria.
     */
    getApiV2Broadcastservices(req: operations.GetApiV2BroadcastservicesRequest, security: operations.GetApiV2BroadcastservicesSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2BroadcastservicesResponse>;
    /**
     * Returns the broadcast service matching the given ID.
     */
    getApiV2BroadcastservicesId(req: operations.GetApiV2BroadcastservicesIdRequest, security: operations.GetApiV2BroadcastservicesIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2BroadcastservicesIdResponse>;
}
