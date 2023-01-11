import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum EventTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * Event
**/
export declare class Event extends SpeakeasyBase {
    accessibility?: Accessibility;
    additionalInfo?: string;
    classifications?: Classification[];
    dates?: EventDates;
    description?: string;
    distance?: number;
    externalLinks?: Record<string, ExternalLink[]>;
    id: string;
    images?: Image[];
    info?: string;
    locale?: string;
    location?: Location;
    name?: string;
    outlets?: Outlet[];
    place?: Place;
    pleaseNote?: string;
    priceRanges?: PriceRange[];
    products?: Product[];
    promoter?: Promoter;
    promoters?: Promoter[];
    sales?: EventSalesDates;
    seatmap?: SeatMap;
    test?: boolean;
    type: EventTypeEnum;
    units?: string;
    url?: string;
}
