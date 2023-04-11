import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ConnectivityMonitoringDestinations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the connectivity testing destinations for an MX network
     *
     * @remarks
     * Return the connectivity testing destinations for an MX network
     */
    getNetworkApplianceConnectivityMonitoringDestinations(req: operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse>;
    /**
     * Return the connectivity testing destinations for an MG network
     *
     * @remarks
     * Return the connectivity testing destinations for an MG network
     */
    getNetworkCellularGatewayConnectivityMonitoringDestinations(req: operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse>;
    /**
     * Update the connectivity testing destinations for an MX network
     *
     * @remarks
     * Update the connectivity testing destinations for an MX network
     */
    updateNetworkApplianceConnectivityMonitoringDestinations(req: operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse>;
    /**
     * Update the connectivity testing destinations for an MG network
     *
     * @remarks
     * Update the connectivity testing destinations for an MG network
     */
    updateNetworkCellularGatewayConnectivityMonitoringDestinations(req: operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse>;
}
