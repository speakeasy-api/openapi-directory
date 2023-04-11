import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSummaryTopDevicesModelsByUsageRequest extends SpeakeasyBase {
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
 * Usage info in megabytes
 */
export declare class GetOrganizationSummaryTopDevicesModelsByUsage200ApplicationJSONUsage extends SpeakeasyBase {
    /**
     * Average usage in megabytes
     */
    average?: number;
    /**
     * Total usage in megabytes
     */
    total?: number;
}
export declare class GetOrganizationSummaryTopDevicesModelsByUsage200ApplicationJSON extends SpeakeasyBase {
    /**
     * Total number of devices per model
     */
    count?: number;
    /**
     * The device model
     */
    model?: string;
    /**
     * Usage info in megabytes
     */
    usage?: GetOrganizationSummaryTopDevicesModelsByUsage200ApplicationJSONUsage;
}
export declare class GetOrganizationSummaryTopDevicesModelsByUsageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSummaryTopDevicesModelsByUsage200ApplicationJSONObjects?: GetOrganizationSummaryTopDevicesModelsByUsage200ApplicationJSON[];
}
