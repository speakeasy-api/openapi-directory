import { SpeakeasyBase } from "../../../internal/utils";
/**
 * POST parameters
 */
export declare class ScheduleHangupParameters extends SpeakeasyBase {
    /**
     * Unique identifier of the call
     */
    callUUID: string;
    /**
     * Time (in seconds) after which the call in question will be hung up
     */
    time: number;
}
