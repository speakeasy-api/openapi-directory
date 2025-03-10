/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SecondaryIpRange extends SpeakeasyBase {
  /**
   * Secondary IP CIDR range in `x.x.x.x/y` format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ipCidrRange" })
  ipCidrRange?: string;

  /**
   * Name of the secondary IP range.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "rangeName" })
  rangeName?: string;
}
