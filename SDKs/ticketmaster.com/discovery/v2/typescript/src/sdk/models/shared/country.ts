import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Country
/** 
 * Country
**/
export class Country extends SpeakeasyBase {
  @SpeakeasyMetadata()
  countryCode?: string;

  @SpeakeasyMetadata()
  name?: string;
}
