import { SpeakeasyBase } from "../../../internal/utils";
import { MemberElectionResult } from "./memberelectionresult";
/**
 * Metadata associated with the response data
**/
export declare class PaginatedMemberElectionResultMeta extends SpeakeasyBase {
    offset: number;
    pageNum: number;
    pageSize: number;
    totalRecords: number;
}
export declare class PaginatedMemberElectionResult extends SpeakeasyBase {
    meta: PaginatedMemberElectionResultMeta;
    response: MemberElectionResult[];
}
