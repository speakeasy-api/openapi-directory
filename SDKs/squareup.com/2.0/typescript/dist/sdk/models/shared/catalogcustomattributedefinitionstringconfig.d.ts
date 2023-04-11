import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration associated with Custom Attribute Definitions of type `STRING`.
 */
export declare class CatalogCustomAttributeDefinitionStringConfig extends SpeakeasyBase {
    /**
     * If true, each Custom Attribute instance associated with this Custom Attribute
     *
     * @remarks
     * Definition must have a unique value within the seller's catalog. For
     * example, this may be used for a value like a SKU that should not be
     * duplicated within a seller's catalog. May not be modified after the
     * definition has been created.
     */
    enforceUniqueness?: boolean;
}
