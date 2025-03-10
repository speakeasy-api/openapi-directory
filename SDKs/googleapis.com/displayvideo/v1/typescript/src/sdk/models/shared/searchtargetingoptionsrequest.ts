/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BusinessChainSearchTerms } from "./businesschainsearchterms";
import { GeoRegionSearchTerms } from "./georegionsearchterms";
import { PoiSearchTerms } from "./poisearchterms";
import { Expose, Type } from "class-transformer";

/**
 * Request message for SearchTargetingOptions.
 */
export class SearchTargetingOptionsRequest extends SpeakeasyBase {
  /**
   * Required. The Advertiser this request is being made in the context of.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "advertiserId" })
  advertiserId?: string;

  /**
   * Search terms for Business Chain targeting options. At least one of the field should be populated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "businessChainSearchTerms" })
  @Type(() => BusinessChainSearchTerms)
  businessChainSearchTerms?: BusinessChainSearchTerms;

  /**
   * Search terms for geo region targeting options.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "geoRegionSearchTerms" })
  @Type(() => GeoRegionSearchTerms)
  geoRegionSearchTerms?: GeoRegionSearchTerms;

  /**
   * Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  /**
   * A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `SearchTargetingOptions` method. If not specified, the first page of results will be returned.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pageToken" })
  pageToken?: string;

  /**
   * Search terms for POI targeting options.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "poiSearchTerms" })
  @Type(() => PoiSearchTerms)
  poiSearchTerms?: PoiSearchTerms;
}
