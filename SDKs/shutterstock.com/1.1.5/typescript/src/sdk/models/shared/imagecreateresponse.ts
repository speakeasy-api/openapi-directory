import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageCreateResponse
/** 
 * Image upload information
**/
export class ImageCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
