import { SpeakeasyBase } from "../../../internal/utils";
import { AgentResult } from "./agentresult";
/**
 * Metadata associated with the response data
**/
export declare class PaginatedAgentResultMeta extends SpeakeasyBase {
    offset: number;
    pageNum: number;
    pageSize: number;
    totalRecords: number;
}
export declare class PaginatedAgentResult extends SpeakeasyBase {
    meta: PaginatedAgentResultMeta;
    response: AgentResult[];
}
