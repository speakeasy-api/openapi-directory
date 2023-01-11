import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Genre
/** 
 * Secondary Genre
**/
export class Genre extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  name?: string;
}
