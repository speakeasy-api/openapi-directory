/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";
import { GoogleCloudChannelV1TransferEligibility } from "./googlecloudchannelv1transfereligibility";
import { Expose, Type } from "class-transformer";

/**
 * TransferableSku represents information a reseller needs to view existing provisioned services for a customer that they do not own. Read-only.
 */
export class GoogleCloudChannelV1TransferableSku extends SpeakeasyBase {
  /**
   * Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "legacySku" })
  @Type(() => GoogleCloudChannelV1Sku)
  legacySku?: GoogleCloudChannelV1Sku;

  /**
   * Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sku" })
  @Type(() => GoogleCloudChannelV1Sku)
  sku?: GoogleCloudChannelV1Sku;

  /**
   * Specifies transfer eligibility of a SKU.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "transferEligibility" })
  @Type(() => GoogleCloudChannelV1TransferEligibility)
  transferEligibility?: GoogleCloudChannelV1TransferEligibility;
}
