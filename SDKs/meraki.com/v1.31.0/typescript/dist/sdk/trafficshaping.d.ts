import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TrafficShaping {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a custom performance class for an MX network
     *
     * @remarks
     * Add a custom performance class for an MX network
     */
    createNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * Delete a custom performance class from an MX network
     *
     * @remarks
     * Delete a custom performance class from an MX network
     */
    deleteNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * Display the traffic shaping settings for an MX network
     *
     * @remarks
     * Display the traffic shaping settings for an MX network
     */
    getNetworkApplianceTrafficShaping(req: operations.GetNetworkApplianceTrafficShapingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingResponse>;
    /**
     * Return a custom performance class for an MX network
     *
     * @remarks
     * Return a custom performance class for an MX network
     */
    getNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * List all custom performance classes for an MX network
     *
     * @remarks
     * List all custom performance classes for an MX network
     */
    getNetworkApplianceTrafficShapingCustomPerformanceClasses(req: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse>;
    /**
     * Display the traffic shaping settings rules for an MX network
     *
     * @remarks
     * Display the traffic shaping settings rules for an MX network
     */
    getNetworkApplianceTrafficShapingRules(req: operations.GetNetworkApplianceTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingRulesResponse>;
    /**
     * Returns the uplink bandwidth settings for your MX network.
     *
     * @remarks
     * Returns the uplink bandwidth settings for your MX network.
     */
    getNetworkApplianceTrafficShapingUplinkBandwidth(req: operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse>;
    /**
     * Show uplink selection settings for an MX network
     *
     * @remarks
     * Show uplink selection settings for an MX network
     */
    getNetworkApplianceTrafficShapingUplinkSelection(req: operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse>;
    /**
     * Returns the application categories for traffic shaping rules.
     *
     * @remarks
     * Returns the application categories for traffic shaping rules.
     */
    getNetworkTrafficShapingApplicationCategories(req: operations.GetNetworkTrafficShapingApplicationCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficShapingApplicationCategoriesResponse>;
    /**
     * Returns the available DSCP tagging options for your traffic shaping rules.
     *
     * @remarks
     * Returns the available DSCP tagging options for your traffic shaping rules.
     */
    getNetworkTrafficShapingDscpTaggingOptions(req: operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse>;
    /**
     * Display the traffic shaping settings for a SSID on an MR network
     *
     * @remarks
     * Display the traffic shaping settings for a SSID on an MR network
     */
    getNetworkWirelessSsidTrafficShapingRules(req: operations.GetNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidTrafficShapingRulesResponse>;
    /**
     * Update the traffic shaping settings for an MX network
     *
     * @remarks
     * Update the traffic shaping settings for an MX network
     */
    updateNetworkApplianceTrafficShaping(req: operations.UpdateNetworkApplianceTrafficShapingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingResponse>;
    /**
     * Update a custom performance class for an MX network
     *
     * @remarks
     * Update a custom performance class for an MX network
     */
    updateNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * Update the traffic shaping settings rules for an MX network
     *
     * @remarks
     * Update the traffic shaping settings rules for an MX network
     */
    updateNetworkApplianceTrafficShapingRules(req: operations.UpdateNetworkApplianceTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingRulesResponse>;
    /**
     * Updates the uplink bandwidth settings for your MX network.
     *
     * @remarks
     * Updates the uplink bandwidth settings for your MX network.
     */
    updateNetworkApplianceTrafficShapingUplinkBandwidth(req: operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse>;
    /**
     * Update uplink selection settings for an MX network
     *
     * @remarks
     * Update uplink selection settings for an MX network
     */
    updateNetworkApplianceTrafficShapingUplinkSelection(req: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse>;
    /**
     * Update the traffic shaping settings for an SSID on an MR network
     *
     * @remarks
     * Update the traffic shaping settings for an SSID on an MR network
     */
    updateNetworkWirelessSsidTrafficShapingRules(req: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse>;
}
