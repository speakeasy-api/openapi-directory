import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum CancelScheduledPlayResponseMessageEnum {
    ScheduledPlayCancelationExecuted = "Scheduled Play Cancelation Executed",
    SchedPlayIdParameterMustBePresent = "SchedPlayId Parameter must be present",
    ScheduledPlayCancelationFailedIDNotFound = "Scheduled Play Cancelation Failed -- ID not found",
    ScheduledPlayCancelationFailed = "Scheduled Play Cancelation Failed"
}
/**
 * Response
 */
export declare class CancelScheduledPlayResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: CancelScheduledPlayResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
