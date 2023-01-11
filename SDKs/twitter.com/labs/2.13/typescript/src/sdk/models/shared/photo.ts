import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PhotoTypeEnum {
    Photo = "photo"
}


// Photo
/** 
 * This contains the list of the fields that are common to all media returned.
**/
export class Photo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=media_key" })
  mediaKey?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PhotoTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
