import { SpeakeasyBase } from "../../../internal/utils";
import { TransferRun } from "./transferrun";
/**
 * A response to schedule transfer runs for a time range.
 */
export declare class ScheduleTransferRunsResponse extends SpeakeasyBase {
    /**
     * The transfer runs that were scheduled.
     */
    runs?: TransferRun[];
}
