import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum BulkCallResponseMessageEnum {
    BulkCallsRequestExecuted = "BulkCalls Request Executed",
    MandatoryParametersMissing = "Mandatory Parameters Missing",
    ThisDelimiterIsNotAllowed = "This Delimiter is not allowed",
    BulkCallsShouldBeUsedForAtLeast2Numbers = "BulkCalls should be used for at least 2 numbers",
    ToParameterLengthDoesNotMatchGatewaysLength = "'To' parameter length does not match 'Gateways' Length",
    AnswerUrlIsNotValid = "AnswerUrl is not Valid",
    HangupUrlIsNotValid = "HangupUrl is not Valid",
    RingUrlIsNotValid = "RingUrl is not Valid",
    UnknownCoreUUID = "Unknown Core UUID"
}
/**
 * Response
 */
export declare class BulkCallResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: BulkCallResponseMessageEnum;
    /**
     * Unique identifiers of each Call request (UUIDv4)
     */
    requestUUID: string[];
    /**
     * API server which handled this request (an Eqivo extension)
     */
    restApiServer: string;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
