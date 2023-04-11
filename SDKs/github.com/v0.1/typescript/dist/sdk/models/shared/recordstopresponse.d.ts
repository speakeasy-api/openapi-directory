import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum RecordStopResponseMessageEnum {
    RecordStopExecuted = "RecordStop Executed",
    CallUUIDParameterMustBePresent = "CallUUID Parameter must be present",
    RecordFileParameterMustBePresent = "RecordFile Parameter must be present",
    RecordStopFailedCallNotFound = "RecordStop Failed -- Call not found",
    RecordStopFailed = "RecordStop Failed"
}
/**
 * Response
 */
export declare class RecordStopResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: RecordStopResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
