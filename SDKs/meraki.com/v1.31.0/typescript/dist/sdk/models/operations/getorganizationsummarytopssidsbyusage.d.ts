import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSummaryTopSsidsByUsageRequest extends SpeakeasyBase {
    organizationId: string;
    /**
     * The beginning of the timespan for the data.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
     */
    timespan?: number;
}
/**
 * Counts of the clients
 */
export declare class GetOrganizationSummaryTopSsidsByUsage200ApplicationJSONClientsCounts extends SpeakeasyBase {
    /**
     * Total counts of the clients
     */
    total?: number;
}
/**
 * Clients info of the SSID
 */
export declare class GetOrganizationSummaryTopSsidsByUsage200ApplicationJSONClients extends SpeakeasyBase {
    /**
     * Counts of the clients
     */
    counts?: GetOrganizationSummaryTopSsidsByUsage200ApplicationJSONClientsCounts;
}
/**
 * Date usage of the SSID, in megabytes
 */
export declare class GetOrganizationSummaryTopSsidsByUsage200ApplicationJSONUsage extends SpeakeasyBase {
    /**
     * Downstream usage of the SSID
     */
    downstream?: number;
    /**
     * Percentage usage of the SSID
     */
    percentage?: number;
    /**
     * Total usage of the SSID
     */
    total?: number;
    /**
     * Upstream usage of the SSID
     */
    upstream?: number;
}
export declare class GetOrganizationSummaryTopSsidsByUsage200ApplicationJSON extends SpeakeasyBase {
    /**
     * Clients info of the SSID
     */
    clients?: GetOrganizationSummaryTopSsidsByUsage200ApplicationJSONClients;
    /**
     * Name of the SSID
     */
    name?: string;
    /**
     * Date usage of the SSID, in megabytes
     */
    usage?: GetOrganizationSummaryTopSsidsByUsage200ApplicationJSONUsage;
}
export declare class GetOrganizationSummaryTopSsidsByUsageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSummaryTopSsidsByUsage200ApplicationJSONObjects?: GetOrganizationSummaryTopSsidsByUsage200ApplicationJSON[];
}
