import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Area } from "./area";
import { City } from "./city";
import { Country } from "./country";
import { Location } from "./location";
import { State } from "./state";
/**
 * Place
 */
export declare class Place extends SpeakeasyBase {
    /**
     * Address
     */
    address?: Address;
    /**
     * Area
     */
    area?: Area;
    /**
     * City
     */
    city?: City;
    /**
     * Country
     */
    country?: Country;
    /**
     * Location
     */
    location?: Location;
    /**
     * Name of the entity
     */
    name?: string;
    /**
     * Postal code / zipcode of the place
     */
    postalCode?: string;
    /**
     * State
     */
    state?: State;
}
