import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PreviewContentTypeEnum {
    AudioMp3 = "audio/mp3"
}


// Preview
/** 
 * Preview information
**/
export class Preview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: PreviewContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
