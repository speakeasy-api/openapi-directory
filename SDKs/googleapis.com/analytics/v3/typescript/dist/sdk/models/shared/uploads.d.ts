import { SpeakeasyBase } from "../../../internal/utils";
import { Upload } from "./upload";
/**
 * Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload.
 */
export declare class Uploads extends SpeakeasyBase {
    /**
     * A list of uploads.
     */
    items?: Upload[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number;
    /**
     * Collection type.
     */
    kind?: string;
    /**
     * Link to next page for this upload collection.
     */
    nextLink?: string;
    /**
     * Link to previous page for this upload collection.
     */
    previousLink?: string;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number;
    /**
     * The total number of results for the query, regardless of the number of resources in the result.
     */
    totalResults?: number;
}
