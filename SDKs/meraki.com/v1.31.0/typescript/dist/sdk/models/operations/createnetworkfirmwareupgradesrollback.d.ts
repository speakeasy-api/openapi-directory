import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Product type to rollback (if the network is a combined network)
 */
export declare enum CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum {
    Appliance = "appliance",
    Camera = "camera",
    CellularGateway = "cellularGateway",
    Switch = "switch",
    Wireless = "wireless"
}
/**
 * Reason for the rollback
 */
export declare enum CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum {
    BrokeOldFeatures = "broke old features",
    Other = "other",
    Performance = "performance",
    Stability = "stability",
    Testing = "testing",
    UnifyingNetworksVersions = "unifying networks versions"
}
export declare class CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons extends SpeakeasyBase {
    /**
     * Reason for the rollback
     */
    category: CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum;
    /**
     * Additional comment about the rollback
     */
    comment: string;
}
/**
 * Version to downgrade to (if the network has firmware flexibility)
 */
export declare class CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion extends SpeakeasyBase {
    /**
     * The version ID
     */
    id?: string;
}
export declare class CreateNetworkFirmwareUpgradesRollbackRequestBody extends SpeakeasyBase {
    /**
     * Product type to rollback (if the network is a combined network)
     */
    product?: CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum;
    /**
     * Reasons for the rollback
     */
    reasons: CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons[];
    /**
     * Scheduled time for the rollback
     */
    time?: Date;
    /**
     * Version to downgrade to (if the network has firmware flexibility)
     */
    toVersion?: CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion;
}
export declare class CreateNetworkFirmwareUpgradesRollbackRequest extends SpeakeasyBase {
    requestBody: CreateNetworkFirmwareUpgradesRollbackRequestBody;
    networkId: string;
}
/**
 * Product type to rollback (if the network is a combined network)
 */
export declare enum CreateNetworkFirmwareUpgradesRollback200ApplicationJSONProductEnum {
    Appliance = "appliance",
    Camera = "camera",
    CellularGateway = "cellularGateway",
    Switch = "switch",
    Wireless = "wireless"
}
/**
 * Reason for the rollback
 */
export declare enum CreateNetworkFirmwareUpgradesRollback200ApplicationJSONReasonsCategoryEnum {
    BrokeOldFeatures = "broke old features",
    Other = "other",
    Performance = "performance",
    Stability = "stability",
    Testing = "testing",
    UnifyingNetworksVersions = "unifying networks versions"
}
export declare class CreateNetworkFirmwareUpgradesRollback200ApplicationJSONReasons extends SpeakeasyBase {
    /**
     * Reason for the rollback
     */
    category?: CreateNetworkFirmwareUpgradesRollback200ApplicationJSONReasonsCategoryEnum;
    /**
     * Additional comment about the rollback
     */
    comment?: string;
}
/**
 * Status of the rollback
 */
export declare enum CreateNetworkFirmwareUpgradesRollback200ApplicationJSONStatusEnum {
    Canceled = "canceled",
    Completed = "completed",
    InProgress = "in_progress",
    Pending = "pending"
}
/**
 * Version to downgrade to (if the network has firmware flexibility)
 */
export declare class CreateNetworkFirmwareUpgradesRollback200ApplicationJSONToVersion extends SpeakeasyBase {
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
 * Successful operation
 */
export declare class CreateNetworkFirmwareUpgradesRollback200ApplicationJSON extends SpeakeasyBase {
    /**
     * Product type to rollback (if the network is a combined network)
     */
    product?: CreateNetworkFirmwareUpgradesRollback200ApplicationJSONProductEnum;
    /**
     * Reasons for the rollback
     */
    reasons?: CreateNetworkFirmwareUpgradesRollback200ApplicationJSONReasons[];
    /**
     * Status of the rollback
     */
    status?: CreateNetworkFirmwareUpgradesRollback200ApplicationJSONStatusEnum;
    /**
     * Scheduled time for the rollback
     */
    time?: Date;
    /**
     * Version to downgrade to (if the network has firmware flexibility)
     */
    toVersion?: CreateNetworkFirmwareUpgradesRollback200ApplicationJSONToVersion;
    /**
     * Batch ID of the firmware rollback
     */
    upgradeBatchId?: string;
}
export declare class CreateNetworkFirmwareUpgradesRollbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkFirmwareUpgradesRollback200ApplicationJSONObject?: CreateNetworkFirmwareUpgradesRollback200ApplicationJSON;
}
