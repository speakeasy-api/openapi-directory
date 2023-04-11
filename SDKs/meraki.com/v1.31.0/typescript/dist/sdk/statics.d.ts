import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Statics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a static delegated prefix from a network
     *
     * @remarks
     * Add a static delegated prefix from a network
     */
    createNetworkAppliancePrefixesDelegatedStatic(req: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkAppliancePrefixesDelegatedStaticResponse>;
    /**
     * Delete a static delegated prefix from a network
     *
     * @remarks
     * Delete a static delegated prefix from a network
     */
    deleteNetworkAppliancePrefixesDelegatedStatic(req: operations.DeleteNetworkAppliancePrefixesDelegatedStaticRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkAppliancePrefixesDelegatedStaticResponse>;
    /**
     * Return a static delegated prefix from a network
     *
     * @remarks
     * Return a static delegated prefix from a network
     */
    getNetworkAppliancePrefixesDelegatedStatic(req: operations.GetNetworkAppliancePrefixesDelegatedStaticRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePrefixesDelegatedStaticResponse>;
    /**
     * List static delegated prefixes for a network
     *
     * @remarks
     * List static delegated prefixes for a network
     */
    getNetworkAppliancePrefixesDelegatedStatics(req: operations.GetNetworkAppliancePrefixesDelegatedStaticsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePrefixesDelegatedStaticsResponse>;
    /**
     * Update a static delegated prefix from a network
     *
     * @remarks
     * Update a static delegated prefix from a network
     */
    updateNetworkAppliancePrefixesDelegatedStatic(req: operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAppliancePrefixesDelegatedStaticResponse>;
}
