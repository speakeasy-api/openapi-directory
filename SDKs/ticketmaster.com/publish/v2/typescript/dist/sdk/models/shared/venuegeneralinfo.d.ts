import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Venue general information
 */
export declare class VenueGeneralInfo extends SpeakeasyBase {
    /**
     * Venue children rules - multi-lingual fields
     */
    childRules?: Record<string, string>;
    /**
     * Venue general rules - multi-lingual fields
     */
    generalRules?: Record<string, string>;
}
