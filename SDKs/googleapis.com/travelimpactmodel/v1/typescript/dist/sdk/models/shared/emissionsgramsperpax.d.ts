import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Grouped emissions per seating class results.
 */
export declare class EmissionsGramsPerPax extends SpeakeasyBase {
    /**
     * Emissions for one passenger in business class in grams. This field is always computed and populated, regardless of whether the aircraft has business class seats or not.
     */
    business?: number;
    /**
     * Emissions for one passenger in economy class in grams. This field is always computed and populated, regardless of whether the aircraft has economy class seats or not.
     */
    economy?: number;
    /**
     * Emissions for one passenger in first class in grams. This field is always computed and populated, regardless of whether the aircraft has first class seats or not.
     */
    first?: number;
    /**
     * Emissions for one passenger in premium economy class in grams. This field is always computed and populated, regardless of whether the aircraft has premium economy class seats or not.
     */
    premiumEconomy?: number;
}
