import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Destination node where the edge ends. It can only be a task config.
 */
export declare enum EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum {
    UnknownType = "UNKNOWN_TYPE",
    TaskConfig = "TASK_CONFIG",
    TriggerConfig = "TRIGGER_CONFIG"
}
/**
 * Represents a node identifier (type + id). Next highest id: 3
 */
export declare class EnterpriseCrmEventbusProtoNodeIdentifier extends SpeakeasyBase {
    /**
     * Configuration of the edge.
     */
    elementIdentifier?: string;
    /**
     * Destination node where the edge ends. It can only be a task config.
     */
    elementType?: EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum;
}
