import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum TransferCallResponseMessageEnum {
    TransferCallExecuted = "Transfer Call Executed",
    CallUUIDParameterMustBePresent = "CallUUID Parameter must be present",
    UrlParameterMustBePresent = "Url Parameter must be present",
    UrlIsNotValid = "Url is not Valid",
    TransferCallFailedCallNotFound = "Transfer Call Failed -- Call not found",
    TransferCallFailed = "Transfer Call Failed"
}
/**
 * Response
 */
export declare class TransferCallResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: TransferCallResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
