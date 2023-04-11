import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationClientsBandwidthUsageHistoryRequest extends SpeakeasyBase {
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
export declare class GetOrganizationClientsBandwidthUsageHistory200ApplicationJSON extends SpeakeasyBase {
    /**
     * Downloaded data, in mbps.
     */
    downstream?: number;
    /**
     * Total bandwidth usage, in mbps.
     */
    total?: number;
    /**
     * Timestamp for the bandwidth usage snapshot.
     */
    ts?: Date;
    /**
     * Uploaded data, in mbps.
     */
    upstream?: number;
}
export declare class GetOrganizationClientsBandwidthUsageHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationClientsBandwidthUsageHistory200ApplicationJSONObjects?: GetOrganizationClientsBandwidthUsageHistory200ApplicationJSON[];
}
