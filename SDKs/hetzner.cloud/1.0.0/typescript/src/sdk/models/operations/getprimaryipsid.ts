/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetPrimaryIpsIdRequest extends SpeakeasyBase {
  /**
   * ID of the resource
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

/**
 * Resource type the Primary IP can be assigned to
 */
export enum GetPrimaryIpsIdPrimaryIPResponsePrimaryIPAssigneeTypeEnum {
  Server = "server",
}

export class GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenterLocation extends SpeakeasyBase {
  /**
   * City the Location is closest to
   */
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city: string;

  /**
   * ISO 3166-1 alpha-2 code of the country the Location resides in
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country: string;

  /**
   * Description of the Location
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  /**
   * ID of the Location
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  /**
   * Latitude of the city closest to the Location
   */
  @SpeakeasyMetadata()
  @Expose({ name: "latitude" })
  latitude: number;

  /**
   * Longitude of the city closest to the Location
   */
  @SpeakeasyMetadata()
  @Expose({ name: "longitude" })
  longitude: number;

  /**
   * Unique identifier of the Location
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * Name of network zone this Location resides in
   */
  @SpeakeasyMetadata()
  @Expose({ name: "network_zone" })
  networkZone: string;
}

/**
 * The Server types the Datacenter can handle
 */
export class GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenterServerTypes extends SpeakeasyBase {
  /**
   * IDs of Server types that are supported and for which the Datacenter has enough resources left
   */
  @SpeakeasyMetadata()
  @Expose({ name: "available" })
  available: number[];

  /**
   * IDs of Server types that are supported and for which the Datacenter has enough resources left
   */
  @SpeakeasyMetadata()
  @Expose({ name: "available_for_migration" })
  availableForMigration: number[];

  /**
   * IDs of Server types that are supported in the Datacenter
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supported" })
  supported: number[];
}

/**
 * Datacenter this Primary IP is located at
 */
export class GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenter extends SpeakeasyBase {
  /**
   * Description of the Datacenter
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  /**
   * ID of the Resource
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  @Type(() => GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenterLocation)
  location: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenterLocation;

  /**
   * Unique identifier of the Datacenter
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * The Server types the Datacenter can handle
   */
  @SpeakeasyMetadata()
  @Expose({ name: "server_types" })
  @Type(() => GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenterServerTypes)
  serverTypes: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenterServerTypes;
}

export class GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDnsPtr extends SpeakeasyBase {
  /**
   * DNS pointer for the specific IP address
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dns_ptr" })
  dnsPtr: string;

  /**
   * Single IPv4 or IPv6 address
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ip" })
  ip: string;
}

/**
 * Protection configuration for the Resource
 */
export class GetPrimaryIpsIdPrimaryIPResponsePrimaryIPProtection extends SpeakeasyBase {
  /**
   * If true, prevents the Resource from being deleted
   */
  @SpeakeasyMetadata()
  @Expose({ name: "delete" })
  delete: boolean;
}

/**
 * Type of the Primary IP
 */
export enum GetPrimaryIpsIdPrimaryIPResponsePrimaryIPTypeEnum {
  Ipv4 = "ipv4",
  Ipv6 = "ipv6",
}

export class GetPrimaryIpsIdPrimaryIPResponsePrimaryIP extends SpeakeasyBase {
  /**
   * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
   */
  @SpeakeasyMetadata()
  @Expose({ name: "assignee_id" })
  assigneeId: number;

  /**
   * Resource type the Primary IP can be assigned to
   */
  @SpeakeasyMetadata()
  @Expose({ name: "assignee_type" })
  assigneeType: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPAssigneeTypeEnum;

  /**
   * Delete this Primary IP when the resource it is assigned to is deleted
   */
  @SpeakeasyMetadata()
  @Expose({ name: "auto_delete" })
  autoDelete: boolean;

  /**
   * Whether the IP is blocked
   */
  @SpeakeasyMetadata()
  @Expose({ name: "blocked" })
  blocked: boolean;

  /**
   * Point in time when the Resource was created (in ISO-8601 format)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  created: string;

  /**
   * Datacenter this Primary IP is located at
   */
  @SpeakeasyMetadata()
  @Expose({ name: "datacenter" })
  @Type(() => GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenter)
  datacenter: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenter;

  /**
   * Array of reverse DNS entries
   */
  @SpeakeasyMetadata({
    elemType: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDnsPtr,
  })
  @Expose({ name: "dns_ptr" })
  @Type(() => GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDnsPtr)
  dnsPtr: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDnsPtr[];

  /**
   * ID of the Resource
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  /**
   * IP address
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ip" })
  ip: string;

  /**
   * User-defined labels (key-value pairs)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "labels" })
  labels: Record<string, string>;

  /**
   * Name of the Resource. Must be unique per Project.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * Protection configuration for the Resource
   */
  @SpeakeasyMetadata()
  @Expose({ name: "protection" })
  @Type(() => GetPrimaryIpsIdPrimaryIPResponsePrimaryIPProtection)
  protection: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPProtection;

  /**
   * Type of the Primary IP
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPTypeEnum;
}

/**
 * The `primary_ip` key contains a Primary IP object
 */
export class GetPrimaryIpsIdPrimaryIPResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "primary_ip" })
  @Type(() => GetPrimaryIpsIdPrimaryIPResponsePrimaryIP)
  primaryIp: GetPrimaryIpsIdPrimaryIPResponsePrimaryIP;
}

export class GetPrimaryIpsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * The `primary_ip` key contains a Primary IP object
   */
  @SpeakeasyMetadata()
  primaryIPResponse?: GetPrimaryIpsIdPrimaryIPResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
