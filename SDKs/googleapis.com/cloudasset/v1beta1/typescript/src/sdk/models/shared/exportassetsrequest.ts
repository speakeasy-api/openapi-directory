/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OutputConfig } from "./outputconfig";
import { Expose, Type } from "class-transformer";

/**
 * Asset content type. If not specified, no content but the asset name will be returned.
 */
export enum ExportAssetsRequestContentTypeEnum {
  ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
  Resource = "RESOURCE",
  IamPolicy = "IAM_POLICY",
}

/**
 * Export asset request.
 */
export class ExportAssetsRequest extends SpeakeasyBase {
  /**
   * A list of asset types of which to take a snapshot for. For example: "google.compute.Disk". If specified, only matching assets will be returned. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview) for all supported asset types.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "assetTypes" })
  assetTypes?: string[];

  /**
   * Asset content type. If not specified, no content but the asset name will be returned.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contentType" })
  contentType?: ExportAssetsRequestContentTypeEnum;

  /**
   * Output configuration for export assets destination.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "outputConfig" })
  @Type(() => OutputConfig)
  outputConfig?: OutputConfig;

  /**
   * Timestamp to take an asset snapshot. This can only be set to a timestamp between 2018-10-02 UTC (inclusive) and the current time. If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query may get different results.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "readTime" })
  readTime?: string;
}
