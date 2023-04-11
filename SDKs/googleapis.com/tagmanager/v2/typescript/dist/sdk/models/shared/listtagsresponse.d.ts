import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * List Tags Response.
 */
export declare class ListTagsResponse extends SpeakeasyBase {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
    /**
     * All GTM Tags of a GTM Container.
     */
    tag?: Tag[];
}
