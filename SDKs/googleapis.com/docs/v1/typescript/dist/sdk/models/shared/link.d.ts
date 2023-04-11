import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to another portion of a document or an external URL resource.
 */
export declare class Link extends SpeakeasyBase {
    /**
     * The ID of a bookmark in this document.
     */
    bookmarkId?: string;
    /**
     * The ID of a heading in this document.
     */
    headingId?: string;
    /**
     * An external URL.
     */
    url?: string;
}
