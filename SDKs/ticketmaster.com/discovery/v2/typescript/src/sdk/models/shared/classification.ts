import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Level } from "./level";
import { Segment } from "./segment";



// Classification
/** 
 * Classification
**/
export class Classification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  genre?: Level;

  @SpeakeasyMetadata()
  primary?: boolean;

  @SpeakeasyMetadata()
  segment?: Segment;

  @SpeakeasyMetadata()
  subGenre?: Level;

  @SpeakeasyMetadata()
  subType?: Level;

  @SpeakeasyMetadata()
  type?: Level;
}
