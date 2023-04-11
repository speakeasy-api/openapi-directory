import { SpeakeasyBase } from "../../../internal/utils";
import { Page } from "./page";
/**
 * Successful response
 */
export declare class PageList extends SpeakeasyBase {
    /**
     * Etag of the response.
     */
    etag?: string;
    /**
     * The list of Pages for a Blog.
     */
    items?: Page[];
    /**
     * The kind of this entity. Always blogger#pageList.
     */
    kind?: string;
    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string;
}
