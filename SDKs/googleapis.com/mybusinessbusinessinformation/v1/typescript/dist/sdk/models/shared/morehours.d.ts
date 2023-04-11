import { SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";
/**
 * The time periods during which a location is open for certain types of business.
 */
export declare class MoreHours extends SpeakeasyBase {
    /**
     * Required. Type of hours. Clients should call {#link businessCategories:BatchGet} to get supported hours types for categories of their locations.
     */
    hoursTypeId?: string;
    /**
     * Required. A collection of times that this location is open. Each period represents a range of hours when the location is open during the week.
     */
    periods?: TimePeriod[];
}
