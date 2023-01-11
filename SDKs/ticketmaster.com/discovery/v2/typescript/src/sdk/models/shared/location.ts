import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Location
/** 
 * Location
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata()
  latitude?: number;

  @SpeakeasyMetadata()
  longitude?: number;
}
