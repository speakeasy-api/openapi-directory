import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoSizeDetails } from "./videosizedetails";
import { Url } from "./url";
import { Urls } from "./urls";



// VideoAssets
/** 
 * Video asset information
**/
export class VideoAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=4k" })
  fourk?: VideoSizeDetails;

  @SpeakeasyMetadata({ data: "json, name=hd" })
  hd?: VideoSizeDetails;

  @SpeakeasyMetadata({ data: "json, name=preview_jpg" })
  previewJpg?: Url;

  @SpeakeasyMetadata({ data: "json, name=preview_mp4" })
  previewMp4?: Url;

  @SpeakeasyMetadata({ data: "json, name=preview_webm" })
  previewWebm?: Url;

  @SpeakeasyMetadata({ data: "json, name=sd" })
  sd?: VideoSizeDetails;

  @SpeakeasyMetadata({ data: "json, name=thumb_jpg" })
  thumbJpg?: Url;

  @SpeakeasyMetadata({ data: "json, name=thumb_jpgs" })
  thumbJpgs?: Urls;

  @SpeakeasyMetadata({ data: "json, name=thumb_mp4" })
  thumbMp4?: Url;

  @SpeakeasyMetadata({ data: "json, name=thumb_webm" })
  thumbWebm?: Url;

  @SpeakeasyMetadata({ data: "json, name=web" })
  web?: VideoSizeDetails;
}
