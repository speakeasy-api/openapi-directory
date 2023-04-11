import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerQueryStats } from "./customerquerystats";
/**
 * Successful response
 */
export declare class GetCustomerQueryStatsResponse extends SpeakeasyBase {
    stats?: CustomerQueryStats[];
    /**
     * Total successful query count (status code 200) for the given date range.
     */
    totalQueryCount?: string;
}
