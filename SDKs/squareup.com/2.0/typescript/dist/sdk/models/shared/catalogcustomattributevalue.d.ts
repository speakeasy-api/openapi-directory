import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An instance of a custom attribute. Custom attributes can be defined and
 *
 * @remarks
 * added to `ITEM` and `ITEM_VARIATION` type catalog objects.
 * [Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes).
 */
export declare class CatalogCustomAttributeValue extends SpeakeasyBase {
    /**
     * A `true` or `false` value. Populated if `type` = `BOOLEAN`.
     */
    booleanValue?: boolean;
    /**
     * __Read-only.__ The id of the [CatalogCustomAttributeDefinition](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogCustomAttributeDefinition) this value belongs to.
     */
    customAttributeDefinitionId?: string;
    /**
     * __Read-only.__ A copy of key from the associated `CatalogCustomAttributeDefinition`.
     */
    key?: string;
    /**
     * The name of the custom attribute.
     */
    name?: string;
    /**
     * Populated if `type` = `NUMBER`. Contains a string
     *
     * @remarks
     * representation of a decimal number, using a `.` as the decimal separator.
     */
    numberValue?: string;
    /**
     * One or more choices from `allowed_selections`. Populated if `type` = `SELECTION`.
     */
    selectionUidValues?: string[];
    /**
     * The string value of the custom attribute.  Populated if `type` = `STRING`.
     */
    stringValue?: string;
    /**
     * __Read-only.__ A copy of type from the associated `CatalogCustomAttributeDefinition`.
     */
    type?: string;
}
