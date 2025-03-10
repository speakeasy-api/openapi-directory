/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Blacklist } from "./blacklist";
import { Expose, Type } from "class-transformer";

export class HostReputationResponse extends SpeakeasyBase {
  /**
   * The IP address or host name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "host" })
  host: string;

  /**
   * Is this host blacklisted
   */
  @SpeakeasyMetadata()
  @Expose({ name: "is-listed" })
  isListed: boolean;

  /**
   * The number of DNSBLs the host is listed on
   */
  @SpeakeasyMetadata()
  @Expose({ name: "list-count" })
  listCount: number;

  /**
   * Array of objects for each DNSBL checked
   */
  @SpeakeasyMetadata({ elemType: Blacklist })
  @Expose({ name: "lists" })
  @Type(() => Blacklist)
  lists: Blacklist[];
}
