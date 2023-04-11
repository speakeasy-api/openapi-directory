import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Square API V1 identifier of an item, including the object ID and its associated location ID.
 */
export declare class CatalogV1Id extends SpeakeasyBase {
    /**
     * The ID for an object used in the Square API V1, if the object ID differs from the Square API V2 object ID.
     */
    catalogV1Id?: string;
    /**
     * The ID of the `Location` this Connect V1 ID is associated with.
     */
    locationId?: string;
}
