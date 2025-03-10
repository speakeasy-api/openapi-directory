/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ResourceRecord } from "./resourcerecord";
import { SslSettings } from "./sslsettings";
import { Expose, Type } from "class-transformer";

/**
 * A domain serving an App Engine application.
 */
export class DomainMapping extends SpeakeasyBase {
  /**
   * Relative name of the domain serving the application. Example: example.com.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.@OutputOnly
   */
  @SpeakeasyMetadata({ elemType: ResourceRecord })
  @Expose({ name: "resourceRecords" })
  @Type(() => ResourceRecord)
  resourceRecords?: ResourceRecord[];

  /**
   * SSL configuration for a DomainMapping resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sslSettings" })
  @Type(() => SslSettings)
  sslSettings?: SslSettings;
}
