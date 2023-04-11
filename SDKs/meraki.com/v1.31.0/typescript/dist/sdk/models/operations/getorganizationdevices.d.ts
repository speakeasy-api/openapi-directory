import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetOrganizationDevicesProductTypesEnum {
    Appliance = "appliance",
    Camera = "camera",
    CellularGateway = "cellularGateway",
    Sensor = "sensor",
    Switch = "switch",
    SystemsManager = "systemsManager",
    Wireless = "wireless"
}
/**
 * Optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected.
 */
export declare enum GetOrganizationDevicesTagsFilterTypeEnum {
    WithAllTags = "withAllTags",
    WithAnyTags = "withAnyTags"
}
export declare class GetOrganizationDevicesRequest extends SpeakeasyBase {
    /**
     * Filter results by whether or not the device's configuration has been updated after the given timestamp
     */
    configurationUpdatedAfter?: string;
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * Optional parameter to filter devices by MAC address. All returned devices will have a MAC address that contains the search term or is an exact match.
     */
    mac?: string;
    /**
     * Optional parameter to filter devices by one or more MAC addresses. All returned devices will have a MAC address that is an exact match.
     */
    macs?: string[];
    /**
     * Optional parameter to filter devices by model. All returned devices will have a model that contains the search term or is an exact match.
     */
    model?: string;
    /**
     * Optional parameter to filter devices by one or more models. All returned devices will have a model that is an exact match.
     */
    models?: string[];
    /**
     * Optional parameter to filter devices by name. All returned devices will have a name that contains the search term or is an exact match.
     */
    name?: string;
    /**
     * Optional parameter to filter devices by network.
     */
    networkIds?: string[];
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * Optional parameter to filter devices by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor.
     */
    productTypes?: GetOrganizationDevicesProductTypesEnum[];
    /**
     * Optional parameter to filter devices by the alert profiles that are bound to them. Only applies to sensor devices.
     */
    sensorAlertProfileIds?: string[];
    /**
     * Optional parameter to filter devices by the metrics that they provide. Only applies to sensor devices.
     */
    sensorMetrics?: string[];
    /**
     * Optional parameter to filter devices by serial number. All returned devices will have a serial number that contains the search term or is an exact match.
     */
    serial?: string;
    /**
     * Optional parameter to filter devices by one or more serial numbers. All returned devices will have a serial number that is an exact match.
     */
    serials?: string[];
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
    /**
     * Optional parameter to filter devices by tags.
     */
    tags?: string[];
    /**
     * Optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected.
     */
    tagsFilterType?: GetOrganizationDevicesTagsFilterTypeEnum;
}
export declare class GetOrganizationDevicesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationDevices200ApplicationJSONObjects?: Record<string, any>[];
}
