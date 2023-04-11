import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerSearchApplicationStats } from "./customersearchapplicationstats";
/**
 * Response format for search application stats for a customer.
 */
export declare class GetCustomerSearchApplicationStatsResponse extends SpeakeasyBase {
    /**
     * Average search application count for the given date range.
     */
    averageSearchApplicationCount?: string;
    /**
     * Search application stats by date.
     */
    stats?: CustomerSearchApplicationStats[];
}
