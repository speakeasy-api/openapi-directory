import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogCustomAttributeDefinitionNumberConfig } from "./catalogcustomattributedefinitionnumberconfig";
import { CatalogCustomAttributeDefinitionSelectionConfig } from "./catalogcustomattributedefinitionselectionconfig";
import { CatalogCustomAttributeDefinitionStringConfig } from "./catalogcustomattributedefinitionstringconfig";
import { SourceApplication } from "./sourceapplication";
/**
 * Contains information defining a custom attribute. Custom attributes are
 *
 * @remarks
 * intended to store additional information about a catalog object or to associate a
 * catalog object with an entity in another system. Do not use custom attributes
 * to store any sensitive information (personally identifiable information, card details, etc.).
 * [Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes)
 */
export declare class CatalogCustomAttributeDefinition extends SpeakeasyBase {
    /**
     * The set of Catalog Object Types that this Custom Attribute may be applied to.
     *
     * @remarks
     * Currently, only `ITEM` and `ITEM_VARIATION` are allowed. At least one type must be included.
     */
    allowedObjectTypes: string[];
    /**
     * The visibility of a custom attribute to applications other than the application
     *
     * @remarks
     * that created the attribute.
     */
    appVisibility?: string;
    /**
     * __Read-only.__ The number of custom attributes that reference this
     *
     * @remarks
     * custom attribute definition. Set by the server in response to a ListCatalog
     * request with `include_counts` set to `true`.  If the actual count is greater
     * than 100, `custom_attribute_usage_count` will be set to `100`.
     */
    customAttributeUsageCount?: number;
    /**
     * Seller-oriented description of the meaning of this Custom Attribute,
     *
     * @remarks
     * any constraints that the seller should observe, etc. May be displayed as a tooltip in Square UIs.
     */
    description?: string;
    /**
     * The name of the desired custom attribute key that can be used to access
     *
     * @remarks
     * the custom attribute value on catalog objects. Cannot be modified after the
     * custom attribute definition has been created.
     * Must be between 1 and 60 characters, and may only contain the characters `[a-zA-Z0-9_-]`.
     */
    key?: string;
    /**
     *  The name of this definition for API and seller-facing UI purposes.
     *
     * @remarks
     * The name must be unique within the (merchant, application) pair. Required.
     * May not be empty and may not exceed 255 characters. Can be modified after creation.
     */
    name: string;
    numberConfig?: CatalogCustomAttributeDefinitionNumberConfig;
    /**
     * Configuration associated with `SELECTION`-type custom attribute definitions.
     */
    selectionConfig?: CatalogCustomAttributeDefinitionSelectionConfig;
    /**
     * The visibility of a custom attribute in seller-facing UIs (including Square Point
     *
     * @remarks
     * of Sale applications and Square Dashboard). May be modified.
     */
    sellerVisibility?: string;
    /**
     * Provides information about the application used to generate a change.
     */
    sourceApplication?: SourceApplication;
    /**
     * Configuration associated with Custom Attribute Definitions of type `STRING`.
     */
    stringConfig?: CatalogCustomAttributeDefinitionStringConfig;
    /**
     * The type of this custom attribute. Cannot be modified after creation.
     *
     * @remarks
     * Required.
     */
    type: string;
}
