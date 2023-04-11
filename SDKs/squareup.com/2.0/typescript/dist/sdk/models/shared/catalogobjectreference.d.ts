import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a Catalog object at a specific version. In general this is
 *
 * @remarks
 * used as an entry point into a graph of catalog objects, where the objects exist
 * at a specific version.
 */
export declare class CatalogObjectReference extends SpeakeasyBase {
    /**
     * The version of the object.
     */
    catalogVersion?: number;
    /**
     * The ID of the referenced object.
     */
    objectId?: string;
}
