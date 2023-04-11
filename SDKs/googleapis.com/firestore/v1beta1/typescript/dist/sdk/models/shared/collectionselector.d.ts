import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A selection of a collection, such as `messages as m1`.
 */
export declare class CollectionSelector extends SpeakeasyBase {
    /**
     * When false, selects only collections that are immediate children of the `parent` specified in the containing `RunQueryRequest`. When true, selects all descendant collections.
     */
    allDescendants?: boolean;
    /**
     * The collection ID. When set, selects only collections with this ID.
     */
    collectionId?: string;
}
