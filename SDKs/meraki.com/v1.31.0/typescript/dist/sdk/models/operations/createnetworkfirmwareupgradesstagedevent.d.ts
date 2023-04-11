import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The version to be updated to
 */
export declare class CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion extends SpeakeasyBase {
    /**
     * The version ID
     */
    id: string;
}
/**
 * The pending firmware upgrade if it exists
 */
export declare class CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade extends SpeakeasyBase {
    /**
     * The version to be updated to
     */
    toVersion?: CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion;
}
/**
 * The network device to be updated
 */
export declare class CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch extends SpeakeasyBase {
    /**
     * The pending firmware upgrade if it exists
     */
    nextUpgrade?: CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade;
}
/**
 * Contains information about the network to update
 */
export declare class CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts extends SpeakeasyBase {
    /**
     * The network device to be updated
     */
    switch?: CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch;
}
/**
 * The Staged Upgrade Group containing the name and ID
 */
export declare class CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup extends SpeakeasyBase {
    /**
     * ID of the Staged Upgrade Group
     */
    id: string;
}
/**
 * The Staged Upgrade Milestones for the specific stage
 */
export declare class CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones extends SpeakeasyBase {
    /**
     * The start time of the staged upgrade stage. (In ISO-8601 format, in the time zone of the network.)
     */
    scheduledFor: string;
}
export declare class CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages extends SpeakeasyBase {
    /**
     * The Staged Upgrade Group containing the name and ID
     */
    group?: CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup;
    /**
     * The Staged Upgrade Milestones for the specific stage
     */
    milestones?: CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones;
}
export declare class CreateNetworkFirmwareUpgradesStagedEventRequestBody extends SpeakeasyBase {
    /**
     * Contains information about the network to update
     */
    products?: CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts;
    /**
     * All firmware upgrade stages in the network with their start time.
     */
    stages: CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages[];
}
export declare class CreateNetworkFirmwareUpgradesStagedEventRequest extends SpeakeasyBase {
    requestBody: CreateNetworkFirmwareUpgradesStagedEventRequestBody;
    networkId: string;
}
/**
 * Details of the version the device will upgrade to
 */
export declare class CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONProductsSwitchNextUpgradeToVersion extends SpeakeasyBase {
    /**
     * Id of the Version being upgraded to
     */
    id?: string;
    /**
     * Firmware version short name
     */
    shortName?: string;
}
/**
 * Details of the next firmware upgrade
 */
export declare class CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONProductsSwitchNextUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device will upgrade to
     */
    toVersion?: CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONProductsSwitchNextUpgradeToVersion;
}
/**
 * The Switch network to be updated
 */
export declare class CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONProductsSwitch extends SpeakeasyBase {
    /**
     * Details of the next firmware upgrade
     */
    nextUpgrade?: CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONProductsSwitchNextUpgrade;
}
/**
 * The network devices to be updated
 */
export declare class CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONProducts extends SpeakeasyBase {
    /**
     * The Switch network to be updated
     */
    switch?: CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONProductsSwitch;
}
/**
 * Reason for the rollback
 */
export declare enum CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONReasonsCategoryEnum {
    BrokeOldFeatures = "broke old features",
    Other = "other",
    Performance = "performance",
    Stability = "stability",
    Testing = "testing",
    UnifyingNetworksVersions = "unifying networks versions"
}
export declare class CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONReasons extends SpeakeasyBase {
    /**
     * Reason for the rollback
     */
    category?: CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONReasonsCategoryEnum;
    /**
     * Additional comment about the rollback
     */
    comment?: string;
}
/**
 * The staged upgrade group
 */
export declare class CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONStagesGroup extends SpeakeasyBase {
    /**
     * Description of the Staged Upgrade Group
     */
    description?: string;
    /**
     * Id of the Staged Upgrade Group
     */
    id?: string;
    /**
     * Name of the Staged Upgrade Group
     */
    name?: string;
}
/**
 * The Staged Upgrade Milestones for the stage
 */
export declare class CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONStagesMilestones extends SpeakeasyBase {
    /**
     * Time that the group was canceled
     */
    canceledAt?: Date;
    /**
     * Finish time for the group
     */
    completedAt?: Date;
    /**
     * Scheduled start time for the group
     */
    scheduledFor?: Date;
    /**
     * Start time for the group
     */
    startedAt?: Date;
}
export declare class CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONStages extends SpeakeasyBase {
    /**
     * The staged upgrade group
     */
    group?: CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONStagesGroup;
    /**
     * The Staged Upgrade Milestones for the stage
     */
    milestones?: CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONStagesMilestones;
    /**
     * Current upgrade status of the group
     */
    status?: string;
}
/**
 * Successful operation
 */
export declare class CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSON extends SpeakeasyBase {
    /**
     * The network devices to be updated
     */
    products?: CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONProducts;
    /**
     * Reasons for the rollback
     */
    reasons?: CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONReasons[];
    /**
     * The ordered stages in the network
     */
    stages?: CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONStages[];
}
export declare class CreateNetworkFirmwareUpgradesStagedEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject?: CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSON;
}
