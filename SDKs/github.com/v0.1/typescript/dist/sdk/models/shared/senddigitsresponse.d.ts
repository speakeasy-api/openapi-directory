import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum SendDigitsResponseMessageEnum {
    SendDigitsExecuted = "SendDigits Executed",
    CallUUIDParameterMissing = "CallUUID Parameter Missing",
    DigitsParameterMissing = "Digits Parameter Missing",
    InvalidLegParameter = "Invalid Leg Parameter",
    SendDigitsFailedCallNotFound = "SendDigits Failed -- Call not found",
    SendDigitsFailed = "SendDigits Failed"
}
/**
 * Response
 */
export declare class SendDigitsResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: SendDigitsResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
