import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { City } from "./city";
import { Country } from "./country";
import { Dma } from "./dma";
import { Image } from "./image";
import { Location } from "./location";
import { Market } from "./market";
import { Social } from "./social";
import { Source } from "./source";
import { State } from "./state";
import { VenueBoxOfficeInfo } from "./venueboxofficeinfo";
import { VenueGeneralInfo } from "./venuegeneralinfo";
/**
 * Type of the entity
 */
export declare enum VenueTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * Venue
 */
export declare class Venue extends SpeakeasyBase {
    /**
     * Venue accessible seating details - multi-lingual fields
     */
    accessibleSeatingDetails?: Record<string, string>;
    /**
     * Indicate if the entity is active, inactive entity won't appear in Discovery API
     */
    active?: boolean;
    /**
     * Additional informations of the entity - multi-lingual fields
     */
    additionalInfos?: Record<string, string>;
    /**
     * Address
     */
    address?: Address;
    /**
     * Venue box office information
     */
    boxOfficeInfo?: VenueBoxOfficeInfo;
    /**
     * City
     */
    city?: City;
    /**
     * Country
     */
    country?: Country;
    /**
     * Default currency of ticket prices for events in this venue
     */
    currency?: string;
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
     * The list of associated DMAs (Designated Market Areas) of the venue
     */
    dma?: Dma[];
    /**
     * Venue general information
     */
    generalInfo?: VenueGeneralInfo;
    /**
     * Images of the entity
     */
    images?: Image[];
    /**
     * Location
     */
    location?: Location;
    /**
     * Markets of the venue
     */
    markets?: Market[];
    /**
     * Names of the entity - multi-lingual fields
     */
    names?: Record<string, string>;
    /**
     * Venue parking info - multi-lingual fields
     */
    parkingDetails?: Record<string, string>;
    /**
     * Postal code / zipcode of the venue
     */
    postalCode?: string;
    /**
     * References of this entity in an other system. Reference is the exact same entity
     */
    references?: Record<string, string>;
    /**
     * Relationships on the entity, like if the entity is a duplicate of another one
     */
    relationships?: Record<string, any>[];
    /**
     * Social networks data
     */
    social?: Social;
    /**
     * Source
     */
    source?: Source;
    /**
     * State
     */
    state?: State;
    /**
     * Indicate if this is a test entity, by default test entities won't appear in discovery API
     */
    test?: boolean;
    /**
     * Timezone of the venue
     */
    timezone?: string;
    /**
     * Type of the entity
     */
    type: VenueTypeEnum;
    units?: string;
    /**
     * URL of a web site detail page of the entity
     */
    url?: string;
    /**
     * Version of the entity. Version is to avoid updated an entity with an older version
     */
    version?: number;
}
