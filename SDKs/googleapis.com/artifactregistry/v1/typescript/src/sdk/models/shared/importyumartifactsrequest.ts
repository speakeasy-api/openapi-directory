/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ImportYumArtifactsGcsSource } from "./importyumartifactsgcssource";
import { Expose, Type } from "class-transformer";

/**
 * The request to import new yum artifacts.
 */
export class ImportYumArtifactsRequest extends SpeakeasyBase {
  /**
   * Google Cloud Storage location where the artifacts currently reside.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "gcsSource" })
  @Type(() => ImportYumArtifactsGcsSource)
  gcsSource?: ImportYumArtifactsGcsSource;
}
