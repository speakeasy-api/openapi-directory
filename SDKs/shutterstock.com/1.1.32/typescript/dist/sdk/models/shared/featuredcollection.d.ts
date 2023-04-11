import { SpeakeasyBase } from "../../../internal/utils";
import { FeaturedCollectionCoverItem } from "./featuredcollectioncoveritem";
/**
 * Metadata about a featured collection
 */
export declare class FeaturedCollection extends SpeakeasyBase {
    /**
     * Featured collection cover item metadata
     */
    coverItem?: FeaturedCollectionCoverItem;
    /**
     * Date that the collection was created
     */
    createdTime?: Date;
    /**
     * Featured collection cover item metadata
     */
    heroItem?: FeaturedCollectionCoverItem;
    /**
     * Collection ID
     */
    id: string;
    /**
     * Date that an item in the collection was last added or removed
     */
    itemsUpdatedTime?: Date;
    /**
     * Name of the collection
     */
    name: string;
    /**
     * Unique share url for the collection
     */
    shareUrl?: string;
    /**
     * Total number of items in the collection
     */
    totalItemCount: number;
    /**
     * Date that the collection was last modified
     */
    updatedTime?: Date;
}
