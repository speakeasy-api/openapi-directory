import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * Operations list response.
 */
export declare class OperationsListResponse extends SpeakeasyBase {
    /**
     * List of operation resources.
     */
    items?: Operation[];
    /**
     * This is always `sql#operationsList`.
     */
    kind?: string;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
}
