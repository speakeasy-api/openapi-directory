import { SpeakeasyBase } from "../../../internal/utils";
export declare class LinkLink extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
/**
 * The link object.
 */
export declare class Link extends SpeakeasyBase {
    link?: LinkLink;
}
