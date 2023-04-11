import { SpeakeasyBase } from "../../../internal/utils";
import { Release } from "./release";
/**
 * Successful response
 */
export declare class ListReleasesResponse extends SpeakeasyBase {
    /**
     * The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListReleases`. Page tokens are short-lived and should not be stored.
     */
    nextPageToken?: string;
    /**
     * The list of hashes of files that still need to be uploaded, if any exist.
     */
    releases?: Release[];
}
