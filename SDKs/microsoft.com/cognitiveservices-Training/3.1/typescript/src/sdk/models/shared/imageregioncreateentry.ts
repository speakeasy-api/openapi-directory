import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageRegionCreateEntry
/** 
 * Entry associating a region to an image.
**/
export class ImageRegionCreateEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "json, name=imageId" })
  imageId: string;

  @SpeakeasyMetadata({ data: "json, name=left" })
  left: number;

  @SpeakeasyMetadata({ data: "json, name=tagId" })
  tagId: string;

  @SpeakeasyMetadata({ data: "json, name=top" })
  top: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width: number;
}
