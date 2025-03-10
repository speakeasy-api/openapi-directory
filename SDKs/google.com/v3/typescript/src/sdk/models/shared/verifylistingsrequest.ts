/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Request message for VRPartnerListingVerificationService.VerifyPartnerListings.
 */
export class VerifyListingsRequest extends SpeakeasyBase {
  /**
   * A listing that follows the XML format specified in https://developers.google.com/hotels/hotel-prices/xml-reference/hotel-list-feed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "xmlListing" })
  xmlListing?: string;
}
