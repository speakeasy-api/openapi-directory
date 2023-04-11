import { SpeakeasyBase } from "../../../internal/utils";
import { CoveragePlanResult } from "./coverageplanresult";
/**
 * Metadata associated with the response data
 */
export declare class PaginatedCoveragePlanResultMeta extends SpeakeasyBase {
    /**
     * The offset of the first response record within the matching data set
     */
    offset: number;
    /**
     * The page number of the response records within the overall data set (1-based integer)
     */
    pageNum: number;
    /**
     * The maximum number of response records on each page of results
     */
    pageSize: number;
    /**
     * The total number of records in the entire matching data set
     */
    totalRecords: number;
}
/**
 * Successful Response - Returns all matching Coverage Plans
 */
export declare class PaginatedCoveragePlanResult extends SpeakeasyBase {
    /**
     * Metadata associated with the response data
     */
    meta: PaginatedCoveragePlanResultMeta;
    /**
     * List of coverage plan results
     */
    response: CoveragePlanResult[];
}
