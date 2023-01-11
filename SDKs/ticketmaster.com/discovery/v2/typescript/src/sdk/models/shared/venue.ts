import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { VenueBoxOfficeInfo } from "./venueboxofficeinfo";
import { City } from "./city";
import { Country } from "./country";
import { Dma } from "./dma";
import { ExternalLink } from "./externallink";
import { VenueGeneralInfo } from "./venuegeneralinfo";
import { Image } from "./image";
import { Location } from "./location";
import { Market } from "./market";
import { Social } from "./social";
import { State } from "./state";


export enum VenueTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}


// Venue
/** 
 * Venue
**/
export class Venue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessibleSeatingDetail?: string;

  @SpeakeasyMetadata()
  additionalInfo?: string;

  @SpeakeasyMetadata()
  address?: Address;

  @SpeakeasyMetadata()
  boxOfficeInfo?: VenueBoxOfficeInfo;

  @SpeakeasyMetadata()
  city?: City;

  @SpeakeasyMetadata()
  country?: Country;

  @SpeakeasyMetadata()
  currency?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  distance?: number;

  @SpeakeasyMetadata({ elemType: Dma })
  dma?: Dma[];

  @SpeakeasyMetadata({ elemType: ExternalLink, elemDepth: 2 })
  externalLinks?: Record<string, ExternalLink[]>;

  @SpeakeasyMetadata()
  generalInfo?: VenueGeneralInfo;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata({ elemType: Image })
  images?: Image[];

  @SpeakeasyMetadata()
  locale?: string;

  @SpeakeasyMetadata()
  location?: Location;

  @SpeakeasyMetadata({ elemType: Market })
  markets?: Market[];

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  parkingDetail?: string;

  @SpeakeasyMetadata()
  postalCode?: string;

  @SpeakeasyMetadata()
  social?: Social;

  @SpeakeasyMetadata()
  state?: State;

  @SpeakeasyMetadata()
  test?: boolean;

  @SpeakeasyMetadata()
  timezone?: string;

  @SpeakeasyMetadata()
  type: VenueTypeEnum;

  @SpeakeasyMetadata()
  units?: string;

  @SpeakeasyMetadata()
  upcomingEvents?: Record<string, number>;

  @SpeakeasyMetadata()
  url?: string;
}
