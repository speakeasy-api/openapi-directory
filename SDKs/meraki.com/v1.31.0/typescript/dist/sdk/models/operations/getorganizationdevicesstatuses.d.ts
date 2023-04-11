import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetOrganizationDevicesStatusesProductTypesEnum {
    Appliance = "appliance",
    Camera = "camera",
    CellularGateway = "cellularGateway",
    Sensor = "sensor",
    Switch = "switch",
    SystemsManager = "systemsManager",
    Wireless = "wireless"
}
export declare enum GetOrganizationDevicesStatusesStatusesEnum {
    Alerting = "alerting",
    Dormant = "dormant",
    Offline = "offline",
    Online = "online"
}
/**
 * An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected.
 */
export declare enum GetOrganizationDevicesStatusesTagsFilterTypeEnum {
    WithAllTags = "withAllTags",
    WithAnyTags = "withAnyTags"
}
export declare class GetOrganizationDevicesStatusesRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * Optional parameter to filter devices by models.
     */
    models?: string[];
    /**
     * Optional parameter to filter devices by network ids.
     */
    networkIds?: string[];
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor.
     */
    productTypes?: GetOrganizationDevicesStatusesProductTypesEnum[];
    /**
     * Optional parameter to filter devices by serials.
     */
    serials?: string[];
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
    /**
     * Optional parameter to filter devices by statuses. Valid statuses are ["online", "alerting", "offline", "dormant"].
     */
    statuses?: GetOrganizationDevicesStatusesStatusesEnum[];
    /**
     * An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below).
     */
    tags?: string[];
    /**
     * An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected.
     */
    tagsFilterType?: GetOrganizationDevicesStatusesTagsFilterTypeEnum;
}
/**
 * Components
 */
export declare class GetOrganizationDevicesStatuses200ApplicationJSONComponents extends SpeakeasyBase {
    /**
     * Power Supplies
     */
    powerSupplies?: string[];
}
/**
 * Successful operation
 */
export declare class GetOrganizationDevicesStatuses200ApplicationJSON extends SpeakeasyBase {
    /**
     * Components
     */
    components?: GetOrganizationDevicesStatuses200ApplicationJSONComponents;
    /**
     * IP Gateway
     */
    gateway?: string;
    /**
     * IP Type
     */
    ipType?: string;
    /**
     * LAN IP Address
     */
    lanIp?: string;
    /**
     * Device Last Reported Location
     */
    lastReportedAt?: string;
    /**
     * MAC Address
     */
    mac?: string;
    /**
     * Model
     */
    model?: string;
    /**
     * Device Name
     */
    name?: string;
    /**
     * Network ID
     */
    networkId?: string;
    /**
     * Primary DNS
     */
    primaryDns?: string;
    /**
     * Product Type
     */
    productType?: string;
    /**
     * Public IP Address
     */
    publicIp?: string;
    /**
     * Secondary DNS
     */
    secondaryDns?: string;
    /**
     * Device Serial Number
     */
    serial?: string;
    /**
     * Device Status
     */
    status?: string;
    /**
     * Tags
     */
    tags?: string[];
}
export declare class GetOrganizationDevicesStatusesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationDevicesStatuses200ApplicationJSONObject?: GetOrganizationDevicesStatuses200ApplicationJSON;
}
