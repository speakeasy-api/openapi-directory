import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetOrganizationDevicesStatusesOverviewProductTypesEnum {
    Appliance = "appliance",
    Camera = "camera",
    CellularGateway = "cellularGateway",
    Sensor = "sensor",
    Switch = "switch",
    SystemsManager = "systemsManager",
    Wireless = "wireless"
}
export declare class GetOrganizationDevicesStatusesOverviewRequest extends SpeakeasyBase {
    /**
     * An optional parameter to filter device statuses by network.
     */
    networkIds?: string[];
    organizationId: string;
    /**
     * An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor.
     */
    productTypes?: GetOrganizationDevicesStatusesOverviewProductTypesEnum[];
}
/**
 * byStatus
 */
export declare class GetOrganizationDevicesStatusesOverview200ApplicationJSONCountsByStatus extends SpeakeasyBase {
    /**
     * alerting count
     */
    alerting?: number;
    /**
     * dormant count
     */
    dormant?: number;
    /**
     * offline count
     */
    offline?: number;
    /**
     * online count
     */
    online?: number;
}
/**
 * counts
 */
export declare class GetOrganizationDevicesStatusesOverview200ApplicationJSONCounts extends SpeakeasyBase {
    /**
     * byStatus
     */
    byStatus?: GetOrganizationDevicesStatusesOverview200ApplicationJSONCountsByStatus;
}
/**
 * Successful operation
 */
export declare class GetOrganizationDevicesStatusesOverview200ApplicationJSON extends SpeakeasyBase {
    /**
     * counts
     */
    counts?: GetOrganizationDevicesStatusesOverview200ApplicationJSONCounts;
}
export declare class GetOrganizationDevicesStatusesOverviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationDevicesStatusesOverview200ApplicationJSONObject?: GetOrganizationDevicesStatusesOverview200ApplicationJSON;
}
