import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { City } from "./city";
import { Country } from "./country";
import { Dma } from "./dma";
import { ExternalLink } from "./externallink";
import { Image } from "./image";
import { Location } from "./location";
import { Market } from "./market";
import { Social } from "./social";
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
     * Venue accessible seating detail
     */
    accessibleSeatingDetail?: string;
    /**
     * Additional information of the entity
     */
    additionalInfo?: string;
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
     * Description's of the entity
     */
    description?: string;
    distance?: number;
    /**
     * The list of associated DMAs (Designated Market Areas) of the venue
     */
    dma?: Dma[];
    /**
     * List of external links
     */
    externalLinks?: Record<string, ExternalLink[]>;
    /**
     * Venue general information
     */
    generalInfo?: VenueGeneralInfo;
    /**
     * Unique id of the entity in the discovery API
     */
    id: string;
    /**
     * Images of the entity
     */
    images?: Image[];
    /**
     * Locale in which the content is returned
     */
    locale?: string;
    /**
     * Location
     */
    location?: Location;
    /**
     * Markets of the venue
     */
    markets?: Market[];
    /**
     * Name of the entity
     */
    name?: string;
    /**
     * Venue parking info
     */
    parkingDetail?: string;
    /**
     * Postal code / zipcode of the venue
     */
    postalCode?: string;
    /**
     * Social networks data
     */
    social?: Social;
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
     * number of upcoming events
     */
    upcomingEvents?: Record<string, number>;
    /**
     * URL of a web site detail page of the entity
     */
    url?: string;
}
