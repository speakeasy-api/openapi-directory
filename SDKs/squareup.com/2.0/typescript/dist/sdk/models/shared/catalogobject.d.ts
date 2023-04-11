import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogCategory } from "./catalogcategory";
import { CatalogCustomAttributeDefinition } from "./catalogcustomattributedefinition";
import { CatalogCustomAttributeValue } from "./catalogcustomattributevalue";
import { CatalogDiscount } from "./catalogdiscount";
import { CatalogImage } from "./catalogimage";
import { CatalogItem } from "./catalogitem";
import { CatalogItemOption } from "./catalogitemoption";
import { CatalogItemOptionValue } from "./catalogitemoptionvalue";
import { CatalogItemVariation } from "./catalogitemvariation";
import { CatalogMeasurementUnit } from "./catalogmeasurementunit";
import { CatalogModifier } from "./catalogmodifier";
import { CatalogModifierList } from "./catalogmodifierlist";
import { CatalogPricingRule } from "./catalogpricingrule";
import { CatalogProductSet } from "./catalogproductset";
import { CatalogQuickAmountsSettings } from "./catalogquickamountssettings";
import { CatalogSubscriptionPlan } from "./catalogsubscriptionplan";
import { CatalogTax } from "./catalogtax";
import { CatalogTimePeriod } from "./catalogtimeperiod";
import { CatalogV1Id } from "./catalogv1id";
/**
 * The wrapper object for the Catalog entries of a given object type.
 *
 * @remarks
 *
 * The type of a particular `CatalogObject` is determined by the value of the
 * `type` attribute and only the corresponding data attribute can be set on the `CatalogObject` instance.
 * For example, the following list shows some instances of `CatalogObject` of a given `type` and
 * their corresponding data attribute that can be set:
 * - For a `CatalogObject` of the `ITEM` type, set the `item_data` attribute to yield the `CatalogItem` object.
 * - For a `CatalogObject` of the `ITEM_VARIATION` type, set the `item_variation_data` attribute to yield the `CatalogItemVariation` object.
 * - For a `CatalogObject` of the `MODIFIER` type, set the `modifier_data` attribute to yield the `CatalogModifier` object.
 * - For a `CatalogObject` of the `MODIFIER_LIST` type, set the `modifier_list_data` attribute to yield the `CatalogModifierList` object.
 * - For a `CatalogObject` of the `CATEGORY` type, set the `category_data` attribute to yield the `CatalogCategory` object.
 * - For a `CatalogObject` of the `DISCOUNT` type, set the `discount_data` attribute to yield the `CatalogDiscount` object.
 * - For a `CatalogObject` of the `TAX` type, set the `tax_data` attribute to yield the `CatalogTax` object.
 * - For a `CatalogObject` of the `IMAGE` type, set the `image_data` attribute to yield the `CatalogImageData`  object.
 * - For a `CatalogObject` of the `QUICK_AMOUNTS_SETTINGS` type, set the `quick_amounts_settings_data` attribute to yield the `CatalogQuickAmountsSettings` object.
 * - For a `CatalogObject` of the `PRICING_RULE` type, set the `pricing_rule_data` attribute to yield the `CatalogPricingRule` object.
 * - For a `CatalogObject` of the `TIME_PERIOD` type, set the `time_period_data` attribute to yield the `CatalogTimePeriod` object.
 * - For a `CatalogObject` of the `PRODUCT_SET` type, set the `product_set_data` attribute to yield the `CatalogProductSet`  object.
 * - For a `CatalogObject` of the `SUBSCRIPTION_PLAN` type, set the `subscription_plan_data` attribute to yield the `CatalogSubscriptionPlan` object.
 *
 *
 * For a more detailed discussion of the Catalog data model, please see the
 * [Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide.
 */
export declare class CatalogObject extends SpeakeasyBase {
    /**
     * A list of locations where the object is not present, even if `present_at_all_locations` is `true`.
     *
     * @remarks
     * This can include locations that are deactivated.
     */
    absentAtLocationIds?: string[];
    /**
     * The Connect v1 IDs for this object at each location where it is present, where they
     *
     * @remarks
     * differ from the object's Connect V2 ID. The field will only be present for objects that
     * have been created or modified by legacy APIs.
     */
    catalogV1Ids?: CatalogV1Id[];
    /**
     * A category to which a `CatalogItem` instance belongs.
     */
    categoryData?: CatalogCategory;
    /**
     * Contains information defining a custom attribute. Custom attributes are
     *
     * @remarks
     * intended to store additional information about a catalog object or to associate a
     * catalog object with an entity in another system. Do not use custom attributes
     * to store any sensitive information (personally identifiable information, card details, etc.).
     * [Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes)
     */
    customAttributeDefinitionData?: CatalogCustomAttributeDefinition;
    /**
     * A map (key-value pairs) of application-defined custom attribute values. The value of a key-value pair
     *
     * @remarks
     * is a [CatalogCustomAttributeValue](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogCustomAttributeValue) object. The key is the `key` attribute
     * value defined in the associated [CatalogCustomAttributeDefinition](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogCustomAttributeDefinition)
     * object defined by the application making the request.
     *
     * If the `CatalogCustomAttributeDefinition` object is
     * defined by another application, the `CatalogCustomAttributeDefinition`'s key attribute value is prefixed by
     * the defining application ID. For example, if the `CatalogCustomAttributeDefinition` has a `key` attribute of
     * `"cocoa_brand"` and the defining application ID is `"abcd1234"`, the key in the map is `"abcd1234:cocoa_brand"`
     * if the application making the request is different from the application defining the custom attribute definition.
     * Otherwise, the key used in the map is simply `"cocoa_brand"`.
     *
     * Application-defined custom attributes that are set at a global (location-independent) level.
     * Custom attribute values are intended to store additional information about a catalog object
     * or associations with an entity in another system. Do not use custom attributes
     * to store any sensitive information (personally identifiable information, card details, etc.).
     */
    customAttributeValues?: Record<string, CatalogCustomAttributeValue>;
    /**
     * A discount applicable to items.
     */
    discountData?: CatalogDiscount;
    /**
     * An identifier to reference this object in the catalog. When a new `CatalogObject`
     *
     * @remarks
     * is inserted, the client should set the id to a temporary identifier starting with
     * a "`#`" character. Other objects being inserted or updated within the same request
     * may use this identifier to refer to the new object.
     *
     * When the server receives the new object, it will supply a unique identifier that
     * replaces the temporary identifier for all future references.
     */
    id: string;
    /**
     * An image file to use in Square catalogs. It can be associated with catalog
     *
     * @remarks
     * items, item variations, and categories.
     */
    imageData?: CatalogImage;
    /**
     * Identifies the `CatalogImage` attached to this `CatalogObject`.
     */
    imageId?: string;
    /**
     * If `true`, the object has been deleted from the database. Must be `false` for new objects
     *
     * @remarks
     * being inserted. When deleted, the `updated_at` field will equal the deletion time.
     */
    isDeleted?: boolean;
    /**
     * A [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) instance of the `ITEM` type, also referred to as an item, in the catalog.
     */
    itemData?: CatalogItem;
    /**
     * A group of variations for a `CatalogItem`.
     */
    itemOptionData?: CatalogItemOption;
    /**
     * An enumerated value that can link a
     *
     * @remarks
     * `CatalogItemVariation` to an item option as one of
     * its item option values.
     */
    itemOptionValueData?: CatalogItemOptionValue;
    /**
     * An item variation (i.e., product) in the Catalog object model. Each item
     *
     * @remarks
     * may have a maximum of 250 item variations.
     */
    itemVariationData?: CatalogItemVariation;
    /**
     * Represents the unit used to measure a `CatalogItemVariation` and
     *
     * @remarks
     * specifies the precision for decimal quantities.
     */
    measurementUnitData?: CatalogMeasurementUnit;
    /**
     * A modifier applicable to items at the time of sale.
     */
    modifierData?: CatalogModifier;
    /**
     * A list of modifiers applicable to items at the time of sale.
     *
     * @remarks
     *
     * For example, a "Condiments" modifier list applicable to a "Hot Dog" item
     * may contain "Ketchup", "Mustard", and "Relish" modifiers.
     * Use the `selection_type` field to specify whether or not multiple selections from
     * the modifier list are allowed.
     */
    modifierListData?: CatalogModifierList;
    /**
     * If `true`, this object is present at all locations (including future locations), except where specified in
     *
     * @remarks
     * the `absent_at_location_ids` field. If `false`, this object is not present at any locations (including future locations),
     * except where specified in the `present_at_location_ids` field. If not specified, defaults to `true`.
     */
    presentAtAllLocations?: boolean;
    /**
     * A list of locations where the object is present, even if `present_at_all_locations` is `false`.
     *
     * @remarks
     * This can include locations that are deactivated.
     */
    presentAtLocationIds?: string[];
    /**
     * Defines how discounts are automatically applied to a set of items that match the pricing rule
     *
     * @remarks
     * during the active time period.
     */
    pricingRuleData?: CatalogPricingRule;
    /**
     * Represents a collection of catalog objects for the purpose of applying a
     *
     * @remarks
     * `PricingRule`. Including a catalog object will include all of its subtypes.
     * For example, including a category in a product set will include all of its
     * items and associated item variations in the product set. Including an item in
     * a product set will also include its item variations.
     */
    productSetData?: CatalogProductSet;
    /**
     * A parent Catalog Object model represents a set of Quick Amounts and the settings control the amounts.
     */
    quickAmountsSettingsData?: CatalogQuickAmountsSettings;
    /**
     * Describes a subscription plan. For more information, see
     *
     * @remarks
     * [Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan).
     */
    subscriptionPlanData?: CatalogSubscriptionPlan;
    /**
     * A tax applicable to an item.
     */
    taxData?: CatalogTax;
    /**
     * Represents a time period - either a single period or a repeating period.
     */
    timePeriodData?: CatalogTimePeriod;
    /**
     * The type of this object. Each object type has expected
     *
     * @remarks
     * properties expressed in a structured format within its corresponding `*_data` field below.
     */
    type: string;
    /**
     * Last modification [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) in RFC 3339 format, e.g., `"2016-08-15T23:59:33.123Z"`
     *
     * @remarks
     * would indicate the UTC time (denoted by `Z`) of August 15, 2016 at 23:59:33 and 123 milliseconds.
     */
    updatedAt?: string;
    /**
     * The version of the object. When updating an object, the version supplied
     *
     * @remarks
     * must match the version in the database, otherwise the write will be rejected as conflicting.
     */
    version?: number;
}
