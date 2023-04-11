import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSummaryTopClientsManufacturersByUsageRequest extends SpeakeasyBase {
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
 * Counts of clients
 */
export declare class GetOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONClientsCounts extends SpeakeasyBase {
    /**
     * Total counts of clients
     */
    total?: number;
}
/**
 * Clients info
 */
export declare class GetOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONClients extends SpeakeasyBase {
    /**
     * Counts of clients
     */
    counts?: GetOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONClientsCounts;
}
/**
 * Clients usage
 */
export declare class GetOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONUsage extends SpeakeasyBase {
    /**
     * Downstream data usage by client
     */
    downstream?: number;
    /**
     * Total data usage by client
     */
    total?: number;
    /**
     * Upstream data usage by client
     */
    upstream?: number;
}
export declare class GetOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSON extends SpeakeasyBase {
    /**
     * Clients info
     */
    clients?: GetOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONClients;
    /**
     * Name of the manufacturer
     */
    name?: string;
    /**
     * Clients usage
     */
    usage?: GetOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONUsage;
}
export declare class GetOrganizationSummaryTopClientsManufacturersByUsageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONObjects?: GetOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSON[];
}
