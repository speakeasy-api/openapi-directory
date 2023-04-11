import { SpeakeasyBase } from "../../../internal/utils";
import { Accessibility } from "./accessibility";
import { Classification } from "./classification";
import { EventDates } from "./eventdates";
import { EventSalesDates } from "./eventsalesdates";
import { ExternalLink } from "./externallink";
import { Image } from "./image";
import { Location } from "./location";
import { Outlet } from "./outlet";
import { Place } from "./place";
import { PriceRange } from "./pricerange";
import { Product } from "./product";
import { Promoter } from "./promoter";
import { SeatMap } from "./seatmap";
/**
 * Type of the entity
 */
export declare enum EventTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * Event
 */
export declare class Event extends SpeakeasyBase {
    /**
     * Additional information for people who experience disabilities
     */
    accessibility?: Accessibility;
    /**
     * Additional information of the entity
     */
    additionalInfo?: string;
    /**
     * Event's classifications
     */
    classifications?: Classification[];
    /**
     * Event's Dates
     */
    dates?: EventDates;
    /**
     * Description's of the entity
     */
    description?: string;
    distance?: number;
    /**
     * List of external links
     */
    externalLinks?: Record<string, ExternalLink[]>;
    /**
     * Unique id of the entity in the discovery API
     */
    id: string;
    /**
     * Images of the entity
     */
    images?: Image[];
    /**
     * Any information related to the event
     */
    info?: string;
    /**
     * Locale in which the content is returned
     */
    locale?: string;
    /**
     * Location
     */
    location?: Location;
    /**
     * Name of the entity
     */
    name?: string;
    /**
     * Related outlets informations
     */
    outlets?: Outlet[];
    /**
     * Place
     */
    place?: Place;
    /**
     * Any notes related to the event
     */
    pleaseNote?: string;
    /**
     * Price ranges of this event
     */
    priceRanges?: PriceRange[];
    /**
     * Related products informations
     */
    products?: Product[];
    /**
     * Promoter
     */
    promoter?: Promoter;
    /**
     * Event's promoters
     */
    promoters?: Promoter[];
    /**
     * Event's Sales Dates
     */
    sales?: EventSalesDates;
    /**
     * Seatmap
     */
    seatmap?: SeatMap;
    /**
     * Indicate if this is a test entity, by default test entities won't appear in discovery API
     */
    test?: boolean;
    /**
     * Type of the entity
     */
    type: EventTypeEnum;
    units?: string;
    /**
     * URL of a web site detail page of the entity
     */
    url?: string;
}
