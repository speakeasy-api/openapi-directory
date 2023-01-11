import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum EventTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * Event
**/
export declare class Event extends SpeakeasyBase {
    active?: boolean;
    additionalInfos?: Record<string, string>;
    attractions?: Attraction[];
    classifications?: Classification[];
    dates?: EventDates;
    descriptions?: Record<string, string>;
    discoverable?: boolean;
    distance?: number;
    images?: Image[];
    infos?: Record<string, string>;
    location?: Location;
    names?: Record<string, string>;
    place?: Place;
    pleaseNotes?: Record<string, string>;
    priceRanges?: PriceRange[];
    promoter?: Promoter;
    publicVisibility?: PublicVisibility;
    references?: Record<string, string>;
    relationships?: Record<string, any>[];
    sales?: EventSalesDates;
    source?: Source;
    test?: boolean;
    type: EventTypeEnum;
    units?: string;
    url?: string;
    venue?: Venue;
    version?: number;
}
