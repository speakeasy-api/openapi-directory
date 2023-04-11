import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkFirmwareUpgradesStagedEventsRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * Details of the version the device will upgrade to
 */
export declare class GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgradeToVersion extends SpeakeasyBase {
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
export declare class GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device will upgrade to
     */
    toVersion?: GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgradeToVersion;
}
/**
 * The Switch network to be updated
 */
export declare class GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitch extends SpeakeasyBase {
    /**
     * Details of the next firmware upgrade
     */
    nextUpgrade?: GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgrade;
}
/**
 * The network devices to be updated
 */
export declare class GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProducts extends SpeakeasyBase {
    /**
     * The Switch network to be updated
     */
    switch?: GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitch;
}
/**
 * Reason for the rollback
 */
export declare enum GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum {
    BrokeOldFeatures = "broke old features",
    Other = "other",
    Performance = "performance",
    Stability = "stability",
    Testing = "testing",
    UnifyingNetworksVersions = "unifying networks versions"
}
export declare class GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasons extends SpeakeasyBase {
    /**
     * Reason for the rollback
     */
    category?: GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum;
    /**
     * Additional comment about the rollback
     */
    comment?: string;
}
/**
 * The staged upgrade group
 */
export declare class GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesGroup extends SpeakeasyBase {
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
export declare class GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesMilestones extends SpeakeasyBase {
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
export declare class GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStages extends SpeakeasyBase {
    /**
     * The staged upgrade group
     */
    group?: GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesGroup;
    /**
     * The Staged Upgrade Milestones for the stage
     */
    milestones?: GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesMilestones;
    /**
     * Current upgrade status of the group
     */
    status?: string;
}
/**
 * Successful operation
 */
export declare class GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSON extends SpeakeasyBase {
    /**
     * The network devices to be updated
     */
    products?: GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProducts;
    /**
     * Reasons for the rollback
     */
    reasons?: GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasons[];
    /**
     * The ordered stages in the network
     */
    stages?: GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStages[];
}
export declare class GetNetworkFirmwareUpgradesStagedEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject?: GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSON;
}
