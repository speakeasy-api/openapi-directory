import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats extends SpeakeasyBase {
    /**
     * The end time of the task execution for current attempt.
     */
    endTime?: string;
    /**
     * The start time of the task execution for current attempt. This could be in the future if it's been scheduled.
     */
    startTime?: string;
}
