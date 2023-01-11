import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WordConfidenceEnum {
    High = "High",
    Low = "Low"
}


// Word
/** 
 * An object representing a recognized word.
**/
export class Word extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox: number[];

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: WordConfidenceEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
