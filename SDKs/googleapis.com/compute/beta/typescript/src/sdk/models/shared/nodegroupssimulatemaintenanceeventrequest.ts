/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class NodeGroupsSimulateMaintenanceEventRequest extends SpeakeasyBase {
  /**
   * Names of the nodes to go under maintenance simulation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nodes" })
  nodes?: string[];
}
