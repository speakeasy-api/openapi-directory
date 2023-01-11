import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageTagCreateEntry
/** 
 * Entry associating a tag to an image.
**/
export class ImageTagCreateEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageId" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "json, name=tagId" })
  tagId?: string;
}
