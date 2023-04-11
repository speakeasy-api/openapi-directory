import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetOrganizationInventoryDevicesProductTypesEnum {
    Appliance = "appliance",
    Camera = "camera",
    CellularGateway = "cellularGateway",
    Sensor = "sensor",
    Switch = "switch",
    SystemsManager = "systemsManager",
    Wireless = "wireless"
}
/**
 * To use with 'tags' parameter, to filter devices which contain ANY or ALL given tags. Accepted values are 'withAnyTags' or 'withAllTags', default is 'withAnyTags'.
 */
export declare enum GetOrganizationInventoryDevicesTagsFilterTypeEnum {
    WithAllTags = "withAllTags",
    WithAnyTags = "withAnyTags"
}
/**
 * Filter results by used or unused inventory. Accepted values are 'used' or 'unused'.
 */
export declare enum GetOrganizationInventoryDevicesUsedStateEnum {
    Unused = "unused",
    Used = "used"
}
export declare class GetOrganizationInventoryDevicesRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * Search for devices in inventory based on mac addresses.
     */
    macs?: string[];
    /**
     * Search for devices in inventory based on model.
     */
    models?: string[];
    /**
     * Search for devices in inventory based on network ids.
     */
    networkIds?: string[];
    /**
     * Search for devices in inventory based on order numbers.
     */
    orderNumbers?: string[];
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * Filter devices by product type. Accepted values are appliance, camera, cellularGateway, sensor, switch, systemsManager, and wireless.
     */
    productTypes?: GetOrganizationInventoryDevicesProductTypesEnum[];
    /**
     * Search for devices in inventory based on serial number, mac address, or model.
     */
    search?: string;
    /**
     * Search for devices in inventory based on serials.
     */
    serials?: string[];
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
    /**
     * Filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below).
     */
    tags?: string[];
    /**
     * To use with 'tags' parameter, to filter devices which contain ANY or ALL given tags. Accepted values are 'withAnyTags' or 'withAllTags', default is 'withAnyTags'.
     */
    tagsFilterType?: GetOrganizationInventoryDevicesTagsFilterTypeEnum;
    /**
     * Filter results by used or unused inventory. Accepted values are 'used' or 'unused'.
     */
    usedState?: GetOrganizationInventoryDevicesUsedStateEnum;
}
export declare class GetOrganizationInventoryDevices200ApplicationJSON extends SpeakeasyBase {
    /**
     * Claimed time of the device
     */
    claimedAt?: Date;
    /**
     * License expiration date of the device
     */
    licenseExpirationDate?: Date;
    /**
     * MAC address of the device
     */
    mac?: string;
    /**
     * Model type of the device
     */
    model?: string;
    /**
     * Name of the device
     */
    name?: string;
    /**
     * Network Id of the device
     */
    networkId?: string;
    /**
     * Order number of the device
     */
    orderNumber?: string;
    /**
     * Product type of the device
     */
    productType?: string;
    /**
     * Serial number of the device
     */
    serial?: string;
    /**
     * Device tags
     */
    tags?: string[];
}
export declare class GetOrganizationInventoryDevicesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationInventoryDevices200ApplicationJSONObjects?: GetOrganizationInventoryDevices200ApplicationJSON[];
}
