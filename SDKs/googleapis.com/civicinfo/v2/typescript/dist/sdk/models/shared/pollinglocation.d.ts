import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleAddressType } from "./simpleaddresstype";
import { Source } from "./source";
/**
 * A location where a voter can vote. This may be an early vote site, an election day voting location, or a drop off location for a completed ballot.
 */
export declare class PollingLocation extends SpeakeasyBase {
    /**
     * A simple representation of an address.
     */
    address?: SimpleAddressType;
    /**
     * The last date that this early vote site or drop off location may be used. This field is not populated for polling locations.
     */
    endDate?: string;
    /**
     * Latitude of the location, in degrees north of the equator. Note this field may not be available for some locations.
     */
    latitude?: number;
    /**
     * Longitude of the location, in degrees east of the Prime Meridian. Note this field may not be available for some locations.
     */
    longitude?: number;
    /**
     * The name of the early vote site or drop off location. This field is not populated for polling locations.
     */
    name?: string;
    /**
     * Notes about this location (e.g. accessibility ramp or entrance to use).
     */
    notes?: string;
    /**
     * A description of when this location is open.
     */
    pollingHours?: string;
    /**
     * A list of sources for this location. If multiple sources are listed the data has been aggregated from those sources.
     */
    sources?: Source[];
    /**
     * The first date that this early vote site or drop off location may be used. This field is not populated for polling locations.
     */
    startDate?: string;
    /**
     * The services provided by this early vote site or drop off location. This field is not populated for polling locations.
     */
    voterServices?: string;
}
