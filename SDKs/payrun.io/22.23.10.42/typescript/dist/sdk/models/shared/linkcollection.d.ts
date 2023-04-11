import { SpeakeasyBase } from "../../../internal/utils";
export declare class LinkCollectionLinkCollectionLinkLink extends SpeakeasyBase {
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
 * The link collections' links
 */
export declare class LinkCollectionLinkCollectionLink extends SpeakeasyBase {
    link?: LinkCollectionLinkCollectionLinkLink[];
}
export declare class LinkCollectionLinkCollection extends SpeakeasyBase {
    /**
     * The link collections' links
     */
    links?: LinkCollectionLinkCollectionLink;
}
/**
 * The link collection object.
 */
export declare class LinkCollection extends SpeakeasyBase {
    linkCollection?: LinkCollectionLinkCollection;
}
