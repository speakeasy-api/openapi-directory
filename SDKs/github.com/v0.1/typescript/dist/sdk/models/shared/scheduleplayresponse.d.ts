import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum SchedulePlayResponseMessageEnum {
    PlayExecuted = "Play Executed",
    CallUUIDParameterMissing = "CallUUID Parameter Missing",
    SoundsParameterMissing = "Sounds Parameter Missing",
    TimeParameterMissing = "Time Parameter Missing",
    TimeParameterMustBeGreaterThan0 = "Time Parameter must be > 0",
    LegsParameterIsInvalid = "Legs Parameter is Invalid",
    LengthParameterMustBeAPositiveInteger = "Length Parameter must be a positive integer",
    SoundsParameterIsInvalid = "Sounds Parameter is Invalid",
    PlayFailedCallNotFound = "Play Failed -- Call not found",
    PlayFailed = "Play Failed"
}
/**
 * Response
 */
export declare class SchedulePlayResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: SchedulePlayResponseMessageEnum;
    /**
     * Unique identifier of the scheduled playback request (UUIDv4)
     */
    schedPlayId: string;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
