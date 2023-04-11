import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to schedule transfer runs for a time range.
 */
export declare class ScheduleTransferRunsRequest extends SpeakeasyBase {
    /**
     * Required. End time of the range of transfer runs. For example, `"2017-05-30T00:00:00+00:00"`.
     */
    endTime?: string;
    /**
     * Required. Start time of the range of transfer runs. For example, `"2017-05-25T00:00:00+00:00"`.
     */
    startTime?: string;
}
