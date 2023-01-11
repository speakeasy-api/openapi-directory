import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoPreviewUrl
/** 
 * Video preview information
**/
export class VideoPreviewUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
