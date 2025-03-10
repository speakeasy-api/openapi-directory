/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The property's property type.
 */
export enum GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnum {
  PropertyTypeUnspecified = "PROPERTY_TYPE_UNSPECIFIED",
  PropertyTypeOrdinary = "PROPERTY_TYPE_ORDINARY",
  PropertyTypeSubproperty = "PROPERTY_TYPE_SUBPROPERTY",
  PropertyTypeRollup = "PROPERTY_TYPE_ROLLUP",
}

/**
 * A virtual resource representing metadata for a GA4 property.
 */
export class GoogleAnalyticsAdminV1betaPropertySummary extends SpeakeasyBase {
  /**
   * Display name for the property referred to in this property summary.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  /**
   * Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/200"
   */
  @SpeakeasyMetadata()
  @Expose({ name: "parent" })
  parent?: string;

  /**
   * Resource name of property referred to by this property summary Format: properties/{property_id} Example: "properties/1000"
   */
  @SpeakeasyMetadata()
  @Expose({ name: "property" })
  property?: string;

  /**
   * The property's property type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "propertyType" })
  propertyType?: GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnum;
}
