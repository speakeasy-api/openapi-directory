import { SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";
/**
 * Response definition for the sites list rpc.
 */
export declare class ListSitesResponse extends SpeakeasyBase {
    /**
     * Continuation token used to page through sites. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string;
    /**
     * The sites returned in this list response.
     */
    sites?: Site[];
}
