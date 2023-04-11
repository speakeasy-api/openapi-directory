import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum GroupCallResponseMessageEnum {
    GroupCallRequestExecuted = "GroupCall Request Executed",
    MandatoryParametersMissing = "Mandatory Parameters Missing",
    ThisDelimiterIsNotAllowed = "This Delimiter is not allowed",
    GroupCallShouldBeUsedForAtLeast2Numbers = "GroupCall should be used for at least 2 numbers",
    ToParameterLengthDoesNotMatchGatewaysLength = "'To' parameter length does not match 'Gateways' Length",
    AnswerUrlIsNotValid = "AnswerUrl is not Valid",
    HangupUrlIsNotValid = "HangupUrl is not Valid",
    RingUrlIsNotValid = "RingUrl is not Valid",
    ConfirmSoundIsNotValid = "ConfirmSound is not Valid",
    UnknownCoreUUID = "Unknown Core UUID",
    GroupCallRequestFailed = "GroupCall Request Failed"
}
/**
 * Response
 */
export declare class GroupCallResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: GroupCallResponseMessageEnum;
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
