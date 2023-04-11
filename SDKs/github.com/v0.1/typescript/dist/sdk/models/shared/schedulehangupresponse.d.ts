import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum ScheduleHangupResponseMessageEnum {
    ScheduleHangupExecuted = "ScheduleHangup Executed",
    CallUUIDParameterMustBePresent = "CallUUID Parameter must be present",
    TimeParameterMustBePresent = "Time Parameter must be present",
    TimeParameterMustBeGreaterThan0 = "Time Parameter must be > 0!",
    ScheduleHangupFailedCallNotFound = "ScheduleHangup Failed -- Call not found",
    ScheduleHangupFailed = "ScheduleHangup Failed"
}
/**
 * Response
 */
export declare class ScheduleHangupResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: ScheduleHangupResponseMessageEnum;
    /**
     * Unique identifier of the scheduled hangup request (UUIDv4)
     */
    schedHangupId: string;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
