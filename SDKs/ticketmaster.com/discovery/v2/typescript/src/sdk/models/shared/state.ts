import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// State
/** 
 * State
**/
export class State extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  stateCode?: string;
}
