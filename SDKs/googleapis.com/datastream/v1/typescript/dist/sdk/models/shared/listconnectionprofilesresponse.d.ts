import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionProfile } from "./connectionprofile";
/**
 * Response message for listing connection profiles.
 */
export declare class ListConnectionProfilesResponse extends SpeakeasyBase {
    /**
     * List of connection profiles.
     */
    connectionProfiles?: ConnectionProfile[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
