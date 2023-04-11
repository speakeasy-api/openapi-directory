import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum RecordStartResponseMessageEnum {
    RecordStartExecuted = "RecordStart Executed",
    CallUUIDParameterMustBePresent = "CallUUID Parameter must be present",
    FileFormatParameterMustBe = "FileFormat Parameter must be",
    RecordStartFailedInvalidTimeLimit = "RecordStart Failed: invalid TimeLimit",
    RecordStartFailedCallNotFound = "RecordStart Failed -- Call not found",
    RecordStartFailed = "RecordStart Failed"
}
/**
 * Response
 */
export declare class RecordStartResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: RecordStartResponseMessageEnum;
    /**
     * Directory path/URI where the recording file will be saved
     */
    recordFile: string;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
