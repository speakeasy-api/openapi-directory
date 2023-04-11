import { SpeakeasyBase } from "../../../internal/utils";
import { Building } from "./building";
/**
 * Public API: Resources.buildings
 */
export declare class Buildings extends SpeakeasyBase {
    /**
     * The Buildings in this page of results.
     */
    buildings?: Building[];
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Kind of resource this is.
     */
    kind?: string;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
}
