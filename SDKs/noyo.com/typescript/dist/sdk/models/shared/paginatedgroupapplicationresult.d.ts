import { SpeakeasyBase } from "../../../internal/utils";
import { GroupApplicationResult } from "./groupapplicationresult";
/**
 * Metadata associated with the response data
 */
export declare class PaginatedGroupApplicationResultMeta extends SpeakeasyBase {
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
 * Successful Response - Returns all matching Applications
 */
export declare class PaginatedGroupApplicationResult extends SpeakeasyBase {
    /**
     * Metadata associated with the response data
     */
    meta: PaginatedGroupApplicationResultMeta;
    /**
     * List of group application results
     */
    response: GroupApplicationResult[];
}
