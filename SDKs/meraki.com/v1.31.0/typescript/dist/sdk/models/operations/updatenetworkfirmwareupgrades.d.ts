import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The version to be updated to
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion extends SpeakeasyBase {
    /**
     * The version ID
     */
    id?: string;
}
/**
 * The pending firmware upgrade if it exists
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade extends SpeakeasyBase {
    /**
     * The time of the last successful upgrade
     */
    time?: string;
    /**
     * The version to be updated to
     */
    toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance extends SpeakeasyBase {
    /**
     * The pending firmware upgrade if it exists
     */
    nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
/**
 * The version to be updated to
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion extends SpeakeasyBase {
    /**
     * The version ID
     */
    id?: string;
}
/**
 * The pending firmware upgrade if it exists
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade extends SpeakeasyBase {
    /**
     * The time of the last successful upgrade
     */
    time?: string;
    /**
     * The version to be updated to
     */
    toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera extends SpeakeasyBase {
    /**
     * The pending firmware upgrade if it exists
     */
    nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
/**
 * The version to be updated to
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion extends SpeakeasyBase {
    /**
     * The version ID
     */
    id?: string;
}
/**
 * The pending firmware upgrade if it exists
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade extends SpeakeasyBase {
    /**
     * The time of the last successful upgrade
     */
    time?: string;
    /**
     * The version to be updated to
     */
    toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway extends SpeakeasyBase {
    /**
     * The pending firmware upgrade if it exists
     */
    nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
/**
 * The version to be updated to
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion extends SpeakeasyBase {
    /**
     * The version ID
     */
    id?: string;
}
/**
 * The pending firmware upgrade if it exists
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade extends SpeakeasyBase {
    /**
     * The time of the last successful upgrade
     */
    time?: string;
    /**
     * The version to be updated to
     */
    toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor extends SpeakeasyBase {
    /**
     * The pending firmware upgrade if it exists
     */
    nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
/**
 * The version to be updated to
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion extends SpeakeasyBase {
    /**
     * The version ID
     */
    id?: string;
}
/**
 * The pending firmware upgrade if it exists
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade extends SpeakeasyBase {
    /**
     * The time of the last successful upgrade
     */
    time?: string;
    /**
     * The version to be updated to
     */
    toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch extends SpeakeasyBase {
    /**
     * The pending firmware upgrade if it exists
     */
    nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
/**
 * The version to be updated to
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion extends SpeakeasyBase {
    /**
     * The version ID
     */
    id?: string;
}
/**
 * The pending firmware upgrade if it exists
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade extends SpeakeasyBase {
    /**
     * The time of the last successful upgrade
     */
    time?: string;
    /**
     * The version to be updated to
     */
    toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless extends SpeakeasyBase {
    /**
     * The pending firmware upgrade if it exists
     */
    nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
/**
 * Contains information about the network to update
 */
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProducts extends SpeakeasyBase {
    /**
     * The network device to be updated
     */
    appliance?: UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance;
    /**
     * The network device to be updated
     */
    camera?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera;
    /**
     * The network device to be updated
     */
    cellularGateway?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway;
    /**
     * The network device to be updated
     */
    sensor?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor;
    /**
     * The network device to be updated
     */
    switch?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch;
    /**
     * The network device to be updated
     */
    wireless?: UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless;
}
/**
 * Day of the week
 */
export declare enum UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum {
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
export declare enum UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum {
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
export declare class UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow extends SpeakeasyBase {
    /**
     * Day of the week
     */
    dayOfWeek?: UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum;
    /**
     * Hour of the day
     */
    hourOfDay?: UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum;
}
export declare class UpdateNetworkFirmwareUpgradesRequestBody extends SpeakeasyBase {
    /**
     * Contains information about the network to update
     */
    products?: UpdateNetworkFirmwareUpgradesRequestBodyProducts;
    /**
     * The timezone for the network
     */
    timezone?: string;
    /**
     * Upgrade window for devices in network
     */
    upgradeWindow?: UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow;
}
export declare class UpdateNetworkFirmwareUpgradesRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkFirmwareUpgradesRequestBody;
    networkId: string;
}
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceAvailableVersions extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceCurrentVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceLastUpgradeFromVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceLastUpgradeToVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceLastUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device upgraded from
     */
    fromVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceLastUpgradeFromVersion;
    /**
     * Timestamp of the last successful firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device upgraded to
     */
    toVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceLastUpgradeToVersion;
}
/**
 * Details of the version the device will upgrade to if it exists
 */
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceNextUpgradeToVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceNextUpgrade extends SpeakeasyBase {
    /**
     * Timestamp of the next scheduled firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device will upgrade to if it exists
     */
    toVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsAppliance extends SpeakeasyBase {
    /**
     * Firmware versions available for upgrade
     */
    availableVersions?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceAvailableVersions[];
    /**
     * Details of the current version on the device
     */
    currentVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceCurrentVersion;
    /**
     * Details of the last firmware upgrade on the device
     */
    lastUpgrade?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceLastUpgrade;
    /**
     * Details of the next firmware upgrade on the device
     */
    nextUpgrade?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsApplianceNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCameraAvailableVersions extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCameraCurrentVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCameraLastUpgradeFromVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCameraLastUpgradeToVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCameraLastUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device upgraded from
     */
    fromVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCameraLastUpgradeFromVersion;
    /**
     * Timestamp of the last successful firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device upgraded to
     */
    toVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCameraLastUpgradeToVersion;
}
/**
 * Details of the version the device will upgrade to if it exists
 */
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCameraNextUpgradeToVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCameraNextUpgrade extends SpeakeasyBase {
    /**
     * Timestamp of the next scheduled firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device will upgrade to if it exists
     */
    toVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCameraNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCamera extends SpeakeasyBase {
    /**
     * Firmware versions available for upgrade
     */
    availableVersions?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCameraAvailableVersions[];
    /**
     * Details of the current version on the device
     */
    currentVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCameraCurrentVersion;
    /**
     * Details of the last firmware upgrade on the device
     */
    lastUpgrade?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCameraLastUpgrade;
    /**
     * Details of the next firmware upgrade on the device
     */
    nextUpgrade?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCameraNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayAvailableVersions extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayCurrentVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayLastUpgradeFromVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayLastUpgradeToVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayLastUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device upgraded from
     */
    fromVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayLastUpgradeFromVersion;
    /**
     * Timestamp of the last successful firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device upgraded to
     */
    toVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayLastUpgradeToVersion;
}
/**
 * Details of the version the device will upgrade to if it exists
 */
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayNextUpgradeToVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayNextUpgrade extends SpeakeasyBase {
    /**
     * Timestamp of the next scheduled firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device will upgrade to if it exists
     */
    toVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGateway extends SpeakeasyBase {
    /**
     * Firmware versions available for upgrade
     */
    availableVersions?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayAvailableVersions[];
    /**
     * Details of the current version on the device
     */
    currentVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayCurrentVersion;
    /**
     * Details of the last firmware upgrade on the device
     */
    lastUpgrade?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayLastUpgrade;
    /**
     * Details of the next firmware upgrade on the device
     */
    nextUpgrade?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGatewayNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensorAvailableVersions extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensorCurrentVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensorLastUpgradeFromVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensorLastUpgradeToVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensorLastUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device upgraded from
     */
    fromVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensorLastUpgradeFromVersion;
    /**
     * Timestamp of the last successful firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device upgraded to
     */
    toVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensorLastUpgradeToVersion;
}
/**
 * Details of the version the device will upgrade to if it exists
 */
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensorNextUpgradeToVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensorNextUpgrade extends SpeakeasyBase {
    /**
     * Timestamp of the next scheduled firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device will upgrade to if it exists
     */
    toVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensorNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensor extends SpeakeasyBase {
    /**
     * Firmware versions available for upgrade
     */
    availableVersions?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensorAvailableVersions[];
    /**
     * Details of the current version on the device
     */
    currentVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensorCurrentVersion;
    /**
     * Details of the last firmware upgrade on the device
     */
    lastUpgrade?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensorLastUpgrade;
    /**
     * Details of the next firmware upgrade on the device
     */
    nextUpgrade?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensorNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchAvailableVersions extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchCurrentVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchLastUpgradeFromVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchLastUpgradeToVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchLastUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device upgraded from
     */
    fromVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchLastUpgradeFromVersion;
    /**
     * Timestamp of the last successful firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device upgraded to
     */
    toVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchLastUpgradeToVersion;
}
/**
 * Details of the version the device will upgrade to if it exists
 */
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchNextUpgradeToVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchNextUpgrade extends SpeakeasyBase {
    /**
     * Timestamp of the next scheduled firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device will upgrade to if it exists
     */
    toVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitch extends SpeakeasyBase {
    /**
     * Firmware versions available for upgrade
     */
    availableVersions?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchAvailableVersions[];
    /**
     * Details of the current version on the device
     */
    currentVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchCurrentVersion;
    /**
     * Details of the last firmware upgrade on the device
     */
    lastUpgrade?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchLastUpgrade;
    /**
     * Details of the next firmware upgrade on the device
     */
    nextUpgrade?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitchNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessAvailableVersions extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessCurrentVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessLastUpgradeFromVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessLastUpgradeToVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessLastUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device upgraded from
     */
    fromVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessLastUpgradeFromVersion;
    /**
     * Timestamp of the last successful firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device upgraded to
     */
    toVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessLastUpgradeToVersion;
}
/**
 * Details of the version the device will upgrade to if it exists
 */
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessNextUpgradeToVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessNextUpgrade extends SpeakeasyBase {
    /**
     * Timestamp of the next scheduled firmware upgrade
     */
    time?: Date;
    /**
     * Details of the version the device will upgrade to if it exists
     */
    toVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWireless extends SpeakeasyBase {
    /**
     * Firmware versions available for upgrade
     */
    availableVersions?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessAvailableVersions[];
    /**
     * Details of the current version on the device
     */
    currentVersion?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessCurrentVersion;
    /**
     * Details of the last firmware upgrade on the device
     */
    lastUpgrade?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessLastUpgrade;
    /**
     * Details of the next firmware upgrade on the device
     */
    nextUpgrade?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWirelessNextUpgrade;
    /**
     * Whether or not the network wants beta firmware
     */
    participateInNextBetaRelease?: boolean;
}
/**
 * The network devices to be updated
 */
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONProducts extends SpeakeasyBase {
    /**
     * The network device to be updated
     */
    appliance?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsAppliance;
    /**
     * The network device to be updated
     */
    camera?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCamera;
    /**
     * The network device to be updated
     */
    cellularGateway?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsCellularGateway;
    /**
     * The network device to be updated
     */
    sensor?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSensor;
    /**
     * The network device to be updated
     */
    switch?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsSwitch;
    /**
     * The network device to be updated
     */
    wireless?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProductsWireless;
}
/**
 * Day of the week
 */
export declare enum UpdateNetworkFirmwareUpgrades200ApplicationJSONUpgradeWindowDayOfWeekEnum {
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
export declare enum UpdateNetworkFirmwareUpgrades200ApplicationJSONUpgradeWindowHourOfDayEnum {
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
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSONUpgradeWindow extends SpeakeasyBase {
    /**
     * Day of the week
     */
    dayOfWeek?: UpdateNetworkFirmwareUpgrades200ApplicationJSONUpgradeWindowDayOfWeekEnum;
    /**
     * Hour of the day
     */
    hourOfDay?: UpdateNetworkFirmwareUpgrades200ApplicationJSONUpgradeWindowHourOfDayEnum;
}
/**
 * Successful operation
 */
export declare class UpdateNetworkFirmwareUpgrades200ApplicationJSON extends SpeakeasyBase {
    /**
     * The network devices to be updated
     */
    products?: UpdateNetworkFirmwareUpgrades200ApplicationJSONProducts;
    /**
     * The timezone for the network
     */
    timezone?: string;
    /**
     * Upgrade window for devices in network
     */
    upgradeWindow?: UpdateNetworkFirmwareUpgrades200ApplicationJSONUpgradeWindow;
}
export declare class UpdateNetworkFirmwareUpgradesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkFirmwareUpgrades200ApplicationJSONObject?: UpdateNetworkFirmwareUpgrades200ApplicationJSON;
}
