import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Area } from "./area";
import { City } from "./city";
import { Country } from "./country";
import { Location } from "./location";
import { State } from "./state";



// Place
/** 
 * Place
**/
export class Place extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address?: Address;

  @SpeakeasyMetadata()
  area?: Area;

  @SpeakeasyMetadata()
  city?: City;

  @SpeakeasyMetadata()
  country?: Country;

  @SpeakeasyMetadata()
  location?: Location;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  postalCode?: string;

  @SpeakeasyMetadata()
  state?: State;
}
