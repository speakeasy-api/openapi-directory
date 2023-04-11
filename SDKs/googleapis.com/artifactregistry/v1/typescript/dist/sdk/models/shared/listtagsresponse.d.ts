import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The response from listing tags.
 */
export declare class ListTagsResponse extends SpeakeasyBase {
    /**
     * The token to retrieve the next page of tags, or empty if there are no more tags to return.
     */
    nextPageToken?: string;
    /**
     * The tags returned.
     */
    tags?: Tag[];
}
