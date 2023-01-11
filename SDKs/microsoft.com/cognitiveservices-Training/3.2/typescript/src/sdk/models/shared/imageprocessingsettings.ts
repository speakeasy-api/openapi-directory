import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageProcessingSettings
/** 
 * Represents image preprocessing settings used by image augmentation.
**/
export class ImageProcessingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=augmentationMethods" })
  augmentationMethods?: Record<string, boolean>;
}
