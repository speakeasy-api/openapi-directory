import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum ConferencePlayResponseMessageEnum {
    ConferencePlayExecuted = "Conference Play Executed",
    ConferenceNameParameterMustBePresent = "ConferenceName Parameter must be present",
    FilePathParameterMustBePresent = "FilePath Parameter must be present",
    MemberIDParameterMustBePresent = "MemberID Parameter must be present",
    ConferencePlayFailedConferenceNotFound = "Conference Play Failed -- Conference not found",
    ConferencePlayFailed = "Conference Play Failed"
}
/**
 * Response
 */
export declare class ConferencePlayResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: ConferencePlayResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
