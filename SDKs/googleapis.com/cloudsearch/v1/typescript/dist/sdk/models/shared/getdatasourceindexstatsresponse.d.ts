import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceIndexStats } from "./datasourceindexstats";
/**
 * Successful response
 */
export declare class GetDataSourceIndexStatsResponse extends SpeakeasyBase {
    /**
     * Average item count for the given date range for which billing is done.
     */
    averageIndexedItemCount?: string;
    /**
     * Summary of indexed item counts, one for each day in the requested range.
     */
    stats?: DataSourceIndexStats[];
}
