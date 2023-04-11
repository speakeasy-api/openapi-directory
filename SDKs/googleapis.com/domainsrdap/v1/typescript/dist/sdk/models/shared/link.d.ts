import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Links object defined in [section 4.2 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.2).
 */
export declare class Link extends SpeakeasyBase {
    /**
     * Target URL of a link. Example: "http://example.com/previous".
     */
    href?: string;
    /**
     * Language code of a link. Example: "en".
     */
    hreflang?: string;
    /**
     * Media type of the link destination. Example: "screen".
     */
    media?: string;
    /**
     * Relation type of a link. Example: "previous".
     */
    rel?: string;
    /**
     * Title of this link. Example: "title".
     */
    title?: string;
    /**
     * Content type of the link. Example: "application/json".
     */
    type?: string;
    /**
     * URL giving context for the link. Example: "http://example.com/current".
     */
    value?: string;
}
