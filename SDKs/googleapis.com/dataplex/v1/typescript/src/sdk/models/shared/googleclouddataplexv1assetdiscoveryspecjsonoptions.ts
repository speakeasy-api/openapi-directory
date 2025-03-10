/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Describe JSON data format.
 */
export class GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions extends SpeakeasyBase {
  /**
   * Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "disableTypeInference" })
  disableTypeInference?: boolean;

  /**
   * Optional. The character encoding of the data. The default is UTF-8.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "encoding" })
  encoding?: string;
}
