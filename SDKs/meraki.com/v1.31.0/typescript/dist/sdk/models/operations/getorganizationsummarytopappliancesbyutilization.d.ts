import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSummaryTopAppliancesByUtilizationRequest extends SpeakeasyBase {
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
export declare class GetOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONNetwork extends SpeakeasyBase {
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
 * Average utilization of the appliance
 */
export declare class GetOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONUtilizationAverage extends SpeakeasyBase {
    /**
     * Average percentage utilization of the appliance
     */
    percentage?: number;
}
/**
 * Utilization of the appliance
 */
export declare class GetOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONUtilization extends SpeakeasyBase {
    /**
     * Average utilization of the appliance
     */
    average?: GetOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONUtilizationAverage;
}
export declare class GetOrganizationSummaryTopAppliancesByUtilization200ApplicationJSON extends SpeakeasyBase {
    /**
     * Mac address of the appliance
     */
    mac?: string;
    /**
     * Model of the appliance
     */
    model?: string;
    /**
     * Name of the appliance
     */
    name?: string;
    /**
     * Network info
     */
    network?: GetOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONNetwork;
    /**
     * Serial number of the appliance
     */
    serial?: string;
    /**
     * Utilization of the appliance
     */
    utilization?: GetOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONUtilization;
}
export declare class GetOrganizationSummaryTopAppliancesByUtilizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONObjects?: GetOrganizationSummaryTopAppliancesByUtilization200ApplicationJSON[];
}
