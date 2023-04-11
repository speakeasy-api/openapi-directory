import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The property's property type.
 */
export declare enum GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnum {
    PropertyTypeUnspecified = "PROPERTY_TYPE_UNSPECIFIED",
    PropertyTypeOrdinary = "PROPERTY_TYPE_ORDINARY",
    PropertyTypeSubproperty = "PROPERTY_TYPE_SUBPROPERTY",
    PropertyTypeRollup = "PROPERTY_TYPE_ROLLUP"
}
/**
 * A virtual resource representing metadata for a GA4 property.
 */
export declare class GoogleAnalyticsAdminV1betaPropertySummary extends SpeakeasyBase {
    /**
     * Display name for the property referred to in this property summary.
     */
    displayName?: string;
    /**
     * Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/200"
     */
    parent?: string;
    /**
     * Resource name of property referred to by this property summary Format: properties/{property_id} Example: "properties/1000"
     */
    property?: string;
    /**
     * The property's property type.
     */
    propertyType?: GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnum;
}
