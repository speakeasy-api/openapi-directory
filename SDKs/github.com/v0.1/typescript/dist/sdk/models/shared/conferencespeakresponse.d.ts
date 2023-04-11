import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum ConferenceSpeakResponseMessageEnum {
    ConferenceSpeakExecuted = "Conference Speak Executed",
    ConferenceNameParameterMustBePresent = "ConferenceName Parameter must be present",
    TextParameterMustBePresent = "Text Parameter must be present",
    MemberIDParameterMustBePresent = "MemberID Parameter must be present",
    ConferenceSpeakFailedConferenceNotFound = "Conference Speak Failed -- Conference not found",
    ConferenceSpeakFailed = "Conference Speak Failed"
}
/**
 * Response
 */
export declare class ConferenceSpeakResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: ConferenceSpeakResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
