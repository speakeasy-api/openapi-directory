import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class BatchDeleteCatalogObjectsRequest extends SpeakeasyBase {
    /**
     * The IDs of the CatalogObjects to be deleted. When an object is deleted, other objects
     *
     * @remarks
     * in the graph that depend on that object will be deleted as well (for example, deleting a
     * CatalogItem will delete its CatalogItemVariation.
     */
    objectIds?: string[];
}
