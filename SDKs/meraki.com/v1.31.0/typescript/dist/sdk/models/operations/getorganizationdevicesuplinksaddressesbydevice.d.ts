import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected.
 */
export declare enum GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum {
    WithAllTags = "withAllTags",
    WithAnyTags = "withAnyTags"
}
export declare class GetOrganizationDevicesUplinksAddressesByDeviceRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * Optional parameter to filter device uplinks by network ID. This filter uses multiple exact matches.
     */
    networkIds?: string[];
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * Optional parameter to filter device uplinks by device product types. This filter uses multiple exact matches.
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
    tagsFilterType?: GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum;
}
/**
 * Network info.
 */
export declare class GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONNetwork extends SpeakeasyBase {
    /**
     * ID for the network containing the device.
     */
    id?: string;
}
/**
 * Device product type.
 */
export declare enum GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONProductTypeEnum {
    Appliance = "appliance",
    Camera = "camera",
    CellularGateway = "cellularGateway",
    Sensor = "sensor",
    Switch = "switch",
    SystemsManager = "systemsManager",
    Wireless = "wireless"
}
/**
 * Indicates how the device uplink address is assigned. Available options are: static, dynamic.
 */
export declare enum GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONUplinksAddressesAssignmentModeEnum {
    Dynamic = "dynamic",
    Static = "static"
}
/**
 * Type of address for the device uplink. Available options are: ipv4, ipv6.
 */
export declare enum GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONUplinksAddressesProtocolEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * Public interface information.
 */
export declare class GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONUplinksAddressesPublic extends SpeakeasyBase {
    /**
     * The device uplink public IP address.
     */
    address?: string;
}
export declare class GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONUplinksAddresses extends SpeakeasyBase {
    /**
     * Device uplink address.
     */
    address?: string;
    /**
     * Indicates how the device uplink address is assigned. Available options are: static, dynamic.
     */
    assignmentMode?: GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONUplinksAddressesAssignmentModeEnum;
    /**
     * Device uplink gateway address.
     */
    gateway?: string;
    /**
     * Type of address for the device uplink. Available options are: ipv4, ipv6.
     */
    protocol?: GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONUplinksAddressesProtocolEnum;
    /**
     * Public interface information.
     */
    public?: GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONUplinksAddressesPublic;
}
/**
 * Interface for the device uplink. Available options are: cellular, man1, man2, wan1, wan2
 */
export declare enum GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONUplinksInterfaceEnum {
    Cellular = "cellular",
    Man1 = "man1",
    Man2 = "man2",
    Wan1 = "wan1",
    Wan2 = "wan2"
}
export declare class GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONUplinks extends SpeakeasyBase {
    /**
     * Available addresses for the interface.
     */
    addresses?: GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONUplinksAddresses[];
    /**
     * Interface for the device uplink. Available options are: cellular, man1, man2, wan1, wan2
     */
    interface?: GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONUplinksInterfaceEnum;
}
export declare class GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSON extends SpeakeasyBase {
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
    network?: GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONNetwork;
    /**
     * Device product type.
     */
    productType?: GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONProductTypeEnum;
    /**
     * The device serial number.
     */
    serial?: string;
    /**
     * List of custom tags for the device.
     */
    tags?: string[];
    /**
     * List of device uplink addresses information.
     */
    uplinks?: GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONUplinks[];
}
export declare class GetOrganizationDevicesUplinksAddressesByDeviceResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects?: GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSON[];
}
