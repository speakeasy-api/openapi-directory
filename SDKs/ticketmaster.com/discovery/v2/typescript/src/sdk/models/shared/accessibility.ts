import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Accessibility
/** 
 * Additional information for people who experience disabilities
**/
export class Accessibility extends SpeakeasyBase {
  @SpeakeasyMetadata()
  info?: string;
}
