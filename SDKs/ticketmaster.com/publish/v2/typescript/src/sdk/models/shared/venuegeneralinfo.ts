import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VenueGeneralInfo
/** 
 * Venue general information
**/
export class VenueGeneralInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childRules" })
  childRules?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=generalRules" })
  generalRules?: Record<string, string>;
}
