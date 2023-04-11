import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum ConferenceRecordStopResponseMessageEnum {
    ConferenceRecordStopExecuted = "Conference RecordStop Executed",
    ConferenceNameParameterMustBePresent = "ConferenceName Parameter must be present",
    RecordFileParameterMustBePresent = "RecordFile Parameter must be present",
    ConferenceRecordStopFailed = "Conference RecordStop Failed",
    ConferenceRecordStopFailedConferenceNotFound = "Conference RecordStop Failed -- Conference not found"
}
/**
 * Response
 */
export declare class ConferenceRecordStopResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: ConferenceRecordStopResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
