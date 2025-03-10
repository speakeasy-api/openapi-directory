/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Detected advertiser and brand information.
 */
export class AdvertiserAndBrand extends SpeakeasyBase {
  /**
   * See https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt for the list of possible values. Can be used to filter the response of the creatives.list method.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "advertiserId" })
  advertiserId?: string;

  /**
   * Advertiser name. Can be used to filter the response of the creatives.list method.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "advertiserName" })
  advertiserName?: string;

  /**
   * Detected brand ID or zero if no brand has been detected. See https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt for the list of possible values. Can be used to filter the response of the creatives.list method.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "brandId" })
  brandId?: string;

  /**
   * Brand name. Can be used to filter the response of the creatives.list method.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "brandName" })
  brandName?: string;
}
