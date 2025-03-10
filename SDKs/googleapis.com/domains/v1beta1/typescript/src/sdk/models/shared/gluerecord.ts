/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Defines a host on your domain that is a DNS name server for your domain and/or other domains. Glue records are a way of making the IP address of a name server known, even when it serves DNS queries for its parent domain. For example, when `ns.example.com` is a name server for `example.com`, the host `ns.example.com` must have a glue record to break the circular DNS reference.
 */
export class GlueRecord extends SpeakeasyBase {
  /**
   * Required. Domain name of the host in Punycode format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "hostName" })
  hostName?: string;

  /**
   * List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. `198.51.100.1`). At least one of `ipv4_address` and `ipv6_address` must be set.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ipv4Addresses" })
  ipv4Addresses?: string[];

  /**
   * List of IPv6 addresses corresponding to this host in the standard hexadecimal format (e.g. `2001:db8::`). At least one of `ipv4_address` and `ipv6_address` must be set.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ipv6Addresses" })
  ipv6Addresses?: string[];
}
