/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaControl } from "./googlecloudretailv2alphacontrol";
import { Expose, Type } from "class-transformer";

/**
 * Response for ListControls method.
 */
export class GoogleCloudRetailV2alphaListControlsResponse extends SpeakeasyBase {
  /**
   * All the Controls for a given catalog.
   */
  @SpeakeasyMetadata({ elemType: GoogleCloudRetailV2alphaControl })
  @Expose({ name: "controls" })
  @Type(() => GoogleCloudRetailV2alphaControl)
  controls?: GoogleCloudRetailV2alphaControl[];

  /**
   * Pagination token, if not returned indicates the last page.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPageToken" })
  nextPageToken?: string;
}
