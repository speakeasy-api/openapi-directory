/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An instance of a custom attribute. Custom attributes can be defined and
 *
 * @remarks
 * added to `ITEM` and `ITEM_VARIATION` type catalog objects.
 * [Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes).
 */
export class CatalogCustomAttributeValue extends SpeakeasyBase {
  /**
   * A `true` or `false` value. Populated if `type` = `BOOLEAN`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "boolean_value" })
  booleanValue?: boolean;

  /**
   * __Read-only.__ The id of the [CatalogCustomAttributeDefinition](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogCustomAttributeDefinition) this value belongs to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "custom_attribute_definition_id" })
  customAttributeDefinitionId?: string;

  /**
   * __Read-only.__ A copy of key from the associated `CatalogCustomAttributeDefinition`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  /**
   * The name of the custom attribute.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Populated if `type` = `NUMBER`. Contains a string
   *
   * @remarks
   * representation of a decimal number, using a `.` as the decimal separator.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "number_value" })
  numberValue?: string;

  /**
   * One or more choices from `allowed_selections`. Populated if `type` = `SELECTION`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "selection_uid_values" })
  selectionUidValues?: string[];

  /**
   * The string value of the custom attribute.  Populated if `type` = `STRING`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "string_value" })
  stringValue?: string;

  /**
   * __Read-only.__ A copy of type from the associated `CatalogCustomAttributeDefinition`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}
