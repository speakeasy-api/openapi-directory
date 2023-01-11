import { SpeakeasyBase } from "../../../internal/utils";
import { GroupApplicationResult } from "./groupapplicationresult";
/**
 * Metadata associated with the response data
**/
export declare class PaginatedGroupApplicationResultMeta extends SpeakeasyBase {
    offset: number;
    pageNum: number;
    pageSize: number;
    totalRecords: number;
}
export declare class PaginatedGroupApplicationResult extends SpeakeasyBase {
    meta: PaginatedGroupApplicationResultMeta;
    response: GroupApplicationResult[];
}
