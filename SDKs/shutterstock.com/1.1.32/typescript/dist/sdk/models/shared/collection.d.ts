import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionItem } from "./collectionitem";
/**
 * Metadata about a collection of assets
 */
export declare class Collection extends SpeakeasyBase {
    /**
     * Metadata about an item that is part of a collection
     */
    coverItem?: CollectionItem;
    /**
     * When the collection was created
     */
    createdTime?: Date;
    /**
     * The collection ID
     */
    id: string;
    /**
     * The last time this collection's items were updated
     */
    itemsUpdatedTime?: Date;
    /**
     * The name of the collection
     */
    name: string;
    /**
     * A code that can be used to share the collection (optional)
     */
    shareCode?: string;
    /**
     * The browser URL that can be used to share the collection (optional)
     */
    shareUrl?: string;
    /**
     * The number of items in the collection
     */
    totalItemCount: number;
    /**
     * The last time the collection was update (other than changes to the items in it)
     */
    updatedTime?: Date;
}
