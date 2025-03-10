/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate.
 */
export class Peer extends SpeakeasyBase {
  /**
   * The IP address of the peer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ip" })
  ip?: string;

  /**
   * The labels associated with the peer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "labels" })
  labels?: Record<string, string>;

  /**
   * The network port of the peer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "port" })
  port?: string;

  /**
   * The identity of this peer. Similar to `Request.auth.principal`, but relative to the peer instead of the request. For example, the identity associated with a load balancer that forwarded the request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "principal" })
  principal?: string;

  /**
   * The CLDR country/region code associated with the above IP address. If the IP address is private, the `region_code` should reflect the physical location where this peer is running.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "regionCode" })
  regionCode?: string;
}
