import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessHoursPeriod } from "./businesshoursperiod";
/**
 * Represents the hours of operation for a business location.
 */
export declare class BusinessHours extends SpeakeasyBase {
    /**
     * The list of time periods during which the business is open. There may be at most 10
     *
     * @remarks
     * periods per day.
     */
    periods?: BusinessHoursPeriod[];
}
