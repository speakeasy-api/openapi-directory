import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Word } from "./word";



// Line
/** 
 * An object representing a recognized text line.
**/
export class Line extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: number[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=words", elemType: Word })
  words?: Word[];
}
