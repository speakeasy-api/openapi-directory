import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerIndexStats } from "./customerindexstats";
/**
 * Successful response
 */
export declare class GetCustomerIndexStatsResponse extends SpeakeasyBase {
    /**
     * Average item count for the given date range for which billing is done.
     */
    averageIndexedItemCount?: string;
    /**
     * Summary of indexed item counts, one for each day in the requested range.
     */
    stats?: CustomerIndexStats[];
}
