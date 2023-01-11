import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageSizeDetails } from "./imagesizedetails";
import { Thumbnail } from "./thumbnail";



// EditorialAssets
/** 
 * Asset information, including size and thumbnail URLs
**/
export class EditorialAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=medium_jpg" })
  mediumJpg?: ImageSizeDetails;

  @SpeakeasyMetadata({ data: "json, name=original" })
  original?: ImageSizeDetails;

  @SpeakeasyMetadata({ data: "json, name=small_jpg" })
  smallJpg?: ImageSizeDetails;

  @SpeakeasyMetadata({ data: "json, name=thumb_170" })
  thumb170?: Thumbnail;

  @SpeakeasyMetadata({ data: "json, name=thumb_220" })
  thumb220?: Thumbnail;

  @SpeakeasyMetadata({ data: "json, name=watermark_1500" })
  watermark1500?: Thumbnail;

  @SpeakeasyMetadata({ data: "json, name=watermark_450" })
  watermark450?: Thumbnail;
}
