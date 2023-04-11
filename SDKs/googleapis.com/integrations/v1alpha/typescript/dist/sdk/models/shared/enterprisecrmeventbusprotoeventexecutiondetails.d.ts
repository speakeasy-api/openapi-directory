import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats } from "./enterprisecrmeventbusprotoeventexecutiondetailseventattemptstats";
import { EnterpriseCrmEventbusProtoEventExecutionSnapshot } from "./enterprisecrmeventbusprotoeventexecutionsnapshot";
export declare enum EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum {
    Unspecified = "UNSPECIFIED",
    OnHold = "ON_HOLD",
    InProcess = "IN_PROCESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Canceled = "CANCELED",
    RetryOnHold = "RETRY_ON_HOLD",
    Suspended = "SUSPENDED"
}
/**
 * Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10
 */
export declare class EnterpriseCrmEventbusProtoEventExecutionDetails extends SpeakeasyBase {
    eventAttemptStats?: EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats[];
    eventExecutionSnapshot?: EnterpriseCrmEventbusProtoEventExecutionSnapshot[];
    eventExecutionState?: EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum;
    /**
     * Indicates the number of times the execution has restarted from the beginning.
     */
    eventRetriesFromBeginningCount?: number;
    /**
     * The log file path (aka. cns address) for this event.
     */
    logFilePath?: string;
    /**
     * The network address (aka. bns address) that indicates where the event executor is running.
     */
    networkAddress?: string;
    /**
     * Next scheduled execution time in case the execution status was RETRY_ON_HOLD.
     */
    nextExecutionTime?: string;
    /**
     * Used internally and shouldn't be exposed to users. A counter for the cron job to record how many times this event is in in_process state but don't have a lock consecutively/
     */
    ryeLockUnheldCount?: number;
}
