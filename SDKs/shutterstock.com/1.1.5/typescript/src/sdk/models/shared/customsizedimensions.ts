import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomSizeDimensions
/** 
 * A custom height or a custom width to resize the image to, but not both (experimental)
**/
export class CustomSizeDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
