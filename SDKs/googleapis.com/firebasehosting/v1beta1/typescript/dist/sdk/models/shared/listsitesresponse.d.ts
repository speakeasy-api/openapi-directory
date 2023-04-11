import { SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";
/**
 * Successful response
 */
export declare class ListSitesResponse extends SpeakeasyBase {
    /**
     * The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListSites`. Page tokens are short-lived and should not be stored.
     */
    nextPageToken?: string;
    /**
     * A list of Site objects associated with the specified Firebase project.
     */
    sites?: Site[];
}
