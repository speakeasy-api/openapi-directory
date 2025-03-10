/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Label object for Deployments
 */
export class DeploymentLabelEntry extends SpeakeasyBase {
  /**
   * Key of the label
   */
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  /**
   * Value of the label
   */
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
