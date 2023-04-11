import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
export declare class GeocodeAddressResponse extends SpeakeasyBase {
    /**
     * The number of possible matching locations found
     */
    found: number;
    /**
     * Array of matching location objects
     */
    locations: Location[];
}
