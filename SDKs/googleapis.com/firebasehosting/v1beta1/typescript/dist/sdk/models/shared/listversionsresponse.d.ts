import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
/**
 * Successful response
 */
export declare class ListVersionsResponse extends SpeakeasyBase {
    /**
     * The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListVersions`. Page tokens are short-lived and should not be stored.
     */
    nextPageToken?: string;
    /**
     * The list of versions, if any exist.
     */
    versions?: Version[];
}
