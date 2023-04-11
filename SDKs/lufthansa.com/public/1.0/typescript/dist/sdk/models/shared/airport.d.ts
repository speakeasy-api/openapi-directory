import { SpeakeasyBase } from "../../../internal/utils";
import { Coordinate } from "./coordinate";
import { Name } from "./name";
/**
 * Container for airport names.
 */
export declare class AirportNames extends SpeakeasyBase {
    /**
     * Array: language specific full name of airport.
     */
    name?: Name[];
}
/**
 * Physical location of an airport. This data section is optional and therefore not always present.
 */
export declare class AirportPosition extends SpeakeasyBase {
    /**
     * Container for coordinates.
     */
    coordinate?: Coordinate;
}
/**
 * Array of all available airports or one airport matching the request.
 */
export declare class Airport extends SpeakeasyBase {
    /**
     * 3-letter IATA airport code, e.g. “TXL”.
     */
    airportCode?: string;
    /**
     * 3-letter IATA city code, e.g. “BER”.
     */
    cityCode?: string;
    /**
     * 2-letter ISO 3166-1 country code, e.g. “DE”.
     */
    countryCode?: string;
    /**
     *  “Airport”, “RailwayStation” or “BusStation”.
     */
    locationType?: string;
    /**
     * Container for airport names.
     */
    names?: AirportNames;
    /**
     * Physical location of an airport. This data section is optional and therefore not always present.
     */
    position?: AirportPosition;
    /**
     * Time zone name airport is in
     */
    timeZoneId?: string;
    /**
     * Hour offset of airport to UTC time zone
     */
    utcOffset?: number;
}
