import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected.
 */
export declare enum GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum {
    WithAllTags = "withAllTags",
    WithAnyTags = "withAnyTags"
}
export declare class GetOrganizationDevicesPowerModulesStatusesByDeviceRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * Optional parameter to filter device availabilities by network ID. This filter uses multiple exact matches.
     */
    networkIds?: string[];
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * Optional parameter to filter device availabilities by device product types. This filter uses multiple exact matches.
     */
    productTypes?: string[];
    /**
     * Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches.
     */
    serials?: string[];
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
    /**
     * An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). This filter uses multiple exact matches.
     */
    tags?: string[];
    /**
     * An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected.
     */
    tagsFilterType?: GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum;
}
/**
 * Network info.
 */
export declare class GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONNetwork extends SpeakeasyBase {
    /**
     * ID for the network that the device is associated with.
     */
    id?: string;
}
/**
 * Device product type.
 */
export declare enum GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONProductTypeEnum {
    Appliance = "appliance",
    Camera = "camera",
    CellularGateway = "cellularGateway",
    Sensor = "sensor",
    Switch = "switch",
    SystemsManager = "systemsManager",
    Wireless = "wireless"
}
/**
 * Which slot the AC power supply occupies. Possible values are: 0, 1, 2.
 */
export declare enum GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONSlotsNumberEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * Status of the power supply unit. Possible values are: connected, not connected, powering.
 */
export declare enum GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONSlotsStatusEnum {
    Connected = "connected",
    NotConnected = "not connected",
    Powering = "powering"
}
export declare class GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONSlots extends SpeakeasyBase {
    /**
     * The power supply unit model.
     */
    model?: string;
    /**
     * Which slot the AC power supply occupies. Possible values are: 0, 1, 2.
     */
    number?: GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONSlotsNumberEnum;
    /**
     * The power supply unit serial number.
     */
    serial?: string;
    /**
     * Status of the power supply unit. Possible values are: connected, not connected, powering.
     */
    status?: GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONSlotsStatusEnum;
}
export declare class GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSON extends SpeakeasyBase {
    /**
     * The device MAC address.
     */
    mac?: string;
    /**
     * The device name.
     */
    name?: string;
    /**
     * Network info.
     */
    network?: GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONNetwork;
    /**
     * Device product type.
     */
    productType?: GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONProductTypeEnum;
    /**
     * The device serial number.
     */
    serial?: string;
    /**
     * Information for the device's AC power supplies.
     */
    slots?: GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONSlots[];
    /**
     * List of custom tags for the device.
     */
    tags?: string[];
}
export declare class GetOrganizationDevicesPowerModulesStatusesByDeviceResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects?: GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSON[];
}
