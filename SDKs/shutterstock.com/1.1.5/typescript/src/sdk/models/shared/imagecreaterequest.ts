import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageCreateRequest
/** 
 * Request to upload an image
**/
export class ImageCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base64_image" })
  base64Image: string;
}
