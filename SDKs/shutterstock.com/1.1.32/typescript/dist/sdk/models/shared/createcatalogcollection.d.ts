import { SpeakeasyBase } from "../../../internal/utils";
import { CreateCatalogCollectionItem } from "./createcatalogcollectionitem";
export declare enum CreateCatalogCollectionVisibilityEnum {
    Private = "private",
    Public = "public"
}
/**
 * Create a catalog collection and, optionally, add items.
 */
export declare class CreateCatalogCollection extends SpeakeasyBase {
    items?: CreateCatalogCollectionItem[];
    name: string;
    visibility?: CreateCatalogCollectionVisibilityEnum;
}
