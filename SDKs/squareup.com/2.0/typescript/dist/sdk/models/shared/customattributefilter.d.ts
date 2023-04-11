import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
/**
 * Supported custom attribute query expressions for calling the
 *
 * @remarks
 * [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items)
 * endpoint to search for items or item variations.
 */
export declare class CustomAttributeFilter extends SpeakeasyBase {
    /**
     * A query expression to filter items or item variations by matching their custom attributes'
     *
     * @remarks
     * `boolean_value` property values
     * against the specified Boolean expression.
     */
    boolFilter?: boolean;
    /**
     * A query expression to filter items or item variations by matching their custom attributes'
     *
     * @remarks
     * `custom_attribute_definition_id`
     * property value against the the specified id.
     */
    customAttributeDefinitionId?: string;
    /**
     * A query expression to filter items or item variations by matching their custom attributes'
     *
     * @remarks
     * `key` property value against
     * the specified key.
     */
    key?: string;
    /**
     * The range of a number value between the specified lower and upper bounds.
     */
    numberFilter?: Range;
    /**
     * A query expression to filter items or item variations by matching  their custom attributes'
     *
     * @remarks
     * `selection_uid_values`
     * values against the specified selection uids.
     */
    selectionUidsFilter?: string[];
    /**
     * A query expression to filter items or item variations by matching their custom attributes'
     *
     * @remarks
     * `string_value`  property value
     * against the specified text.
     */
    stringFilter?: string;
}
