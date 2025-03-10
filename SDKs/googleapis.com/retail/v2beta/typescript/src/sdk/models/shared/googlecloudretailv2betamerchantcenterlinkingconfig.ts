/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleCloudRetailV2betaMerchantCenterLink } from "./googlecloudretailv2betamerchantcenterlink";
import { Expose, Type } from "class-transformer";

/**
 * Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch.
 */
export class GoogleCloudRetailV2betaMerchantCenterLinkingConfig extends SpeakeasyBase {
  /**
   * Links between Merchant Center accounts and branches.
   */
  @SpeakeasyMetadata({ elemType: GoogleCloudRetailV2betaMerchantCenterLink })
  @Expose({ name: "links" })
  @Type(() => GoogleCloudRetailV2betaMerchantCenterLink)
  links?: GoogleCloudRetailV2betaMerchantCenterLink[];
}
