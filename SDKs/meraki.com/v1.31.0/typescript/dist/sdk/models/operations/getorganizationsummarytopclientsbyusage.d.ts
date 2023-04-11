import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSummaryTopClientsByUsageRequest extends SpeakeasyBase {
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
export declare class GetOrganizationSummaryTopClientsByUsage200ApplicationJSONNetwork extends SpeakeasyBase {
    /**
     * ID of network
     */
    id?: string;
    /**
     * Name of network
     */
    name?: string;
}
/**
 * Data usage information
 */
export declare class GetOrganizationSummaryTopClientsByUsage200ApplicationJSONUsage extends SpeakeasyBase {
    /**
     * Downstream data usage by client
     */
    downstream?: number;
    /**
     * Percentage of total data usage by client
     */
    percentage?: number;
    /**
     * Total data usage by client
     */
    total?: number;
    /**
     * Upstream data usage by client
     */
    upstream?: number;
}
export declare class GetOrganizationSummaryTopClientsByUsage200ApplicationJSON extends SpeakeasyBase {
    /**
     * ID of client
     */
    id?: string;
    /**
     * MAC address of client
     */
    mac?: string;
    /**
     * Name of client
     */
    name?: string;
    network?: GetOrganizationSummaryTopClientsByUsage200ApplicationJSONNetwork;
    /**
     * Data usage information
     */
    usage?: GetOrganizationSummaryTopClientsByUsage200ApplicationJSONUsage;
}
export declare class GetOrganizationSummaryTopClientsByUsageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSummaryTopClientsByUsage200ApplicationJSONObjects?: GetOrganizationSummaryTopClientsByUsage200ApplicationJSON[];
}
