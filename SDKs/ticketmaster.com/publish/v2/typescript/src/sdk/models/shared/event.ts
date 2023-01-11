import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attraction } from "./attraction";
import { Classification } from "./classification";
import { EventDates } from "./eventdates";
import { Image } from "./image";
import { Location } from "./location";
import { Place } from "./place";
import { PriceRange } from "./pricerange";
import { Promoter } from "./promoter";
import { PublicVisibility } from "./publicvisibility";
import { EventSalesDates } from "./eventsalesdates";
import { Source } from "./source";
import { Venue } from "./venue";


export enum EventTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}


// Event
/** 
 * Event
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=additionalInfos" })
  additionalInfos?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=attractions", elemType: Attraction })
  attractions?: Attraction[];

  @SpeakeasyMetadata({ data: "json, name=classifications", elemType: Classification })
  classifications?: Classification[];

  @SpeakeasyMetadata({ data: "json, name=dates" })
  dates?: EventDates;

  @SpeakeasyMetadata({ data: "json, name=descriptions" })
  descriptions?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=discoverable" })
  discoverable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: Image })
  images?: Image[];

  @SpeakeasyMetadata({ data: "json, name=infos" })
  infos?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=place" })
  place?: Place;

  @SpeakeasyMetadata({ data: "json, name=pleaseNotes" })
  pleaseNotes?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=priceRanges", elemType: PriceRange })
  priceRanges?: PriceRange[];

  @SpeakeasyMetadata({ data: "json, name=promoter" })
  promoter?: Promoter;

  @SpeakeasyMetadata({ data: "json, name=publicVisibility" })
  publicVisibility?: PublicVisibility;

  @SpeakeasyMetadata({ data: "json, name=references" })
  references?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=sales" })
  sales?: EventSalesDates;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;

  @SpeakeasyMetadata({ data: "json, name=test" })
  test?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: EventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=venue" })
  venue?: Venue;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
