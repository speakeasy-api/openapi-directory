import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AnimatedGifTypeEnum {
    AnimatedGif = "animated_gif"
}


// AnimatedGif
/** 
 * This contains the list of the fields that are common to all media returned.
**/
export class AnimatedGif extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=media_key" })
  mediaKey?: string;

  @SpeakeasyMetadata({ data: "json, name=preview_image_url" })
  previewImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AnimatedGifTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
