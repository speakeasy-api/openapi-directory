import { SpeakeasyBase } from "../../../internal/utils";
import { GroupCoverageResult } from "./groupcoverageresult";
/**
 * Metadata associated with the response data
**/
export declare class PaginatedGroupCoverageResultMeta extends SpeakeasyBase {
    offset: number;
    pageNum: number;
    pageSize: number;
    totalRecords: number;
}
export declare class PaginatedGroupCoverageResult extends SpeakeasyBase {
    meta: PaginatedGroupCoverageResultMeta;
    response: GroupCoverageResult[];
}
