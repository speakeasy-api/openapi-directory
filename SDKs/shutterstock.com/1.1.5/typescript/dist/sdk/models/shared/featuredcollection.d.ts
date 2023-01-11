import { SpeakeasyBase } from "../../../internal/utils";
import { FeaturedCollectionCoverItem } from "./featuredcollectioncoveritem";
/**
 * Metadata about a featured collection
**/
export declare class FeaturedCollection extends SpeakeasyBase {
    coverItem?: FeaturedCollectionCoverItem;
    createdTime?: Date;
    heroItem?: FeaturedCollectionCoverItem;
    id: string;
    itemsUpdatedTime?: Date;
    name: string;
    shareUrl?: string;
    totalItemCount: number;
    updatedTime?: Date;
}
