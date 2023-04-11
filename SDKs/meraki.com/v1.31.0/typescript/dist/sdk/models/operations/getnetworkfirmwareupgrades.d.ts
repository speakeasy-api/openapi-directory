import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkFirmwareUpgradesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceAvailableVersions extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the current version on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceCurrentVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the version the device upgraded from
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceLastUpgradeFromVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the version the device upgraded to
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceLastUpgradeToVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the last firmware upgrade on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceLastUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device upgraded from
     */
    fromVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceLastUpgradeFromVersion;
    /**
     * Timestamp of the last successful firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device upgraded to
     */
    toVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceLastUpgradeToVersion;
}
/**
 * Details of the version the device will upgrade to if it exists
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceNextUpgradeToVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the next firmware upgrade on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceNextUpgrade extends SpeakeasyBase {
    /**
     * Timestamp of the next scheduled firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device will upgrade to if it exists
     */
    toVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsAppliance extends SpeakeasyBase {
    /**
     * Firmware versions available for upgrade
     */
    availableVersions?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceAvailableVersions[];
    /**
     * Details of the current version on the device
     */
    currentVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceCurrentVersion;
    /**
     * Details of the last firmware upgrade on the device
     */
    lastUpgrade?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceLastUpgrade;
    /**
     * Details of the next firmware upgrade on the device
     */
    nextUpgrade?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCameraAvailableVersions extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the current version on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCameraCurrentVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the version the device upgraded from
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCameraLastUpgradeFromVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the version the device upgraded to
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCameraLastUpgradeToVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the last firmware upgrade on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCameraLastUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device upgraded from
     */
    fromVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCameraLastUpgradeFromVersion;
    /**
     * Timestamp of the last successful firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device upgraded to
     */
    toVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCameraLastUpgradeToVersion;
}
/**
 * Details of the version the device will upgrade to if it exists
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCameraNextUpgradeToVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the next firmware upgrade on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCameraNextUpgrade extends SpeakeasyBase {
    /**
     * Timestamp of the next scheduled firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device will upgrade to if it exists
     */
    toVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCameraNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCamera extends SpeakeasyBase {
    /**
     * Firmware versions available for upgrade
     */
    availableVersions?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCameraAvailableVersions[];
    /**
     * Details of the current version on the device
     */
    currentVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCameraCurrentVersion;
    /**
     * Details of the last firmware upgrade on the device
     */
    lastUpgrade?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCameraLastUpgrade;
    /**
     * Details of the next firmware upgrade on the device
     */
    nextUpgrade?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCameraNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayAvailableVersions extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the current version on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayCurrentVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the version the device upgraded from
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayLastUpgradeFromVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the version the device upgraded to
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayLastUpgradeToVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the last firmware upgrade on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayLastUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device upgraded from
     */
    fromVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayLastUpgradeFromVersion;
    /**
     * Timestamp of the last successful firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device upgraded to
     */
    toVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayLastUpgradeToVersion;
}
/**
 * Details of the version the device will upgrade to if it exists
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayNextUpgradeToVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the next firmware upgrade on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayNextUpgrade extends SpeakeasyBase {
    /**
     * Timestamp of the next scheduled firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device will upgrade to if it exists
     */
    toVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGateway extends SpeakeasyBase {
    /**
     * Firmware versions available for upgrade
     */
    availableVersions?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayAvailableVersions[];
    /**
     * Details of the current version on the device
     */
    currentVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayCurrentVersion;
    /**
     * Details of the last firmware upgrade on the device
     */
    lastUpgrade?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayLastUpgrade;
    /**
     * Details of the next firmware upgrade on the device
     */
    nextUpgrade?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensorAvailableVersions extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the current version on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensorCurrentVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the version the device upgraded from
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensorLastUpgradeFromVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the version the device upgraded to
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensorLastUpgradeToVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the last firmware upgrade on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensorLastUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device upgraded from
     */
    fromVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensorLastUpgradeFromVersion;
    /**
     * Timestamp of the last successful firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device upgraded to
     */
    toVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensorLastUpgradeToVersion;
}
/**
 * Details of the version the device will upgrade to if it exists
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensorNextUpgradeToVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the next firmware upgrade on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensorNextUpgrade extends SpeakeasyBase {
    /**
     * Timestamp of the next scheduled firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device will upgrade to if it exists
     */
    toVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensorNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensor extends SpeakeasyBase {
    /**
     * Firmware versions available for upgrade
     */
    availableVersions?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensorAvailableVersions[];
    /**
     * Details of the current version on the device
     */
    currentVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensorCurrentVersion;
    /**
     * Details of the last firmware upgrade on the device
     */
    lastUpgrade?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensorLastUpgrade;
    /**
     * Details of the next firmware upgrade on the device
     */
    nextUpgrade?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensorNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchAvailableVersions extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the current version on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchCurrentVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the version the device upgraded from
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchLastUpgradeFromVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the version the device upgraded to
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchLastUpgradeToVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the last firmware upgrade on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchLastUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device upgraded from
     */
    fromVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchLastUpgradeFromVersion;
    /**
     * Timestamp of the last successful firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device upgraded to
     */
    toVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchLastUpgradeToVersion;
}
/**
 * Details of the version the device will upgrade to if it exists
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchNextUpgradeToVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the next firmware upgrade on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchNextUpgrade extends SpeakeasyBase {
    /**
     * Timestamp of the next scheduled firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device will upgrade to if it exists
     */
    toVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitch extends SpeakeasyBase {
    /**
     * Firmware versions available for upgrade
     */
    availableVersions?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchAvailableVersions[];
    /**
     * Details of the current version on the device
     */
    currentVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchCurrentVersion;
    /**
     * Details of the last firmware upgrade on the device
     */
    lastUpgrade?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchLastUpgrade;
    /**
     * Details of the next firmware upgrade on the device
     */
    nextUpgrade?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessAvailableVersions extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the current version on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessCurrentVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the version the device upgraded from
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessLastUpgradeFromVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the version the device upgraded to
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessLastUpgradeToVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the last firmware upgrade on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessLastUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device upgraded from
     */
    fromVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessLastUpgradeFromVersion;
    /**
     * Timestamp of the last successful firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device upgraded to
     */
    toVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessLastUpgradeToVersion;
}
/**
 * Details of the version the device will upgrade to if it exists
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessNextUpgradeToVersion extends SpeakeasyBase {
    /**
     * Name of the firmware version
     */
    firmware?: string;
    /**
     * Firmware version identifier
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
 * Details of the next firmware upgrade on the device
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessNextUpgrade extends SpeakeasyBase {
    /**
     * Timestamp of the next scheduled firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device will upgrade to if it exists
     */
    toVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProductsWireless extends SpeakeasyBase {
    /**
     * Firmware versions available for upgrade
     */
    availableVersions?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessAvailableVersions[];
    /**
     * Details of the current version on the device
     */
    currentVersion?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessCurrentVersion;
    /**
     * Details of the last firmware upgrade on the device
     */
    lastUpgrade?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessLastUpgrade;
    /**
     * Details of the next firmware upgrade on the device
     */
    nextUpgrade?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
/**
 * The network devices to be updated
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONProducts extends SpeakeasyBase {
    /**
     * The network device to be updated
     */
    appliance?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsAppliance;
    /**
     * The network device to be updated
     */
    camera?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCamera;
    /**
     * The network device to be updated
     */
    cellularGateway?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGateway;
    /**
     * The network device to be updated
     */
    sensor?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSensor;
    /**
     * The network device to be updated
     */
    switch?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsSwitch;
    /**
     * The network device to be updated
     */
    wireless?: GetNetworkFirmwareUpgrades200ApplicationJSONProductsWireless;
}
/**
 * Day of the week
 */
export declare enum GetNetworkFirmwareUpgrades200ApplicationJSONUpgradeWindowDayOfWeekEnum {
    Fri = "fri",
    Friday = "friday",
    Mon = "mon",
    Monday = "monday",
    Sat = "sat",
    Saturday = "saturday",
    Sun = "sun",
    Sunday = "sunday",
    Thu = "thu",
    Thursday = "thursday",
    Tue = "tue",
    Tuesday = "tuesday",
    Wed = "wed",
    Wednesday = "wednesday"
}
/**
 * Hour of the day
 */
export declare enum GetNetworkFirmwareUpgrades200ApplicationJSONUpgradeWindowHourOfDayEnum {
    Zero00 = "0:00",
    Ten00 = "10:00",
    Eleven00 = "11:00",
    Twelve00 = "12:00",
    Thirteen00 = "13:00",
    Fourteen00 = "14:00",
    Fifteen00 = "15:00",
    Sixteen00 = "16:00",
    Seventeen00 = "17:00",
    Eighteen00 = "18:00",
    Nineteen00 = "19:00",
    One00 = "1:00",
    Twenty00 = "20:00",
    TwentyOne00 = "21:00",
    TwentyTwo00 = "22:00",
    TwentyThree00 = "23:00",
    Two00 = "2:00",
    Three00 = "3:00",
    Four00 = "4:00",
    Five00 = "5:00",
    Six00 = "6:00",
    Seven00 = "7:00",
    Eight00 = "8:00",
    Nine00 = "9:00"
}
/**
 * Upgrade window for devices in network
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSONUpgradeWindow extends SpeakeasyBase {
    /**
     * Day of the week
     */
    dayOfWeek?: GetNetworkFirmwareUpgrades200ApplicationJSONUpgradeWindowDayOfWeekEnum;
    /**
     * Hour of the day
     */
    hourOfDay?: GetNetworkFirmwareUpgrades200ApplicationJSONUpgradeWindowHourOfDayEnum;
}
/**
 * Successful operation
 */
export declare class GetNetworkFirmwareUpgrades200ApplicationJSON extends SpeakeasyBase {
    /**
     * The network devices to be updated
     */
    products?: GetNetworkFirmwareUpgrades200ApplicationJSONProducts;
    /**
     * The timezone for the network
     */
    timezone?: string;
    /**
     * Upgrade window for devices in network
     */
    upgradeWindow?: GetNetworkFirmwareUpgrades200ApplicationJSONUpgradeWindow;
}
export declare class GetNetworkFirmwareUpgradesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkFirmwareUpgrades200ApplicationJSONObject?: GetNetworkFirmwareUpgrades200ApplicationJSON;
}
