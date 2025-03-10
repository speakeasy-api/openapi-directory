/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InstanceReference } from "./instancereference";
import { Expose, Type } from "class-transformer";

export class TargetPoolsRemoveInstanceRequest extends SpeakeasyBase {
  /**
   * URLs of the instances to be removed from target pool.
   */
  @SpeakeasyMetadata({ elemType: InstanceReference })
  @Expose({ name: "instances" })
  @Type(() => InstanceReference)
  instances?: InstanceReference[];
}
