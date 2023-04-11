import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationFirmwareUpgradesByDeviceRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * Optional parameter to filter by firmware upgrade batch ids.
     */
    firmwareUpgradeBatchIds?: string[];
    /**
     * Optional parameter to filter by firmware upgrade ids.
     */
    firmwareUpgradeIds?: string[];
    /**
     * Optional parameter to filter by one or more MAC addresses belonging to devices. All devices returned belong to MAC addresses that are an exact match.
     */
    macs?: string[];
    /**
     * Optional parameter to filter by network
     */
    networkIds?: string[];
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 50. Default is 50.
     */
    perPage?: number;
    /**
     * Optional parameter to filter by serial number.  All returned devices will have a serial number that is an exact match.
     */
    serials?: string[];
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
}
/**
 * The initial version of the device
 */
export declare class GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion extends SpeakeasyBase {
    /**
     * ID of the initial firmware version
     */
    id?: string;
    /**
     * Release date of the firmware version
     */
    releaseDate?: string;
    /**
     * Release type of the firmware version
     */
    releaseType?: string;
    /**
     * Firmware version short name
     */
    shortName?: string;
}
/**
 * The staged upgrade group
 */
export declare class GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStagedGroup extends SpeakeasyBase {
    /**
     * Id of the staged upgrade group
     */
    id?: string;
}
/**
 * Staged upgrade
 */
export declare class GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStaged extends SpeakeasyBase {
    /**
     * The staged upgrade group
     */
    group?: GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStagedGroup;
}
/**
 * Version the device is upgrading to
 */
export declare class GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion extends SpeakeasyBase {
    /**
     * ID of the initial firmware version
     */
    id?: string;
    /**
     * Release date of the firmware version
     */
    releaseDate?: string;
    /**
     * Release type of the firmware version
     */
    releaseType?: string;
    /**
     * Firmware version short name
     */
    shortName?: string;
}
/**
 * The devices upgrade details and status
 */
export declare class GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade extends SpeakeasyBase {
    /**
     * The initial version of the device
     */
    fromVersion?: GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion;
    /**
     * ID of the upgrade
     */
    id?: string;
    /**
     * Staged upgrade
     */
    staged?: GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStaged;
    /**
     * Status of the upgrade
     */
    status?: string;
    /**
     * Start time of the upgrade
     */
    time?: string;
    /**
     * Version the device is upgrading to
     */
    toVersion?: GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion;
    /**
     * ID of the upgrade batch
     */
    upgradeBatchId?: string;
}
export declare class GetOrganizationFirmwareUpgradesByDevice200ApplicationJSON extends SpeakeasyBase {
    /**
     * Status of the device upgrade
     */
    deviceStatus?: string;
    /**
     * Name assigned to the device
     */
    name?: string;
    /**
     * Serial of the device
     */
    serial?: string;
    /**
     * The devices upgrade details and status
     */
    upgrade?: GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade;
}
export declare class GetOrganizationFirmwareUpgradesByDeviceResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationFirmwareUpgradesByDevice200ApplicationJSONObjects?: GetOrganizationFirmwareUpgradesByDevice200ApplicationJSON[];
}
