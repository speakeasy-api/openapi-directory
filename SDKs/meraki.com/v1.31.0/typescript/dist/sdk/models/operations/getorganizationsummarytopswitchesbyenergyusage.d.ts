import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSummaryTopSwitchesByEnergyUsageRequest extends SpeakeasyBase {
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
 * Network info
 */
export declare class GetOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONNetwork extends SpeakeasyBase {
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
 * Energy usage of the switch
 */
export declare class GetOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONUsage extends SpeakeasyBase {
    /**
     * Total energy usage of the switch
     */
    total?: number;
}
export declare class GetOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSON extends SpeakeasyBase {
    /**
     * Mac address of the switch
     */
    mac?: string;
    /**
     * Model of the switch
     */
    model?: string;
    /**
     * Name of the switch
     */
    name?: string;
    /**
     * Network info
     */
    network?: GetOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONNetwork;
    /**
     * Energy usage of the switch
     */
    usage?: GetOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONUsage;
}
export declare class GetOrganizationSummaryTopSwitchesByEnergyUsageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONObjects?: GetOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSON[];
}
