import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum VenueTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * Venue
**/
export declare class Venue extends SpeakeasyBase {
    accessibleSeatingDetail?: string;
    additionalInfo?: string;
    address?: Address;
    boxOfficeInfo?: VenueBoxOfficeInfo;
    city?: City;
    country?: Country;
    currency?: string;
    description?: string;
    distance?: number;
    dma?: Dma[];
    externalLinks?: Record<string, ExternalLink[]>;
    generalInfo?: VenueGeneralInfo;
    id: string;
    images?: Image[];
    locale?: string;
    location?: Location;
    markets?: Market[];
    name?: string;
    parkingDetail?: string;
    postalCode?: string;
    social?: Social;
    state?: State;
    test?: boolean;
    timezone?: string;
    type: VenueTypeEnum;
    units?: string;
    upcomingEvents?: Record<string, number>;
    url?: string;
}
