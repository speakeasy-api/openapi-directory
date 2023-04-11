import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoConditionResult } from "./enterprisecrmeventbusprotoconditionresult";
import { EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata } from "./enterprisecrmeventbusprotoeventexecutionsnapshoteventexecutionsnapshotmetadata";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";
import { EnterpriseCrmEventbusProtoTaskExecutionDetails } from "./enterprisecrmeventbusprototaskexecutiondetails";
/**
 * Contains the snapshot of the event execution for a given checkpoint. Next available id: 13
 */
export declare class EnterpriseCrmEventbusProtoEventExecutionSnapshot extends SpeakeasyBase {
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
    diffParams?: EnterpriseCrmEventbusProtoEventParameters;
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
    eventParams?: EnterpriseCrmEventbusProtoEventParameters;
    /**
     * indicate whether snapshot exceeded maximum size before clean up
     */
    exceedMaxSize?: boolean;
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
