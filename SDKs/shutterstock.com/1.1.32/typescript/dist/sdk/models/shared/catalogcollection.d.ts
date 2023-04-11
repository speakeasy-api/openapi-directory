import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogCollectionItem } from "./catalogcollectionitem";
import { CatalogCollectionRoleAssignments } from "./catalogcollectionroleassignments";
export declare enum CatalogCollectionVisibilityEnum {
    Private = "private",
    Public = "public"
}
/**
 * Catalog collection
 */
export declare class CatalogCollection extends SpeakeasyBase {
    /**
     * Metadata about an item that is part of a collection
     */
    coverAsset?: CatalogCollectionItem;
    createdTime: Date;
    id: string;
    name: string;
    /**
     * List of role assignments for a catalog collection
     */
    roleAssignments: CatalogCollectionRoleAssignments;
    totalItemCount: number;
    updatedTime: Date;
    visibility: CatalogCollectionVisibilityEnum;
}
