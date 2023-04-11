import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Clients {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the clients of a device, up to a maximum of a month ago
     *
     * @remarks
     * List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.
     */
    getDeviceClients(req: operations.GetDeviceClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceClientsResponse>;
    /**
     * List the security events for a client
     *
     * @remarks
     * List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkApplianceClientSecurityEvents(req: operations.GetNetworkApplianceClientSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceClientSecurityEventsResponse>;
    /**
     * Return the client associated with the given identifier
     *
     * @remarks
     * Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkClient(req: operations.GetNetworkClientRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientResponse>;
    /**
     * Return the policy assigned to a client on the network
     *
     * @remarks
     * Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkClientPolicy(req: operations.GetNetworkClientPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientPolicyResponse>;
    /**
     * Return the splash authorization for a client, for each SSID they've associated with through splash
     *
     * @remarks
     * Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkClientSplashAuthorizationStatus(req: operations.GetNetworkClientSplashAuthorizationStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientSplashAuthorizationStatusResponse>;
    /**
     * Return the client's network traffic data over time
     *
     * @remarks
     * Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkClientTrafficHistory(req: operations.GetNetworkClientTrafficHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientTrafficHistoryResponse>;
    /**
     * Return the client's daily usage history
     *
     * @remarks
     * Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkClientUsageHistory(req: operations.GetNetworkClientUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientUsageHistoryResponse>;
    /**
     * List the clients that have used this network in the timespan
     *
     * @remarks
     * List the clients that have used this network in the timespan
     */
    getNetworkClients(req: operations.GetNetworkClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsResponse>;
    /**
     * Return the application usage data for clients
     *
     * @remarks
     * Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
     */
    getNetworkClientsApplicationUsage(req: operations.GetNetworkClientsApplicationUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsApplicationUsageResponse>;
    /**
     * Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
     *
     * @remarks
     * Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
     */
    getNetworkClientsBandwidthUsageHistory(req: operations.GetNetworkClientsBandwidthUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsBandwidthUsageHistoryResponse>;
    /**
     * Return overview statistics for network clients
     *
     * @remarks
     * Return overview statistics for network clients
     */
    getNetworkClientsOverview(req: operations.GetNetworkClientsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsOverviewResponse>;
    /**
     * Return the usage histories for clients
     *
     * @remarks
     * Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
     */
    getNetworkClientsUsageHistories(req: operations.GetNetworkClientsUsageHistoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsUsageHistoriesResponse>;
    /**
     * Aggregated connectivity info for a given client on this network
     *
     * @remarks
     * Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
     */
    getNetworkWirelessClientConnectionStats(req: operations.GetNetworkWirelessClientConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientConnectionStatsResponse>;
    /**
     * List the wireless connectivity events for a client within a network in the timespan.
     *
     * @remarks
     * List the wireless connectivity events for a client within a network in the timespan.
     */
    getNetworkWirelessClientConnectivityEvents(req: operations.GetNetworkWirelessClientConnectivityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientConnectivityEventsResponse>;
    /**
     * Return the latency history for a client
     *
     * @remarks
     * Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.
     */
    getNetworkWirelessClientLatencyHistory(req: operations.GetNetworkWirelessClientLatencyHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientLatencyHistoryResponse>;
    /**
     * Aggregated latency info for a given client on this network
     *
     * @remarks
     * Aggregated latency info for a given client on this network. Clients are identified by their MAC.
     */
    getNetworkWirelessClientLatencyStats(req: operations.GetNetworkWirelessClientLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientLatencyStatsResponse>;
    /**
     * Aggregated connectivity info for this network, grouped by clients
     *
     * @remarks
     * Aggregated connectivity info for this network, grouped by clients
     */
    getNetworkWirelessClientsConnectionStats(req: operations.GetNetworkWirelessClientsConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientsConnectionStatsResponse>;
    /**
     * Aggregated latency info for this network, grouped by clients
     *
     * @remarks
     * Aggregated latency info for this network, grouped by clients
     */
    getNetworkWirelessClientsLatencyStats(req: operations.GetNetworkWirelessClientsLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientsLatencyStatsResponse>;
    /**
     * Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
     *
     * @remarks
     * Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
     */
    getOrganizationClientsBandwidthUsageHistory(req: operations.GetOrganizationClientsBandwidthUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationClientsBandwidthUsageHistoryResponse>;
    /**
     * Return summary information around client data usage (in mb) across the given organization.
     *
     * @remarks
     * Return summary information around client data usage (in mb) across the given organization.
     */
    getOrganizationClientsOverview(req: operations.GetOrganizationClientsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationClientsOverviewResponse>;
    /**
     * Return the client details in an organization
     *
     * @remarks
     * Return the client details in an organization
     */
    getOrganizationClientsSearch(req: operations.GetOrganizationClientsSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationClientsSearchResponse>;
    /**
     * Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
     *
     * @remarks
     * Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
     */
    getOrganizationSummaryTopClientsByUsage(req: operations.GetOrganizationSummaryTopClientsByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopClientsByUsageResponse>;
    /**
     * Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
     *
     * @remarks
     * Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
     */
    getOrganizationSummaryTopClientsManufacturersByUsage(req: operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopClientsManufacturersByUsageResponse>;
    /**
     * Provisions a client with a name and policy
     *
     * @remarks
     * Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
     */
    provisionNetworkClients(req: operations.ProvisionNetworkClientsRequest, config?: AxiosRequestConfig): Promise<operations.ProvisionNetworkClientsResponse>;
    /**
     * Update the policy assigned to a client on the network
     *
     * @remarks
     * Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    updateNetworkClientPolicy(req: operations.UpdateNetworkClientPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkClientPolicyResponse>;
    /**
     * Update a client's splash authorization
     *
     * @remarks
     * Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    updateNetworkClientSplashAuthorizationStatus(req: operations.UpdateNetworkClientSplashAuthorizationStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkClientSplashAuthorizationStatusResponse>;
}
