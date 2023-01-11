import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoSizeDetails } from "./videosizedetails";
import { VideoPreviewUrl } from "./videopreviewurl";



// EditorialVideoAssets
/** 
 * Asset information, including size and thumbnail URLs
**/
export class EditorialVideoAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=original" })
  original?: VideoSizeDetails;

  @SpeakeasyMetadata({ data: "json, name=preview_mp4" })
  previewMp4?: VideoPreviewUrl;

  @SpeakeasyMetadata({ data: "json, name=preview_webm" })
  previewWebm?: VideoPreviewUrl;

  @SpeakeasyMetadata({ data: "json, name=thumb_jpg" })
  thumbJpg?: VideoPreviewUrl;
}
