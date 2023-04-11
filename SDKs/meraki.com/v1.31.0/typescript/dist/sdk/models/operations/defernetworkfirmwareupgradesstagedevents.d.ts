import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeferNetworkFirmwareUpgradesStagedEventsRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * Details of the version the device will upgrade to
 */
export declare class DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgradeToVersion extends SpeakeasyBase {
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
export declare class DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device will upgrade to
     */
    toVersion?: DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgradeToVersion;
}
/**
 * The Switch network to be updated
 */
export declare class DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitch extends SpeakeasyBase {
    /**
     * Details of the next firmware upgrade
     */
    nextUpgrade?: DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgrade;
}
/**
 * The network devices to be updated
 */
export declare class DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProducts extends SpeakeasyBase {
    /**
     * The Switch network to be updated
     */
    switch?: DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitch;
}
/**
 * Reason for the rollback
 */
export declare enum DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum {
    BrokeOldFeatures = "broke old features",
    Other = "other",
    Performance = "performance",
    Stability = "stability",
    Testing = "testing",
    UnifyingNetworksVersions = "unifying networks versions"
}
export declare class DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasons extends SpeakeasyBase {
    /**
     * Reason for the rollback
     */
    category?: DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum;
    /**
     * Additional comment about the rollback
     */
    comment?: string;
}
/**
 * The staged upgrade group
 */
export declare class DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesGroup extends SpeakeasyBase {
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
export declare class DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesMilestones extends SpeakeasyBase {
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
export declare class DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStages extends SpeakeasyBase {
    /**
     * The staged upgrade group
     */
    group?: DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesGroup;
    /**
     * The Staged Upgrade Milestones for the stage
     */
    milestones?: DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesMilestones;
    /**
     * Current upgrade status of the group
     */
    status?: string;
}
/**
 * Successful operation
 */
export declare class DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSON extends SpeakeasyBase {
    /**
     * The network devices to be updated
     */
    products?: DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProducts;
    /**
     * Reasons for the rollback
     */
    reasons?: DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasons[];
    /**
     * The ordered stages in the network
     */
    stages?: DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStages[];
}
export declare class DeferNetworkFirmwareUpgradesStagedEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    deferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject?: DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSON;
}
