import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateCatalogCollectionCoverAsset extends SpeakeasyBase {
    id: string;
}
export declare enum UpdateCatalogCollectionVisibilityEnum {
    Private = "private",
    Public = "public"
}
/**
 * Collections Metadata to update
 */
export declare class UpdateCatalogCollection extends SpeakeasyBase {
    coverAsset?: UpdateCatalogCollectionCoverAsset;
    name?: string;
    visibility?: UpdateCatalogCollectionVisibilityEnum;
}
