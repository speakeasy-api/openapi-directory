/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Reference to the photo binary data of a `MediaItem` uploaded through the Google My Business API. Create a data ref using StartUploadMediaItemData, and use this ref when uploading bytes to [UpdateMedia] and subsequently calling CreateMediaItem.
 */
export class MediaItemDataRef extends SpeakeasyBase {
  /**
   * The unique ID for this media item's binary data. Used to upload the photo data with [UpdateMedia] and when creating a new media item from those bytes with CreateMediaItem. Example of uploading bytes: `curl -X POST -T{path_to_file} "http://mybusiness.googleapis.com/upload/v1/media/{resource_name}?upload_type=media"` For CreateMediaItem calls, set this as the `MediaItem` `data_ref`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resourceName" })
  resourceName?: string;
}
