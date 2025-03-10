/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Describing the ARP neighbor entries seen on this link
 */
export class InterconnectDiagnosticsARPEntry extends SpeakeasyBase {
  /**
   * The IP address of this ARP neighbor.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ipAddress" })
  ipAddress?: string;

  /**
   * The MAC address of this ARP neighbor.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "macAddress" })
  macAddress?: string;
}
