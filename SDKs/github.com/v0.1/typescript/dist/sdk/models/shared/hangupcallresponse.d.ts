import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum HangupCallResponseMessageEnum {
    HangupCallExecuted = "Hangup Call Executed",
    CallUUIDOrRequestUUIDParameterMustBePresent = "CallUUID or RequestUUID Parameter must be present",
    BothCallUUIDAndRequestUUIDParametersCannotBePresent = "Both CallUUID and RequestUUID Parameters cannot be present",
    HangupCallFailed = "Hangup Call Failed"
}
/**
 * Response
 */
export declare class HangupCallResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: HangupCallResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
