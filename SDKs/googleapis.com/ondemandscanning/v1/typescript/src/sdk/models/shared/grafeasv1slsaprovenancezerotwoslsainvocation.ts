/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource } from "./grafeasv1slsaprovenancezerotwoslsaconfigsource";
import { Expose, Type } from "class-transformer";

/**
 * Identifies the event that kicked off the build.
 */
export class GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation extends SpeakeasyBase {
  /**
   * Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "configSource" })
  @Type(() => GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource)
  configSource?: GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource;

  @SpeakeasyMetadata()
  @Expose({ name: "environment" })
  environment?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "parameters" })
  parameters?: Record<string, any>;
}
