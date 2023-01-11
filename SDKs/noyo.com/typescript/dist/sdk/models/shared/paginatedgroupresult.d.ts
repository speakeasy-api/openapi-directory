import { SpeakeasyBase } from "../../../internal/utils";
import { GroupResult } from "./groupresult";
/**
 * Metadata associated with the response data
**/
export declare class PaginatedGroupResultMeta extends SpeakeasyBase {
    offset: number;
    pageNum: number;
    pageSize: number;
    totalRecords: number;
}
export declare class PaginatedGroupResult extends SpeakeasyBase {
    meta: PaginatedGroupResultMeta;
    response: GroupResult[];
}
