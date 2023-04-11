import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum CallResponseMessageEnum {
    CallRequestExecuted = "Call Request Executed",
    MandatoryParametersMissing = "Mandatory Parameters Missing",
    AnswerUrlIsNotValid = "AnswerUrl is not Valid",
    HangupUrlIsNotValid = "HangupUrl is not Valid",
    RingUrlIsNotValid = "RingUrl is not Valid",
    UnknownCoreUUID = "Unknown Core UUID"
}
/**
 * Response
 */
export declare class CallResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: CallResponseMessageEnum;
    /**
     * Unique identifier of the Call request (UUIDv4)
     */
    requestUUID: string;
    /**
     * API server which handled this request (an Eqivo extension)
     */
    restApiServer: string;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
