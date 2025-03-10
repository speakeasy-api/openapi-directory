/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GooglePrivacyDlpV2StorageMetadataLabel } from "./googleprivacydlpv2storagemetadatalabel";
import { Expose, Type } from "class-transformer";

/**
 * Type of metadata containing the finding.
 */
export enum GooglePrivacyDlpV2MetadataLocationTypeEnum {
  MetadatatypeUnspecified = "METADATATYPE_UNSPECIFIED",
  StorageMetadata = "STORAGE_METADATA",
}

/**
 * Metadata Location
 */
export class GooglePrivacyDlpV2MetadataLocation extends SpeakeasyBase {
  /**
   * Storage metadata label to indicate which metadata entry contains findings.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "storageLabel" })
  @Type(() => GooglePrivacyDlpV2StorageMetadataLabel)
  storageLabel?: GooglePrivacyDlpV2StorageMetadataLabel;

  /**
   * Type of metadata containing the finding.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GooglePrivacyDlpV2MetadataLocationTypeEnum;
}
