import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
/**
 * The response from listing versions.
 */
export declare class ListVersionsResponse extends SpeakeasyBase {
    /**
     * The token to retrieve the next page of versions, or empty if there are no more versions to return.
     */
    nextPageToken?: string;
    /**
     * The versions returned.
     */
    versions?: Version[];
}
