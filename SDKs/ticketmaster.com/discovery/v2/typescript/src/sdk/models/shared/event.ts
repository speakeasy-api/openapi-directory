import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Accessibility } from "./accessibility";
import { Classification } from "./classification";
import { EventDates } from "./eventdates";
import { ExternalLink } from "./externallink";
import { Image } from "./image";
import { Location } from "./location";
import { Outlet } from "./outlet";
import { Place } from "./place";
import { PriceRange } from "./pricerange";
import { Product } from "./product";
import { Promoter } from "./promoter";
import { EventSalesDates } from "./eventsalesdates";
import { SeatMap } from "./seatmap";


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
  @SpeakeasyMetadata()
  accessibility?: Accessibility;

  @SpeakeasyMetadata()
  additionalInfo?: string;

  @SpeakeasyMetadata({ elemType: Classification })
  classifications?: Classification[];

  @SpeakeasyMetadata()
  dates?: EventDates;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  distance?: number;

  @SpeakeasyMetadata({ elemType: ExternalLink, elemDepth: 2 })
  externalLinks?: Record<string, ExternalLink[]>;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata({ elemType: Image })
  images?: Image[];

  @SpeakeasyMetadata()
  info?: string;

  @SpeakeasyMetadata()
  locale?: string;

  @SpeakeasyMetadata()
  location?: Location;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata({ elemType: Outlet })
  outlets?: Outlet[];

  @SpeakeasyMetadata()
  place?: Place;

  @SpeakeasyMetadata()
  pleaseNote?: string;

  @SpeakeasyMetadata({ elemType: PriceRange })
  priceRanges?: PriceRange[];

  @SpeakeasyMetadata({ elemType: Product })
  products?: Product[];

  @SpeakeasyMetadata()
  promoter?: Promoter;

  @SpeakeasyMetadata({ elemType: Promoter })
  promoters?: Promoter[];

  @SpeakeasyMetadata()
  sales?: EventSalesDates;

  @SpeakeasyMetadata()
  seatmap?: SeatMap;

  @SpeakeasyMetadata()
  test?: boolean;

  @SpeakeasyMetadata()
  type: EventTypeEnum;

  @SpeakeasyMetadata()
  units?: string;

  @SpeakeasyMetadata()
  url?: string;
}
