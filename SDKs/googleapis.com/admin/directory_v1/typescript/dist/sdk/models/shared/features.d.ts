import { SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";
/**
 * Public API: Resources.features
 */
export declare class Features extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The Features in this page of results.
     */
    features?: Feature[];
    /**
     * Kind of resource this is.
     */
    kind?: string;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
}
