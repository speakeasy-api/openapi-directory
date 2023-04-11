import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
/**
 * Response message for the list available versions request.
 */
export declare class ListAvailableVersionsResponse extends SpeakeasyBase {
    /**
     * Represents a list of versions that are supported.
     */
    availableVersions?: Version[];
    /**
     * Token to retrieve the next page of results or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
