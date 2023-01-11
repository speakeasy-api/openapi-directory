import { SpeakeasyBase } from "../../../internal/utils";
import { AgentContactResult } from "./agentcontactresult";
/**
 * Metadata associated with the response data
**/
export declare class PaginatedAgentContactResultsMeta extends SpeakeasyBase {
    offset: number;
    pageNum: number;
    pageSize: number;
    totalRecords: number;
}
export declare class PaginatedAgentContactResults extends SpeakeasyBase {
    meta: PaginatedAgentContactResultsMeta;
    response: AgentContactResult[];
}
