import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Segment
/** 
 * Segment
**/
export class Segment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  name?: string;
}
