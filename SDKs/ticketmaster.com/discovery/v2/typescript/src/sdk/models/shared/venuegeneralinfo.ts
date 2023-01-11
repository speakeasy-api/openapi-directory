import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VenueGeneralInfo
/** 
 * Venue general information
**/
export class VenueGeneralInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  childRule?: string;

  @SpeakeasyMetadata()
  generalRule?: string;
}
