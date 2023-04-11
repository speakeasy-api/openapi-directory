import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata extends SpeakeasyBase {
    /**
     * the event attempt number this snapshot belongs to.
     */
    eventAttemptNum?: number;
    /**
     * the task attempt number this snapshot belongs to. Could be empty.
     */
    taskAttemptNum?: number;
    /**
     * the task name associated with this snapshot. Could be empty.
     */
    taskName?: string;
    /**
     * The task number associated with this snapshot. Could be empty.
     */
    taskNumber?: string;
}
