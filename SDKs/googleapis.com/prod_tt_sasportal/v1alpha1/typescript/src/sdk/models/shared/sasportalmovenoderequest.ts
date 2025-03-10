/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Request for MoveNode.
 */
export class SasPortalMoveNodeRequest extends SpeakeasyBase {
  /**
   * Required. The name of the new parent resource node or customer to reparent the node under.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "destination" })
  destination?: string;
}
