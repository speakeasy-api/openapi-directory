/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { NetworkEndpoint } from "./networkendpoint";
import { Expose, Type } from "class-transformer";

export class NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter extends SpeakeasyBase {
  /**
   * The network endpoint.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "networkEndpoint" })
  @Type(() => NetworkEndpoint)
  networkEndpoint?: NetworkEndpoint;
}
