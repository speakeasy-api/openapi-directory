import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Reason for the rollback
 */
export declare enum RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum {
    BrokeOldFeatures = "broke old features",
    Other = "other",
    Performance = "performance",
    Stability = "stability",
    Testing = "testing",
    UnifyingNetworksVersions = "unifying networks versions"
}
export declare class RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons extends SpeakeasyBase {
    /**
     * Reason for the rollback
     */
    category: RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum;
    /**
     * Additional comment about the rollback
     */
    comment: string;
}
/**
 * The Staged Upgrade Group containing the name and ID
 */
export declare class RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup extends SpeakeasyBase {
    /**
     * ID of the Staged Upgrade Group
     */
    id: string;
}
/**
 * The Staged Upgrade Milestones for the specific stage
 */
export declare class RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones extends SpeakeasyBase {
    /**
     * The start time of the staged upgrade stage. (In ISO-8601 format, in the time zone of the network.)
     */
    scheduledFor: string;
}
export declare class RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages extends SpeakeasyBase {
    /**
     * The Staged Upgrade Group containing the name and ID
     */
    group?: RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup;
    /**
     * The Staged Upgrade Milestones for the specific stage
     */
    milestones?: RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones;
}
export declare class RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody extends SpeakeasyBase {
    /**
     * The reason for rolling back the staged upgrade
     */
    reasons?: RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons[];
    /**
     * All completed or in-progress stages in the network with their new start times. All pending stages will be canceled
     */
    stages: RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages[];
}
export declare class RollbacksNetworkFirmwareUpgradesStagedEventsRequest extends SpeakeasyBase {
    requestBody: RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody;
    networkId: string;
}
/**
 * Details of the version the device will upgrade to
 */
export declare class RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgradeToVersion extends SpeakeasyBase {
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
export declare class RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device will upgrade to
     */
    toVersion?: RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgradeToVersion;
}
/**
 * The Switch network to be updated
 */
export declare class RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitch extends SpeakeasyBase {
    /**
     * Details of the next firmware upgrade
     */
    nextUpgrade?: RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgrade;
}
/**
 * The network devices to be updated
 */
export declare class RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProducts extends SpeakeasyBase {
    /**
     * The Switch network to be updated
     */
    switch?: RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitch;
}
/**
 * Reason for the rollback
 */
export declare enum RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum {
    BrokeOldFeatures = "broke old features",
    Other = "other",
    Performance = "performance",
    Stability = "stability",
    Testing = "testing",
    UnifyingNetworksVersions = "unifying networks versions"
}
export declare class RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasons extends SpeakeasyBase {
    /**
     * Reason for the rollback
     */
    category?: RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum;
    /**
     * Additional comment about the rollback
     */
    comment?: string;
}
/**
 * The staged upgrade group
 */
export declare class RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesGroup extends SpeakeasyBase {
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
export declare class RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesMilestones extends SpeakeasyBase {
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
export declare class RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStages extends SpeakeasyBase {
    /**
     * The staged upgrade group
     */
    group?: RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesGroup;
    /**
     * The Staged Upgrade Milestones for the stage
     */
    milestones?: RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesMilestones;
    /**
     * Current upgrade status of the group
     */
    status?: string;
}
/**
 * Successful operation
 */
export declare class RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSON extends SpeakeasyBase {
    /**
     * The network devices to be updated
     */
    products?: RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProducts;
    /**
     * Reasons for the rollback
     */
    reasons?: RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasons[];
    /**
     * The ordered stages in the network
     */
    stages?: RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStages[];
}
export declare class RollbacksNetworkFirmwareUpgradesStagedEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    rollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject?: RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSON;
}
