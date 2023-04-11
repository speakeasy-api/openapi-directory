import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The state of the batch at this point in history.
 */
export declare enum StateHistoryStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * Historical state information.
 */
export declare class StateHistory extends SpeakeasyBase {
    /**
     * Output only. The state of the batch at this point in history.
     */
    state?: StateHistoryStateEnum;
    /**
     * Output only. Details about the state at this point in history.
     */
    stateMessage?: string;
    /**
     * Output only. The time when the batch entered the historical state.
     */
    stateStartTime?: string;
}
