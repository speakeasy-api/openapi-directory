import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationFirmwareUpgradesRequest extends SpeakeasyBase {
    organizationId: string;
    /**
     * The product type in a given upgrade ID
     */
    productType?: string[];
    /**
     * The status of an upgrade
     */
    status?: string[];
}
/**
 * ID of the upgrade's starting version
 */
export declare class GetOrganizationFirmwareUpgrades200ApplicationJSONFromVersion extends SpeakeasyBase {
    /**
     * Firmware version ID
     */
    id?: string;
    /**
     * Release date of the firmware version
     */
    releaseDate?: Date;
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
 * Network of the upgrade
 */
export declare class GetOrganizationFirmwareUpgrades200ApplicationJSONNetwork extends SpeakeasyBase {
    /**
     * ID of network
     */
    id?: string;
    /**
     * The network
     */
    name?: string;
}
/**
 * ID of the upgrade's target version
 */
export declare class GetOrganizationFirmwareUpgrades200ApplicationJSONToVersion extends SpeakeasyBase {
    /**
     * Firmware version ID
     */
    id?: string;
    /**
     * Release date of the firmware version
     */
    releaseDate?: Date;
    /**
     * Release type of the firmware version
     */
    releaseType?: string;
    /**
     * Firmware version short name
     */
    shortName?: string;
}
export declare class GetOrganizationFirmwareUpgrades200ApplicationJSON extends SpeakeasyBase {
    /**
     * Timestamp when upgrade completed. Null if status pending.
     */
    completedAt?: string;
    /**
     * ID of the upgrade's starting version
     */
    fromVersion?: GetOrganizationFirmwareUpgrades200ApplicationJSONFromVersion;
    /**
     * Network of the upgrade
     */
    network?: GetOrganizationFirmwareUpgrades200ApplicationJSONNetwork;
    /**
     * product upgraded [wireless, appliance, switch, systemsManager, camera, cellularGateway, sensor]
     */
    productType?: string;
    /**
     * Status of upgrade event: [Cancelled, Completed]
     */
    status?: string;
    /**
     * Scheduled start time
     */
    time?: Date;
    /**
     * ID of the upgrade's target version
     */
    toVersion?: GetOrganizationFirmwareUpgrades200ApplicationJSONToVersion;
    /**
     * The upgrade batch
     */
    upgradeBatchId?: string;
    /**
     * The upgrade
     */
    upgradeId?: string;
}
export declare class GetOrganizationFirmwareUpgradesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationFirmwareUpgrades200ApplicationJSONObjects?: GetOrganizationFirmwareUpgrades200ApplicationJSON[];
}
