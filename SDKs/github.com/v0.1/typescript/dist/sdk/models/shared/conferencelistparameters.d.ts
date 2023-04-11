import { SpeakeasyBase } from "../../../internal/utils";
/**
 * POST parameters
 */
export declare class ConferenceListParameters extends SpeakeasyBase {
    /**
     * Restricts listed calls to the provided values (comma separated call UUID list)
     */
    callUUIDFilter?: string;
    /**
     * Restricts listed members to deaf ones
     */
    deafFilter?: boolean;
    /**
     * Restricts listed members to the provided values (comma separated member ID list)
     */
    memberFilter?: string;
    /**
     * Restricts listed members to muted ones
     */
    mutedFilter?: boolean;
}
