import { SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";
/**
 * Site List Response
 */
export declare class SitesListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#sitesListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Site collection.
     */
    sites?: Site[];
}
