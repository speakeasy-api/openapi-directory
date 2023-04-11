import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum CancelScheduledHangupResponseMessageEnum {
    ScheduledHangupCancelationExecuted = "Scheduled Hangup Cancelation Executed",
    SchedHangupIdParameterMustBePresent = "SchedHangupId Parameter must be present",
    ScheduledHangupCancelationFailedIDNotFound = "Scheduled Hangup Cancelation Failed -- ID not found",
    ScheduledHangupCancelationFailed = "Scheduled Hangup Cancelation Failed"
}
/**
 * Response
 */
export declare class CancelScheduledHangupResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: CancelScheduledHangupResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
