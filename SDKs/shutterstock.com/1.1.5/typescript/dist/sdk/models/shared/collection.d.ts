import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionItem } from "./collectionitem";
/**
 * Metadata about a collection of assets
**/
export declare class Collection extends SpeakeasyBase {
    coverItem?: CollectionItem;
    createdTime?: Date;
    id: string;
    itemsUpdatedTime?: Date;
    name: string;
    shareCode?: string;
    shareUrl?: string;
    totalItemCount: number;
    updatedTime?: Date;
}
