import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum ConferenceListResponseMessageEnum {
    ConferenceListExecuted = "Conference List Executed",
    ConferenceListFailedToParseResult = "Conference List Failed to parse result"
}
/**
 * Response
 */
export declare class ConferenceListResponse extends SpeakeasyBase {
    /**
     * List of established conferences
     */
    list: Record<string, any>;
    /**
     * Response message
     */
    message: ConferenceListResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
