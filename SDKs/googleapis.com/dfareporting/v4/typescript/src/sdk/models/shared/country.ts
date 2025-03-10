/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Contains information about a country that can be targeted by ads.
 */
export class Country extends SpeakeasyBase {
  /**
   * Country code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "countryCode" })
  countryCode?: string;

  /**
   * DART ID of this country. This is the ID used for targeting and generating reports.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dartId" })
  dartId?: string;

  /**
   * Identifies what kind of resource this is. Value: the fixed string "dfareporting#country".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  /**
   * Name of this country.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Whether ad serving supports secure servers in this country.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sslEnabled" })
  sslEnabled?: boolean;
}
