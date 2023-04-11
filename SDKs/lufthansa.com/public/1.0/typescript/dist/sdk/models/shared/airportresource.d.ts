import { SpeakeasyBase } from "../../../internal/utils";
import { Airport } from "./airport";
import { Link } from "./link";
/**
 * Container for airport elements.
 */
export declare class AirportResourceAirports extends SpeakeasyBase {
    /**
     * Array of all available airports or one airport matching the request.
     */
    airport?: Airport;
}
/**
 * Container for meta links.
 */
export declare class AirportResourceMeta extends SpeakeasyBase {
    atVersion?: string;
    /**
     * Array: links to resource itself and other related resources.
     */
    link?: Link[];
    totalCount?: number;
}
/**
 * Root element of airport response.
 */
export declare class AirportResource extends SpeakeasyBase {
    /**
     * Container for airport elements.
     */
    airports?: AirportResourceAirports;
    /**
     * Container for meta links.
     */
    meta?: AirportResourceMeta;
}
