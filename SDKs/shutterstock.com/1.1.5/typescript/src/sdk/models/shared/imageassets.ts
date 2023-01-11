import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageSizeDetails } from "./imagesizedetails";
import { Thumbnail } from "./thumbnail";



// ImageAssets
/** 
 * Information about the assets that are part of an image
**/
export class ImageAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=huge_jpg" })
  hugeJpg?: ImageSizeDetails;

  @SpeakeasyMetadata({ data: "json, name=huge_thumb" })
  hugeThumb?: Thumbnail;

  @SpeakeasyMetadata({ data: "json, name=large_thumb" })
  largeThumb?: Thumbnail;

  @SpeakeasyMetadata({ data: "json, name=medium_jpg" })
  mediumJpg?: ImageSizeDetails;

  @SpeakeasyMetadata({ data: "json, name=preview" })
  preview?: Thumbnail;

  @SpeakeasyMetadata({ data: "json, name=preview_1000" })
  preview1000?: Thumbnail;

  @SpeakeasyMetadata({ data: "json, name=preview_1500" })
  preview1500?: Thumbnail;

  @SpeakeasyMetadata({ data: "json, name=small_jpg" })
  smallJpg?: ImageSizeDetails;

  @SpeakeasyMetadata({ data: "json, name=small_thumb" })
  smallThumb?: Thumbnail;

  @SpeakeasyMetadata({ data: "json, name=supersize_jpg" })
  supersizeJpg?: ImageSizeDetails;

  @SpeakeasyMetadata({ data: "json, name=vector_eps" })
  vectorEps?: ImageSizeDetails;
}
