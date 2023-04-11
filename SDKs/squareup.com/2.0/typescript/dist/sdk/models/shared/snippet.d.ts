import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the snippet that is added to a Square Online site. The snippet code is injected into the `head` element of all pages on the site, except for checkout pages.
 */
export declare class Snippet extends SpeakeasyBase {
    /**
     * The snippet code, which can contain valid HTML, JavaScript, or both.
     */
    content: string;
    /**
     * The timestamp of when the snippet was initially added to the site, in RFC 3339 format.
     */
    createdAt?: string;
    /**
     * The Square-assigned ID for the snippet.
     */
    id?: string;
    /**
     * The ID of the site that contains the snippet.
     */
    siteId?: string;
    /**
     * The timestamp of when the snippet was last updated on the site, in RFC 3339 format.
     */
    updatedAt?: string;
}
