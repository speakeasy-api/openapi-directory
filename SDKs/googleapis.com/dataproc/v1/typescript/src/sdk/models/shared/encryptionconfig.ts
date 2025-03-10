/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Encryption settings for the cluster.
 */
export class EncryptionConfig extends SpeakeasyBase {
  /**
   * Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "gcePdKmsKeyName" })
  gcePdKmsKeyName?: string;

  /**
   * Optional. The Cloud KMS key name to use for encrypting customer core content and cluster PD disk for all instances in the cluster.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kmsKey" })
  kmsKey?: string;
}
