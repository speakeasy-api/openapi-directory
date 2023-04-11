import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoConditionResult } from "./enterprisecrmeventbusprotoconditionresult";
import { EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata } from "./enterprisecrmeventbusprotoeventexecutionsnapshoteventexecutionsnapshotmetadata";
import { EnterpriseCrmEventbusProtoTaskExecutionDetails } from "./enterprisecrmeventbusprototaskexecutiondetails";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
export declare class EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot extends SpeakeasyBase {
    /**
     * Indicates "right after which checkpoint task's execution" this snapshot is taken.
     */
    checkpointTaskNumber?: string;
    /**
     * All of the computed conditions that been calculated.
     */
    conditionResults?: EnterpriseCrmEventbusProtoConditionResult[];
    /**
     * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
     */
    diffParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    /**
     * Points to the event execution info this snapshot belongs to.
     */
    eventExecutionInfoId?: string;
    /**
     * Auto-generated. Used as primary key for EventExecutionSnapshots table.
     */
    eventExecutionSnapshotId?: string;
    eventExecutionSnapshotMetadata?: EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata;
    /**
     * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
     */
    eventParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    /**
     * Indicates when this snapshot is taken.
     */
    snapshotTime?: string;
    /**
     * All of the task execution details at the given point of time.
     */
    taskExecutionDetails?: EnterpriseCrmEventbusProtoTaskExecutionDetails[];
    /**
     * The task name associated with this snapshot. Could be empty.
     */
    taskName?: string;
}
