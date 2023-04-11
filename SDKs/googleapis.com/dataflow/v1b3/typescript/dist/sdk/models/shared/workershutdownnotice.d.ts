import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Shutdown notification from workers. This is to be sent by the shutdown script of the worker VM so that the backend knows that the VM is being shut down.
 */
export declare class WorkerShutdownNotice extends SpeakeasyBase {
    /**
     * The reason for the worker shutdown. Current possible values are: "UNKNOWN": shutdown reason is unknown. "PREEMPTION": shutdown reason is preemption. Other possible reasons may be added in the future.
     */
    reason?: string;
}
