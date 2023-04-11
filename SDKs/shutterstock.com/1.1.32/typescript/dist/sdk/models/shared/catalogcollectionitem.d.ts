import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CatalogCollectionItemAssetTypeEnum {
    Image = "image",
    Video = "video",
    Audio = "audio",
    EditorialImage = "editorial-image",
    EditorialVideo = "editorial-video"
}
export declare class CatalogCollectionItemAsset extends SpeakeasyBase {
    id?: string;
    name?: string;
    type: CatalogCollectionItemAssetTypeEnum;
}
/**
 * Metadata about an item that is part of a collection
 */
export declare class CatalogCollectionItem extends SpeakeasyBase {
    asset: CatalogCollectionItemAsset;
    /**
     * The collection IDs that this asset belongs to
     */
    collectionIds?: string[];
    createdTime: Date;
    id: string;
}
