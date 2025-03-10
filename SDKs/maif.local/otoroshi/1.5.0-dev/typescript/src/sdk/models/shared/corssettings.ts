/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The configuration for cors support
 */
export class CorsSettings extends SpeakeasyBase {
  /**
   * Allow to pass credentials
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allowCredentials" })
  allowCredentials: boolean;

  /**
   * The cors allowed headers
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allowHeaders" })
  allowHeaders: string[];

  /**
   * The cors allowed methods
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allowMethods" })
  allowMethods: string[];

  /**
   * The cors allowed origin
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allowOrigin" })
  allowOrigin: string;

  /**
   * Whether or not cors is enabled
   */
  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled: boolean;

  /**
   * The cors excluded patterns
   */
  @SpeakeasyMetadata()
  @Expose({ name: "excludedPatterns" })
  excludedPatterns: string[];

  /**
   * The cors exposed header
   */
  @SpeakeasyMetadata()
  @Expose({ name: "exposeHeaders" })
  exposeHeaders: string[];

  /**
   * Cors max age
   */
  @SpeakeasyMetadata()
  @Expose({ name: "maxAge" })
  maxAge: number;
}
