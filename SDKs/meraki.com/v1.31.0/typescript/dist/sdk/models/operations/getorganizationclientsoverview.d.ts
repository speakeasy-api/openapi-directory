import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationClientsOverviewRequest extends SpeakeasyBase {
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
 * Client count information
 */
export declare class GetOrganizationClientsOverview200ApplicationJSONCounts extends SpeakeasyBase {
    /**
     * Total number of clients with data usage in organization
     */
    total?: number;
}
/**
 * Overall data usage of all clients across organization
 */
export declare class GetOrganizationClientsOverview200ApplicationJSONUsageOverall extends SpeakeasyBase {
    /**
     * Downstream data usage (in kb) of all clients across organization
     */
    downstream?: number;
    /**
     * Total data usage (in kb) of all clients across organization
     */
    total?: number;
    /**
     * Upstream data usage (in kb) of all clients across organization
     */
    upstream?: number;
}
/**
 * Usage information of all clients across organization
 */
export declare class GetOrganizationClientsOverview200ApplicationJSONUsage extends SpeakeasyBase {
    /**
     * Average data usage (in kb) of each client in organization
     */
    average?: number;
    /**
     * Overall data usage of all clients across organization
     */
    overall?: GetOrganizationClientsOverview200ApplicationJSONUsageOverall;
}
/**
 * Successful operation
 */
export declare class GetOrganizationClientsOverview200ApplicationJSON extends SpeakeasyBase {
    /**
     * Client count information
     */
    counts?: GetOrganizationClientsOverview200ApplicationJSONCounts;
    /**
     * Usage information of all clients across organization
     */
    usage?: GetOrganizationClientsOverview200ApplicationJSONUsage;
}
export declare class GetOrganizationClientsOverviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationClientsOverview200ApplicationJSONObject?: GetOrganizationClientsOverview200ApplicationJSON;
}
