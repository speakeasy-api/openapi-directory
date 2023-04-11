import { SpeakeasyBase } from "../../../internal/utils";
import { EmissionsGramsPerPax } from "./emissionsgramsperpax";
import { Flight } from "./flight";
/**
 * Direct flight with emission estimates.
 */
export declare class FlightWithEmissions extends SpeakeasyBase {
    /**
     * Grouped emissions per seating class results.
     */
    emissionsGramsPerPax?: EmissionsGramsPerPax;
    /**
     * All details related to a single request item for a direct flight emission estimates.
     */
    flight?: Flight;
}
