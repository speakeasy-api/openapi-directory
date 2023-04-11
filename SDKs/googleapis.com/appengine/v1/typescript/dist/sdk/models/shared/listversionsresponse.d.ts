import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
/**
 * Response message for Versions.ListVersions.
 */
export declare class ListVersionsResponse extends SpeakeasyBase {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
    /**
     * The versions belonging to the requested service.
     */
    versions?: Version[];
}
