/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Site } from "./site";
import { Expose, Type } from "class-transformer";

/**
 * Response message for SiteService.ReplaceSites.
 */
export class ReplaceSitesResponse extends SpeakeasyBase {
  /**
   * The list of sites in the channel after replacing.
   */
  @SpeakeasyMetadata({ elemType: Site })
  @Expose({ name: "sites" })
  @Type(() => Site)
  sites?: Site[];
}
