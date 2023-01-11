import { SpeakeasyBase } from "../../../internal/utils";
import { AgentLocationResult } from "./agentlocationresult";
/**
 * Metadata associated with the response data
**/
export declare class PaginatedAgentLocationResultMeta extends SpeakeasyBase {
    offset: number;
    pageNum: number;
    pageSize: number;
    totalRecords: number;
}
export declare class PaginatedAgentLocationResult extends SpeakeasyBase {
    meta: PaginatedAgentLocationResultMeta;
    response: AgentLocationResult[];
}
