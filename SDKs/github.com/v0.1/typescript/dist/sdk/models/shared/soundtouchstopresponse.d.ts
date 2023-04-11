import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum SoundTouchStopResponseMessageEnum {
    SoundTouchStopExecuted = "SoundTouchStop Executed",
    CallUUIDParameterMissing = "CallUUID Parameter Missing",
    SoundTouchStopFailedCallNotFound = "SoundTouchStop Failed -- Call not found",
    SoundTouchStopFailed = "SoundTouchStop Failed"
}
/**
 * Response
 */
export declare class SoundTouchStopResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: SoundTouchStopResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
