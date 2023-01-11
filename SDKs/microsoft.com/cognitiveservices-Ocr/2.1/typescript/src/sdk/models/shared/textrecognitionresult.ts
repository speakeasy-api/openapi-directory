import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Line } from "./line";


export enum TextRecognitionResultUnitEnum {
    Pixel = "pixel",
    Inch = "inch"
}


// TextRecognitionResult
/** 
 * An object representing a recognized text region
**/
export class TextRecognitionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clockwiseOrientation" })
  clockwiseOrientation?: number;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=lines", elemType: Line })
  lines: Line[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: TextRecognitionResultUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
