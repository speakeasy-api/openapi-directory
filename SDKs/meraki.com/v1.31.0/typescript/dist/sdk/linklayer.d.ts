import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LinkLayer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the LLDP and CDP information for all discovered devices and connections in a network.
     *
     * @remarks
     * List the LLDP and CDP information for all discovered devices and connections in a network.
     */
    getNetworkTopologyLinkLayer(req: operations.GetNetworkTopologyLinkLayerRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTopologyLinkLayerResponse>;
}
