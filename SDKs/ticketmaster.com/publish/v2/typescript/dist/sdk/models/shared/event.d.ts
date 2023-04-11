import { SpeakeasyBase } from "../../../internal/utils";
import { Attraction } from "./attraction";
import { Classification } from "./classification";
import { EventDates } from "./eventdates";
import { EventSalesDates } from "./eventsalesdates";
import { Image } from "./image";
import { Location } from "./location";
import { Place } from "./place";
import { PriceRange } from "./pricerange";
import { Promoter } from "./promoter";
import { PublicVisibility } from "./publicvisibility";
import { Source } from "./source";
import { Venue } from "./venue";
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
     * Indicate if the entity is active, inactive entity won't appear in Discovery API
     */
    active?: boolean;
    /**
     * Additional informations of the entity - multi-lingual fields
     */
    additionalInfos?: Record<string, string>;
    /**
     * Ordered Attraction related to the event
     */
    attractions?: Attraction[];
    /**
     * Event's classifications
     */
    classifications?: Classification[];
    /**
     * Event's Dates
     */
    dates?: EventDates;
    /**
     * Descriptions of the entity - multi-lingual fields
     */
    descriptions?: Record<string, string>;
    /**
     * True if the entity is dicoverable in discovery API
     */
    discoverable?: boolean;
    distance?: number;
    /**
     * Images of the entity
     */
    images?: Image[];
    /**
     * Any information related to the event - multi-lingual fields
     */
    infos?: Record<string, string>;
    /**
     * Location
     */
    location?: Location;
    /**
     * Names of the entity - multi-lingual fields
     */
    names?: Record<string, string>;
    /**
     * Place
     */
    place?: Place;
    /**
     * Any notes related to the event - multi-lingual fields
     */
    pleaseNotes?: Record<string, string>;
    /**
     * Price ranges of this event
     */
    priceRanges?: PriceRange[];
    /**
     * Promoter
     */
    promoter?: Promoter;
    /**
     * The class defines the public visibility period on the Discovery/Publish API.
     */
    publicVisibility?: PublicVisibility;
    /**
     * References of this entity in an other system. Reference is the exact same entity
     */
    references?: Record<string, string>;
    /**
     * Relationships on the entity, like if the entity is a duplicate of another one
     */
    relationships?: Record<string, any>[];
    /**
     * Event's Sales Dates
     */
    sales?: EventSalesDates;
    /**
     * Source
     */
    source?: Source;
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
    /**
     * Venue
     */
    venue?: Venue;
    /**
     * Version of the entity. Version is to avoid updated an entity with an older version
     */
    version?: number;
}
