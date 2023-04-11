import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationInsightApplicationsRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationInsightApplications200ApplicationJSONThresholdsByNetwork extends SpeakeasyBase {
    /**
     * Number of useful information bits delivered over a network per unit of time
     */
    goodput?: number;
    /**
     * Network identifier
     */
    networkId?: string;
    /**
     * Duration of the response, in milliseconds
     */
    responseDuration?: number;
}
/**
 * Thresholds defined by a user or Meraki models for each application
 */
export declare class GetOrganizationInsightApplications200ApplicationJSONThresholds extends SpeakeasyBase {
    /**
     * Threshold for each network
     */
    byNetwork?: GetOrganizationInsightApplications200ApplicationJSONThresholdsByNetwork[];
    /**
     * Threshold type (static or smart)
     */
    type?: string;
}
export declare class GetOrganizationInsightApplications200ApplicationJSON extends SpeakeasyBase {
    /**
     * Application identifier
     */
    applicationId?: string;
    /**
     * Application name
     */
    name?: string;
    /**
     * Thresholds defined by a user or Meraki models for each application
     */
    thresholds?: GetOrganizationInsightApplications200ApplicationJSONThresholds;
}
export declare class GetOrganizationInsightApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationInsightApplications200ApplicationJSONObjects?: GetOrganizationInsightApplications200ApplicationJSON[];
}
