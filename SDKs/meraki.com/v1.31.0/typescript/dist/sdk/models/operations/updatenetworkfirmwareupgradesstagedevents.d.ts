import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The Staged Upgrade Group containing the name and ID
 */
export declare class UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup extends SpeakeasyBase {
    /**
     * ID of the Staged Upgrade Group
     */
    id: string;
}
/**
 * The Staged Upgrade Milestones for the specific stage
 */
export declare class UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones extends SpeakeasyBase {
    /**
     * The start time of the staged upgrade stage. (In ISO-8601 format, in the time zone of the network.)
     */
    scheduledFor: string;
}
export declare class UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages extends SpeakeasyBase {
    /**
     * The Staged Upgrade Group containing the name and ID
     */
    group?: UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup;
    /**
     * The Staged Upgrade Milestones for the specific stage
     */
    milestones?: UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones;
}
export declare class UpdateNetworkFirmwareUpgradesStagedEventsRequestBody extends SpeakeasyBase {
    /**
     * All firmware upgrade stages in the network with their start time.
     */
    stages: UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages[];
}
export declare class UpdateNetworkFirmwareUpgradesStagedEventsRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkFirmwareUpgradesStagedEventsRequestBody;
    networkId: string;
}
/**
 * Details of the version the device will upgrade to
 */
export declare class UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgradeToVersion extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgrade extends SpeakeasyBase {
    /**
     * Details of the version the device will upgrade to
     */
    toVersion?: UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgradeToVersion;
}
/**
 * The Switch network to be updated
 */
export declare class UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitch extends SpeakeasyBase {
    /**
     * Details of the next firmware upgrade
     */
    nextUpgrade?: UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgrade;
}
/**
 * The network devices to be updated
 */
export declare class UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProducts extends SpeakeasyBase {
    /**
     * The Switch network to be updated
     */
    switch?: UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitch;
}
/**
 * Reason for the rollback
 */
export declare enum UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum {
    BrokeOldFeatures = "broke old features",
    Other = "other",
    Performance = "performance",
    Stability = "stability",
    Testing = "testing",
    UnifyingNetworksVersions = "unifying networks versions"
}
export declare class UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasons extends SpeakeasyBase {
    /**
     * Reason for the rollback
     */
    category?: UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum;
    /**
     * Additional comment about the rollback
     */
    comment?: string;
}
/**
 * The staged upgrade group
 */
export declare class UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesGroup extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesMilestones extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStages extends SpeakeasyBase {
    /**
     * The staged upgrade group
     */
    group?: UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesGroup;
    /**
     * The Staged Upgrade Milestones for the stage
     */
    milestones?: UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesMilestones;
    /**
     * Current upgrade status of the group
     */
    status?: string;
}
/**
 * Successful operation
 */
export declare class UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSON extends SpeakeasyBase {
    /**
     * The network devices to be updated
     */
    products?: UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProducts;
    /**
     * Reasons for the rollback
     */
    reasons?: UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasons[];
    /**
     * The ordered stages in the network
     */
    stages?: UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStages[];
}
export declare class UpdateNetworkFirmwareUpgradesStagedEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject?: UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSON;
}
