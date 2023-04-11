import { SpeakeasyBase } from "../../../internal/utils";
import { ApiWarning } from "./apiwarning";
import { DatabaseInstance } from "./databaseinstance";
/**
 * Database instances list response.
 */
export declare class InstancesListResponse extends SpeakeasyBase {
    /**
     * List of database instance resources.
     */
    items?: DatabaseInstance[];
    /**
     * This is always `sql#instancesList`.
     */
    kind?: string;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
    /**
     * List of warnings that occurred while handling the request.
     */
    warnings?: ApiWarning[];
}
