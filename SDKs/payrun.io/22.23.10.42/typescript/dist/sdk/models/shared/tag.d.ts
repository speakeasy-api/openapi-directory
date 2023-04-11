import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The tags' tagged item
 */
export declare class TagTagTaggedItem extends SpeakeasyBase {
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
export declare class TagTag extends SpeakeasyBase {
    /**
     * The tags' created
     */
    created?: Date;
    /**
     * The tags' tagged item
     */
    taggedItem?: TagTagTaggedItem;
    /**
     * The tags' text
     */
    text?: string;
}
/**
 * The tag object.
 */
export declare class Tag extends SpeakeasyBase {
    tag?: TagTag;
}
