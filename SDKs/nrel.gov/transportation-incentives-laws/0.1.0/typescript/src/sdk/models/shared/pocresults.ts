/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { Poc } from "./poc";

/**
 * Successful request
 */
export class PocResults extends SpeakeasyBase {
  /**
   * The parameters that were passed to the API
   */
  @SpeakeasyMetadata()
  inputs: any;

  /**
   * The identifying metadata.
   */
  @SpeakeasyMetadata()
  metadata: Metadata;

  /**
   * The array of Points of Contacts for the state requested
   */
  @SpeakeasyMetadata({ elemType: Poc })
  result: Poc[];
}
