/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The VPC peering configuration is used to create VPC peering with the consumer's VPC.
 */
export class VpcPeeringConfig extends SpeakeasyBase {
  /**
   * Required. A free subnet for peering. (CIDR of /29)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subnet" })
  subnet?: string;

  /**
   * Required. Fully qualified name of the VPC that Database Migration Service will peer to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "vpcName" })
  vpcName?: string;
}
