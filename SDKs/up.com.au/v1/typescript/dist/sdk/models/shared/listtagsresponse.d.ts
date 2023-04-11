import { SpeakeasyBase } from "../../../internal/utils";
import { TagResource } from "./tagresource";
export declare class ListTagsResponseLinks extends SpeakeasyBase {
    /**
     * The link to the next page in the results. If this value is `null`
     *
     * @remarks
     * there is no next page.
     *
     */
    next: string;
    /**
     * The link to the previous page in the results. If this value is `null`
     *
     * @remarks
     * there is no previous page.
     *
     */
    prev: string;
}
/**
 * Successful response to get all tags. This returns a paginated list of
 *
 * @remarks
 * tags, which can be scrolled by following the `prev` and `next` links if
 * present.
 *
 */
export declare class ListTagsResponse extends SpeakeasyBase {
    /**
     * The list of tags returned in this response.
     *
     * @remarks
     *
     */
    data: TagResource[];
    links: ListTagsResponseLinks;
}
