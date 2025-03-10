/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { NetworkEndpoint } from "./networkendpoint";
import { Expose, Type } from "class-transformer";

export class GlobalNetworkEndpointGroupsDetachEndpointsRequest extends SpeakeasyBase {
  /**
   * The list of network endpoints to be detached.
   */
  @SpeakeasyMetadata({ elemType: NetworkEndpoint })
  @Expose({ name: "networkEndpoints" })
  @Type(() => NetworkEndpoint)
  networkEndpoints?: NetworkEndpoint[];
}
