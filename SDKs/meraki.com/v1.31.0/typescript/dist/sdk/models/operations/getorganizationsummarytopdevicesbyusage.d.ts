import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSummaryTopDevicesByUsageRequest extends SpeakeasyBase {
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
export declare class GetOrganizationSummaryTopDevicesByUsage200ApplicationJSONClientsCounts extends SpeakeasyBase {
    /**
     * Total counts of clients
     */
    total?: number;
}
/**
 * Clients
 */
export declare class GetOrganizationSummaryTopDevicesByUsage200ApplicationJSONClients extends SpeakeasyBase {
    /**
     * Counts of clients
     */
    counts?: GetOrganizationSummaryTopDevicesByUsage200ApplicationJSONClientsCounts;
}
/**
 * Network info
 */
export declare class GetOrganizationSummaryTopDevicesByUsage200ApplicationJSONNetwork extends SpeakeasyBase {
    /**
     * Network id
     */
    id?: string;
    /**
     * Network name
     */
    name?: string;
}
/**
 * Data usage of the device
 */
export declare class GetOrganizationSummaryTopDevicesByUsage200ApplicationJSONUsage extends SpeakeasyBase {
    /**
     * Data usage of the device by percentage
     */
    percentage?: number;
    /**
     * Total data usage of the device
     */
    total?: number;
}
export declare class GetOrganizationSummaryTopDevicesByUsage200ApplicationJSON extends SpeakeasyBase {
    /**
     * Clients
     */
    clients?: GetOrganizationSummaryTopDevicesByUsage200ApplicationJSONClients;
    /**
     * Mac address of the device
     */
    mac?: string;
    /**
     * Model of the device
     */
    model?: string;
    /**
     * Name of the device
     */
    name?: string;
    /**
     * Network info
     */
    network?: GetOrganizationSummaryTopDevicesByUsage200ApplicationJSONNetwork;
    /**
     * Product type of the device
     */
    productType?: string;
    /**
     * Serial number of the device
     */
    serial?: string;
    /**
     * Data usage of the device
     */
    usage?: GetOrganizationSummaryTopDevicesByUsage200ApplicationJSONUsage;
}
export declare class GetOrganizationSummaryTopDevicesByUsageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSummaryTopDevicesByUsage200ApplicationJSONObjects?: GetOrganizationSummaryTopDevicesByUsage200ApplicationJSON[];
}
