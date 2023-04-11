import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum ConferenceRecordStartResponseMessageEnum {
    ConferenceRecordStartExecuted = "Conference RecordStart Executed",
    ConferenceNameParameterMustBePresent = "ConferenceName Parameter must be present",
    FileFormatParameterMustBe = "FileFormat Parameter must be",
    ConferenceRecordStartFailed = "Conference RecordStart Failed",
    ConferenceRecordStartFailedConferenceNotFound = "Conference RecordStart Failed -- Conference not found"
}
/**
 * Response
 */
export declare class ConferenceRecordStartResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: ConferenceRecordStartResponseMessageEnum;
    /**
     * Directory path/URI where the recording file will be saved
     */
    recordFile: string;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
