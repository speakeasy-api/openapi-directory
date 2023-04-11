import { SpeakeasyBase } from "../../../internal/utils";
import { AgentLocationResult } from "./agentlocationresult";
/**
 * Metadata associated with the response data
 */
export declare class PaginatedAgentLocationResultMeta extends SpeakeasyBase {
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
 * Successful Response - Returns all matching Agents
 */
export declare class PaginatedAgentLocationResult extends SpeakeasyBase {
    /**
     * Metadata associated with the response data
     */
    meta: PaginatedAgentLocationResultMeta;
    /**
     * List of location results
     */
    response: AgentLocationResult[];
}
